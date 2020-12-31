type RevealNavigate = () => void;
export interface RevealRoutes {
  left: boolean;
  right: boolean;
  top: boolean;
  bottom: boolean;
}
export interface RevealSlideCoordinates {
  h: number;
  v: number;
  f: number;
}
export interface RevealSlideSize {
  presentationWidth: number;
  presentationHeight: number;
}

export interface RevealDeckState {
  indexh: number;
  indexv: number;
  indexf?: number;
  overview: boolean;
  paused: boolean;
}
export default class Reveal {
  constructor(rootEl: HTMLDivElement, config: RevealConfig);
  constructor(config: RevealConfig);
  slide: (indexh: number, indexv?: number, indexh?: number) => void;
  left: RevealNavigate;
  right: RevealNavigate;
  up: RevealNavigate;
  down: RevealNavigate;
  prev: RevealNavigate;
  next: RevealNavigate;
  prevFragment: RevealNavigate;
  nextFragment: RevealNavigate;
  availableRoutes: () => RevealRoutes;
  sync: () => void;
  layout: () => void;
  shuffle: () => void;
  getConfig: () => RevealConfig;
  getScale: () => number;
  getState: () => RevealDeckState;
  getComputedSlideSize: () => RevealSlideSize;
  getIndices: (slide?: HTMLElement) => RevealSlideCoordinates;
  getProgress: () => number;
  getSlideNotes: (slide?: HTMLElement) => string | null;
  getPreviousSlide: () => HTMLElement;
  getCurrentSlide: () => HTMLElement;
  getHorizontalSlides: () => HTMLElement[];
  getVerticalSlides: () => HTMLElement[];
  getTotalSlides: () => number;
  getSlidePastCount: () => number;
  getSlides: () => HTMLElement[];
  hasHorizontalSlides: () => boolean;
  hasVerticalSlides: () => boolean;
  hasNavigatedHorizontally: () => boolean;
  hasNavigatedVertically: () => boolean;
  isFirstSlide: () => boolean;
  isLastSlide: () => boolean;
  isVerticalSlide: () => boolean;
  toggleHelp: () => void;
  toggleOverview: () => void;
  toggleAutoSlide: () => void;
  togglePause: () => void;
  isOverview: () => void;
  isAutoSliding: () => void;
  isPaused: () => void;
  getRevealElement: () => HTMLElement;
  getSlidesElement: () => HTMLElement;
  getViewportElement: () => HTMLElement;
  initialize(options?: Partial<Options>);
  hasPlugin(string): boolean;
  getPlugin(string): RevealPlugin | null;
  getPlugins(): RevealPluginList;
}
export interface RevealPlugin {
  id: string;
  init: (reveal: Reveal) => void | Promise<void>;
}
export interface RevealPluginList {
  [pluginName: string]: RevealPlugin;
}
export interface RevealConfig {
  plugins?: RevealPlugin[];

  controls?: boolean;
  controlsTutorial?: boolean;
  controlsLayout?: 'bottom-right' | 'edge';
  controlsBackArrows?: 'faded' | 'hidden' | 'visible';
  progress?: boolean;
  slideNumber?:
    | boolean
    | 'h.v'
    | 'h/v'
    | 'c'
    | 'c/t'
    | ((slide: { h: number; v: number; f: number }) => string | string[]);
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
  autoAnimateMatcher?:
    | null
    | ((
        fromSlide: HTMLElement,
        toSlide: HTMLElement,
      ) => [HTMLElement, HTMLElement][]);
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
