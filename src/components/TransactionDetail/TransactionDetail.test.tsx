import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import TransactionDetail from './TransactionDetail';
import { transactionsInitialState } from 'stores/transactions/transactionsReducers';
import ITransaction from 'models/ITransaction';
import { theme } from 'globalStyles';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store: ReturnType<typeof mockStore>;

const mockTransaction: ITransaction = {
  id: '5f89f9f2f318e70ff298f528',
  title: 'Movimentação interna',
  description: 'eu officia laborum labore aute',
  status: 'processed',
  amount: 25092.8,
  date: '2016-08-25',
  from: 'Férias',
  to: 'Trade',
};

const setup = () =>
  render(<TransactionDetail />, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    ),
  });

describe('TransactionDetail component', () => {
  beforeEach(() => {
    store = mockStore({
      transactions: {
        ...transactionsInitialState,
        detail: mockTransaction,
      },
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render correctly', () => {
    const { getByTestId } = setup();
    expect(getByTestId(/transaction-detail/i)).toBeTruthy();
  });

  it('Should return null if detail is null', () => {
    store = mockStore({
      transactions: {
        ...transactionsInitialState,
        detail: null,
      },
    });
    const { queryByTestId } = setup();
    expect(queryByTestId(/transaction-detail/i)).toBeNull();
  });
});
