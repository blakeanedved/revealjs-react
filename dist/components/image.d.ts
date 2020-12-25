/// <reference types="react" />
import { BaseProps } from './BaseComponent';
export interface Props extends BaseProps {
    alt?: string;
    height?: number;
    width?: number;
    src: string;
}
declare function Image({ id, alt, className, fragment, fragmentStyle, fragmentIndex, height, src, width, }: Props): JSX.Element;
export default Image;
