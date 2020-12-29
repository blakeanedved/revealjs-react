"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BaseComponent_1 = require("./BaseComponent");
function Code({ id, children, language, escape, fragmentIndex, lineNumbers, noTrim, ...props }) {
    return (react_1.default.createElement("pre", Object.assign({}, BaseComponent_1.getClassNameProps(props), { "data-id": id, id: id, "data-fragment-index": fragmentIndex }),
        react_1.default.createElement("code", { className: language, "data-noescape": !escape, "data-trim": !noTrim, "data-line-numbers": lineNumbers }, children.code)));
}
exports.default = Code;
