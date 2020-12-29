import { generateBaseComponent, MakeFullProps } from "./BaseComponent";
export type HProps = MakeFullProps<'h1'>;

export const H1 = generateBaseComponent('h1');
export const H2 = generateBaseComponent('h2');
export const H3 = generateBaseComponent('h3');
export const H4 = generateBaseComponent('h4');
export const H5 = generateBaseComponent('h5');
export const H6 = generateBaseComponent('h6');
