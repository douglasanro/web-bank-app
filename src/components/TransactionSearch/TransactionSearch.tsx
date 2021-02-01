import React from 'react';
import { useDispatch } from 'react-redux';
import { setTransactionSearchTerm } from 'stores/transactions/transactionsActions';
import styled from 'styled-components';

type TTransactionSearchProps = {
  placeholder: string;
};

const Input = styled.input`
  position: relative;
  display: block;
  width: 100%;
  max-width: 200px;
  padding: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.color.mineShaft};
  outline: none;
`;

const TransactionSearch: React.FC<TTransactionSearchProps> = ({ placeholder }) => {
  const dispatch = useDispatch();

  const searchTransaction = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTransactionSearchTerm(event.target.value));
  };

  return <Input placeholder={placeholder} onChange={searchTransaction} data-testid="transaction-search" />;
};

export default TransactionSearch;
