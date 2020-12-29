"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesPlugin = exports.ZoomPlugin = exports.SearchPlugin = exports.MarkdownPlugin = exports.MathPlugin = exports.HighlightPlugin = exports.Video = exports.Ul = exports.Span = exports.Slide = exports.RevealJS = exports.P = exports.Ol = exports.Note = exports.Main = exports.Link = exports.Li = exports.Image = exports.IFrame = exports.Header = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Footer = exports.Figure = exports.FigCaption = exports.Div = exports.Code = exports.BlockQuote = exports.Audio = void 0;
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
const audio_1 = __importDefault(require("./components/audio"));
exports.Audio = audio_1.default;
const code_1 = __importDefault(require("./components/code"));
exports.Code = code_1.default;
const iframe_1 = __importDefault(require("./components/iframe"));
exports.IFrame = iframe_1.default;
const image_1 = __importDefault(require("./components/image"));
exports.Image = image_1.default;
const link_1 = __importDefault(require("./components/link"));
exports.Link = link_1.default;
const note_1 = __importDefault(require("./components/note"));
exports.Note = note_1.default;
const reveal_1 = __importDefault(require("./components/reveal"));
exports.RevealJS = reveal_1.default;
const slide_1 = __importDefault(require("./components/slide"));
exports.Slide = slide_1.default;
const video_1 = __importDefault(require("./components/video"));
exports.Video = video_1.default;
// plugins
const highlight_1 = __importDefault(require("./plugins/highlight"));
exports.HighlightPlugin = highlight_1.default;
const math_1 = __importDefault(require("./plugins/math"));
exports.MathPlugin = math_1.default;
const markdown_1 = __importDefault(require("./plugins/markdown"));
exports.MarkdownPlugin = markdown_1.default;
const notes_1 = __importDefault(require("./plugins/notes"));
exports.NotesPlugin = notes_1.default;
const search_1 = __importDefault(require("./plugins/search"));
exports.SearchPlugin = search_1.default;
const zoom_1 = __importDefault(require("./plugins/zoom"));
exports.ZoomPlugin = zoom_1.default;
