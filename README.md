# revealjs-react

A Typescript/React wrapper for the RevealJS Presentation Library with types for Reveal.js as well as plugins.

- [revealjs-react](#revealjs-react)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Components](#components)
    - [RevealJS](#revealjs)
    - [Slide](#slide)
    - [Elements](#elements)
      - [Code](#code)
      - [Audio](#audio)
      - [BlockQuote](#blockquote)
      - [Div](#div)
      - [FigCaption](#figcaption)
      - [Figure](#figure)
      - [Footer](#footer)
      - [H1](#h1)
      - [H2](#h2)
      - [H3](#h3)
      - [H4](#h4)
      - [H5](#h5)
      - [H6](#h6)
      - [Header](#header)
      - [IFrame](#iframe)
      - [Image](#image)
      - [Li](#li)
      - [Link](#link)
      - [Main](#main)
      - [Note](#note)
      - [Ol](#ol)
      - [P](#p)
      - [Span](#span)
      - [Ul](#ul)
      - [Video](#video)
      - [Notes](#notes)
  - [hooks](#hooks)
    - [useReveal](#usereveal)
  - [Using plugins](#using-plugins)

## Installation

`npm install -S @gregcello/revealjs-react react reveal.js react-dom`

or

`yarn add @gregcello/revealjs-react react reveal.js react-dom`

## Usage

```jsx
import React from 'react';
import { render } from 'react-dom';
import { RevealJS, Slide, H1 } from 'revealjs-react';
import RevealHighlight from 'revealjs-react/plugins/highlight';

render(
  <RevealJS plugins={[RevealHighlight]}>
    <Slide>
      <H1>Hello, World!</H1>
    </Slide>
  </RevealJS>,
  document.querySelector('#root'),
);
```

## Components

All components support the following properties:

```ts
  id?: string; // id for the html component
  className?: string; // any additional class name(s), will be concatenated with the fragment classnames
  fragment?: boolean; // if true, this is treated as a fragment (see the reveal.js documentation)
  fragmentStyle?: string; // any extra fragment-specific style
  fragmentIndex?: number; // the fragment index (see the reveal.js documentation)
  fitText?: boolean; // if true, adds the "r-fit-text" classname (see the reveal.js documentation)
```

### RevealJS

The properties are the same as the configuration object passed to `Reveal.initialize()`. This package
adds an additional property `onDeckReady` which is called when initialization has succeeded and the
API is ready to interact. Alternatively, to define custom interactions with child components, use the
[useReveal hook](#usereveal).

```ts
  plugins = [],

  // Display presentation control arrows
  controls = true,

  // Help the user learn the controls by providing hints, for example by
  // bouncing the down arrow when they first encounter a vertical slide
  controlsTutorial = true,

  // Determines where controls appear, "edges" or "bottom-right"
  controlsLayout = 'bottom-right',

  // Visibility rule for backwards navigation arrows; "faded", "hidden"
  // or "visible"
  controlsBackArrows = 'faded',

  // Display a presentation progress bar
  progress = true,

  // Display the page number of the current slide
  // - true =    Show slide number
  // - false =   Hide slide number
  //
  // Can optionally be set as a string that specifies the number formatting =
  // - "h.v" =   Horizontal . vertical slide number (default)
  // - "h/v" =   Horizontal / vertical slide number
  // - "c" =   Flattened slide number
  // - "c/t" =   Flattened slide number / total slides
  //
  // Alternatively, you can provide a function that returns the slide
  // number for the current slide. The function should take in a slide
  // object and return an array with one string [slideNumber] or
  // three strings [n1,delimiter,n2]. See #formatSlideNumber().
  slideNumber = false,

  // Can be used to limit the contexts in which the slide number appears
  // - "all" =      Always show the slide number
  // - "print" =    Only when printing to PDF
  // - "speaker" =  Only in the speaker view
  showSlideNumber = 'all',

  // Use 1 based indexing for # links to match slide number (default is zero
  // based)
  hashOneBasedIndex = false,

  // Add the current slide number to the URL hash so that reloading the
  // page/copying the URL will return you to the same slide
  hash = false,

  // Flags if we should monitor the hash and change slides accordingly
  respondToHashChanges = true,

  // Push each slide change to the browser history.  Implies `hash = true`
  history = false,

  // Enable keyboard shortcuts for navigation
  keyboard = true,

  // Optional function that blocks keyboard events when retuning false
  //
  // If you set this to 'focused', we will only capture keyboard events
  // for embedded decks when they are in focus
  keyboardCondition = null,

  // Disables the default reveal.js slide layout (scaling and centering)
  // so that you can use custom CSS layout
  disableLayout = false,

  // Enable the slide overview mode
  overview = true,

  // Vertical centering of slides
  center = true,

  // Enables touch navigation on devices with touch input
  touch = true,

  // Loop the presentation
  loop = false,

  // Change the presentation direction to be RTL
  rtl = false,

  // Changes the behavior of our navigation directions.
  //
  // "default"
  // Left/right arrow keys step between horizontal slides, up/down
  // arrow keys step between vertical slides. Space key steps through
  // all slides (both horizontal and vertical).
  //
  // "linear"
  // Removes the up/down arrows. Left/right arrows step through all
  // slides (both horizontal and vertical).
  //
  // "grid"
  // When this is enabled, stepping left/right from a vertical stack
  // to an adjacent vertical stack will land you at the same vertical
  // index.
  //
  // Consider a deck with six slides ordered in two vertical stacks =
  // 1.1    2.1
  // 1.2    2.2
  // 1.3    2.3
  //
  // If you're on slide 1.3 and navigate right, you will normally move
  // from 1.3 -> 2.1. If "grid" is used, the same navigation takes you
  // from 1.3 -> 2.3.
  navigationMode = 'default',

  // Randomizes the order of slides each time the presentation loads
  shuffle = false,

  // Turns fragments on and off globally
  fragments = true,

  // Flags whether to include the current fragment in the URL,
  // so that reloading brings you to the same fragment position
  fragmentInURL = true,

  // Flags if the presentation is running in an embedded mode,
  // i.e. contained within a limited portion of the screen
  embedded = false,

  // Flags if we should show a help overlay when the question-mark
  // key is pressed
  help = true,

  // Flags if it should be possible to pause the presentation (blackout)
  pause = true,

  // Flags if speaker notes should be visible to all viewers
  showNotes = false,

  // Global override for autolaying embedded media (video/audio/iframe)
  // - null =   Media will only autoplay if data-autoplay is present
  // - true =   All media will autoplay, regardless of individual setting
  // - false =  No media will autoplay, regardless of individual setting
  autoPlayMedia = null,

  // Global override for preloading lazy-loaded iframes
  // - null =   Iframes with data-src AND data-preload will be loaded when within
  //           the viewDistance, iframes with only data-src will be loaded when visible
  // - true =   All iframes with data-src will be loaded when within the viewDistance
  // - false =  All iframes with data-src will be loaded only when visible
  preloadIframes = null,

  // Can be used to globally disable auto-animation
  autoAnimate = true,

  // Optionally provide a custom element matcher that will be
  // used to dictate which elements we can animate between.
  autoAnimateMatcher = null,

  // Default settings for our auto-animate transitions, can be
  // overridden per-slide or per-element via data arguments
  autoAnimateEasing = 'ease',
  autoAnimateDuration = 1.0,
  autoAnimateUnmatched = true,

  // CSS properties that can be auto-animated. Position & scale
  // is matched separately so there's no need to include styles
  // like top/right/bottom/left, width/height or margin.
  autoAnimateStyles = [
    'opacity',
    'color',
    'background-color',
    'padding',
    'font-size',
    'line-height',
    'letter-spacing',
    'border-width',
    'border-color',
    'border-radius',
    'outline',
    'outline-offset',
  ],

  // Controls automatic progression to the next slide
  // - 0 =      Auto-sliding only happens if the data-autoslide HTML attribute
  //           is present on the current slide or fragment
  // - 1+ =     All slides will progress automatically at the given interval
  // - false =  No auto-sliding, even if data-autoslide is present
  autoSlide = 0,

  // Stop auto-sliding after user input
  autoSlideStoppable = true,

  // Use this method for navigation when auto-sliding (defaults to navigateNext)
  autoSlideMethod = null,

  // Specify the average time in seconds that you think you will spend
  // presenting each slide. This is used to show a pacing timer in the
  // speaker view
  defaultTiming = null,

  // Enable slide navigation via mouse wheel
  mouseWheel = false,

  // Opens links in an iframe preview overlay
  // Add `data-preview-link` and `data-preview-link="false"` to customise each link
  // individually
  previewLinks = false,

  // Exposes the reveal.js API through window.postMessage
  postMessage = true,

  // Dispatches all reveal.js events to the parent window through postMessage
  postMessageEvents = false,

  // Focuses body when page changes visibility to ensure keyboard shortcuts work
  focusBodyOnPageVisibilityChange = true,

  // Transition style
  transition = 'slide', // none/fade/slide/convex/concave/zoom

  // Transition speed
  transitionSpeed = 'default', // default/fast/slow

  // Transition style for full page slide backgrounds
  backgroundTransition = 'fade', // none/fade/slide/convex/concave/zoom

  // The maximum number of pages a single slide can expand onto when printing
  // to PDF, unlimited by default
  pdfMaxPagesPerSlide = Number.POSITIVE_INFINITY,

  // Prints each fragment on a separate slide
  pdfSeparateFragments = true,

  // Offset used to reduce the height of content within exported PDF pages.
  // This exists to account for environment differences based on how you
  // print to PDF. CLI printing options, like phantomjs and wkpdf, can end
  // on precisely the total height of the document whereas in-browser
  // printing has to end one pixel before.
  pdfPageHeightOffset = -1,

  // Number of slides away from the current that are visible
  viewDistance = 3,

  // Number of slides away from the current that are visible on mobile
  // devices. It is advisable to set this to a lower number than
  // viewDistance in order to save resources.
  mobileViewDistance = 2,

  // The display mode that will be used to show slides
  display = 'block',

  // Hide cursor if inactive
  hideInactiveCursor = true,

  // Time before the cursor is hidden (in ms)
  hideCursorTime = 5000,

  // Parallax background image
  parallaxBackgroundImage = '', // CSS syntax, e.g. "a.jpg"

  // Parallax background size
  parallaxBackgroundSize = '', // CSS syntax, e.g. "3000px 2000px"

  // Parallax background repeat
  parallaxBackgroundRepeat = '', // repeat/repeat-x/repeat-y/no-repeat/initial/inherit

  // Parallax background position
  parallaxBackgroundPosition = '', // CSS syntax, e.g. "top left"

  // Number of pixels to move the parallax background per slide
  // - Calculated automatically unless specified
  // - Set to 0 to disable movement along an axis
  parallaxBackgroundHorizontal = 200,
  parallaxBackgroundVertical = 50,

  // The "normal" size of the presentation, aspect ratio will
  // be preserved when the presentation is scaled to fit different
  // resolutions. Can be specified using percentage units.
  width = 960,
  height = 700,

  // Factor of the display size that should remain empty around
  // the content
  margin = 0.04,

  // Bounds for smallest/largest possible scale to apply to content
  minScale = 0.2,
  maxScale = 2.0,

  // a callback to access the deck when it is ready for interaction, accepts a single parameter.
  onDeckReady,
```

### Slide

The `Slide` component adds a `<section>` to create a slide. It supports these properties

```ts
  autoslide?: true;
  autoAnimate?: true;
  autoAnimateUnmatched?: boolean;
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
  id?: string;
  transition?: Transitions;
  // Transitions can be: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom'
  // or a combo of 'fade-in fade-out' or 'slide-in fade-out' etc.
  transitionSpeed?: TransitionSpeed; // 'default' | 'fast' | 'slow'
  visibility?: 'uncounted' | 'hidden';
```
### Elements

#### Code

The `Code` component sets helpers for animation across slides. Use the `HighlightPlugin` to add code highlighting.

```ts
  children: { code: string }; // pass `{ code: 'console.log("hello world");' }`, for example
  language?: string; // for example "typescript"
  escape?: boolean; // html escape the code
  lineNumbers?: string | true; // display line numbers. This is turned on if you specify autoAnimateId
  noTrim?: boolean; // if true, disables trimming whitespace on the edges of the code
  // pass in an id that you will use for the same code block in other slides to enable smooth transitions
  // `autoAnimate` must be passed to the slides to enable this (see the reveal.js documentation)
  autoAnimateId?: string;
```

#### Audio

The `Audio` component accepts all the parameters of the `audio` html tag, plus these properties:

```ts
  autoplay?: boolean;
  controls?: boolean;
  lazy?: string; // lazy-loads the audio, using data-src
  loop?: boolean;
  muted?: boolean;
  preload?: boolean; // sets data-preload
  src: string;
```

#### BlockQuote

supports all the standard `blockquote` parameters plus the reveal.js addons above

#### Div

supports all the standard `div` parameters plus the reveal.js addons above

#### FigCaption

supports all the standard `figcaption` parameters plus the reveal.js addons above

#### Figure

supports all the standard `figure` parameters plus the reveal.js addons above

#### Footer

supports all the standard `footer` parameters plus the reveal.js addons above

#### H1

supports all the standard `h1` parameters plus the reveal.js addons above

#### H2

supports all the standard `h2` parameters plus the reveal.js addons above

#### H3

supports all the standard `h3` parameters plus the reveal.js addons above

#### H4

supports all the standard `h4` parameters plus the reveal.js addons above

#### H5

supports all the standard `h5` parameters plus the reveal.js addons above

#### H6

supports all the standard `h6` parameters plus the reveal.js addons above

#### Header

supports all the standard `header` parameters plus the reveal.js addons above

#### IFrame

supports all the standard `iframe` parameters plus the reveal.js addons above, and these

#### Image


#### Li

supports all the standard `li` parameters plus the reveal.js addons above

#### Link

supports all the standard `a` parameters plus the reveal.js addons above. In addition,
the `Link` component makes it possible to link to slides easily.
Pass in the slide number (1-indexed), the slide id (a string), or the slide itself,
retrieved using a ref, and this will link to the slide properly. Preferred is using the
slide ID or the slide itself, as this will survive API changes in reveal.js


#### Main

supports all the standard `main` parameters plus the reveal.js addons above

#### Note


#### Ol

supports all the standard `ol` parameters plus the reveal.js addons above

#### P

supports all the standard `p` parameters plus the reveal.js addons above


#### Span

supports all the standard `span` parameters plus the reveal.js addons above

#### Ul

supports all the standard `ul` parameters plus the reveal.js addons above

#### Video

The `Audio` component accepts all the parameters of the `audio` html tag, plus these properties:

```ts
  autoplay?: boolean;
  controls?: boolean;
  lazy?: string; // lazy-loads the audio, using data-src
  loop?: boolean;
  muted?: boolean;
  preload?: boolean; // sets data-preload
  height?: number;
  preload?: '' | 'metadata' | 'auto' | 'none';
  width?: number;
  src: string[] | string; // this allows specifying multiple video sources or a single source
```

#### Notes

Add speaker notes with an `aside` by using this component.

## hooks

In order to access the internal `Reveal` object, a hook is provided.

### useReveal

This can be used to retrieve the current Reveal instance. Note that until the deck is initialized,
it will be `null`. The type of the deck is strictly typed using custom internal types, as `@types/reveal`
is a full major version out of date.

```ts
import { useReveal } from "@gregcello/revealjs-react";

export function MyComponent() {
  const { reveal } = useReveal();
  useEffect(() => {
    if (!reveal) {
      return;
    }
    // interact with reveal API - reveal is only set
    // when it is initialized and the API is ready to use
    reveal.on('slidechanged', () => { /* do something */ });
  }, [reveal]);
}
```

Note that this hook must be used in a child component tp the `RevealJs` component. This will not work:

```ts
import { useReveal, RevealJS } from "@gregcello/revealjs-react";

export function MyPresentation() {
  const { reveal, readyPromise } = useReveal();
  // don't do this!
  return (
    <RevealJs>
    { /* ... slides go here */ }
    </RevealJs>
  )
```

Instead, use the `onDeckReady` prop as documented [in the RevealJS component](#revealjs)

## Using plugins

Built-in plugins from reveal.js are available as direct imports

```ts
import {
  HighlightPlugin,
  MarkdownPlugin,
  MathPlugin,
  NotesPlugin,
  SearchPlugin,
  ZoomPlugin,
} from "@gregcello/revealjs-react";

// then in the source

const plugins = [HighlightPlugin, MarkdownPlugin, MathPlugin, NotesPlugin, SearchPlugin, ZoomPlugin];

function MyPresentation() {
  return (
    <RevealJS plugins={plugins}>
      // your slides here
    </RevealJS>
  );
}
```

Use only the plugins you need. These plugins are strictly typed using custom typescript definitions.
To define or type your own custom plugin, use the `RevealPlugin` type exported from `@gregcello/revealjs-react`