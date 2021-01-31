import { render } from '@testing-library/react';
import TableRow from './TableRow';
import { ThemeProvider } from 'styled-components';
import { theme } from 'globalStyles';

const setup = ({ variant, onClick, children }: React.ComponentProps<typeof TableRow>) =>
  render(
    <TableRow variant={variant} onClick={onClick}>
      {children}
    </TableRow>,
    {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <table>
            <tbody>{children}</tbody>
          </table>
        </ThemeProvider>
      ),
    }
  );

describe('TableRow component', () => {
  it('Should render correctly', () => {
    const { getByTestId } = setup({ variant: 'body', children: <td></td> });
    expect(getByTestId(/table-row/i)).toBeTruthy();
  });

  it('Should render without variant correctly', () => {
    const { getByTestId } = setup({ variant: undefined, children: <td></td> });
    expect(getByTestId(/table-row/i)).toBeTruthy();
  });
});
