import { t as S, e as H, a as l, d as fe } from "../chunks/CWf9OOFK.js";
import { p as Q, k as b, ab as J, l as a, f as G, a8 as U, t as E, s as C, j as e, aa as te, c as L, r as q, a as X, a6 as pe } from "../chunks/nlANaGLT.js";
import { s as F } from "../chunks/BmMHVVX3.js";
import { i as M } from "../chunks/DOjUa9u5.js";
import { e as _e } from "../chunks/B6azywu7.js";
import { a as ge } from "../chunks/CZv_AhHu.js";
import { p as o } from "../chunks/5u5qd9TD.js";
import { u as Y } from "../chunks/Bb8ybDgy.js";
import { O as he } from "../chunks/Np7i_reI.js";
import { d as xe, c as be, b as Se, f as ne } from "../chunks/BO1A6s0c.js";
import { C as ye } from "../chunks/BSE9YYho.js";
import { N as Pe } from "../chunks/B_NGI7Kx.js";
import { B as we } from "../chunks/B-Kclwyq.js";
import { N as Ce } from "../chunks/hmJwmp7r.js";
import { u as Ae } from "../chunks/BTUJVHfP.js";
import { O as K } from "../chunks/B21bTIl7.js";
import { B as se } from "../chunks/BEQMYyDu.js";
import { I as le } from "../chunks/6f3yten3.js";
import { I as Te } from "../chunks/DYRiKtW9.js";
import { u as re } from "../chunks/DwvS5LQk.js";
import { F as de } from "../chunks/CmL1R98Y.js";
import { L as Ie } from "../chunks/x5MgfX0R.js";
import { S as ie } from "../chunks/BbgojtL-.js";
import { f as ce } from "../chunks/BRCxk8by.js";
import { T as Oe } from "../chunks/D-oL4W7r.js";
var De = S("<p> </p>"), Ne = S("<p> </p> <p> </p> <!> <!>", 1), Fe = S('<div class="err"> </div>'), Me = S('<div class="flex gap-05"><!> <!></div> <!>', 1), ke = S("<!> <!> <!> <!>", 1);
function Be(V, r) {
  Q(r, true);
  let $ = re(), g = Y(), c = b(""), f = b(false), y = te(() => K(r.scope.name)), d = b(o(r.scope.name)), m = b(void 0), A = b(void 0);
  J(() => {
    r.scope.id && a(d, o(r.scope.name));
  }), J(() => {
    K(r.scope.name) ? (a(m, void 0), a(A, void 0)) : (a(m, o(r.attrs.map((n) => {
      var _a;
      return { name: n.name, selected: ((_a = r.scope.attr_include_access) == null ? void 0 : _a.includes(n.name)) || false };
    }).toSorted((n, s) => n.name.localeCompare(s.name)))), a(A, o(r.attrs.map((n) => {
      var _a;
      return { name: n.name, selected: ((_a = r.scope.attr_include_id) == null ? void 0 : _a.includes(n.name)) || false };
    }).toSorted((n, s) => n.name.localeCompare(s.name)))));
  });
  async function v(n, s) {
    if (a(c, ""), K(e(d)) || r.scope.name !== e(d) && r.scopes.find((h) => h.name === e(d))) {
      a(c, o(g.common.nameExistsAlready));
      return;
    }
    let P = { scope: e(d) };
    if (e(m)) {
      let h = e(m).filter((i) => i.selected).map((i) => i.name);
      h.length > 0 && (P.attr_include_access = h);
    }
    if (e(A)) {
      let h = e(A).filter((i) => i.selected).map((i) => i.name);
      h.length > 0 && (P.attr_include_id = h);
    }
    let O = await xe(n.action, P);
    O.error ? a(c, o(O.error.message)) : (a(f, true), r.onSave(), setTimeout(() => {
      a(f, false);
    }, 2e3));
  }
  const T = te(() => `/auth/v1/scopes/${r.scope.id}`);
  de(V, { get action() {
    return e(T);
  }, onSubmit: v, children: (n, s) => {
    var P = ke(), O = G(P);
    Ie(O, { label: "ID", mono: true, children: (t, p) => {
      U();
      var u = H();
      E(() => F(u, r.scope.id)), l(t, u);
    } });
    var h = C(O, 2);
    le(h, { autocomplete: "off", get label() {
      return g.scopes.name;
    }, get placeholder() {
      return g.scopes.name;
    }, get disabled() {
      return e(y);
    }, width: "14.5rem", required: true, pattern: ce, get value() {
      return e(d);
    }, set value(t) {
      a(d, o(t));
    } });
    var i = C(h, 2);
    {
      var k = (t) => {
        var p = De(), u = L(p, true);
        q(p), E(() => F(u, g.scopes.defaultNoMod)), l(t, p);
      }, D = (t) => {
        var p = Ne(), u = G(p), x = L(u, true);
        q(u);
        var w = C(u, 2), j = L(w, true);
        q(w);
        var B = C(w, 2);
        {
          var N = (I) => {
            ie(I, { get items() {
              return e(m);
            }, set items(z) {
              a(m, o(z));
            }, children: (z, ee) => {
              U();
              var W = H("Access Token Mappings");
              l(z, W);
            }, $$slots: { default: true } });
          };
          M(B, (I) => {
            e(m) && I(N);
          });
        }
        var _ = C(B, 2);
        {
          var R = (I) => {
            ie(I, { get items() {
              return e(A);
            }, set items(z) {
              a(A, o(z));
            }, children: (z, ee) => {
              U();
              var W = H("Id Token Mappings");
              l(z, W);
            }, $$slots: { default: true } });
          };
          M(_, (I) => {
            e(A) && I(R);
          });
        }
        E(() => {
          F(x, g.scopes.mapping1), F(j, g.scopes.mapping2);
        }), l(t, p);
      };
      M(i, (t) => {
        e(y) ? t(k) : t(D, false);
      });
    }
    var Z = C(i, 2);
    {
      var ae = (t) => {
        var p = Me(), u = G(p), x = L(u);
        se(x, { type: "submit", children: (_, R) => {
          U();
          var I = H();
          E(() => F(I, $.common.save)), l(_, I);
        }, $$slots: { default: true } });
        var w = C(x, 2);
        {
          var j = (_) => {
            Te(_, {});
          };
          M(w, (_) => {
            e(f) && _(j);
          });
        }
        q(u);
        var B = C(u, 2);
        {
          var N = (_) => {
            var R = Fe(), I = L(R, true);
            q(R), E(() => F(I, e(c))), l(_, R);
          };
          M(B, (_) => {
            e(c) && _(N);
          });
        }
        l(t, p);
      };
      M(Z, (t) => {
        e(y) || t(ae);
      });
    }
    l(n, P);
  }, $$slots: { default: true } }), X();
}
var Ee = S("<p> </p>"), Le = S('<div class="err"> </div>'), qe = S("<p> </p> <!> <!>", 1);
function je(V, r) {
  Q(r, true);
  let $ = re(), g = Y(), c = b("");
  async function f() {
    a(c, "");
    let v = await be(`/auth/v1/scopes/${r.scope.id}`);
    v.error ? a(c, o(v.error.message)) : r.onSave();
  }
  var y = fe(), d = G(y);
  {
    var m = (v) => {
      var T = Ee(), n = L(T, true);
      q(T), E(() => F(n, g.scopes.deleteDefault)), l(v, T);
    }, A = (v) => {
      var T = qe(), n = G(T), s = L(n, true);
      q(n);
      var P = C(n, 2);
      se(P, { level: -1, onclick: f, children: (i, k) => {
        U();
        var D = H();
        E(() => F(D, $.common.delete)), l(i, D);
      }, $$slots: { default: true } });
      var O = C(P, 2);
      {
        var h = (i) => {
          var k = Le(), D = L(k, true);
          q(k), E(() => F(D, e(c))), l(i, k);
        };
        M(O, (i) => {
          e(c) && i(h);
        });
      }
      E(() => F(s, g.scopes.delete1)), l(v, T);
    };
    M(d, (v) => {
      K(r.scope.name) ? v(m) : v(A, false);
    });
  }
  l(V, y), X();
}
var Re = S('<div class="flex"><!></div> <!>', 1);
function Ge(V, r) {
  Q(r, true);
  let $ = re(), g = Y();
  const c = [g.nav.config, $.common.delete];
  let f = b(o(c[0])), y = b(void 0);
  J(() => {
    r.scope.id && requestAnimationFrame(() => {
      var _a;
      (_a = e(y)) == null ? void 0 : _a();
    });
  });
  var d = Re(), m = G(d), A = L(m);
  Oe(A, { tabs: c, get selected() {
    return e(f);
  }, set selected(s) {
    a(f, o(s));
  }, get focusFirst() {
    return e(y);
  }, set focusFirst(s) {
    a(y, o(s));
  } }), q(m);
  var v = C(m, 2);
  {
    var T = (s) => {
      Be(s, { get attrs() {
        return r.attrs;
      }, get scope() {
        return r.scope;
      }, get scopes() {
        return r.scopes;
      }, get onSave() {
        return r.onSave;
      } });
    }, n = (s, P) => {
      {
        var O = (h) => {
          je(h, { get scope() {
            return r.scope;
          }, get onSave() {
            return r.onSave;
          } });
        };
        M(s, (h) => {
          e(f) === $.common.delete && h(O);
        }, P);
      }
    };
    M(v, (s) => {
      e(f) === g.nav.config ? s(T) : s(n, false);
    });
  }
  l(V, d), X();
}
var Ve = S('<div class="err"> </div>'), $e = S("<!> <!> <!>", 1), ze = S('<div class="container svelte-s1196z"><!></div>');
function Ue(V, r) {
  Q(r, true);
  let $ = re(), g = Y(), c = b(void 0), f = b(""), y = b("");
  J(() => {
    requestAnimationFrame(() => {
      var _a;
      (_a = e(c)) == null ? void 0 : _a.focus();
    });
  });
  async function d(v, T) {
    var _a;
    if (r.scopes.find((P) => P.name === e(y))) {
      a(f, o(g.common.nameExistsAlready));
      return;
    }
    a(f, "");
    let n = { scope: e(y) }, s = await Se(v.action, n);
    s.body ? r.onSave(s.body.id) : a(f, o(((_a = s.error) == null ? void 0 : _a.message) || "Error"));
  }
  var m = ze(), A = L(m);
  de(A, { action: "/auth/v1/scopes", onSubmit: d, children: (v, T) => {
    var n = $e(), s = G(n);
    le(s, { autocomplete: "off", get label() {
      return g.scopes.name;
    }, get placeholder() {
      return g.scopes.name;
    }, required: true, pattern: ce, get ref() {
      return e(c);
    }, set ref(i) {
      a(c, o(i));
    }, get value() {
      return e(y);
    }, set value(i) {
      a(y, o(i));
    } });
    var P = C(s, 2);
    se(P, { type: "submit", children: (i, k) => {
      U();
      var D = H();
      E(() => F(D, $.common.save)), l(i, D);
    }, $$slots: { default: true } });
    var O = C(P, 2);
    {
      var h = (i) => {
        var k = Ve(), D = L(k, true);
        q(k), E(() => F(D, e(f))), l(i, k);
      };
      M(O, (i) => {
        e(f) && i(h);
      });
    }
    l(v, n);
  }, $$slots: { default: true } }), q(m), l(V, m), X();
}
var We = S('<span class="default svelte-1bjjcss"><i>default</i></span>'), He = S(" <!>", 1), Je = S("<div></div> <!>", 1), Ke = S("<!> <!>", 1), Qe = S('<div class="err"> </div>'), Xe = S('<!> <div id="scopes"><!></div>', 1), Ye = S("<!> <!>", 1);
function Ze(V, r) {
  Q(r, true);
  let $ = Y(), g = b(void 0), c = b(""), f = Ae("sid"), y = b(o([])), d = b(o([])), m = b(o([])), A = b(void 0);
  const v = [$.common.name, "ID"];
  let T = b(o(v[0])), n = b("");
  const s = [$.common.name, "ID"];
  pe(() => {
    O(), P();
  }), J(() => {
    a(A, o(e(d).find((t) => t.id === f.get())));
  }), J(() => {
    let t = e(n).toLowerCase();
    t ? e(T) === v[0] ? a(m, o(e(d).filter((p) => {
      var _a;
      return (_a = p.name) == null ? void 0 : _a.toLowerCase().includes(t);
    }))) : e(T) === v[1] && a(m, o(e(d).filter((p) => p.id.toLowerCase().includes(t)))) : a(m, o(e(d)));
  });
  async function P() {
    var _a;
    let t = await ne("/auth/v1/users/attr");
    t.body ? a(y, o(t.body.values)) : a(c, o(((_a = t.error) == null ? void 0 : _a.message) || "Error"));
  }
  async function O() {
    var _a;
    let t = await ne("/auth/v1/scopes");
    t.body ? a(d, o(t.body)) : a(c, o(((_a = t.error) == null ? void 0 : _a.message) || "Error"));
  }
  function h(t, p) {
    let u = p === "up";
    t === s[0] ? e(d).sort((x, w) => u ? x.name.localeCompare(w.name) : w.name.localeCompare(x.name)) : t === s[1] && e(d).sort((x, w) => u ? x.id.localeCompare(w.id) : w.id.localeCompare(x.id));
  }
  function i() {
    O();
  }
  async function k(t) {
    var _a;
    (_a = e(g)) == null ? void 0 : _a(), await O(), f.set(t);
  }
  var D = Ye(), Z = G(D);
  Ce(Z, { paddingTop: "2.1rem", buttonTilesAriaControls: "scopes", width: "min(20rem, 100dvw)", thresholdNavSub: 700, buttonTiles: (p) => {
    var u = Je(), x = G(u);
    ge(x, "", {}, { height: ".5rem" });
    var w = C(x, 2);
    _e(w, 17, () => e(m), (j) => j.id, (j, B, N, _) => {
      const R = te(() => f.get() === e(B).id);
      Pe(j, { onclick: () => f.set(e(B).id), get selected() {
        return e(R);
      }, children: (I, z) => {
        U();
        var ee = He(), W = G(ee), me = C(W);
        {
          var ve = (oe) => {
            var ue = We();
            l(oe, ue);
          };
          M(me, (oe) => {
            K(e(B).name) && oe(ve);
          });
        }
        E(() => F(W, `${e(B).name ?? ""} `)), l(I, ee);
      } });
    }), l(p, u);
  }, children: (p, u) => {
    var x = Ke(), w = G(x);
    const j = te(() => e(d).length === 0 ? 1 : 2);
    we(w, { get level() {
      return e(j);
    }, alignRight: true, get closeModal() {
      return e(g);
    }, set closeModal(N) {
      a(g, o(N));
    }, children: (N, _) => {
      Ue(N, { onSave: k, get scopes() {
        return e(d);
      } });
    }, $$slots: { default: true } });
    var B = C(w, 2);
    he(B, { searchOptions: v, orderOptions: s, onChangeOrder: h, searchWidth: "min(19.5rem, 100dvw - .5rem)", get searchOption() {
      return e(T);
    }, set searchOption(N) {
      a(T, o(N));
    }, get value() {
      return e(n);
    }, set value(N) {
      a(n, o(N));
    } }), l(p, x);
  }, $$slots: { buttonTiles: true, default: true } });
  var ae = C(Z, 2);
  ye(ae, { children: (t, p) => {
    var u = Xe(), x = G(u);
    {
      var w = (_) => {
        var R = Qe(), I = L(R, true);
        q(R), E(() => F(I, e(c))), l(_, R);
      };
      M(x, (_) => {
        e(c) && _(w);
      });
    }
    var j = C(x, 2), B = L(j);
    {
      var N = (_) => {
        Ge(_, { get attrs() {
          return e(y);
        }, get scope() {
          return e(A);
        }, get scopes() {
          return e(d);
        }, onSave: i });
      };
      M(B, (_) => {
        e(A) && _(N);
      });
    }
    q(j), l(t, u);
  } }), l(V, D), X();
}
function Ct(V) {
  Ze(V, {});
}
export {
  Ct as component
};
