"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[125],{83125:function(e,t,r){r.d(t,{convertExerciseItemsToSubPagesMetaData:function(){return S}});let n=e=>e.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g,(e,t)=>/\s+/.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()),a=new Map,s=e=>(a.has(e)||a.set(e,n(e)),a.get(e));var o,l,c,i=r(85893),d=r(67294),u=r(21596),h=r(93486),p=r(98456),m=r(36165),w=r.n(m),v=r(77503),b=r.n(v);class f{static newParser(e){return new f(b().load(e))}parseContent(e){return e.extract(this.$)}constructor(e){this.$=e}}(l||(l={})).screenshot="screenshot",(o=c||(c={})).pen="code",o.full="full",o.details="details";let x={key:"credentials",extract:e=>{let t=e("a")[0],r=new URL(t.attribs.href).pathname.split("/");return{user:r[1],hash:r[3]}}},E="HeyPortfolio--Exercise--CodepenEmbedScript",C=()=>{let e=document.body,[t,r]=(0,d.useState)(!1);return(0,d.useEffect)(()=>(new m.CodepenEmbedScriptTagBuilder().setAsync(!0).withOnLoadHandler(()=>{r(!0)}).withOnErrorHandler(()=>console.error("Failed to load the pen")).appendTo(e,()=>{let e=document.createElement("script");return e.id=E,e}),()=>{var t;null===(t=e.querySelector("#".concat(E)))||void 0===t||t.remove()}),[e]),{loaded:t}};var g=r(65680);let P=(0,h.Z)(e=>({embeddedContainer:{marginTop:e.spacing(4)}}),{name:"MuiMyEmbeddedPenPortfolio"}),j=()=>(0,i.jsx)(p.Z,{});var k=e=>{let{title:t,content:r}=e,n=P(),{loaded:a}=C(),{user:s,hash:o}=f.newParser(r).parseContent(x);return(0,i.jsx)(g.Z,{id:"codePenExercise",hasDivider:!0,title:t,children:(0,i.jsx)("div",{className:n.embeddedContainer,children:(0,i.jsx)(w(),{user:s,hash:o,title:t,height:.75*window.screen.availHeight,loader:j,defaultTab:"result",shouldLoadScript:!1,overrideAsLoaded:a})})})};let y=(e,t)=>{let{content:r="",link:n="",title:a=""}=e;return{name:a,url:"/".concat(s(a)),component:(0,i.jsx)(k,{content:r,link:n,title:a},"".concat(t,"_").concat(a)),icon:(0,i.jsx)(u.Z,{})}},S=e=>e.reduce((e,t,r)=>{var n;return e[s(null!==(n=t.title)&&void 0!==n?n:"")]=y(t,r),e},{})}}]);