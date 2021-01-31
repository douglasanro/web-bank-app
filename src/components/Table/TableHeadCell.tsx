import React from 'react';
import styled from 'styled-components';

type TTableHeadCellProps = {
  children: React.ReactNode;
};

const StyledTableHeadCell = styled.th`
  padding: ${({ theme }) => theme.spacing(1)};
  text-align: left;
`;

const TableHeadCell: React.FC<TTableHeadCellProps> = ({ children }) => (
  <StyledTableHeadCell scope="col" data-testid="table-head-cell">
    {children}
  </StyledTableHeadCell>
);

export default React.memo(TableHeadCell);
