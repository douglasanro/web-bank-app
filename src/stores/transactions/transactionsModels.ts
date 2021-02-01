import ITransaction from 'models/ITransaction';
import ETransactionStatus from 'models/ETransactionStatus';

export interface ITransactionsFilter {
  status: keyof typeof ETransactionStatus | '';
};

export interface ITransactionsState {
  list: ITransaction[];
  detail: ITransaction | null;
  searchTerm: string;
  filter: ITransactionsFilter;
};
