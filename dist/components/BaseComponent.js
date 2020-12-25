"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBaseComponent = exports.getClassName = void 0;
const react_1 = require("react");
function getClassName(className, fragment, fragmentStyle) {
    const classes = className ? [className] : [];
    if (fragment)
        classes.push(fragment);
    if (fragmentStyle)
        classes.push(fragmentStyle);
    if (!classes.length)
        return undefined;
    return classes.join(' ');
}
exports.getClassName = getClassName;
function generateBaseComponent(component) {
    const Component = (props) => BaseComponent({ ...props, component });
    Component.displayName = `${component[0].toUpperCase()}${component.slice(1)}`;
    return Component;
}
exports.generateBaseComponent = generateBaseComponent;
function BaseComponent({ component, id, className, fragment, fragmentStyle, fragmentIndex, children, }) {
    return react_1.createElement(component, {
        'data-id': id,
        id,
        className: getClassName(className, fragment, fragmentStyle),
        'data-fragment-index': fragmentIndex,
        children,
    });
}
exports.default = BaseComponent;
