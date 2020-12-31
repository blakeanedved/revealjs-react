"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BaseComponent_1 = require("./BaseComponent");
const formatMap = {
    '3gp': 'audio/3gp',
    aac: 'audio/aac',
    flac: 'audio/flac',
    mpg: 'audio/mpeg',
    mpeg: 'audio/mpeg',
    mp3: 'audio/mp3',
    mp4: 'audio/mp4',
    m4a: 'audio/mp4',
    oga: 'audio/ogg',
    ogg: 'audio/ogg',
    wav: 'audio/wav',
    webm: 'audio/webm',
};
function Audio({ id, autoplay, className, controls, fragment, fragmentIndex, fragmentStyle, lazy, loop, muted, preload, src, ...props }) {
    if (Array.isArray(src)) {
        return (react_1.default.createElement("audio", Object.assign({}, BaseComponent_1.getClassNameProps(props), { "data-id": id, id: id, "data-autoplay": autoplay, controls: controls, muted: muted, loop: loop, "data-fragment-index": fragmentIndex }), src.map((element) => (react_1.default.createElement("source", { src: lazy ? false : element, "data-src": lazy ? element : false, "data-preload": preload, type: formatMap[/\.[^.]+$/.exec(element)?.[0]] || 'mp3' })))));
    }
    return (react_1.default.createElement("audio", Object.assign({}, BaseComponent_1.getClassNameProps(props), { "data-id": id, id: id, "data-autoplay": autoplay, src: lazy ? '' : src, "data-src": lazy ? src : false, "data-preload": preload, controls: controls, muted: muted, loop: loop, "data-fragment-index": fragmentIndex })));
}
exports.default = Audio;
