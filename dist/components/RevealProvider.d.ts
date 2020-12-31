import React, { ReactNode } from "react";
import Reveal from "../../types/reveal.js";
export interface RevealContextType {
    reveal: Reveal | null;
    readyPromise: Promise<void> | null;
}
export declare const defaultContextValue: RevealContextType;
export declare const RevealContext: React.Context<RevealContextType>;
export interface RevealProviderProps {
    reveal: RevealContextType;
    children: ReactNode;
}
export default function RevealProvider({ reveal, children }: RevealProviderProps): JSX.Element;
