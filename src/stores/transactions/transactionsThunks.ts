import { Dispatch } from 'redux';
import axios from 'axios';
import { setTransactions } from 'stores/transactions/transactionsActions';
import { HEROKU_API_URL, SERVICE } from 'environments';
import ITransaction from 'models/ITransaction';

export const getTransactions = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setTransactions.request());
    const { data } = await axios.get<ITransaction[]>(`${HEROKU_API_URL}${SERVICE.TRANSACTIONS()}`);

    const dataSortedByDateDesc = data.sort((transactionA, transactionB) => {
      const dateA = new Date(transactionA.date);
      const dateB = new Date(transactionB.date);

      return [-1, 1][Number(dateA < dateB)];
    })

    dispatch(setTransactions.success(dataSortedByDateDesc));
  } catch (error) {
    dispatch(setTransactions.failure(error));
  }
};
