import"../chunks/disclose-version.BDr9Qe-U.js";import{p as be,o as ye,a4 as k,a as Te,j as r,a6 as l,$ as Le,g as e,a5 as o,a3 as f,a7 as t,a9 as s,a8 as Q,h as ce}from"../chunks/index-client.Bsb9hq-M.js";import{s as d}from"../chunks/render.Cl_nSOQQ.js";import{i as V}from"../chunks/if.Mw_hWmq0.js";import{f as Se,T as ke,B as X,a as Ae,e as Pe,i as De}from"../chunks/ThemeSwitch.Zeh_8WtX.js";import{a as i,t as z,b as Y,c as le}from"../chunks/template.D54H5ZkF.js";import{h as Ee}from"../chunks/svelte-head.YbFS2hoE.js";import{p as n}from"../chunks/proxy.DclUEOHG.js";import{r as ne,f as Ce}from"../chunks/helpers.Cfg4Q1a_.js";import{L as Re}from"../chunks/LangSelector.4aRmjdrU.js";import{I as je,P as qe}from"../chunks/patterns.CYl4_uw6.js";import{f as Be}from"../chunks/pow.C5_7nj9T.js";import{M as Me,C as Ne}from"../chunks/ContentCenter.Dpb8rCa1.js";import{u as Oe}from"../chunks/i18n.svelte.B0RF3bDg.js";import{T as Ve}from"../chunks/Template.CCszvfWi.js";import{u as We}from"../chunks/param.svelte.CjFurolb.js";var _e=z('<div class="desc svelte-hzde4x"> </div> <!> <div><!></div>',1),Fe=z('<div class="desc svelte-hzde4x"><p> </p> <p> </p></div>'),Ge=z('<div class="desc svelte-hzde4x"><p class="declined svelte-hzde4x"> </p> <p> </p></div>'),He=z('<li class="svelte-hzde4x"> </li>'),Ie=z('<div class="desc svelte-hzde4x"> <ul class="svelte-hzde4x"></ul></div> <div class="inline svelte-hzde4x"><!> <!></div>',1),Je=z('<div class="container svelte-hzde4x"><div class="name svelte-hzde4x"><h2> </h2></div> <!> <div class="err svelte-hzde4x"> </div></div>'),Ke=z("<!> <!> <!>",1),Ue=z("<!> <!>",1);function Qe(ue,pe){be(pe,!0);let a=Oe(),Z=f(void 0),w=f(""),W=f(!1),A=f(!1),b=f(8),_=f(void 0),ee=f(!1),ae=f(!1),T=f("");ye(async()=>{let v=We("code").get()||"";r(T,n(v));let L=await Se("/auth/v1/oidc/sessioninfo");L.body?r(Z,n(L.body)):v?ne(`device?code=${v}`):ne("device")});async function F(v){var P,D,B;if(r(w,""),e(W))return;if(e(T).length<e(b)){r(w,n(a.common.errTooShort));return}if(e(T).length>e(b)){r(w,n(a.common.errTooLong));return}r(A,!0);let L=await Be();if(!L){r(w,"PoW error - please contact your administrator");return}let G={user_code:e(T),pow:L,device_accepted:v},h=await Ae("/auth/v1/oidc/device/verify",G);h.status===200?r(_,n(((D=(P=h.body)==null?void 0:P.scopes)==null?void 0:D.split(" "))||["openid"])):h.status===202?(r(ee,!0),setTimeout(()=>{window.location.replace("/auth/v1/account?v=devices")},2e3)):h.status===204?r(ae,!0):h.status===404?r(w,n(a.device.wrongOrExpired)):(console.error(h),r(w,n((B=h.error)==null?void 0:B.message))),r(A,!1)}var re=Ue();Ee(v=>{l(()=>Le.title=(a==null?void 0:a.device.title)||"Device Authorization")});var se=k(re);Ve(se,{id:Ce,get value(){return e(b)},set value(v){r(b,n(v))}});var me=o(se,2);Me(me,{children:(v,L)=>{Ne(v,{children:(G,h)=>{var P=Ke(),D=k(P);{var B=H=>{var I=Je(),J=t(I),ie=t(J),he=t(ie,!0);s(ie),s(J);var oe=o(J,2);{var ge=S=>{var E=_e(),C=k(E),K=t(C,!0);l(()=>d(K,a.device.desc.replace("{{count}}",e(b).toString()))),s(C);var M=o(C,2),g=ce(()=>e(b).toString()),x=ce(()=>e(b).toString());je(M,{name:"userCode",autocomplete:"off",get label(){return a.device.userCode},get placeholder(){return a.device.userCode},required:!0,get min(){return e(g)},get max(){return e(x)},pattern:qe,get value(){return e(T)},set value(c){r(T,n(c))},get isError(){return e(W)},set isError(c){r(W,n(c))}});var $=o(M,2),R=t($);X(R,{onclick:()=>F("pending"),get isLoading(){return e(A)},children:(c,u)=>{Q();var p=Y();l(()=>d(p,a.device.submit)),i(c,p)},$$slots:{default:!0}}),s($),i(S,E)},xe=S=>{var E=le(),C=k(E);{var K=g=>{var x=Fe(),$=t(x),R=t($,!0);s($);var c=o($,2),u=t(c,!0);s(c),s(x),l(()=>{d(R,a.device.isAccepted),d(u,a.device.autoRedirectAccount)}),i(g,x)},M=g=>{var x=le(),$=k(x);{var R=u=>{var p=Ge(),y=t(p),N=t(y,!0);s(y);var j=o(y,2),O=t(j,!0);s(j),s(p),l(()=>{d(N,a.device.isDeclined),d(O,a.device.closeWindow)}),i(u,p)},c=u=>{var p=Ie(),y=k(p),N=t(y),j=o(N);Pe(j,21,()=>e(_),De,(q,U)=>{var m=He(),we=t(m,!0);s(m),l(()=>d(we,e(U))),i(q,m)}),s(j),s(y);var O=o(y,2),ve=t(O);X(ve,{onclick:()=>F("accept"),get isLoading(){return e(A)},children:(q,U)=>{Q();var m=Y();l(()=>d(m,a.device.accept)),i(q,m)},$$slots:{default:!0}});var ze=o(ve,2);X(ze,{level:-1,onclick:()=>F("decline"),get isLoading(){return e(A)},children:(q,U)=>{Q();var m=Y();l(()=>d(m,a.device.decline)),i(q,m)},$$slots:{default:!0}}),s(O),l(()=>d(N,`${a.device.descScopes??""} `)),i(u,p)};V($,u=>{e(ae)?u(R):u(c,!1)},!0)}i(g,x)};V(C,g=>{e(ee)?g(K):g(M,!1)},!0)}i(S,E)};V(oe,S=>{e(_)===void 0?S(ge):S(xe,!1)})}var de=o(oe,2),$e=t(de,!0);s(de),s(I),l(()=>{d(he,a.device.title),d($e,e(w))}),i(H,I)};V(D,H=>{e(Z)&&H(B)})}var te=o(D,2);ke(te,{absolute:!0});var fe=o(te,2);Re(fe,{absolute:!0}),i(G,P)},$$slots:{default:!0}})},$$slots:{default:!0}}),i(ue,re),Te()}export{Qe as component};
