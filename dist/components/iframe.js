"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BaseComponent_1 = require("./BaseComponent");
function IFrame({ id, fragmentIndex, height, lazy, preload, src, width, ...props }) {
    return (react_1.default.createElement("iframe", Object.assign({}, BaseComponent_1.getClassNameProps(props), { "data-id": id, id: id, src: lazy ? undefined : src, "data-src": lazy ? src : false, "data-preload": preload, width: width, height: height, "data-fragment-index": fragmentIndex })));
}
exports.default = IFrame;
