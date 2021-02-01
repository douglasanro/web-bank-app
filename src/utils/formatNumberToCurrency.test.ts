import formatNumberToCurrency from './formatNumberToCurrency';

describe('formatNumberToCurrency util', () => {
  it('Should return BRL formatted currency', () => {
    const value = 100.0;
    const formattedValue = formatNumberToCurrency(value);
    const expectedValue = 'R$\xa0100,00';

    expect(formattedValue).toEqual(expectedValue);
  })
})
