import { generateBaseComponent, Props as BaseProps } from "./BaseComponent";
export type MainProps = Exclude<BaseProps, "component">;

export default generateBaseComponent('main');
