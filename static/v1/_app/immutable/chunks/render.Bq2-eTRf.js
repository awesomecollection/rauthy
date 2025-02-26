import{h,w as S,aj as T,a0 as N,A as V,aN as b,aA as g,am as q,J as L,C as G,_ as H,aO as j,a3 as K,q as R,H as C,P as E,v as W,b as U,k as _,al as X,u as Y,aP as Z,ad as ee,aQ as te,a1 as ne,j as oe,p as ae,a as re,a9 as se}from"./index-client.Ds4XgiuL.js";import{r as ue}from"./svelte-head.DUes13UE.js";import{b as ie}from"./template.DXIK6jcH.js";function ce(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const de=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function le(e){return de.includes(e)}const fe={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function ve(e){return e=e.toLowerCase(),fe[e]??e}const pe=["touchstart","touchmove"];function me(e){return pe.includes(e)}function he(e,t){if(t){const n=document.body;e.autofocus=!0,N(()=>{document.activeElement===n&&e.focus()})}}function _e(e){h&&S(e)!==null&&T(e)}let B=!1;function $(){B||(B=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n.__on_r)==null||t.call(n)})},{capture:!0}))}function we(e,t,n,r=!0){r&&n();for(var a of t)e.addEventListener(a,n);V(()=>{for(var o of t)e.removeEventListener(o,n)})}function M(e){var t=q,n=L;b(null),g(null);try{return e()}finally{b(t),g(n)}}function ye(e,t,n,r=n){e.addEventListener(t,()=>M(n));const a=e.__on_r;a?e.__on_r=()=>{a(),r(!0)}:e.__on_r=()=>r(!0),$()}const D=new Set,P=new Set;function be(e){if(!h)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function I(e,t,n,r){function a(o){if(r.capture||w.call(t,o),!o.cancelBubble)return M(()=>n.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?N(()=>{t.addEventListener(e,a,r)}):t.addEventListener(e,a,r),a}function ge(e,t,n,r,a){var o={capture:r,passive:a},i=I(e,t,n,o);(t===document.body||t===window||t===document)&&V(()=>{t.removeEventListener(e,i,o)})}function Ee(e){for(var t=0;t<e.length;t++)D.add(e[t]);for(var n of P)n(e)}function w(e){var O;var t=this,n=t.ownerDocument,r=e.type,a=((O=e.composedPath)==null?void 0:O.call(e))||[],o=a[0]||e.target,i=0,v=e.__root;if(v){var l=a.indexOf(v);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var p=a.indexOf(t);if(p===-1)return;l<=p&&(i=l)}if(o=a[i]||e.target,o!==t){G(e,"currentTarget",{configurable:!0,get(){return o||n}});var k=q,c=L;b(null),g(null);try{for(var s,u=[];o!==null;){var d=o.assignedSlot||o.parentNode||o.host||null;try{var f=o["__"+r];if(f!==void 0&&!o.disabled)if(H(f)){var[z,...F]=f;z.apply(o,[e,...F])}else f.call(o,e)}catch(y){s?u.push(y):s=y}if(e.cancelBubble||d===t||d===null)break;o=d}if(s){for(let y of u)queueMicrotask(()=>{throw y});throw s}}finally{e.__root=t,delete e.currentTarget,b(k),g(c)}}}let x=!0;function ke(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function J(e,t){return Q(e,t)}function Le(e,t){j(),t.intro=t.intro??!1;const n=t.target,r=h,a=_;try{for(var o=S(n);o&&(o.nodeType!==8||o.data!==K);)o=R(o);if(!o)throw C;E(!0),W(o),U();const i=Q(e,{...t,anchor:o});if(_===null||_.nodeType!==8||_.data!==X)throw Y(),C;return E(!1),i}catch(i){if(i===C)return t.recover===!1&&Z(),j(),T(n),E(!1),J(e,t);throw i}finally{E(r),W(a),ue()}}const m=new Map;function Q(e,{target:t,anchor:n,props:r={},events:a,context:o,intro:i=!0}){j();var v=new Set,l=c=>{for(var s=0;s<c.length;s++){var u=c[s];if(!v.has(u)){v.add(u);var d=me(u);t.addEventListener(u,w,{passive:d});var f=m.get(u);f===void 0?(document.addEventListener(u,w,{passive:d}),m.set(u,1)):m.set(u,f+1)}}};l(ee(D)),P.add(l);var p=void 0,k=te(()=>{var c=n??t.appendChild(ne());return oe(()=>{if(o){ae({});var s=se;s.c=o}a&&(r.$$events=a),h&&ie(c,null),x=i,p=e(c,r)||{},x=!0,h&&(L.nodes_end=_),o&&re()}),()=>{var d;for(var s of v){t.removeEventListener(s,w);var u=m.get(s);--u===0?(document.removeEventListener(s,w),m.delete(s)):m.set(s,u)}P.delete(l),c!==n&&((d=c.parentNode)==null||d.removeChild(c))}});return A.set(p,k),p}let A=new WeakMap;function je(e,t){const n=A.get(e);return n?(A.delete(e),n(t)):Promise.resolve()}export{ye as a,be as b,$ as c,Ee as d,ge as e,I as f,he as g,Le as h,ce as i,le as j,x as k,we as l,J as m,ve as n,_e as r,ke as s,je as u,M as w};
