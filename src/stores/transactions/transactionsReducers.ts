import { createReducer } from 'typesafe-actions';
import { ETransactionsActions } from 'stores/transactions/transactionsActions';
import { ITransactionsState } from 'stores/transactions/transactionsModels';

export const transactionsInitialState: ITransactionsState = {
  list: [],
  detail: null,
  searchTerm: ''
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
  [ETransactionsActions.SET_TRANSACTION_SEARCH_TERM]: (state, action) => ({
    ...state,
    searchTerm: action.payload
  }),
});

export default transactionsReducers;
