import React, { createContext, useState } from 'react';

// Create context
const Context = createContext();

// Provider component
export function ContextProvider({ children }) {
  const [sharedData, setSharedData] = useState({});

  return (
    <Context.Provider value={{ sharedData, setSharedData }}>
      {children}
    </Context.Provider>
  );
}

export default Context;