import"../chunks/disclose-version.BDr9Qe-U.js";import{p as we,ap as ye,f as k,a as Le,m as a,t as l,aq as Se,l as e,s as o,o as f,c as s,r as t,ar as U,ab as ce}from"../chunks/index-client.Ds4XgiuL.js";import{s as d}from"../chunks/render.Bq2-eTRf.js";import{i as N}from"../chunks/if.Du7BDhAX.js";import{e as Te,i as ke}from"../chunks/each.MnMr4iw5.js";import{a as i,t as $,d as X,e as le}from"../chunks/template.DXIK6jcH.js";import{h as Ae}from"../chunks/svelte-head.DUes13UE.js";import{p as n}from"../chunks/proxy.CB6KOiNf.js";import{r as ne,n as De}from"../chunks/helpers.BTvs6bnN.js";import{L as Ee}from"../chunks/LangSelector.BAs7X9bt.js";import{I as Pe,f as qe}from"../chunks/pow.C3ENfqN0.js";import{B as Y}from"../chunks/Button.nDjAKZm4.js";import{M as Ce}from"../chunks/Main.DW0MpFpK.js";import{C as Re}from"../chunks/ContentCenter.CKh5VTcB.js";import{u as We}from"../chunks/i18n.svelte.CgUwCKxn.js";import{T as _e}from"../chunks/Template.CSY6eNF5.js";import{u as je}from"../chunks/param.svelte.D0F_0zrI.js";import{T as Be}from"../chunks/ThemeSwitch.DknOd3dX.js";import{f as Me,b as Ne}from"../chunks/fetch.DFmyLr06.js";import{P as Oe}from"../chunks/patterns.D9HtGhEC.js";var Fe=$('<div class="desc svelte-hzde4x"> </div> <!> <div><!></div>',1),Ge=$('<div class="desc svelte-hzde4x"><p> </p> <p> </p></div>'),He=$('<div class="desc svelte-hzde4x"><p class="declined svelte-hzde4x"> </p> <p> </p></div>'),Ie=$('<li class="svelte-hzde4x"> </li>'),Je=$('<div class="desc svelte-hzde4x"> <ul class="svelte-hzde4x"></ul></div> <div class="inline svelte-hzde4x"><!> <!></div>',1),Ke=$('<div class="container svelte-hzde4x"><div class="name svelte-hzde4x"><h2> </h2></div> <!> <div class="err svelte-hzde4x"> </div></div>'),Ve=$("<!> <!> <!>",1),Qe=$("<!> <!>",1);function Ue(me,ue){we(ue,!0);let r=We(),Z=f(void 0),b=f(""),O=f(!1),A=f(!1),w=f(8),F=f(void 0),ee=f(!1),re=f(!1),L=f("");ye(async()=>{let v=je("code").get()||"";a(L,n(v));let S=await Me("/auth/v1/oidc/sessioninfo");S.body?a(Z,n(S.body)):v?ne(`device?code=${v}`):ne("device")});async function G(v){var D,E,_;if(a(b,""),e(O))return;if(e(L).length<e(w)){a(b,n(r.common.errTooShort));return}if(e(L).length>e(w)){a(b,n(r.common.errTooLong));return}a(A,!0);let S=await qe();if(!S){a(b,"PoW error - please contact your administrator");return}let H={user_code:e(L),pow:S,device_accepted:v},h=await Ne("/auth/v1/oidc/device/verify",H);h.status===200?a(F,n(((E=(D=h.body)==null?void 0:D.scopes)==null?void 0:E.split(" "))||["openid"])):h.status===202?(a(ee,!0),setTimeout(()=>{window.location.replace("/auth/v1/account?v=devices")},2e3)):h.status===204?a(re,!0):h.status===404?a(b,n(r.device.wrongOrExpired)):(console.error(h),a(b,n((_=h.error)==null?void 0:_.message))),a(A,!1)}var ae=Qe();Ae(v=>{l(()=>Se.title=(r==null?void 0:r.device.title)||"Device Authorization")});var te=k(ae);_e(te,{id:De,get value(){return e(w)},set value(v){a(w,n(v))}});var pe=o(te,2);Ce(pe,{children:(v,S)=>{Re(v,{children:(H,h)=>{var D=Ve(),E=k(D);{var _=I=>{var J=Ke(),K=s(J),ie=s(K),he=s(ie,!0);t(ie),t(K);var oe=o(K,2);{var ge=T=>{var P=Fe(),q=k(P),V=s(q,!0);l(()=>d(V,r.device.desc.replace("{{count}}",e(w).toString()))),t(q);var j=o(q,2),g=ce(()=>e(w).toString()),x=ce(()=>e(w).toString());Pe(j,{name:"userCode",autocomplete:"off",get label(){return r.device.userCode},get placeholder(){return r.device.userCode},required:!0,get min(){return e(g)},get max(){return e(x)},pattern:Oe,get value(){return e(L)},set value(c){a(L,n(c))},get isError(){return e(O)},set isError(c){a(O,n(c))}});var z=o(j,2),C=s(z);Y(C,{onclick:()=>G("pending"),get isLoading(){return e(A)},children:(c,m)=>{U();var u=X();l(()=>d(u,r.device.submit)),i(c,u)},$$slots:{default:!0}}),t(z),i(T,P)},xe=T=>{var P=le(),q=k(P);{var V=g=>{var x=Ge(),z=s(x),C=s(z,!0);t(z);var c=o(z,2),m=s(c,!0);t(c),t(x),l(()=>{d(C,r.device.isAccepted),d(m,r.device.autoRedirectAccount)}),i(g,x)},j=g=>{var x=le(),z=k(x);{var C=m=>{var u=He(),y=s(u),B=s(y,!0);t(y);var R=o(y,2),M=s(R,!0);t(R),t(u),l(()=>{d(B,r.device.isDeclined),d(M,r.device.closeWindow)}),i(m,u)},c=m=>{var u=Je(),y=k(u),B=s(y),R=o(B);Te(R,21,()=>e(F),ke,(W,Q)=>{var p=Ie(),be=s(p,!0);t(p),l(()=>d(be,e(Q))),i(W,p)}),t(R),t(y);var M=o(y,2),ve=s(M);Y(ve,{onclick:()=>G("accept"),get isLoading(){return e(A)},children:(W,Q)=>{U();var p=X();l(()=>d(p,r.device.accept)),i(W,p)},$$slots:{default:!0}});var $e=o(ve,2);Y($e,{level:-1,onclick:()=>G("decline"),get isLoading(){return e(A)},children:(W,Q)=>{U();var p=X();l(()=>d(p,r.device.decline)),i(W,p)},$$slots:{default:!0}}),t(M),l(()=>d(B,`${r.device.descScopes??""} `)),i(m,u)};N(z,m=>{e(re)?m(C):m(c,!1)},!0)}i(g,x)};N(q,g=>{e(ee)?g(V):g(j,!1)},!0)}i(T,P)};N(oe,T=>{e(F)===void 0?T(ge):T(xe,!1)})}var de=o(oe,2),ze=s(de,!0);t(de),t(J),l(()=>{d(he,r.device.title),d(ze,e(b))}),i(I,J)};N(E,I=>{e(Z)&&I(_)})}var se=o(E,2);Be(se,{absolute:!0});var fe=o(se,2);Ee(fe,{absolute:!0}),i(H,D)},$$slots:{default:!0}})},$$slots:{default:!0}}),i(me,ae),Le()}export{Ue as component};
