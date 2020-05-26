import React, { createContext } from 'react';
import useRequestSimple from '../hooks/useRequestSimple';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const state = useRequestSimple();
  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
