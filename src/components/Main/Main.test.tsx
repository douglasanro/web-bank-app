import { render } from '@testing-library/react';
import Main from './Main';
import { ThemeProvider } from 'styled-components';
import { theme } from 'globalStyles';

const setup = () =>
  render(<Main>Test!</Main>, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
  });

describe('Main component', () => {
  it('Should render correctly', () => {
    const { getByTestId } = setup();
    expect(getByTestId(/main/i)).toBeTruthy();
  });
});
