import"../chunks/disclose-version.BDr9Qe-U.js";import{p as J,P as w,b as T,o as K,Q as q,a as N,j as l,T as n,$ as Q,g as s,R as r,U as c,W as m,V as x}from"../chunks/index-client.CzqVbBUo.js";import{s as u}from"../chunks/render.CK5MTJQL.js";import{p as v,i as R}from"../chunks/if.BnegfJmL.js";import{a as d,t as B,b as C}from"../chunks/template.io25wnf1.js";import{h as S}from"../chunks/svelte-head.BSz900xL.js";import{g as X,p as Y,e as Z,q as D,r as tt}from"../chunks/dataFetching.Br47vc1D.js";import{B as O}from"../chunks/Button.JzTZa4bh.js";import{u as at}from"../chunks/i18n.svelte.C_qSL0ZA.js";import{M as ot,C as st}from"../chunks/ContentCenter.B2VsFG_i.js";import{L as rt}from"../chunks/LangSelector.DQTzLAdQ.js";import{T as et}from"../chunks/Template.mSBxkRZ-.js";var it=B('<div class="container svelte-1r6sjfz"><h1> </h1> <p> </p> <div class="btn svelte-1r6sjfz"><!> <!></div> <!></div> <!>',1),lt=B("<!> <!>",1);function nt(P,U){J(U,!0);let a=at(),p=w(!1),i=w(""),f=w(v({}));T(()=>{s(i)&&Z(s(i))}),T(()=>{s(f).id_token_hint&&L()}),K(async()=>{const t=X();l(f,v({post_logout_redirect_uri:t.post_logout_redirect_uri,id_token_hint:t.id_token_hint,state:t.state}))});async function b(){window.location.replace("/auth/v1")}async function L(){l(p,!0);let t=await D(s(f));tt();let g=t.headers.get("location");g?window.location.replace(g):await b()}var j=lt();S(t=>{n(()=>Q.title=(a==null?void 0:a.logout.logout)||"Logout")});var y=q(j);et(y,{id:Y,get value(){return s(i)},set value(t){l(i,v(t))}});var V=r(y,2);ot(V,{children:(t,g)=>{st(t,{children:(W,ct)=>{var z=it(),$=q(z),h=c($),A=c(h,!0);m(h);var _=r(h,2),E=c(_,!0);m(_);var k=r(_,2),M=c(k);O(M,{level:2,get isLoading(){return s(p)},set isLoading(o){l(p,v(o))},$$events:{click:L},children:(o,I)=>{x();var e=C();n(()=>u(e,a.logout.logout)),d(o,e)},$$slots:{default:!0}});var F=r(M,2);O(F,{level:4,$$events:{click:b},children:(o,I)=>{x();var e=C();n(()=>u(e,a.common.cancel)),d(o,e)},$$slots:{default:!0}}),m(k);var G=r(k,2);R(G,o=>{}),m($);var H=r($,2);rt(H,{absolute:!0}),n(()=>{u(A,a.logout.logout),u(E,a.logout.confirmMsg)}),d(W,z)},$$slots:{default:!0}})},$$slots:{default:!0}}),d(P,j),N()}export{nt as component};
