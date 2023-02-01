import { createContext, useState } from 'react';

const stateContext = createContext({
  sidebarOpen: true,
  setSidebarOpen: () => {},
  toggleSidebarState: () => {},
});

export const StateContextProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebarState = () => setSidebarOpen((prev) => !prev);

  return (
    <stateContext.Provider value={{ sidebarOpen, toggleSidebarState }}>
      {children}
    </stateContext.Provider>
  );
};

export default stateContext;
