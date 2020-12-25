"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = void 0;
const react_1 = __importDefault(require("react"));
const BaseComponent_1 = require("./BaseComponent");
exports.H1 = BaseComponent_1.generateBaseComponent('h1');
exports.H2 = BaseComponent_1.generateBaseComponent('h2');
exports.H3 = BaseComponent_1.generateBaseComponent('h3');
exports.H4 = BaseComponent_1.generateBaseComponent('h4');
exports.H5 = BaseComponent_1.generateBaseComponent('h5');
exports.H6 = BaseComponent_1.generateBaseComponent('h6');
function H(props) {
    const { size, ...rest } = props;
    switch (size) {
        case 1:
            return react_1.default.createElement(exports.H1, Object.assign({}, rest));
        case 2:
            return react_1.default.createElement(exports.H2, Object.assign({}, rest));
        case 3:
            return react_1.default.createElement(exports.H3, Object.assign({}, rest));
        case 4:
            return react_1.default.createElement(exports.H4, Object.assign({}, rest));
        case 5:
            return react_1.default.createElement(exports.H5, Object.assign({}, rest));
        case 6:
            return react_1.default.createElement(exports.H6, Object.assign({}, rest));
    }
}
exports.default = H;
