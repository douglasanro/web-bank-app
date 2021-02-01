import { render } from '@testing-library/react';
import TransactionHeader from './TransactionHeader';
import { ThemeProvider } from 'styled-components';
import { theme } from 'globalStyles';

const setup = () =>
  render(<TransactionHeader>Test!</TransactionHeader>, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
  });

describe('TransactionHeader component', () => {
  it('Should render correctly', () => {
    const { getByTestId } = setup();
    expect(getByTestId(/transaction-header/i)).toBeTruthy();
  });
});
