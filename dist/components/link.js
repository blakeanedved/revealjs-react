"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BaseComponent_1 = require("./BaseComponent");
function Link({ id, children, className, fragment, fragmentStyle, fragmentIndex, href, slide, }) {
    return (react_1.default.createElement("a", { "data-id": id, id: id, href: href ||
            (slide &&
                `#/${typeof slide === 'string'
                    ? parseInt(slide, 10) - 1
                    : `${parseInt(slide[0], 10) - 1}/${parseInt(slide[1], 10) - 1}`}`), className: BaseComponent_1.getClassName(className, fragment, fragmentStyle), "data-fragment-index": fragmentIndex }, children));
}
exports.default = Link;
