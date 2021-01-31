import { render } from '@testing-library/react';
import TableBodyCell from './TableBodyCell';
import { ThemeProvider } from 'styled-components';
import { theme } from 'globalStyles';

const setup = ({ scope, label, children }: React.ComponentProps<typeof TableBodyCell>) =>
  render(
    <TableBodyCell scope={scope} label={label}>
      {children}
    </TableBodyCell>,
    {
      wrapper: ({ children }) => (
        <ThemeProvider theme={theme}>
          <table>
            <tbody>
              <tr>{children}</tr>
            </tbody>
          </table>
        </ThemeProvider>
      ),
    }
  );

describe('TableBodyCell component', () => {
  it('Should render correctly', () => {
    const { getByTestId } = setup({ scope: 'row', label: 'Test', children: 'Test' });
    expect(getByTestId(/table-body-cell/i)).toBeTruthy();
  });

  it('Should render without scope correctly', () => {
    const { getByTestId } = setup({ scope: undefined, label: 'Test', children: 'Test' });
    expect(getByTestId(/table-body-cell/i)).toBeTruthy();
  });
});
