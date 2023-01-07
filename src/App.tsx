import React, { createContext, useState } from 'react';
import './App.css';
import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { SearchBasic } from './components/SearchBasic';
import Table from './containers/Table';
import { useTransactions } from './hooks/transactions';
import { IAppContext } from './models'

export const AppContext = createContext<IAppContext|null>(null)

function App() {

  const [page, setPage] = useState<null | number>(1)

  const { transactions, changeAdress, hasMore, error, loading } = useTransactions(page)

  const nextPage = () => {
    setPage(prev => prev !== null ? prev + 1 : 1)
  }


  return (
    <AppContext.Provider value={{transactions,hasMore,nextPage}}>
    <div className="container">
      <SearchBasic placeholder='' handleChange={changeAdress} />
      {error && <ErrorMessage error={error} />}
      {loading && !transactions.length && <Loader/>}
      {transactions && transactions.length ? <Table /> : null}
    </div>
    </AppContext.Provider>
  );
}

export default App;
