'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Reveal = require('reveal.js');
require('reveal.js/dist/reveal.css');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Reveal__default = /*#__PURE__*/_interopDefaultLegacy(Reveal);

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
  var id = _ref.id,
      autoplay = _ref.autoplay,
      className = _ref.className,
      controls = _ref.controls,
      fragment = _ref.fragment,
      fragmentIndex = _ref.fragmentIndex,
      fragmentStyle = _ref.fragmentStyle,
      lazy = _ref.lazy,
      loop = _ref.loop,
      muted = _ref.muted,
      preload = _ref.preload,
      src = _ref.src;

  if (Array.isArray(src)) {
    return /*#__PURE__*/React__default['default'].createElement("audio", {
      "data-id": id,
      id: id,
      className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
      "data-autoplay": autoplay,
      controls: controls,
      muted: muted,
      loop: loop,
      "data-fragment-index": fragmentIndex
    }, src.map(function (element) {
      var _$exec;

      return /*#__PURE__*/React__default['default'].createElement("source", {
        src: lazy ? false : element,
        "data-src": lazy ? element : false,
        "data-preload": preload,
        type: formatMap[(_$exec = /\.[^.]+$/.exec(element)) === null || _$exec === void 0 ? void 0 : _$exec[0]] || 'mp3'
      });
    }));
  }

  return /*#__PURE__*/React__default['default'].createElement("audio", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-autoplay": autoplay,
    src: lazy ? '' : src,
    "data-src": lazy ? src : false,
    "data-preload": preload,
    controls: controls,
    muted: muted,
    loop: loop,
    "data-fragment-index": fragmentIndex
  });
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function getClassName(className, fragment, fragmentStyle) {
  var classes = className ? [className] : [];
  if (fragment) classes.push("fragment");
  if (fragmentStyle) classes.push(fragmentStyle);
  if (!classes.length) return undefined;
  return classes.join(' ');
}
function generateBaseComponent(component) {
  var Component = function Component(props) {
    return BaseComponent(_objectSpread2(_objectSpread2({}, props), {}, {
      component: component
    }));
  };

  Component.displayName = "".concat(component[0].toUpperCase()).concat(component.slice(1));
  return Component;
}
function BaseComponent(_ref) {
  var component = _ref.component,
      id = _ref.id,
      className = _ref.className,
      fragment = _ref.fragment,
      fragmentStyle = _ref.fragmentStyle,
      fragmentIndex = _ref.fragmentIndex,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(component, {
    'data-id': id,
    id: id,
    className: getClassName(className, fragment, fragmentStyle),
    'data-fragment-index': fragmentIndex,
    children: children
  });
}

var blockquote = generateBaseComponent('blockquote');

function Code(_ref) {
  var id = _ref.id,
      children = _ref.children,
      language = _ref.language,
      className = _ref.className,
      escape = _ref.escape,
      fragment = _ref.fragment,
      fragmentStyle = _ref.fragmentStyle,
      fragmentIndex = _ref.fragmentIndex,
      lineNumbers = _ref.lineNumbers,
      noTrim = _ref.noTrim;
  return /*#__PURE__*/React__default['default'].createElement("pre", {
    "data-id": id,
    id: id,
    "data-fragment-index": fragmentIndex,
    className: getClassName(className, fragment, fragmentStyle)
  }, /*#__PURE__*/React__default['default'].createElement("code", {
    className: language,
    "data-noescape": !escape,
    "data-trim": !noTrim,
    "data-line-numbers": lineNumbers
  }, children.code));
}

var div = generateBaseComponent('div');

var figcaption = generateBaseComponent('figcaption');

var figure = generateBaseComponent('figure');

var footer = generateBaseComponent('footer');

var H1 = generateBaseComponent('h1');
var H2 = generateBaseComponent('h2');
var H3 = generateBaseComponent('h3');
var H4 = generateBaseComponent('h4');
var H5 = generateBaseComponent('h5');
var H6 = generateBaseComponent('h6');

var header = generateBaseComponent('header');

