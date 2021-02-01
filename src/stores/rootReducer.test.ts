import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { transactionsInitialState } from 'stores/transactions/transactionsReducers';

describe('store rootReducer', () => {
  it('should handle transactions creation', () => {
    const store = createStore(rootReducer, { transactions: transactionsInitialState });
    expect(store.getState()).toEqual({ transactions: transactionsInitialState })
  })
});
