import { createContext, useState, type ReactNode } from "react";

// Create context (with default null)
export const GlobalContext = createContext<any>(null);

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Return expression kept on the same line (or wrapped in parenthesis)
  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};