import { generateBaseComponent, Props as BaseProps } from "./BaseComponent";
export type LiProps = Exclude<BaseProps, "component">;

export default generateBaseComponent('li');
