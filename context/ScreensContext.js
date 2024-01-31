import React from 'react';

const Context = React.createContext();

export const ScreensProvider = ({children}) => {
  return <Context.Provider value={5}>{children}</Context.Provider>;
};
export default Context;
