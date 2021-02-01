import { render, fireEvent, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import TransactionFilter from './TransactionFilter';
import { ThemeProvider } from 'styled-components';
import { transactionsInitialState } from 'stores/transactions/transactionsReducers';
import { theme } from 'globalStyles';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store: ReturnType<typeof mockStore>;

const setup = ({ filter }: React.ComponentProps<typeof TransactionFilter>) =>
  render(<TransactionFilter filter={filter} />, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    ),
  });

describe('TransactionFilter component', () => {
  beforeEach(() => {
    store = mockStore({
      transactions: transactionsInitialState,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render correctly', () => {
    const { getByTestId } = setup({ filter: 'status' });
    expect(getByTestId(/transaction-filter/i)).toBeTruthy();
  });

  it('Should filter correctly', () => {
    const { getByTestId } = setup({ filter: 'status' });
    const expectedAction = [
      {
        error: undefined,
        meta: undefined,
        payload: {
          status: 'created',
        },
        type: '@transactions/SET_TRANSACTION_FILTER',
      },
    ];

    fireEvent.change(getByTestId(/transaction-select/i), { target: { value: 'created' } });
    expect(store.getActions()).toEqual(expectedAction);
  });
});
