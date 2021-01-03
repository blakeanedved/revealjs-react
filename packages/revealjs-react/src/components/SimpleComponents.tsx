import { generateBaseComponent, SimpleComponent } from "./BaseComponent";

const componentsToGenerate = {
  h1: generateBaseComponent('h1'),
  h2: generateBaseComponent('h2'),
  h3: generateBaseComponent('h3'),
  h4: generateBaseComponent('h4'),
  h5: generateBaseComponent('h5'),
  h6: generateBaseComponent('h6'),
  blockquote: generateBaseComponent('blockquote'),
  div: generateBaseComponent('div'),
  figcaption: generateBaseComponent('figcaption'),
  figure: generateBaseComponent('figure'),
  footer: generateBaseComponent('footer'),
  header: generateBaseComponent('header'),
  li: generateBaseComponent('li'),
  main: generateBaseComponent('main'),
  ol: generateBaseComponent('ol'),
  p: generateBaseComponent('p'),
  span: generateBaseComponent('span'),
  ul: generateBaseComponent('ul'),
}

type SimpleComponentTypes = {
  [P in SimpleComponent]: Parameters<typeof componentsToGenerate[P]>[0];
}

export type HProps = SimpleComponentTypes['h1'];
export type BlockQuoteProps = SimpleComponentTypes['blockquote'];
export type DivProps = SimpleComponentTypes['div'];
export type FigCaptionProps = SimpleComponentTypes['figcaption'];
export type FigureProps = SimpleComponentTypes['figure'];
export type FooterProps = SimpleComponentTypes['footer'];
export type HeaderProps = SimpleComponentTypes['header'];
export type LiProps = SimpleComponentTypes['li'];
export type MainProps = SimpleComponentTypes['main'];
export type OlProps = SimpleComponentTypes['ol'];
export type PProps = SimpleComponentTypes['p'];
export type SpanProps = SimpleComponentTypes['span'];
export type UlProps = SimpleComponentTypes['ul'];

export const H1 = componentsToGenerate.h1;
export const H2 = componentsToGenerate.h2;
export const H3 = componentsToGenerate.h3;
export const H4 = componentsToGenerate.h4;
export const H5 = componentsToGenerate.h5;
export const H6 = componentsToGenerate.h6;
export const BlockQuote = componentsToGenerate.blockquote;
export const Div = componentsToGenerate.div;
export const FigCaption = componentsToGenerate.figcaption;
export const Figure = componentsToGenerate.figure;
export const Footer = componentsToGenerate.footer;
export const Header = componentsToGenerate.header;
export const Li = componentsToGenerate.li;
export const Main = componentsToGenerate.main;
export const Ol = componentsToGenerate.ol;
export const P = componentsToGenerate.p;
export const Span = componentsToGenerate.span;
export const Ul = componentsToGenerate.ul;