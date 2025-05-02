(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["@uiw/react-layout"] = factory(require("react"));
	else
		root["@uiw/react-layout"] = factory(root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__442__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 192:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(442),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;__webpack_unused_export__=q;


/***/ }),

/***/ 442:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__442__;

/***/ }),

/***/ 540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(192);
} else {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LayoutContent: () => (/* reexport */ LayoutContent),
  LayoutContext: () => (/* reexport */ LayoutContext),
  LayoutFooter: () => (/* reexport */ LayoutFooter),
  LayoutHeader: () => (/* reexport */ LayoutHeader),
  LayoutSider: () => (/* reexport */ LayoutSider),
  "default": () => (/* binding */ src),
  randomid: () => (/* reexport */ randomid)
});

;// ../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

;// ../node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// ../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

;// ../node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

;// ../node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

;// ../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

;// ../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

;// ../node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

;// ../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

;// ../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// ../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

;// ../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

;// ../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

;// ../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

;// ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

;// ../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(442);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(540);
;// ./src/Layout.tsx
var _excluded=["prefixCls","className","hasSider","children"];var LayoutContext=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createContext({addSider:function addSider(){return null;},removeSider:function removeSider(){return null;}});var Layout=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(function(props,ref){var _props$prefixCls=props.prefixCls,prefixCls=_props$prefixCls===void 0?'w-layout':_props$prefixCls,className=props.className,hasSider=props.hasSider,children=props.children,other=_objectWithoutProperties(props,_excluded);var _useState=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),_useState2=_slicedToArray(_useState,2),siders=_useState2[0],setSiders=_useState2[1];var addSider=function addSider(id){setSiders(function(state){return[].concat(_toConsumableArray(state),[id]);});};var removeSider=function removeSider(id){setSiders(function(state){return _toConsumableArray(state.filter(function(currentId){return currentId!==id;}));});};var cls=[prefixCls,className,typeof hasSider==='boolean'&&hasSider||siders.length>0?"".concat(prefixCls,"-has-sider"):null].filter(Boolean).join(' ').trim();return/*#__PURE__*/(0,jsx_runtime.jsx)(LayoutContext.Provider,{value:{addSider:addSider,removeSider:removeSider},children:/*#__PURE__*/(0,jsx_runtime.jsx)("section",_objectSpread2(_objectSpread2({ref:ref,className:cls},other),{},{children:children}))});});Layout.displayName='Layout';/* harmony default export */ const src_Layout = (Layout);
;// ./src/Header.tsx
var Header_excluded=["prefixCls","className","children"];var LayoutHeader=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(function(props,ref){var _ref=props||{},_ref$prefixCls=_ref.prefixCls,prefixCls=_ref$prefixCls===void 0?'w-layout-header':_ref$prefixCls,className=_ref.className,children=_ref.children,other=_objectWithoutProperties(_ref,Header_excluded);var cls=[prefixCls,className].filter(Boolean).join(' ').trim();return/*#__PURE__*/(0,jsx_runtime.jsx)("header",_objectSpread2(_objectSpread2({ref:ref,className:cls},other),{},{children:children}));});
;// ./src/Footer.tsx
var Footer_excluded=["prefixCls","className","children"];var LayoutFooter=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(function(props,ref){var _props$prefixCls=props.prefixCls,prefixCls=_props$prefixCls===void 0?'w-layout-footer':_props$prefixCls,className=props.className,children=props.children,other=_objectWithoutProperties(props,Footer_excluded);var cls=[prefixCls,className].filter(Boolean).join(' ').trim();return/*#__PURE__*/(0,jsx_runtime.jsx)("footer",_objectSpread2(_objectSpread2({ref:ref,className:cls},other),{},{children:children}));});
;// ./src/Sider.tsx
var Sider_excluded=["prefixCls","className","style","children","width","collapsedWidth","collapsed","addSider","removeSider"];function randomid(){return parseInt(String(Math.random()*1e15),10).toString(36);}var Sider=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(function(props,ref){var _ref=props,_ref$prefixCls=_ref.prefixCls,prefixCls=_ref$prefixCls===void 0?'w-layout-sider':_ref$prefixCls,className=_ref.className,style=_ref.style,children=_ref.children,_ref$width=_ref.width,width=_ref$width===void 0?200:_ref$width,_ref$collapsedWidth=_ref.collapsedWidth,collapsedWidth=_ref$collapsedWidth===void 0?80:_ref$collapsedWidth,_ref$collapsed=_ref.collapsed,collapsed=_ref$collapsed===void 0?false:_ref$collapsed,addSider=_ref.addSider,removeSider=_ref.removeSider,other=_objectWithoutProperties(_ref,Sider_excluded);var _useState=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)("w-layout-".concat(randomid())),_useState2=_slicedToArray(_useState,1),sliderId=_useState2[0];var _useState3=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(collapsed?collapsedWidth:width),_useState4=_slicedToArray(_useState3,2),rawWidth=_useState4[0],setRawWidth=_useState4[1];(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function(){if(addSider){addSider(sliderId);}return function(){if(removeSider){removeSider(sliderId);}};},[]);(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(function(){return setRawWidth(collapsed?collapsedWidth:width);},[width,collapsedWidth,collapsed]);var divStyle=_objectSpread2(_objectSpread2({},style),{},{flex:"0 0 ".concat(rawWidth),maxWidth:rawWidth,minWidth:rawWidth,width:rawWidth});return/*#__PURE__*/(0,jsx_runtime.jsx)("div",_objectSpread2(_objectSpread2({ref:ref,className:[prefixCls,className].filter(Boolean).join(' ').trim(),style:divStyle},other),{},{children:children}));});var LayoutSider=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(function(props,ref){return/*#__PURE__*/(0,jsx_runtime.jsx)(LayoutContext.Consumer,{children:function children(context){return/*#__PURE__*/(0,jsx_runtime.jsx)(Sider,_objectSpread2(_objectSpread2({ref:ref},props),context));}});});
;// ./src/Content.tsx
var Content_excluded=["prefixCls","className","children"];var LayoutContent=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(function(props,ref){var _props$prefixCls=props.prefixCls,prefixCls=_props$prefixCls===void 0?'w-layout-content':_props$prefixCls,className=props.className,children=props.children,other=_objectWithoutProperties(props,Content_excluded);var cls=[prefixCls,className].filter(Boolean).join(' ').trim();return/*#__PURE__*/(0,jsx_runtime.jsx)("main",_objectSpread2(_objectSpread2({ref:ref,className:cls},other),{},{children:children}));});
;// ./src/style/index.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const style = ({});
;// ./src/index.tsx
src_Layout.Header=LayoutHeader;src_Layout.Footer=LayoutFooter;src_Layout.Sider=LayoutSider;src_Layout.Content=LayoutContent;/* harmony default export */ const src = (src_Layout);
/******/ 	return __webpack_exports__;
/******/ })()
;
});