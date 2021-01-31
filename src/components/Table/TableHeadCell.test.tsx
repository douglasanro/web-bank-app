import { render } from '@testing-library/react';
import TableHeadCell from './TableHeadCell';
import { ThemeProvider } from 'styled-components';
import { theme } from 'globalStyles';

const setup = () =>
  render(<TableHeadCell>Test</TableHeadCell>, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>
        <table>
          <thead>
            <tr>{children}</tr>
          </thead>
        </table>
      </ThemeProvider>
    ),
  });

describe('TableHeadCell component', () => {
  it('Should render correctly', () => {
    const { getByTestId } = setup();
    expect(getByTestId(/table-head-cell/i)).toBeTruthy();
  });
});
