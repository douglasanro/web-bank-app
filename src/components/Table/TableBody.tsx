import React from 'react';
import styled from 'styled-components';

type TTableBodyProps = {
  children: React.ReactNode;
};

const StyledTableBody = styled.tbody``;

const TableBody: React.FC<TTableBodyProps> = ({ children }) => (
  <StyledTableBody data-testid="table-body">{children}</StyledTableBody>
);

export default React.memo(TableBody);
