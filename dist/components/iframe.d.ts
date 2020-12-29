/// <reference types="react" />
import { MakeProps } from './BaseComponent';
export interface IFrameProps {
    height?: number;
    lazy?: boolean;
    preload?: string;
    src: string;
    width?: number;
}
declare function IFrame({ id, fragmentIndex, height, lazy, preload, src, width, ...props }: MakeProps<IFrameProps, 'iframe'>): JSX.Element;
export default IFrame;
