import React from 'react';
import { Transitions, TransitionSpeed } from '../types';
export interface SlideProps {
    autoslide?: true;
    autoAnimate?: true;
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    backgroundRepeat?: string;
    backgroundOpacity?: string;
    backgroundVideo?: string;
    backgroundVideoLoop?: true;
    backgroundVideoMuted?: true;
    backgroundIframe?: string;
    backgroundInteractive?: true;
    children: React.ReactNode;
    id?: string;
    transition?: Transitions;
    transitionSpeed?: TransitionSpeed;
    visibility?: 'uncounted' | 'hidden';
}
declare function Slide({ autoslide, autoAnimate, backgroundColor, backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat, backgroundOpacity, backgroundVideo, backgroundVideoLoop, backgroundVideoMuted, backgroundIframe, backgroundInteractive, children, id, transition, transitionSpeed, visibility, }: SlideProps): JSX.Element;
export default Slide;
