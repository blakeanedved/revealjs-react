export declare type TransitionAtoms = 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
export declare type ActiveTransitions = Exclude<TransitionAtoms, "none">;
export declare type TransitionIn = `${ActiveTransitions}-in`;
export declare type TransitionOut = `${ActiveTransitions}-out`;
export declare type Transitions = TransitionAtoms | `${TransitionIn} ${TransitionOut}`;
export declare type TransitionSpeed = 'default' | 'fast' | 'slow';
export declare type BackgroundRepeat = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'initial' | 'inherit';
