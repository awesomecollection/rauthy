import"./disclose-version.BDr9Qe-U.js";import{c as b,s as R,r as p,t as U,p as Q,w as S,a4 as V,a as W,v as T,u as g,f as X,a9 as A}from"./index-client.ChFmlJin.js";import{a as f,t as x,e as Y}from"./template.DOaMAhd6.js";import{i as B}from"./if.DhkeN2Rc.js";import{s as Z}from"./snippet.BgXKOAqY.js";import{t as h,s as J,d as K}from"./class.CSTj5U-k.js";import{t as E,a as y,f as j}from"./index.BCW953sO.js";import{b as _}from"./this.DLQK4UbS.js";import{p as r,r as aa}from"./props.B17NqqFW.js";var ra=x('<div class="container svelte-1yqkxw6"><div class="loading svelte-1yqkxw6"><div class="loading-1 svelte-1yqkxw6"></div> <div class="loading-2 svelte-1yqkxw6"></div> <div class="loading-3 svelte-1yqkxw6"></div></div></div>');function z(L,a){let $=r(a,"background",3,!1),v=r(a,"color",3,"hsl(var(--text))"),u=r(a,"global",3,!1),k=r(a,"offset",3,0);var i=ra(),o=b(i),m=b(o),w=R(m,2),D=R(w,2);p(o),p(i),U(()=>{h(i,"global",u()),h(i,"local",!u()),h(i,"background",$()),J(o,"style",`margin-top: ${k()??""}px;`),y(m,"background",v()),y(w,"background",v()),y(D,"background",v())}),E(3,i,()=>j,()=>({duration:100})),f(L,i)}var ta=x('<div class="load svelte-148xxdi"><!></div>'),ia=x('<div class="font-label svelte-148xxdi"><!></div>'),oa=x("<button><!></button>");function sa(L,a){Q(a,!0);let $=r(a,"type",3,"button"),v=r(a,"role",3,"button"),u=r(a,"ref",15),k=r(a,"level",3,1),i=r(a,"isDisabled",3,!1),o=r(a,"isLoading",3,!1),m=r(a,"invisible",3,!1),w=r(a,"invisibleOutline",3,!1),D=aa(a,["$$slots","$$events","$$legacy","type","role","ref","id","ariaLabel","ariaControls","ariaCurrent","level","width","isDisabled","isLoading","invisible","invisibleOutline","popovertarget","popovertargetaction","onclick","onLeft","onRight","onUp","onDown","children"]),F=A(()=>{if(m())return"invisible";switch(k()){case-1:return"l1d";case-2:return"l2d";case-3:return"l3d";case 2:return"l2";case 3:return"l3";default:return"l1"}}),q=S(!o()),C=A(()=>i()||o());V(()=>{o()?setTimeout(()=>{T(q,!1)},120):setTimeout(()=>{T(q,!0)},120)});function G(){switch(k()){case-1:return"var(--btn-text)";case-2:return"hsl(var(--error))";case-3:return"hsl(var(--error))";case 2:return"hsl(var(--action))";case 3:return"hsl(var(--action))";default:return"var(--btn-text)"}}function H(t){var s,l,c,d,e;switch(t.code){case"Enter":(s=a.onclick)==null||s.call(a,t);break;case"ArrowLeft":(l=a.onLeft)==null||l.call(a);break;case"ArrowRight":(c=a.onRight)==null||c.call(a);break;case"ArrowUp":(d=a.onUp)==null||d.call(a);break;case"ArrowDown":(e=a.onDown)==null||e.call(a);break}}var n=oa();let O;var I=b(n);{var M=t=>{var s=ta(),l=b(s),c=A(G);z(l,{background:!1,get color(){return g(c)}}),p(s),f(t,s)},N=t=>{var s=Y(),l=X(s);{var c=d=>{var e=ia(),P=b(e);Z(P,()=>a.children),p(e),E(1,e,()=>j),f(d,e)};B(l,d=>{g(q)&&d(c)},!0)}f(t,s)};B(I,t=>{o()?t(M):t(N,!1)})}p(n),_(n,t=>u(t),()=>u()),U(()=>{O=K(n,O,{role:v(),type:$(),id:a.id,"aria-label":a.ariaLabel,"aria-controls":a.ariaControls,"aria-current":a.ariaCurrent,class:g(F),"data-isloading":o(),onclick:a.onclick,onkeydown:H,disabled:g(C),"aria-disabled":g(C),popovertarget:a.popovertarget,popovertargetaction:a.popovertargetaction,...D},"svelte-148xxdi"),h(n,"invisibleOutline",w()),y(n,"width",a.width)}),f(L,n),W()}export{sa as B,z as L};
