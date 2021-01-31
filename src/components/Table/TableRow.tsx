import React from 'react';
import styled from 'styled-components';

type TTableRowProps = {
  children: React.ReactNode;
  variant?: 'header' | 'body';
  onClick?: () => void;
};

const StyledTableRow = styled.tr`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.mineShaft};
  cursor: ${({ onClick }) => ['default', 'pointer'][Number(Boolean(onClick))]};

  &.header {
    background-color: ${({ theme }) => theme.color.silver};
  }

  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.color.alabaster};
    &.header {
      background-color: ${({ theme }) => theme.color.silver};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.alto};
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: table-row;
    margin-bottom: 0;
  }
`;

const TableRow: React.FC<TTableRowProps> = ({ children, variant = 'body', onClick }) => (
  <StyledTableRow className={variant} onClick={onClick} data-testid="table-row">
    {children}
  </StyledTableRow>
);

export default React.memo(TableRow);
