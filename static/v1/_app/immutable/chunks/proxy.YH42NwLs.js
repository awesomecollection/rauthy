import{Z as b,_ as N,a0 as E,a1 as l,a2 as M,h as f,a3 as O,Y as s,g as m,E as Y,a4 as A,a5 as I,a6 as L}from"./runtime.BsghBUX9.js";function g(i,d=null,Z){if(typeof i!="object"||i===null||b in i)return i;const R=I(i);if(R!==N&&R!==E)return i;var n=new Map,c=L(i),P=l(0);c&&n.set("length",l(i.length));var p;return new Proxy(i,{defineProperty(v,r,e){(!("value"in e)||e.configurable===!1||e.enumerable===!1||e.writable===!1)&&M();var t=n.get(r);return t===void 0?(t=l(e.value),n.set(r,t)):f(t,g(e.value,p)),!0},deleteProperty(v,r){var e=n.get(r);if(e===void 0)r in v&&n.set(r,l(s));else{if(c&&typeof r=="string"){var t=n.get("length"),a=Number(r);Number.isInteger(a)&&a<t.v&&f(t,a)}f(e,s),x(P)}return!0},get(v,r,e){var u;if(r===b)return i;var t=n.get(r),a=r in v;if(t===void 0&&(!a||(u=O(v,r))!=null&&u.writable)&&(t=l(g(a?v[r]:s,p)),n.set(r,t)),t!==void 0){var o=m(t);return o===s?void 0:o}return Reflect.get(v,r,e)},getOwnPropertyDescriptor(v,r){var e=Reflect.getOwnPropertyDescriptor(v,r);if(e&&"value"in e){var t=n.get(r);t&&(e.value=m(t))}else if(e===void 0){var a=n.get(r),o=a==null?void 0:a.v;if(a!==void 0&&o!==s)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return e},has(v,r){var o;if(r===b)return!0;var e=n.get(r),t=e!==void 0&&e.v!==s||Reflect.has(v,r);if(e!==void 0||Y!==null&&(!t||(o=O(v,r))!=null&&o.writable)){e===void 0&&(e=l(t?g(v[r],p):s),n.set(r,e));var a=m(e);if(a===s)return!1}return t},set(v,r,e,t){var D;var a=n.get(r),o=r in v;if(c&&r==="length")for(var u=e;u<a.v;u+=1){var y=n.get(u+"");y!==void 0?f(y,s):u in v&&(y=l(s),n.set(u+"",y))}a===void 0?(!o||(D=O(v,r))!=null&&D.writable)&&(a=l(void 0),f(a,g(e,p)),n.set(r,a)):(o=a.v!==s,f(a,g(e,p)));var w=Reflect.getOwnPropertyDescriptor(v,r);if(w!=null&&w.set&&w.set.call(t,e),!o){if(c&&typeof r=="string"){var j=n.get("length"),h=Number(r);Number.isInteger(h)&&h>=j.v&&f(j,h+1)}x(P)}return!0},ownKeys(v){m(P);var r=Reflect.ownKeys(v).filter(a=>{var o=n.get(a);return o===void 0||o.v!==s});for(var[e,t]of n)t.v!==s&&!(e in v)&&r.push(e);return r},setPrototypeOf(){A()}})}function x(i,d=1){f(i,i.v+d)}function K(i){return i!==null&&typeof i=="object"&&b in i?i[b]:i}function T(i,d){return Object.is(K(i),K(d))}export{T as i,g as p};
