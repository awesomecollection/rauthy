import"./disclose-version.BDr9Qe-U.js";import{a6 as y,p as aa,aw as ra,a7 as l,n as ea,a9 as n,a5 as k,a as ta}from"./index-client.Cqn5bTAA.js";import{d as oa,e as W,s as sa}from"./render.BxZ_8nPF.js";import{i as B}from"./if.CfO-_epY.js";import{a as h,n as V,t as _}from"./template.A7ni-K4i.js";import{s as ia}from"./snippet.YItZinX2.js";import{s as o,g as la,k as na,b as w,m as da,c as va,d as ca}from"./helpers.CZ9R9OcM.js";import{b as pa}from"./this.ETDJznD-.js";import{p as e,r as ua}from"./props.YICxVAwD.js";var ha=V('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"></path></svg>');function E(c,a){let d=e(a,"opacity",3,.9),v=e(a,"width",3,20);var s=ha();o(s,"stroke-width",2),y(()=>{o(s,"width",v()),o(s,"opacity",d())}),h(c,s)}var wa=V('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path></svg>');function P(c,a){let d=e(a,"color",3,"var(--col-err)"),v=e(a,"opacity",3,.9),s=e(a,"width",3,24);var t=wa();o(t,"stroke-width",2),y(()=>{o(t,"width",s()),o(t,"color",d()),o(t,"opacity",v())}),h(c,t)}var ma=V('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>');function q(c,a){let d=e(a,"color",3,"var(--col-ok)"),v=e(a,"opacity",3,.9),s=e(a,"width",3,24);var t=ma();o(t,"stroke-width",2),y(()=>{o(t,"width",s()),o(t,"color",d()),o(t,"opacity",v())}),h(c,t)}var ba=_('<div role="button" tabindex="0" class="btn clip svelte-yuw12p"><!></div>'),ya=_('<div class="rel svelte-yuw12p"><div class="err font-label svelte-yuw12p"> </div></div>'),fa=_('<div class="container svelte-yuw12p"><div class="label svelte-yuw12p"><div class="labelInner font-label noselect svelte-yuw12p"><label><!></label></div></div> <input> <div class="rel svelte-yuw12p"><!> <div role="button" tabindex="0" class="btn show svelte-yuw12p"><!></div></div> <!></div>');function ka(c,a){aa(a,!0);let d=e(a,"bindThis",15,void 0),v=e(a,"name",19,la),s=e(a,"disabled",3,!1),t=e(a,"error",3,""),z=e(a,"showCopy",3,!1),g=e(a,"value",15,""),x=e(a,"width",3,"250px"),D=e(a,"maxWidth",3,"inherit"),F=e(a,"autocomplete",3,"current-password"),m=e(a,"type",15,"password"),J=ua(a,["$$slots","$$events","$$legacy","bindThis","name","disabled","error","showCopy","value","width","maxWidth","autocomplete","type","children"]);const M=ra();function K(r){r.code==="Enter"?M("enter",!0):M("keypress",!0)}function O(){M("blur",!0)}function H(){navigator.clipboard.writeText(g())}function L(){m()==="password"?m("text"):m("password")}function R(r){g(r.target.value)}var b=fa(),C=l(b),$=l(C),j=l($),S=l(j);ia(S,()=>a.children??ea),n(j),n($),n(C);var p=k(C,2);na(p);let T;pa(p,r=>d(r),()=>d());var A=k(p,2),I=l(A);{var X=r=>{var i=ba();i.__click=H;var u=l(i);E(u,{}),n(i),W("keypress",i,H),h(r,i)};B(I,r=>{z()&&r(X)})}var f=k(I,2);f.__click=L;var Y=l(f);{var Z=r=>{P(r,{width:22})},G=r=>{q(r,{width:22})};B(Y,r=>{m()==="password"?r(Z):r(G,!1)})}n(f),n(A);var N=k(A,2);{var Q=r=>{var i=ya(),u=l(i),U=l(u,!0);n(u),n(i),y(()=>{w(u,"width",x()),sa(U,t())}),va(7,u,()=>ca,()=>({duration:250})),h(r,i)};B(N,r=>{t()&&r(Q)})}n(b),y(()=>{w(b,"width",`calc(${x()??""} + 12px)`),w(b,"max-width",D()),w($,"background",s()?"hsla(var(--bg-high) / .25)":"hsl(var(--bg))"),o(j,"for",v()),T=da(p,T,{type:m(),name:v(),disabled:s(),value:g(),autocomplete:F(),...J,oninput:R,onkeypress:K,onblur:O},"svelte-yuw12p"),w(p,"width",x()),w(p,"padding-right",z()?"45px":"25px")}),W("keypress",f,L),h(c,b),ta()}oa(["click"]);export{P as I,ka as P,q as a,E as b};
