import { t as d, a as l } from "./D8nUqfqE.js";
import { p as h, c as v, j as g, k as _, s as b, r as n, t as m, l as k, a as B } from "./D-nwkJyM.js";
import { s as x, e as w, b as L } from "./DmLjbmU6.js";
import { i as P } from "./C3XMhfdI.js";
import { s as j } from "./D_HYGYLR.js";
import { B as y } from "./BUAPoI3e.js";
var A = d('<img alt="" width="20" height="20">'), I = d('<div class="inline svelte-44otl4"><!> <span class="name svelte-44otl4"> </span></div>');
function H(c, t) {
  h(t, true);
  let s = _(false);
  y(c, { get ariaLabel() {
    return t.ariaLabel;
  }, level: 2, onclick: () => t.onclick(t.provider.id), children: (p, q) => {
    var e = I(), i = v(e);
    {
      var f = (r) => {
        var a = A();
        m(() => j(a, "src", `/auth/v1/providers/${t.provider.id}/img`)), w("load", a, () => k(s, true)), L(a), l(r, a);
      };
      P(i, (r) => {
        g(s) && r(f);
      });
    }
    var o = b(i, 2), u = v(o, true);
    n(o), n(e), m(() => x(u, t.provider.name)), l(p, e);
  }, $$slots: { default: true } }), B();
}
export {
  H as B
};
