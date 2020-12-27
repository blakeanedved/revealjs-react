import { generateBaseComponent, Props as BaseProps } from "./BaseComponent";
export type FigCaptionProps = Exclude<BaseProps, "component">;

export default generateBaseComponent('figcaption');
