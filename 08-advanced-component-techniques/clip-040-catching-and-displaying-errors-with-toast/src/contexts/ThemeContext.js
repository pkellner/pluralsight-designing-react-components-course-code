import React from 'react';
import useTheme from '../hooks/useTheme';

const THEMELIST = {
  DARK: 'dark',
  LIGHT: 'light',
};

const ThemeContext = React.createContext();

const ThemeProvider = ({ children, startingTheme }) => {
  const state = useTheme(startingTheme);

  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, THEMELIST };
