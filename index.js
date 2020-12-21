'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Reveal = _interopDefault(require('reveal.js'));
require('reveal.js/dist/reveal.css');

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var formatMap = {
  '3gp': 'audio/3gp',
  aac: 'audio/aac',
  flac: 'audio/flac',
  mpg: 'audio/mpeg',
  mpeg: 'audio/mpeg',
  mp3: 'audio/mp3',
  mp4: 'audio/mp4',
  m4a: 'audio/mp4',
  oga: 'audio/ogg',
  ogg: 'audio/ogg',
  wav: 'audio/wav',
  webm: 'audio/webm'
};

function Audio(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$autoplay = _ref.autoplay,
      autoplay = _ref$autoplay === void 0 ? undefined : _ref$autoplay,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? undefined : _ref$controls,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$lazy = _ref.lazy,
      lazy = _ref$lazy === void 0 ? undefined : _ref$lazy,
      _ref$loop = _ref.loop,
      loop = _ref$loop === void 0 ? undefined : _ref$loop,
      _ref$muted = _ref.muted,
      muted = _ref$muted === void 0 ? undefined : _ref$muted,
      _ref$preload = _ref.preload,
      preload = _ref$preload === void 0 ? undefined : _ref$preload,
      src = _ref.src;

  if (_typeof(src) === 'object') {
    return /*#__PURE__*/React__default.createElement("audio", {
      "data-id": id,
      id: id,
      className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
      "data-autoplay": autoplay,
      controls: controls,
      muted: muted,
      loop: loop,
      "data-fragment-index": fragmentIndex
    }, src.forEach(function (element) {
      return /*#__PURE__*/React__default.createElement("source", {
        src: lazy ? false : element,
        "data-src": lazy ? element : false,
        "data-preload": preload,
        type: formatMap[/\.[^.]+$/.exec(element)]
      });
    }));
  }

  return /*#__PURE__*/React__default.createElement("audio", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-autoplay": autoplay,
    src: lazy ? false : src,
    "data-src": lazy ? src : false,
    "data-preload": preload,
    controls: controls,
    muted: muted,
    loop: loop,
    "data-fragment-index": fragmentIndex
  });
}

function BlockQuote(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("blockquote", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-fragment-index": fragmentIndex
  }, children);
}

function Code(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$escape = _ref.escape,
      escape = _ref$escape === void 0 ? undefined : _ref$escape,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      _ref$lineNumbers = _ref.lineNumbers,
      lineNumbers = _ref$lineNumbers === void 0 ? undefined : _ref$lineNumbers,
      _ref$noTrim = _ref.noTrim,
      noTrim = _ref$noTrim === void 0 ? undefined : _ref$noTrim;
  return /*#__PURE__*/React__default.createElement("pre", {
    "data-id": id,
    id: id,
    "data-fragment-index": fragmentIndex,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : '')
  }, /*#__PURE__*/React__default.createElement("code", {
    "data-noexcape": !escape,
    "data-trim": !noTrim,
    "data-line-numbers": lineNumbers
  }, children.code));
}

function Div(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("div", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-fragment-index": fragmentIndex
  }, children);
}

function FigCaption(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("figcaption", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-fragment-index": fragmentIndex
  }, children);
}

function Figure(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("figure", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-fragment-index": fragmentIndex
  }, children);
}

function Footer(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("footer", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-fragment-index": fragmentIndex
  }, children);
}

