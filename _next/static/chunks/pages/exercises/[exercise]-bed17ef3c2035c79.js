(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51],{72241:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/exercises/[exercise]",function(){return r(24092)}])},83841:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return u},default:function(){return o}});let l=r(38754);r(85893),r(67294);let n=l._(r(28354));function a(e){return{default:(null==e?void 0:e.default)||e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}function o(e,t){let r=n.default,l={loading:e=>{let{error:t,isLoading:r,pastDelay:l}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l={...l,...e});let o=(l={...l,...t}).loader;return(l.loadableGenerated&&(l={...l,...l.loadableGenerated},delete l.loadableGenerated),"boolean"!=typeof l.ssr||l.ssr)?r({...l,loader:()=>null!=o?o().then(a):Promise.resolve(a(()=>null))}):(delete l.webpack,delete l.modules,u(r,l))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},77309:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return l}});let l=r(38754)._(r(67294)).default.createContext(null)},28354:function(e,t,r){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let l=r(38754)._(r(67294)),n=r(77309),a=[],u=[],o=!1;function i(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class s{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function i(){if(!a){let t=new s(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!o){let e=r.webpack?r.webpack():r.modules;e&&u.push(t=>{for(let r of e)if(t.includes(r))return i()})}function d(e,t){!function(){i();let e=l.default.useContext(n.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let u=l.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),l.default.useMemo(()=>{var t;return u.loading||u.error?l.default.createElement(r.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:a.retry}):u.loaded?l.default.createElement((t=u.loaded)&&t.default?t.default:t,e):null},[e,u])}return d.preload=()=>i(),d.displayName="LoadableComponent",l.default.forwardRef(d)}(i,e)}function c(e,t){let r=[];for(;e.length;){let l=e.pop();r.push(l(t))}return Promise.all(r).then(()=>{if(e.length)return c(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{c(a).then(e,t)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(o=!0,t());c(u,e).then(r,r)})),window.__NEXT_PRELOADREADY=d.preloadReady;let f=d},24092:function(e,t,r){"use strict";r.r(t);var l=r(85893);r(67294);var n=r(5152),a=r.n(n),u=r(41363),o=r(48887);let i=()=>(0,l.jsx)(o.o,{configs:u.t.exercises}),s=a()(async()=>i,{ssr:!1});t.default=s},48887:function(e,t,r){"use strict";r.d(t,{o:function(){return s}});var l=r(85893);r(67294);var n=r(98456),a=r(76176),u=r(16644);let o=e=>{let{currDisplayPath:t}=(0,a.r)(),{data:r,loading:l,error:n}=(0,u.k)({getSubPages:e.getSubPages}),o=t.split("/").at(-2);return l?{data:null,loading:l,error:null}:o&&r&&r[o]?{data:r[o],loading:!1,error:n}:{data:null,loading:!1,error:n}};var i=r(86611);let s=e=>{let{configs:t}=e,{data:r,loading:a}=o(t);return a?(0,l.jsx)(n.Z,{}):r?(0,l.jsx)(i.Z,{config:r}):null}},86611:function(e,t,r){"use strict";var l=r(85893);r(67294),t.Z=e=>{let{config:t}=e;return(0,l.jsx)("div",{children:t.component},t.name)}},5152:function(e,t,r){e.exports=r(83841)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=72241)}),_N_E=e.O()}]);