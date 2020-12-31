/*!
 * revealjs-react 1.0.0
 * MIT licensed
 *
 * Copyright (C) 2020 Blake Nedved, https://blakeanedved.github.io/
 */
import { 
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  BlockQuote,
  Div,
  FigCaption,
  Figure,
  Footer,
  Header,
  Li,
  Main,
  Ol,
  P,
  Span,
  Ul,
} from './components/SimpleComponents';
import type {
  HProps,
  BlockQuoteProps,
  DivProps,
  FigCaptionProps,
  FigureProps,
  FooterProps,
  HeaderProps,
  LiProps,
  MainProps,
  OlProps,
  PProps,
  SpanProps,
  UlProps,
} from './components/SimpleComponents';
import Audio from './components/Audio';
import type { AudioProps } from './components/Audio';
import Code from './components/Code';
import type { CodeProps } from './components/Code';
import IFrame from './components/Iframe';
import type { IFrameProps } from './components/Iframe';
import Image from './components/Image';
import type { ImageProps } from './components/Image';
import Link from './components/Link';
import type { LinkProps } from './components/Link';
import Note from './components/Note';
import type { NoteProps } from './components/Note';
import RevealJS from './components/RevealJS';
import type { RevealJSProps } from './components/RevealJS';
import Slide from './components/Slide';
import type { SlideProps } from './components/Slide';
import Video from './components/Video';
import type { VideoProps } from './components/Video';
import { RevealContext } from "./components/RevealProvider";

// hooks
import useReveal from './hooks/useReveal';

// plugins
import UntypedHighlightPlugin from './plugins/HighlightPlugin';
import UntypedMathPlugin from './plugins/MathPlugin';
import UntypedMarkdownPlugin from './plugins/MarkdownPlugin';
import UntypedNotesPlugin from './plugins/NotesPlugin';
import UntypedSearchPlugin from './plugins/SearchPlugin';
import UntypedZoomPlugin from './plugins/ZoomPlugin';

const HighlightPlugin: RevealPlugin = UntypedHighlightPlugin;
const MathPlugin: RevealPlugin = UntypedMathPlugin;
const MarkdownPlugin: RevealPlugin = UntypedMarkdownPlugin;
const NotesPlugin: RevealPlugin = UntypedNotesPlugin;
const SearchPlugin: RevealPlugin = UntypedSearchPlugin;
const ZoomPlugin: RevealPlugin = UntypedZoomPlugin;

// types for reveal.js
import type {
  RevealPlugin,
  RevealPluginList,
  RevealConfig,
  RevealNavigate,
  RevealRoutes,
  RevealSlideCoordinates,
  RevealSlideSize,
} from '../types/reveal.js';
import type Reveal from '../types/reveal.js';

export {
  useReveal,
  RevealContext,
  Audio,
  BlockQuote,
  Code,
  Div,
  FigCaption,
  Figure,
  Footer,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Header,
  IFrame,
  Image,
  Li,
  Link,
  Main,
  Note,
  Ol,
  P,
  RevealJS,
  Slide,
  Span,
  Ul,
  Video,
  HighlightPlugin,
  MathPlugin,
  MarkdownPlugin,
  SearchPlugin,
  ZoomPlugin,
  NotesPlugin,
};

export type {
  RevealPlugin,
  RevealPluginList,
  Reveal,
  RevealConfig,
  RevealNavigate,
  RevealRoutes,
  RevealSlideCoordinates,
  RevealSlideSize,
  AudioProps,
  BlockQuoteProps,
  CodeProps,
  DivProps,
  FigCaptionProps,
  FigureProps,
  FooterProps,
  HProps,
  HeaderProps,
  IFrameProps,
  ImageProps,
  LiProps,
  LinkProps,
  MainProps,
  NoteProps,
  OlProps,
  PProps,
  RevealJSProps,
  SlideProps,
  SpanProps,
  UlProps,
  VideoProps,
};
