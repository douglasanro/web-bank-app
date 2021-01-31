import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';

type TMainProps = {
  children: React.ReactNode;
};

const StyledMain = styled.main`
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  min-height: auto;
`;

const Main: React.FC<TMainProps> = ({ children }) => (
  <StyledMain data-testid="main">
    <Container>{children}</Container>
  </StyledMain>
);

export default Main;
