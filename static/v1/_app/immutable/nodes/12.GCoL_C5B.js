import"../chunks/disclose-version.BDr9Qe-U.js";import"../chunks/legacy.pqhLE6I2.js";import{p as U,w as m,ao as W,f as ee,t as f,a as ae,v as t,s,u as n,c as o,r as a,aq as re}from"../chunks/index-client.ChFmlJin.js";import{s as i}from"../chunks/render.D821es-0.js";import{i as D}from"../chunks/if.DhkeN2Rc.js";import{e as se,i as oe}from"../chunks/each.QTCItWz3.js";import{a as u,t as E,d as te}from"../chunks/template.DOaMAhd6.js";import{p as v}from"../chunks/proxy.DVTQVrWW.js";import{B as ie}from"../chunks/Button.DAsYf-wl.js";import{I as ne}from"../chunks/IconCheck.D6Zcehxl.js";import{f as pe,b as ce}from"../chunks/fetch.BnpwKXAn.js";import{u as ve}from"../chunks/i18n_admin.svelte.DaAJojhX.js";import{O as me}from"../chunks/Options.DSaGgzih.js";var le=E('<li class="font-mono"> </li>'),ye=E('<div class="err"> </div>'),de=E('<h3> </h3> <p> </p> <p> </p> <p><span class="font-label"> </span> <span class="active font-mono svelte-lxghyr"> </span></p> <p> </p> <ul></ul> <p> </p> <p> </p> <!> <div class="btn svelte-lxghyr"><!></div> <!> <!>',1);function fe(g,F){U(F,!0);let p=ve(),l=m(""),y=m(!0),I=m(""),d=m(""),K=m(v([])),b=m(!1);W(async()=>{var r;let e=await pe("/auth/v1/encryption/keys");e.body?(t(K,v(e.body.keys)),t(I,v(e.body.active)),t(d,v(e.body.active))):t(l,v(((r=e.error)==null?void 0:r.message)||"Error")),t(y,!1)});async function G(){t(y,!0);let e={key_id:n(d)},r=await ce("/auth/v1/encryption/migrate",e);r.error?t(l,v(r.error.message)):(t(b,!0),setTimeout(()=>{t(b,!1)},4e3)),t(y,!1)}var O=de(),h=ee(O),H=o(h,!0);a(h);var k=s(h,2),J=o(k,!0);a(k);var $=s(k,2),N=o($,!0);a($);var T=s($,2),w=o(T),P=o(w);a(w);var j=s(w,2),Q=o(j,!0);a(j),a(T);var x=s(T,2),R=o(x);a(x);var A=s(x,2);se(A,21,()=>n(K),oe,(e,r)=>{var c=le(),M=o(c,!0);a(c),f(()=>i(M,n(r))),u(e,c)}),a(A);var L=s(A,2),S=o(L,!0);a(L);var q=s(L,2),V=o(q);a(q);var z=s(q,2);me(z,{get ariaLabel(){return p.docs.encKeys.migrateToKey},get options(){return n(K)},get value(){return n(d)},set value(e){t(d,v(e))}});var B=s(z,2),X=o(B);ie(X,{onclick:G,get isLoading(){return n(y)},children:(e,r)=>{re();var c=te();f(()=>i(c,p.docs.encKeys.migrate)),u(e,c)},$$slots:{default:!0}}),a(B);var C=s(B,2);{var Y=e=>{var r=ye(),c=o(r,!0);a(r),f(()=>i(c,n(l))),u(e,r)};D(C,e=>{n(l)&&e(Y)})}var Z=s(C,2);{var _=e=>{ne(e,{})};D(Z,e=>{n(b)&&e(_)})}f(()=>{i(H,p.docs.encKeys.header),i(J,p.docs.encKeys.p1),i(N,p.docs.encKeys.p2),i(P,`${p.docs.encKeys.keyActive??""}:`),i(Q,n(I)),i(R,`${p.docs.encKeys.keysAvailable??""}:`),i(S,p.docs.encKeys.p3),i(V,`${p.docs.encKeys.migrateToKey??""}:`)}),u(g,O),ae()}function ue(g){fe(g,{})}export{ue as component};
