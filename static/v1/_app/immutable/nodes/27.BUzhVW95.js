import"../chunks/disclose-version.BDr9Qe-U.js";import{p as N,o as O,R as P,Q as m,a as U,j as o,g as c,P as $,n as H,$ as M,U as Y,V as Q,W as z,T as S}from"../chunks/index-client.CzqVbBUo.js";import{s as V}from"../chunks/render.DOFZNw8l.js";import{i as b,p}from"../chunks/if.BnegfJmL.js";import{a as s,b as g,c as R,t as X}from"../chunks/template.C3U8HW1x.js";import{h as D}from"../chunks/svelte-head.BSz900xL.js";import{g as I,W as J,X as K,Y as Z}from"../chunks/dataFetching.BAMt2mQp.js";import{W as q}from"../chunks/WebauthnRequest.CgI5hSPb.js";import{s as aa}from"../chunks/snippet.B82X2vfx.js";import{L as ea}from"../chunks/LangSelector.Co2kZP41.js";import{B as oa}from"../chunks/Button.65naIT6w.js";import{u as ta}from"../chunks/i18n.svelte.C_qSL0ZA.js";var sa=g("<div><h2>Cookies disabled</h2> <p>You need to enable Cookies.<br> Without them, a safe login cannot be executed.</p></div>"),ra=g("<noscript></noscript> <!>",1);function ia(j,k){N(k,!0);let x=$(!1),u=$(!1);O(()=>{o(u,p(navigator.cookieEnabled)),o(x,!0)});var t=ra(),n=P(m(t),2);{var y=h=>{var a=R(),C=m(a);{var e=i=>{var l=R(),W=m(l);aa(W,()=>k.children??H),s(i,l)},r=i=>{var l=sa();s(i,l)};b(C,i=>{c(u)?i(e):i(r,!1)})}s(h,a)};b(n,h=>{c(x)&&h(y)})}s(j,t),U()}var na=g('<div class="btn flex-col svelte-1dkpwyo"><!></div>'),ca=g('<div class="error svelte-1dkpwyo"> </div>'),la=g("<!> <!>",1);function va(j,k){N(k,!0);let x=ta(),u=$(!1),t=$(""),n=$(void 0);O(async()=>{const a=I();if(a.error){o(t,`${a.error}: ${a.error_description}`);return}let C={state:a.state,code:a.code,pkce_verifier:J(),xsrf_token:K()},e=await Z(C);if(e.status===202)window.location.replace(e.headers.get("location"));else if(e.status===200)o(t,""),o(n,p(await e.json()));else if(e.status===204)window.location.replace("/auth/v1/account");else if(e.status===403){let r=await e.json();console.error(r),o(t,p(r.message))}else if(e.status===406)o(t,p(x.authorize.clientForceMfa)),o(u,!0);else{let r=await e.text();o(t,`HTTP ${e.status}: ${r}`)}});function y(a){o(t,p(a||"ERROR")),o(n,void 0)}function h(a){a&&window.location.replace(a.loc)}D(a=>{M.title="Callback"}),ia(j,{children:(a,C)=>{var e=la(),r=m(e);{var i=v=>{q(v,{onSuccess:h,onError:y,get data(){return c(n)},set data(T){o(n,p(T))}})},l=v=>{var T=R(),A=m(T);{var B=d=>{var f=na(),_=Y(f);oa(_,{$$events:{click:()=>window.location.href="/auth/v1/account"},children:(L,E)=>{Q();var w=X("ACCOUNT LOGIN");s(L,w)},$$slots:{default:!0}}),z(f),s(d,f)},F=d=>{var f=R(),_=m(f);{var L=E=>{var w=ca(),G=Y(w,!0);z(w),S(()=>V(G,c(t))),s(E,w)};b(_,E=>{c(t)&&E(L)},!0)}s(d,f)};b(A,d=>{c(u)?d(B):d(F,!1)},!0)}s(v,T)};b(r,v=>{c(n)?v(i):v(l,!1)})}var W=P(r,2);ea(W,{absolute:!0}),s(a,e)},$$slots:{default:!0}}),U()}export{va as component};
