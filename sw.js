if(!self.define){let e,o={};const i=(i,s)=>(i=new URL(i+".js",s).href,o[i]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=o,document.head.appendChild(e)}else e=i,importScripts(i),o()})).then((()=>{let e=o[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(o[t])return;let r={};const n=e=>i(e,t),c={module:{uri:t},exports:r,require:n};o[t]=Promise.all(s.map((e=>c[e]||n(e)))).then((e=>(a(...e),r)))}}define(["./workbox-637c5ad6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/personal-portfolio",revision:"7oHgC1M8l4Kp-ua7BiqZC"},{url:"/personal-portfolio/_next/static/7oHgC1M8l4Kp-ua7BiqZC/_buildManifest.js",revision:"94822a822f52ffc73f171e1887c03a53"},{url:"/personal-portfolio/_next/static/7oHgC1M8l4Kp-ua7BiqZC/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/personal-portfolio/_next/static/chunks/125.fa5fc7b35abe0dc9.js",revision:"fa5fc7b35abe0dc9"},{url:"/personal-portfolio/_next/static/chunks/206.2b26a324892e64d3.js",revision:"2b26a324892e64d3"},{url:"/personal-portfolio/_next/static/chunks/261.1d8c97941866bebd.js",revision:"1d8c97941866bebd"},{url:"/personal-portfolio/_next/static/chunks/3.f8d82de9231a4e19.js",revision:"f8d82de9231a4e19"},{url:"/personal-portfolio/_next/static/chunks/334.c2c39a76d030f32c.js",revision:"c2c39a76d030f32c"},{url:"/personal-portfolio/_next/static/chunks/359.4479b60334551f60.js",revision:"4479b60334551f60"},{url:"/personal-portfolio/_next/static/chunks/38.6bc0237317c75ea1.js",revision:"6bc0237317c75ea1"},{url:"/personal-portfolio/_next/static/chunks/524.55a4fad06bcd9c20.js",revision:"55a4fad06bcd9c20"},{url:"/personal-portfolio/_next/static/chunks/737.b0a90f95a515e1d8.js",revision:"b0a90f95a515e1d8"},{url:"/personal-portfolio/_next/static/chunks/764.46dde6a4ea41f576.js",revision:"46dde6a4ea41f576"},{url:"/personal-portfolio/_next/static/chunks/framework-b30138dca27a5575.js",revision:"b30138dca27a5575"},{url:"/personal-portfolio/_next/static/chunks/main-3bc9ce3d5ae54631.js",revision:"3bc9ce3d5ae54631"},{url:"/personal-portfolio/_next/static/chunks/pages/_app-8c0eb2ed2b57d00a.js",revision:"8c0eb2ed2b57d00a"},{url:"/personal-portfolio/_next/static/chunks/pages/_error-735dc60b184b15e5.js",revision:"735dc60b184b15e5"},{url:"/personal-portfolio/_next/static/chunks/pages/contact-365b59cacde007bc.js",revision:"365b59cacde007bc"},{url:"/personal-portfolio/_next/static/chunks/pages/exercises-1f7ab23167c66006.js",revision:"1f7ab23167c66006"},{url:"/personal-portfolio/_next/static/chunks/pages/exercises/%5Bexercise%5D-bed17ef3c2035c79.js",revision:"bed17ef3c2035c79"},{url:"/personal-portfolio/_next/static/chunks/pages/index-c479eca08a2bc331.js",revision:"c479eca08a2bc331"},{url:"/personal-portfolio/_next/static/chunks/pages/tools-129575c3d4734398.js",revision:"129575c3d4734398"},{url:"/personal-portfolio/_next/static/chunks/pages/tools/cssToAndFromReact-f526b0960781dc60.js",revision:"f526b0960781dc60"},{url:"/personal-portfolio/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/personal-portfolio/_next/static/chunks/webpack-33a4f67513f95951.js",revision:"33a4f67513f95951"},{url:"/personal-portfolio/_next/static/css/6228de5dd55c561e.css",revision:"6228de5dd55c561e"},{url:"/personal-portfolio/_next/static/media/roboto-all-400-normal.22c8c36a.woff",revision:"22c8c36a"},{url:"/personal-portfolio/_next/static/media/roboto-cyrillic-400-normal.ba1944ac.woff2",revision:"ba1944ac"},{url:"/personal-portfolio/_next/static/media/roboto-cyrillic-ext-400-normal.7ea3b60d.woff2",revision:"7ea3b60d"},{url:"/personal-portfolio/_next/static/media/roboto-greek-400-normal.7026b7dc.woff2",revision:"7026b7dc"},{url:"/personal-portfolio/_next/static/media/roboto-greek-ext-400-normal.4e61a9f1.woff2",revision:"4e61a9f1"},{url:"/personal-portfolio/_next/static/media/roboto-latin-400-normal.7b8d7718.woff2",revision:"7b8d7718"},{url:"/personal-portfolio/_next/static/media/roboto-latin-ext-400-normal.cf3d7789.woff2",revision:"cf3d7789"},{url:"/personal-portfolio/_next/static/media/roboto-vietnamese-400-normal.0f9be457.woff2",revision:"0f9be457"},{url:"/personal-portfolio/background-light.jpg",revision:"123c88fca76f89f0e4a713c9aa7f41ae"},{url:"/personal-portfolio/background.jpg",revision:"5f88538afbfd26e58b54920c0fb68043"},{url:"/personal-portfolio/favicon.ico",revision:"c211432da1f0b2d6f167ea0506307db3"},{url:"/personal-portfolio/icons-192.png",revision:"0fd7aaea36c5084348f0510ba7a64669"},{url:"/personal-portfolio/icons-512.png",revision:"292b810f5a960a2603bf5dc9e7825e73"},{url:"/personal-portfolio/manifest.json",revision:"26f56ff4fa6fedc2e6ffef2a0a95fc09"},{url:"/personal-portfolio/maskable_icon.png",revision:"4498ce18a1ca8e85a0266a25fa438704"},{url:"/personal-portfolio/static/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png",revision:"ef7a02b69836dc8b6a732a54c4200dcb"},{url:"/personal-portfolio/static/GitHub-Mark/PNG/GitHub-Mark-32px.png",revision:"f87561b8bb354ef83b09a66e54f70e08"},{url:"/personal-portfolio/static/GitHub-Mark/PNG/GitHub-Mark-64px.png",revision:"438c17272c5f0e9f4a6da34d3e4bc5bd"},{url:"/personal-portfolio/static/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png",revision:"472739dfb5857b1f659f4c4c6b4568d0"},{url:"/personal-portfolio/static/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png",revision:"d56df49a807a9fd06eb1667a84d3810e"},{url:"/personal-portfolio/static/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png",revision:"eb94bb97c3410733ce017b184d314723"},{url:"/personal-portfolio/static/GitHub-Mark/Vector/GitHub-Mark.ai",revision:"d26611a8033adc15cdd0bb7837e6d5bb"},{url:"/personal-portfolio/static/GitHub-Mark/Vector/GitHub-Mark.eps",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/personal-portfolio/static/img/CssToAndFromReact-logo.svg",revision:"a54a2cf0dc354841fd118b7847b58f7e"},{url:"/personal-portfolio/static/img/bitbucket_logo.png",revision:"1bee749b92b37b0e7350a1e4897a60f0"},{url:"/personal-portfolio/static/img/codepen_logo.png",revision:"82d650e568f6609375c92930e16931fa"},{url:"/personal-portfolio/static/img/glitch_logo.png",revision:"19df5960983a35da6f0633260b719810"},{url:"/personal-portfolio/static/img/hackerrank_logo.png",revision:"9c369d20d7629ef2e0f5b300cfff2a9c"},{url:"/personal-portfolio/static/img/leetcode_logo.png",revision:"bf38b1494dc62715f9737213cedf0eb6"},{url:"/personal-portfolio/static/img/linkedin_logo.png",revision:"490c0a00662193d5d71e39bb715427b7"},{url:"/personal-portfolio/static/img/stackoverflow_logo.png",revision:"f57321d121f36315f44d5e65f90ee2ed"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const o=e.pathname;return!o.startsWith("/api/auth/")&&!!o.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
