import { render } from '@testing-library/react';
import TableBody from './TableBody';
import { ThemeProvider } from 'styled-components';
import { theme } from 'globalStyles';

const setup = () =>
  render(
    <TableBody>
      <tr></tr>
    </TableBody>,
    {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <table>{children}</table>
        </ThemeProvider>
      ),
    }
  );

describe('TableBody component', () => {
  it('Should render correctly', () => {
    const { getByTestId } = setup();
    expect(getByTestId(/table-body/i)).toBeTruthy();
  });
});
