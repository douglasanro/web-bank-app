import React from 'react';
import styled from 'styled-components';

type TTableProps = {
  children: React.ReactNode;
};

const StyledTable = styled.table`
  margin: 0;
  padding: 0;
  width: 100%;
  border: 0;
  border-collapse: collapse;
  table-layout: auto;

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    border: 1px solid ${({ theme }) => theme.color.mineShaft};
  }
`;

const Table: React.FC<TTableProps> = ({ children }) => <StyledTable data-testid="table">{children}</StyledTable>;

export default React.memo(Table);
