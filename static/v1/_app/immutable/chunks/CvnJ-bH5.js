import { t as d, a as o } from "./D8nUqfqE.js";
import { s as f, c as v, t as c, r as l } from "./D-nwkJyM.js";
import { s as L } from "./DmLjbmU6.js";
import { i as _ } from "./C3XMhfdI.js";
import { s as b } from "./ivlJJTAR.js";
import { s as k, a as V, c as j } from "./D_HYGYLR.js";
var q = d('<div class="label font-label svelte-ud9pp2"> </div>'), w = d('<div class="button svelte-ud9pp2"><!></div>'), y = d('<div class="container svelte-ud9pp2"><!> <div class="flex gap-05"><div><!></div> <!></div></div>');
function F(u, a) {
  var r = y(), n = v(r);
  {
    var p = (t) => {
      var e = q(), s = v(e, true);
      l(e), c(() => L(s, a.label)), o(t, e);
    };
    _(n, (t) => {
      a.label && t(p);
    });
  }
  var m = f(n, 2), i = v(m), x = v(i);
  b(x, () => a.children), l(i);
  var g = f(i, 2);
  {
    var h = (t) => {
      var e = w(), s = v(e);
      b(s, () => a.button), l(e), o(t, e);
    };
    _(g, (t) => {
      a.button && t(h);
    });
  }
  l(m), l(r), c(() => {
    k(i, "title", a.title || a.label || ""), V(i, 1, j(a.mono ? "font-mono" : ""));
  }), o(u, r);
}
export {
  F as L
};
