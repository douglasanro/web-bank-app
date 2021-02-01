import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setTransactionFilter } from 'stores/transactions/transactionsActions';
import { ITransactionsFilter } from 'stores/transactions/transactionsModels';
import ETransactionStatus from 'models/ETransactionStatus';

interface ITransactionFilterOption {
  value: string;
  label: string;
}

type TTransactionFilterProps = {
  filter: keyof ITransactionsFilter;
};

const filterOptionLabel = {
  status: 'Status',
};

const Dropdown = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.alto};

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: ${({ theme }) => theme.spacing(1)};
    width: 0;
    height: 0;
    margin-top: -2px;
    border-top: 5px solid ${({ theme }) => theme.color.mineShaft};
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
  }
`;

const Select = styled.select`
  max-width: 100%;
  padding-top: ${({ theme }) => theme.spacing(1.1)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(1.1)};
  padding-left: ${({ theme }) => theme.spacing(1)};
  border: none;
  background-color: transparent;
  appearance: none;

  &:active,
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const TransactionFilter: React.FC<TTransactionFilterProps> = ({ filter }) => {
  const dispatch = useDispatch();
  const filterOptions = {
    status: ETransactionStatus,
  };
  const options: ITransactionFilterOption[] = Object.entries(filterOptions[filter]).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  const handleChange = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
    const filterId = event.target.name as keyof ITransactionsFilter;
    dispatch(setTransactionFilter({ [filterId]: event.target.value as any }));
  };

  return (
    <Dropdown data-testid="transaction-filter">
      <Select name={filter} onChange={handleChange} data-testid="transaction-select">
        <option value="">{filterOptionLabel[filter]}</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </Dropdown>
  );
};

export default TransactionFilter;
