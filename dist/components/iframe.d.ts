/// <reference types="react" />
import { BaseProps } from './BaseComponent';
export interface IFrameProps extends BaseProps {
    height?: number;
    lazy?: boolean;
    preload?: string;
    src: string;
    width?: number;
}
declare function IFrame({ id, fragmentIndex, height, lazy, preload, src, width, ...props }: IFrameProps): JSX.Element;
export default IFrame;