function IFrame(_ref) {
  var id = _ref.id,
      className = _ref.className,
      fragment = _ref.fragment,
      fragmentStyle = _ref.fragmentStyle,
      fragmentIndex = _ref.fragmentIndex,
      height = _ref.height,
      lazy = _ref.lazy,
      preload = _ref.preload,
      src = _ref.src,
      width = _ref.width;
  return /*#__PURE__*/React__default['default'].createElement("iframe", {
    "data-id": id,
    id: id,
    className: getClassName(className, fragment, fragmentStyle),
    src: lazy ? undefined : src,
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
      fragment = _ref$fragment === void 0 ? undefined : _ref$fragment,
      _ref$fragmentStyle = _ref.fragmentStyle,
      fragmentStyle = _ref$fragmentStyle === void 0 ? undefined : _ref$fragmentStyle,
      _ref$fragmentIndex = _ref.fragmentIndex,
      fragmentIndex = _ref$fragmentIndex === void 0 ? undefined : _ref$fragmentIndex,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? undefined : _ref$height,
      src = _ref.src,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? undefined : _ref$width;
  return /*#__PURE__*/React__default['default'].createElement("img", {
    "data-id": id,
    id: id,
    className: getClassName(className, fragment, fragmentStyle),
    src: src,
    alt: alt,
    width: width,
    height: height,
    "data-fragment-index": fragmentIndex
  });
}

var li = generateBaseComponent('li');

function Link(_ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      fragment = _ref.fragment,
      fragmentStyle = _ref.fragmentStyle,
      fragmentIndex = _ref.fragmentIndex,
      href = _ref.href,
      slide = _ref.slide;
  return /*#__PURE__*/React__default['default'].createElement("a", {
    "data-id": id,
    id: id,
    href: href || slide && "#/".concat(typeof slide === 'string' ? parseInt(slide, 10) - 1 : "".concat(parseInt(slide[0], 10) - 1, "/").concat(parseInt(slide[1], 10) - 1)),
    className: getClassName(className, fragment, fragmentStyle),
    "data-fragment-index": fragmentIndex
  }, children);
}

var main = generateBaseComponent('main');

function Note(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement("aside", {
    className: "notes"
  }, children);
}

var ol = generateBaseComponent('ol');

var p = generateBaseComponent('p');

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
      _ref$parallaxBackgrou3 = _ref.parallaxBackgroundRepeat,
      parallaxBackgroundRepeat = _ref$parallaxBackgrou3 === void 0 ? '' : _ref$parallaxBackgrou3,
      _ref$parallaxBackgrou4 = _ref.parallaxBackgroundPosition,
      parallaxBackgroundPosition = _ref$parallaxBackgrou4 === void 0 ? '' : _ref$parallaxBackgrou4,
      _ref$parallaxBackgrou5 = _ref.parallaxBackgroundHorizontal,
      parallaxBackgroundHorizontal = _ref$parallaxBackgrou5 === void 0 ? 200 : _ref$parallaxBackgrou5,
      _ref$parallaxBackgrou6 = _ref.parallaxBackgroundVertical,
      parallaxBackgroundVertical = _ref$parallaxBackgrou6 === void 0 ? 50 : _ref$parallaxBackgrou6,
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
    var deck = new Reveal__default['default']({
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
      parallaxBackgroundRepeat: parallaxBackgroundRepeat,
      parallaxBackgroundPosition: parallaxBackgroundPosition,
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
  }, [plugins, controls, controlsTutorial, controlsLayout, controlsBackArrows, progress, slideNumber, showSlideNumber, hashOneBasedIndex, hash, respondToHashChanges, history, keyboard, keyboardCondition, disableLayout, overview, center, touch, loop, rtl, navigationMode, shuffle, fragments, fragmentInURL, embedded, help, pause, showNotes, autoPlayMedia, preloadIframes, autoAnimate, autoAnimateMatcher, autoAnimateEasing, autoAnimateDuration, autoAnimateUnmatched, autoAnimateStyles, autoSlide, autoSlideStoppable, autoSlideMethod, defaultTiming, mouseWheel, previewLinks, postMessage, postMessageEvents, focusBodyOnPageVisibilityChange, transition, transitionSpeed, backgroundTransition, pdfMaxPagesPerSlide, pdfSeparateFragments, pdfPageHeightOffset, viewDistance, mobileViewDistance, display, hideInactiveCursor, hideCursorTime, parallaxBackgroundImage, parallaxBackgroundRepeat, parallaxBackgroundPosition, parallaxBackgroundSize, parallaxBackgroundHorizontal, parallaxBackgroundVertical, width, height, margin, minScale, maxScale]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "slides"
  }, children));
}

