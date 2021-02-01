import transactionsReducers, { transactionsInitialState } from './transactionsReducers';
import ITransaction from 'models/ITransaction';

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

describe('transactions reducers', () => {
  it('transactions  reducer expected state', () => {
    const action = {
      payload: mockTransactions,
      type: '@transactions/FETCH_TRANSACTIONS_SUCCESS',
    };

    const updatedState = transactionsReducers(undefined, action);
    const expectedState = {
      ...transactionsInitialState,
      list: mockTransactions
    }

    expect(updatedState).toEqual(expectedState);
  });
});
