!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["live/hide-player-blur"]=t():e["live/hide-player-blur"]=t()}(globalThis,(()=>(()=>{var e,t,r={275:(e,t,r)=>{var o=r(218)((function(e){return e[1]}));o.push([e.id,"#web-player-module-area-mask-panel {\n  z-index: -100 !important;\n}",""]),e.exports=o},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,r,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var n={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(n[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&n[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},723:(e,t,r)=>{var o=r(275);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},101:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=101,e.exports=t},73:e=>{"use strict";e.exports="移除直播画面中的马赛克区域.\n"}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,exports:{}};return r[e](i,i.exports,n),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(i,a),i},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";n.d(i,{component:()=>r});const e=coreApis.componentApis.define,t=coreApis.utils.urls,r=(0,e.defineComponentMetadata)({name:"hideLivePlayerBlur",displayName:"隐藏直播马赛克",entry:none,tags:[componentsTags.live,componentsTags.style],urlInclude:[...t.liveUrls],instantStyles:[{name:"hideLivePlayerBlur",style:()=>Promise.resolve().then(n.t.bind(n,723,23))}],commitHash:"c76c2dadb42306e00cb58aae990e77c7b9b027d0",coreVersion:"2.9.6",description:(()=>{const e=n(101);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(n.t.bind(n,73,17)).then((e=>e.default))}})()})})(),i=i.component})()));