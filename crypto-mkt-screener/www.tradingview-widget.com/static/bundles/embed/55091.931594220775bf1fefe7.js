"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[55091, 6047], {
    655091: (t, r, e) => {
        e.d(r, {
            configureStore: () => x,
            createAction: () => k,
            createAsyncThunk: () => q,
            createDraftSafeSelector: () => j,
            createSlice: () => R,
            isAnyOf: () => L,
            isFulfilled: () => B,
            isPending: () => X,
            isRejected: () => V
        });
        var n = e(438253)
          , o = e(377145)
          , i = e(406047);
        function u(t) {
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
        var f = u();
        f.withExtraArgument = u;
        const c = f;
        var a, l = (a = function(t, r) {
            return a = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, r) {
                t.__proto__ = r
            }
            || function(t, r) {
                for (var e in r)
                    Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
            }
            ,
            a(t, r)
        }
        ,
        function(t, r) {
            if ("function" != typeof r && null !== r)
                throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            function e() {
                this.constructor = t
            }
            a(t, r),
            t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype,
            new e)
        }
        ), p = function(t, r) {
            var e, n, o, i, u = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: f(0),
                throw: f(1),
                return: f(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function f(i) {
                return function(f) {
                    return function(i) {
                        if (e)
                            throw new TypeError("Generator is already executing.");
                        for (; u; )
                            try {
                                if (e = 1,
                                n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                                0) : n.next) && !(o = o.call(n, i[1])).done)
                                    return o;
                                switch (n = 0,
                                o && (i = [2 & i[0], o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return u.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    u.label++,
                                    n = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = u.ops.pop(),
                                    u.trys.pop();
                                    continue;
                                default:
                                    if (!(o = u.trys,
                                    (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        u = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        u.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && u.label < o[1]) {
                                        u.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && u.label < o[2]) {
                                        u.label = o[2],
                                        u.ops.push(i);
                                        break
                                    }
                                    o[2] && u.ops.pop(),
                                    u.trys.pop();
                                    continue
                                }
                                i = r.call(t, u)
                            } catch (t) {
                                i = [6, t],
                                n = 0
                            } finally {
                                e = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, f])
                }
            }
        }, s = function(t, r) {
            for (var e = 0, n = r.length, o = t.length; e < n; e++,
            o++)
                t[o] = r[e];
            return t
        }, d = Object.defineProperty, y = Object.defineProperties, v = Object.getOwnPropertyDescriptors, h = Object.getOwnPropertySymbols, b = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable, m = function(t, r, e) {
            return r in t ? d(t, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e
            }) : t[r] = e
        }, w = function(t, r) {
            for (var e in r || (r = {}))
                b.call(r, e) && m(t, e, r[e]);
            if (h)
                for (var n = 0, o = h(r); n < o.length; n++) {
                    e = o[n];
                    g.call(r, e) && m(t, e, r[e])
                }
            return t
        }, O = function(t, r) {
            return y(t, v(r))
        }, P = function(t, r, e) {
            return new Promise((function(n, o) {
                var i = function(t) {
                    try {
                        f(e.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                  , u = function(t) {
                    try {
                        f(e.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                  , f = function(t) {
                    return t.done ? n(t.value) : Promise.resolve(t.value).then(i, u)
                };
                f((e = e.apply(t, r)).next())
            }
            ))
        }, j = function() {
            for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
            var e = o.createSelector.apply(void 0, t);
            return function(t) {
                for (var r = [], o = 1; o < arguments.length; o++)
                    r[o - 1] = arguments[o];
                return e.apply(void 0, s([(0,
                n.isDraft)(t) ? (0,
                n.current)(t) : t], r))
            }
        }, E = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
            if (0 !== arguments.length)
                return "object" == typeof arguments[0] ? i.compose : i.compose.apply(null, arguments)
        }
        ;
        "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
        function S(t) {
            if ("object" != typeof t || null === t)
                return !1;
            for (var r = t; null !== Object.getPrototypeOf(r); )
                r = Object.getPrototypeOf(r);
            return Object.getPrototypeOf(t) === r
        }
        var A = function(t) {
            function r() {
                for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                var o = t.apply(this, e) || this;
                return Object.setPrototypeOf(o, r.prototype),
                o
            }
            return l(r, t),
            Object.defineProperty(r, Symbol.species, {
                get: function() {
                    return r
                },
                enumerable: !1,
                configurable: !0
            }),
            r.prototype.concat = function() {
                for (var r = [], e = 0; e < arguments.length; e++)
                    r[e] = arguments[e];
                return t.prototype.concat.apply(this, r)
            }
            ,
            r.prototype.prepend = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                return 1 === t.length && Array.isArray(t[0]) ? new (r.bind.apply(r, s([void 0], t[0].concat(this)))) : new (r.bind.apply(r, s([void 0], t.concat(this))))
            }
            ,
            r
        }(Array);
        function _() {
            return function(t) {
                return function(t) {
                    void 0 === t && (t = {});
                    var r = t.thunk
                      , e = void 0 === r || r
                      , n = (t.immutableCheck,
                    t.serializableCheck,
                    new A);
                    e && ("boolean" == typeof e ? n.push(c) : n.push(c.withExtraArgument(e.extraArgument)));
                    0;
                    return n
                }(t)
            }
        }
        var D = !0;
        function x(t) {
            var r, e = _(), n = t || {}, o = n.reducer, u = void 0 === o ? void 0 : o, f = n.middleware, c = void 0 === f ? e() : f, a = n.devTools, l = void 0 === a || a, p = n.preloadedState, d = void 0 === p ? void 0 : p, y = n.enhancers, v = void 0 === y ? void 0 : y;
            if ("function" == typeof u)
                r = u;
            else {
                if (!S(u))
                    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
                r = (0,
                i.combineReducers)(u)
            }
            var h = c;
            if ("function" == typeof h && (h = h(e),
            !D && !Array.isArray(h)))
                throw new Error("when using a middleware builder function, an array of middleware must be returned");
            if (!D && h.some((function(t) {
                return "function" != typeof t
            }
            )))
                throw new Error("each middleware provided to configureStore must be a function");
            var b = i.applyMiddleware.apply(void 0, h)
              , g = i.compose;
            l && (g = E(w({
                trace: !D
            }, "object" == typeof l && l)));
            var m = [b];
            Array.isArray(v) ? m = s([b], v) : "function" == typeof v && (m = v(m));
            var O = g.apply(void 0, m);
            return (0,
            i.createStore)(r, d, O)
        }
        function k(t, r) {
            function e() {
                for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                if (r) {
                    var o = r.apply(void 0, e);
                    if (!o)
                        throw new Error("prepareAction did not return an object");
                    return w(w({
                        type: t,
                        payload: o.payload
                    }, "meta"in o && {
                        meta: o.meta
                    }), "error"in o && {
                        error: o.error
                    })
                }
                return {
                    type: t,
                    payload: e[0]
                }
            }
            return e.toString = function() {
                return "" + t
            }
            ,
            e.type = t,
            e.match = function(r) {
                return r.type === t
            }
            ,
            e
        }
        function I(t) {
            var r, e = {}, n = [], o = {
                addCase: function(t, r) {
                    var n = "string" == typeof t ? t : t.type;
                    if (n in e)
                        throw new Error("addCase cannot be called with two reducers for the same action type");
                    return e[n] = r,
                    o
                },
                addMatcher: function(t, r) {
                    return n.push({
                        matcher: t,
                        reducer: r
                    }),
                    o
                },
                addDefaultCase: function(t) {
                    return r = t,
                    o
                }
            };
            return t(o),
            [e, n, r]
        }
        function R(t) {
            var r = t.name
              , e = t.initialState;
            if (!r)
                throw new Error("`name` is a required option for createSlice");
            var o = t.reducers || {}
              , i = "function" == typeof t.extraReducers ? I(t.extraReducers) : [t.extraReducers]
              , u = i[0]
              , f = void 0 === u ? {} : u
              , c = i[1]
              , a = void 0 === c ? [] : c
              , l = i[2]
              , p = void 0 === l ? void 0 : l
              , d = Object.keys(o)
              , y = {}
              , v = {}
              , h = {};
            d.forEach((function(t) {
                var e, n, i = o[t], u = r + "/" + t;
                "reducer"in i ? (e = i.reducer,
                n = i.prepare) : e = i,
                y[t] = e,
                v[u] = e,
                h[t] = n ? k(u, n) : k(u)
            }
            ));
            var b = function(t, r, e, o) {
                void 0 === e && (e = []);
                var i = "function" == typeof r ? I(r) : [r, e, o]
                  , u = i[0]
                  , f = i[1]
                  , c = i[2]
                  , a = (0,
                n.default)(t, (function() {}
                ));
                return function(t, r) {
                    void 0 === t && (t = a);
                    var e = s([u[r.type]], f.filter((function(t) {
                        return (0,
                        t.matcher)(r)
                    }
                    )).map((function(t) {
                        return t.reducer
                    }
                    )));
                    return 0 === e.filter((function(t) {
                        return !!t
                    }
                    )).length && (e = [c]),
                    e.reduce((function(t, e) {
                        if (e) {
                            var o;
                            if ((0,
                            n.isDraft)(t))
                                return void 0 === (o = e(t, r)) ? t : o;
                            if ((0,
                            n.isDraftable)(t))
                                return (0,
                                n.default)(t, (function(t) {
                                    return e(t, r)
                                }
                                ));
                            if (void 0 === (o = e(t, r))) {
                                if (null === t)
                                    return t;
                                throw Error("A case reducer on a non-draftable value must not return undefined")
                            }
                            return o
                        }
                        return t
                    }
                    ), t)
                }
            }(e, w(w({}, f), v), a, p);
            return {
                name: r,
                reducer: b,
                actions: h,
                caseReducers: y
            }
        }
        var N = function(t) {
            void 0 === t && (t = 21);
            for (var r = "", e = t; e--; )
                r += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64 * Math.random() | 0];
            return r
        }
          , C = ["name", "message", "stack", "code"]
          , T = function(t, r) {
            this.payload = t,
            this.meta = r
        }
          , M = function(t, r) {
            this.payload = t,
            this.meta = r
        }
          , F = function(t) {
            if ("object" == typeof t && null !== t) {
                for (var r = {}, e = 0, n = C; e < n.length; e++) {
                    var o = n[e];
                    "string" == typeof t[o] && (r[o] = t[o])
                }
                return r
            }
            return {
                message: String(t)
            }
        };
        function q(t, r, e) {
            var n = k(t + "/fulfilled", (function(t, r, e, n) {
                return {
                    payload: t,
                    meta: O(w({}, n || {}), {
                        arg: e,
                        requestId: r,
                        requestStatus: "fulfilled"
                    })
                }
            }
            ))
              , o = k(t + "/pending", (function(t, r, e) {
                return {
                    payload: void 0,
                    meta: O(w({}, e || {}), {
                        arg: r,
                        requestId: t,
                        requestStatus: "pending"
                    })
                }
            }
            ))
              , i = k(t + "/rejected", (function(t, r, n, o, i) {
                return {
                    payload: o,
                    error: (e && e.serializeError || F)(t || "Rejected"),
                    meta: O(w({}, i || {}), {
                        arg: n,
                        requestId: r,
                        rejectedWithValue: !!o,
                        requestStatus: "rejected",
                        aborted: "AbortError" === (null == t ? void 0 : t.name),
                        condition: "ConditionError" === (null == t ? void 0 : t.name)
                    })
                }
            }
            ))
              , u = "undefined" != typeof AbortController ? AbortController : function() {
                function t() {
                    this.signal = {
                        aborted: !1,
                        addEventListener: function() {},
                        dispatchEvent: function() {
                            return !1
                        },
                        onabort: function() {},
                        removeEventListener: function() {}
                    }
                }
                return t.prototype.abort = function() {
                    0
                }
                ,
                t
            }();
            return Object.assign((function(t) {
                return function(f, c, a) {
                    var l, s, d = (null != (l = null == e ? void 0 : e.idGenerator) ? l : N)(), y = new u, v = new Promise((function(t, r) {
                        return y.signal.addEventListener("abort", (function() {
                            return r({
                                name: "AbortError",
                                message: s || "Aborted"
                            })
                        }
                        ))
                    }
                    )), h = !1;
                    var b = function() {
                        return P(this, null, (function() {
                            var u, l, s;
                            return p(this, (function(p) {
                                switch (p.label) {
                                case 0:
                                    if (p.trys.push([0, 2, , 3]),
                                    e && e.condition && !1 === e.condition(t, {
                                        getState: c,
                                        extra: a
                                    }))
                                        throw {
                                            name: "ConditionError",
                                            message: "Aborted due to condition callback returning false."
                                        };
                                    return h = !0,
                                    f(o(d, t, null == (u = null == e ? void 0 : e.getPendingMeta) ? void 0 : u.call(e, {
                                        requestId: d,
                                        arg: t
                                    }, {
                                        getState: c,
                                        extra: a
                                    }))),
                                    [4, Promise.race([v, Promise.resolve(r(t, {
                                        dispatch: f,
                                        getState: c,
                                        extra: a,
                                        requestId: d,
                                        signal: y.signal,
                                        rejectWithValue: function(t, r) {
                                            return new T(t,r)
                                        },
                                        fulfillWithValue: function(t, r) {
                                            return new M(t,r)
                                        }
                                    })).then((function(r) {
                                        if (r instanceof T)
                                            throw r;
                                        return r instanceof M ? n(r.payload, d, t, r.meta) : n(r, d, t)
                                    }
                                    ))])];
                                case 1:
                                    return l = p.sent(),
                                    [3, 3];
                                case 2:
                                    return s = p.sent(),
                                    l = s instanceof T ? i(null, d, t, s.payload, s.meta) : i(s, d, t),
                                    [3, 3];
                                case 3:
                                    return e && !e.dispatchConditionRejection && i.match(l) && l.meta.condition || f(l),
                                    [2, l]
                                }
                            }
                            ))
                        }
                        ))
                    }();
                    return Object.assign(b, {
                        abort: function(t) {
                            h && (s = t,
                            y.abort())
                        },
                        requestId: d,
                        arg: t,
                        unwrap: function() {
                            return b.then(W)
                        }
                    })
                }
            }
            ), {
                pending: o,
                rejected: i,
                fulfilled: n,
                typePrefix: t
            })
        }
        function W(t) {
            if (t.meta && t.meta.rejectedWithValue)
                throw t.payload;
            if (t.error)
                throw t.error;
            return t.payload
        }
        var K = function(t, r) {
            return (e = t) && "function" == typeof e.match ? t.match(r) : t(r);
            var e
        };
        function L() {
            for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
            return function(r) {
                return t.some((function(t) {
                    return K(t, r)
                }
                ))
            }
        }
        function U(t, r) {
            if (!t || !t.meta)
                return !1;
            var e = "string" == typeof t.meta.requestId
              , n = r.indexOf(t.meta.requestStatus) > -1;
            return e && n
        }
        function z(t) {
            return "function" == typeof t[0] && "pending"in t[0] && "fulfilled"in t[0] && "rejected"in t[0]
        }
        function X() {
            for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
            return 0 === t.length ? function(t) {
                return U(t, ["pending"])
            }
            : z(t) ? function(r) {
                var e = t.map((function(t) {
                    return t.pending
                }
                ));
                return L.apply(void 0, e)(r)
            }
            : X()(t[0])
        }
        function V() {
            for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
            return 0 === t.length ? function(t) {
                return U(t, ["rejected"])
            }
            : z(t) ? function(r) {
                var e = t.map((function(t) {
                    return t.rejected
                }
                ));
                return L.apply(void 0, e)(r)
            }
            : V()(t[0])
        }
        function B() {
            for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
            return 0 === t.length ? function(t) {
                return U(t, ["fulfilled"])
            }
            : z(t) ? function(r) {
                var e = t.map((function(t) {
                    return t.fulfilled
                }
                ));
                return L.apply(void 0, e)(r)
            }
            : B()(t[0])
        }
        (0,
        n.enableES5)()
    }
    ,
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
            return !!t && !!t[J]
        }
        function i(t) {
            return !!t && (function(t) {
                if (!t || "object" != typeof t)
                    return !1;
                var r = Object.getPrototypeOf(t);
                if (null === r)
                    return !0;
                var e = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
                return e === Object || "function" == typeof e && Function.toString.call(e) === $
            }(t) || Array.isArray(t) || !!t[G] || !!t.constructor[G] || d(t) || y(t))
        }
        function u(t) {
            return o(t) || n(23, t),
            t[J].t
        }
        function f(t, r, e) {
            void 0 === e && (e = !1),
            0 === c(t) ? (e ? Object.keys : H)(t).forEach((function(n) {
                e && "symbol" == typeof n || r(n, t[n], t)
            }
            )) : t.forEach((function(e, n) {
                return r(n, e, t)
            }
            ))
        }
        function c(t) {
            var r = t[J];
            return r ? r.i > 3 ? r.i - 4 : r.i : Array.isArray(t) ? 1 : d(t) ? 2 : y(t) ? 3 : 0
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
        function d(t) {
            return z && t instanceof Map
        }
        function y(t) {
            return X && t instanceof Set
        }
        function v(t) {
            return t.o || t.t
        }
        function h(t) {
            if (Array.isArray(t))
                return Array.prototype.slice.call(t);
            var r = Q(t);
            delete r[J];
            for (var e = H(r), n = 0; n < e.length; n++) {
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
            m(t) || o(t) || !i(t) || (c(t) > 1 && (t.set = t.add = t.clear = t.delete = g),
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
        function m(t) {
            return null == t || "object" != typeof t || Object.isFrozen(t)
        }
        function w(t) {
            var r = Y[t];
            return r || n(18, t),
            r
        }
        function O(t, r) {
            Y[t] || (Y[t] = r)
        }
        function P() {
            return L
        }
        function j(t, r) {
            r && (w("Patches"),
            t.u = [],
            t.s = [],
            t.v = r)
        }
        function E(t) {
            S(t),
            t.p.forEach(_),
            t.p = null
        }
        function S(t) {
            t === L && (L = t.l)
        }
        function A(t) {
            return L = {
                p: [],
                l: L,
                h: t,
                m: !0,
                _: 0
            }
        }
        function _(t) {
            var r = t[J];
            0 === r.i || 1 === r.i ? r.j() : r.O = !0
        }
        function D(t, r) {
            r._ = r.p.length;
            var e = r.p[0]
              , o = void 0 !== t && t !== e;
            return r.h.g || w("ES5").S(r, t, o),
            o ? (e[J].P && (E(r),
            n(4)),
            i(t) && (t = x(r, t),
            r.l || I(r, t)),
            r.u && w("Patches").M(e[J], t, r.u, r.s)) : t = x(r, e, []),
            E(r),
            r.u && r.v(r.u, r.s),
            t !== B ? t : void 0
        }
        function x(t, r, e) {
            if (m(r))
                return r;
            var n = r[J];
            if (!n)
                return f(r, (function(o, i) {
                    return k(t, n, r, o, i, e)
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
                var o = 4 === n.i || 5 === n.i ? n.o = h(n.k) : n.o;
                f(3 === n.i ? new Set(o) : o, (function(r, i) {
                    return k(t, n, o, r, i, e)
                }
                )),
                I(t, o, !1),
                e && t.u && w("Patches").R(n, e, t.u, t.s)
            }
            return n.o
        }
        function k(t, r, e, n, u, f) {
            if (o(u)) {
                var c = x(t, u, f && r && 3 !== r.i && !a(r.D, n) ? f.concat(n) : void 0);
                if (p(e, n, c),
                !o(c))
                    return;
                t.m = !1
            }
            if (i(u) && !m(u)) {
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
            var e = t[J];
            return (e ? v(e) : t)[r]
        }
        function N(t, r) {
            if (r in t)
                for (var e = Object.getPrototypeOf(t); e; ) {
                    var n = Object.getOwnPropertyDescriptor(e, r);
                    if (n)
                        return n;
                    e = Object.getPrototypeOf(e)
                }
        }
        function C(t) {
            t.P || (t.P = !0,
            t.l && C(t.l))
        }
        function T(t) {
            t.o || (t.o = h(t.t))
        }
        function M(t, r, e) {
            var n = d(r) ? w("MapSet").N(r, e) : y(r) ? w("MapSet").T(r, e) : t.g ? function(t, r) {
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
        function F(t) {
            return o(t) || n(22, t),
            function t(r) {
                if (!i(r))
                    return r;
                var e, n = r[J], o = c(r);
                if (n) {
                    if (!n.P && (n.i < 4 || !w("ES5").K(n)))
                        return n.t;
                    n.I = !0,
                    e = q(r, o),
                    n.I = !1
                } else
                    e = q(r, o);
                return f(e, (function(r, o) {
                    n && l(n.t, r) === o || p(e, r, t(o))
                }
                )),
                3 === o ? new Set(e) : e
            }(t)
        }
        function q(t, r) {
            switch (r) {
            case 2:
                return new Map(t);
            case 3:
                return Array.from(t)
            }
            return h(t)
        }
        function W() {
            function t(t, r) {
                var e = i[t];
                return e ? e.enumerable = r : i[t] = e = {
                    configurable: !0,
                    enumerable: r,
                    get: function() {
                        var r = this[J];
                        return Z.get(r, t)
                    },
                    set: function(r) {
                        var e = this[J];
                        Z.set(e, t, r)
                    }
                },
                e
            }
            function r(t) {
                for (var r = t.length - 1; r >= 0; r--) {
                    var o = t[r][J];
                    if (!o.P)
                        switch (o.i) {
                        case 5:
                            n(o) && C(o);
                            break;
                        case 4:
                            e(o) && C(o)
                        }
                }
            }
            function e(t) {
                for (var r = t.t, e = t.k, n = H(e), o = n.length - 1; o >= 0; o--) {
                    var i = n[o];
                    if (i !== J) {
                        var u = r[i];
                        if (void 0 === u && !a(r, i))
                            return !0;
                        var f = e[i]
                          , c = f && f[J];
                        if (c ? c.t !== u : !s(f, u))
                            return !0
                    }
                }
                var l = !!r[J];
                return n.length !== H(r).length + (l ? 0 : 1)
            }
            function n(t) {
                var r = t.k;
                if (r.length !== t.t.length)
                    return !0;
                var e = Object.getOwnPropertyDescriptor(r, r.length - 1);
                return !(!e || e.get)
            }
            var i = {};
            O("ES5", {
                J: function(r, e) {
                    var n = Array.isArray(r)
                      , o = function(r, e) {
                        if (r) {
                            for (var n = Array(e.length), o = 0; o < e.length; o++)
                                Object.defineProperty(n, "" + o, t(o, !0));
                            return n
                        }
                        var i = Q(e);
                        delete i[J];
                        for (var u = H(i), f = 0; f < u.length; f++) {
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
                    return Object.defineProperty(o, J, {
                        value: i,
                        writable: !0
                    }),
                    o
                },
                S: function(t, e, i) {
                    i ? o(e) && e[J].A === t && r(t.p) : (t.u && function t(r) {
                        if (r && "object" == typeof r) {
                            var e = r[J];
                            if (e) {
                                var o = e.t
                                  , i = e.k
                                  , u = e.D
                                  , c = e.i;
                                if (4 === c)
                                    f(i, (function(r) {
                                        r !== J && (void 0 !== o[r] || a(o, r) ? u[r] || t(i[r]) : (u[r] = !0,
                                        C(e)))
                                    }
                                    )),
                                    f(o, (function(t) {
                                        void 0 !== i[t] || a(i, t) || (u[t] = !1,
                                        C(e))
                                    }
                                    ));
                                else if (5 === c) {
                                    if (n(e) && (C(e),
                                    u.length = !0),
                                    i.length < o.length)
                                        for (var l = i.length; l < o.length; l++)
                                            u[l] = !1;
                                    else
                                        for (var p = o.length; p < i.length; p++)
                                            u[p] = !0;
                                    for (var s = Math.min(i.length, o.length), d = 0; d < s; d++)
                                        void 0 === u[d] && t(i[d])
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
            current: () => F,
            default: () => ot,
            enableES5: () => W,
            isDraft: () => o,
            isDraftable: () => i,
            original: () => u
        });
        var K, L, U = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), z = "undefined" != typeof Map, X = "undefined" != typeof Set, V = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, B = U ? Symbol.for("immer-nothing") : ((K = {})["immer-nothing"] = !0,
        K), G = U ? Symbol.for("immer-draftable") : "__$immer_draftable", J = U ? Symbol.for("immer-state") : "__$immer_state", $ = ("undefined" != typeof Symbol && Symbol.iterator,
        "" + Object.prototype.constructor), H = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(t) {
            return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
        }
        : Object.getOwnPropertyNames, Q = Object.getOwnPropertyDescriptors || function(t) {
            var r = {};
            return H(t).forEach((function(e) {
                r[e] = Object.getOwnPropertyDescriptor(t, e)
            }
            )),
            r
        }
        , Y = {}, Z = {
            get: function(t, r) {
                if (r === J)
                    return t;
                var e = v(t);
                if (!a(e, r))
                    return function(t, r, e) {
                        var n, o = N(r, e);
                        return o ? "value"in o ? o.value : null === (n = o.get) || void 0 === n ? void 0 : n.call(t.k) : void 0
                    }(t, e, r);
                var n = e[r];
                return t.I || !i(n) ? n : n === R(t.t, r) ? (T(t),
                t.o[r] = M(t.A.h, n, t)) : n
            },
            has: function(t, r) {
                return r in v(t)
            },
            ownKeys: function(t) {
                return Reflect.ownKeys(v(t))
            },
            set: function(t, r, e) {
                var n = N(v(t), r);
                if (null == n ? void 0 : n.set)
                    return n.set.call(t.k, e),
                    !0;
                if (!t.P) {
                    var o = R(v(t), r)
                      , i = null == o ? void 0 : o[J];
                    if (i && i.t === e)
                        return t.o[r] = e,
                        t.D[r] = !1,
                        !0;
                    if (s(e, o) && (void 0 !== e || a(t.t, r)))
                        return !0;
                    T(t),
                    C(t)
                }
                return t.o[r] === e && "number" != typeof e && (void 0 !== e || r in t.o) || (t.o[r] = e,
                t.D[r] = !0,
                !0)
            },
            deleteProperty: function(t, r) {
                return void 0 !== R(t.t, r) || r in t.t ? (t.D[r] = !1,
                T(t),
                C(t)) : delete t.D[r],
                t.o && delete t.o[r],
                !0
            },
            getOwnPropertyDescriptor: function(t, r) {
                var e = v(t)
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
                this.g = V,
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
                        var a = A(r)
                          , l = M(r, t, void 0)
                          , p = !0;
                        try {
                            c = e(l),
                            p = !1
                        } finally {
                            p ? E(a) : S(a)
                        }
                        return "undefined" != typeof Promise && c instanceof Promise ? c.then((function(t) {
                            return j(a, o),
                            D(t, a)
                        }
                        ), (function(t) {
                            throw E(a),
                            t
                        }
                        )) : (j(a, o),
                        D(c, a))
                    }
                    if (!t || "object" != typeof t) {
                        if ((c = e(t)) === B)
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
                o(t) && (t = F(t));
                var r = A(this)
                  , e = M(this, t, void 0);
                return e[J].C = !0,
                S(r),
                e
            }
            ,
            r.finishDraft = function(t, r) {
                var e = (t && t[J]).A;
                return j(e, r),
                D(void 0, e)
            }
            ,
            r.setAutoFreeze = function(t) {
                this.F = t
            }
            ,
            r.setUseProxies = function(t) {
                t && !V && n(20),
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
            bindActionCreators: () => h,
            combineReducers: () => y,
            compose: () => b,
            createStore: () => d
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
        function d(t, r, e) {
            var n;
            if ("function" == typeof r && "function" == typeof e || "function" == typeof e && "function" == typeof arguments[3])
                throw new Error(c(0));
            if ("function" == typeof r && void 0 === e && (e = r,
            r = void 0),
            void 0 !== e) {
                if ("function" != typeof e)
                    throw new Error(c(1));
                return e(d)(t, r)
            }
            if ("function" != typeof t)
                throw new Error(c(2));
            var o = t
              , i = r
              , u = []
              , f = u
              , l = !1;
            function y() {
                f === u && (f = u.slice())
            }
            function v() {
                if (l)
                    throw new Error(c(3));
                return i
            }
            function h(t) {
                if ("function" != typeof t)
                    throw new Error(c(4));
                if (l)
                    throw new Error(c(5));
                var r = !0;
                return y(),
                f.push(t),
                function() {
                    if (r) {
                        if (l)
                            throw new Error(c(6));
                        r = !1,
                        y();
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
                subscribe: h,
                getState: v,
                replaceReducer: function(t) {
                    if ("function" != typeof t)
                        throw new Error(c(10));
                    o = t,
                    b({
                        type: p.REPLACE
                    })
                }
            })[a] = function() {
                var t, r = h;
                return (t = {
                    subscribe: function(t) {
                        if ("object" != typeof t || null === t)
                            throw new Error(c(11));
                        function e() {
                            t.next && t.next(v())
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
        function y(t) {
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
        function v(t, r) {
            return function() {
                return r(t.apply(this, arguments))
            }
        }
        function h(t, r) {
            if ("function" == typeof t)
                return v(t, r);
            if ("object" != typeof t || null === t)
                throw new Error(c(16));
            var e = {};
            for (var n in t) {
                var o = t[n];
                "function" == typeof o && (e[n] = v(o, r))
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
