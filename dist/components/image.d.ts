/// <reference types="react" />
import { MakeProps } from './BaseComponent';
export interface ImageProps {
    alt?: string;
    height?: number;
    width?: number;
    src: string;
}
declare function Image({ id, alt, fragmentIndex, height, src, width, ...props }: MakeProps<ImageProps, 'img'>): JSX.Element;
export default Image;
