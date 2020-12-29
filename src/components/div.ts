import { generateBaseComponent, MakeFullProps } from "./BaseComponent";
export type DivProps = MakeFullProps<'div'>;

export default generateBaseComponent('div');
