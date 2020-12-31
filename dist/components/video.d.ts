/// <reference types="react" />
import { MakeProps } from './BaseComponent';
export interface VideoProps {
    autoplay?: boolean;
    controls?: boolean;
    height?: number;
    lazy?: string;
    loop?: boolean;
    muted?: boolean;
    preload?: '' | 'metadata' | 'auto' | 'none';
    width?: number;
    src: string[] | string;
}
declare function Video({ id, autoplay, controls, fragmentIndex, height, lazy, loop, muted, preload, width, src, ...props }: MakeProps<VideoProps, 'video'>): JSX.Element;
export default Video;
