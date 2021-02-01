import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { rootState } from 'stores/rootStore';
import ETransactionStatus from 'models/ETransactionStatus';
import formatNumberToCurrency from 'utils/formatNumberToCurrency';

const subtitle = {
  from: 'Transferindo de',
  to: 'Para',
};

const progress = {
  created: 0,
  processing: 50,
  processed: 100,
};

const StyledTransactionDetail = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
`;

const Title = styled.h2`
  display: block;
  font-size: 2rem;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const StatusProgress = styled.div`
  display: block;
  width: 100%;
  height: 24px;
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.color.mineShaft};

  &.created {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.color.alto} 5%,
      ${({ theme }) => theme.color.white} 0%
    );
  }

  &.processing {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.color.alto} 50%,
      ${({ theme }) => theme.color.white} 0%
    );
  }

  &.processed {
    background-color: ${({ theme }) => theme.color.alto};
  }
`;

const StatusBox = styled.div`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const StatusCaption = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatusCaptionLabel = styled.span`
  font-size: 0.8rem;

  &.active {
    font-weight: 700;
  }
`;

const Subtitle = styled.h3`
  display: block;
  font-size: 1.5rem;
  margin-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(0.5)};
  border-bottom: 2px solid ${({ theme }) => theme.color.mineShaft};
`;

const Transaction = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TransactionLabel = styled.span``;

const TransactionDetail: React.FC = () => {
  const { detail } = useSelector(({ transactions }: rootState) => transactions);

  if (!detail) {
    return null;
  }

  return (
    <StyledTransactionDetail data-testid="transaction-detail">
      <Title>{detail.title}</Title>
      <StatusBox>
        <StatusProgress
          className={detail.status}
          role="progressbar"
          aria-valuenow={progress[detail.status]}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuetext={ETransactionStatus[detail.status]}
        />
        <StatusCaption>
          {Object.entries(ETransactionStatus).map(([key, value]) => (
            <StatusCaptionLabel key={key} className={['', 'active'][Number(detail.status === key)]}>
              {value}
            </StatusCaptionLabel>
          ))}
        </StatusCaption>
      </StatusBox>
      <Subtitle>{subtitle.from}</Subtitle>
      <Transaction>
        <TransactionLabel>{detail.from}</TransactionLabel>
        <TransactionLabel>{formatNumberToCurrency(detail.amount)}</TransactionLabel>
      </Transaction>
      <Subtitle>{subtitle.to}</Subtitle>
      <Transaction>
        <TransactionLabel>{detail.to}</TransactionLabel>
        <TransactionLabel>{formatNumberToCurrency(detail.amount)}</TransactionLabel>
      </Transaction>
    </StyledTransactionDetail>
  );
};

export default TransactionDetail;
