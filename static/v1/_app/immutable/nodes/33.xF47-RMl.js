import"../chunks/disclose-version.BDr9Qe-U.js";import{p as ne,f as x,a as ce,t as c,aq as ue,y as i,z as s,s as r,A,ab as ve,c as u,r as v,ar as de}from"../chunks/index-client.Di99sPv0.js";import{s as m}from"../chunks/render.Cjc4CIr8.js";import{i as C}from"../chunks/if.DgeUjMU2.js";import{a as o,t as d,d as ge,e as pe}from"../chunks/template.BEKX6jgL.js";import{h as fe}from"../chunks/svelte-head.B7nS6fh6.js";import{r as he,b as be}from"../chunks/class.BCapn1bP.js";import{p as z}from"../chunks/proxy.BQ2dmY0t.js";import{B as _e}from"../chunks/Button.D-14suAe.js";import{x as $e}from"../chunks/helpers.D3KrX4pz.js";import{I as B}from"../chunks/Input.-lhBsjDF.js";import{L as we}from"../chunks/LangSelector.BxiGX-yu.js";import{M as ye}from"../chunks/Main.DKi4VjsM.js";import{C as Ne}from"../chunks/ContentCenter.BgFVBEpa.js";import{u as Te}from"../chunks/i18n.svelte.Bc6aINkd.js";import{T as xe}from"../chunks/Template.DiUnptz0.js";import{u as Ee}from"../chunks/param.svelte.CXpV4U96.js";import{T as qe}from"../chunks/ThemeSwitch._9IF3ElF.js";import{F as Ae}from"../chunks/Form.C0Yvca1O.js";import{u as Ce}from"../chunks/is_dev.svelte.DF22tCPV.js";import{a as K}from"../chunks/patterns.BDQXnG3O.js";import{b as Ie}from"../chunks/fetch.DxJS_Pk_.js";var Me=d(" <br> <code> </code>",1),Re=d('<input type="hidden" name="redirect_uri">'),Le=d('<div class="success svelte-cul8ah"> <br> </div>'),Pe=d('<div class="err svelte-cul8ah"> </div>'),Se=d('<!> <!> <!> <!> <div class="submit svelte-cul8ah"><!></div> <!>',1),Ue=d('<div class="container svelte-cul8ah"><div class="domainTxt svelte-cul8ah"><h1> </h1> <!></div> <!></div> <!> <!>',1),ke=d("<!> <!>",1);function ze(O,V){ne(V,!0);let e=Te(),X=Ce(),g=A(""),D=Ee("redirect_uri"),I=A(!1),l=A(""),M=A(!1),Y=ve(()=>X.get()?"/auth/v1/dev/register":"/auth/v1/users/register");async function Z(p,f){s(M,!1),s(l,"");let $=f.get("email"),R=f.get("given_name"),w=f.get("pow");if(!$||!R||!w){console.error("email, given_name, pow missing");return}if(i(g)&&!$.endsWith(i(g))){s(l,z(e.register.domainErr));return}let h={email:$,given_name:R,family_name:f.get("family_name")||void 0,pow:w,redirect_uri:f.get("redirect_uri")||void 0};s(I,!0);const b=await Ie(p.action,h);if(b.error){let _=b.error.message||"Error";_.includes("UNIQUE constraint")?s(l,"E-Mail is already registered"):s(l,z(_))}else s(l,""),s(M,!0),setTimeout(()=>{window.location.replace(h.redirect_uri||"/auth/v1/account")},3e3);s(I,!1)}var F=ke();fe(p=>{c(()=>ue.title=(e==null?void 0:e.register)||"Register")});var Q=x(F);xe(Q,{id:$e,get value(){return i(g)},set value(p){s(g,z(p))}});var H=r(Q,2);ye(H,{children:(p,f)=>{Ne(p,{children:($,R)=>{var w=Ue(),h=x(w),b=u(h),_=u(b),J=u(_,!0);v(_);var ee=r(_,2);{var re=y=>{var L=Me(),N=x(L,!0),T=r(N,2),E=r(T),q=u(E);v(E),c(()=>{m(N,e.register.domainRestricted),m(T,` ${e.register.domainAllowed??""} `),m(q,`@${i(g)??""}`)}),o(y,L)};C(ee,y=>{i(g)&&y(re)})}v(b);var ae=r(b,2);Ae(ae,{get action(){return i(Y)},onSubmit:Z,withPowAs:"pow",children:(y,L)=>{var N=Se(),T=x(N);{var E=a=>{var t=Re();he(t),c(()=>be(t,D.get())),o(a,t)};C(T,a=>{D.get()&&a(E)})}var q=r(T,2);B(q,{typ:"email",name:"email",autocomplete:"email",get label(){return e.common.email},get placeholder(){return e.common.email},required:!0});var j=r(q,2);B(j,{name:"given_name",autocomplete:"given-name",get label(){return e.account.givenName},get placeholder(){return e.account.givenName},pattern:K,required:!0});var G=r(j,2);B(G,{name:"family_name",autocomplete:"family-name",get label(){return e.account.familyName},get placeholder(){return e.account.familyName},pattern:K});var P=r(G,2),ie=u(P);_e(ie,{type:"submit",get isLoading(){return i(I)},children:(a,t)=>{de();var n=ge();c(()=>m(n,e.register.register)),o(a,n)},$$slots:{default:!0}}),v(P);var se=r(P,2);{var oe=a=>{var t=Le(),n=u(t,!0),S=r(n,2);v(t),c(()=>{m(n,e.register.success),m(S,` ${e.register.emailCheck??""}`)}),o(a,t)},me=a=>{var t=pe(),n=x(t);{var S=U=>{var k=Pe(),le=u(k,!0);v(k),c(()=>m(le,i(l))),o(U,k)};C(n,U=>{i(l)&&U(S)},!0)}o(a,t)};C(se,a=>{i(M)?a(oe):a(me,!1)})}o(y,N)},$$slots:{default:!0}}),v(h);var W=r(h,2);qe(W,{absolute:!0});var te=r(W,2);we(te,{absolute:!0}),c(()=>m(J,e.register.userReg)),o($,w)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(O,F),ce()}export{ze as component};
