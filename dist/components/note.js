"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Note({ children }) {
    return react_1.default.createElement("aside", { className: "notes" }, children);
}
exports.default = Note;
