'use client';

import { createContext, useContext, useState } from 'react';

interface HomeContextProps {
  result: string;
  setResult(result: string): void;

  error: string;
  setError(error: string): void;
}

const HomeContext = createContext<HomeContextProps>({} as HomeContextProps);

export function HomeProvider({ children }: { children: React.ReactNode }) {
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');

  return (
    <HomeContext.Provider value={{ result, setResult, error, setError }}>
      {children}
    </HomeContext.Provider>
  );
}

export function useHomeContext() {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error(
      'You must use "useHomeContext" within a "HomeContext" context'
    );
  }

  return context;
}
