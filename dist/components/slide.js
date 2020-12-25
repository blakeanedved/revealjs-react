"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Slide({ autoslide, autoAnimate, backgroundColor, backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat, backgroundOpacity, backgroundVideo, backgroundVideoLoop, backgroundVideoMuted, backgroundIframe, backgroundInteractive, children, id, transition, transitionSpeed, visibility, }) {
    return (react_1.default.createElement("section", { "data-autoslide": autoslide, id: id, "data-auto-animate": autoAnimate, "data-visibility": visibility, "data-background-color": backgroundColor, "data-background-image": backgroundImage, "data-background-size": backgroundSize, "data-background-position": backgroundPosition, "data-background-repeat": backgroundRepeat, "data-background-opacity": backgroundOpacity, "data-background-video": backgroundVideo, "data-background-video-loop": backgroundVideoLoop, "data-background-video-muted": backgroundVideoMuted, "data-background-iframe": backgroundIframe, "data-background-interactive": backgroundInteractive, "data-transition": transition, "data-transition-speed": transitionSpeed }, children));
}
exports.default = Slide;
