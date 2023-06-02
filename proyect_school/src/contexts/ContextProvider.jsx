import React from 'react';
import { PopUpProvider } from './contextos/PopUpContext';

export const AppContextProvider = ({ children }) => {
  return (
    <PopUpProvider>
        {children}
    </PopUpProvider>
  );
};