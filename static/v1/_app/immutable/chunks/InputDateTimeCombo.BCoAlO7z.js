import"./disclose-version.BDr9Qe-U.js";import{t as O,p as Ye,i as L,_ as ne,g as o,a4 as ee,h as D,s as U,c as f,a as je,a9 as T,r as m}from"./index-client.CzvcfCLI.js";import{a as A,n as Ge,t as Y}from"./template.CQASMEo4.js";import{i as ye}from"./if.Dlf0zx3_.js";import{s as c,r as Ke}from"./class.DOSp4p8N.js";import{p as w}from"./proxy.CHyqegA9.js";import{p}from"./props.BRvF51YW.js";import{B as Qe}from"./Button.CjBmYviZ.js";import{d as Xe,e as de,s as ae}from"./render.BJBkrb2f.js";import{e as Ne,i as Re}from"./each.BtetwUOf.js";import{t as er,a as rr,s as $r}from"./index.CqGLefLa.js";import{b as tr}from"./input.mmO6A0Hj.js";import{b as Te}from"./this.BJO3DJPm.js";import{$ as nr,c as ar,d as qr,f as Ue,g as Sr,e as Ar,h as or,a as Be}from"./form.DXGq3I_7.js";import{u as Fe}from"./i18n.svelte.BgTCv98Z.js";import{P as ir,O as pe}from"./Options.BADoqzxk.js";import{I as Cr}from"./IconStop.CJzJMbxy.js";function He(r,e){return r-e*Math.floor(r/e)}const sr=1721426;function we(r,e,t,n){e=Oe(r,e);let a=e-1,i=-2;return t<=2?i=0:Me(e)&&(i=-1),sr-1+365*a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)+Math.floor((367*t-362)/12+i+n)}function Me(r){return r%4===0&&(r%100!==0||r%400===0)}function Oe(r,e){return r==="BC"?1-e:e}function Lr(r){let e="AD";return r<=0&&(e="BC",r=1-r),[e,r]}const Yr={standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]};class ke{fromJulianDay(e){let t=e,n=t-sr,a=Math.floor(n/146097),i=He(n,146097),l=Math.floor(i/36524),h=He(i,36524),v=Math.floor(h/1461),E=He(h,1461),j=Math.floor(E/365),M=a*400+l*100+v*4+j+(l!==4&&j!==4?1:0),[$,S]=Lr(M),F=t-we($,S,1,1),N=2;t<we($,S,3,1)?N=0:Me(S)&&(N=1);let H=Math.floor(((F+N)*12+373)/367),C=t-we($,S,H,1)+1;return new ie($,S,H,C)}toJulianDay(e){return we(e.era,e.year,e.month,e.day)}getDaysInMonth(e){return Yr[Me(e.year)?"leapyear":"standard"][e.month-1]}getMonthsInYear(e){return 12}getDaysInYear(e){return Me(e.year)?366:365}getYearsInEra(e){return 9999}getEras(){return["BC","AD"]}isInverseEra(e){return e.era==="BC"}balanceDate(e){e.year<=0&&(e.era=e.era==="BC"?"AD":"BC",e.year=1-e.year)}constructor(){this.identifier="gregory"}}function lr(r){r=Pe(r,new ke);let e=Oe(r.era,r.year);return ur(e,r.month,r.day,r.hour,r.minute,r.second,r.millisecond)}function ur(r,e,t,n,a,i,l){let h=new Date;return h.setUTCHours(n,a,i,l),h.setUTCFullYear(r,e-1,t),h.getTime()}function dr(r,e){if(e==="UTC")return 0;if(r>0&&e===nr())return new Date(r).getTimezoneOffset()*-6e4;let{year:t,month:n,day:a,hour:i,minute:l,second:h}=hr(r,e);return ur(t,n,a,i,l,h,0)-Math.floor(r/1e3)*1e3}const cr=new Map;function hr(r,e){let t=cr.get(e);t||(t=new Intl.DateTimeFormat("en-US",{timeZone:e,hour12:!1,era:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),cr.set(e,t));let n=t.formatToParts(new Date(r)),a={};for(let i of n)i.type!=="literal"&&(a[i.type]=i.value);return{year:a.era==="BC"||a.era==="B"?-a.year+1:+a.year,month:+a.month,day:+a.day,hour:a.hour==="24"?0:+a.hour,minute:+a.minute,second:+a.second}}const mr=864e5;function jr(r,e,t,n){return(t===n?[t]:[t,n]).filter(a=>Nr(r,e,a))}function Nr(r,e,t){let n=hr(t,e);return r.year===n.year&&r.month===n.month&&r.day===n.day&&r.hour===n.hour&&r.minute===n.minute&&r.second===n.second}function Rr(r,e,t="compatible"){let n=vr(r);if(e==="UTC")return lr(n);if(e===nr()&&t==="compatible"){n=Pe(n,new ke);let v=new Date,E=Oe(n.era,n.year);return v.setFullYear(E,n.month-1,n.day),v.setHours(n.hour,n.minute,n.second,n.millisecond),v.getTime()}let a=lr(n),i=dr(a-mr,e),l=dr(a+mr,e),h=jr(n,e,a-i,a-l);if(h.length===1)return h[0];if(h.length>1)switch(t){case"compatible":case"earlier":return h[0];case"later":return h[h.length-1];case"reject":throw new RangeError("Multiple possible absolute times found")}switch(t){case"earlier":return Math.min(a-i,a-l);case"compatible":case"later":return Math.max(a-i,a-l);case"reject":throw new RangeError("No such absolute time found")}}function fr(r,e,t="compatible"){return new Date(Rr(r,e,t))}function vr(r,e){let t=0,n=0,a=0,i=0;if("timeZone"in r)({hour:t,minute:n,second:a,millisecond:i}=r);else if("hour"in r&&!e)return r;return e&&({hour:t,minute:n,second:a,millisecond:i}=e),new Ie(r.calendar,r.era,r.year,r.month,r.day,t,n,a,i)}function Pe(r,e){if(r.calendar.identifier===e.identifier)return r;let t=e.fromJulianDay(r.calendar.toJulianDay(r)),n=r.copy();return n.calendar=e,n.era=t.era,n.year=t.year,n.month=t.month,n.day=t.day,oe(n),n}function Ve(r,e){let t=r.copy(),n="hour"in t?Or(t,e):0;Je(t,e.years||0),t.calendar.balanceYearMonth&&t.calendar.balanceYearMonth(t,r),t.month+=e.months||0,We(t),br(t),t.day+=(e.weeks||0)*7,t.day+=e.days||0,t.day+=n,Tr(t),t.calendar.balanceDate&&t.calendar.balanceDate(t),t.year<1&&(t.year=1,t.month=1,t.day=1);let a=t.calendar.getYearsInEra(t);if(t.year>a){var i,l;let v=(i=(l=t.calendar).isInverseEra)===null||i===void 0?void 0:i.call(l,t);t.year=a,t.month=v?1:t.calendar.getMonthsInYear(t),t.day=v?1:t.calendar.getDaysInMonth(t)}t.month<1&&(t.month=1,t.day=1);let h=t.calendar.getMonthsInYear(t);return t.month>h&&(t.month=h,t.day=t.calendar.getDaysInMonth(t)),t.day=Math.max(1,Math.min(t.calendar.getDaysInMonth(t),t.day)),t}function Je(r,e){var t,n;!((t=(n=r.calendar).isInverseEra)===null||t===void 0)&&t.call(n,r)&&(e=-e),r.year+=e}function We(r){for(;r.month<1;)Je(r,-1),r.month+=r.calendar.getMonthsInYear(r);let e=0;for(;r.month>(e=r.calendar.getMonthsInYear(r));)r.month-=e,Je(r,1)}function Tr(r){for(;r.day<1;)r.month--,We(r),r.day+=r.calendar.getDaysInMonth(r);for(;r.day>r.calendar.getDaysInMonth(r);)r.day-=r.calendar.getDaysInMonth(r),r.month++,We(r)}function br(r){r.month=Math.max(1,Math.min(r.calendar.getMonthsInYear(r),r.month)),r.day=Math.max(1,Math.min(r.calendar.getDaysInMonth(r),r.day))}function oe(r){r.calendar.constrainDate&&r.calendar.constrainDate(r),r.year=Math.max(1,Math.min(r.calendar.getYearsInEra(r),r.year)),br(r)}function Ur(r){let e={};for(let t in r)typeof r[t]=="number"&&(e[t]=-r[t]);return e}function gr(r,e){return Ve(r,Ur(e))}function yr(r,e){let t=r.copy();return e.era!=null&&(t.era=e.era),e.year!=null&&(t.year=e.year),e.month!=null&&(t.month=e.month),e.day!=null&&(t.day=e.day),oe(t),t}function Br(r,e){let t=r.copy();return e.hour!=null&&(t.hour=e.hour),e.minute!=null&&(t.minute=e.minute),e.second!=null&&(t.second=e.second),e.millisecond!=null&&(t.millisecond=e.millisecond),Hr(t),t}function Fr(r){r.second+=Math.floor(r.millisecond/1e3),r.millisecond=De(r.millisecond,1e3),r.minute+=Math.floor(r.second/60),r.second=De(r.second,60),r.hour+=Math.floor(r.minute/60),r.minute=De(r.minute,60);let e=Math.floor(r.hour/24);return r.hour=De(r.hour,24),e}function Hr(r){r.millisecond=Math.max(0,Math.min(r.millisecond,1e3)),r.second=Math.max(0,Math.min(r.second,59)),r.minute=Math.max(0,Math.min(r.minute,59)),r.hour=Math.max(0,Math.min(r.hour,23))}function De(r,e){let t=r%e;return t<0&&(t+=e),t}function Or(r,e){return r.hour+=e.hours||0,r.minute+=e.minutes||0,r.second+=e.seconds||0,r.millisecond+=e.milliseconds||0,Fr(r)}function pr(r,e,t,n){let a=r.copy();switch(e){case"era":{let h=r.calendar.getEras(),v=h.indexOf(r.era);if(v<0)throw new Error("Invalid era: "+r.era);v=K(v,t,0,h.length-1,n==null?void 0:n.round),a.era=h[v],oe(a);break}case"year":var i,l;!((i=(l=a.calendar).isInverseEra)===null||i===void 0)&&i.call(l,a)&&(t=-t),a.year=K(r.year,t,-1/0,9999,n==null?void 0:n.round),a.year===-1/0&&(a.year=1),a.calendar.balanceYearMonth&&a.calendar.balanceYearMonth(a,r);break;case"month":a.month=K(r.month,t,1,r.calendar.getMonthsInYear(r),n==null?void 0:n.round);break;case"day":a.day=K(r.day,t,1,r.calendar.getDaysInMonth(r),n==null?void 0:n.round);break;default:throw new Error("Unsupported field "+e)}return r.calendar.balanceDate&&r.calendar.balanceDate(a),oe(a),a}function Pr(r,e,t,n){let a=r.copy();switch(e){case"hour":{let i=r.hour,l=0,h=23;if((n==null?void 0:n.hourCycle)===12){let v=i>=12;l=v?12:0,h=v?23:11}a.hour=K(i,t,l,h,n==null?void 0:n.round);break}case"minute":a.minute=K(r.minute,t,0,59,n==null?void 0:n.round);break;case"second":a.second=K(r.second,t,0,59,n==null?void 0:n.round);break;case"millisecond":a.millisecond=K(r.millisecond,t,0,999,n==null?void 0:n.round);break;default:throw new Error("Unsupported field "+e)}return a}function K(r,e,t,n,a=!1){if(a){r+=Math.sign(e),r<t&&(r=n);let i=Math.abs(e);e>0?r=Math.ceil(r/i)*i:r=Math.floor(r/i)*i,r>n&&(r=t)}else r+=e,r<t?r=n-(t-r-1):r>n&&(r=t+(r-n-1));return r}const Vr=/^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/;function Q(r){let e=r.match(Vr);if(!e)throw new Error("Invalid ISO 8601 date string: "+r);let t=new ie(_e(e[1],0,9999),_e(e[2],1,12),1);return t.day=_e(e[3],0,t.calendar.getDaysInMonth(t)),t}function _e(r,e,t){let n=Number(r);if(n<e||n>t)throw new RangeError(`Value out of range: ${e} <= ${n} <= ${t}`);return n}function Jr(r){return`${String(r.hour).padStart(2,"0")}:${String(r.minute).padStart(2,"0")}:${String(r.second).padStart(2,"0")}${r.millisecond?String(r.millisecond/1e3).slice(1):""}`}function wr(r){let e=Pe(r,new ke),t;return e.era==="BC"?t=e.year===1?"0000":"-"+String(Math.abs(1-e.year)).padStart(6,"00"):t=String(e.year).padStart(4,"0"),`${t}-${String(e.month).padStart(2,"0")}-${String(e.day).padStart(2,"0")}`}function Wr(r){return`${wr(r)}T${Jr(r)}`}function _r(r,e){if(e.has(r))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Mr(r,e,t){_r(r,e),e.set(r,t)}function kr(r){let e=typeof r[0]=="object"?r.shift():new ke,t;if(typeof r[0]=="string")t=r.shift();else{let l=e.getEras();t=l[l.length-1]}let n=r.shift(),a=r.shift(),i=r.shift();return[e,t,n,a,i]}var zr=new WeakMap;class ie{copy(){return this.era?new ie(this.calendar,this.era,this.year,this.month,this.day):new ie(this.calendar,this.year,this.month,this.day)}add(e){return Ve(this,e)}subtract(e){return gr(this,e)}set(e){return yr(this,e)}cycle(e,t,n){return pr(this,e,t,n)}toDate(e){return fr(this,e)}toString(){return wr(this)}compare(e){return ar(this,e)}constructor(...e){Mr(this,zr,{writable:!0,value:void 0});let[t,n,a,i,l]=kr(e);this.calendar=t,this.era=n,this.year=a,this.month=i,this.day=l,oe(this)}}var Zr=new WeakMap;class Ie{copy(){return this.era?new Ie(this.calendar,this.era,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond):new Ie(this.calendar,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond)}add(e){return Ve(this,e)}subtract(e){return gr(this,e)}set(e){return yr(Br(this,e),e)}cycle(e,t,n){switch(e){case"era":case"year":case"month":case"day":return pr(this,e,t,n);default:return Pr(this,e,t,n)}}toDate(e,t){return fr(this,e,t)}toString(){return Wr(this)}compare(e){let t=ar(this,e);return t===0?qr(this,vr(e)):t}constructor(...e){Mr(this,Zr,{writable:!0,value:void 0});let[t,n,a,i,l]=kr(e);this.calendar=t,this.era=n,this.year=a,this.month=i,this.day=l,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,oe(this)}}var Gr=Ge(`<svg fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21
            7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25
            0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"></path></svg>`);function Kr(r,e){let t=p(e,"opacity",3,.9),n=p(e,"width",3,"1.5rem"),a=p(e,"color",3,"currentColor");var i=Gr();c(i,"stroke-width",2),O(()=>{c(i,"stroke",a()),c(i,"width",n()),c(i,"opacity",t())}),A(r,i)}function Qr(r,e){var t,n,a,i,l;switch(r.code){case"Enter":(t=e.onEnter)==null||t.call(e);break;case"ArrowUp":(n=e.onUp)==null||n.call(e);break;case"ArrowDown":(a=e.onDown)==null||a.call(e);break;case"ArrowLeft":(i=e.onLeft)==null||i.call(e);break;case"ArrowRight":(l=e.onRight)==null||l.call(e);break}}var Xr=Y('<div class="pointer"><!></div>'),et=Y('<div class="day font-label weekLabel svelte-1j6kibo"> </div>'),rt=Y('<time class="svelte-1j6kibo"> </time>'),tt=Y('<div class="day svelte-1j6kibo"><!></div>'),nt=Y('<div class="week svelte-1j6kibo"></div>'),at=Y('<div class="popup svelte-1j6kibo"><div class="flex space-between"><div><!></div> <div><!></div></div> <div class="week svelte-1j6kibo"></div> <div class="month svelte-1j6kibo"></div></div>'),ot=Y('<div class="error svelte-1j6kibo"> </div>'),it=Y('<div><div class="flex"><input type="date" step="any" class="svelte-1j6kibo"> <div class="relative"><div class="absolute patch svelte-1j6kibo"></div> <div class="absolute indicator svelte-1j6kibo"><!></div></div></div> <div class="label svelte-1j6kibo"><label class="font-label noselect svelte-1j6kibo"> </label> <!></div></div>');function st(r,e){Ye(e,!0);let t=p(e,"value",31,()=>w(Ue())),n=p(e,"label",3,""),a=p(e,"errMsg",3,""),i=p(e,"min",3,"1900-01-01"),l=p(e,"max",3,"2100-01-01");const h=Q(Ue(new Date)),v=h.toString();let E=Fe(),j=L(!1),M=L(void 0),$,S=L(void 0),F=L(void 0),N=L(void 0),H=T(()=>t()?Q(t()):h),C=T(()=>Q(i())),R=T(()=>Q(l())),B=L(w(ne(()=>E.common.months[o(H).month-1]))),P=T(()=>E.common.months.findIndex(d=>d===o(B))+1),W=L(w(ne(()=>o(H).year))),V=L(w([ne(()=>o(W))])),se=T(()=>Sr(o(H),E.lang));ee(()=>{let d=Number.parseInt(i().slice(0,4)),b=Number.parseInt(l().slice(0,4)),g=[];for(let x=d;x<=b;x++)g.push(x);D(V,w(g))}),ee(()=>{if(t()){let d=ne(()=>Q(t()));d=d.set({year:o(W),month:o(P)}),t(d.toString())}}),ee(()=>{o(N)&&t()&&requestAnimationFrame(()=>{var b,g,x;let d=((b=o(N))==null?void 0:b.getElementsByTagName("time"))||[];for(let y of d)if(y.getAttribute("datetime")===t()){(x=(g=y.parentElement)==null?void 0:g.parentElement)==null||x.focus();break}})});function xe(d){let b=Q(or(d));return b.compare(o(C))<0||b.compare(o(R))>0?!1:o(P)===d.month}function ce(){t(new ie(o(W),o(P),1).toString())}function he(d){d.preventDefault(),D(j,!0)}function re(d,b){var g;d.preventDefault(),t(b),(g=o(M))==null||g()}function _(d,b){var y,be;let g=Q(b),x=Q(b);switch(d){case"left":x=g.subtract({days:1});break;case"right":x=g.add({days:1});break;case"up":x=g.subtract({weeks:1});break;case"down":x=g.add({weeks:1});break}x.month!==g.month?Ar(x,E.lang)<4?(y=o(S))==null||y.focus():(be=o(F))==null||be.focus():t(x.toString())}function I(d){switch(d){case"open":t()||(t(v),requestAnimationFrame(()=>le()));break;case"closed":D(N,void 0);break}}function le(){D(j,!($!=null&&$.reportValidity()))}var te=it(),ue=f(te),k=f(ue);Ke(k),k.__keydown=[Qr,e],Te(k,d=>$=d,()=>$);var z=U(k,2),me=U(f(z),2),Ee=f(me);ir(Ee,{ariaLabel:"Show Popover Example",offsetLeft:"-7.5rem",offsetTop:"-.2rem",onToggle:I,btnInvisible:!0,lazy:!0,get close(){return o(M)},set close(d){D(M,w(d))},button:d=>{var b=Xr(),g=f(b);Kr(g,{color:"hsl(var(--text)",width:"1.2rem"}),m(b),O(()=>c(b,"title",n())),A(d,b)},children:(d,b)=>{var g=at(),x=f(g),y=f(x),be=f(y);pe(be,{get ariaLabel(){return E.common.month},get options(){return E.common.months},maxHeight:"13rem",borderless:!0,onRight:()=>{var q;return(q=o(F))==null?void 0:q.focus()},onDown:ce,get ref(){return o(S)},set ref(q){D(S,w(q))},get value(){return o(B)},set value(q){D(B,w(q))}}),m(y);var ze=U(y,2),Dr=f(ze);pe(Dr,{get ariaLabel(){return E.common.year},get options(){return o(V)},maxHeight:"13rem",borderless:!0,onLeft:()=>{var q;return(q=o(S))==null?void 0:q.focus()},onDown:ce,get ref(){return o(F)},set ref(q){D(F,w(q))},get value(){return o(W)},set value(q){D(W,w(q))}}),m(ze),m(x);var $e=U(x,2);Ne($e,21,()=>E.common.weekDaysShort,Re,(q,Se)=>{var X=et(),Ae=f(X,!0);m(X),O(()=>ae(Ae,o(Se))),A(q,X)}),m($e);var qe=U($e,2);Ne(qe,21,()=>o(se),Re,(q,Se)=>{var X=nt();Ne(X,21,()=>o(Se).days,Re,(Ae,ge)=>{var Ce=tt();const Z=T(()=>or(o(ge))),Ze=T(()=>xe(o(ge)));var Ir=f(Ce),xr=T(()=>!o(Ze));Qe(Ir,{onclick:Le=>re(Le,o(Z)),get isDisabled(){return o(xr)},invisible:!0,onLeft:()=>_("left",o(Z)),onRight:()=>_("right",o(Z)),onUp:()=>_("up",o(Z)),onDown:()=>_("down",o(Z)),children:(Le,wt)=>{var G=rt(),Er=f(G,!0);m(G),O(()=>{c(G,"data-today",o(Z)===v),c(G,"data-active",o(Ze)),c(G,"data-selected",o(Z)===t()),c(G,"data-weekend",o(ge).isWeekend),c(G,"datetime",o(Z)),ae(Er,o(ge).day)}),A(Le,G)},$$slots:{default:!0}}),m(Ce),A(Ae,Ce)}),m(X),A(q,X)}),m(qe),Te(qe,q=>D(N,q),()=>o(N)),m(g),A(d,g)},$$slots:{button:!0,default:!0}}),m(me),m(z),m(ue);var fe=U(ue,2),u=f(fe),s=f(u,!0);m(u);var J=U(u,2);{var ve=d=>{var b=ot(),g=f(b,!0);m(b),O(()=>ae(g,a())),er(3,b,()=>rr),A(d,b)};ye(J,d=>{o(j)&&d(ve)})}m(fe),m(te),O(()=>{c(k,"id",e.id),c(k,"name",e.name),c(k,"title",n()),c(k,"aria-label",n()),k.disabled=e.disabled,c(k,"aria-disabled",e.disabled),k.required=e.required,c(k,"aria-required",e.required||!1),c(k,"aria-invalid",o(j)),c(k,"min",i()),c(k,"max",l()),c(u,"for",e.id),c(u,"data-required",e.required),ae(s,n())}),de("invalid",k,he),de("blur",k,()=>le()),tr(k,t),A(r,te),je()}Xe(["keydown"]);var lt=Ge('<svg fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>');function ut(r,e){let t=p(e,"opacity",3,.9),n=p(e,"width",3,"1.5rem"),a=p(e,"color",3,"currentColor");var i=lt();c(i,"stroke-width",2),O(()=>{c(i,"stroke",a()),c(i,"width",n()),c(i,"opacity",t())}),A(r,i)}function dt(r,e){var t,n,a,i,l;switch(r.code){case"Enter":(t=e.onEnter)==null||t.call(e);break;case"ArrowUp":(n=e.onUp)==null||n.call(e);break;case"ArrowDown":(a=e.onDown)==null||a.call(e);break;case"ArrowLeft":(i=e.onLeft)==null||i.call(e);break;case"ArrowRight":(l=e.onRight)==null||l.call(e);break}}var ct=Y('<div class="pointer"><!></div>'),ht=Y('<div class="popup svelte-1orfulq"><div class="flex space-between"><div><!></div> <div class="colon svelte-1orfulq">:</div> <div><!></div></div></div>'),mt=Y('<div class="error svelte-1orfulq"> </div>'),ft=Y('<div><div class="flex"><input type="text" minlength="5" maxlength="5" class="svelte-1orfulq"> <div class="relative"><div class="absolute indicator svelte-1orfulq"><!></div></div></div> <div class="label svelte-1orfulq"><label class="font-label noselect svelte-1orfulq"> </label> <!></div></div>');function vt(r,e){Ye(e,!0);let t=p(e,"name",3,"time"),n=p(e,"value",31,()=>w(Be())),a=p(e,"label",3,""),i=p(e,"errMsg",3,""),l=p(e,"min",3,"00:00"),h=p(e,"max",3,"23:59"),v=Fe(),E=L(!1),j=L(void 0),M,$=L(void 0),S=L(void 0),F=T(()=>Number.parseInt(l().slice(0,2))),N=T(()=>Number.parseInt(h().slice(0,2))),H=T(()=>Number.parseInt(l().slice(3,5))),C=T(()=>Number.parseInt(h().slice(3,5))),R=L(w(ne(()=>n().slice(0,2)))),B=L(w(ne(()=>n().slice(3,5)))),P=L(!1),W=T(()=>{let u=[];for(let s=o(F);s<=o(N);s++)s<10?u.push("0"+s):u.push(""+s);return u}),V=T(()=>{let u=[];for(let s=o(H);s<=o(C);s++)s<10?u.push("0"+s):u.push(""+s);return u});ee(()=>{n().length===5&&(D(R,w(n().slice(0,2))),D(B,w(n().slice(3,5))))}),ee(()=>{o(P)&&n(`${o(R)}:${o(B)}`)}),ee(()=>{var u;o(B)&&((u=o(S))==null||u.focus())}),ee(()=>{var u;o(R)&&((u=o($))==null||u.focus())});function se(u){let s=u.currentTarget.value;s.length===1&&s.charAt(0)===":"&&(s="00:"),s.length===2&&(s.charAt(1)===":"?s=`0${s}:`:s+=":"),s=s.replace(/\D/g,""),s.length>=3&&(s=`${s.slice(0,2)}:${s.slice(2)}`),n(s)}function xe(u){u.preventDefault(),D(E,!0)}function ce(u){var s;switch(u){case"open":n().length!==5&&n(Be()),D(P,!0),(s=o($))==null||s.focus(),n()||requestAnimationFrame(()=>he());break;default:D(P,!1);break}}function he(){let u=Number.parseInt(o(R)),s=Number.parseInt(o(B));(u<o(F)||u>o(N)||s<o(H)||s>o(C))&&(M==null||M.setCustomValidity(i())),D(E,!(M!=null&&M.reportValidity()))}var re=ft(),_=f(re),I=f(_);Ke(I),I.__input=se,I.__keydown=[dt,e],Te(I,u=>M=u,()=>M);var le=U(I,2),te=f(le),ue=f(te);ir(ue,{ariaLabel:"Show Popover Example",offsetLeft:"-3.8rem",offsetTop:"-.2rem",onToggle:ce,btnInvisible:!0,get close(){return o(j)},set close(u){D(j,w(u))},button:u=>{var s=ct(),J=f(s);ut(J,{color:"hsl(var(--text)",width:"1.2rem"}),m(s),O(()=>c(s,"title",a())),A(u,s)},children:(u,s)=>{var J=ht(),ve=f(J),d=f(ve),b=f(d);pe(b,{get ariaLabel(){return v.common.hours},get options(){return o(W)},maxHeight:"13rem",borderless:!0,onRight:()=>{var y;return(y=o(S))==null?void 0:y.focus()},get ref(){return o($)},set ref(y){D($,w(y))},get value(){return o(R)},set value(y){D(R,w(y))}}),m(d);var g=U(d,4),x=f(g);pe(x,{get ariaLabel(){return v.common.minutes},get options(){return o(V)},maxHeight:"13rem",borderless:!0,onLeft:()=>{var y;return(y=o($))==null?void 0:y.focus()},get ref(){return o(S)},set ref(y){D(S,w(y))},get value(){return o(B)},set value(y){D(B,w(y))}}),m(g),m(ve),m(J),A(u,J)},$$slots:{button:!0,default:!0}}),m(te),m(le),m(_);var k=U(_,2),z=f(k),me=f(z,!0);m(z);var Ee=U(z,2);{var fe=u=>{var s=mt(),J=f(s,!0);m(s),O(()=>ae(J,i())),er(3,s,()=>rr),A(u,s)};ye(Ee,u=>{o(E)&&u(fe)})}m(k),m(re),O(()=>{$r(re,"width",e.width),c(I,"id",e.id),c(I,"name",t()),c(I,"title",i()),c(I,"aria-label",a()),I.disabled=e.disabled,c(I,"aria-disabled",e.disabled),I.required=e.required,c(I,"aria-required",e.required||!1),c(I,"aria-invalid",o(E)),c(z,"for",e.id),c(z,"data-required",e.required),ae(me,a())}),de("invalid",I,xe),de("focus",I,()=>M==null?void 0:M.select()),de("blur",I,()=>he()),tr(I,n),A(r,re),je()}Xe(["input","keydown"]);var bt=Y("<span><!></span>"),gt=Y('<div class="delete svelte-obgb62"><!></div>'),yt=Y('<div class="container svelte-obgb62"><div class="inputs svelte-obgb62"><!> <!></div> <!></div>');function pt(r,e){Ye(e,!0);let t=p(e,"value",31,()=>w(Ue())),n=p(e,"label",3,""),a=p(e,"errMsg",3,""),i=p(e,"min",3,"1900-01-01"),l=p(e,"max",3,"2100-01-01"),h=p(e,"timeValue",31,()=>w(Be())),v=Fe();function E(){t(""),h("--:--")}var j=yt(),M=f(j),$=f(M);st($,{get id(){return e.id},get name(){return e.name},get label(){return n()},get errMsg(){return a()},get disabled(){return e.disabled},get min(){return i()},get max(){return l()},get required(){return e.required},get onEnter(){return e.onEnter},get onLeft(){return e.onLeft},get onRight(){return e.onRight},get onUp(){return e.onUp},get onDown(){return e.onDown},get value(){return t()},set value(C){t(C)}});var S=U($,2);{var F=C=>{vt(C,{get name(){return e.timeName},get label(){return n()},get errMsg(){return e.timeErrMsg},get min(){return e.timeMin},get max(){return e.timeMax},get disabled(){return e.timeDisabled},get required(){return e.timeRequired},get value(){return h()},set value(R){h(R)}})};ye(S,C=>{e.withTime&&C(F)})}m(M);var N=U(M,2);{var H=C=>{var R=gt(),B=f(R);Qe(B,{get ariaLabel(){return v.common.delete},invisible:!0,onclick:E,children:(P,W)=>{var V=bt(),se=f(V);Cr(se,{color:"hsla(var(--error) / .8)",width:"1.2rem"}),m(V),O(()=>c(V,"title",v.common.delete)),A(P,V)},$$slots:{default:!0}}),m(R),A(C,R)};ye(N,C=>{e.withDelete&&C(H)})}m(j),A(r,j),je()}export{pt as I};
