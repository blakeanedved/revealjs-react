import { generateBaseComponent, Props as BaseProps } from "./BaseComponent";
export type DivProps = Exclude<BaseProps, "component">;

export default generateBaseComponent('div');
