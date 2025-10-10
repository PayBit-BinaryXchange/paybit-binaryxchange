"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[90345, 6047], {
    438253: (t, r, e) => {
        function n(t) {
            for (var r = arguments.length, e = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                e[n - 1] = arguments[n];
            throw Error("[Immer] minified error nr: " + t + (e.length ? " " + e.map((function(t) {
                return "'" + t + "'"
            }
            )).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
        }
        function o(t) {
            return !!t && !!t[G]
        }
        function i(t) {
            return !!t && (function(t) {
                if (!t || "object" != typeof t)
                    return !1;
                var r = Object.getPrototypeOf(t);
                if (null === r)
                    return !0;
                var e = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
                return e === Object || "function" == typeof e && Function.toString.call(e) === H
            }(t) || Array.isArray(t) || !!t[q] || !!t.constructor[q] || y(t) || v(t))
        }
        function u(t) {
            return o(t) || n(23, t),
            t[G].t
        }
        function f(t, r, e) {
            void 0 === e && (e = !1),
            0 === c(t) ? (e ? Object.keys : Q)(t).forEach((function(n) {
                e && "symbol" == typeof n || r(n, t[n], t)
            }
            )) : t.forEach((function(e, n) {
                return r(n, e, t)
            }
            ))
        }
        function c(t) {
            var r = t[G];
            return r ? r.i > 3 ? r.i - 4 : r.i : Array.isArray(t) ? 1 : y(t) ? 2 : v(t) ? 3 : 0
        }
        function a(t, r) {
            return 2 === c(t) ? t.has(r) : Object.prototype.hasOwnProperty.call(t, r)
        }
        function l(t, r) {
            return 2 === c(t) ? t.get(r) : t[r]
        }
        function p(t, r, e) {
            var n = c(t);
            2 === n ? t.set(r, e) : 3 === n ? (t.delete(r),
            t.add(e)) : t[r] = e
        }
        function s(t, r) {
            return t === r ? 0 !== t || 1 / t == 1 / r : t != t && r != r
        }
        function y(t) {
            return L && t instanceof Map
        }
        function v(t) {
            return $ && t instanceof Set
        }
        function h(t) {
            return t.o || t.t
        }
        function d(t) {
            if (Array.isArray(t))
                return Array.prototype.slice.call(t);
            var r = V(t);
            delete r[G];
            for (var e = Q(r), n = 0; n < e.length; n++) {
                var o = e[n]
                  , i = r[o];
                !1 === i.writable && (i.writable = !0,
                i.configurable = !0),
                (i.get || i.set) && (r[o] = {
                    configurable: !0,
                    writable: !0,
                    enumerable: i.enumerable,
                    value: t[o]
                })
            }
            return Object.create(Object.getPrototypeOf(t), r)
        }
        function b(t, r) {
            return void 0 === r && (r = !1),
            O(t) || o(t) || !i(t) || (c(t) > 1 && (t.set = t.add = t.clear = t.delete = g),
            Object.freeze(t),
            r && f(t, (function(t, r) {
                return b(r, !0)
            }
            ), !0)),
            t
        }
        function g() {
            n(2)
        }
        function O(t) {
            return null == t || "object" != typeof t || Object.isFrozen(t)
        }
        function w(t) {
            var r = Y[t];
            return r || n(18, t),
            r
        }
        function m(t, r) {
            Y[t] || (Y[t] = r)
        }
        function P() {
            return U
        }
        function j(t, r) {
            r && (w("Patches"),
            t.u = [],
            t.s = [],
            t.v = r)
        }
        function A(t) {
            E(t),
            t.p.forEach(D),
            t.p = null
        }
        function E(t) {
            t === U && (U = t.l)
        }
        function S(t) {
            return U = {
                p: [],
                l: U,
                h: t,
                m: !0,
                _: 0
            }
        }
        function D(t) {
            var r = t[G];
            0 === r.i || 1 === r.i ? r.j() : r.O = !0
        }
        function k(t, r) {
            r._ = r.p.length;
            var e = r.p[0]
              , o = void 0 !== t && t !== e;
            return r.h.g || w("ES5").S(r, t, o),
            o ? (e[G].P && (A(r),
            n(4)),
            i(t) && (t = x(r, t),
            r.l || I(r, t)),
            r.u && w("Patches").M(e[G], t, r.u, r.s)) : t = x(r, e, []),
            A(r),
            r.u && r.v(r.u, r.s),
            t !== X ? t : void 0
        }
        function x(t, r, e) {
            if (O(r))
                return r;
            var n = r[G];
            if (!n)
                return f(r, (function(o, i) {
                    return N(t, n, r, o, i, e)
                }
                ), !0),
                r;
            if (n.A !== t)
                return r;
            if (!n.P)
                return I(t, n.t, !0),
                n.t;
            if (!n.I) {
                n.I = !0,
                n.A._--;
                var o = 4 === n.i || 5 === n.i ? n.o = d(n.k) : n.o;
                f(3 === n.i ? new Set(o) : o, (function(r, i) {
                    return N(t, n, o, r, i, e)
                }
                )),
                I(t, o, !1),
                e && t.u && w("Patches").R(n, e, t.u, t.s)
            }
            return n.o
        }
        function N(t, r, e, n, u, f) {
            if (o(u)) {
                var c = x(t, u, f && r && 3 !== r.i && !a(r.D, n) ? f.concat(n) : void 0);
                if (p(e, n, c),
                !o(c))
                    return;
                t.m = !1
            }
            if (i(u) && !O(u)) {
                if (!t.h.F && t._ < 1)
                    return;
                x(t, u),
                r && r.A.l || I(t, u)
            }
        }
        function I(t, r, e) {
            void 0 === e && (e = !1),
            t.h.F && t.m && b(r, e)
        }
        function R(t, r) {
            var e = t[G];
            return (e ? h(e) : t)[r]
        }
        function _(t, r) {
            if (r in t)
                for (var e = Object.getPrototypeOf(t); e; ) {
                    var n = Object.getOwnPropertyDescriptor(e, r);
                    if (n)
                        return n;
                    e = Object.getPrototypeOf(e)
                }
        }
        function F(t) {
            t.P || (t.P = !0,
            t.l && F(t.l))
        }
        function C(t) {
            t.o || (t.o = d(t.t))
        }
        function K(t, r, e) {
            var n = y(r) ? w("MapSet").N(r, e) : v(r) ? w("MapSet").T(r, e) : t.g ? function(t, r) {
                var e = Array.isArray(t)
                  , n = {
                    i: e ? 1 : 0,
                    A: r ? r.A : P(),
                    P: !1,
                    I: !1,
                    D: {},
                    l: r,
                    t,
                    k: null,
                    o: null,
                    j: null,
                    C: !1
                }
                  , o = n
                  , i = Z;
                e && (o = [n],
                i = tt);
                var u = Proxy.revocable(o, i)
                  , f = u.revoke
                  , c = u.proxy;
                return n.k = c,
                n.j = f,
                c
            }(r, e) : w("ES5").J(r, e);
            return (e ? e.A : P()).p.push(n),
            n
        }
        function M(t) {
            return o(t) || n(22, t),
            function t(r) {
                if (!i(r))
                    return r;
                var e, n = r[G], o = c(r);
                if (n) {
                    if (!n.P && (n.i < 4 || !w("ES5").K(n)))
                        return n.t;
                    n.I = !0,
                    e = T(r, o),
                    n.I = !1
                } else
                    e = T(r, o);
                return f(e, (function(r, o) {
                    n && l(n.t, r) === o || p(e, r, t(o))
                }
                )),
                3 === o ? new Set(e) : e
            }(t)
        }
        function T(t, r) {
            switch (r) {
            case 2:
                return new Map(t);
            case 3:
                return Array.from(t)
            }
            return d(t)
        }
        function z() {
            function t(t, r) {
                var e = i[t];
                return e ? e.enumerable = r : i[t] = e = {
                    configurable: !0,
                    enumerable: r,
                    get: function() {
                        var r = this[G];
                        return Z.get(r, t)
                    },
                    set: function(r) {
                        var e = this[G];
                        Z.set(e, t, r)
                    }
                },
                e
            }
            function r(t) {
                for (var r = t.length - 1; r >= 0; r--) {
                    var o = t[r][G];
                    if (!o.P)
                        switch (o.i) {
                        case 5:
                            n(o) && F(o);
                            break;
                        case 4:
                            e(o) && F(o)
                        }
                }
            }
            function e(t) {
                for (var r = t.t, e = t.k, n = Q(e), o = n.length - 1; o >= 0; o--) {
                    var i = n[o];
                    if (i !== G) {
                        var u = r[i];
                        if (void 0 === u && !a(r, i))
                            return !0;
                        var f = e[i]
                          , c = f && f[G];
                        if (c ? c.t !== u : !s(f, u))
                            return !0
                    }
                }
                var l = !!r[G];
                return n.length !== Q(r).length + (l ? 0 : 1)
            }
            function n(t) {
                var r = t.k;
                if (r.length !== t.t.length)
                    return !0;
                var e = Object.getOwnPropertyDescriptor(r, r.length - 1);
                return !(!e || e.get)
            }
            var i = {};
            m("ES5", {
                J: function(r, e) {
                    var n = Array.isArray(r)
                      , o = function(r, e) {
                        if (r) {
                            for (var n = Array(e.length), o = 0; o < e.length; o++)
                                Object.defineProperty(n, "" + o, t(o, !0));
                            return n
                        }
                        var i = V(e);
                        delete i[G];
                        for (var u = Q(i), f = 0; f < u.length; f++) {
                            var c = u[f];
                            i[c] = t(c, r || !!i[c].enumerable)
                        }
                        return Object.create(Object.getPrototypeOf(e), i)
                    }(n, r)
                      , i = {
                        i: n ? 5 : 4,
                        A: e ? e.A : P(),
                        P: !1,
                        I: !1,
                        D: {},
                        l: e,
                        t: r,
                        k: o,
                        o: null,
                        O: !1,
                        C: !1
                    };
                    return Object.defineProperty(o, G, {
                        value: i,
                        writable: !0
                    }),
                    o
                },
                S: function(t, e, i) {
                    i ? o(e) && e[G].A === t && r(t.p) : (t.u && function t(r) {
                        if (r && "object" == typeof r) {
                            var e = r[G];
                            if (e) {
                                var o = e.t
                                  , i = e.k
                                  , u = e.D
                                  , c = e.i;
                                if (4 === c)
                                    f(i, (function(r) {
                                        r !== G && (void 0 !== o[r] || a(o, r) ? u[r] || t(i[r]) : (u[r] = !0,
                                        F(e)))
                                    }
                                    )),
                                    f(o, (function(t) {
                                        void 0 !== i[t] || a(i, t) || (u[t] = !1,
                                        F(e))
                                    }
                                    ));
                                else if (5 === c) {
                                    if (n(e) && (F(e),
                                    u.length = !0),
                                    i.length < o.length)
                                        for (var l = i.length; l < o.length; l++)
                                            u[l] = !1;
                                    else
                                        for (var p = o.length; p < i.length; p++)
                                            u[p] = !0;
                                    for (var s = Math.min(i.length, o.length), y = 0; y < s; y++)
                                        void 0 === u[y] && t(i[y])
                                }
                            }
                        }
                    }(t.p[0]),
                    r(t.p))
                },
                K: function(t) {
                    return 4 === t.i ? e(t) : n(t)
                }
            })
        }
        e.d(r, {
            current: () => M,
            default: () => ot,
            enableES5: () => z,
            isDraft: () => o,
            isDraftable: () => i,
            original: () => u
        });
        var W, U, B = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), L = "undefined" != typeof Map, $ = "undefined" != typeof Set, J = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, X = B ? Symbol.for("immer-nothing") : ((W = {})["immer-nothing"] = !0,
        W), q = B ? Symbol.for("immer-draftable") : "__$immer_draftable", G = B ? Symbol.for("immer-state") : "__$immer_state", H = ("undefined" != typeof Symbol && Symbol.iterator,
        "" + Object.prototype.constructor), Q = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(t) {
            return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
        }
        : Object.getOwnPropertyNames, V = Object.getOwnPropertyDescriptors || function(t) {
            var r = {};
            return Q(t).forEach((function(e) {
                r[e] = Object.getOwnPropertyDescriptor(t, e)
            }
            )),
            r
        }
        , Y = {}, Z = {
            get: function(t, r) {
                if (r === G)
                    return t;
                var e = h(t);
                if (!a(e, r))
                    return function(t, r, e) {
                        var n, o = _(r, e);
                        return o ? "value"in o ? o.value : null === (n = o.get) || void 0 === n ? void 0 : n.call(t.k) : void 0
                    }(t, e, r);
                var n = e[r];
                return t.I || !i(n) ? n : n === R(t.t, r) ? (C(t),
                t.o[r] = K(t.A.h, n, t)) : n
            },
            has: function(t, r) {
                return r in h(t)
            },
            ownKeys: function(t) {
                return Reflect.ownKeys(h(t))
            },
            set: function(t, r, e) {
                var n = _(h(t), r);
                if (null == n ? void 0 : n.set)
                    return n.set.call(t.k, e),
                    !0;
                if (!t.P) {
                    var o = R(h(t), r)
                      , i = null == o ? void 0 : o[G];
                    if (i && i.t === e)
                        return t.o[r] = e,
                        t.D[r] = !1,
                        !0;
                    if (s(e, o) && (void 0 !== e || a(t.t, r)))
                        return !0;
                    C(t),
                    F(t)
                }
                return t.o[r] === e && "number" != typeof e && (void 0 !== e || r in t.o) || (t.o[r] = e,
                t.D[r] = !0,
                !0)
            },
            deleteProperty: function(t, r) {
                return void 0 !== R(t.t, r) || r in t.t ? (t.D[r] = !1,
                C(t),
                F(t)) : delete t.D[r],
                t.o && delete t.o[r],
                !0
            },
            getOwnPropertyDescriptor: function(t, r) {
                var e = h(t)
                  , n = Reflect.getOwnPropertyDescriptor(e, r);
                return n ? {
                    writable: !0,
                    configurable: 1 !== t.i || "length" !== r,
                    enumerable: n.enumerable,
                    value: e[r]
                } : n
            },
            defineProperty: function() {
                n(11)
            },
            getPrototypeOf: function(t) {
                return Object.getPrototypeOf(t.t)
            },
            setPrototypeOf: function() {
                n(12)
            }
        }, tt = {};
        f(Z, (function(t, r) {
            tt[t] = function() {
                return arguments[0] = arguments[0][0],
                r.apply(this, arguments)
            }
        }
        )),
        tt.deleteProperty = function(t, r) {
            return Z.deleteProperty.call(this, t[0], r)
        }
        ,
        tt.set = function(t, r, e) {
            return Z.set.call(this, t[0], r, e, t[0])
        }
        ;
        var rt = function() {
            function t(t) {
                var r = this;
                this.g = J,
                this.F = !0,
                this.produce = function(t, e, o) {
                    if ("function" == typeof t && "function" != typeof e) {
                        var u = e;
                        e = t;
                        var f = r;
                        return function(t) {
                            var r = this;
                            void 0 === t && (t = u);
                            for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                                o[i - 1] = arguments[i];
                            return f.produce(t, (function(t) {
                                var n;
                                return (n = e).call.apply(n, [r, t].concat(o))
                            }
                            ))
                        }
                    }
                    var c;
                    if ("function" != typeof e && n(6),
                    void 0 !== o && "function" != typeof o && n(7),
                    i(t)) {
                        var a = S(r)
                          , l = K(r, t, void 0)
                          , p = !0;
                        try {
                            c = e(l),
                            p = !1
                        } finally {
                            p ? A(a) : E(a)
                        }
                        return "undefined" != typeof Promise && c instanceof Promise ? c.then((function(t) {
                            return j(a, o),
                            k(t, a)
                        }
                        ), (function(t) {
                            throw A(a),
                            t
                        }
                        )) : (j(a, o),
                        k(c, a))
                    }
                    if (!t || "object" != typeof t) {
                        if ((c = e(t)) === X)
                            return;
                        return void 0 === c && (c = t),
                        r.F && b(c, !0),
                        c
                    }
                    n(21, t)
                }
                ,
                this.produceWithPatches = function(t, e) {
                    return "function" == typeof t ? function(e) {
                        for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                            o[i - 1] = arguments[i];
                        return r.produceWithPatches(e, (function(r) {
                            return t.apply(void 0, [r].concat(o))
                        }
                        ))
                    }
                    : [r.produce(t, e, (function(t, r) {
                        n = t,
                        o = r
                    }
                    )), n, o];
                    var n, o
                }
                ,
                "boolean" == typeof (null == t ? void 0 : t.useProxies) && this.setUseProxies(t.useProxies),
                "boolean" == typeof (null == t ? void 0 : t.autoFreeze) && this.setAutoFreeze(t.autoFreeze)
            }
            var r = t.prototype;
            return r.createDraft = function(t) {
                i(t) || n(8),
                o(t) && (t = M(t));
                var r = S(this)
                  , e = K(this, t, void 0);
                return e[G].C = !0,
                E(r),
                e
            }
            ,
            r.finishDraft = function(t, r) {
                var e = (t && t[G]).A;
                return j(e, r),
                k(void 0, e)
            }
            ,
            r.setAutoFreeze = function(t) {
                this.F = t
            }
            ,
            r.setUseProxies = function(t) {
                t && !J && n(20),
                this.g = t
            }
            ,
            r.applyPatches = function(t, r) {
                var e;
                for (e = r.length - 1; e >= 0; e--) {
                    var n = r[e];
                    if (0 === n.path.length && "replace" === n.op) {
                        t = n.value;
                        break
                    }
                }
                e > -1 && (r = r.slice(e + 1));
                var i = w("Patches").$;
                return o(t) ? i(t, r) : this.produce(t, (function(t) {
                    return i(t, r)
                }
                ))
            }
            ,
            t
        }()
          , et = new rt
          , nt = et.produce;
        et.produceWithPatches.bind(et),
        et.setAutoFreeze.bind(et),
        et.setUseProxies.bind(et),
        et.applyPatches.bind(et),
        et.createDraft.bind(et),
        et.finishDraft.bind(et);
        const ot = nt
    }
    ,
    454558: (t, r, e) => {
        function n(t) {
            return function(r) {
                var e = r.dispatch
                  , n = r.getState;
                return function(r) {
                    return function(o) {
                        return "function" == typeof o ? o(e, n, t) : r(o)
                    }
                }
            }
        }
        e.d(r, {
            default: () => i
        });
        var o = n();
        o.withExtraArgument = n;
        const i = o
    }
    ,
    406047: (t, r, e) => {
        function n(t) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            n(t)
        }
        function o(t) {
            var r = function(t, r) {
                if ("object" !== n(t) || null === t)
                    return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var o = e.call(t, r || "default");
                    if ("object" !== n(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === r ? String : Number)(t)
            }(t, "string");
            return "symbol" === n(r) ? r : String(r)
        }
        function i(t, r, e) {
            return (r = o(r))in t ? Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[r] = e,
            t
        }
        function u(t, r) {
            var e = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                r && (n = n.filter((function(r) {
                    return Object.getOwnPropertyDescriptor(t, r).enumerable
                }
                ))),
                e.push.apply(e, n)
            }
            return e
        }
        function f(t) {
            for (var r = 1; r < arguments.length; r++) {
                var e = null != arguments[r] ? arguments[r] : {};
                r % 2 ? u(Object(e), !0).forEach((function(r) {
                    i(t, r, e[r])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : u(Object(e)).forEach((function(r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
                }
                ))
            }
            return t
        }
        function c(t) {
            return "Minified Redux error #" + t + "; visit https://redux.js.org/Errors?code=" + t + " for the full message or use the non-minified dev environment for full errors. "
        }
        e.d(r, {
            applyMiddleware: () => g,
            bindActionCreators: () => d,
            combineReducers: () => v,
            compose: () => b,
            createStore: () => y
        });
        var a = "function" == typeof Symbol && Symbol.observable || "@@observable"
          , l = function() {
            return Math.random().toString(36).substring(7).split("").join(".")
        }
          , p = {
            INIT: "@@redux/INIT" + l(),
            REPLACE: "@@redux/REPLACE" + l(),
            PROBE_UNKNOWN_ACTION: function() {
                return "@@redux/PROBE_UNKNOWN_ACTION" + l()
            }
        };
        function s(t) {
            if ("object" != typeof t || null === t)
                return !1;
            for (var r = t; null !== Object.getPrototypeOf(r); )
                r = Object.getPrototypeOf(r);
            return Object.getPrototypeOf(t) === r
        }
        function y(t, r, e) {
            var n;
            if ("function" == typeof r && "function" == typeof e || "function" == typeof e && "function" == typeof arguments[3])
                throw new Error(c(0));
            if ("function" == typeof r && void 0 === e && (e = r,
            r = void 0),
            void 0 !== e) {
                if ("function" != typeof e)
                    throw new Error(c(1));
                return e(y)(t, r)
            }
            if ("function" != typeof t)
                throw new Error(c(2));
            var o = t
              , i = r
              , u = []
              , f = u
              , l = !1;
            function v() {
                f === u && (f = u.slice())
            }
            function h() {
                if (l)
                    throw new Error(c(3));
                return i
            }
            function d(t) {
                if ("function" != typeof t)
                    throw new Error(c(4));
                if (l)
                    throw new Error(c(5));
                var r = !0;
                return v(),
                f.push(t),
                function() {
                    if (r) {
                        if (l)
                            throw new Error(c(6));
                        r = !1,
                        v();
                        var e = f.indexOf(t);
                        f.splice(e, 1),
                        u = null
                    }
                }
            }
            function b(t) {
                if (!s(t))
                    throw new Error(c(7));
                if (void 0 === t.type)
                    throw new Error(c(8));
                if (l)
                    throw new Error(c(9));
                try {
                    l = !0,
                    i = o(i, t)
                } finally {
                    l = !1
                }
                for (var r = u = f, e = 0; e < r.length; e++) {
                    (0,
                    r[e])()
                }
                return t
            }
            return b({
                type: p.INIT
            }),
            (n = {
                dispatch: b,
                subscribe: d,
                getState: h,
                replaceReducer: function(t) {
                    if ("function" != typeof t)
                        throw new Error(c(10));
                    o = t,
                    b({
                        type: p.REPLACE
                    })
                }
            })[a] = function() {
                var t, r = d;
                return (t = {
                    subscribe: function(t) {
                        if ("object" != typeof t || null === t)
                            throw new Error(c(11));
                        function e() {
                            t.next && t.next(h())
                        }
                        return e(),
                        {
                            unsubscribe: r(e)
                        }
                    }
                })[a] = function() {
                    return this
                }
                ,
                t
            }
            ,
            n
        }
        function v(t) {
            for (var r = Object.keys(t), e = {}, n = 0; n < r.length; n++) {
                var o = r[n];
                0,
                "function" == typeof t[o] && (e[o] = t[o])
            }
            var i, u = Object.keys(e);
            try {
                !function(t) {
                    Object.keys(t).forEach((function(r) {
                        var e = t[r];
                        if (void 0 === e(void 0, {
                            type: p.INIT
                        }))
                            throw new Error(c(12));
                        if (void 0 === e(void 0, {
                            type: p.PROBE_UNKNOWN_ACTION()
                        }))
                            throw new Error(c(13))
                    }
                    ))
                }(e)
            } catch (t) {
                i = t
            }
            return function(t, r) {
                if (void 0 === t && (t = {}),
                i)
                    throw i;
                for (var n = !1, o = {}, f = 0; f < u.length; f++) {
                    var a = u[f]
                      , l = e[a]
                      , p = t[a]
                      , s = l(p, r);
                    if (void 0 === s) {
                        r && r.type;
                        throw new Error(c(14))
                    }
                    o[a] = s,
                    n = n || s !== p
                }
                return (n = n || u.length !== Object.keys(t).length) ? o : t
            }
        }
        function h(t, r) {
            return function() {
                return r(t.apply(this, arguments))
            }
        }
        function d(t, r) {
            if ("function" == typeof t)
                return h(t, r);
            if ("object" != typeof t || null === t)
                throw new Error(c(16));
            var e = {};
            for (var n in t) {
                var o = t[n];
                "function" == typeof o && (e[n] = h(o, r))
            }
            return e
        }
        function b() {
            for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
                r[e] = arguments[e];
            return 0 === r.length ? function(t) {
                return t
            }
            : 1 === r.length ? r[0] : r.reduce((function(t, r) {
                return function() {
                    return t(r.apply(void 0, arguments))
                }
            }
            ))
        }
        function g() {
            for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
                r[e] = arguments[e];
            return function(t) {
                return function() {
                    var e = t.apply(void 0, arguments)
                      , n = function() {
                        throw new Error(c(15))
                    }
                      , o = {
                        getState: e.getState,
                        dispatch: function() {
                            return n.apply(void 0, arguments)
                        }
                    }
                      , i = r.map((function(t) {
                        return t(o)
                    }
                    ));
                    return n = b.apply(void 0, i)(e.dispatch),
                    f(f({}, e), {}, {
                        dispatch: n
                    })
                }
            }
        }
    }
    ,
    377145: (t, r, e) => {
        function n(t, r) {
            return t === r
        }
        e.d(r, {
            createSelector: () => o
        });
        var o = function(t) {
            for (var r = arguments.length, e = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                e[n - 1] = arguments[n];
            return function() {
                for (var r = arguments.length, n = Array(r), o = 0; o < r; o++)
                    n[o] = arguments[o];
                var i = 0
                  , u = n.pop()
                  , f = function(t) {
                    var r = Array.isArray(t[0]) ? t[0] : t;
                    if (!r.every((function(t) {
                        return "function" == typeof t
                    }
                    ))) {
                        var e = r.map((function(t) {
                            return typeof t
                        }
                        )).join(", ");
                        throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + e + "]")
                    }
                    return r
                }(n)
                  , c = t.apply(void 0, [function() {
                    return i++,
                    u.apply(null, arguments)
                }
                ].concat(e))
                  , a = t((function() {
                    for (var t = [], r = f.length, e = 0; e < r; e++)
                        t.push(f[e].apply(null, arguments));
                    return c.apply(null, t)
                }
                ));
                return a.resultFunc = u,
                a.dependencies = f,
                a.recomputations = function() {
                    return i
                }
                ,
                a.resetRecomputations = function() {
                    return i = 0
                }
                ,
                a
            }
        }((function(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n
              , e = null
              , o = null;
            return function() {
                return function(t, r, e) {
                    if (null === r || null === e || r.length !== e.length)
                        return !1;
                    for (var n = r.length, o = 0; o < n; o++)
                        if (!t(r[o], e[o]))
                            return !1;
                    return !0
                }(r, e, arguments) || (o = t.apply(null, arguments)),
                e = arguments,
                o
            }
        }
        ))
    }
}]);
