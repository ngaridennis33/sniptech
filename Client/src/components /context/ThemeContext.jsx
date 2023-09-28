"use client"
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

// Save the Theme mode on Local Storage
const getFromLocalStorage = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const value = localStorage.getItem('mode');
    return value || 'light';
  }
  return 'light'; // Return a default value if localStorage is not available
};

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('mode', mode);
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};