import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Header';
import Main from 'components/Main';
import TransactionList from 'components/TransactionList';
import TransactionDetail from 'components/TransactionDetail';
import Modal from 'components/Modal';
import rootStore from 'stores/rootStore';
import useModal from 'utils/useModal';
import { GlobalStyle, theme } from 'globalStyles';

const App: React.FC = () => {
  const { toggle, open } = useModal();

  return (
    <Provider store={rootStore}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header title="Banco" />
        <Main>
          <TransactionList showTransactionDetail={toggle} />
        </Main>
        <Modal open={open} toggle={toggle}>
          <TransactionDetail />
        </Modal>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
