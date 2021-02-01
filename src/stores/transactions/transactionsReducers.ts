import { createReducer } from 'typesafe-actions';
import { ETransactionsActions } from 'stores/transactions/transactionsActions';
import { ITransactionsState } from 'stores/transactions/transactionsModels';

export const transactionsInitialState: ITransactionsState = {
  list: [],
  detail: null
};

const transactionsReducers = createReducer(transactionsInitialState, {
  [ETransactionsActions.FETCH_TRANSACTIONS_SUCCESS]: (state, action) => ({
    ...state,
    list: [...new Set([...state.list, ...action.payload])]
  }),
  [ETransactionsActions.FETCH_TRANSACTION_DETAIL_SUCCESS]: (state, action) => ({
    ...state,
    detail: action.payload
  }),
  [ETransactionsActions.CLEAR_TRANSACTION_DETAIL]: (state) => ({
    ...state,
    detail: null
  }),
});

export default transactionsReducers;
