(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["@uiw/react-layout"] = factory(require("react"));
	else
		root["@uiw/react-layout"] = factory(root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__787__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 298:
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
var f=__webpack_require__(787),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;__webpack_unused_export__=q;


/***/ }),

/***/ 605:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(298);
} else {}


/***/ }),

/***/ 787:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
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

;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
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
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(605);
;// CONCATENATED MODULE: ./src/Layout.tsx
var _excluded=["prefixCls","className","hasSider","children"];var LayoutContext=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createContext({addSider:function addSider(){return null;},removeSider:function removeSider(){return null;}});var Layout=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(function(props,ref){var _props$prefixCls=props.prefixCls,prefixCls=_props$prefixCls===void 0?'w-layout':_props$prefixCls,className=props.className,hasSider=props.hasSider,children=props.children,other=_objectWithoutProperties(props,_excluded);var _useState=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)([]),_useState2=_slicedToArray(_useState,2),siders=_useState2[0],setSiders=_useState2[1];var addSider=function addSider(id){setSiders(function(state){return[].concat(_toConsumableArray(state),[id]);});};var removeSider=function removeSider(id){setSiders(function(state){return _toConsumableArray(state.filter(function(currentId){return currentId!==id;}));});};var cls=[prefixCls,className,typeof hasSider==='boolean'&&hasSider||siders.length>0?"".concat(prefixCls,"-has-sider"):null].filter(Boolean).join(' ').trim();return/*#__PURE__*/(0,jsx_runtime.jsx)(LayoutContext.Provider,{value:{addSider:addSider,removeSider:removeSider},children:/*#__PURE__*/(0,jsx_runtime.jsx)("section",_objectSpread2(_objectSpread2({ref:ref,className:cls},other),{},{children:children}))});});Layout.displayName='Layout';/* harmony default export */ const src_Layout = (Layout);
;// CONCATENATED MODULE: ./src/Header.tsx
var Header_excluded=["prefixCls","className","children"];var LayoutHeader=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(function(props,ref){var _ref=props||{},_ref$prefixCls=_ref.prefixCls,prefixCls=_ref$prefixCls===void 0?'w-layout-header':_ref$prefixCls,className=_ref.className,children=_ref.children,other=_objectWithoutProperties(_ref,Header_excluded);var cls=[prefixCls,className].filter(Boolean).join(' ').trim();return/*#__PURE__*/(0,jsx_runtime.jsx)("header",_objectSpread2(_objectSpread2({ref:ref,className:cls},other),{},{children:children}));});
;// CONCATENATED MODULE: ./src/Footer.tsx
var Footer_excluded=["prefixCls","className","children"];var LayoutFooter=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(function(props,ref){var _props$prefixCls=props.prefixCls,prefixCls=_props$prefixCls===void 0?'w-layout-footer':_props$prefixCls,className=props.className,children=props.children,other=_objectWithoutProperties(props,Footer_excluded);var cls=[prefixCls,className].filter(Boolean).join(' ').trim();return/*#__PURE__*/(0,jsx_runtime.jsx)("footer",_objectSpread2(_objectSpread2({ref:ref,className:cls},other),{},{children:children}));});
;// CONCATENATED MODULE: ./src/Sider.tsx
var Sider_excluded=["prefixCls","className","style","children","width","collapsedWidth","collapsed","addSider","removeSider"];function randomid(){return parseInt(String(Math.random()*1e15),10).toString(36);}var Sider=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(function(props,ref){var _ref=props,_ref$prefixCls=_ref.prefixCls,prefixCls=_ref$prefixCls===void 0?'w-layout-sider':_ref$prefixCls,className=_ref.className,style=_ref.style,children=_ref.children,_ref$width=_ref.width,width=_ref$width===void 0?200:_ref$width,_ref$collapsedWidth=_ref.collapsedWidth,collapsedWidth=_ref$collapsedWidth===void 0?80:_ref$collapsedWidth,_ref$collapsed=_ref.collapsed,collapsed=_ref$collapsed===void 0?false:_ref$collapsed,addSider=_ref.addSider,removeSider=_ref.removeSider,other=_objectWithoutProperties(_ref,Sider_excluded);var _useState=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)("w-layout-".concat(randomid())),_useState2=_slicedToArray(_useState,1),sliderId=_useState2[0];var _useState3=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(collapsed?collapsedWidth:width),_useState4=_slicedToArray(_useState3,2),rawWidth=_useState4[0],setRawWidth=_useState4[1];(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function(){if(addSider){addSider(sliderId);}return function(){if(removeSider){removeSider(sliderId);}};},[]);(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(function(){return setRawWidth(collapsed?collapsedWidth:width);},[width,collapsedWidth,collapsed]);var divStyle=_objectSpread2(_objectSpread2({},style),{},{flex:"0 0 ".concat(rawWidth),maxWidth:rawWidth,minWidth:rawWidth,width:rawWidth});return/*#__PURE__*/(0,jsx_runtime.jsx)("div",_objectSpread2(_objectSpread2({ref:ref,className:[prefixCls,className].filter(Boolean).join(' ').trim(),style:divStyle},other),{},{children:children}));});var LayoutSider=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(function(props,ref){return/*#__PURE__*/(0,jsx_runtime.jsx)(LayoutContext.Consumer,{children:function children(context){return/*#__PURE__*/(0,jsx_runtime.jsx)(Sider,_objectSpread2(_objectSpread2({ref:ref},props),context));}});});
;// CONCATENATED MODULE: ./src/Content.tsx
var Content_excluded=["prefixCls","className","children"];var LayoutContent=/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef(function(props,ref){var _props$prefixCls=props.prefixCls,prefixCls=_props$prefixCls===void 0?'w-layout-content':_props$prefixCls,className=props.className,children=props.children,other=_objectWithoutProperties(props,Content_excluded);var cls=[prefixCls,className].filter(Boolean).join(' ').trim();return/*#__PURE__*/(0,jsx_runtime.jsx)("main",_objectSpread2(_objectSpread2({ref:ref,className:cls},other),{},{children:children}));});
;// CONCATENATED MODULE: ./src/style/index.less
// extracted by mini-css-extract-plugin
/* harmony default export */ const style = ({});
;// CONCATENATED MODULE: ./src/index.tsx
src_Layout.Header=LayoutHeader;src_Layout.Footer=LayoutFooter;src_Layout.Sider=LayoutSider;src_Layout.Content=LayoutContent;/* harmony default export */ const src = (src_Layout);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});