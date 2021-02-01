import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import TransactionList from './TransactionList';
import { transactionsInitialState } from 'stores/transactions/transactionsReducers';
import ITransaction from 'models/ITransaction';
import { theme } from 'globalStyles';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store: ReturnType<typeof mockStore>;

const mockTransactions: ITransaction[] = [
  {
    id: '5f89f9f2f318e70ff298f528',
    title: 'Movimentação interna',
    description: 'eu officia laborum labore aute',
    status: 'processed',
    amount: 25092.8,
    date: '2016-08-25',
    from: 'Férias',
    to: 'Trade',
  },
  {
    id: '5f89f9f235a90e5336c796f7',
    title: 'Movimentação interna',
    description: 'labore id culpa magna minim',
    status: 'created',
    amount: 172513.46,
    date: '2020-04-29',
    from: 'Férias',
    to: 'Conta Warren',
  },
];
const mockShowTransactionDetail = jest.fn();

const setup = ({ showTransactionDetail }: React.ComponentProps<typeof TransactionList>) =>
  render(<TransactionList showTransactionDetail={showTransactionDetail} />, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    ),
  });

describe('TransactionList component', () => {
  beforeEach(() => {
    store = mockStore({
      transactions: {
        ...transactionsInitialState,
        list: mockTransactions,
      },
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render correctly', () => {
    const { getByTestId } = setup({ showTransactionDetail: mockShowTransactionDetail });
    expect(getByTestId(/transaction-list/i)).toBeTruthy();
  });

  it('Should return null if list is empty', () => {
    store = mockStore({
      transactions: {
        ...transactionsInitialState,
        list: [],
      },
    });
    const { queryByTestId } = setup({ showTransactionDetail: mockShowTransactionDetail });
    expect(queryByTestId(/transaction-list/i)).toBeNull();
  });

  it('Should return message if searched list is empty', () => {
    store = mockStore({
      transactions: {
        ...transactionsInitialState,
        list: mockTransactions,
        searchTerm: 'Foo',
      },
    });
    const { queryByTestId } = setup({ showTransactionDetail: mockShowTransactionDetail });
    expect(queryByTestId(/transaction-empty-list/i)).toBeTruthy();
  });

  it('Should return message if filtered list is empty', () => {
    store = mockStore({
      transactions: {
        ...transactionsInitialState,
        list: mockTransactions,
        filter: {
          status: 'processing',
        },
      },
    });
    const { queryByTestId } = setup({ showTransactionDetail: mockShowTransactionDetail });
    expect(queryByTestId(/transaction-empty-list/i)).toBeTruthy();
  });

  it('Should call showTransactionDetail correctly', () => {
    setup({
      showTransactionDetail: mockShowTransactionDetail,
    });
    fireEvent.click(screen.getAllByTestId(/table-row/i)[1]);
    expect(mockShowTransactionDetail).toHaveBeenCalledTimes(1);
  });
});
