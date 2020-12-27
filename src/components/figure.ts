import { generateBaseComponent, Props as BaseProps } from "./BaseComponent";
export type FigureProps = Exclude<BaseProps, "component">;

export default generateBaseComponent('figure');
