import TTransactionsStatus from 'models/TTransactionStatus';

interface ITransaction {
  id: string;
  title: string;
  description: string;
  status: TTransactionsStatus;
  amount: number;
  date: string;
  from: string;
  to: string;
}

export default ITransaction;
