import { generateBaseComponent, Props as BaseProps } from "./BaseComponent";
export type OlProps = Exclude<BaseProps, "component">;

export default generateBaseComponent('ol');