function Slide(_ref) {
  var autoslide = _ref.autoslide,
      autoAnimate = _ref.autoAnimate,
      backgroundColor = _ref.backgroundColor,
      backgroundImage = _ref.backgroundImage,
      backgroundSize = _ref.backgroundSize,
      backgroundPosition = _ref.backgroundPosition,
      backgroundRepeat = _ref.backgroundRepeat,
      backgroundOpacity = _ref.backgroundOpacity,
      backgroundVideo = _ref.backgroundVideo,
      backgroundVideoLoop = _ref.backgroundVideoLoop,
      backgroundVideoMuted = _ref.backgroundVideoMuted,
      backgroundIframe = _ref.backgroundIframe,
      backgroundInteractive = _ref.backgroundInteractive,
      children = _ref.children,
      id = _ref.id,
      transition = _ref.transition,
      transitionSpeed = _ref.transitionSpeed,
      visibility = _ref.visibility;
  return /*#__PURE__*/React__default['default'].createElement("section", {
    "data-autoslide": autoslide,
    id: id,
    "data-auto-animate": autoAnimate,
    "data-visibility": visibility,
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

var span = generateBaseComponent('span');

var ul = generateBaseComponent('ul');

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
  var id = _ref.id,
      autoplay = _ref.autoplay,
      className = _ref.className,
      controls = _ref.controls,
      fragment = _ref.fragment,
      fragmentStyle = _ref.fragmentStyle,
      fragmentIndex = _ref.fragmentIndex,
      height = _ref.height,
      lazy = _ref.lazy,
      loop = _ref.loop,
      muted = _ref.muted,
      preload = _ref.preload,
      width = _ref.width,
      src = _ref.src;

  if (Array.isArray(src)) {
    return /*#__PURE__*/React__default['default'].createElement("video", {
      "data-id": id,
      id: id,
      className: getClassName(className, fragment, fragmentStyle),
      "data-autoplay": autoplay,
      controls: controls,
      muted: muted,
      loop: loop,
      height: height,
      width: width,
      "data-fragment-index": fragmentIndex
    }, src.map(function (element) {
      var _$exec;

      return /*#__PURE__*/React__default['default'].createElement("source", {
        src: lazy ? '' : element,
        "data-src": lazy ? element : false,
        "data-preload": preload,
        type: formatMap$1[((_$exec = /\.[^.]+$/.exec(element)) === null || _$exec === void 0 ? void 0 : _$exec[0]) || 'mp4']
      });
    }));
  }

  return /*#__PURE__*/React__default['default'].createElement("video", {
    "data-id": id,
    id: id,
    className: className + (fragment ? ' fragment' : '') + (fragmentStyle ? " ".concat(fragmentStyle) : ''),
    "data-autoplay": autoplay,
    src: lazy ? '' : src,
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
exports.BlockQuote = blockquote;
exports.Code = Code;
exports.Div = div;
exports.FigCaption = figcaption;
exports.Figure = figure;
exports.Footer = footer;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.H5 = H5;
exports.H6 = H6;
exports.Header = header;
exports.IFrame = IFrame;
exports.Image = Image;
exports.Li = li;
exports.Link = Link;
exports.Main = main;
exports.Note = Note;
exports.Ol = ol;
exports.P = p;
exports.RevealJS = RevealJS;
exports.Slide = Slide;
exports.Span = span;
exports.Ul = ul;
exports.Video = Video;
//# sourceMappingURL=index.js.map
