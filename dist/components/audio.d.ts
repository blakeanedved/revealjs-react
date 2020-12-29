/// <reference types="react" />
import { MakeProps } from './BaseComponent';
export declare type AudioTypes = '3gp' | 'aac' | 'flac' | 'mpg' | 'mpeg' | 'mp3' | 'mp4' | 'm4a' | 'oga' | 'ogg' | 'wav' | 'webm';
export interface AudioProps {
    autoplay?: boolean;
    controls?: boolean;
    lazy?: string;
    loop?: boolean;
    muted?: boolean;
    preload?: boolean;
    src: string;
}
declare function Audio({ id, autoplay, className, controls, fragment, fragmentIndex, fragmentStyle, lazy, loop, muted, preload, src, ...props }: MakeProps<AudioProps, 'audio'>): JSX.Element;
export default Audio;
