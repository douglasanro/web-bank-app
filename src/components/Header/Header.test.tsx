import { render } from '@testing-library/react';
import Header from './Header';
import { ThemeProvider } from 'styled-components';
import { theme } from 'globalStyles';

const setup = ({ title }: React.ComponentProps<typeof Header>) =>
  render(<Header title={title} />, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
  });

describe('Header component', () => {
  it('Should render correctly', () => {
    const { getByTestId } = setup({ title: 'Test' });
    expect(getByTestId(/header/i)).toBeTruthy();
  });
});
