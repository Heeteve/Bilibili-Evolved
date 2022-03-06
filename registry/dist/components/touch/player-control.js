/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["touch/player-control"] = factory();
	else
		root["touch/player-control"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./registry/lib/components/touch/player-control/index.ts":
/*!***************************************************************!*\
  !*** ./registry/lib/components/touch/player-control/index.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"component\": function() { return /* binding */ component; }\n/* harmony export */ });\n/* harmony import */ var _core_utils_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/utils/urls */ \"@/core/utils/urls\");\n/* harmony import */ var _core_utils_urls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_utils_urls__WEBPACK_IMPORTED_MODULE_0__);\n\nconst id = 'touch-player-control';\n\nconst entry = async () => {\n  document.body.classList.add(id);\n};\n\nconst component = {\n  name: 'touchPlayerControl',\n  displayName: '控制栏触摸优化',\n  description: {\n    'zh-CN': '增大播放器控制栏里按钮的间距, 方便触屏使用.'\n  },\n  tags: [componentsTags.touch, componentsTags.style],\n  enabledByDefault: navigator.maxTouchPoints > 0,\n  urlInclude: _core_utils_urls__WEBPACK_IMPORTED_MODULE_0__.playerUrls,\n  instantStyles: [{\n    name: id,\n    style: () => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./player-control.scss */ \"./registry/lib/components/touch/player-control/player-control.scss\", 23))\n  }],\n  entry,\n  reload: entry,\n  unload: () => {\n    document.body.classList.remove(id);\n  },\n  commitHash: \"da1de09b8ccefec9f932cd98cd5f84a09fdc03dc\",\n  coreVersion: \"2.1.0\"\n};\n\n//# sourceURL=webpack://%5Bname%5D/./registry/lib/components/touch/player-control/index.ts?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/fast-sass-loader/lib/index.js??clonedRuleSet-9[0].rules[0].use[3]!./registry/lib/components/touch/player-control/player-control.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/fast-sass-loader/lib/index.js??clonedRuleSet-9[0].rules[0].use[3]!./registry/lib/components/touch/player-control/player-control.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\nbody.touch-player-control .bilibili-player * {\\n  -webkit-tap-highlight-color: transparent !important;\\n}\\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap {\\n  padding: 0 !important;\\n}\\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn {\\n  height: 100% !important;\\n  padding-left: 2px !important;\\n  padding-right: 2px !important;\\n}\\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn.bilibili-player-video-btn-start {\\n  padding-left: 22px !important;\\n}\\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn.bilibili-player-video-btn-fullscreen {\\n  padding-right: 18px !important;\\n}\\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn-pagelist {\\n  width: 36px !important;\\n}\\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn-pagelist .bilibili-player-video-btn-name {\\n  display: none !important;\\n}\\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn-pagelist::before {\\n  content: \\\"󰉹\\\";\\n  display: block;\\n  width: 36px;\\n  color: #eee;\\n  font: normal normal normal 20px/1 \\\"Material Design Icons\\\";\\n  text-rendering: auto;\\n  line-height: inherit;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn-speed {\\n  width: 36px !important;\\n}\\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn-speed-name {\\n  display: none !important;\\n}\\nbody.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap .bilibili-player-video-btn-speed::before {\\n  content: \\\"󰣿\\\";\\n  display: block;\\n  width: 36px;\\n  color: #eee;\\n  font: normal normal normal 20px/1 \\\"Material Design Icons\\\";\\n  text-rendering: auto;\\n  line-height: inherit;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\nbody.touch-player-control .bilibili-player .bilibili-player-area #bilibili_pbp_pin {\\n  right: 0 !important;\\n}\\nbody.player-mode-webfullscreen.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-bottom-center, body.player-fullscreen-fix.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-bottom-center, body.player-full-win.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-control-bottom-center {\\n  padding: 0 12px !important;\\n}\\nbody.player-mode-webfullscreen.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn, body.player-fullscreen-fix.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn, body.player-full-win.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn {\\n  flex-shrink: 0 !important;\\n  flex-basis: 48px !important;\\n}\\nbody.player-mode-webfullscreen.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-speed,\\nbody.player-mode-webfullscreen.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-pagelist, body.player-fullscreen-fix.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-speed,\\nbody.player-fullscreen-fix.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-pagelist, body.player-full-win.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-speed,\\nbody.player-full-win.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-pagelist {\\n  width: 54px !important;\\n}\\nbody.player-mode-webfullscreen.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-speed::before,\\nbody.player-mode-webfullscreen.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-pagelist::before, body.player-fullscreen-fix.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-speed::before,\\nbody.player-fullscreen-fix.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-pagelist::before, body.player-full-win.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-speed::before,\\nbody.player-full-win.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-pagelist::before {\\n  width: 50px;\\n  font-size: 26px;\\n}\\nbody.player-mode-webfullscreen.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-start, body.player-fullscreen-fix.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-start, body.player-full-win.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-btn-start {\\n  padding-top: 0 !important;\\n}\\nbody.player-mode-webfullscreen.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-danmaku-switch, body.player-fullscreen-fix.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-danmaku-switch, body.player-full-win.touch-player-control .bilibili-player .bilibili-player-area .bilibili-player-video-danmaku-switch {\\n  padding-left: 0 !important;\\n}\\n\\nbody.touch-player-control .bpx-player-video-area .squirtle-controller {\\n  height: 48px !important;\\n}\\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap {\\n  height: 31px !important;\\n  padding: 18px 6px 0 !important;\\n}\\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap {\\n  width: 36px !important;\\n}\\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap .squirtle-select-result {\\n  display: none !important;\\n}\\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap .squirtle-video-pagelist::before {\\n  content: \\\"󰉹\\\";\\n  display: block;\\n  width: 36px;\\n  color: #eee;\\n  font: normal normal normal 20px/1 \\\"Material Design Icons\\\";\\n  text-rendering: auto;\\n  line-height: inherit;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap {\\n  width: 36px !important;\\n}\\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap .squirtle-select-result {\\n  display: none !important;\\n}\\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap .squirtle-video-speed::before {\\n  content: \\\"󰣿\\\";\\n  display: block;\\n  width: 36px;\\n  color: #eee;\\n  font: normal normal normal 20px/1 \\\"Material Design Icons\\\";\\n  text-rendering: auto;\\n  line-height: inherit;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-high-energy.ease {\\n  bottom: 2px !important;\\n}\\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-high-energy,\\nbody.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-progress-common {\\n  width: 100% !important;\\n  margin: 0 !important;\\n}\\nbody.touch-player-control .bpx-player-video-area .squirtle-controller #bilibili_pbp_pin {\\n  right: 0 !important;\\n}\\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller, body.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller, body.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller {\\n  height: 72px !important;\\n}\\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap, body.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap, body.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap {\\n  height: 56px !important;\\n  padding: 16px 6px 0 !important;\\n}\\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-sendbar-wrap, body.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-sendbar-wrap, body.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-sendbar-wrap {\\n  align-items: center !important;\\n}\\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap,\\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap, body.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap,\\nbody.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap, body.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap,\\nbody.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap {\\n  width: 54px !important;\\n}\\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap .squirtle-video-pagelist::before,\\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap .squirtle-video-speed::before,\\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap .squirtle-video-pagelist::before,\\nbody.player-mode-webfullscreen.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap .squirtle-video-speed::before, body.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap .squirtle-video-pagelist::before,\\nbody.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap .squirtle-video-speed::before,\\nbody.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap .squirtle-video-pagelist::before,\\nbody.player-fullscreen-fix.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap .squirtle-video-speed::before, body.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap .squirtle-video-pagelist::before,\\nbody.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-pagelist-wrap .squirtle-video-speed::before,\\nbody.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap .squirtle-video-pagelist::before,\\nbody.player-full-win.touch-player-control .bpx-player-video-area .squirtle-controller .squirtle-controller-wrap .squirtle-speed-wrap .squirtle-video-speed::before {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 50px;\\n  font-size: 26px;\\n}\", \"\"]);\n// Exports\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://%5Bname%5D/./registry/lib/components/touch/player-control/player-control.scss?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9%5B0%5D.rules%5B0%5D.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9%5B0%5D.rules%5B0%5D.use%5B2%5D!./node_modules/fast-sass-loader/lib/index.js??clonedRuleSet-9%5B0%5D.rules%5B0%5D.use%5B3%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./registry/lib/components/touch/player-control/player-control.scss":
/*!**************************************************************************!*\
  !*** ./registry/lib/components/touch/player-control/player-control.scss ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n        var result = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/fast-sass-loader/lib/index.js??clonedRuleSet-9[0].rules[0].use[3]!./player-control.scss */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/fast-sass-loader/lib/index.js??clonedRuleSet-9[0].rules[0].use[3]!./registry/lib/components/touch/player-control/player-control.scss\");\n\n        if (result && result.__esModule) {\n            result = result.default;\n        }\n\n        if (typeof result === \"string\") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//# sourceURL=webpack://%5Bname%5D/./registry/lib/components/touch/player-control/player-control.scss?");

/***/ }),

/***/ "@/core/utils/urls":
/*!********************************************!*\
  !*** external ["coreApis","utils","urls"] ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = coreApis.utils.urls;

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
/******/ 			id: moduleId,
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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./registry/lib/components/touch/player-control/index.ts");
/******/ 	__webpack_exports__ = __webpack_exports__.component;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});