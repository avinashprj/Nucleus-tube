import React from 'react';
import { useLocalStorageState } from '../../CustomHooks/CustomHooks';

const ThemeContext = React.createContext();

const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useThemeContext must be use in a ThemeContextProvider component'
    );
  }
  return context;
};

const ThemeContextProvider = ({ children }) => {
  const [colorState, setColorState] = useLocalStorageState('color', 'dark');
  const value = React.useMemo(
    () => [colorState, setColorState],
    [colorState, setColorState]
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export { ThemeContextProvider, useThemeContext };
