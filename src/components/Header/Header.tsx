import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';

type THeaderProps = {
  title: string;
};

const AppBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: '100%';
  border-bottom: 2px solid ${({ theme }) => theme.color.mineShaft};
`;

const Title = styled.span`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 2rem;
  font-weight: 700;
`;

const Header: React.FC<THeaderProps> = ({ title }) => (
  <AppBar data-testid="header">
    <Container>
      <Title>{title}</Title>
    </Container>
  </AppBar>
);

export default React.memo(Header);
