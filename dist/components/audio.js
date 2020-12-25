"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
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
function Audio({ id = undefined, autoplay = undefined, className = undefined, controls = undefined, fragment = false, fragmentIndex = undefined, fragmentStyle = undefined, lazy = undefined, loop = undefined, muted = undefined, preload = undefined, src, }) {
    if (typeof src === 'object') {
        return (react_1.default.createElement("audio", { "data-id": id, id: id, className: className +
                (fragment ? ' fragment' : '') +
                (fragmentStyle ? ` ${fragmentStyle}` : ''), "data-autoplay": autoplay, controls: controls, muted: muted, loop: loop, "data-fragment-index": fragmentIndex }, src.forEach((element) => (react_1.default.createElement("source", { src: lazy ? false : element, "data-src": lazy ? element : false, "data-preload": preload, type: formatMap[/\.[^.]+$/.exec(element)] })))));
    }
    return (react_1.default.createElement("audio", { "data-id": id, id: id, className: className +
            (fragment ? ' fragment' : '') +
            (fragmentStyle ? ` ${fragmentStyle}` : ''), "data-autoplay": autoplay, src: lazy ? false : src, "data-src": lazy ? src : false, "data-preload": preload, controls: controls, muted: muted, loop: loop, "data-fragment-index": fragmentIndex }));
}
exports.default = Audio;