function H(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '1' : _ref$size,
      children = _ref.children;

  if (size === '1') {
    return /*#__PURE__*/React__default.createElement("h1", {
      "data-id": id,
      id: id,
      className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
      "data-fragment-index": fragmentIndex
    }, children);
  }

  if (size === '2') {
    return /*#__PURE__*/React__default.createElement("h2", {
      "data-id": id,
      id: id,
      className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
      "data-fragment-index": fragmentIndex
    }, children);
  }

  if (size === '3') {
    return /*#__PURE__*/React__default.createElement("h3", {
      "data-id": id,
      id: id,
      className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
      "data-fragment-index": fragmentIndex
    }, children);
  }

  if (size === '4') {
    return /*#__PURE__*/React__default.createElement("h4", {
      "data-id": id,
      id: id,
      className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
      "data-fragment-index": fragmentIndex
    }, children);
  }

  if (size === '5') {
    return /*#__PURE__*/React__default.createElement("h5", {
      "data-id": id,
      id: id,
      className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
      "data-fragment-index": fragmentIndex
    }, children);
  }

  if (size === '6') {
    return /*#__PURE__*/React__default.createElement("h6", {
      "data-id": id,
      id: id,
      className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
      "data-fragment-index": fragmentIndex
    }, children);
  }
}

function Header(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("header", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-fragment-index": fragmentIndex
  }, children);
}

function IFrame(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? undefined : _ref$height,
      _ref$lazy = _ref.lazy,
      lazy = _ref$lazy === void 0 ? undefined : _ref$lazy,
      _ref$preload = _ref.preload,
      preload = _ref$preload === void 0 ? undefined : _ref$preload,
      src = _ref.src,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? undefined : _ref$width;
  return /*#__PURE__*/React__default.createElement("iframe", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    src: lazy ? false : src,
    "data-src": lazy ? src : false,
    "data-preload": preload,
    width: width,
    height: height,
    "data-fragment-index": fragmentIndex
  });
}

function Image(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$alt = _ref.alt,
      alt = _ref$alt === void 0 ? undefined : _ref$alt,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? undefined : _ref$height,
      src = _ref.src,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? undefined : _ref$width;
  return /*#__PURE__*/React__default.createElement("img", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    src: src,
    alt: alt,
    width: width,
    height: height,
    "data-fragment-index": fragmentIndex
  });
}

function Li(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("li", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-fragment-index": fragmentIndex
  }, children);
}

function Link(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? undefined : _ref$href,
      _ref$slide = _ref.slide,
      slide = _ref$slide === void 0 ? undefined : _ref$slide;
  return /*#__PURE__*/React__default.createElement("a", {
    "data-id": id,
    id: id,
    href: href || "#/".concat(typeof slide === 'string' ? parseInt(slide, 10) - 1 : "".concat(parseInt(slide[0], 10) - 1, "/").concat(parseInt(slide[1], 10) - 1)),
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-fragment-index": fragmentIndex
  }, children);
}

function Main(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("main", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-fragment-index": fragmentIndex
  }, children);
}

function Note(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement("aside", {
    className: "notes"
  }, children);
}

function Ol(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("ol", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-fragment-index": fragmentIndex
  }, children);
}

function P(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("p", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-fragment-index": fragmentIndex
  }, children);
}

