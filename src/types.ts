
export type TransitionAtoms = 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
export type ActiveTransitions = Exclude<TransitionAtoms, "none">;
export type TransitionIn = `${ActiveTransitions}-in`
export type TransitionOut = `${ActiveTransitions}-out`;
export type Transitions = TransitionAtoms | `${TransitionIn} ${TransitionOut}`;
export type TransitionSpeed = 'default' | 'fast' | 'slow'
export type BackgroundRepeat = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'initial' | 'inherit'
