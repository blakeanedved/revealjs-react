import { generateBaseComponent, Props as BaseProps } from "./BaseComponent";
export type BlockQuoteProps = Exclude<BaseProps, "component">;

export default generateBaseComponent('blockquote');
