var Ge=e=>{throw TypeError(e)};var Tt=(e,r,t)=>r.has(e)||Ge("Cannot "+t);var S=(e,r,t)=>(Tt(e,r,"read from private field"),t?t.call(e):r.get(e)),j=(e,r,t)=>r.has(e)?Ge("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t);var Pt,Ct,te,re,ne,ae,oe,se,ie,le,jt,ce,It,ue,Ot;import{a4 as Re,d as $t,ap as ze,o as I,l as O,m as T,aM as Nt}from"./index-client.Ds4XgiuL.js";new URL("sveltekit-internal://");function Dt(e,r){return e==="/"||r==="ignore"?e:r==="never"?e.endsWith("/")?e.slice(0,-1):e:r==="always"&&!e.endsWith("/")?e+"/":e}function Bt(e){return e.split("%25").map(decodeURI).join("%25")}function Vt(e){for(const r in e)e[r]=decodeURIComponent(e[r]);return e}function xe({href:e}){return e.split("#")[0]}function Ft(e,r,t,n=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return c=>(t(c),i[s](c));r();const l=Reflect.get(i,s);return typeof l=="function"?l.bind(i):l}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];n&&o.push("hash");for(const i of o)Object.defineProperty(a,i,{get(){return r(),e[i]},enumerable:!0,configurable:!0});return a}const qt="/__data.json",Mt=".html__data.json";function Wt(e){return e.endsWith(".html")?e.replace(/\.html$/,Mt):e.replace(/\/$/,"")+qt}function Jt(...e){let r=5381;for(const t of e)if(typeof t=="string"){let n=t.length;for(;n;)r=r*33^t.charCodeAt(--n)}else if(ArrayBuffer.isView(t)){const n=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=n.length;for(;a;)r=r*33^n[--a]}else throw new TypeError("value must be a string or TypedArray");return(r>>>0).toString(36)}function Gt(e){const r=atob(e),t=new Uint8Array(r.length);for(let n=0;n<r.length;n++)t[n]=r.charCodeAt(n);return t.buffer}const He=window.fetch;window.fetch=(e,r)=>((e instanceof Request?e.method:(r==null?void 0:r.method)||"GET")!=="GET"&&G.delete(Ue(e)),He(e,r));const G=new Map;function zt(e,r){const t=Ue(e,r),n=document.querySelector(t);if(n!=null&&n.textContent){let{body:a,...o}=JSON.parse(n.textContent);const i=n.getAttribute("data-ttl");return i&&G.set(t,{body:a,init:o,ttl:1e3*Number(i)}),n.getAttribute("data-b64")!==null&&(a=Gt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,r)}function Ht(e,r,t){if(G.size>0){const n=Ue(e,t),a=G.get(n);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);G.delete(n)}}return window.fetch(r,t)}function Ue(e,r){let t=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(r!=null&&r.headers||r!=null&&r.body){const n=[];r.headers&&n.push([...new Headers(r.headers)].join(",")),r.body&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&n.push(r.body),t+=`[data-hash="${Jt(...n)}"]`}return t}const Kt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Xt(e){const r=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Qt(e).map(t=>{const n=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(t);if(n)return r.push({name:n[1],matcher:n[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const a=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(t);if(a)return r.push({name:a[1],matcher:a[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!t)return;const o=t.split(/\[(.+?)\](?!\])/);return"/"+o.map((i,s)=>{if(s%2){if(i.startsWith("x+"))return Le(String.fromCharCode(parseInt(i.slice(2),16)));if(i.startsWith("u+"))return Le(String.fromCharCode(...i.slice(2).split("-").map(d=>parseInt(d,16))));const l=Kt.exec(i),[,c,f,h,p]=l;return r.push({name:h,matcher:p,optional:!!c,rest:!!f,chained:f?s===1&&o[0]==="":!1}),f?"(.*?)":c?"([^/]*)?":"([^/]+?)"}return Le(i)}).join("")}).join("")}/?$`),params:r}}function Yt(e){return!/^\([^)]+\)$/.test(e)}function Qt(e){return e.slice(1).split("/").filter(Yt)}function Zt(e,r,t){const n={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<r.length;s+=1){const l=r[s];let c=a[s-i];if(l.chained&&l.rest&&i&&(c=a.slice(s-i,s+1).filter(f=>f).join("/"),i=0),c===void 0){l.rest&&(n[l.name]="");continue}if(!l.matcher||t[l.matcher](c)){n[l.name]=c;const f=r[s+1],h=a[s+1];f&&!f.rest&&f.optional&&h&&l.chained&&(i=0),!f&&!h&&Object.keys(n).length===o.length&&(i=0);continue}if(l.optional&&l.chained){i++;continue}return}if(!i)return n}function Le(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function er({nodes:e,server_loads:r,dictionary:t,matchers:n}){const a=new Set(r);return Object.entries(t).map(([s,[l,c,f]])=>{const{pattern:h,params:p}=Xt(s),d={id:s,exec:y=>{const u=h.exec(y);if(u)return Zt(u,p,n)},errors:[1,...f||[]].map(y=>e[y]),layouts:[0,...c||[]].map(i),leaf:o(l)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const l=s<0;return l&&(s=~s),[l,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function Ke(e,r=JSON.parse){try{return r(sessionStorage[e])}catch{}}function Xe(e,r,t=JSON.stringify){const n=t(r);try{sessionStorage[e]=n}catch{}}const V=[];function Pe(e,r=Re){let t=null;const n=new Set;function a(s){if($t(e,s)&&(e=s,t)){const l=!V.length;for(const c of n)c[1](),V.push(c,e);if(l){for(let c=0;c<V.length;c+=2)V[c][0](V[c+1]);V.length=0}}}function o(s){a(s(e))}function i(s,l=Re){const c=[s,l];return n.add(c),n.size===1&&(t=r(a,o)||Re),s(e),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:a,update:o,subscribe:i}}const L=((Pt=globalThis.__sveltekit_1hnphw3)==null?void 0:Pt.base)??"/auth/v1",tr=((Ct=globalThis.__sveltekit_1hnphw3)==null?void 0:Ct.assets)??L,rr="1740654192854",Ye="sveltekit:snapshot",Qe="sveltekit:scroll",Ze="sveltekit:states",nr="sveltekit:pageurl",F="sveltekit:history",z="sveltekit:navigation",fe={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},H=location.origin;function et(e){if(e instanceof URL)return e;let r=document.baseURI;if(!r){const t=document.getElementsByTagName("base");r=t.length?t[0].href:document.URL}return new URL(e,r)}function Ce(){return{x:pageXOffset,y:pageYOffset}}function q(e,r){return e.getAttribute(`data-sveltekit-${r}`)}const tt={...fe,"":fe.hover};function rt(e){let r=e.assignedSlot??e.parentNode;return(r==null?void 0:r.nodeType)===11&&(r=r.host),r}function nt(e,r){for(;e&&e!==r;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=rt(e)}}function je(e,r,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,o=!n||!!a||pe(n,r,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(n==null?void 0:n.origin)===H&&e.hasAttribute("download");return{url:n,external:o,target:a,download:i}}function de(e){let r=null,t=null,n=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)n===null&&(n=q(s,"preload-code")),a===null&&(a=q(s,"preload-data")),r===null&&(r=q(s,"keepfocus")),t===null&&(t=q(s,"noscroll")),o===null&&(o=q(s,"reload")),i===null&&(i=q(s,"replacestate")),s=rt(s);function l(c){switch(c){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:tt[n??"off"],preload_data:tt[a??"off"],keepfocus:l(r),noscroll:l(t),reload:l(o),replace_state:l(i)}}function at(e){const r=Pe(e);let t=!0;function n(){t=!0,r.update(i=>i)}function a(i){t=!1,r.set(i)}function o(i){let s;return r.subscribe(l=>{(s===void 0||t&&l!==s)&&i(s=l)})}return{notify:n,set:a,subscribe:o}}const ot={v:()=>{}};function ar(){const{set:e,subscribe:r}=Pe(!1);let t;async function n(){clearTimeout(t);try{const a=await fetch(`${tr}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const o=(await a.json()).version!==rr;return o&&(e(!0),ot.v(),clearTimeout(t)),o}catch{return!1}}return{subscribe:r,check:n}}function pe(e,r,t){return e.origin!==H||!e.pathname.startsWith(r)?!0:t?!(e.pathname===r+"/"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===r):!1}function st(e){const r=sr(e),t=new ArrayBuffer(r.length),n=new DataView(t);for(let a=0;a<t.byteLength;a++)n.setUint8(a,r.charCodeAt(a));return t}const or="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function sr(e){e.length%4===0&&(e=e.replace(/==?$/,""));let r="",t=0,n=0;for(let a=0;a<e.length;a++)t<<=6,t|=or.indexOf(e[a]),n+=6,n===24&&(r+=String.fromCharCode((t&16711680)>>16),r+=String.fromCharCode((t&65280)>>8),r+=String.fromCharCode(t&255),t=n=0);return n===12?(t>>=4,r+=String.fromCharCode(t)):n===18&&(t>>=2,r+=String.fromCharCode((t&65280)>>8),r+=String.fromCharCode(t&255)),r}const ir=-1,lr=-2,cr=-3,ur=-4,fr=-5,dr=-6;function pr(e,r){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,n=Array(t.length);function a(o,i=!1){if(o===ir)return;if(o===cr)return NaN;if(o===ur)return 1/0;if(o===fr)return-1/0;if(o===dr)return-0;if(i)throw new Error("Invalid input");if(o in n)return n[o];const s=t[o];if(!s||typeof s!="object")n[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const l=s[0],c=r==null?void 0:r[l];if(c)return n[o]=c(a(s[1]));switch(l){case"Date":n[o]=new Date(s[1]);break;case"Set":const f=new Set;n[o]=f;for(let d=1;d<s.length;d+=1)f.add(a(s[d]));break;case"Map":const h=new Map;n[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":n[o]=new RegExp(s[1],s[2]);break;case"Object":n[o]=Object(s[1]);break;case"BigInt":n[o]=BigInt(s[1]);break;case"null":const p=Object.create(null);n[o]=p;for(let d=1;d<s.length;d+=2)p[s[d]]=a(s[d+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const d=globalThis[l],y=s[1],u=st(y),m=new d(u);n[o]=m;break}case"ArrayBuffer":{const d=s[1],y=st(d);n[o]=y;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(s.length);n[o]=l;for(let c=0;c<s.length;c+=1){const f=s[c];f!==lr&&(l[c]=a(f))}}else{const l={};n[o]=l;for(const c in s){const f=s[c];l[c]=a(f)}}return n[o]}return a(0)}const it=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...it];const hr=new Set([...it]);[...hr];function mr(e){return e.filter(r=>r!=null)}class he{constructor(r,t){this.status=r,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${r}`}}toString(){return JSON.stringify(this.body)}}class lt{constructor(r,t){this.status=r,this.location=t}}class Ie extends Error{constructor(r,t,n){super(n),this.status=r,this.text=t}}const gr="x-sveltekit-invalidated",yr="x-sveltekit-trailing-slash";function me(e){return e instanceof he||e instanceof Ie?e.status:500}function wr(e){return e instanceof Ie?e.text:"Internal Error"}let v,K,ge;const vr=ze.toString().includes("$$")||/function \w+\(\) \{\}/.test(ze.toString());vr?(v={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},K={current:null},ge={current:!1}):(v=new(jt=class{constructor(){j(this,te,I({}));j(this,re,I(null));j(this,ne,I(null));j(this,ae,I({}));j(this,oe,I({id:null}));j(this,se,I({}));j(this,ie,I(-1));j(this,le,I(new URL("https://example.com")))}get data(){return O(S(this,te))}set data(e){T(S(this,te),e)}get form(){return O(S(this,re))}set form(e){T(S(this,re),e)}get error(){return O(S(this,ne))}set error(e){T(S(this,ne),e)}get params(){return O(S(this,ae))}set params(e){T(S(this,ae),e)}get route(){return O(S(this,oe))}set route(e){T(S(this,oe),e)}get state(){return O(S(this,se))}set state(e){T(S(this,se),e)}get status(){return O(S(this,ie))}set status(e){T(S(this,ie),e)}get url(){return O(S(this,le))}set url(e){T(S(this,le),e)}},te=new WeakMap,re=new WeakMap,ne=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakMap,ie=new WeakMap,le=new WeakMap,jt),K=new(It=class{constructor(){j(this,ce,I(null))}get current(){return O(S(this,ce))}set current(e){T(S(this,ce),e)}},ce=new WeakMap,It),ge=new(Ot=class{constructor(){j(this,ue,I(!1))}get current(){return O(S(this,ue))}set current(e){T(S(this,ue),e)}},ue=new WeakMap,Ot),ot.v=()=>ge.current=!0);function br(e){Object.assign(v,e)}const kr=new Set(["icon","shortcut icon","apple-touch-icon"]),B=Ke(Qe)??{},X=Ke(Ye)??{},N={url:at({}),page:at({}),navigating:Pe(null),updated:ar()};function Oe(e){B[e]=Ce()}function Sr(e,r){let t=e+1;for(;B[t];)delete B[t],t+=1;for(t=r+1;X[t];)delete X[t],t+=1}function M(e){return location.href=e.href,new Promise(()=>{})}async function ct(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(L||"/");e&&await e.update()}}function ut(){}let ye,Te,we,D,$e,E;const ft=[],ve=[];let P=null;const dt=[],Ar=[];let W=[],w={branch:[],error:null,url:null},Ne=!1,be=!1,pt=!0,Y=!1,Q=!1,ht=!1,De=!1,Be,U,C,ke;const Z=new Set;async function Er(e,r,t){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),E=e,await((o=(a=e.hooks).init)==null?void 0:o.call(a)),ye=er(e),D=document.documentElement,$e=r,Te=e.nodes[0],we=e.nodes[1],Te(),we(),U=(i=history.state)==null?void 0:i[F],C=(s=history.state)==null?void 0:s[z],U||(U=C=Date.now(),history.replaceState({...history.state,[F]:U,[z]:C},""));const n=B[U];n&&(history.scrollRestoration="manual",scrollTo(n.x,n.y)),t?await Cr($e,t):Rt(location.href,{replaceState:!0}),Pr()}function _r(){ft.length=0,De=!1}function mt(e){ve.some(r=>r==null?void 0:r.snapshot)&&(X[e]=ve.map(r=>{var t;return(t=r==null?void 0:r.snapshot)==null?void 0:t.capture()}))}function gt(e){var r;(r=X[e])==null||r.forEach((t,n)=>{var a,o;(o=(a=ve[n])==null?void 0:a.snapshot)==null||o.restore(t)})}function yt(){Oe(U),Xe(Qe,B),mt(C),Xe(Ye,X)}async function wt(e,r,t,n){return ee({type:"goto",url:et(e),keepfocus:r.keepFocus,noscroll:r.noScroll,replace_state:r.replaceState,state:r.state,redirect_count:t,nav_token:n,accept:()=>{r.invalidateAll&&(De=!0)}})}async function Rr(e){if(e.id!==(P==null?void 0:P.id)){const r={};Z.add(r),P={id:e.id,token:r,promise:St({...e,preload:r}).then(t=>(Z.delete(r),t.type==="loaded"&&t.state.error&&(P=null),t))}}return P.promise}async function Ve(e){const r=ye.find(t=>t.exec(At(e)));r&&await Promise.all([...r.layouts,r.leaf].map(t=>t==null?void 0:t[1]()))}function vt(e,r,t){var o;w=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),Object.assign(v,e.props.page),Be=new E.root({target:r,props:{...e.props,stores:N,components:ve},hydrate:t,sync:!1}),gt(C);const a={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};W.forEach(i=>i(a)),be=!0}function Se({url:e,params:r,branch:t,status:n,error:a,route:o,form:i}){let s="never";if(L&&(e.pathname===L||e.pathname===L+"/"))s="always";else for(const p of t)(p==null?void 0:p.slash)!==void 0&&(s=p.slash);e.pathname=Dt(e.pathname,s),e.search=e.search;const l={type:"loaded",state:{url:e,params:r,branch:t,error:a,route:o},props:{constructors:mr(t).map(p=>p.node.component),page:v}};i!==void 0&&(l.props.form=i);let c={},f=!v,h=0;for(let p=0;p<Math.max(t.length,w.branch.length);p+=1){const d=t[p],y=w.branch[p];(d==null?void 0:d.data)!==(y==null?void 0:y.data)&&(f=!0),d&&(c={...c,...d.data},f&&(l.props[`data_${h}`]=c),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==a||i!==void 0&&i!==v.form||f)&&(l.props.page={error:a,params:r,route:{id:(o==null?void 0:o.id)??null},state:{},status:n,url:new URL(e),form:i??null,data:f?c:v.data}),l}async function Fe({loader:e,parent:r,url:t,params:n,route:a,server_data_node:o}){var f,h,p;let i=null,s=!0;const l={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},c=await e();if((f=c.universal)!=null&&f.load){let d=function(...u){for(const m of u){const{href:A}=new URL(m,t);l.dependencies.add(A)}};const y={route:new Proxy(a,{get:(u,m)=>(s&&(l.route=!0),u[m])}),params:new Proxy(n,{get:(u,m)=>(s&&l.params.add(m),u[m])}),data:(o==null?void 0:o.data)??null,url:Ft(t,()=>{s&&(l.url=!0)},u=>{s&&l.search_params.add(u)},E.hash),async fetch(u,m){let A;u instanceof Request?(A=u.url,m={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:[...u.headers].length?u.headers:void 0,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...m}):A=u;const R=new URL(A,t);return s&&d(R.href),R.origin===t.origin&&(A=R.href.slice(t.origin.length)),be?Ht(A,R.href,m):zt(A,m)},setHeaders:()=>{},depends:d,parent(){return s&&(l.parent=!0),r()},untrack(u){s=!1;try{return u()}finally{s=!0}}};i=await c.universal.load.call(null,y)??null}return{node:c,loader:e,server:o,universal:(h=c.universal)!=null&&h.load?{type:"data",data:i,uses:l}:null,data:i??(o==null?void 0:o.data)??null,slash:((p=c.universal)==null?void 0:p.trailingSlash)??(o==null?void 0:o.slash)}}function bt(e,r,t,n,a,o){if(De)return!0;if(!a)return!1;if(a.parent&&e||a.route&&r||a.url&&t)return!0;for(const i of a.search_params)if(n.has(i))return!0;for(const i of a.params)if(o[i]!==w.params[i])return!0;for(const i of a.dependencies)if(ft.some(s=>s(new URL(i))))return!0;return!1}function qe(e,r){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?r??null:null}function xr(e,r){if(!e)return new Set(r.searchParams.keys());const t=new Set([...e.searchParams.keys(),...r.searchParams.keys()]);for(const n of t){const a=e.searchParams.getAll(n),o=r.searchParams.getAll(n);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(n)}return t}function kt({error:e,url:r,route:t,params:n}){return{type:"loaded",state:{error:e,url:r,route:t,params:n,branch:[]},props:{page:v,constructors:[]}}}async function St({id:e,invalidating:r,url:t,params:n,route:a,preload:o}){if((P==null?void 0:P.id)===e)return Z.delete(P.token),P.promise;const{errors:i,layouts:s,leaf:l}=a,c=[...s,l];i.forEach(g=>g==null?void 0:g().catch(()=>{})),c.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let f=null;const h=w.url?e!==Ee(w.url):!1,p=w.route?a.id!==w.route.id:!1,d=xr(w.url,t);let y=!1;const u=c.map((g,k)=>{var $;const _=w.branch[k],x=!!(g!=null&&g[0])&&((_==null?void 0:_.loader)!==g[1]||bt(y,p,h,d,($=_.server)==null?void 0:$.uses,n));return x&&(y=!0),x});if(u.some(Boolean)){try{f=await xt(t,u)}catch(g){const k=await J(g,{url:t,params:n,route:{id:e}});return Z.has(o)?kt({error:k,url:t,params:n,route:a}):Ae({status:me(g),error:k,url:t,route:a})}if(f.type==="redirect")return f}const m=f==null?void 0:f.nodes;let A=!1;const R=c.map(async(g,k)=>{var $;if(!g)return;const _=w.branch[k],x=m==null?void 0:m[k];if((!x||x.type==="skip")&&g[1]===(_==null?void 0:_.loader)&&!bt(A,p,h,d,($=_.universal)==null?void 0:$.uses,n))return _;if(A=!0,(x==null?void 0:x.type)==="error")throw x;return Fe({loader:g[1],url:t,params:n,route:a,parent:async()=>{var Je;const We={};for(let _e=0;_e<k;_e+=1)Object.assign(We,(Je=await R[_e])==null?void 0:Je.data);return We},server_data_node:qe(x===void 0&&g[0]?{type:"skip"}:x??null,g[0]?_==null?void 0:_.server:void 0)})});for(const g of R)g.catch(()=>{});const b=[];for(let g=0;g<c.length;g+=1)if(c[g])try{b.push(await R[g])}catch(k){if(k instanceof lt)return{type:"redirect",location:k.location};if(Z.has(o))return kt({error:await J(k,{params:n,url:t,route:{id:a.id}}),url:t,params:n,route:a});let _=me(k),x;if(m!=null&&m.includes(k))_=k.status??_,x=k.error;else if(k instanceof he)x=k.body;else{if(await N.updated.check())return await ct(),await M(t);x=await J(k,{params:n,url:t,route:{id:a.id}})}const $=await Ur(g,b,i);return $?Se({url:t,params:n,branch:b.slice(0,$.idx).concat($.node),status:_,error:x,route:a}):await _t(t,{id:a.id},x,_)}else b.push(void 0);return Se({url:t,params:n,branch:b,status:200,error:null,route:a,form:r?void 0:null})}async function Ur(e,r,t){for(;e--;)if(t[e]){let n=e;for(;!r[n];)n-=1;try{return{idx:n+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function Ae({status:e,error:r,url:t,route:n}){const a={};let o=null;if(E.server_loads[0]===0)try{const l=await xt(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==H||t.pathname!==location.pathname||Ne)&&await M(t)}const i=await Fe({loader:Te,url:t,params:a,route:n,parent:()=>Promise.resolve({}),server_data_node:qe(o)}),s={node:await we(),loader:we,universal:null,server:null,data:null};return Se({url:t,params:a,branch:[i,s],status:e,error:r,route:null})}function Me(e,r){if(!e||pe(e,L,E.hash))return;let t;try{if(t=E.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const a=new URL(e);E.hash?a.hash=t:a.pathname=t,t=a}}catch{return}const n=At(t);for(const a of ye){const o=a.exec(n);if(o)return{id:Ee(e),invalidating:r,route:a,params:Vt(o),url:e}}}function At(e){return Bt(E.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(L.length))||"/"}function Ee(e){return(E.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function Et({url:e,type:r,intent:t,delta:n}){let a=!1;const o=Lt(w,t,e,r);n!==void 0&&(o.navigation.delta=n);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return Y||dt.forEach(s=>s(i)),a?null:o}async function ee({type:e,url:r,popped:t,keepfocus:n,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:l={},accept:c=ut,block:f=ut}){const h=Me(r,!1),p=Et({url:r,type:e,delta:t==null?void 0:t.delta,intent:h});if(!p){f();return}const d=U,y=C;c(),Y=!0,be&&N.navigating.set(K.current=p.navigation),ke=l;let u=h&&await St(h);if(!u){if(pe(r,L,E.hash))return await M(r);u=await _t(r,{id:null},await J(new Ie(404,"Not Found",`Not found: ${r.pathname}`),{url:r,params:{},route:{id:null}}),404)}if(r=(h==null?void 0:h.url)||r,ke!==l)return p.reject(new Error("navigation aborted")),!1;if(u.type==="redirect")if(s>=20)u=await Ae({status:500,error:await J(new Error("Redirect loop"),{url:r,params:{},route:{id:null}}),url:r,route:{id:null}});else return wt(new URL(u.location,r).href,{},s+1,l),!1;else u.props.page.status>=400&&await N.updated.check()&&(await ct(),await M(r));if(_r(),Oe(d),mt(y),u.props.page.url.pathname!==r.pathname&&(r.pathname=u.props.page.url.pathname),i=t?t.state:i,!t){const b=o?0:1,g={[F]:U+=b,[z]:C+=b,[Ze]:i};(o?history.replaceState:history.pushState).call(history,g,"",r),o||Sr(U,C)}if(P=null,u.props.page.state=i,be){w=u.state,u.props.page&&(u.props.page.url=r);const b=(await Promise.all(Ar.map(g=>g(p.navigation)))).filter(g=>typeof g=="function");if(b.length>0){let g=function(){W=W.filter(k=>!b.includes(k))};b.push(g),W.push(...b)}Be.$set(u.props),br(u.props.page),ht=!0}else vt(u,$e,!1);const{activeElement:m}=document;await Nt();const A=t?t.scroll:a?Ce():null;if(pt){const b=r.hash&&document.getElementById(decodeURIComponent(E.hash?r.hash.split("#")[2]??"":r.hash.slice(1)));A?scrollTo(A.x,A.y):b?b.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==m&&document.activeElement!==document.body;!n&&!R&&jr(),pt=!0,u.props.page&&Object.assign(v,u.props.page),Y=!1,e==="popstate"&&gt(C),p.fulfil(void 0),W.forEach(b=>b(p.navigation)),N.navigating.set(K.current=null)}async function _t(e,r,t,n){return e.origin===H&&e.pathname===location.pathname&&!Ne?await Ae({status:n,error:t,url:e,route:r}):await M(e)}function Lr(){let e;D.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{n(i,2)},20)});function r(o){o.defaultPrevented||n(o.composedPath()[0],1)}D.addEventListener("mousedown",r),D.addEventListener("touchstart",r,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(Ve(new URL(i.target.href)),t.unobserve(i.target))},{threshold:0});function n(o,i){const s=nt(o,D);if(!s)return;const{url:l,external:c,download:f}=je(s,L,E.hash);if(c||f)return;const h=de(s),p=l&&Ee(w.url)===Ee(l);if(!h.reload&&!p)if(i<=h.preload_data){const d=Me(l,!1);d&&Rr(d)}else i<=h.preload_code&&Ve(l)}function a(){t.disconnect();for(const o of D.querySelectorAll("a")){const{url:i,external:s,download:l}=je(o,L,E.hash);if(s||l)continue;const c=de(o);c.reload||(c.preload_code===fe.viewport&&t.observe(o),c.preload_code===fe.eager&&Ve(i))}}W.push(a),a()}function J(e,r){if(e instanceof he)return e.body;const t=me(e),n=wr(e);return E.hooks.handleError({error:e,event:r,status:t,message:n})??{message:n}}function Rt(e,r={}){return e=new URL(et(e)),e.origin!==H?Promise.reject(new Error("goto: invalid URL")):wt(e,r,0)}function Pr(){var r;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(yt(),!Y){const a=Lt(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{n=!0,a.reject(new Error("navigation cancelled"))}};dt.forEach(i=>i(o))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&yt()}),(r=navigator.connection)!=null&&r.saveData||Lr(),D.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=nt(t.composedPath()[0],D);if(!n)return;const{url:a,external:o,target:i,download:s}=je(n,L,E.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const l=de(n);if(!(n instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[c,f]=(E.hash?a.hash.replace(/^#/,""):a.href).split("#"),h=c===xe(location);if(o||l.reload&&(!h||!f)){Et({url:a,type:"link"})?Y=!0:t.preventDefault();return}if(f!==void 0&&h){const[,p]=w.url.href.split("#");if(p===f){if(t.preventDefault(),f===""||f==="top"&&n.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const d=n.ownerDocument.getElementById(decodeURIComponent(f));d&&(d.scrollIntoView(),d.focus())}return}if(Q=!0,Oe(U),e(a),!l.replace_state)return;Q=!1}t.preventDefault(),await new Promise(p=>{requestAnimationFrame(()=>{setTimeout(p,0)}),setTimeout(p,100)}),ee({type:"link",url:a,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??a.href===location.href})}),D.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formTarget)||n.target)==="_blank"||((a==null?void 0:a.formMethod)||n.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||n.action);if(pe(o,L,!1))return;const i=t.target,s=de(i);if(s.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(i),c=a==null?void 0:a.getAttribute("name");c&&l.append(c,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(l).toString(),ee({type:"form",url:o,keepfocus:s.keepfocus,noscroll:s.noscroll,replace_state:s.replace_state??o.href===location.href})}),addEventListener("popstate",async t=>{var n;if((n=t.state)!=null&&n[F]){const a=t.state[F];if(ke={},a===U)return;const o=B[a],i=t.state[Ze]??{},s=new URL(t.state[nr]??location.href),l=t.state[z],c=xe(location)===xe(w.url);if(l===C&&(ht||c)){e(s),B[U]=Ce(),o&&scrollTo(o.x,o.y),i!==v.state&&(v.state=i,Be.$set({page:v})),U=a;return}const f=a-U;await ee({type:"popstate",url:s,popped:{state:i,scroll:o,delta:f},accept:()=>{U=a,C=l},block:()=>{history.go(-f)},nav_token:ke})}else if(!Q){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{Q?(Q=!1,history.replaceState({...history.state,[F]:++U,[z]:C},"",location.href)):E.hash&&w.url.hash===location.hash&&ee({type:"goto",url:w.url})});for(const t of document.querySelectorAll("link"))kr.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&N.navigating.set(K.current=null)});function e(t){w.url=v.url=t,N.page.set({data:v.data,error:v.error,form:v.form,params:v.params,route:v.route,state:v.state,status:v.status,url:t}),N.page.notify()}}async function Cr(e,{status:r=200,error:t,node_ids:n,params:a,route:o,data:i,form:s}){Ne=!0;const l=new URL(location.href);({params:a={},route:o={id:null}}=Me(l,!1)||{});let c,f=!0;try{const h=n.map(async(y,u)=>{const m=i[u];return m!=null&&m.uses&&(m.uses=Ut(m.uses)),Fe({loader:E.nodes[y],url:l,params:a,route:o,parent:async()=>{const A={};for(let R=0;R<u;R+=1)Object.assign(A,(await h[R]).data);return A},server_data_node:qe(m)})}),p=await Promise.all(h),d=ye.find(({id:y})=>y===o.id);if(d){const y=d.layouts;for(let u=0;u<y.length;u++)y[u]||p.splice(u,0,void 0)}c=Se({url:l,params:a,branch:p,status:r,error:t,form:s,route:d??null})}catch(h){if(h instanceof lt){await M(new URL(h.location,location.href));return}c=await Ae({status:me(h),error:await J(h,{url:l,params:a,route:o}),url:l,route:o}),e.textContent="",f=!1}c.props.page&&(c.props.page.state={}),vt(c,e,f)}async function xt(e,r){var a;const t=new URL(e);t.pathname=Wt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(yr,"1"),t.searchParams.append(gr,r.map(o=>o?"1":"0").join(""));const n=await He(t.href);if(!n.ok){let o;throw(a=n.headers.get("content-type"))!=null&&a.includes("application/json")?o=await n.json():n.status===404?o="Not Found":n.status===500&&(o="Internal Error"),new he(n.status,o)}return new Promise(async o=>{var h;const i=new Map,s=n.body.getReader(),l=new TextDecoder;function c(p){return pr(p,{...E.decoders,Promise:d=>new Promise((y,u)=>{i.set(d,{fulfil:y,reject:u})})})}let f="";for(;;){const{done:p,value:d}=await s.read();if(p&&!f)break;for(f+=!d&&f?`
`:l.decode(d,{stream:!0});;){const y=f.indexOf(`
`);if(y===-1)break;const u=JSON.parse(f.slice(0,y));if(f=f.slice(y+1),u.type==="redirect")return o(u);if(u.type==="data")(h=u.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=Ut(m.uses),m.data=c(m.data))}),o(u);else if(u.type==="chunk"){const{id:m,data:A,error:R}=u,b=i.get(m);i.delete(m),R?b.reject(c(R)):b.fulfil(c(A))}}}})}function Ut(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function jr(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const r=document.body,t=r.getAttribute("tabindex");r.tabIndex=-1,r.focus({preventScroll:!0,focusVisible:!1}),t!==null?r.setAttribute("tabindex",t):r.removeAttribute("tabindex");const n=getSelection();if(n&&n.type!=="None"){const a=[];for(let o=0;o<n.rangeCount;o+=1)a.push(n.getRangeAt(o));setTimeout(()=>{if(n.rangeCount===a.length){for(let o=0;o<n.rangeCount;o+=1){const i=a[o],s=n.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}n.removeAllRanges()}})}}}function Lt(e,r,t,n){var s,l;let a,o;const i=new Promise((c,f)=>{a=c,o=f});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((s=e.route)==null?void 0:s.id)??null},url:e.url},to:t&&{params:(r==null?void 0:r.params)??null,route:{id:((l=r==null?void 0:r.route)==null?void 0:l.id)??null},url:t},willUnload:!r,type:n,complete:i},fulfil:a,reject:o}}export{Er as a,Rt as g,v as p,N as s,ge as u};
