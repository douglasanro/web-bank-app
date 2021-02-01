import { action, createAsyncAction } from 'typesafe-actions';
import ITransaction from 'models/ITransaction';

export enum ETransactionsActions {
  FETCH_TRANSACTIONS_REQUEST = '@transactions/FETCH_TRANSACTIONS_REQUEST',
  FETCH_TRANSACTIONS_SUCCESS = '@transactions/FETCH_TRANSACTIONS_SUCCESS',
  FETCH_TRANSACTIONS_FAILURE = '@transactions/FETCH_TRANSACTIONS_FAILURE',
  FETCH_TRANSACTION_DETAIL_REQUEST = '@transactions/FETCH_TRANSACTION_DETAIL_REQUEST',
  FETCH_TRANSACTION_DETAIL_SUCCESS = '@transactions/FETCH_TRANSACTION_DETAIL_SUCCESS',
  FETCH_TRANSACTION_DETAIL_FAILURE = '@transactions/FETCH_TRANSACTION_DETAIL_FAILURE',
  CLEAR_TRANSACTION_DETAIL = '@transactions/CLEAR_TRANSACTION_DETAIL'
}

export const setTransactions = createAsyncAction(
  ETransactionsActions.FETCH_TRANSACTIONS_REQUEST,
  ETransactionsActions.FETCH_TRANSACTIONS_SUCCESS,
  ETransactionsActions.FETCH_TRANSACTIONS_FAILURE,
)<undefined, ITransaction[], Error>();

export const setTransactionDetail = createAsyncAction(
  ETransactionsActions.FETCH_TRANSACTION_DETAIL_REQUEST,
  ETransactionsActions.FETCH_TRANSACTION_DETAIL_SUCCESS,
  ETransactionsActions.FETCH_TRANSACTION_DETAIL_FAILURE,
)<undefined, ITransaction, Error>();

export const clearTransactionDetail = () => action(ETransactionsActions.CLEAR_TRANSACTION_DETAIL);
