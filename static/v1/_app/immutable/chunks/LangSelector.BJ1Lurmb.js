import"./disclose-version.BDr9Qe-U.js";import{p as x,a3 as j,d as c,b as u,a6 as y,a as R,g as i,j as f,a7 as S,a9 as z}from"./index-client.Cqn5bTAA.js";import{a as A,t as B}from"./template.A7ni-K4i.js";import{a as C,t as l}from"./helpers.CZ9R9OcM.js";import{p as m}from"./proxy.Ce5Ub1RB.js";import{p as n}from"./props.YICxVAwD.js";import{O}from"./ThemeSwitch.Nnphyg3I.js";import{L as d,y as G}from"./dataFetching.BTF7Y2Cd.js";import{a as J}from"./i18n.svelte.CZcZQkVy.js";var M=B('<div class="svelte-cwczdp"><!></div>');function P(v,s){x(s,!0);let b=n(s,"absolute",3,!1),p=n(s,"absoluteRight",3,!1),w=n(s,"updateBackend",3,!1);const L=";Path=/;SameSite=Lax;Max-Age=315360000";let e=J(),t=j(m(c(()=>e)));u(()=>{let a=C("locale"),r=c(()=>e);a!==r&&d.includes(a)&&(e=a,f(t,m(a)))}),u(()=>{i(t)&&i(t)!==e&&g(i(t))});async function g(a){if(document.cookie="locale="+a.toLowerCase()+L,w()){let r=await G();if(!r.ok){let k=await r.json();console.error(k);return}}window.location.reload()}var o=M(),h=S(o);O(h,{options:d,get value(){return i(t)},set value(a){f(t,m(a))}}),z(o),y(()=>{l(o,"absolute",b()),l(o,"absoluteLeft",!p()),l(o,"absoluteRight",p())}),A(v,o),R()}export{P as L};