function RevealJS(_ref) {
  var children = _ref.children,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? [] : _ref$plugins,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? true : _ref$controls,
      _ref$controlsTutorial = _ref.controlsTutorial,
      controlsTutorial = _ref$controlsTutorial === void 0 ? true : _ref$controlsTutorial,
      _ref$controlsLayout = _ref.controlsLayout,
      controlsLayout = _ref$controlsLayout === void 0 ? 'bottom-right' : _ref$controlsLayout,
      _ref$controlsBackArro = _ref.controlsBackArrows,
      controlsBackArrows = _ref$controlsBackArro === void 0 ? 'faded' : _ref$controlsBackArro,
      _ref$progress = _ref.progress,
      progress = _ref$progress === void 0 ? true : _ref$progress,
      _ref$slideNumber = _ref.slideNumber,
      slideNumber = _ref$slideNumber === void 0 ? false : _ref$slideNumber,
      _ref$showSlideNumber = _ref.showSlideNumber,
      showSlideNumber = _ref$showSlideNumber === void 0 ? 'all' : _ref$showSlideNumber,
      _ref$hashOneBasedInde = _ref.hashOneBasedIndex,
      hashOneBasedIndex = _ref$hashOneBasedInde === void 0 ? false : _ref$hashOneBasedInde,
      _ref$hash = _ref.hash,
      hash = _ref$hash === void 0 ? false : _ref$hash,
      _ref$respondToHashCha = _ref.respondToHashChanges,
      respondToHashChanges = _ref$respondToHashCha === void 0 ? true : _ref$respondToHashCha,
      _ref$history = _ref.history,
      history = _ref$history === void 0 ? false : _ref$history,
      _ref$keyboard = _ref.keyboard,
      keyboard = _ref$keyboard === void 0 ? true : _ref$keyboard,
      _ref$keyboardConditio = _ref.keyboardCondition,
      keyboardCondition = _ref$keyboardConditio === void 0 ? null : _ref$keyboardConditio,
      _ref$disableLayout = _ref.disableLayout,
      disableLayout = _ref$disableLayout === void 0 ? false : _ref$disableLayout,
      _ref$overview = _ref.overview,
      overview = _ref$overview === void 0 ? true : _ref$overview,
      _ref$center = _ref.center,
      center = _ref$center === void 0 ? true : _ref$center,
      _ref$touch = _ref.touch,
      touch = _ref$touch === void 0 ? true : _ref$touch,
      _ref$loop = _ref.loop,
      loop = _ref$loop === void 0 ? false : _ref$loop,
      _ref$rtl = _ref.rtl,
      rtl = _ref$rtl === void 0 ? false : _ref$rtl,
      _ref$navigationMode = _ref.navigationMode,
      navigationMode = _ref$navigationMode === void 0 ? 'default' : _ref$navigationMode,
      _ref$shuffle = _ref.shuffle,
      shuffle = _ref$shuffle === void 0 ? false : _ref$shuffle,
      _ref$fragments = _ref.fragments,
      fragments = _ref$fragments === void 0 ? true : _ref$fragments,
      _ref$fragmentInURL = _ref.fragmentInURL,
      fragmentInURL = _ref$fragmentInURL === void 0 ? true : _ref$fragmentInURL,
      _ref$embedded = _ref.embedded,
      embedded = _ref$embedded === void 0 ? false : _ref$embedded,
      _ref$help = _ref.help,
      help = _ref$help === void 0 ? true : _ref$help,
      _ref$pause = _ref.pause,
      pause = _ref$pause === void 0 ? true : _ref$pause,
      _ref$showNotes = _ref.showNotes,
      showNotes = _ref$showNotes === void 0 ? false : _ref$showNotes,
      _ref$autoPlayMedia = _ref.autoPlayMedia,
      autoPlayMedia = _ref$autoPlayMedia === void 0 ? null : _ref$autoPlayMedia,
      _ref$preloadIframes = _ref.preloadIframes,
      preloadIframes = _ref$preloadIframes === void 0 ? null : _ref$preloadIframes,
      _ref$autoAnimate = _ref.autoAnimate,
      autoAnimate = _ref$autoAnimate === void 0 ? true : _ref$autoAnimate,
      _ref$autoAnimateMatch = _ref.autoAnimateMatcher,
      autoAnimateMatcher = _ref$autoAnimateMatch === void 0 ? null : _ref$autoAnimateMatch,
      _ref$autoAnimateEasin = _ref.autoAnimateEasing,
      autoAnimateEasing = _ref$autoAnimateEasin === void 0 ? 'ease' : _ref$autoAnimateEasin,
      _ref$autoAnimateDurat = _ref.autoAnimateDuration,
      autoAnimateDuration = _ref$autoAnimateDurat === void 0 ? 1.0 : _ref$autoAnimateDurat,
      _ref$autoAnimateUnmat = _ref.autoAnimateUnmatched,
      autoAnimateUnmatched = _ref$autoAnimateUnmat === void 0 ? true : _ref$autoAnimateUnmat,
      _ref$autoAnimateStyle = _ref.autoAnimateStyles,
      autoAnimateStyles = _ref$autoAnimateStyle === void 0 ? ['opacity', 'color', 'background-color', 'padding', 'font-size', 'line-height', 'letter-spacing', 'border-width', 'border-color', 'border-radius', 'outline', 'outline-offset'] : _ref$autoAnimateStyle,
      _ref$autoSlide = _ref.autoSlide,
      autoSlide = _ref$autoSlide === void 0 ? 0 : _ref$autoSlide,
      _ref$autoSlideStoppab = _ref.autoSlideStoppable,
      autoSlideStoppable = _ref$autoSlideStoppab === void 0 ? true : _ref$autoSlideStoppab,
      _ref$autoSlideMethod = _ref.autoSlideMethod,
      autoSlideMethod = _ref$autoSlideMethod === void 0 ? null : _ref$autoSlideMethod,
      _ref$defaultTiming = _ref.defaultTiming,
      defaultTiming = _ref$defaultTiming === void 0 ? null : _ref$defaultTiming,
      _ref$mouseWheel = _ref.mouseWheel,
      mouseWheel = _ref$mouseWheel === void 0 ? false : _ref$mouseWheel,
      _ref$previewLinks = _ref.previewLinks,
      previewLinks = _ref$previewLinks === void 0 ? false : _ref$previewLinks,
      _ref$postMessage = _ref.postMessage,
      postMessage = _ref$postMessage === void 0 ? true : _ref$postMessage,
      _ref$postMessageEvent = _ref.postMessageEvents,
      postMessageEvents = _ref$postMessageEvent === void 0 ? false : _ref$postMessageEvent,
      _ref$focusBodyOnPageV = _ref.focusBodyOnPageVisibilityChange,
      focusBodyOnPageVisibilityChange = _ref$focusBodyOnPageV === void 0 ? true : _ref$focusBodyOnPageV,
      _ref$transition = _ref.transition,
      transition = _ref$transition === void 0 ? 'slide' : _ref$transition,
      _ref$transitionSpeed = _ref.transitionSpeed,
      transitionSpeed = _ref$transitionSpeed === void 0 ? 'default' : _ref$transitionSpeed,
      _ref$backgroundTransi = _ref.backgroundTransition,
      backgroundTransition = _ref$backgroundTransi === void 0 ? 'fade' : _ref$backgroundTransi,
      _ref$pdfMaxPagesPerSl = _ref.pdfMaxPagesPerSlide,
      pdfMaxPagesPerSlide = _ref$pdfMaxPagesPerSl === void 0 ? Number.POSITIVE_INFINITY : _ref$pdfMaxPagesPerSl,
      _ref$pdfSeparateFragm = _ref.pdfSeparateFragments,
      pdfSeparateFragments = _ref$pdfSeparateFragm === void 0 ? true : _ref$pdfSeparateFragm,
      _ref$pdfPageHeightOff = _ref.pdfPageHeightOffset,
      pdfPageHeightOffset = _ref$pdfPageHeightOff === void 0 ? -1 : _ref$pdfPageHeightOff,
      _ref$viewDistance = _ref.viewDistance,
      viewDistance = _ref$viewDistance === void 0 ? 3 : _ref$viewDistance,
      _ref$mobileViewDistan = _ref.mobileViewDistance,
      mobileViewDistance = _ref$mobileViewDistan === void 0 ? 2 : _ref$mobileViewDistan,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? 'block' : _ref$display,
      _ref$hideInactiveCurs = _ref.hideInactiveCursor,
      hideInactiveCursor = _ref$hideInactiveCurs === void 0 ? true : _ref$hideInactiveCurs,
      _ref$hideCursorTime = _ref.hideCursorTime,
      hideCursorTime = _ref$hideCursorTime === void 0 ? 5000 : _ref$hideCursorTime,
      _ref$parallaxBackgrou = _ref.parallaxBackgroundImage,
      parallaxBackgroundImage = _ref$parallaxBackgrou === void 0 ? '' : _ref$parallaxBackgrou,
      _ref$parallaxBackgrou2 = _ref.parallaxBackgroundSize,
      parallaxBackgroundSize = _ref$parallaxBackgrou2 === void 0 ? '' : _ref$parallaxBackgrou2,
      _ref$parallaxBackgrou3 = _ref.parallaxBackgroundHorizontal,
      parallaxBackgroundHorizontal = _ref$parallaxBackgrou3 === void 0 ? 200 : _ref$parallaxBackgrou3,
      _ref$parallaxBackgrou4 = _ref.parallaxBackgroundVertical,
      parallaxBackgroundVertical = _ref$parallaxBackgrou4 === void 0 ? 50 : _ref$parallaxBackgrou4,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 960 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 700 : _ref$height,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? 0.04 : _ref$margin,
      _ref$minScale = _ref.minScale,
      minScale = _ref$minScale === void 0 ? 0.2 : _ref$minScale,
      _ref$maxScale = _ref.maxScale,
      maxScale = _ref$maxScale === void 0 ? 2.0 : _ref$maxScale;
  React.useEffect(function () {
    var deck = new Reveal({
      plugins: plugins,
      controls: controls,
      controlsTutorial: controlsTutorial,
      controlsLayout: controlsLayout,
      controlsBackArrows: controlsBackArrows,
      progress: progress,
      slideNumber: slideNumber,
      showSlideNumber: showSlideNumber,
      hashOneBasedIndex: hashOneBasedIndex,
      hash: hash,
      respondToHashChanges: respondToHashChanges,
      history: history,
      keyboard: keyboard,
      keyboardCondition: keyboardCondition,
      disableLayout: disableLayout,
      overview: overview,
      center: center,
      touch: touch,
      loop: loop,
      rtl: rtl,
      navigationMode: navigationMode,
      shuffle: shuffle,
      fragments: fragments,
      fragmentInURL: fragmentInURL,
      embedded: embedded,
      help: help,
      pause: pause,
      showNotes: showNotes,
      autoPlayMedia: autoPlayMedia,
      preloadIframes: preloadIframes,
      autoAnimate: autoAnimate,
      autoAnimateMatcher: autoAnimateMatcher,
      autoAnimateEasing: autoAnimateEasing,
      autoAnimateDuration: autoAnimateDuration,
      autoAnimateUnmatched: autoAnimateUnmatched,
      autoAnimateStyles: autoAnimateStyles,
      autoSlide: autoSlide,
      autoSlideStoppable: autoSlideStoppable,
      autoSlideMethod: autoSlideMethod,
      defaultTiming: defaultTiming,
      mouseWheel: mouseWheel,
      previewLinks: previewLinks,
      postMessage: postMessage,
      postMessageEvents: postMessageEvents,
      focusBodyOnPageVisibilityChange: focusBodyOnPageVisibilityChange,
      transition: transition,
      transitionSpeed: transitionSpeed,
      backgroundTransition: backgroundTransition,
      pdfMaxPagesPerSlide: pdfMaxPagesPerSlide,
      pdfSeparateFragments: pdfSeparateFragments,
      pdfPageHeightOffset: pdfPageHeightOffset,
      viewDistance: viewDistance,
      mobileViewDistance: mobileViewDistance,
      display: display,
      hideInactiveCursor: hideInactiveCursor,
      hideCursorTime: hideCursorTime,
      parallaxBackgroundImage: parallaxBackgroundImage,
      parallaxBackgroundSize: parallaxBackgroundSize,
      parallaxBackgroundHorizontal: parallaxBackgroundHorizontal,
      parallaxBackgroundVertical: parallaxBackgroundVertical,
      width: width,
      height: height,
      margin: margin,
      minScale: minScale,
      maxScale: maxScale
    });
    deck.initialize();
  }, [plugins, controls, controlsTutorial, controlsLayout, controlsBackArrows, progress, slideNumber, showSlideNumber, hashOneBasedIndex, hash, respondToHashChanges, history, keyboard, keyboardCondition, disableLayout, overview, center, touch, loop, rtl, navigationMode, shuffle, fragments, fragmentInURL, embedded, help, pause, showNotes, autoPlayMedia, preloadIframes, autoAnimate, autoAnimateMatcher, autoAnimateEasing, autoAnimateDuration, autoAnimateUnmatched, autoAnimateStyles, autoSlide, autoSlideStoppable, autoSlideMethod, defaultTiming, mouseWheel, previewLinks, postMessage, postMessageEvents, focusBodyOnPageVisibilityChange, transition, transitionSpeed, backgroundTransition, pdfMaxPagesPerSlide, pdfSeparateFragments, pdfPageHeightOffset, viewDistance, mobileViewDistance, display, hideInactiveCursor, hideCursorTime, parallaxBackgroundImage, parallaxBackgroundSize, parallaxBackgroundHorizontal, parallaxBackgroundVertical, width, height, margin, minScale, maxScale]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "slides"
  }, children));
}

