import { generateBaseComponent, Props as BaseProps } from "./BaseComponent";
export type SpanProps = Exclude<BaseProps, "component">;

export default generateBaseComponent('span');
