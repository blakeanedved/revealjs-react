import { generateBaseComponent, Props as BaseProps } from "./BaseComponent";
export type PProps = Exclude<BaseProps, "component">;

export default generateBaseComponent('p');
