import"./disclose-version.BDr9Qe-U.js";import{p as j,o as O,ap as J,m as x,t as v,c as b,r as w,s as $,a as P,l as R,f as d,a4 as Q,ab as U,ar as S}from"./index-client.Ds4XgiuL.js";import{s as f}from"./render.Bq2-eTRf.js";import{i as T}from"./if.Du7BDhAX.js";import{a as o,t as c,d as _,e as A}from"./template.DXIK6jcH.js";import{t as q}from"./class.Ik0ma2JO.js";import{a as ee}from"./index.L0FyJ7Re.js";import{p as D}from"./proxy.CB6KOiNf.js";import{l as z,m as te}from"./helpers.BTvs6bnN.js";import{u as ae}from"./i18n_admin.svelte.B9VY-ZfA.js";import{A as oe}from"./A.CVr_yK1P.js";import{B as re}from"./Button.nDjAKZm4.js";import{T as ie}from"./Tooltip.CE2MIsWS.js";import{u as se}from"./i18n.svelte.CgUwCKxn.js";var ne=c('<div class="ip font-mono svelte-1dc3uko"> </div>'),ve=c("<div><!></div>"),me=c(" <!>",1),le=c(" <!>",1),pe=c(" <!>",1),de=c('<div role="contentinfo" class="event svelte-1dc3uko"><div class="ts svelte-1dc3uko"> </div> <!> <!></div>');function fe(F,e){j(e,!0);const C=(t,a=Q)=>{var m=A(),u=d(m);{var B=r=>{var s=ve(),y=b(s);re(y,{invisible:!0,onclick:()=>G(a()),children:(g,k)=>{ie(g,{get text(){return R(N)},yOffset:20,children:(n,p)=>{var i=ne(),h=b(i,!0);w(i),v(()=>f(h,a())),o(n,i)},$$slots:{default:!0}})},$$slots:{default:!0}}),w(s),o(r,s)};T(u,r=>{a()&&r(B)})}o(t,m)};let E=se(),H=ae(),I=O(!1),N=O(D(E.common.copyToClip));J(()=>{new Date().getTime()-1e3*30<e.event.timestamp&&(setTimeout(()=>{x(I,!0)},100),setTimeout(()=>{x(I,!1)},2500))});function G(t){navigator.clipboard.writeText(t),x(N,D(H.common.copiedToClip)),setTimeout(()=>{x(N,D(E.common.copyToClip))},3e3)}var l=de();const K=U(()=>`2px solid ${te(e.event.level)}`);v(()=>ee(l,"border-left",R(K)));var V=b(l),M=b(V,!0);v(()=>f(M,z(e.event.timestamp/1e3))),w(V);var L=$(V,2);{var W=t=>{var a=_();v(()=>f(a,e.event.typ)),o(t,a)};T(L,t=>{e.event.typ!=="RauthyHealthy"&&e.event.typ!=="RauthyUnhealthy"&&e.event.typ!=="NewRauthyVersion"&&e.event.typ!=="Test"&&t(W)})}var X=$(L,2);{var Y=t=>{var a=me(),m=d(a),u=$(m);C(u,()=>e.event.ip),v(()=>f(m,`${`: ${e.event.data}`??""} `)),o(t,a)},Z=t=>{var a=A(),m=d(a);{var u=r=>{var s=U(()=>e.event.text||"");oe(r,{get href(){return R(s)},target:"_blank",children:(y,g)=>{S();var k=_("NewRauthyVersion");o(y,k)},$$slots:{default:!0}})},B=r=>{var s=A(),y=d(s);{var g=n=>{var p=le(),i=d(p);v(()=>f(i,`${H.common.until??""}
        ${(e.event.data&&z(e.event.data))??""} `));var h=$(i);C(h,()=>e.event.ip),o(n,p)},k=n=>{var p=pe(),i=d(p),h=$(i);C(h,()=>e.event.ip),v(()=>f(i,`${e.event.text??""} `)),o(n,p)};T(y,n=>{e.event.typ==="IpBlacklisted"?n(g):n(k,!1)},!0)}o(r,s)};T(m,r=>{e.event.typ==="NewRauthyVersion"?r(u):r(B,!1)},!0)}o(t,a)};T(X,t=>{e.event.typ==="InvalidLogins"?t(Y):t(Z,!1)})}w(l),v(()=>{q(l,"highlight",R(I)),q(l,"inline",e.inline)}),o(F,l),P()}export{fe as E};
