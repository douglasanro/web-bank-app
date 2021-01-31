import { render } from '@testing-library/react';
import Container from './Container';
import { ThemeProvider } from 'styled-components';
import { theme } from 'globalStyles';

const setup = () =>
  render(<Container>Test!</Container>, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
  });

describe('Container component', () => {
  it('Should render correctly', () => {
    const { getByTestId } = setup();
    expect(getByTestId(/container/i)).toBeTruthy();
  });
});
