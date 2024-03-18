import Modal from 'react-modal'
import { Header } from "./components/Header/index"
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModa';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionsModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionsModalOpen(false)
    }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionModal} 
      />

      <GlobalStyle />
    </>
  );
}