export const HEROKU_API_URL = process.env.REACT_APP_HEROKU_API_URL;

export const SERVICE = {
  TRANSACTIONS: () => '/transactions',
  TRANSACTION_DETAIL: (id: string) => `/transactions/${id}`
};
