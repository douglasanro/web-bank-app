import { createAsyncAction } from 'typesafe-actions';
import ITransaction from 'models/ITransaction';

export enum ETransactionsActions {
  FETCH_TRANSACTIONS_REQUEST = '@transactions/FETCH_TRANSACTIONS_REQUEST',
  FETCH_TRANSACTIONS_SUCCESS = '@transactions/FETCH_TRANSACTIONS_SUCCESS',
  FETCH_TRANSACTIONS_FAILURE = '@transactions/FETCH_TRANSACTIONS_FAILURE',
}

export const setTransactions = createAsyncAction(
  ETransactionsActions.FETCH_TRANSACTIONS_REQUEST,
  ETransactionsActions.FETCH_TRANSACTIONS_SUCCESS,
  ETransactionsActions.FETCH_TRANSACTIONS_FAILURE,
)<undefined, ITransaction[], Error>();
