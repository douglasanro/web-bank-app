import { AnyAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import axios from 'axios'
import configureMockStore from 'redux-mock-store';
import { transactionsInitialState } from './transactionsReducers';
import { getTransactions } from './transactionsThunks';
import { ITransactionsState } from './transactionsModels';
import { rootState } from 'stores/rootStore';
import ITransaction from 'models/ITransaction';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockTransactions: ITransaction[] = [
  {
    id: '5f89f9f2f318e70ff298f528',
    title: 'Movimentação interna',
    description: 'eu officia laborum labore aute',
    status: 'processed',
    amount: 25092.8,
    date: '2016-08-25',
    from: 'Férias',
    to: 'Trade',
  },
  {
    id: '5f89f9f235a90e5336c796f7',
    title: 'Movimentação interna',
    description: 'labore id culpa magna minim',
    status: 'created',
    amount: 172513.46,
    date: '2020-04-29',
    from: 'Férias',
    to: 'Conta Warren',
  },
];
type DispatchMock = ThunkDispatch<rootState, void, AnyAction>;

const middleware = [thunk];
const mockStore = configureMockStore<{ transactions: ITransactionsState }, DispatchMock>(middleware);
let store: ReturnType<typeof mockStore>;

describe('transactions thunks', () => {
  beforeEach(() => {
  store = mockStore({
    transactions: transactionsInitialState
  })
});

it('should get transactions with success', async () => {
  const expectedActions = [
    {
      type: '@transactions/FETCH_TRANSACTIONS_REQUEST'
    },
    {
      payload: mockTransactions,
      type: '@transactions/FETCH_TRANSACTIONS_SUCCESS'
    },
  ];
  mockedAxios.get.mockReturnValue({
    data: mockTransactions,
    status: 200
  } as any);
  await store.dispatch(getTransactions());

  expect(store.getActions()).toEqual(expectedActions);
});

it('should get transactions with failure', async () => {
  const expectedActions = [
    {
      type: '@transactions/FETCH_TRANSACTIONS_REQUEST'
    },
    {
      payload: {
        data: {},
        status: 404
      },
      type: '@transactions/FETCH_TRANSACTIONS_FAILURE'
  }];
  mockedAxios.get.mockRejectedValue({
    data: {},
    status: 404
  } as any);
  await store.dispatch(getTransactions());

  expect(store.getActions()).toEqual(expectedActions);
});
})
