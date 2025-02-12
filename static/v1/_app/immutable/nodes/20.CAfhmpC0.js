import"../chunks/disclose-version.BDr9Qe-U.js";import"../chunks/legacy.DUFkTaXF.js";import{p as Y,i as m,ao as Z,a as B,g as a,h as t,c as E,aq as q,s as g,r as y,t as z,f as X}from"../chunks/index-client.CzvcfCLI.js";import{s as G}from"../chunks/render.BJBkrb2f.js";import{e as ue}from"../chunks/each.BtetwUOf.js";import{a as n,d as F,t as p,e as me}from"../chunks/template.CQASMEo4.js";import{p as r}from"../chunks/proxy.CHyqegA9.js";import{t as pe,u as he,v as fe,j as ge,w as we}from"../chunks/dataFetchingAdmin.D6QJ_imf.js";import{i as N}from"../chunks/if.Dlf0zx3_.js";import{p as M}from"../chunks/props.BRvF51YW.js";import{r as ee}from"../chunks/legacy-client.CQT_jR_Y.js";import{E as te}from"../chunks/ExpandContainer.96GzOZVL.js";import{c as se,a as re,I as oe}from"../chunks/Input.BmqIhqeF.js";import{X as ie,o as ve,Y as ne}from"../chunks/helpers.kNqlWGzE.js";import{B as ae}from"../chunks/Button.BMVss8ej.js";import{s as le,t as U,a as H}from"../chunks/index.CqGLefLa.js";import{T as ce,a as be,P as $e}from"../chunks/Pagination.B865uVVG.js";import{T as ye}from"../chunks/TabBar.DO8vwRCx.js";import{I as de}from"../chunks/ItemTiles.BFL7MIZJ.js";var _e=p('<div class="header font-label svelte-r30xs6">ADD NEW SCOPE</div>'),Se=p('<div class="success svelte-r30xs6">Success</div>'),Ee=p('<div class="err svelte-r30xs6"> </div>'),Ce=p('<div class="container svelte-r30xs6"><!> <!> <!> <!></div>');function De(P,$){Y($,!0);let j=M($,"idx",31,()=>-1),s=m(void 0),c=m(r({scope:""})),h=m(""),w=m(!1),_=m(void 0),S=m(r({}));const x=se().shape({scope:re().trim().matches(ie,"Can only contain: 'a-z0-9-_/:*', length: 2-64")});ee(()=>{a(w)&&t(_,r(setTimeout(()=>{$.onSave(),t(w,!1),t(c,r({scope:""})),t(s,!1)},1500)))}),Z(()=>()=>clearTimeout(a(_)));async function C(){if(t(h,""),!await b()){t(h,"Invalid input");return}a(c).scope=a(c).scope.trim();let i=await pe(a(c));if(i.ok)t(w,!0);else{let d=await i.json();t(h,r(d.message))}}async function b(){try{return await x.validate(a(c),{abortEarly:!1}),t(S,r({})),!0}catch(i){return t(S,r(ve(i))),!1}}te(P,{get idx(){return j()},set idx(i){j(i)},get show(){return a(s)},set show(i){t(s,r(i))},header:i=>{var d=_e();n(i,d)},body:i=>{var d=Ce(),k=E(d);oe(k,{autocomplete:"off",placeholder:"Scope Name",get value(){return a(c).scope},set value(e){a(c).scope=e},get error(){return a(S).scope},set error(e){a(S).scope=e},$$events:{input:b},children:(e,l)=>{q();var I=F("SCOPE NAME");n(e,I)},$$slots:{default:!0}});var u=g(k,2);ae(u,{level:1,width:"4rem",$$events:{click:C},children:(e,l)=>{q();var I=F("SAVE");n(e,I)},$$slots:{default:!0}});var D=g(u,2);{var v=e=>{var l=Se();n(e,l)};N(D,e=>{a(w)&&e(v)})}var f=g(D,2);{var O=e=>{var l=Ee(),I=E(l,!0);y(l),z(()=>G(I,a(h))),n(e,l)};N(f,e=>{a(h)&&e(O)})}y(d),n(i,d)},$$slots:{header:!0,body:!0}}),B()}var Ie=p('<div class="desc svelte-guvobw"><p>Custom mappings cannot be done for OpenID default scopes and their names cannot be changed.</p></div>'),je=p('<div class="desc svelte-guvobw"><p>You can map custom scopes to attributes.<br> All additional attributes, that were configured, can have a custom value for each user.<br> When they are mapped to a scope, they can be included in the Access and / or ID Tokens.</p></div> <div class="unit svelte-guvobw"><div class="label svelte-guvobw">ACCESS TOKEN MAPPINGS</div> <!></div> <div class="unit svelte-guvobw"><div class="label svelte-guvobw">ID TOKEN MAPPINGS</div> <!></div>',1),ke=p('<div class="success svelte-guvobw">Success</div>'),Te=p('<div class="mainErr err svelte-guvobw"> </div>'),xe=p("<!> <!> <!>",1),Ae=p('<div class="container svelte-guvobw"><div class="unit svelte-guvobw"><div class="label font-label svelte-guvobw">ID</div> <div class="value font-mono svelte-guvobw"> </div></div> <!> <div class="separator"></div> <!> <!></div>');function Pe(P,$){Y($,!0);let j=M($,"attrs",27,()=>r([])),s=M($,"scope",31,()=>r({})),c=m(""),h=m(!1),w=m(void 0),_=m(!1),S=m(r([]));ee(()=>{a(h)&&t(w,r(setTimeout(()=>{t(h,!1),$.onSave()},2e3)))}),ee(()=>{j()&&t(S,r(j().map(o=>o.name)))}),Z(()=>(t(_,r(ne(s().name))),()=>clearTimeout(a(w))));let x=m(r({}));const C=se().shape({name:re().trim().matches(ie,"Can only contain: 'a-z0-9-_/:*', length: 2-64")});async function b(){if(t(c,""),!await i()){t(c,"Invalid input");return}let o={scope:s().name.trim()};s().attr_include_access.length>0&&(o.attr_include_access=s().attr_include_access),s().attr_include_id.length>0&&(o.attr_include_id=s().attr_include_id);let A=await he(s().id,o);if(A.ok)t(h,!0);else{let T=await A.json();t(c,r(T.message))}}async function i(){try{return await C.validate(s(),{abortEarly:!1}),t(x,r({})),!0}catch(o){return t(x,r(ve(o))),!1}}var d=Ae(),k=E(d),u=g(E(k),2),D=E(u,!0);y(u),y(k);var v=g(k,2);oe(v,{autocomplete:"off",placeholder:"Scope Name",get disabled(){return a(_)},get value(){return s().name},set value(o){s(s().name=o,!0)},get error(){return a(x).name},set error(o){a(x).name=o},$$events:{input:i},children:(o,A)=>{q();var T=F("SCOPE NAME");n(o,T)},$$slots:{default:!0}});var f=g(v,4);{var O=o=>{var A=Ie();n(o,A)},e=o=>{var A=je(),T=g(X(A),2);le(T,"margin-top","-3px");var Q=g(E(T),2);de(Q,{get options(){return a(S)},searchThreshold:4,get items(){return s().attr_include_access},set items(W){s(s().attr_include_access=W,!0)}}),y(T);var V=g(T,2);le(V,"margin-top","-3px");var J=g(E(V),2);de(J,{get options(){return a(S)},searchThreshold:4,get items(){return s().attr_include_id},set items(W){s(s().attr_include_id=W,!0)}}),y(V),n(o,A)};N(f,o=>{a(_)?o(O):o(e,!1)})}var l=g(f,2);{var I=o=>{var A=xe(),T=X(A);ae(T,{level:1,width:"4rem",$$events:{click:b},children:(L,K)=>{q();var R=F("SAVE");n(L,R)},$$slots:{default:!0}});var Q=g(T,2);{var V=L=>{var K=ke();n(L,K)};N(Q,L=>{a(h)&&L(V)})}var J=g(Q,2);{var W=L=>{var K=Te(),R=E(K,!0);y(K),z(()=>G(R,a(c))),n(L,K)};N(J,L=>{a(c)&&L(W)})}n(o,A)};N(l,o=>{a(_)||o(I)})}y(d),z(()=>G(D,s().id)),n(P,d),B()}var Ne=p('<div class="label svelte-1jljqe9">OpenID default scopes cannot be deleted</div>'),Oe=p('<div class="err svelte-1jljqe9"> </div>'),Le=p('<div class="label svelte-1jljqe9">Are you sure, you want to delete this scope?</div> <!> <!>',1),qe=p('<div class="container svelte-1jljqe9"><!></div>');function ze(P,$){Y($,!0);let j=M($,"scope",19,()=>({})),s=m(!1),c=m("");async function h(){t(c,""),t(s,!0);let C=await fe(j().id);if(C.ok)$.onSave();else{let b=await C.json();t(c,r(b.message))}t(s,!1)}var w=qe(),_=E(w);{var S=C=>{var b=Ne();n(C,b)},x=C=>{var b=Le(),i=g(X(b),2);ae(i,{level:1,get isLoading(){return a(s)},set isLoading(u){t(s,r(u))},$$events:{click:h},children:(u,D)=>{q();var v=F("DELETE");n(u,v)},$$slots:{default:!0}});var d=g(i,2);{var k=u=>{var D=Oe(),v=E(D,!0);y(D),z(()=>G(v,a(c))),n(u,D)};N(d,u=>{a(c)&&u(k)})}n(C,b)};N(_,C=>{ne(j().name)?C(S):C(x,!1)})}y(w),n(P,w),B()}var Ge=p('<div class="data font-mono svelte-115hohv"> </div>'),Me=p('<div class="data svelte-115hohv"> </div>'),Ke=p('<div class="header svelte-115hohv"><!> <!></div>'),Ve=p("<div><!></div>"),We=p("<div><!></div>"),Ye=p("<div><!> <!></div>");function Be(P,$){Y($,!0);let j=M($,"attrs",15),s=M($,"scope",31,()=>r({})),c=M($,"onSave",15),h=m(void 0);const w=["Config","Delete"];let _=m(r(w[0]));const S=200,x=S/2;function C(){t(h,!1),c()()}te(P,{get show(){return a(h)},set show(b){t(h,r(b))},header:b=>{var i=Ke(),d=E(i);ce(d,{text:"Scope ID",children:(u,D)=>{var v=Ge(),f=E(v,!0);y(v),z(()=>G(f,s().id)),n(u,v)},$$slots:{default:!0}});var k=g(d,2);ce(k,{text:"Scope Name",children:(u,D)=>{var v=Me(),f=E(v,!0);y(v),z(()=>G(f,s().name)),n(u,v)},$$slots:{default:!0}}),y(i),n(b,i)},body:b=>{var i=Ye(),d=E(i);ye(d,{labels:w,get selected(){return a(_)},set selected(v){t(_,r(v))}});var k=g(d,2);{var u=v=>{var f=Ve(),O=E(f);Pe(O,{get attrs(){return j()},set attrs(e){j(e)},get scope(){return s()},set scope(e){s(e)},get onSave(){return c()},set onSave(e){c(e)}}),y(f),U(5,f,()=>H,()=>({delay:x,duration:S})),U(6,f,()=>H,()=>({duration:S})),n(v,f)},D=v=>{var f=me(),O=X(f);{var e=l=>{var I=We(),o=E(I);ze(o,{get scope(){return s()},onSave:C}),y(I),U(5,I,()=>H,()=>({delay:x,duration:S})),U(6,I,()=>H,()=>({duration:S})),n(l,I)};N(O,l=>{a(_)==="Delete"&&l(e)},!0)}n(v,f)};N(k,v=>{a(_)==="Config"?v(u):v(D,!1)})}y(i),n(b,i)},$$slots:{header:!0,body:!0}}),B()}var Xe=p('<div class="svelte-15sc49d"><!></div>'),Fe=p(' <div class="content"><!> <!> <div id="scopes" class="svelte-15sc49d"></div> <!> <div style="height: 20px"></div></div>',1);function Qe(P,$){Y($,!0);let j=m(r([])),s=m(""),c=m(r([])),h=m(r([])),w=m(r([])),_=m(""),S=[{label:"Name",callback:(e,l)=>e.name.toLowerCase().includes(l.toLowerCase())},{label:"ID",callback:(e,l)=>e.id.toLowerCase().includes(l.toLowerCase())}],x=[{label:"Name",callback:(e,l)=>e.name.localeCompare(l.name)},{label:"ID",callback:(e,l)=>e.id.localeCompare(l.id)}];Z(()=>{b(),C(),t(_,"")});async function C(){let e=await ge();if(!e.ok)t(s,"Error fetching attributes: "+e.body.message);else{let l=await e.json();t(j,r([...l.values]))}}async function b(){let e=await we(),l=await e.json();e.ok?t(c,r([...l])):t(s,r(l.message))}function i(){b()}q();var d=Fe(),k=X(d),u=g(k),D=E(u);be(D,{get items(){return a(c)},searchOptions:S,orderOptions:x,get resItems(){return a(h)},set resItems(e){t(h,r(e))},get search(){return a(_)},set search(e){t(_,r(e))}});var v=g(D,2);De(v,{onSave:i});var f=g(v,2);ue(f,23,()=>a(w),e=>e.id,(e,l,I)=>{var o=Xe(),A=E(o);Be(A,{onSave:i,get attrs(){return a(j)},set attrs(T){t(j,r(T))},get scope(){return a(w)[a(I)]},set scope(T){a(w)[a(I)]=T}}),y(o),n(e,o)}),y(f);var O=g(f,2);$e(O,{get items(){return a(h)},set items(e){t(h,r(e))},get resItems(){return a(w)},set resItems(e){t(w,r(e))}}),q(2),y(u),z(()=>G(k,`${a(s)??""} `)),n(P,d),B()}function Ue(P){Qe(P,{})}export{Ue as component};
