!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["touch/player-gestures"]=t():e["touch/player-gestures"]=t()}(globalThis,(()=>(()=>{var e,t,s={359:(e,t,s)=>{"use strict";s.r(t),s.d(t,{setBrightness:()=>n});const n=(e,t)=>{let s=t;s<0&&(s=0),e.style.filter=`brightness(${s})`}},953:(e,t,s)=>{"use strict";s.d(t,{q:()=>n});let n=function(e){return e.Fast="高速",e.Medium="中速",e.Slow="低速",e}({})},927:(e,t,s)=>{"use strict";s.r(t),s.d(t,{setProgress:()=>n});const n=(e,t)=>{let s=t;s>e.duration?s=e.duration:s<0&&(s=0),unsafeWindow.player.seek(s,e.paused)}},279:(e,t,s)=>{"use strict";s.r(t),s.d(t,{SwipeAction:()=>a,Swiper:()=>l});const n=coreApis.settings;var i=s(953);function r(e,t,s){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var n=s.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const o=(e,t)=>{const s=(e=>{let t=0,s=0,n=e;for(;n&&!Number.isNaN(n.offsetLeft)&&!Number.isNaN(n.offsetTop);)t+=n.offsetLeft-n.scrollLeft,s+=n.offsetTop-n.scrollTop,n=n.offsetParent;return{x:t,y:s}})(t);return{x:(e.touches[0].pageX-s.x)/t.clientWidth,y:(e.touches[0].pageY-s.y)/t.clientHeight,width:t.clientWidth,height:t.clientHeight}};class a extends EventTarget{constructor(e){super(),this.element=e,r(this,"minSwipeDistance",(0,n.getComponentSettings)("touchPlayerGestures").options.swiperDistance),r(this,"startPosition",null),r(this,"lastAction",null),e.addEventListener("touchstart",(()=>{this.dispatchEvent(new CustomEvent("start"))})),e.addEventListener("touchend",(()=>{this.dispatchEvent(new CustomEvent("end",{detail:this.lastAction})),this.lastAction=null}))}startAction(e,t,s){if("vertical"===e)if(this.startPosition.x<.5){const e=Math.round(200*(t-this.minSwipeDistance)/(1.5*s.height))/100;this.dispatchEvent(new CustomEvent("brightness",{detail:e})),this.lastAction={type:"brightness",brightness:e}}else{const e=Math.round(200*(t-this.minSwipeDistance)/(1.5*s.height))/100;this.dispatchEvent(new CustomEvent("volume",{detail:e})),this.lastAction={type:"volume",volume:e}}else if("horizontal"===e)if(s.y<1/3&&(s.x<.1||s.x>.9))this.dispatchEvent(new CustomEvent("cancel")),this.lastAction=null;else{let e=0;e=this.startPosition.y<1/3?.05:this.startPosition.y>=1/3&&this.startPosition.y<=2/3?.2:1;const s={.05:i.q.Slow,.2:i.q.Medium,1:i.q.Fast};if(t>0){const n=(t-this.minSwipeDistance)*e;this.dispatchEvent(new CustomEvent("progress",{detail:{mode:s[e],progress:n}})),this.lastAction={type:"progress",seconds:n}}else{const n=(t+this.minSwipeDistance)*e;this.dispatchEvent(new CustomEvent("progress",{detail:{mode:s[e],progress:n}})),this.lastAction={type:"progress",seconds:n}}}}}class l{constructor(e){r(this,"onTouchStart",null),r(this,"onTouchEnd",null),r(this,"direction",null),r(this,"action",void 0),r(this,"xDown",void 0),r(this,"yDown",void 0),this.action=new a(e),e.addEventListener("touchstart",(t=>{this.xDown=t.touches[0].clientX,this.yDown=t.touches[0].clientY,this.onTouchStart?.(t),this.action.startPosition=o(t,e)})),e.addEventListener("touchmove",(t=>{if(!this.xDown||!this.yDown||!t.cancelable)return;const s=t.touches[0].clientX,n=t.touches[0].clientY,i=o(t,e),r=this.xDown-s,a=this.yDown-n;this.direction?"vertical"===this.direction?this.action.startAction(this.direction,a,i):"horizontal"===this.direction&&this.action.startAction(this.direction,-r,i):this.direction=Math.abs(r)>Math.abs(a)?"horizontal":"vertical",t.preventDefault()}),{passive:!1}),e.addEventListener("touchend",(e=>{this.xDown=null,this.yDown=null,this.direction=null,this.onTouchEnd?.(e),this.action.startPosition=null}))}}},870:(e,t,s)=>{"use strict";s.r(t),s.d(t,{setVolume:()=>i,syncVolumeUI:()=>n});const n=e=>{unsafeWindow.player?.volume(e)},i=async(e,t)=>{let s=t;s>1?s=1:s<0&&(s=0),e.volume=s}},485:(e,t,s)=>{var n=s(218)((function(e){return e[1]}));n.push([e.id,".gesture-preview {\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-size: 16px;\n  border-radius: 8px;\n  width: 100%;\n  height: 100%;\n  max-width: 400px;\n  max-height: 150px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%) scale(0.95);\n  opacity: 0;\n  transition: 0.2s ease-out;\n  display: flex;\n  flex-direction: column;\n  z-index: 11;\n  padding: 4px 6px;\n  box-sizing: border-box;\n  pointer-events: none;\n}\n.gesture-preview.opened {\n  transform: translateX(-50%) translateY(-50%) scale(1);\n  opacity: 1;\n}\n.gesture-preview-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1 0 auto;\n}\n.gesture-preview-content .brightness,\n.gesture-preview-content .volume {\n  position: relative;\n  flex: 0 0 auto;\n  margin: 0 12px;\n}\n.gesture-preview-content .brightness .label,\n.gesture-preview-content .volume .label {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.gesture-preview-content .brightness .label .name,\n.gesture-preview-content .volume .label .name {\n  color: #aaa;\n  margin-bottom: 6px;\n}\n.gesture-preview-content .progress {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex: 1 0 auto;\n  align-self: flex-end;\n}\n.gesture-preview-content .progress .videoshot {\n  height: 70px;\n  width: 120px;\n  margin-bottom: 8px;\n  border-radius: 4px;\n}\n.gesture-preview-content .progress .name {\n  color: #aaa;\n  padding: 4px 6px;\n  margin-bottom: 6px;\n}\n.gesture-preview-content .progress .progress-label {\n  margin-bottom: 12px;\n}\n.gesture-preview-content .progress .preview {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.gesture-preview-content .progress .preview .diff {\n  color: var(--theme-color);\n  margin-right: 6px;\n}\n.gesture-preview-content .progress .preview .seek-mode {\n  padding: 4px 6px;\n  border-radius: 4px;\n  background-color: rgba(136, 136, 136, 0.2666666667);\n}",""]),e.exports=n},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s=e(t);return t[2]?"@media ".concat(t[2]," {").concat(s,"}"):s})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,s,n){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var i={};if(n)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var o=this[r][0];null!=o&&(i[o]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);n&&i[l[0]]||(s&&(l[2]?l[2]="".concat(s," and ").concat(l[2]):l[2]=s),t.push(l))}},t}},332:(e,t,s)=>{"use strict";var n,i=function(){return void 0===n&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var e={};return function(t){if(void 0===e[t]){var s=document.querySelector(t);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}e[t]=s}return e[t]}}(),o=[];function a(e){for(var t=-1,s=0;s<o.length;s++)if(o[s].identifier===e){t=s;break}return t}function l(e,t){for(var s={},n=[],i=0;i<e.length;i++){var r=e[i],l=t.base?r[0]+t.base:r[0],c=s[l]||0,u="".concat(l," ").concat(c);s[l]=c+1;var p=a(u),d={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(o[p].references++,o[p].updater(d)):o.push({identifier:u,updater:g(d,t),references:1}),n.push(u)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=s.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,p=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,s,n){var i=s?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=p(t,i);else{var r=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function h(e,t,s){var n=s.css,i=s.media,r=s.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var v=null,f=0;function g(e,t){var s,n,i;if(t.singleton){var r=f++;s=v||(v=c(t)),n=d.bind(null,s,r,!1),i=d.bind(null,s,r,!0)}else s=c(t),n=h.bind(null,s,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(s)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var s=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<s.length;n++){var i=a(s[n]);o[i].references--}for(var r=l(e,t),c=0;c<s.length;c++){var u=a(s[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}s=r}}}},778:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y});var n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"gesture-preview",class:{opened:e.opened}},[t("div",{staticClass:"gesture-preview-content"},[t("div",{staticClass:"brightness"},[t("ProgressRing",{attrs:{size:100,progress:100*e.preview.brightness}}),e._v(" "),t("div",{staticClass:"label"},[t("div",{staticClass:"name"},[e._v("亮度")]),e._v(" "),t("div",{staticClass:"value"},[e._v("\n          "+e._s(e._f("percent")(e.preview.brightness))+"\n        ")])])],1),e._v(" "),t("div",{staticClass:"progress"},[t("div",{staticClass:"videoshot",style:e.videoshotStyle}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:null!==e.preview.progress,expression:"preview.progress !== null"}],staticClass:"preview"},[e.progressNaN?e._e():t("div",{staticClass:"diff"},[e._v("\n          "+e._s(e._f("progressDiff")(e.preview.progress-e.store.progress))+"\n        ")]),e._v(" "),t("div",{staticClass:"seek-mode"},[e._v("\n          "+e._s(e.progressNaN?"取消调整":e.preview.seekMode)+"\n        ")])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:null===e.preview.progress,expression:"preview.progress === null"}],staticClass:"name"},[e._v("进度")]),e._v(" "),t("div",{staticClass:"progress-label"},[e._v("\n        "+e._s(e._f("progress")(e.progressValid?e.preview.progress:e.store.progress))+"\n      ")])]),e._v(" "),t("div",{staticClass:"volume"},[t("ProgressRing",{attrs:{size:100,progress:100*e.preview.volume}}),e._v(" "),t("div",{staticClass:"label"},[t("div",{staticClass:"name"},[e._v("音量")]),e._v(" "),t("div",{staticClass:"value"},[e._v("\n          "+e._s(e._f("percent")(e.preview.volume))+"\n        ")])])],1)]),e._v(" "),t("div",{staticClass:"progress-bar"},[t("ProgressBar",{attrs:{progress:e.progressValid?e.preview.progress:e.store.progress,max:e.video.duration}})],1)])};n._withStripped=!0;const i=coreApis.ui;var r=s(605);const o=coreApis.utils.formatters;var a=s(953);function l(e,t,s){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var n=s.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class c{constructor(){l(this,"aid",unsafeWindow.aid),l(this,"cid",unsafeWindow.cid),l(this,"viewWidth",120),l(this,"viewHeight",70),l(this,"cidData",null),l(this,"blocked",!1),l(this,"workingPromise",null)}async getVideoshot(e){if(!this.aid||!this.cid||this.blocked)return null;if(this.workingPromise)return this.workingPromise;const{getJson:t}=await Promise.resolve().then(s.t.bind(s,375,23));if(!this.cidData){this.workingPromise=t(`https://api.bilibili.com/x/player/videoshot?aid=${this.aid}&cid=${this.cid}&index=1`);const s=await this.workingPromise;return this.workingPromise=null,-412===s.code?(this.blocked=!0,null):(this.cidData=s.data,this.getVideoshot(e))}const n=this.cidData,i=n.index;let r=1;for(let t=i.length-1;t>0;t--)if(e>=i[t]){r=t;break}const o=n.image;if(null===o)return null;const a=n.img_x_len??10,l=n.img_y_len??10,c=a*this.viewWidth,u=l*this.viewHeight,p=this.viewWidth,d=this.viewHeight,h=-(r-1)%100%a*p,v=-Math.floor((r-1)%100/l)*d;return{backgroundImage:`url(${o[Math.floor(r/100)]})`,backgroundPosition:`${h}px ${v}px`,backgroundSize:`${c}px ${u}px`}}}var u=s(870);const p=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const i=e+t;return i>s?s:i<n?n:i},d=Vue.extend({components:{ProgressRing:i.ProgressRing,ProgressBar:i.ProgressBar},filters:{percent:o.formatPercent,progress:e=>(0,o.formatDuration)(e,1),progressDiff:e=>`${e>0?"+":"-"}${(e=>{e=Math.abs(e);const t=Math.floor(e/3600),s=Math.floor((e-3600*t)/60),n=e-3600*t-60*s;let i=`${(0,r.fixed)(n)}秒`;return s>0&&(i=`${s}分${i}`),t>0&&(i=`${t}时${i}`),i})(e)}`},data(){const e={progress:0,brightness:1,volume:.66};return{opened:!1,video:dq("video"),videoshot:new c,videoshotStyle:{},store:e,preview:{...e,progress:null,seekMode:a.q.Fast}}},computed:{progressNaN(){return Number.isNaN(this.preview.progress)},progressNull(){return null===this.preview.progress},progressValid(){return!this.progressNaN&&!this.progressNull}},methods:{sync(){const e=dq("video");this.video=e,this.store.volume=e.volume,this.store.progress=e.currentTime,this.store.brightness=(()=>{if(e.style.filter){const t=e.style.filter.match(/brightness\((.+)\)/);return t?parseFloat(t[1]):1}return 1})(),this.preview={...this.preview,...this.store,progress:null}},startPreview(e){let{brightness:t,volume:s,progress:n}=e;if(this.opened=!0,void 0!==n){this.preview.progress=p(this.store.progress,n,this.video.duration);this.videoshot.getVideoshot(this.preview.progress).then((e=>{this.videoshotStyle=e}))}else void 0!==t?this.preview.brightness=p(this.store.brightness,t,1/0):void 0!==s&&(this.preview.volume=p(this.store.volume,s)),this.apply({brightness:t,volume:s})},cancelPreview(){this.preview.progress=NaN},endPreview(){unsafeWindow.touchGestureDebug||(this.opened=!1),this.store.volume!==this.preview.volume&&(0,u.syncVolumeUI)(this.preview.volume),Number.isNaN(this.preview.progress)?this.preview.progress=null:this.store.progress!==this.preview.progress&&null!==this.preview.progress&&this.apply({progress:this.preview.progress})},async apply(e){let{brightness:t,volume:n,progress:i}=e;const r=this.video;if(r)if(void 0!==t){const{setBrightness:e}=await Promise.resolve().then(s.bind(s,359));e(r,this.preview.brightness)}else if(void 0!==n){const{setVolume:e}=await Promise.resolve().then(s.bind(s,870));e(r,this.preview.volume)}else if(void 0!==i){const{setProgress:e}=await Promise.resolve().then(s.bind(s,927));e(r,i)}}}}),h=d;var v=s(332),f=s.n(v),g=s(485),m=s.n(g),w={insert:"head",singleton:!1};f()(m(),w);m().locals;var b=function(e,t,s,n,i,r,o,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=s,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:c}}(h,n,[],!1,null,null,null);const y=b.exports},375:e=>{"use strict";e.exports=coreApis.ajax},391:e=>{"use strict";e.exports=coreApis.observer},605:e=>{"use strict";e.exports=coreApis.utils}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,exports:{}};return s[e](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(s,n){if(1&n&&(s=this(s)),8&n)return s;if("object"==typeof s&&s){if(4&n&&s.__esModule)return s;if(16&n&&"function"==typeof s.then)return s}var r=Object.create(null);i.r(r);var o={};e=e||[null,t({}),t([]),t(t)];for(var a=2&n&&s;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>o[e]=()=>s[e]));return o.default=()=>s,i.d(r,o),r},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";i.d(r,{component:()=>n});const e=coreApis.componentApis.define,t=coreApis.utils.urls,s=coreApis.componentApis.video.playerAgent,n=(0,e.defineComponentMetadata)({name:"touchPlayerGestures",displayName:"播放器触摸手势",enabledByDefault:navigator.maxTouchPoints>0,tags:[componentsTags.touch],description:{"zh-CN":"为播放器启用触摸手势支持:\n- 左右滑动可调整进度\n- 上下滑动可调整音量\n- 进度调整可在左上角和右上角取消\n- 进度调整时在不同位置滑动, 可以使用3档不同的灵敏度."},entry:async()=>{const{videoChange:e}=await Promise.resolve().then(i.t.bind(i,391,23));e((async()=>{if(!await s.playerAgent.query.video.element())return;let e;if(!dq(".gesture-preview")){const t=await Promise.resolve().then(i.bind(i,778)),{mountVueComponent:n}=await Promise.resolve().then(i.t.bind(i,605,23));e=n(t),s.playerAgent.query.video.subtitle.sync()?.insertAdjacentElement("beforebegin",e.$el)}const{Swiper:t}=await Promise.resolve().then(i.bind(i,279)),n=new t(s.playerAgent.query.video.container.sync());n.action.addEventListener("start",(()=>{e.sync()})),n.action.addEventListener("cancel",(()=>{e.cancelPreview()})),n.action.addEventListener("end",(()=>{e.endPreview()})),["volume","brightness"].forEach((t=>{n.action.addEventListener(t,(s=>{e.startPreview({[t]:s.detail})}))})),n.action.addEventListener("progress",(t=>{const{progress:s,mode:n}=t.detail;e.preview.seekMode=n,e.startPreview({progress:s})}))}))},urlInclude:t.playerUrls,options:{swiperDistance:{displayName:"手势触发最小距离",defaultValue:10,hidden:!0}},commitHash:"c76c2dadb42306e00cb58aae990e77c7b9b027d0",coreVersion:"2.9.6"})})(),r=r.component})()));