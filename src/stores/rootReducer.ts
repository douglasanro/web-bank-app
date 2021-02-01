import { combineReducers } from 'redux';
import transactionsReducers from 'stores/transactions/transactionsReducers';

const rootReducer = combineReducers({
  transactions: transactionsReducers,
});

export default rootReducer;
