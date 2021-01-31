import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Header';
import { GlobalStyle, theme } from 'globalStyles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header title="Banco" />
    </ThemeProvider>
  );
};

export default App;
