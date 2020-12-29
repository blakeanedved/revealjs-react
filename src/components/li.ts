import { generateBaseComponent, MakeFullProps } from "./BaseComponent";
export type LiProps = MakeFullProps<'li'>;

export default generateBaseComponent('li');
