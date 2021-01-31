import { SERVICE } from 'environments';

describe('environmets', () => {
  const initialEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = initialEnv;
  });

  it('SERVICE.TRANSACTIONS should return corrent endpoint', () => {
    expect(SERVICE.TRANSACTIONS()).toEqual('/transactions');
  });

  it('SERVICE.TRANSACTION_DETAIL should return corrent endpoint', () => {
    const id = '12345';
    expect(SERVICE.TRANSACTION_DETAIL(id)).toEqual(`/transactions/${id}`);
  });
});
