import transactionsReducers, { transactionsInitialState } from './transactionsReducers';
import { setTransactions, setTransactionDetail, clearTransactionDetail, setTransactionSearchTerm } from './transactionsActions';
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

describe('transactions actions', () => {
  it('should set transactions correctly', () => {
    const before = transactionsInitialState;
    const action = setTransactions.success(mockTransactions);
    const after = {
      ...transactionsInitialState,
      list: mockTransactions
    }

    expect(transactionsReducers(before, action)).toEqual(after);
  });

  it('should set transaction detail correctly', () => {
    const before = transactionsInitialState;
    const action = setTransactionDetail.success(mockTransactions[0]);
    const after = {
      ...transactionsInitialState,
      detail: mockTransactions[0]
    }

    expect(transactionsReducers(before, action)).toEqual(after);
  });

  it('should clear transaction detail correctly', () => {
    const before = transactionsInitialState;
    const action = clearTransactionDetail();
    const after = {
      ...transactionsInitialState,
      detail: null
    }

    expect(transactionsReducers(before, action)).toEqual(after);
  });

  it('should set transaction search term correctly', () => {
    const before = transactionsInitialState;
    const action = setTransactionSearchTerm('Test');
    const after = {
      ...transactionsInitialState,
      searchTerm: 'Test'
    }

    expect(transactionsReducers(before, action)).toEqual(after);
  });
});
