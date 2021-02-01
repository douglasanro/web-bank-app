import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Header';
import Main from 'components/Main';
import TransactionList from 'components/TransactionList';
import rootStore from 'stores/rootStore';
import { GlobalStyle, theme } from 'globalStyles';

const App: React.FC = () => {
  return (
    <Provider store={rootStore}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header title="Banco" />
        <Main>
          <TransactionList showTransactionDetail={() => null} />
        </Main>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
