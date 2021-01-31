import React from 'react';
import styled from 'styled-components';

type TTableBodyCellProps = {
  children: React.ReactNode;
  scope?: 'row' | 'col' | 'rowgroup' | 'colgroup' | 'auto';
  label: string;
};

const StyledTableBodyCell = styled.td`
  display: block;
  padding: ${({ theme }) => theme.spacing(1)};
  border-bottom: 1px solid ${({ theme }) => theme.color.mineShaft};
  text-align: right;

  &:last-child {
    border-bottom: 0;
  }

  &:before {
    content: attr(data-label);
    float: left;
    font-weight: 700;
    padding-right: ${({ theme }) => theme.spacing(2)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: table-cell;
    border-bottom: 0;
    text-align: left;

    &:before {
      content: '';
    }
  }
`;

const TableBodyCell: React.FC<TTableBodyCellProps> = ({ children, scope = 'auto', label }) => (
  <StyledTableBodyCell scope={scope} data-label={label} data-testid="table-body-cell">
    {children}
  </StyledTableBodyCell>
);

export default React.memo(TableBodyCell);
