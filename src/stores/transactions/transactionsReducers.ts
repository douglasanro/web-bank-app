import { createReducer } from 'typesafe-actions';
import { ETransactionsActions } from 'stores/transactions/transactionsActions';
import { ITransactionsState } from 'stores/transactions/transactionsModels';

export const transactionsInitialState: ITransactionsState = {
  list: [],
};

const transactionsReducers = createReducer(transactionsInitialState, {
  [ETransactionsActions.FETCH_TRANSACTIONS_SUCCESS]: (state, action) => ({
    ...state,
    list: [...new Set([...state.list, ...action.payload])]
  }),
});

export default transactionsReducers;
