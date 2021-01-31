import { render } from '@testing-library/react';
import Table from './Table';
import { ThemeProvider } from 'styled-components';
import { theme } from 'globalStyles';

const setup = () =>
  render(
    <Table>
      <thead></thead>
    </Table>,
    {
      wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    }
  );

describe('Table component', () => {
  it('Should render correctly', () => {
    const { getByTestId } = setup();
    expect(getByTestId(/table/i)).toBeTruthy();
  });
});
