import"../chunks/disclose-version.BDr9Qe-U.js";import"../chunks/legacy.DvmPJwhI.js";import{t as h,p as oe,o as L,c as k,r as S,a as ie,s as $,l as s,f as J,ar as A,m as t,ab as _e,ap as we,a6 as be}from"../chunks/index-client.Ds4XgiuL.js";import{s as D}from"../chunks/render.Bq2-eTRf.js";import{i as K}from"../chunks/if.Du7BDhAX.js";import{e as ae}from"../chunks/each.MnMr4iw5.js";import{a as p,n as xe,t as H,d as q,e as Y}from"../chunks/template.DXIK6jcH.js";import{p as n}from"../chunks/proxy.Bsf9UJbk.js";import{l as ee,r as Ce}from"../chunks/helpers.BTvs6bnN.js";import{B as N}from"../chunks/Button.C_IpvWJY.js";import{P as le}from"../chunks/Pagination.BQ2iTIIn.js";import{s as Q,t as ye}from"../chunks/class.Ik0ma2JO.js";import{a as Le}from"../chunks/index.L0FyJ7Re.js";import{C as De}from"../chunks/CheckIcon.DHJwv_kD.js";import{E as Ie}from"../chunks/Expandable.B-1X1J1g.js";import{T as R}from"../chunks/Tooltip.Dz7xpDMg.js";import{u as Pe}from"../chunks/i18n.svelte.CB3BpIrt.js";import{u as ne}from"../chunks/i18n_admin.svelte.B_OuiPaR.js";import{L as G}from"../chunks/LabeledValue.CfdJ335t.js";import{p as se}from"../chunks/props.CpDInb2-.js";import{c as de,f as ke}from"../chunks/fetch.DFmyLr06.js";import{C as Se}from"../chunks/ContentAdmin.COLOikfe.js";import{O as Te}from"../chunks/OrderSearchBar.B8p4xeqT.js";import{u as Oe}from"../chunks/session.svelte.QNLyPX7s.js";import{P as ze,f as Ee,a as Fe}from"../chunks/search.CG8-SBkc.js";var He=xe(`<svg fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25
            2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0
            0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5
            0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5
            0a48.667 48.667 0 0 0-7.5 0"></path></svg>`);function Ue(M,o){let I=se(o,"opacity",3,.9),x=se(o,"width",3,"1.5rem"),l=se(o,"color",3,"hsl(var(--error))");var f=He();Q(f,"stroke-width",2),h(()=>{Q(f,"stroke",l()),Q(f,"width",x()),Q(f,"opacity",I())}),p(M,f)}var je=H('<div class="uid font-mono svelte-79owtg"> </div>'),Ae=H('<div class="date svelte-79owtg"> </div>'),qe=H('<div class="ip font-mono svelte-79owtg"> </div>'),Me=H('<div class="trash svelte-79owtg"><!></div>'),Be=H('<div class="header svelte-79owtg"><!> <div class="headerRight svelte-79owtg"><!> <!> <!></div></div>'),Ge=H("<!> <!> <!> <!> <!> <!> <!> <!>",1),Ve=H('<div class="container svelte-79owtg"><!></div>');function me(M,o){oe(o,!0);let I=Pe(),x=ne(),l=L(n(I.common.copyToClip));function f(){o.session.remote_ip&&(navigator.clipboard.writeText(o.session.remote_ip),t(l,n(x.common.copiedToClip)),setTimeout(()=>{t(l,n(I.common.copyToClip))},3e3))}async function U(){let _=await de(`/auth/v1/sessions/id/${o.session.id}`);_.error?console.error(_.error):o.onDeleted(o.session.id)}var j=Ve(),V=k(j);Ie(V,{summary:_=>{var P=Be(),z=k(P);R(z,{text:"User ID",children:(y,T)=>{var v=je(),i=k(v,!0);S(v),h(()=>{Le(v,"margin-left",o.session.user_id?"":".5rem"),D(i,o.session.user_id)}),p(y,v)},$$slots:{default:!0}});var w=$(z,2),b=k(w);R(b,{get text(){return x.options.lastSeen},children:(y,T)=>{var v=Ae(),i=k(v,!0);h(()=>D(i,ee(o.session.last_seen))),S(v),p(y,v)},$$slots:{default:!0}});var E=$(b,2);N(E,{invisible:!0,onclick:f,children:(y,T)=>{var v=_e(()=>`IP - ${s(l)}`);R(y,{get text(){return s(v)},children:(i,g)=>{var e=qe(),c=k(e,!0);S(e),h(()=>D(c,o.session.remote_ip)),p(i,e)},$$slots:{default:!0}})},$$slots:{default:!0}});var C=$(E,2);N(C,{invisible:!0,onclick:U,children:(y,T)=>{R(y,{get text(){return I.common.delete},children:(v,i)=>{var g=Me(),e=k(g);Ue(e,{width:"1.2rem"}),S(g),p(v,g)},$$slots:{default:!0}})},$$slots:{default:!0}}),S(w),S(P),p(_,P)},details:_=>{var P=Ge(),z=J(P);G(z,{label:"Session ID",children:(i,g)=>{A();var e=q();h(()=>D(e,o.session.id)),p(i,e)},$$slots:{default:!0}});var w=$(z,2);G(w,{label:"User ID",children:(i,g)=>{A();var e=q();h(()=>D(e,o.session.user_id)),p(i,e)},$$slots:{default:!0}});var b=$(w,2);G(b,{get label(){return x.options.expires},children:(i,g)=>{A();var e=q();h(()=>D(e,ee(o.session.exp))),p(i,e)},$$slots:{default:!0}});var E=$(b,2);G(E,{get label(){return x.options.lastSeen},children:(i,g)=>{A();var e=q();h(()=>D(e,ee(o.session.last_seen))),p(i,e)},$$slots:{default:!0}});var C=$(E,2);G(C,{get label(){return x.options.state},children:(i,g)=>{A();var e=q();h(()=>D(e,o.session.state)),p(i,e)},$$slots:{default:!0}});var y=$(C,2);G(y,{label:"IP",children:(i,g)=>{A();var e=q();h(()=>D(e,o.session.remote_ip)),p(i,e)},$$slots:{default:!0}});var T=$(y,2);G(T,{label:"MFA",children:(i,g)=>{De(i,{get check(){return o.session.is_mfa}})},$$slots:{default:!0}});var v=$(T,2);N(v,{level:-1,onclick:U,children:(i,g)=>{A();var e=q();h(()=>D(e,I.common.delete)),p(i,e)},$$slots:{default:!0}}),p(_,P)},$$slots:{summary:!0,details:!0}}),S(j),h(()=>ye(j,"expired",o.session.exp<o.now)),p(M,j),ie()}var We=H('<div class="err"> </div>'),Ze=H('<div class="top svelte-1sljqh8"><!> <div class="btn svelte-1sljqh8"><!></div></div> <!> <div id="sessions"><!></div> <!>',1);function Je(M,o){oe(o,!0);let I=ne(),x=L(""),l=L(n([])),f=L(n([])),U=L(n([])),j=L(Date.now()/1e3),V=L(!1),_=L(void 0),P=L(n(ze)),z=L(!1),w=["User ID","Session ID","IP"],b=L(n(w[0])),E=L(""),C=[I.options.expires,I.options.lastSeen,"Session ID","User ID",I.options.state,"IP"];we(()=>{T("page_size="+s(P))}),be(()=>{let e=s(E).toLowerCase();s(V)?e.length<3?s(z)&&(T("page_size="+s(P)),t(z,!1)):y(e):e?s(b)===w[0]?t(f,n(s(l).filter(c=>{var r;return(r=c.user_id)==null?void 0:r.toLowerCase().includes(e)}))):s(b)===w[1]?t(f,n(s(l).filter(c=>c.id.toLowerCase().includes(e)))):s(b)===w[2]&&t(f,n(s(l).filter(c=>{var r;return(r=c.remote_ip)==null?void 0:r.toLowerCase().includes(e)}))):t(f,n(s(l)))});async function y(e){t(_,void 0),t(z,!0);let c;s(b)===w[0]?c="userid":s(b)===w[1]?c="sessionid":c="ip";let r=await Ee({ty:"session",idx:c,q:e});r.body?t(l,n(r.body)):console.error(r.error)}async function T(e){let c="/auth/v1/sessions";e&&(c+=`?${e}`);let r=await ke(c);return r.error?t(x,"Error fetching sessions: "+r.error.message):r.body&&(r.status===206?(t(V,!0),t(_,n(r.headers))):(t(V,!1),t(_,void 0)),t(l,n(r.body)),t(j,Date.now()/1e3)),[r.status,r.headers]}function v(e,c){let r=c==="up";e===C[0]?s(l).sort((a,m)=>r?a.exp-m.exp:m.exp-a.exp):e===C[1]?s(l).sort((a,m)=>r?a.last_seen-m.last_seen:m.last_seen-a.last_seen):e===C[2]?s(l).sort((a,m)=>r?a.id.localeCompare(m.id):m.id.localeCompare(a.id)):e===C[3]?s(l).sort((a,m)=>a.user_id&&m.user_id?r?a.user_id.localeCompare(m.user_id):m.user_id.localeCompare(a.user_id):a.user_id?r?-1:1:r?1:-1):e===C[4]?s(l).sort((a,m)=>r?a.state.localeCompare(m.state):m.state.localeCompare(a.state)):e===C[5]&&s(l).sort((a,m)=>a.remote_ip&&m.remote_ip?r?a.remote_ip.localeCompare(m.remote_ip):m.remote_ip.localeCompare(a.remote_ip):a.remote_ip?r?-1:1:r?1:-1)}function i(e){var c;t(l,n(s(l).filter(r=>r.id!==e))),((c=Oe("admin").get())==null?void 0:c.id)===e&&window.location.reload()}async function g(){let e=await de("/auth/v1/sessions");e.error?t(x,n(e.error.message)):Ce()}Se(M,{children:(e,c)=>{var r=Ze(),a=J(r),m=k(a);Te(m,{searchOptions:w,orderOptions:C,onChangeOrder:v,searchWidth:"min(25rem, calc(100dvw - 1rem))",get value(){return s(E)},set value(d){t(E,n(d))},get searchOption(){return s(b)},set searchOption(d){t(b,n(d))}});var re=$(m,2),ce=k(re);N(ce,{level:-1,onclick:g,children:(d,u)=>{A();var O=q();h(()=>D(O,I.sessions.invalidateAll)),p(d,O)},$$slots:{default:!0}}),S(re),S(a);var te=$(a,2);{var pe=d=>{var u=We(),O=k(u,!0);S(u),h(()=>D(O,s(x))),p(d,u)};K(te,d=>{s(x)&&d(pe)})}var X=$(te,2),ve=k(X);{var ue=d=>{var u=Y(),O=J(u);ae(O,17,()=>s(l),F=>F.id,(F,Z)=>{me(F,{get session(){return s(Z)},get now(){return s(j)},onDeleted:i})}),p(d,u)},fe=d=>{var u=Y(),O=J(u);ae(O,17,()=>s(U),F=>F.id,(F,Z)=>{me(F,{get session(){return s(Z)},get now(){return s(j)},onDeleted:i})}),p(d,u)};K(ve,d=>{s(_)?d(ue):d(fe,!1)})}S(X);var ge=$(X,2);{var he=d=>{Fe(d,{sspFetch:T,get itemsLength(){return s(l).length},get firstFetchHeaders(){return s(_)},get pageSize(){return s(P)},set pageSize(u){t(P,n(u))}})},$e=d=>{var u=Y(),O=J(u);{var F=W=>{le(W,{get items(){return s(l)},set items(B){t(l,n(B))},get itemsPaginated(){return s(U)},set itemsPaginated(B){t(U,n(B))}})},Z=W=>{le(W,{get items(){return s(f)},set items(B){t(f,n(B))},get itemsPaginated(){return s(U)},set itemsPaginated(B){t(U,n(B))}})};K(O,W=>{s(V)?W(F):W(Z,!1)},!0)}p(d,u)};K(ge,d=>{s(_)?d(he):d($e,!1)})}p(e,r)},$$slots:{default:!0}}),ie()}function Ke(M){Je(M,{})}export{Ke as component};
