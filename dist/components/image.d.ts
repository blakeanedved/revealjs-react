/// <reference types="react" />
import { BaseProps } from './BaseComponent';
export interface ImageProps extends BaseProps {
    alt?: string;
    height?: number;
    width?: number;
    src: string;
}
declare function Image({ id, alt, fragmentIndex, height, src, width, ...props }: ImageProps): JSX.Element;
export default Image;
