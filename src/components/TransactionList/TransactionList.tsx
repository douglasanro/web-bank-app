import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Table from 'components/Table';
import TableRow from 'components/Table/TableRow';
import TableHead from 'components/Table/TableHead';
import TableHeadCell from 'components/Table/TableHeadCell';
import TableBody from 'components/Table/TableBody';
import TableBodyCell from 'components/Table/TableBodyCell';
import { rootState } from 'stores/rootStore';
import { getTransactions, getTransactionDetail } from 'stores/transactions/transactionsThunks';
import ETransactionStatus from 'models/ETransactionStatus';
import formatNumberToCurrency from 'utils/formatNumberToCurrency';

type TTransactionListProps = {
  showTransactionDetail: () => void;
};

const emptyListMessage = 'Desculpe, nenhum título encontrado para o termo:';

const tableHead = [
  {
    id: 'title',
    label: 'Título',
  },
  {
    id: 'description',
    label: 'Descrição',
  },
  {
    id: 'status',
    label: 'Status',
  },
  {
    id: 'amount',
    label: 'Valor',
  },
];

const List = styled.section`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const EmptyList = styled.p`
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

const TransactionList: React.FC<TTransactionListProps> = ({ showTransactionDetail }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const { list, searchTerm } = useSelector(({ transactions }: rootState) => transactions);

  const handleTransactionDetail = (id: string) => {
    dispatch(getTransactionDetail(id));
    showTransactionDetail();
  };

  if (list.length <= 0) {
    return null;
  }

  const filteredListBySearchTerm = list.filter(({ title }) => title.toLowerCase().includes(searchTerm.toLowerCase()));

  if (filteredListBySearchTerm.length <= 0) {
    return <EmptyList data-testid="transaction-empty-list">{`${emptyListMessage} ${searchTerm}`}</EmptyList>;
  }

  return (
    <List data-testid="transaction-list">
      <Table>
        <TableHead>
          <TableRow variant="header">
            {tableHead.map(({ id, label }) => (
              <TableHeadCell key={id}>{label}</TableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredListBySearchTerm.map(({ id, title, description, status, amount }) => (
            <TableRow key={id} onClick={() => handleTransactionDetail(id)}>
              <TableBodyCell scope="row" label={tableHead[0].label}>
                {title}
              </TableBodyCell>
              <TableBodyCell label={tableHead[1].label}>{description}</TableBodyCell>
              <TableBodyCell label={tableHead[2].label}>{ETransactionStatus[status]}</TableBodyCell>
              <TableBodyCell label={tableHead[3].label}>{formatNumberToCurrency(amount)}</TableBodyCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </List>
  );
};

export default React.memo(TransactionList);
