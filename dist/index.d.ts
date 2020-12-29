/*!
 * revealjs-react 1.0.0
 * MIT licensed
 *
 * Copyright (C) 2020 Blake Nedved, https://blakeanedved.github.io/
 */
import { H1, H2, H3, H4, H5, H6, BlockQuote, Div, FigCaption, Figure, Footer, Header, Li, Main, Ol, P, Span, Ul } from "./components/SimpleComponents";
import type { HProps, BlockQuoteProps, DivProps, FigCaptionProps, FigureProps, FooterProps, HeaderProps, LiProps, MainProps, OlProps, PProps, SpanProps, UlProps } from "./components/SimpleComponents";
import Audio from './components/audio';
import type { AudioProps } from './components/audio';
import Code from './components/code';
import type { CodeProps } from './components/code';
import IFrame from './components/iframe';
import type { IFrameProps } from './components/iframe';
import Image from './components/image';
import type { ImageProps } from './components/image';
import Link from './components/link';
import type { LinkProps } from './components/link';
import Note from './components/note';
import type { NoteProps } from './components/note';
import RevealJS from './components/reveal';
import type { RevealJSProps } from './components/reveal';
import Slide from './components/slide';
import type { SlideProps } from './components/slide';
import Video from './components/video';
import type { VideoProps } from './components/video';
import HighlightPlugin from "./plugins/highlight";
import MathPlugin from "./plugins/math";
import MarkdownPlugin from "./plugins/markdown";
import NotesPlugin from "./plugins/notes";
import SearchPlugin from "./plugins/search";
import ZoomPlugin from "./plugins/zoom";
import type { RevealPlugin, RevealPluginList, RevealConfig, RevealNavigate, RevealRoutes, RevealSlideCoordinates, RevealSlideSize } from "reveal.js";
import type Reveal from "reveal.js";
export { Audio, BlockQuote, Code, Div, FigCaption, Figure, Footer, H1, H2, H3, H4, H5, H6, Header, IFrame, Image, Li, Link, Main, Note, Ol, P, RevealJS, Slide, Span, Ul, Video, HighlightPlugin, MathPlugin, MarkdownPlugin, SearchPlugin, ZoomPlugin, NotesPlugin, };
export type { RevealPlugin, RevealPluginList, Reveal, RevealConfig, RevealNavigate, RevealRoutes, RevealSlideCoordinates, RevealSlideSize, AudioProps, BlockQuoteProps, CodeProps, DivProps, FigCaptionProps, FigureProps, FooterProps, HProps, HeaderProps, IFrameProps, ImageProps, LiProps, LinkProps, MainProps, NoteProps, OlProps, PProps, RevealJSProps, SlideProps, SpanProps, UlProps, VideoProps, };
