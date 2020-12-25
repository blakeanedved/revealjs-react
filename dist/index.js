"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = exports.Ul = exports.Span = exports.Slide = exports.RevealJS = exports.P = exports.Ol = exports.Note = exports.Main = exports.Link = exports.Li = exports.Image = exports.IFrame = exports.Header = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.H = exports.Footer = exports.Figure = exports.FigCaption = exports.Div = exports.Code = exports.BlockQuote = exports.Audio = void 0;
/*!
 * revealjs-react 1.0.0
 * MIT licensed
 *
 * Copyright (C) 2020 Blake Nedved, https://blakeanedved.github.io/
 */
const audio_1 = __importDefault(require("./components/audio"));
exports.Audio = audio_1.default;
const blockquote_1 = __importDefault(require("./components/blockquote"));
exports.BlockQuote = blockquote_1.default;
const code_1 = __importDefault(require("./components/code"));
exports.Code = code_1.default;
const div_1 = __importDefault(require("./components/div"));
exports.Div = div_1.default;
const figcaption_1 = __importDefault(require("./components/figcaption"));
exports.FigCaption = figcaption_1.default;
const figure_1 = __importDefault(require("./components/figure"));
exports.Figure = figure_1.default;
const footer_1 = __importDefault(require("./components/footer"));
exports.Footer = footer_1.default;
const h_1 = __importStar(require("./components/h"));
exports.H = h_1.default;
Object.defineProperty(exports, "H1", { enumerable: true, get: function () { return h_1.H1; } });
Object.defineProperty(exports, "H2", { enumerable: true, get: function () { return h_1.H2; } });
Object.defineProperty(exports, "H3", { enumerable: true, get: function () { return h_1.H3; } });
Object.defineProperty(exports, "H4", { enumerable: true, get: function () { return h_1.H4; } });
Object.defineProperty(exports, "H5", { enumerable: true, get: function () { return h_1.H5; } });
Object.defineProperty(exports, "H6", { enumerable: true, get: function () { return h_1.H6; } });
const header_1 = __importDefault(require("./components/header"));
exports.Header = header_1.default;
const iframe_1 = __importDefault(require("./components/iframe"));
exports.IFrame = iframe_1.default;
const image_1 = __importDefault(require("./components/image"));
exports.Image = image_1.default;
const li_1 = __importDefault(require("./components/li"));
exports.Li = li_1.default;
const link_1 = __importDefault(require("./components/link"));
exports.Link = link_1.default;
const main_1 = __importDefault(require("./components/main"));
exports.Main = main_1.default;
const note_1 = __importDefault(require("./components/note"));
exports.Note = note_1.default;
const ol_1 = __importDefault(require("./components/ol"));
exports.Ol = ol_1.default;
const p_1 = __importDefault(require("./components/p"));
exports.P = p_1.default;
const reveal_1 = __importDefault(require("./components/reveal"));
exports.RevealJS = reveal_1.default;
const slide_1 = __importDefault(require("./components/slide"));
exports.Slide = slide_1.default;
const span_1 = __importDefault(require("./components/span"));
exports.Span = span_1.default;
const ul_1 = __importDefault(require("./components/ul"));
exports.Ul = ul_1.default;
const video_1 = __importDefault(require("./components/video"));
exports.Video = video_1.default;
