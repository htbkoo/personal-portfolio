if(!self.define){let e,o={};const a=(a,i)=>(a=new URL(a+".js",i).href,o[a]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=o,document.head.appendChild(e)}else e=a,importScripts(a),o()})).then((()=>{let e=o[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(o[n])return;let r={};const t=e=>a(e,n),c={module:{uri:n},exports:r,require:t};o[n]=Promise.all(i.map((e=>c[e]||t(e)))).then((e=>(s(...e),r)))}}define(["./workbox-5e12853a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/personal-portfolio",revision:"OflPBlBZv4Menxwvc3QpQ"},{url:"/personal-portfolio//_next/static/OflPBlBZv4Menxwvc3QpQ/_buildManifest.js",revision:"90fc40b005931d248d00698bd2d65bfc"},{url:"/personal-portfolio//_next/static/OflPBlBZv4Menxwvc3QpQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/personal-portfolio//_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/personal-portfolio//_next/static/chunks/main-1dd82a1dacec667c.js",revision:"1dd82a1dacec667c"},{url:"/personal-portfolio//_next/static/chunks/pages/_app-2cdb615ac7e56d72.js",revision:"2cdb615ac7e56d72"},{url:"/personal-portfolio//_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/personal-portfolio//_next/static/chunks/pages/contact-b3168f64fd22d1db.js",revision:"b3168f64fd22d1db"},{url:"/personal-portfolio//_next/static/chunks/pages/index-0ac2d836cc08cde5.js",revision:"0ac2d836cc08cde5"},{url:"/personal-portfolio//_next/static/chunks/pages/portfolio-ae82c343cf63fa63.js",revision:"ae82c343cf63fa63"},{url:"/personal-portfolio//_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/personal-portfolio//_next/static/chunks/webpack-9eb07ee72726351f.js",revision:"9eb07ee72726351f"},{url:"/personal-portfolio//_next/static/css/68ec12ca603c5459.css",revision:"68ec12ca603c5459"},{url:"/personal-portfolio//_next/static/media/roboto-all-400-normal.22c8c36a.woff",revision:"22c8c36a"},{url:"/personal-portfolio//_next/static/media/roboto-cyrillic-400-normal.ba1944ac.woff2",revision:"ba1944ac"},{url:"/personal-portfolio//_next/static/media/roboto-cyrillic-ext-400-normal.7ea3b60d.woff2",revision:"7ea3b60d"},{url:"/personal-portfolio//_next/static/media/roboto-greek-400-normal.7026b7dc.woff2",revision:"7026b7dc"},{url:"/personal-portfolio//_next/static/media/roboto-greek-ext-400-normal.4e61a9f1.woff2",revision:"4e61a9f1"},{url:"/personal-portfolio//_next/static/media/roboto-latin-400-normal.7b8d7718.woff2",revision:"7b8d7718"},{url:"/personal-portfolio//_next/static/media/roboto-latin-ext-400-normal.cf3d7789.woff2",revision:"cf3d7789"},{url:"/personal-portfolio//_next/static/media/roboto-vietnamese-400-normal.0f9be457.woff2",revision:"0f9be457"},{url:"/personal-portfolio/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png",revision:"ef7a02b69836dc8b6a732a54c4200dcb"},{url:"/personal-portfolio/GitHub-Mark/PNG/GitHub-Mark-32px.png",revision:"f87561b8bb354ef83b09a66e54f70e08"},{url:"/personal-portfolio/GitHub-Mark/PNG/GitHub-Mark-64px.png",revision:"438c17272c5f0e9f4a6da34d3e4bc5bd"},{url:"/personal-portfolio/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png",revision:"472739dfb5857b1f659f4c4c6b4568d0"},{url:"/personal-portfolio/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png",revision:"d56df49a807a9fd06eb1667a84d3810e"},{url:"/personal-portfolio/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png",revision:"eb94bb97c3410733ce017b184d314723"},{url:"/personal-portfolio/GitHub-Mark/Vector/GitHub-Mark.ai",revision:"d26611a8033adc15cdd0bb7837e6d5bb"},{url:"/personal-portfolio/GitHub-Mark/Vector/GitHub-Mark.eps",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/personal-portfolio/background-light.jpg",revision:"123c88fca76f89f0e4a713c9aa7f41ae"},{url:"/personal-portfolio/background.jpg",revision:"5f88538afbfd26e58b54920c0fb68043"},{url:"/personal-portfolio/favicon.ico",revision:"c211432da1f0b2d6f167ea0506307db3"},{url:"/personal-portfolio/icons-192.png",revision:"0fd7aaea36c5084348f0510ba7a64669"},{url:"/personal-portfolio/icons-512.png",revision:"292b810f5a960a2603bf5dc9e7825e73"},{url:"/personal-portfolio/manifest.json",revision:"26f56ff4fa6fedc2e6ffef2a0a95fc09"},{url:"/personal-portfolio/maskable_icon.png",revision:"4498ce18a1ca8e85a0266a25fa438704"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const o=e.pathname;return!o.startsWith("/api/auth/")&&!!o.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
