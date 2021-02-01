import ITransaction from 'models/ITransaction';

export interface ITransactionsState {
  list: ITransaction[];
  detail: ITransaction | null;
};
