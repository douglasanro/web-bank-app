import React from 'react';
import styled from 'styled-components';

type TTableHeadProps = {
  children: React.ReactNode;
};

const StyledTableHead = styled.thead`
  position: absolute;
  margin: -1px;
  padding: 0;
  width: 1px;
  height: 1px;
  border: none;
  clip: rect(0 0 0 0);
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    position: initial;
    margin: 0;
    width: initial;
    height: initial;
    border: initial;
    clip: initial;
    overflow: initial;
  }
`;

const TableHead: React.FC<TTableHeadProps> = ({ children }) => (
  <StyledTableHead data-testid="table-head">{children}</StyledTableHead>
);

export default React.memo(TableHead);
