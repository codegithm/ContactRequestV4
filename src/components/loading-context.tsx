"use client";

import {
  createContext,
  useContext,
  useTransition,
  useEffect,
  useState,
} from "react";

interface LoadingContextType {
  isNavigating: boolean;
  isApiLoading: boolean;
  setApiLoading: (loading: boolean) => void;
  setNavigating: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isPending, startTransition] = useTransition();
  const [apiLoading, setApiLoading] = useState(false);

  const [manualNavigating, setManualNavigating] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(isPending || manualNavigating);
  }, [isPending, manualNavigating]);

  return (
    <LoadingContext.Provider
      value={{
        isNavigating,
        isApiLoading: apiLoading,
        setApiLoading,
        setNavigating: setManualNavigating,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
}
