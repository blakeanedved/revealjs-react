"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const RevealProvider_1 = require("../components/RevealProvider");
function useReveal() {
    return react_1.useContext(RevealProvider_1.RevealContext);
}
exports.default = useReveal;
