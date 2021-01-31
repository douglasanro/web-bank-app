import { render } from '@testing-library/react';
import TableHead from './TableHead';
import { ThemeProvider } from 'styled-components';
import { theme } from 'globalStyles';

const setup = () =>
  render(
    <TableHead>
      <tr></tr>
    </TableHead>,
    {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <table>{children}</table>
        </ThemeProvider>
      ),
    }
  );

describe('TableHead component', () => {
  it('Should render correctly', () => {
    const { getByTestId } = setup();
    expect(getByTestId(/table-head/i)).toBeTruthy();
  });
});
