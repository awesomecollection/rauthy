import{ao as h,G as d,b as i,k as o}from"./runtime.BsghBUX9.js";import{a as f}from"./render.CTp9lacC.js";function k(a,l,n=l){var c=h();f(a,"input",u=>{var t=u?a.defaultValue:a.value;if(t=r(a)?e(t):t,n(t),c&&t!==(t=l())){var s=a.selectionStart,v=a.selectionEnd;a.value=t??"",v!==null&&(a.selectionStart=s,a.selectionEnd=Math.min(v,a.value.length))}}),(o&&a.defaultValue!==a.value||d(l)==null&&a.value)&&n(r(a)?e(a.value):a.value),i(()=>{var u=l();r(a)&&u===e(a.value)||a.type==="date"&&!u&&!a.value||u!==a.value&&(a.value=u??"")})}function m(a,l,n=l){f(a,"change",c=>{var u=c?a.defaultChecked:a.checked;n(u)}),(o&&a.defaultChecked!==a.checked||d(l)==null)&&n(a.checked),i(()=>{var c=l();a.checked=!!c})}function r(a){var l=a.type;return l==="number"||l==="range"}function e(a){return a===""?null:+a}export{m as a,k as b};
