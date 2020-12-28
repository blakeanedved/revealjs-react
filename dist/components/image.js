"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BaseComponent_1 = require("./BaseComponent");
function Image({ id, alt, fragmentIndex, height, src, width, ...props }) {
    return (react_1.default.createElement("img", { "data-id": id, id: id, className: BaseComponent_1.getClassName(props), src: src, alt: alt, width: width, height: height, "data-fragment-index": fragmentIndex }));
}
exports.default = Image;
