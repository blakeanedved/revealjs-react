/*!
 * revealjs-react 1.0.0
 * MIT licensed
 *
 * Copyright (C) 2020 Blake Nedved, https://blakeanedved.github.io/
 */
import Audio from './components/audio';
import type { AudioProps } from './components/audio';
import BlockQuote from './components/blockquote';
import type { BlockQuoteProps } from './components/blockquote';
import Code from './components/code';
import type { CodeProps } from './components/code';
import Div from './components/div';
import type { DivProps } from './components/div';
import FigCaption from './components/figcaption';
import type { FigCaptionProps } from './components/figcaption';
import Figure from './components/figure';
import type { FigureProps } from './components/figure';
import Footer from './components/footer';
import type { FooterProps } from './components/footer';
import { H1, H2, H3, H4, H5, H6 } from './components/h';
import type { HProps } from './components/h';
import Header from './components/header';
import type { HeaderProps } from './components/header';
import IFrame from './components/iframe';
import type { IFrameProps } from './components/iframe';
import Image from './components/image';
import type { ImageProps } from './components/image';
import Li from './components/li';
import type { LiProps } from './components/li';
import Link from './components/link';
import type { LinkProps } from './components/link';
import Main from './components/main';
import type { MainProps } from './components/main';
import Note from './components/note';
import type { NoteProps } from './components/note';
import Ol from './components/ol';
import type { OlProps } from './components/ol';
import P from './components/p';
import type { PProps } from './components/p';
import RevealJS from './components/reveal';
import type { RevealJSProps } from './components/reveal';
import Slide from './components/slide';
import type { SlideProps } from './components/slide';
import Span from './components/span';
import type { SpanProps } from './components/span';
import Ul from './components/ul';
import type { UlProps } from './components/ul';
import Video from './components/video';
import type { VideoProps } from './components/video';

// plugins
import HighlightPlugin from "./plugins/highlight";
import MathPlugin from "./plugins/math";
import MarkdownPlugin from "./plugins/markdown";
import NotesPlugin from "./plugins/notes";
import SearchPlugin from "./plugins/search";
import ZoomPlugin from "./plugins/zoom";

// types for reveal.js
import type {
  RevealPlugin,
  RevealPluginList,
  RevealConfig,
  RevealNavigate,
  RevealRoutes,
  RevealSlideCoordinates,
  RevealSlideSize
} from "reveal.js";
import type Reveal from "reveal.js";

export {
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
