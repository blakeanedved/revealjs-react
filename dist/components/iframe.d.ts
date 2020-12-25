/// <reference types="react" />
import { BaseProps } from './BaseComponent';
export interface Props extends BaseProps {
    height?: number;
    lazy?: boolean;
    preload?: string;
    src: string;
    width?: number;
}
declare function IFrame({ id, className, fragment, fragmentStyle, fragmentIndex, height, lazy, preload, src, width, }: Props): JSX.Element;
export default IFrame;
