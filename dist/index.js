"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesPlugin = exports.ZoomPlugin = exports.SearchPlugin = exports.MarkdownPlugin = exports.MathPlugin = exports.HighlightPlugin = exports.Video = exports.Ul = exports.Span = exports.Slide = exports.RevealJS = exports.P = exports.Ol = exports.Note = exports.Main = exports.Link = exports.Li = exports.Image = exports.IFrame = exports.Header = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Footer = exports.Figure = exports.FigCaption = exports.Div = exports.Code = exports.BlockQuote = exports.Audio = exports.RevealContext = exports.useReveal = void 0;
/*!
 * revealjs-react 1.0.0
 * MIT licensed
 *
 * Copyright (C) 2020 Blake Nedved, https://blakeanedved.github.io/
 */
const SimpleComponents_1 = require("./components/SimpleComponents");
Object.defineProperty(exports, "H1", { enumerable: true, get: function () { return SimpleComponents_1.H1; } });
Object.defineProperty(exports, "H2", { enumerable: true, get: function () { return SimpleComponents_1.H2; } });
Object.defineProperty(exports, "H3", { enumerable: true, get: function () { return SimpleComponents_1.H3; } });
Object.defineProperty(exports, "H4", { enumerable: true, get: function () { return SimpleComponents_1.H4; } });
Object.defineProperty(exports, "H5", { enumerable: true, get: function () { return SimpleComponents_1.H5; } });
Object.defineProperty(exports, "H6", { enumerable: true, get: function () { return SimpleComponents_1.H6; } });
Object.defineProperty(exports, "BlockQuote", { enumerable: true, get: function () { return SimpleComponents_1.BlockQuote; } });
Object.defineProperty(exports, "Div", { enumerable: true, get: function () { return SimpleComponents_1.Div; } });
Object.defineProperty(exports, "FigCaption", { enumerable: true, get: function () { return SimpleComponents_1.FigCaption; } });
Object.defineProperty(exports, "Figure", { enumerable: true, get: function () { return SimpleComponents_1.Figure; } });
Object.defineProperty(exports, "Footer", { enumerable: true, get: function () { return SimpleComponents_1.Footer; } });
Object.defineProperty(exports, "Header", { enumerable: true, get: function () { return SimpleComponents_1.Header; } });
Object.defineProperty(exports, "Li", { enumerable: true, get: function () { return SimpleComponents_1.Li; } });
Object.defineProperty(exports, "Main", { enumerable: true, get: function () { return SimpleComponents_1.Main; } });
Object.defineProperty(exports, "Ol", { enumerable: true, get: function () { return SimpleComponents_1.Ol; } });
Object.defineProperty(exports, "P", { enumerable: true, get: function () { return SimpleComponents_1.P; } });
Object.defineProperty(exports, "Span", { enumerable: true, get: function () { return SimpleComponents_1.Span; } });
Object.defineProperty(exports, "Ul", { enumerable: true, get: function () { return SimpleComponents_1.Ul; } });
const Audio_1 = __importDefault(require("./components/Audio"));
exports.Audio = Audio_1.default;
const Code_1 = __importDefault(require("./components/Code"));
exports.Code = Code_1.default;
const Iframe_1 = __importDefault(require("./components/Iframe"));
exports.IFrame = Iframe_1.default;
const Image_1 = __importDefault(require("./components/Image"));
exports.Image = Image_1.default;
const Link_1 = __importDefault(require("./components/Link"));
exports.Link = Link_1.default;
const Note_1 = __importDefault(require("./components/Note"));
exports.Note = Note_1.default;
const RevealJS_1 = __importDefault(require("./components/RevealJS"));
exports.RevealJS = RevealJS_1.default;
const Slide_1 = __importDefault(require("./components/Slide"));
exports.Slide = Slide_1.default;
const Video_1 = __importDefault(require("./components/Video"));
exports.Video = Video_1.default;
const RevealProvider_1 = require("./components/RevealProvider");
Object.defineProperty(exports, "RevealContext", { enumerable: true, get: function () { return RevealProvider_1.RevealContext; } });
// hooks
const useReveal_1 = __importDefault(require("./hooks/useReveal"));
exports.useReveal = useReveal_1.default;
// plugins
const HighlightPlugin_1 = __importDefault(require("./plugins/HighlightPlugin"));
const MathPlugin_1 = __importDefault(require("./plugins/MathPlugin"));
const MarkdownPlugin_1 = __importDefault(require("./plugins/MarkdownPlugin"));
const NotesPlugin_1 = __importDefault(require("./plugins/NotesPlugin"));
const SearchPlugin_1 = __importDefault(require("./plugins/SearchPlugin"));
const ZoomPlugin_1 = __importDefault(require("./plugins/ZoomPlugin"));
const HighlightPlugin = HighlightPlugin_1.default;
exports.HighlightPlugin = HighlightPlugin;
const MathPlugin = MathPlugin_1.default;
exports.MathPlugin = MathPlugin;
const MarkdownPlugin = MarkdownPlugin_1.default;
exports.MarkdownPlugin = MarkdownPlugin;
const NotesPlugin = NotesPlugin_1.default;
exports.NotesPlugin = NotesPlugin;
const SearchPlugin = SearchPlugin_1.default;
exports.SearchPlugin = SearchPlugin;
const ZoomPlugin = ZoomPlugin_1.default;
exports.ZoomPlugin = ZoomPlugin;
