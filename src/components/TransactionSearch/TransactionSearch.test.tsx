import { render, fireEvent, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import TransactionSearch from './TransactionSearch';
import { ThemeProvider } from 'styled-components';
import { transactionsInitialState } from 'stores/transactions/transactionsReducers';
import { theme } from 'globalStyles';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store: ReturnType<typeof mockStore>;

const setup = ({ placeholder }: React.ComponentProps<typeof TransactionSearch>) =>
  render(<TransactionSearch placeholder={placeholder} />, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    ),
  });

describe('TransactionSearch component', () => {
  beforeEach(() => {
    store = mockStore({
      transactions: transactionsInitialState,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('Should render correctly', () => {
    const { getByTestId } = setup({ placeholder: 'Test' });
    expect(getByTestId(/transaction-search/i)).toBeTruthy();
  });

  it('Should search correctly', () => {
    const { getByTestId } = setup({ placeholder: 'Test' });
    const expectedAction = [
      {
        error: undefined,
        meta: undefined,
        payload: 'Test',
        type: '@transactions/SET_TRANSACTION_SEARCH_TERM',
      },
    ];

    fireEvent.change(getByTestId(/transaction-search/i), { target: { value: 'Test' } });
    expect(store.getActions()).toEqual(expectedAction);
  });
});
