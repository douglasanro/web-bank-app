import React from 'react';
import styled from 'styled-components';

type TTransactionHeaderProps = {
  children: React.ReactNode;
};

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const TransactionHeader: React.FC<TTransactionHeaderProps> = ({ children }) => (
  <Header data-testid="transaction-header">{children}</Header>
);

export default React.memo(TransactionHeader);
