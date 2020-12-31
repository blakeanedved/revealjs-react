import React, { createContext, ReactNode, useMemo } from "react";
import Reveal from "../../types/reveal.js";

export interface RevealContextType {
  reveal: Reveal | null;
  readyPromise: Promise<void> | null;
}

export const defaultContextValue: RevealContextType = { 
  reveal: null,
  readyPromise: null,
}
export const RevealContext = createContext<RevealContextType>(defaultContextValue);

export interface RevealProviderProps {
  reveal: RevealContextType;
  children: ReactNode;
}

export default function RevealProvider({ reveal, children }: RevealProviderProps) {
  return (
    <RevealContext.Provider value={reveal}>{children}</RevealContext.Provider>
  )
}