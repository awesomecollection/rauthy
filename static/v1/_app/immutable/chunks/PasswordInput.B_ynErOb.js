import"./disclose-version.BDr9Qe-U.js";import{a6 as y,p as aa,aw as ra,a7 as l,n as oa,a9 as n,a5 as k,a as ta}from"./index-client.Bsb9hq-M.js";import{d as ea,e as I,s as sa}from"./render.Cl_nSOQQ.js";import{i as V}from"./if.Mw_hWmq0.js";import{a as u,n as _,t as z}from"./template.D54H5ZkF.js";import{s as ia}from"./snippet.DdpBggvk.js";import{a as e,r as la,s as w,h as na,b as da,c as va}from"./index.DiuQmtU3.js";import{b as ca}from"./this.C8ORjxiC.js";import{p as o,r as pa}from"./props.CcMnSFiY.js";import{g as ha}from"./Input.BHI3aq7I.js";var ua=_('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"></path></svg>');function W(c,a){let d=o(a,"opacity",3,.9),v=o(a,"width",3,20);var s=ua();e(s,"stroke-width",2),y(()=>{e(s,"width",v()),e(s,"opacity",d())}),u(c,s)}var wa=_('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path></svg>');function P(c,a){let d=o(a,"color",3,"var(--col-err)"),v=o(a,"opacity",3,.9),s=o(a,"width",3,24);var t=wa();e(t,"stroke-width",2),y(()=>{e(t,"width",s()),e(t,"color",d()),e(t,"opacity",v())}),u(c,t)}var ma=_('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>');function q(c,a){let d=o(a,"color",3,"var(--col-ok)"),v=o(a,"opacity",3,.9),s=o(a,"width",3,24);var t=ma();e(t,"stroke-width",2),y(()=>{e(t,"width",s()),e(t,"color",d()),e(t,"opacity",v())}),u(c,t)}var ba=z('<div role="button" tabindex="0" class="btn clip svelte-yuw12p"><!></div>'),ya=z('<div class="rel svelte-yuw12p"><div class="err font-label svelte-yuw12p"> </div></div>'),fa=z('<div class="container svelte-yuw12p"><div class="label svelte-yuw12p"><div class="labelInner font-label noselect svelte-yuw12p"><label><!></label></div></div> <input> <div class="rel svelte-yuw12p"><!> <div role="button" tabindex="0" class="btn show svelte-yuw12p"><!></div></div> <!></div>');function ka(c,a){aa(a,!0);let d=o(a,"bindThis",15,void 0),v=o(a,"name",19,ha),s=o(a,"disabled",3,!1),t=o(a,"error",3,""),B=o(a,"showCopy",3,!1),g=o(a,"value",15,""),x=o(a,"width",3,"250px"),D=o(a,"maxWidth",3,"inherit"),F=o(a,"autocomplete",3,"current-password"),m=o(a,"type",15,"password"),J=pa(a,["$$slots","$$events","$$legacy","bindThis","name","disabled","error","showCopy","value","width","maxWidth","autocomplete","type","children"]);const M=ra();function K(r){r.code==="Enter"?M("enter",!0):M("keypress",!0)}function O(){M("blur",!0)}function H(){navigator.clipboard.writeText(g())}function L(){m()==="password"?m("text"):m("password")}function R(r){g(r.target.value)}var b=fa(),C=l(b),$=l(C),j=l($),S=l(j);ia(S,()=>a.children??oa),n(j),n($),n(C);var p=k(C,2);la(p);let T;ca(p,r=>d(r),()=>d());var A=k(p,2),E=l(A);{var X=r=>{var i=ba();i.__click=H;var h=l(i);W(h,{}),n(i),I("keypress",i,H),u(r,i)};V(E,r=>{B()&&r(X)})}var f=k(E,2);f.__click=L;var Y=l(f);{var Z=r=>{P(r,{width:22})},G=r=>{q(r,{width:22})};V(Y,r=>{m()==="password"?r(Z):r(G,!1)})}n(f),n(A);var N=k(A,2);{var Q=r=>{var i=ya(),h=l(i),U=l(h,!0);n(h),n(i),y(()=>{w(h,"width",x()),sa(U,t())}),da(7,h,()=>va,()=>({duration:250})),u(r,i)};V(N,r=>{t()&&r(Q)})}n(b),y(()=>{w(b,"width",`calc(${x()??""} + 12px)`),w(b,"max-width",D()),w($,"background",s()?"hsla(var(--bg-high) / .25)":"hsl(var(--bg))"),e(j,"for",v()),T=na(p,T,{type:m(),name:v(),disabled:s(),value:g(),autocomplete:F(),...J,oninput:R,onkeypress:K,onblur:O},"svelte-yuw12p"),w(p,"width",x()),w(p,"padding-right",B()?"45px":"25px")}),I("keypress",f,L),u(c,b),ta()}ea(["click"]);export{P as I,ka as P,q as a,W as b};