function Slide(_ref) {
  var _ref$autoslide = _ref.autoslide,
      autoslide = _ref$autoslide === void 0 ? undefined : _ref$autoslide,
      _ref$autoAnimate = _ref.autoAnimate,
      autoAnimate = _ref$autoAnimate === void 0 ? undefined : _ref$autoAnimate,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? undefined : _ref$backgroundColor,
      _ref$backgroundImage = _ref.backgroundImage,
      backgroundImage = _ref$backgroundImage === void 0 ? undefined : _ref$backgroundImage,
      _ref$backgroundSize = _ref.backgroundSize,
      backgroundSize = _ref$backgroundSize === void 0 ? undefined : _ref$backgroundSize,
      _ref$backgroundPositi = _ref.backgroundPosition,
      backgroundPosition = _ref$backgroundPositi === void 0 ? undefined : _ref$backgroundPositi,
      _ref$backgroundRepeat = _ref.backgroundRepeat,
      backgroundRepeat = _ref$backgroundRepeat === void 0 ? undefined : _ref$backgroundRepeat,
      _ref$backgroundOpacit = _ref.backgroundOpacity,
      backgroundOpacity = _ref$backgroundOpacit === void 0 ? undefined : _ref$backgroundOpacit,
      _ref$backgroundVideo = _ref.backgroundVideo,
      backgroundVideo = _ref$backgroundVideo === void 0 ? undefined : _ref$backgroundVideo,
      _ref$backgroundVideoL = _ref.backgroundVideoLoop,
      backgroundVideoLoop = _ref$backgroundVideoL === void 0 ? undefined : _ref$backgroundVideoL,
      _ref$backgroundVideoM = _ref.backgroundVideoMuted,
      backgroundVideoMuted = _ref$backgroundVideoM === void 0 ? undefined : _ref$backgroundVideoM,
      _ref$backgroundIframe = _ref.backgroundIframe,
      backgroundIframe = _ref$backgroundIframe === void 0 ? undefined : _ref$backgroundIframe,
      _ref$backgroundIntera = _ref.backgroundInteractive,
      backgroundInteractive = _ref$backgroundIntera === void 0 ? undefined : _ref$backgroundIntera,
      children = _ref.children,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$transition = _ref.transition,
      transition = _ref$transition === void 0 ? undefined : _ref$transition,
      _ref$transitionSpeed = _ref.transitionSpeed,
      transitionSpeed = _ref$transitionSpeed === void 0 ? undefined : _ref$transitionSpeed,
      _ref$uncounted = _ref.uncounted,
      uncounted = _ref$uncounted === void 0 ? undefined : _ref$uncounted;
  return /*#__PURE__*/React__default.createElement("section", {
    "data-autoslide": autoslide,
    id: id,
    "data-auto-animate": autoAnimate,
    "data-visibility": uncounted ? 'uncounted' : undefined,
    "data-background-color": backgroundColor,
    "data-background-image": backgroundImage,
    "data-background-size": backgroundSize,
    "data-background-position": backgroundPosition,
    "data-background-repeat": backgroundRepeat,
    "data-background-opacity": backgroundOpacity,
    "data-background-video": backgroundVideo,
    "data-background-video-loop": backgroundVideoLoop,
    "data-background-video-muted": backgroundVideoMuted,
    "data-background-iframe": backgroundIframe,
    "data-background-interactive": backgroundInteractive,
    "data-transition": transition,
    "data-transition-speed": transitionSpeed
  }, children);
}

