import { generateBaseComponent, Props as BaseProps } from "./BaseComponent";
export type UlProps = Exclude<BaseProps, "component">;

export default generateBaseComponent('ul');
