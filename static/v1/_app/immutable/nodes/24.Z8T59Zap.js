import"../chunks/disclose-version.BDr9Qe-U.js";import"../chunks/legacy.Cdp_P06_.js";import{T as $,p as fa,o as pa,ad as W,ae as $a,Q,a as wa,j as a,af as C,g as e,$ as ja,R as n,ag as i,U as g,W as d,V as oe,X as _a,ah as Pe}from"../chunks/index-client.CzqVbBUo.js";import{s as R,e as We}from"../chunks/render.DOFZNw8l.js";import{i as _}from"../chunks/if.BnegfJmL.js";import{e as ya}from"../chunks/OptionSelect.CIygkAfc.js";import{a as o,n as ba,b as h,t as ce,c as Ee}from"../chunks/template.C3U8HW1x.js";import{h as ka}from"../chunks/svelte-head.BSz900xL.js";import{s as N,B as ue,t as xa,b as Ma}from"../chunks/Button.65naIT6w.js";import{i as za}from"../chunks/lifecycle.BPrHSQsT.js";import{g as Ca,H as Ra,I as Ua,J as La,o as Ta,K as Ia,M as Va,n as He,N as Na,O as qa,_ as Ba,P as Aa,Q as Fa,S as Ka,U as Se,e as De,V as Oa}from"../chunks/dataFetching.BAMt2mQp.js";import{I as Pa,c as Wa,a as Ea,y as Ha}from"../chunks/Input.BRe7i--g.js";import{W as Sa}from"../chunks/WebauthnRequest.CgI5hSPb.js";import{P as Da}from"../chunks/PasswordInput.BNTSsZot.js";import{L as Qa}from"../chunks/LangSelector.Co2kZP41.js";import{p as ke}from"../chunks/props.C_MHtC74.js";import{M as Xa,C as Ga}from"../chunks/ContentCenter.D3vmDIv7.js";import{u as Ya}from"../chunks/i18n.svelte.C_qSL0ZA.js";import{T as X}from"../chunks/Template.CJON1Uel.js";var Za=ba('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg>');function Ja(me,G){let c=ke(G,"color",3,"var(--col-text)"),y=ke(G,"opacity",3,.9),E=ke(G,"width",3,24);var w=Za();N(w,"stroke-width",2),$(()=>{N(w,"width",E()),N(w,"color",c()),N(w,"opacity",y())}),o(me,w)}var et=h('<img alt="No Logo Available">'),at=h('<a class="home svelte-1ljcjf3"><!></a>'),tt=h('<div role="button" tabindex="0" class="forgotten svelte-1ljcjf3"> </div>'),rt=h("<!> <!>",1),st=h('<div class="btn flex-col svelte-1ljcjf3"><!></div>'),lt=h('<div class="btn flex-col svelte-1ljcjf3"><!></div>'),it=h("<!> <!> <!>",1),ot=h('<div class="flex-inline svelte-1ljcjf3"><img alt="" width="20" height="20"> <span class="providerName svelte-1ljcjf3"> </span></div>'),ct=h('<div class="providers flex-col svelte-1ljcjf3"></div>'),nt=h('<div class="errMsg errMsgApi svelte-1ljcjf3"> </div>'),vt=h('<div class="success svelte-1ljcjf3"> </div>'),dt=h('<a class="reg svelte-1ljcjf3" target="_blank"> </a>'),ut=h('<a class="reg svelte-1ljcjf3" href="/auth/v1/users/register" target="_blank"> </a>'),mt=h('<div class="btn flex-col svelte-1ljcjf3"><!></div>'),gt=h('<div class="container svelte-1ljcjf3"><div class="head svelte-1ljcjf3"><div class="logo svelte-1ljcjf3"><!></div> <!></div> <div class="name svelte-1ljcjf3"><h2> </h2></div> <!> <!> <!> <!> <!> <!> <!></div> <!>',1),ht=h("<!> <!> <!> <!> <!> <!> <!>",1);function ft(me,G){fa(G,!1);let c=Ya(),y=i(),E=i(""),w=i(""),H=i(""),Y=i(""),Z=i([]),J=i(),ee=i(),ae=i(),te=i(),ge=i(!1),S=i(),ne=i([]),re=i(),q=i(!1),b=i(""),B=i(""),se=i(""),A=i(!1),F=i(!1),ve=i(!1),de=i(!1),le=i(!1),K=i(!1),xe="",he=i(!1),l=i({email:"",password:""}),k=i({}),fe=i({});pa(async()=>{const t=Ca();a(y,t.client_id),a(H,t.redirect_uri),a(Y,t.nonce),a(Z,t.scope.split(" ")),a(ee,t.state),a(ae,t.code_challenge),a(te,t.code_challenge_method),t.login_hint&&C(l,e(l).email=t.login_hint)});function Me(){a(b,""),a(ve,!0),C(l,e(l).password="")}async function pe(){a(b,"");try{await e(fe).validate(e(l),{abortEarly:!1}),a(k,{})}catch(p){a(k,He(p));return}const t={email:e(l).email,client_id:e(y),redirect_uri:e(H),state:e(ee),code_challenge:e(ae),code_challenge_method:e(te),nonce:e(Y),scopes:e(Z)};if(e(A)&&e(l).email!==e(S)){if(!e(l).password){C(k,e(k).password=c.passwordRequired);return}if(e(l).password.length>256){C(k,e(k).password="max 256");return}t.password=e(l).password}a(q,!0);let f=await Na(t);await ze(f)}async function ze(t){if(t.status===202)window.location.replace(t.headers.get("location"));else if(t.status===200)a(b,""),a(re,await t.json());else if(t.status===406)a(b,c.authorize.clientForceMfa),a(F,!0);else if(t.status===429){let f=Number.parseInt(t.headers.get("x-retry-not-before")),p=qa(f),x=f*1e3-new Date().getTime();a(K,!0),a(b,`${c.authorize.http429} ${p}`),C(l,e(l).email=""),C(l,e(l).password=""),a(A,!1),setTimeout(()=>{a(K,!1),a(b,"")},x)}else e(A)?(a(b,c.authorize.invalidCredentials),a(de,!0)):(a(A,!0),xe=e(l).email);a(q,!1)}function Qe(){e(A)&&xe!==e(l).email&&(a(A,!1),C(l,e(l).password=""),a(b,""))}function Xe(t){Ba(64,(f,{challenge:p,verifier:x})=>{f||(localStorage.setItem(Aa,x),Ge(t,p))})}async function Ge(t,f){let p={email:e(l).email||null,client_id:e(y),redirect_uri:e(H),scopes:e(Z),state:e(ee),nonce:e(Y),code_challenge:e(ae),code_challenge_method:e(te),provider_id:t,pkce_challenge:f},x=await Fa(p);if(x.ok){const D=await x.text();Ka(D),window.location.href=x.headers.get("location")}else{let D=await x.json();a(b,D.message)}}function Ye(){a(re,void 0)}function Ze(t){t&&window.location.replace(t.loc)}async function Je(){try{await e(fe).validate(e(l),{abortEarly:!1}),a(k,{})}catch(p){a(k,He(p));return}let t={email:e(l).email};e(w)&&(t.redirect_uri=encodeURI(e(w))),a(q,!0);let f=await Oa(t);if(f.ok)a(le,!0);else{let p=await f.json();a(b,p.message)}a(q,!1)}W(()=>Ha,()=>{c&&a(fe,Wa().shape({email:Ea().required(c.authorize.emailRequired).email(c.authorize.emailBadFormat)}))}),W(()=>e(B),()=>{var t;e(B)&&(e(B)==="Refresh"?a(ge,!0):(t=e(B))!=null&&t.startsWith("MfaLogin ")&&a(S,e(B).replace("MfaLogin ","")))}),W(()=>(e(ge),e(y),e(H),e(ee),e(ae),e(te),e(Y),e(Z),Se),()=>{var t,f;if(e(ge)&&((t=e(y))==null?void 0:t.length)>0&&((f=e(H))==null?void 0:f.length)>0){a(q,!0);const p={client_id:e(y),redirect_uri:e(H),state:e(ee),code_challenge:e(ae),code_challenge_method:e(te),nonce:e(Y),scopes:e(Z)};_a().then(()=>Se(p).then(x=>ze(x)))}}),W(()=>e(S),()=>{e(S)&&C(l,e(l).email=e(S))}),W(()=>e(le),()=>{e(le)&&setTimeout(()=>{a(le,!1),a(ve,!1),a(de,!1)},3e3)}),W(()=>e(J),()=>{e(J)&&e(J).focus()}),W(()=>(e(se),De),()=>{e(se)&&De(e(se))}),$a(),za();var Ce=ht();ka(t=>{$(()=>ja.title=`Login ${(e(E)||e(y))??""}`)});var Re=Q(Ce);X(Re,{id:Ra,get value(){return e(ne)},set value(t){a(ne,t)},$$legacy:!0});var Ue=n(Re,2);X(Ue,{id:Ua,get value(){return e(E)},set value(t){a(E,t)},$$legacy:!0});var Le=n(Ue,2);X(Le,{id:La,get value(){return e(w)},set value(t){a(w,t)},$$legacy:!0});var Te=n(Le,2);X(Te,{id:Ta,get value(){return e(se)},set value(t){a(se,t)},$$legacy:!0});var Ie=n(Te,2);X(Ie,{id:Ia,get value(){return e(B)},set value(t){a(B,t)},$$legacy:!0});var Ve=n(Ie,2);X(Ve,{id:Va,get value(){return e(he)},set value(t){a(he,t)},$$legacy:!0});var ea=n(Ve,2);Xa(ea,{children:(t,f)=>{Ga(t,{children:(p,x)=>{var D=gt(),$e=Q(D),we=g($e),je=g(we),aa=g(je);{var ta=r=>{var s=et();$(()=>N(s,"src",`/auth/v1/clients/${e(y)}/logo`)),o(r,s)};_(aa,r=>{e(y)&&r(ta)})}d(je);var ra=n(je,2);{var sa=r=>{var s=at(),u=g(s);Ja(u,{opacity:.5}),d(s),$(()=>N(s,"href",e(w))),o(r,s)};_(ra,r=>{e(w)&&r(sa)})}d(we);var _e=n(we,2),Ne=g(_e),la=g(Ne,!0);d(Ne),d(_e);var qe=n(_e,2);{var ia=r=>{Sa(r,{t:c,onSuccess:Ze,onError:Ye,get data(){return e(re)},set data(s){a(re,s)},$$legacy:!0})};_(qe,r=>{e(re)&&r(ia)})}var Be=n(qe,2);{var oa=r=>{var s=it(),u=Q(s),L=Pe(()=>e(K)||e(F));Pa(u,{type:"email",name:"rauthyEmail",autocomplete:"email",get placeholder(){return c.common.email},get disabled(){return e(L)},get value(){return e(l).email},set value(m){C(l,e(l).email=m)},get error(){return e(k).email},set error(m){C(k,e(k).email=m)},$$events:{enter:pe,input:Qe},children:(m,I)=>{oe();var P=ce();$(()=>R(P,c.common.email.toUpperCase())),o(m,P)},$$slots:{default:!0},$$legacy:!0});var O=n(u,2);{var M=m=>{var I=rt(),P=Q(I),ye=Pe(()=>e(K)||e(F));Da(P,{name:"rauthyPassword",get error(){return e(k).password},autocomplete:"current-password",get placeholder(){return c.common.password},get disabled(){return e(ye)},get bindThis(){return e(J)},set bindThis(v){a(J,v)},get value(){return e(l).password},set value(v){C(l,e(l).password=v)},$$events:{enter:pe},children:(v,z)=>{oe();var U=ce();$(()=>R(U,c.common.password.toUpperCase())),o(v,U)},$$slots:{default:!0},$$legacy:!0});var be=n(P,2);{var V=v=>{var z=tt(),U=g(z,!0);d(z),$(()=>R(U,c.authorize.passwordForgotten)),xa(7,z,()=>Ma),We("click",z,Me),We("keypress",z,Me),o(v,z)};_(be,v=>{e(de)&&!e(K)&&v(V)})}o(m,I)};_(O,m=>{e(A)&&e(S)!==e(l).email&&!e(ve)&&m(M)})}var j=n(O,2);{var T=m=>{var I=Ee(),P=Q(I);{var ye=V=>{var v=st(),z=g(v);ue(z,{$$events:{click:Je},children:(U,ha)=>{oe();var ie=ce();$(()=>R(ie,c.authorize.passwordRequest)),o(U,ie)},$$slots:{default:!0}}),d(v),o(V,v)},be=V=>{var v=lt(),z=g(v);ue(z,{get isLoading(){return e(q)},set isLoading(U){a(q,U)},$$events:{click:pe},children:(U,ha)=>{oe();var ie=ce();$(()=>R(ie,c.authorize.login)),o(U,ie)},$$slots:{default:!0},$$legacy:!0}),d(v),o(V,v)};_(P,V=>{e(ve)?V(ye):V(be,!1)})}o(m,I)};_(j,m=>{!e(K)&&!e(F)&&m(T)})}o(r,s)};_(Be,r=>{e(F)||r(oa)})}var Ae=n(Be,2);{var ca=r=>{var s=ct();ya(s,5,()=>e(ne),u=>u.id,(u,L)=>{ue(u,{level:3,$$events:{click:()=>Xe(e(L).id)},children:(O,M)=>{var j=ot(),T=g(j),m=n(T,2),I=g(m,!0);d(m),d(j),$(()=>{N(T,"src",`/auth/v1/providers/${e(L).id}/img`),R(I,e(L).name)}),o(O,j)},$$slots:{default:!0}})}),d(s),o(r,s)};_(Ae,r=>{e(ne)&&r(ca)})}var Fe=n(Ae,2);{var na=r=>{var s=nt(),u=g(s,!0);d(s),$(()=>R(u,e(b))),o(r,s)};_(Fe,r=>{e(b)&&r(na)})}var Ke=n(Fe,2);{var va=r=>{var s=vt(),u=g(s,!0);d(s),$(()=>R(u,c.authorize.emailSentMsg)),o(r,s)};_(Ke,r=>{e(le)&&r(va)})}var Oe=n(Ke,2);{var da=r=>{var s=Ee(),u=Q(s);{var L=M=>{var j=dt(),T=g(j,!0);d(j),$(()=>{N(j,"href",`/auth/v1/users/register?redirect_uri=${e(w)??""}`),R(T,c.authorize.signUp)}),o(M,j)},O=M=>{var j=ut(),T=g(j,!0);d(j),$(()=>R(T,c.authorize.signUp)),o(M,j)};_(u,M=>{e(w)?M(L):M(O,!1)})}o(r,s)};_(Oe,r=>{e(he)&&!e(F)&&!e(de)&&!e(K)&&r(da)})}var ua=n(Oe,2);{var ma=r=>{var s=mt(),u=g(s);ue(u,{$$events:{click:()=>window.location.href="/auth/v1/account"},children:(L,O)=>{oe();var M=ce("ACCOUNT");o(L,M)},$$slots:{default:!0}}),d(s),o(r,s)};_(ua,r=>{e(F)&&r(ma)})}d($e);var ga=n($e,2);Qa(ga,{absolute:!0}),$(()=>R(la,e(E)||e(y))),o(p,D)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(me,Ce),wa()}export{ft as component};