function Span(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("span", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-fragment-index": fragmentIndex
  }, children);
}

function Ul(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("ul", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-fragment-index": fragmentIndex
  }, children);
}

var formatMap$1 = {
  '3gp': 'video/3gpp',
  mpg: 'audio/mpeg',
  mpeg: 'audio/mpeg',
  mp4: 'video/mp4',
  m4a: 'video/mp4',
  m4p: 'video/mp4',
  ogv: 'video/ogg',
  ogg: 'video/ogg',
  mov: 'video/quicktime',
  webm: 'video/webm'
};

function Video(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? undefined : _ref$id,
      _ref$autoplay = _ref.autoplay,
      autoplay = _ref$autoplay === void 0 ? undefined : _ref$autoplay,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? undefined : _ref$className,
      _ref$controls = _ref.controls,
      controls = _ref$controls === void 0 ? undefined : _ref$controls,
      _ref$fragment = _ref.fragment,
      fragment = _ref$fragment === void 0 ? false : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? undefined : _ref$height,
      _ref$lazy = _ref.lazy,
      lazy = _ref$lazy === void 0 ? undefined : _ref$lazy,
      _ref$loop = _ref.loop,
      loop = _ref$loop === void 0 ? undefined : _ref$loop,
      _ref$muted = _ref.muted,
      muted = _ref$muted === void 0 ? undefined : _ref$muted,
      _ref$preload = _ref.preload,
      preload = _ref$preload === void 0 ? undefined : _ref$preload,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? undefined : _ref$width,
      src = _ref.src;

  if (_typeof(src) === 'object') {
    return /*#__PURE__*/React__default.createElement("video", {
      "data-id": id,
      id: id,
      className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
      "data-autoplay": autoplay,
      controls: controls,
      muted: muted,
      loop: loop,
      height: height,
      width: width,
      "data-fragment-index": fragmentIndex
    }, src.forEach(function (element) {
      return /*#__PURE__*/React__default.createElement("source", {
        src: lazy ? false : element,
        "data-src": lazy ? element : false,
        "data-preload": preload,
        type: formatMap$1[/\.[^.]+$/.exec(element)]
      });
    }));
  }

  return /*#__PURE__*/React__default.createElement("video", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-autoplay": autoplay,
    src: lazy ? false : src,
    "data-src": lazy ? src : false,
    "data-preload": preload,
    controls: controls,
    muted: muted,
    loop: loop,
    height: height,
    width: width,
    "data-fragment-index": fragmentIndex
  });
}

exports.Audio = Audio;
exports.BlockQuote = BlockQuote;
exports.Code = Code;
exports.Div = Div;
exports.FigCaption = FigCaption;
exports.Figure = Figure;
exports.Footer = Footer;
exports.H = H;
exports.Header = Header;
exports.IFrame = IFrame;
exports.Image = Image;
exports.Li = Li;
exports.Link = Link;
exports.Main = Main;
exports.Note = Note;
exports.Ol = Ol;
exports.P = P;
exports.RevealJS = RevealJS;
exports.Slide = Slide;
exports.Span = Span;
exports.Ul = Ul;
exports.Video = Video;
//# sourceMappingURL=index.js.map
