import"./disclose-version.BDr9Qe-U.js";import{p as F,A as G,a0 as Q,a as H,c as m,r as u,t as v,ar as I,s as w,y as d,z as J,ap as T,f as K,ab as U}from"./index-client.CVQra9Cu.js";import{s as f}from"./render.CkKFmY3E.js";import{i as q}from"./if._4yhN2kP.js";import{e as V}from"./each.D7w_Y1pv.js";import{a as o,d as N,t as D,e as W}from"./template.4ZWi6dE6.js";import{p as z}from"./proxy.Dc6q2r8X.js";import{u as O}from"./i18n.svelte.DVZudxvm.js";import{u as X}from"./session.svelte.DKWvbSSq.js";import{d as Y,c as Z,f as ee}from"./fetch.B_P4c8fm.js";import{s as re}from"./class.BnbJV1WX.js";import{p as ae}from"./props.BVYR8gU-.js";import{l as A}from"./helpers.B0e_YzoL.js";import{I as se}from"./IconStop.DlqoW6sr.js";import{I as te}from"./Input.kE1yFgI6.js";import{E as oe}from"./Expandable.BxbAoZ16.js";import{c as ie}from"./patterns.DpOwmcHv.js";import{L as k}from"./LabeledValue.DfaotEKr.js";import{B as P}from"./Button.B6DffihK.js";var ce=D('<div class="device-header svelte-9n911e"><div class="device-head font-mono svelte-9n911e"> </div></div>'),de=D('<div class="saveButton svelte-9n911e"><!></div>'),le=D("<div><!></div>"),ve=D("<div> </div>"),ne=D('<div class="device svelte-9n911e"><!> <div class="row svelte-9n911e"><!> <!></div> <!> <!> <!> <!></div>');function me(M,h){F(h,!0);let r=ae(h,"device",15),t=O(),n=G(z(Q(()=>r().name)));async function $(){let l={device_id:r().id,name:d(n)},s=await Y(`/auth/v1/users/${h.userId}/devices`,l);s.error?console.error(s.error):r(r().name=d(n),!0)}async function R(){let l={device_id:r().id},s=await Z(`/auth/v1/users/${h.userId}/devices`,l);s.error?console.error(s.error):r(r().refresh_exp=void 0,!0)}oe(M,{summary:l=>{var s=ce(),g=m(s),p=m(g,!0);u(g),u(s),v(()=>f(p,r().name)),o(l,s)},details:l=>{var s=ne(),g=m(s);k(g,{get label(){return t.account.deviceId},mono:!0,children:(e,c)=>{I();var a=N();v(()=>f(a,r().id)),o(e,a)},$$slots:{default:!0}});var p=w(g,2),B=m(p);te(B,{autocomplete:"off",width:"17rem",get label(){return t.account.deviceName},get placeholder(){return t.account.deviceName},onEnter:$,pattern:ie,required:!0,get value(){return d(n)},set value(e){J(n,z(e))},children:(e,c)=>{I();var a=N();v(()=>f(a,t.account.deviceName)),o(e,a)},$$slots:{default:!0}});var j=w(B,2);{var i=e=>{var c=de(),a=m(c);P(a,{onclick:$,children:(x,b)=>{I();var S=N();v(()=>f(S,t.common.save)),o(x,S)},$$slots:{default:!0}}),u(c),o(e,c)};q(j,e=>{d(n)!==r().name&&e(i)})}u(p);var _=w(p,2);k(_,{get label(){return t.account.regDate},children:(e,c)=>{I();var a=N();v(()=>f(a,A(r().created))),o(e,a)},$$slots:{default:!0}});var L=w(_,2);k(L,{get label(){return t.account.accessExp},children:(e,c)=>{I();var a=N();v(()=>f(a,A(r().access_exp))),o(e,a)},$$slots:{default:!0}});var y=w(L,2);{var C=e=>{k(e,{get label(){return t.account.accessRenew},button:c=>{P(c,{get ariaLabel(){return t.common.delete},invisible:!0,onclick:R,children:(a,x)=>{var b=le(),S=m(b);se(S,{}),u(b),v(()=>re(b,"title",t.common.delete)),o(a,b)},$$slots:{default:!0}})},children:(c,a)=>{var x=ve(),b=m(x,!0);v(()=>f(b,A(r().refresh_exp))),u(x),o(c,x)},$$slots:{button:!0,default:!0}})};q(y,e=>{r().refresh_exp&&e(C)})}var E=w(y,2);k(E,{get label(){return t.account.regIp},children:(e,c)=>{I();var a=N();v(()=>f(a,r().peer_ip)),o(e,a)},$$slots:{default:!0}}),u(s),o(l,s)},$$slots:{summary:!0,details:!0}}),H()}var ue=D('<div class="head svelte-w0g6eh"> </div> <div class="devices svelte-w0g6eh"><!></div>',1);function fe(M,h){F(h,!0);let r=O(),t=X(h.viewMode),n=U(()=>{var i;return(i=t.get())==null?void 0:i.user_id}),$=G(z([]));T(()=>{R()});async function R(){let i=await ee(`/auth/v1/users/${d(n)}/devices`);i.body?J($,z(i.body)):console.error("error fetching devices: "+i.error)}var l=ue(),s=K(l),g=m(s,!0);u(s);var p=w(s,2),B=m(p);{var j=i=>{var _=W(),L=K(_);V(L,19,()=>d($),y=>y.id,(y,C,E)=>{me(y,{get userId(){return d(n)},get device(){return d($)[d(E)]},set device(e){d($)[d(E)]=e}})}),o(i,_)};q(B,i=>{d(n)&&i(j)})}u(p),v(()=>f(g,(r==null?void 0:r.account.devicesDesc)||"Devices linked to this account")),o(M,l),H()}export{fe as D};
