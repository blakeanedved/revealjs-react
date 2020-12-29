"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ul = exports.Span = exports.P = exports.Ol = exports.Main = exports.Li = exports.Header = exports.Footer = exports.Figure = exports.FigCaption = exports.Div = exports.BlockQuote = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;
const BaseComponent_1 = require("./BaseComponent");
const componentsToGenerate = {
    h1: BaseComponent_1.generateBaseComponent('h1'),
    h2: BaseComponent_1.generateBaseComponent('h2'),
    h3: BaseComponent_1.generateBaseComponent('h3'),
    h4: BaseComponent_1.generateBaseComponent('h4'),
    h5: BaseComponent_1.generateBaseComponent('h5'),
    h6: BaseComponent_1.generateBaseComponent('h6'),
    blockquote: BaseComponent_1.generateBaseComponent('blockquote'),
    div: BaseComponent_1.generateBaseComponent('div'),
    figcaption: BaseComponent_1.generateBaseComponent('figcaption'),
    figure: BaseComponent_1.generateBaseComponent('figure'),
    footer: BaseComponent_1.generateBaseComponent('footer'),
    header: BaseComponent_1.generateBaseComponent('header'),
    li: BaseComponent_1.generateBaseComponent('li'),
    main: BaseComponent_1.generateBaseComponent('main'),
    ol: BaseComponent_1.generateBaseComponent('ol'),
    p: BaseComponent_1.generateBaseComponent('p'),
    span: BaseComponent_1.generateBaseComponent('span'),
    ul: BaseComponent_1.generateBaseComponent('ul'),
};
exports.H1 = componentsToGenerate.h1;
exports.H2 = componentsToGenerate.h2;
exports.H3 = componentsToGenerate.h3;
exports.H4 = componentsToGenerate.h4;
exports.H5 = componentsToGenerate.h5;
exports.H6 = componentsToGenerate.h6;
exports.BlockQuote = componentsToGenerate.blockquote;
exports.Div = componentsToGenerate.div;
exports.FigCaption = componentsToGenerate.figcaption;
exports.Figure = componentsToGenerate.figure;
exports.Footer = componentsToGenerate.footer;
exports.Header = componentsToGenerate.header;
exports.Li = componentsToGenerate.li;
exports.Main = componentsToGenerate.main;
exports.Ol = componentsToGenerate.ol;
exports.P = componentsToGenerate.p;
exports.Span = componentsToGenerate.span;
exports.Ul = componentsToGenerate.ul;
