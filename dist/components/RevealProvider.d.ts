import React, { ReactNode } from "react";
import Reveal from "../../types/reveal.js";
export declare const RevealContext: React.Context<Reveal | null>;
export interface RevealProviderProps {
    reveal: Reveal | null;
    children: ReactNode;
}
export default function RevealProvider({ reveal, children }: RevealProviderProps): JSX.Element;
