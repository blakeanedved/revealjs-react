"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BaseComponent_1 = require("./BaseComponent");
const formatMap = {
    '3gp': 'video/3gpp',
    mpg: 'audio/mpeg',
    mpeg: 'audio/mpeg',
    mp4: 'video/mp4',
    m4a: 'video/mp4',
    m4p: 'video/mp4',
    ogv: 'video/ogg',
    ogg: 'video/ogg',
    mov: 'video/quicktime',
    webm: 'video/webm',
};
function Video({ id, autoplay, controls, fragmentIndex, height, lazy, loop, muted, preload, width, src, ...props }) {
    if (Array.isArray(src)) {
        return (react_1.default.createElement("video", { "data-id": id, id: id, className: BaseComponent_1.getClassName(props), "data-autoplay": autoplay, controls: controls, muted: muted, loop: loop, height: height, width: width, "data-fragment-index": fragmentIndex }, src.map((element) => (react_1.default.createElement("source", { src: lazy ? '' : element, "data-src": lazy ? element : false, "data-preload": preload, type: formatMap[/\.[^.]+$/.exec(element)?.[0] || 'mp4'] })))));
    }
    return (react_1.default.createElement("video", { "data-id": id, id: id, className: BaseComponent_1.getClassName(props), "data-autoplay": autoplay, src: lazy ? '' : src, "data-src": lazy ? src : false, "data-preload": preload, controls: controls, muted: muted, loop: loop, height: height, width: width, "data-fragment-index": fragmentIndex }));
}
exports.default = Video;
