import { generateBaseComponent, Props as BaseProps } from "./BaseComponent";
export type FooterProps = Exclude<BaseProps, "component">;

export default generateBaseComponent('footer');
