var Me=e=>{throw TypeError(e)};var It=(e,r,t)=>r.has(e)||Me("Cannot "+t);var S=(e,r,t)=>(It(e,r,"read from private field"),t?t.call(e):r.get(e)),j=(e,r,t)=>r.has(e)?Me("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t);var Ut,Lt,ee,te,re,ne,ae,oe,se,ie,Pt,le,Ct,ce,jt;import{o as Je,a3 as I,g as O,j as T,aa as Ot}from"./index-client.Cqn5bTAA.js";import{w as _e}from"./index.BwtYkuQa.js";new URL("sveltekit-internal://");function Tt(e,r){return e==="/"||r==="ignore"?e:r==="never"?e.endsWith("/")?e.slice(0,-1):e:r==="always"&&!e.endsWith("/")?e+"/":e}function $t(e){return e.split("%25").map(decodeURI).join("%25")}function Nt(e){for(const r in e)e[r]=decodeURIComponent(e[r]);return e}function Re({href:e}){return e.split("#")[0]}function Dt(e,r,t,n=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return u=>(t(u),i[s](u));r();const l=Reflect.get(i,s);return typeof l=="function"?l.bind(i):l}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];n&&o.push("hash");for(const i of o)Object.defineProperty(a,i,{get(){return r(),e[i]},enumerable:!0,configurable:!0});return a}const Bt="/__data.json",Vt=".html__data.json";function qt(e){return e.endsWith(".html")?e.replace(/\.html$/,Vt):e.replace(/\/$/,"")+Bt}function Ft(...e){let r=5381;for(const t of e)if(typeof t=="string"){let n=t.length;for(;n;)r=r*33^t.charCodeAt(--n)}else if(ArrayBuffer.isView(t)){const n=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=n.length;for(;a;)r=r*33^n[--a]}else throw new TypeError("value must be a string or TypedArray");return(r>>>0).toString(36)}function Wt(e){const r=atob(e),t=new Uint8Array(r.length);for(let n=0;n<r.length;n++)t[n]=r.charCodeAt(n);return t.buffer}const Ge=window.fetch;window.fetch=(e,r)=>((e instanceof Request?e.method:(r==null?void 0:r.method)||"GET")!=="GET"&&J.delete(xe(e)),Ge(e,r));const J=new Map;function Mt(e,r){const t=xe(e,r),n=document.querySelector(t);if(n!=null&&n.textContent){let{body:a,...o}=JSON.parse(n.textContent);const i=n.getAttribute("data-ttl");return i&&J.set(t,{body:a,init:o,ttl:1e3*Number(i)}),n.getAttribute("data-b64")!==null&&(a=Wt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,r)}function Jt(e,r,t){if(J.size>0){const n=xe(e,t),a=J.get(n);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);J.delete(n)}}return window.fetch(r,t)}function xe(e,r){let t=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(r!=null&&r.headers||r!=null&&r.body){const n=[];r.headers&&n.push([...new Headers(r.headers)].join(",")),r.body&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&n.push(r.body),t+=`[data-hash="${Ft(...n)}"]`}return t}const Gt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ht(e){const r=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${zt(e).map(t=>{const n=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(t);if(n)return r.push({name:n[1],matcher:n[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const a=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(t);if(a)return r.push({name:a[1],matcher:a[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!t)return;const o=t.split(/\[(.+?)\](?!\])/);return"/"+o.map((i,s)=>{if(s%2){if(i.startsWith("x+"))return Ue(String.fromCharCode(parseInt(i.slice(2),16)));if(i.startsWith("u+"))return Ue(String.fromCharCode(...i.slice(2).split("-").map(d=>parseInt(d,16))));const l=Gt.exec(i),[,u,f,h,p]=l;return r.push({name:h,matcher:p,optional:!!u,rest:!!f,chained:f?s===1&&o[0]==="":!1}),f?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return Ue(i)}).join("")}).join("")}/?$`),params:r}}function Kt(e){return!/^\([^)]+\)$/.test(e)}function zt(e){return e.slice(1).split("/").filter(Kt)}function Xt(e,r,t){const n={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<r.length;s+=1){const l=r[s];let u=a[s-i];if(l.chained&&l.rest&&i&&(u=a.slice(s-i,s+1).filter(f=>f).join("/"),i=0),u===void 0){l.rest&&(n[l.name]="");continue}if(!l.matcher||t[l.matcher](u)){n[l.name]=u;const f=r[s+1],h=a[s+1];f&&!f.rest&&f.optional&&h&&l.chained&&(i=0),!f&&!h&&Object.keys(n).length===o.length&&(i=0);continue}if(l.optional&&l.chained){i++;continue}return}if(!i)return n}function Ue(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Yt({nodes:e,server_loads:r,dictionary:t,matchers:n}){const a=new Set(r);return Object.entries(t).map(([s,[l,u,f]])=>{const{pattern:h,params:p}=Ht(s),d={id:s,exec:y=>{const c=h.exec(y);if(c)return Xt(c,p,n)},errors:[1,...f||[]].map(y=>e[y]),layouts:[0,...u||[]].map(i),leaf:o(l)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const l=s<0;return l&&(s=~s),[l,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function He(e,r=JSON.parse){try{return r(sessionStorage[e])}catch{}}function Ke(e,r,t=JSON.stringify){const n=t(r);try{sessionStorage[e]=n}catch{}}const L=((Ut=globalThis.__sveltekit_1n5moqk)==null?void 0:Ut.base)??"/auth/v1",Qt=((Lt=globalThis.__sveltekit_1n5moqk)==null?void 0:Lt.assets)??L,Zt="1737619736654",ze="sveltekit:snapshot",Xe="sveltekit:scroll",Ye="sveltekit:states",er="sveltekit:pageurl",V="sveltekit:history",G="sveltekit:navigation",ue={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},H=location.origin;function Qe(e){if(e instanceof URL)return e;let r=document.baseURI;if(!r){const t=document.getElementsByTagName("base");r=t.length?t[0].href:document.URL}return new URL(e,r)}function Le(){return{x:pageXOffset,y:pageYOffset}}function q(e,r){return e.getAttribute(`data-sveltekit-${r}`)}const Ze={...ue,"":ue.hover};function et(e){let r=e.assignedSlot??e.parentNode;return(r==null?void 0:r.nodeType)===11&&(r=r.host),r}function tt(e,r){for(;e&&e!==r;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=et(e)}}function Pe(e,r,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,o=!n||!!a||de(n,r,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(n==null?void 0:n.origin)===H&&e.hasAttribute("download");return{url:n,external:o,target:a,download:i}}function fe(e){let r=null,t=null,n=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)n===null&&(n=q(s,"preload-code")),a===null&&(a=q(s,"preload-data")),r===null&&(r=q(s,"keepfocus")),t===null&&(t=q(s,"noscroll")),o===null&&(o=q(s,"reload")),i===null&&(i=q(s,"replacestate")),s=et(s);function l(u){switch(u){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ze[n??"off"],preload_data:Ze[a??"off"],keepfocus:l(r),noscroll:l(t),reload:l(o),replace_state:l(i)}}function rt(e){const r=_e(e);let t=!0;function n(){t=!0,r.update(i=>i)}function a(i){t=!1,r.set(i)}function o(i){let s;return r.subscribe(l=>{(s===void 0||t&&l!==s)&&i(s=l)})}return{notify:n,set:a,subscribe:o}}const nt={v:()=>{}};function tr(){const{set:e,subscribe:r}=_e(!1);let t;async function n(){clearTimeout(t);try{const a=await fetch(`${Qt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const o=(await a.json()).version!==Zt;return o&&(e(!0),nt.v(),clearTimeout(t)),o}catch{return!1}}return{subscribe:r,check:n}}function de(e,r,t){return e.origin!==H||!e.pathname.startsWith(r)?!0:t?!(e.pathname===r+"/"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===r):!1}function at(e){const r=nr(e),t=new ArrayBuffer(r.length),n=new DataView(t);for(let a=0;a<t.byteLength;a++)n.setUint8(a,r.charCodeAt(a));return t}const rr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function nr(e){e.length%4===0&&(e=e.replace(/==?$/,""));let r="",t=0,n=0;for(let a=0;a<e.length;a++)t<<=6,t|=rr.indexOf(e[a]),n+=6,n===24&&(r+=String.fromCharCode((t&16711680)>>16),r+=String.fromCharCode((t&65280)>>8),r+=String.fromCharCode(t&255),t=n=0);return n===12?(t>>=4,r+=String.fromCharCode(t)):n===18&&(t>>=2,r+=String.fromCharCode((t&65280)>>8),r+=String.fromCharCode(t&255)),r}const ar=-1,or=-2,sr=-3,ir=-4,lr=-5,cr=-6;function ur(e,r){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,n=Array(t.length);function a(o,i=!1){if(o===ar)return;if(o===sr)return NaN;if(o===ir)return 1/0;if(o===lr)return-1/0;if(o===cr)return-0;if(i)throw new Error("Invalid input");if(o in n)return n[o];const s=t[o];if(!s||typeof s!="object")n[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const l=s[0],u=r==null?void 0:r[l];if(u)return n[o]=u(a(s[1]));switch(l){case"Date":n[o]=new Date(s[1]);break;case"Set":const f=new Set;n[o]=f;for(let d=1;d<s.length;d+=1)f.add(a(s[d]));break;case"Map":const h=new Map;n[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":n[o]=new RegExp(s[1],s[2]);break;case"Object":n[o]=Object(s[1]);break;case"BigInt":n[o]=BigInt(s[1]);break;case"null":const p=Object.create(null);n[o]=p;for(let d=1;d<s.length;d+=2)p[s[d]]=a(s[d+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const d=globalThis[l],y=s[1],c=at(y),m=new d(c);n[o]=m;break}case"ArrayBuffer":{const d=s[1],y=at(d);n[o]=y;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(s.length);n[o]=l;for(let u=0;u<s.length;u+=1){const f=s[u];f!==or&&(l[u]=a(f))}}else{const l={};n[o]=l;for(const u in s){const f=s[u];l[u]=a(f)}}return n[o]}return a(0)}const ot=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ot];const fr=new Set([...ot]);[...fr];function dr(e){return e.filter(r=>r!=null)}class pe{constructor(r,t){this.status=r,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${r}`}}toString(){return JSON.stringify(this.body)}}class st{constructor(r,t){this.status=r,this.location=t}}class Ce extends Error{constructor(r,t,n){super(n),this.status=r,this.text=t}}const pr="x-sveltekit-invalidated",hr="x-sveltekit-trailing-slash";function he(e){return e instanceof pe||e instanceof Ce?e.status:500}function mr(e){return e instanceof Ce?e.text:"Internal Error"}let v,K,me;const gr=Je.toString().includes("$$")||/function \w+\(\) \{\}/.test(Je.toString());gr?(v={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},K={current:null},me={current:!1}):(v=new(Pt=class{constructor(){j(this,ee,I({}));j(this,te,I(null));j(this,re,I(null));j(this,ne,I({}));j(this,ae,I({id:null}));j(this,oe,I({}));j(this,se,I(-1));j(this,ie,I(new URL("https://example.com")))}get data(){return O(S(this,ee))}set data(e){T(S(this,ee),e)}get form(){return O(S(this,te))}set form(e){T(S(this,te),e)}get error(){return O(S(this,re))}set error(e){T(S(this,re),e)}get params(){return O(S(this,ne))}set params(e){T(S(this,ne),e)}get route(){return O(S(this,ae))}set route(e){T(S(this,ae),e)}get state(){return O(S(this,oe))}set state(e){T(S(this,oe),e)}get status(){return O(S(this,se))}set status(e){T(S(this,se),e)}get url(){return O(S(this,ie))}set url(e){T(S(this,ie),e)}},ee=new WeakMap,te=new WeakMap,re=new WeakMap,ne=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakMap,ie=new WeakMap,Pt),K=new(Ct=class{constructor(){j(this,le,I(null))}get current(){return O(S(this,le))}set current(e){T(S(this,le),e)}},le=new WeakMap,Ct),me=new(jt=class{constructor(){j(this,ce,I(!1))}get current(){return O(S(this,ce))}set current(e){T(S(this,ce),e)}},ce=new WeakMap,jt),nt.v=()=>me.current=!0);function yr(e){Object.assign(v,e)}const wr=new Set(["icon","shortcut icon","apple-touch-icon"]),B=He(Xe)??{},z=He(ze)??{},N={url:rt({}),page:rt({}),navigating:_e(null),updated:tr()};function je(e){B[e]=Le()}function vr(e,r){let t=e+1;for(;B[t];)delete B[t],t+=1;for(t=r+1;z[t];)delete z[t],t+=1}function F(e){return location.href=e.href,new Promise(()=>{})}async function it(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(L||"/");e&&await e.update()}}function lt(){}let ge,Ie,ye,D,Oe,E;const ct=[],we=[];let P=null;const ut=[],br=[];let W=[],w={branch:[],error:null,url:null},Te=!1,ve=!1,ft=!0,X=!1,Y=!1,dt=!1,$e=!1,Ne,U,C,be;const Q=new Set;async function kr(e,r,t){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),E=e,await((o=(a=e.hooks).init)==null?void 0:o.call(a)),ge=Yt(e),D=document.documentElement,Oe=r,Ie=e.nodes[0],ye=e.nodes[1],Ie(),ye(),U=(i=history.state)==null?void 0:i[V],C=(s=history.state)==null?void 0:s[G],U||(U=C=Date.now(),history.replaceState({...history.state,[V]:U,[G]:C},""));const n=B[U];n&&(history.scrollRestoration="manual",scrollTo(n.x,n.y)),t?await Ur(Oe,t):Et(location.href,{replaceState:!0}),xr()}function Sr(){ct.length=0,$e=!1}function pt(e){we.some(r=>r==null?void 0:r.snapshot)&&(z[e]=we.map(r=>{var t;return(t=r==null?void 0:r.snapshot)==null?void 0:t.capture()}))}function ht(e){var r;(r=z[e])==null||r.forEach((t,n)=>{var a,o;(o=(a=we[n])==null?void 0:a.snapshot)==null||o.restore(t)})}function mt(){je(U),Ke(Xe,B),pt(C),Ke(ze,z)}async function gt(e,r,t,n){return Z({type:"goto",url:Qe(e),keepfocus:r.keepFocus,noscroll:r.noScroll,replace_state:r.replaceState,state:r.state,redirect_count:t,nav_token:n,accept:()=>{r.invalidateAll&&($e=!0)}})}async function Ar(e){if(e.id!==(P==null?void 0:P.id)){const r={};Q.add(r),P={id:e.id,token:r,promise:bt({...e,preload:r}).then(t=>(Q.delete(r),t.type==="loaded"&&t.state.error&&(P=null),t))}}return P.promise}async function De(e){const r=ge.find(t=>t.exec(kt(e)));r&&await Promise.all([...r.layouts,r.leaf].map(t=>t==null?void 0:t[1]()))}function yt(e,r,t){var o;w=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),Object.assign(v,e.props.page),Ne=new E.root({target:r,props:{...e.props,stores:N,components:we},hydrate:t,sync:!1}),ht(C);const a={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};W.forEach(i=>i(a)),ve=!0}function ke({url:e,params:r,branch:t,status:n,error:a,route:o,form:i}){let s="never";if(L&&(e.pathname===L||e.pathname===L+"/"))s="always";else for(const p of t)(p==null?void 0:p.slash)!==void 0&&(s=p.slash);e.pathname=Tt(e.pathname,s),e.search=e.search;const l={type:"loaded",state:{url:e,params:r,branch:t,error:a,route:o},props:{constructors:dr(t).map(p=>p.node.component),page:v}};i!==void 0&&(l.props.form=i);let u={},f=!v,h=0;for(let p=0;p<Math.max(t.length,w.branch.length);p+=1){const d=t[p],y=w.branch[p];(d==null?void 0:d.data)!==(y==null?void 0:y.data)&&(f=!0),d&&(u={...u,...d.data},f&&(l.props[`data_${h}`]=u),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==a||i!==void 0&&i!==v.form||f)&&(l.props.page={error:a,params:r,route:{id:(o==null?void 0:o.id)??null},state:{},status:n,url:new URL(e),form:i??null,data:f?u:v.data}),l}async function Be({loader:e,parent:r,url:t,params:n,route:a,server_data_node:o}){var f,h,p;let i=null,s=!0;const l={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},u=await e();if((f=u.universal)!=null&&f.load){let d=function(...c){for(const m of c){const{href:A}=new URL(m,t);l.dependencies.add(A)}};const y={route:new Proxy(a,{get:(c,m)=>(s&&(l.route=!0),c[m])}),params:new Proxy(n,{get:(c,m)=>(s&&l.params.add(m),c[m])}),data:(o==null?void 0:o.data)??null,url:Dt(t,()=>{s&&(l.url=!0)},c=>{s&&l.search_params.add(c)},E.hash),async fetch(c,m){let A;c instanceof Request?(A=c.url,m={body:c.method==="GET"||c.method==="HEAD"?void 0:await c.blob(),cache:c.cache,credentials:c.credentials,headers:[...c.headers].length?c.headers:void 0,integrity:c.integrity,keepalive:c.keepalive,method:c.method,mode:c.mode,redirect:c.redirect,referrer:c.referrer,referrerPolicy:c.referrerPolicy,signal:c.signal,...m}):A=c;const R=new URL(A,t);return s&&d(R.href),R.origin===t.origin&&(A=R.href.slice(t.origin.length)),ve?Jt(A,R.href,m):Mt(A,m)},setHeaders:()=>{},depends:d,parent(){return s&&(l.parent=!0),r()},untrack(c){s=!1;try{return c()}finally{s=!0}}};i=await u.universal.load.call(null,y)??null}return{node:u,loader:e,server:o,universal:(h=u.universal)!=null&&h.load?{type:"data",data:i,uses:l}:null,data:i??(o==null?void 0:o.data)??null,slash:((p=u.universal)==null?void 0:p.trailingSlash)??(o==null?void 0:o.slash)}}function wt(e,r,t,n,a,o){if($e)return!0;if(!a)return!1;if(a.parent&&e||a.route&&r||a.url&&t)return!0;for(const i of a.search_params)if(n.has(i))return!0;for(const i of a.params)if(o[i]!==w.params[i])return!0;for(const i of a.dependencies)if(ct.some(s=>s(new URL(i))))return!0;return!1}function Ve(e,r){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?r??null:null}function Er(e,r){if(!e)return new Set(r.searchParams.keys());const t=new Set([...e.searchParams.keys(),...r.searchParams.keys()]);for(const n of t){const a=e.searchParams.getAll(n),o=r.searchParams.getAll(n);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(n)}return t}function vt({error:e,url:r,route:t,params:n}){return{type:"loaded",state:{error:e,url:r,route:t,params:n,branch:[]},props:{page:v,constructors:[]}}}async function bt({id:e,invalidating:r,url:t,params:n,route:a,preload:o}){if((P==null?void 0:P.id)===e)return Q.delete(P.token),P.promise;const{errors:i,layouts:s,leaf:l}=a,u=[...s,l];i.forEach(g=>g==null?void 0:g().catch(()=>{})),u.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let f=null;const h=w.url?e!==Ae(w.url):!1,p=w.route?a.id!==w.route.id:!1,d=Er(w.url,t);let y=!1;const c=u.map((g,k)=>{var $;const _=w.branch[k],x=!!(g!=null&&g[0])&&((_==null?void 0:_.loader)!==g[1]||wt(y,p,h,d,($=_.server)==null?void 0:$.uses,n));return x&&(y=!0),x});if(c.some(Boolean)){try{f=await _t(t,c)}catch(g){const k=await M(g,{url:t,params:n,route:{id:e}});return Q.has(o)?vt({error:k,url:t,params:n,route:a}):Se({status:he(g),error:k,url:t,route:a})}if(f.type==="redirect")return f}const m=f==null?void 0:f.nodes;let A=!1;const R=u.map(async(g,k)=>{var $;if(!g)return;const _=w.branch[k],x=m==null?void 0:m[k];if((!x||x.type==="skip")&&g[1]===(_==null?void 0:_.loader)&&!wt(A,p,h,d,($=_.universal)==null?void 0:$.uses,n))return _;if(A=!0,(x==null?void 0:x.type)==="error")throw x;return Be({loader:g[1],url:t,params:n,route:a,parent:async()=>{var We;const Fe={};for(let Ee=0;Ee<k;Ee+=1)Object.assign(Fe,(We=await R[Ee])==null?void 0:We.data);return Fe},server_data_node:Ve(x===void 0&&g[0]?{type:"skip"}:x??null,g[0]?_==null?void 0:_.server:void 0)})});for(const g of R)g.catch(()=>{});const b=[];for(let g=0;g<u.length;g+=1)if(u[g])try{b.push(await R[g])}catch(k){if(k instanceof st)return{type:"redirect",location:k.location};if(Q.has(o))return vt({error:await M(k,{params:n,url:t,route:{id:a.id}}),url:t,params:n,route:a});let _=he(k),x;if(m!=null&&m.includes(k))_=k.status??_,x=k.error;else if(k instanceof pe)x=k.body;else{if(await N.updated.check())return await it(),await F(t);x=await M(k,{params:n,url:t,route:{id:a.id}})}const $=await _r(g,b,i);return $?ke({url:t,params:n,branch:b.slice(0,$.idx).concat($.node),status:_,error:x,route:a}):await At(t,{id:a.id},x,_)}else b.push(void 0);return ke({url:t,params:n,branch:b,status:200,error:null,route:a,form:r?void 0:null})}async function _r(e,r,t){for(;e--;)if(t[e]){let n=e;for(;!r[n];)n-=1;try{return{idx:n+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function Se({status:e,error:r,url:t,route:n}){const a={};let o=null;if(E.server_loads[0]===0)try{const l=await _t(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==H||t.pathname!==location.pathname||Te)&&await F(t)}const i=await Be({loader:Ie,url:t,params:a,route:n,parent:()=>Promise.resolve({}),server_data_node:Ve(o)}),s={node:await ye(),loader:ye,universal:null,server:null,data:null};return ke({url:t,params:a,branch:[i,s],status:e,error:r,route:null})}function qe(e,r){if(!e||de(e,L,E.hash))return;let t;try{if(t=E.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const a=new URL(e);E.hash?a.hash=t:a.pathname=t,t=a}}catch{return}const n=kt(t);for(const a of ge){const o=a.exec(n);if(o)return{id:Ae(e),invalidating:r,route:a,params:Nt(o),url:e}}}function kt(e){return $t(E.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(L.length))||"/"}function Ae(e){return(E.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function St({url:e,type:r,intent:t,delta:n}){let a=!1;const o=xt(w,t,e,r);n!==void 0&&(o.navigation.delta=n);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return X||ut.forEach(s=>s(i)),a?null:o}async function Z({type:e,url:r,popped:t,keepfocus:n,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:l={},accept:u=lt,block:f=lt}){const h=qe(r,!1),p=St({url:r,type:e,delta:t==null?void 0:t.delta,intent:h});if(!p){f();return}const d=U,y=C;u(),X=!0,ve&&N.navigating.set(K.current=p.navigation),be=l;let c=h&&await bt(h);if(!c){if(de(r,L,E.hash))return await F(r);c=await At(r,{id:null},await M(new Ce(404,"Not Found",`Not found: ${r.pathname}`),{url:r,params:{},route:{id:null}}),404)}if(r=(h==null?void 0:h.url)||r,be!==l)return p.reject(new Error("navigation aborted")),!1;if(c.type==="redirect")if(s>=20)c=await Se({status:500,error:await M(new Error("Redirect loop"),{url:r,params:{},route:{id:null}}),url:r,route:{id:null}});else return gt(new URL(c.location,r).href,{},s+1,l),!1;else c.props.page.status>=400&&await N.updated.check()&&(await it(),await F(r));if(Sr(),je(d),pt(y),c.props.page.url.pathname!==r.pathname&&(r.pathname=c.props.page.url.pathname),i=t?t.state:i,!t){const b=o?0:1,g={[V]:U+=b,[G]:C+=b,[Ye]:i};(o?history.replaceState:history.pushState).call(history,g,"",r),o||vr(U,C)}if(P=null,c.props.page.state=i,ve){w=c.state,c.props.page&&(c.props.page.url=r);const b=(await Promise.all(br.map(g=>g(p.navigation)))).filter(g=>typeof g=="function");if(b.length>0){let g=function(){W=W.filter(k=>!b.includes(k))};b.push(g),W.push(...b)}Ne.$set(c.props),yr(c.props.page),dt=!0}else yt(c,Oe,!1);const{activeElement:m}=document;await Ot();const A=t?t.scroll:a?Le():null;if(ft){const b=r.hash&&document.getElementById(decodeURIComponent(E.hash?r.hash.split("#")[2]??"":r.hash.slice(1)));A?scrollTo(A.x,A.y):b?b.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==m&&document.activeElement!==document.body;!n&&!R&&Lr(),ft=!0,c.props.page&&Object.assign(v,c.props.page),X=!1,e==="popstate"&&ht(C),p.fulfil(void 0),W.forEach(b=>b(p.navigation)),N.navigating.set(K.current=null)}async function At(e,r,t,n){return e.origin===H&&e.pathname===location.pathname&&!Te?await Se({status:n,error:t,url:e,route:r}):await F(e)}function Rr(){let e;D.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{n(i,2)},20)});function r(o){o.defaultPrevented||n(o.composedPath()[0],1)}D.addEventListener("mousedown",r),D.addEventListener("touchstart",r,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(De(new URL(i.target.href)),t.unobserve(i.target))},{threshold:0});function n(o,i){const s=tt(o,D);if(!s)return;const{url:l,external:u,download:f}=Pe(s,L,E.hash);if(u||f)return;const h=fe(s),p=l&&Ae(w.url)===Ae(l);if(!h.reload&&!p)if(i<=h.preload_data){const d=qe(l,!1);d&&Ar(d)}else i<=h.preload_code&&De(l)}function a(){t.disconnect();for(const o of D.querySelectorAll("a")){const{url:i,external:s,download:l}=Pe(o,L,E.hash);if(s||l)continue;const u=fe(o);u.reload||(u.preload_code===ue.viewport&&t.observe(o),u.preload_code===ue.eager&&De(i))}}W.push(a),a()}function M(e,r){if(e instanceof pe)return e.body;const t=he(e),n=mr(e);return E.hooks.handleError({error:e,event:r,status:t,message:n})??{message:n}}function Et(e,r={}){return e=new URL(Qe(e)),e.origin!==H?Promise.reject(new Error("goto: invalid URL")):gt(e,r,0)}function xr(){var r;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(mt(),!X){const a=xt(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{n=!0,a.reject(new Error("navigation cancelled"))}};ut.forEach(i=>i(o))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&mt()}),(r=navigator.connection)!=null&&r.saveData||Rr(),D.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=tt(t.composedPath()[0],D);if(!n)return;const{url:a,external:o,target:i,download:s}=Pe(n,L,E.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const l=fe(n);if(!(n instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[u,f]=(E.hash?a.hash.replace(/^#/,""):a.href).split("#"),h=u===Re(location);if(o||l.reload&&(!h||!f)){St({url:a,type:"link"})?X=!0:t.preventDefault();return}if(f!==void 0&&h){const[,p]=w.url.href.split("#");if(p===f){if(t.preventDefault(),f===""||f==="top"&&n.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const d=n.ownerDocument.getElementById(decodeURIComponent(f));d&&(d.scrollIntoView(),d.focus())}return}if(Y=!0,je(U),e(a),!l.replace_state)return;Y=!1}t.preventDefault(),await new Promise(p=>{requestAnimationFrame(()=>{setTimeout(p,0)}),setTimeout(p,100)}),Z({type:"link",url:a,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??a.href===location.href})}),D.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formTarget)||n.target)==="_blank"||((a==null?void 0:a.formMethod)||n.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||n.action);if(de(o,L,!1))return;const i=t.target,s=fe(i);if(s.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(i),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(l).toString(),Z({type:"form",url:o,keepfocus:s.keepfocus,noscroll:s.noscroll,replace_state:s.replace_state??o.href===location.href})}),addEventListener("popstate",async t=>{var n;if((n=t.state)!=null&&n[V]){const a=t.state[V];if(be={},a===U)return;const o=B[a],i=t.state[Ye]??{},s=new URL(t.state[er]??location.href),l=t.state[G],u=Re(location)===Re(w.url);if(l===C&&(dt||u)){e(s),B[U]=Le(),o&&scrollTo(o.x,o.y),i!==v.state&&(v.state=i,Ne.$set({page:v})),U=a;return}const f=a-U;await Z({type:"popstate",url:s,popped:{state:i,scroll:o,delta:f},accept:()=>{U=a,C=l},block:()=>{history.go(-f)},nav_token:be})}else if(!Y){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{Y?(Y=!1,history.replaceState({...history.state,[V]:++U,[G]:C},"",location.href)):E.hash&&w.url.hash===location.hash&&Z({type:"goto",url:w.url})});for(const t of document.querySelectorAll("link"))wr.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&N.navigating.set(K.current=null)});function e(t){w.url=v.url=t,N.page.set({data:v.data,error:v.error,form:v.form,params:v.params,route:v.route,state:v.state,status:v.status,url:t}),N.page.notify()}}async function Ur(e,{status:r=200,error:t,node_ids:n,params:a,route:o,data:i,form:s}){Te=!0;const l=new URL(location.href);({params:a={},route:o={id:null}}=qe(l,!1)||{});let u,f=!0;try{const h=n.map(async(y,c)=>{const m=i[c];return m!=null&&m.uses&&(m.uses=Rt(m.uses)),Be({loader:E.nodes[y],url:l,params:a,route:o,parent:async()=>{const A={};for(let R=0;R<c;R+=1)Object.assign(A,(await h[R]).data);return A},server_data_node:Ve(m)})}),p=await Promise.all(h),d=ge.find(({id:y})=>y===o.id);if(d){const y=d.layouts;for(let c=0;c<y.length;c++)y[c]||p.splice(c,0,void 0)}u=ke({url:l,params:a,branch:p,status:r,error:t,form:s,route:d??null})}catch(h){if(h instanceof st){await F(new URL(h.location,location.href));return}u=await Se({status:he(h),error:await M(h,{url:l,params:a,route:o}),url:l,route:o}),e.textContent="",f=!1}u.props.page&&(u.props.page.state={}),yt(u,e,f)}async function _t(e,r){var a;const t=new URL(e);t.pathname=qt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(hr,"1"),t.searchParams.append(pr,r.map(o=>o?"1":"0").join(""));const n=await Ge(t.href);if(!n.ok){let o;throw(a=n.headers.get("content-type"))!=null&&a.includes("application/json")?o=await n.json():n.status===404?o="Not Found":n.status===500&&(o="Internal Error"),new pe(n.status,o)}return new Promise(async o=>{var h;const i=new Map,s=n.body.getReader(),l=new TextDecoder;function u(p){return ur(p,{...E.decoders,Promise:d=>new Promise((y,c)=>{i.set(d,{fulfil:y,reject:c})})})}let f="";for(;;){const{done:p,value:d}=await s.read();if(p&&!f)break;for(f+=!d&&f?`
`:l.decode(d,{stream:!0});;){const y=f.indexOf(`
`);if(y===-1)break;const c=JSON.parse(f.slice(0,y));if(f=f.slice(y+1),c.type==="redirect")return o(c);if(c.type==="data")(h=c.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=Rt(m.uses),m.data=u(m.data))}),o(c);else if(c.type==="chunk"){const{id:m,data:A,error:R}=c,b=i.get(m);i.delete(m),R?b.reject(u(R)):b.fulfil(u(A))}}}})}function Rt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Lr(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const r=document.body,t=r.getAttribute("tabindex");r.tabIndex=-1,r.focus({preventScroll:!0,focusVisible:!1}),t!==null?r.setAttribute("tabindex",t):r.removeAttribute("tabindex");const n=getSelection();if(n&&n.type!=="None"){const a=[];for(let o=0;o<n.rangeCount;o+=1)a.push(n.getRangeAt(o));setTimeout(()=>{if(n.rangeCount===a.length){for(let o=0;o<n.rangeCount;o+=1){const i=a[o],s=n.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}n.removeAllRanges()}})}}}function xt(e,r,t,n){var s,l;let a,o;const i=new Promise((u,f)=>{a=u,o=f});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((s=e.route)==null?void 0:s.id)??null},url:e.url},to:t&&{params:(r==null?void 0:r.params)??null,route:{id:((l=r==null?void 0:r.route)==null?void 0:l.id)??null},url:t},willUnload:!r,type:n,complete:i},fulfil:a,reject:o}}export{kr as a,Et as g,v as p,N as s,me as u};
