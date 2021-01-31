import React from 'react';
import styled from 'styled-components';

type TContainerProps = {
  children: React.ReactNode;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: ${({ theme }) => theme.breakpoint.lg};
  padding: ${({ theme }) => theme.spacing(2)};
`;

const Container: React.FC<TContainerProps> = ({ children }) => (
  <StyledContainer data-testid="container">{children}</StyledContainer>
);

export default Container;
