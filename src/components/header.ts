import { generateBaseComponent, Props as BaseProps } from "./BaseComponent";
export type HeaderProps = Exclude<BaseProps, "component">;

export default generateBaseComponent('header');
