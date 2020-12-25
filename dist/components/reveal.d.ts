import React from 'react';
import { Plugin } from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import { BackgroundRepeat, TransitionAtoms, TransitionSpeed } from '../types';
export interface Props {
    children: React.ReactNode;
    plugins?: Plugin[];
    controls?: boolean;
    controlsTutorial?: boolean;
    controlsLayout?: 'bottom-right' | 'edge';
    controlsBackArrows?: 'faded' | 'hidden' | 'visible';
    progress?: boolean;
    slideNumber?: boolean | 'h.v' | 'h/v' | 'c' | 'c/t' | ((slide: {
        h: number;
        v: number;
        f: number;
    }) => string | string[]);
    showSlideNumber?: 'all' | 'print' | 'speaker';
    hashOneBasedIndex?: boolean;
    hash?: boolean;
    respondToHashChanges?: boolean;
    history?: boolean;
    keyboard?: boolean;
    keyboardCondition?: null | 'focused';
    disableLayout?: boolean;
    overview?: boolean;
    center?: boolean;
    touch?: boolean;
    loop?: boolean;
    rtl?: boolean;
    navigationMode?: 'default' | 'linear' | 'grid';
    shuffle?: boolean;
    fragments?: boolean;
    fragmentInURL?: boolean;
    embedded?: boolean;
    help?: boolean;
    pause?: boolean;
    showNotes?: boolean;
    autoPlayMedia?: boolean | null;
    preloadIframes?: boolean | null;
    autoAnimate?: boolean;
    autoAnimateMatcher?: null | ((fromSlide: HTMLElement, toSlide: HTMLElement) => [HTMLElement, HTMLElement][]);
    autoAnimateEasing?: string;
    autoAnimateDuration?: number;
    autoAnimateUnmatched?: boolean;
    autoAnimateStyles?: string[];
    autoSlide?: number;
    autoSlideStoppable?: boolean;
    autoSlideMethod?: (() => void) | null;
    defaultTiming?: number | null;
    mouseWheel?: boolean;
    previewLinks?: boolean;
    postMessage?: boolean;
    postMessageEvents?: boolean;
    focusBodyOnPageVisibilityChange?: boolean;
    transition?: TransitionAtoms;
    transitionSpeed?: TransitionSpeed;
    backgroundTransition?: TransitionAtoms;
    pdfMaxPagesPerSlide?: number;
    pdfSeparateFragments?: boolean;
    pdfPageHeightOffset?: number;
    viewDistance?: number;
    mobileViewDistance?: number;
    display?: string;
    hideInactiveCursor?: boolean;
    hideCursorTime?: number;
    parallaxBackgroundImage?: string;
    parallaxBackgroundSize?: string;
    parallaxBackgroundHorizontal?: number;
    parallaxBackgroundRepeat?: BackgroundRepeat | '';
    parallaxBackgroundPosition?: string;
    parallaxBackgroundVertical?: number;
    width?: number;
    height?: number;
    margin?: number;
    minScale?: number;
    maxScale?: number;
}
declare function RevealJS({ children, plugins, controls, controlsTutorial, controlsLayout, controlsBackArrows, progress, slideNumber, showSlideNumber, hashOneBasedIndex, hash, respondToHashChanges, history, keyboard, keyboardCondition, disableLayout, overview, center, touch, loop, rtl, navigationMode, shuffle, fragments, fragmentInURL, embedded, help, pause, showNotes, autoPlayMedia, preloadIframes, autoAnimate, autoAnimateMatcher, autoAnimateEasing, autoAnimateDuration, autoAnimateUnmatched, autoAnimateStyles, autoSlide, autoSlideStoppable, autoSlideMethod, defaultTiming, mouseWheel, previewLinks, postMessage, postMessageEvents, focusBodyOnPageVisibilityChange, transition, // none/fade/slide/convex/concave/zoom
transitionSpeed, // default/fast/slow
backgroundTransition, // none/fade/slide/convex/concave/zoom
pdfMaxPagesPerSlide, pdfSeparateFragments, pdfPageHeightOffset, viewDistance, mobileViewDistance, display, hideInactiveCursor, hideCursorTime, parallaxBackgroundImage, // CSS syntax, e.g. "a.jpg"
parallaxBackgroundSize, // CSS syntax, e.g. "3000px 2000px"
parallaxBackgroundRepeat, // repeat/repeat-x/repeat-y/no-repeat/initial/inherit
parallaxBackgroundPosition, // CSS syntax, e.g. "top left"
parallaxBackgroundHorizontal, parallaxBackgroundVertical, width, height, margin, minScale, maxScale, }: Props): JSX.Element;
export default RevealJS;
