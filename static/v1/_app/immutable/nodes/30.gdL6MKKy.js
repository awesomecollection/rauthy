import"../chunks/disclose-version.BDr9Qe-U.js";import"../chunks/legacy.DvmPJwhI.js";import{p as d,ap as m,a as f,aq as l}from"../chunks/index-client.Ds4XgiuL.js";import{h as _}from"../chunks/svelte-head.DUes13UE.js";import{i as u}from"../chunks/lifecycle.Bhf52L3V.js";import{c as w,d as h,s as g,e as k,f as v,h as j,R as y,j as C}from"../chunks/helpers.BTvs6bnN.js";import{g as L,a as R}from"../chunks/dataFetching.CfdKJRPX.js";import{u as i}from"../chunks/param.svelte.D0F_0zrI.js";function S(b,n){d(n,!1);let c=i("code"),p=i("state");m(async()=>{const a=new URLSearchParams;let t=y,o=p.get();o&&(o==="account"?t=C:o.startsWith("device")&&(t=`/auth/v1/${o}`));let s=c.get();if(!s){console.error("no `code` given");return}a.append("grant_type","authorization_code"),a.append("code",s),a.append("redirect_uri",t),a.append("client_id",w),a.append("code_verifier",h());let r=await L(a),e=await r.json();g(e.access_token),k(e.id_token),r=await R(e.access_token),e=await r.json(),v(e.csrf_token),j(),window.location.replace(t)}),u(),_(a=>{l.title="Callback"}),f()}export{S as component};
