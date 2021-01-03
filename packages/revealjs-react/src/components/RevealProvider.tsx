import React, { createContext, ReactNode } from "react";
import Reveal from "../../types/reveal.js";

export interface RevealContextType {
  reveal: Reveal | null;
}

export const defaultContextValue: RevealContextType = { 
  reveal: null,
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