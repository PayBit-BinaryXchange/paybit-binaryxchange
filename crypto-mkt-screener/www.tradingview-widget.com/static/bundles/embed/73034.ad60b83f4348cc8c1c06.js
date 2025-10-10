(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[73034], {
    573034: (e, n, t) => {
        "use strict";
        t.d(n, {
            disableActivityTracking: () => Ne,
            disableAnonymousTracking: () => Me,
            discardBrace: () => Ue,
            enableActivityTrackingCallback: () => Re,
            enableAnonymousTracking: () => ze,
            newTracker: () => Je,
            setUserId: () => Be,
            trackPageView: () => _e,
            trackSelfDescribingEvent: () => Ve
        });
        var r = function() {
            return r = Object.assign || function(e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                    for (var o in n = arguments[t])
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                return e
            }
            ,
            r.apply(this, arguments)
        };
        Object.create;
        function o(e, n, t) {
            if (t || 2 === arguments.length)
                for (var r, o = 0, i = n.length; o < i; o++)
                    !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)),
                    r[o] = n[o]);
            return e.concat(r || Array.prototype.slice.call(n))
        }
        Object.create;
        var i = t(892674);
        function a(e) {
            if (!e)
                return e;
            switch (4 - e.length % 4) {
            case 2:
                e += "==";
                break;
            case 3:
                e += "="
            }
            return function(e) {
                var n, t, r, o, i, a, u = function(e) {
                    return decodeURIComponent(e.split("").map((function(e) {
                        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                    }
                    )).join(""))
                }, s = 0, l = 0, f = "", d = [];
                if (!e)
                    return e;
                e += "";
                do {
                    n = (a = c.indexOf(e.charAt(s++)) << 18 | c.indexOf(e.charAt(s++)) << 12 | (o = c.indexOf(e.charAt(s++))) << 6 | (i = c.indexOf(e.charAt(s++)))) >> 16 & 255,
                    t = a >> 8 & 255,
                    r = 255 & a,
                    d[l++] = 64 === o ? String.fromCharCode(n) : 64 === i ? String.fromCharCode(n, t) : String.fromCharCode(n, t, r)
                } while (s < e.length);
                return f = d.join(""),
                u(f.replace(/\0+$/, ""))
            }(e.replace(/-/g, "+").replace(/_/g, "/"))
        }
        function u(e) {
            if (!e)
                return e;
            var n = function(e) {
                var n, t, r, o, i, a = 0, u = 0, s = [];
                if (!e)
                    return e;
                e = unescape(encodeURIComponent(e));
                do {
                    n = (i = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63,
                    t = i >> 12 & 63,
                    r = i >> 6 & 63,
                    o = 63 & i,
                    s[u++] = c.charAt(n) + c.charAt(t) + c.charAt(r) + c.charAt(o)
                } while (a < e.length);
                var l = s.join("")
                  , f = e.length % 3;
                return (f ? l.slice(0, f - 3) : l) + "===".slice(f || 3)
            }(e);
            return n.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
        }
        var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        function s() {
            var e, n = {}, t = [], r = [], o = [], i = function(e, t) {
                null != t && "" !== t && (n[e] = t)
            };
            return {
                add: i,
                addDict: function(e) {
                    for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && i(n, e[n])
                },
                addJson: function(e, n, o) {
                    if (o && f(o)) {
                        var i = {
                            keyIfEncoded: e,
                            keyIfNotEncoded: n,
                            json: o
                        };
                        r.push(i),
                        t.push(i)
                    }
                },
                addContextEntity: function(e) {
                    o.push(e)
                },
                getPayload: function() {
                    return n
                },
                getJson: function() {
                    return t
                },
                withJsonProcessor: function(n) {
                    e = n
                },
                build: function() {
                    return null == e || e(this, r, o),
                    n
                }
            }
        }
        function l(e) {
            return function(n, t, r) {
                for (var i = function(t, r, o) {
                    var i = JSON.stringify(t);
                    e ? n.add(r, u(i)) : n.add(o, i)
                }, c = function(t, r) {
                    var o = t || function() {
                        var t = n.getPayload();
                        if (e ? t.cx : t.co)
                            return JSON.parse(e ? a(t.cx) : t.co)
                    }();
                    return o ? o.data = o.data.concat(r.data) : o = r,
                    o
                }, s = void 0, l = 0, f = t; l < f.length; l++) {
                    var d = f[l];
                    "cx" === d.keyIfEncoded ? s = c(s, d.json) : i(d.json, d.keyIfEncoded, d.keyIfNotEncoded)
                }
                (t.length = 0,
                r.length) && (s = c(s, {
                    schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                    data: o([], r, !0)
                }),
                r.length = 0);
                s && i(s, "cx", "co")
            }
        }
        function f(e) {
            if (!d(e))
                return !1;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n))
                    return !0;
            return !1
        }
        function d(e) {
            return null != e && (e.constructor === {}.constructor || e.constructor === [].constructor)
        }
        var v, g = "Snowplow: ";
        !function(e) {
            e[e.none = 0] = "none",
            e[e.error = 1] = "error",
            e[e.warn = 2] = "warn",
            e[e.debug = 3] = "debug",
            e[e.info = 4] = "info"
        }(v || (v = {}));
        var p = function(e) {
            void 0 === e && (e = v.warn);
            return {
                setLogLevel: function(n) {
                    e = v[n] ? n : v.warn
                },
                warn: function(n, t) {
                    for (var r = [], i = 2; i < arguments.length; i++)
                        r[i - 2] = arguments[i];
                    if (e >= v.warn && "undefined" != typeof console) {
                        var a = g + n;
                        t ? console.warn.apply(console, o([a + "\n", t], r, !1)) : console.warn.apply(console, o([a], r, !1))
                    }
                },
                error: function(n, t) {
                    for (var r = [], i = 2; i < arguments.length; i++)
                        r[i - 2] = arguments[i];
                    if (e >= v.error && "undefined" != typeof console) {
                        var a = g + n + "\n";
                        t ? console.error.apply(console, o([a + "\n", t], r, !1)) : console.error.apply(console, o([a], r, !1))
                    }
                },
                debug: function(n) {
                    for (var t = [], r = 1; r < arguments.length; r++)
                        t[r - 1] = arguments[r];
                    e >= v.debug && "undefined" != typeof console && console.debug.apply(console, o([g + n], t, !1))
                },
                info: function(n) {
                    for (var t = [], r = 1; r < arguments.length; r++)
                        t[r - 1] = arguments[r];
                    e >= v.info && "undefined" != typeof console && console.info.apply(console, o([g + n], t, !1))
                }
            }
        }();
        function m() {
            var e = []
              , n = []
              , t = function(t) {
                var r = function(e) {
                    for (var n = e.getJson(), t = 0, r = n; t < r.length; t++) {
                        var o = r[t];
                        if ("ue_px" === o.keyIfEncoded && "object" == typeof o.json.data) {
                            var i = o.json.data.schema;
                            if ("string" == typeof i)
                                return i
                        }
                    }
                    return ""
                }(t)
                  , o = function(e) {
                    var n = e.getPayload().e;
                    return "string" == typeof n ? n : ""
                }(t)
                  , i = []
                  , a = E(e, t, o, r);
                i.push.apply(i, a);
                var u = function(e, n, t, r) {
                    var o, i = P(e), a = function(e) {
                        var o = function(e, n, t, r) {
                            if (T(e)) {
                                var o = e[0]
                                  , i = !1;
                                try {
                                    i = o({
                                        event: n.getPayload(),
                                        eventType: t,
                                        eventSchema: r
                                    })
                                } catch (e) {
                                    i = !1
                                }
                                if (!0 === i)
                                    return E(e[1], n, t, r)
                            } else if (I(e) && function(e, n) {
                                var t = 0
                                  , r = 0
                                  , o = e.accept;
                                Array.isArray(o) ? e.accept.some((function(e) {
                                    return C(e, n)
                                }
                                )) && r++ : "string" == typeof o && C(o, n) && r++;
                                var i = e.reject;
                                Array.isArray(i) ? e.reject.some((function(e) {
                                    return C(e, n)
                                }
                                )) && t++ : "string" == typeof i && C(i, n) && t++;
                                if (r > 0 && 0 === t)
                                    return !0;
                                if (0 === r && t > 0)
                                    return !1;
                                return !1
                            }(e[0], r))
                                return E(e[1], n, t, r);
                            return []
                        }(e, n, t, r);
                        if (o && 0 !== o.length)
                            return o
                    }, u = i.map(a);
                    return (o = []).concat.apply(o, u.filter((function(e) {
                        return null != e && e.filter(Boolean)
                    }
                    )))
                }(n, t, o, r);
                return i.push.apply(i, u),
                i
            };
            return {
                getGlobalPrimitives: function() {
                    return e
                },
                getConditionalProviders: function() {
                    return n
                },
                addGlobalContexts: function(t) {
                    for (var r = [], o = [], i = 0, a = t; i < a.length; i++) {
                        var u = a[i];
                        A(u) ? r.push(u) : x(u) && o.push(u)
                    }
                    e = e.concat(o),
                    n = n.concat(r)
                },
                clearGlobalContexts: function() {
                    n = [],
                    e = []
                },
                removeGlobalContexts: function(t) {
                    for (var r = function(t) {
                        A(t) ? n = n.filter((function(e) {
                            return JSON.stringify(e) !== JSON.stringify(t)
                        }
                        )) : x(t) && (e = e.filter((function(e) {
                            return JSON.stringify(e) !== JSON.stringify(t)
                        }
                        )))
                    }, o = 0, i = t; o < i.length; o++) {
                        r(i[o])
                    }
                },
                getApplicableContexts: function(e) {
                    return t(e)
                }
            }
        }
        function h(e) {
            var n = e.split(".");
            return !!(n && n.length > 1) && function(e) {
                if ("*" === e[0] || "*" === e[1])
                    return !1;
                if (e.slice(2).length > 0) {
                    for (var n = !1, t = 0, r = e.slice(2); t < r.length; t++)
                        if ("*" === r[t])
                            n = !0;
                        else if (n)
                            return !1;
                    return !0
                }
                return 2 == e.length
            }(n)
        }
        function y(e) {
            var n = new RegExp("^iglu:((?:(?:[a-zA-Z0-9-_]+|\\*).)+(?:[a-zA-Z0-9-_]+|\\*))/([a-zA-Z0-9-_.]+|\\*)/jsonschema/([1-9][0-9]*|\\*)-(0|[1-9][0-9]*|\\*)-(0|[1-9][0-9]*|\\*)$").exec(e);
            if (null !== n && h(n[1]))
                return n.slice(1, 6)
        }
        function w(e) {
            var n = y(e);
            if (n) {
                var t = n[0];
                return 5 === n.length && h(t)
            }
            return !1
        }
        function b(e) {
            return function(e) {
                return Array.isArray(e) && e.every((function(e) {
                    return "string" == typeof e
                }
                ))
            }(e) ? e.every((function(e) {
                return w(e)
            }
            )) : "string" == typeof e && w(e)
        }
        function k(e) {
            var n = e;
            return !!(f(n) && "schema"in n && "data"in n) && ("string" == typeof n.schema && "object" == typeof n.data)
        }
        function S(e) {
            return "function" == typeof e && e.length <= 1
        }
        function x(e) {
            return S(e) || k(e)
        }
        function T(e) {
            return !(!Array.isArray(e) || 2 !== e.length) && (Array.isArray(e[1]) ? S(e[0]) && e[1].every(x) : S(e[0]) && x(e[1]))
        }
        function I(e) {
            return !(!Array.isArray(e) || 2 !== e.length) && (!!function(e) {
                var n = e
                  , t = 0;
                if (null != e && "object" == typeof e && !Array.isArray(e)) {
                    if (Object.prototype.hasOwnProperty.call(n, "accept")) {
                        if (!b(n.accept))
                            return !1;
                        t += 1
                    }
                    if (Object.prototype.hasOwnProperty.call(n, "reject")) {
                        if (!b(n.reject))
                            return !1;
                        t += 1
                    }
                    return t > 0 && t <= 2
                }
                return !1
            }(e[0]) && (Array.isArray(e[1]) ? e[1].every(x) : x(e[1])))
        }
        function A(e) {
            return T(e) || I(e)
        }
        function C(e, n) {
            if (!w(e))
                return !1;
            var t = y(e)
              , r = function(e) {
                var n = new RegExp("^iglu:([a-zA-Z0-9-_.]+)/([a-zA-Z0-9-_]+)/jsonschema/([1-9][0-9]*)-(0|[1-9][0-9]*)-(0|[1-9][0-9]*)$").exec(e);
                if (null !== n)
                    return n.slice(1, 6)
            }(n);
            if (t && r) {
                if (!function(e, n) {
                    var t = n.split(".")
                      , r = e.split(".");
                    if (t && r) {
                        if (t.length !== r.length)
                            return !1;
                        for (var o = 0; o < r.length; o++)
                            if (!O(t[o], r[o]))
                                return !1;
                        return !0
                    }
                    return !1
                }(t[0], r[0]))
                    return !1;
                for (var o = 1; o < 5; o++)
                    if (!O(t[o], r[o]))
                        return !1;
                return !0
            }
            return !1
        }
        function O(e, n) {
            return e && n && "*" === e || e === n
        }
        function P(e) {
            return Array.isArray(e) ? e : Array.of(e)
        }
        function E(e, n, t, r) {
            var o, i = P(e).map((function(e) {
                var o = function(e, n, t, r) {
                    if (k(e))
                        return [e];
                    if (S(e)) {
                        var o = function(e, n, t, r) {
                            var o = void 0;
                            try {
                                return o = e({
                                    event: n.getPayload(),
                                    eventType: t,
                                    eventSchema: r
                                }),
                                Array.isArray(o) && o.every(k) || k(o) ? o : void 0
                            } catch (e) {
                                o = void 0
                            }
                            return o
                        }(e, n, t, r);
                        if (k(o))
                            return [o];
                        if (Array.isArray(o))
                            return o
                    }
                    return
                }(e, n, t, r);
                if (o && 0 !== o.length)
                    return o
            }
            ));
            return (o = []).concat.apply(o, i.filter((function(e) {
                return null != e && e.filter(Boolean)
            }
            )))
        }
        function L(e) {
            void 0 === e && (e = {});
            var n = e.base64
              , t = e.corePlugins
              , a = e.callback
              , u = null != t ? t : []
              , c = function(e, n, t) {
                var r = function(e) {
                    return {
                        addPluginContexts: function(n) {
                            var t = n ? o([], n, !0) : [];
                            return e.forEach((function(e) {
                                try {
                                    e.contexts && t.push.apply(t, e.contexts())
                                } catch (e) {
                                    p.error("Error adding plugin contexts", e)
                                }
                            }
                            )),
                            t
                        }
                    }
                }(n)
                  , a = m()
                  , u = e
                  , c = {};
                function s(e, n) {
                    c[e] = n
                }
                var f = {
                    track: function(e, o, s) {
                        e.withJsonProcessor(l(u)),
                        e.add("eid", (0,
                        i.v4)()),
                        e.addDict(c);
                        var f = function(e) {
                            return null == e ? {
                                type: "dtm",
                                value: (new Date).getTime()
                            } : "number" == typeof e ? {
                                type: "dtm",
                                value: e
                            } : "ttm" === e.type ? {
                                type: "ttm",
                                value: e.value
                            } : {
                                type: "dtm",
                                value: e.value || (new Date).getTime()
                            }
                        }(s);
                        e.add(f.type, f.value.toString());
                        var d = function(e) {
                            if (e && e.length)
                                return {
                                    schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                                    data: e
                                }
                        }(function(e, n) {
                            var t = a.getApplicableContexts(e)
                              , r = [];
                            return n && n.length && r.push.apply(r, n),
                            t && t.length && r.push.apply(r, t),
                            r
                        }(e, r.addPluginContexts(o)));
                        void 0 !== d && e.addJson("cx", "co", d),
                        n.forEach((function(n) {
                            try {
                                n.beforeTrack && n.beforeTrack(e)
                            } catch (e) {
                                p.error("Plugin beforeTrack", e)
                            }
                        }
                        )),
                        "function" == typeof t && t(e);
                        var v = e.build();
                        return n.forEach((function(e) {
                            try {
                                e.afterTrack && e.afterTrack(v)
                            } catch (e) {
                                p.error("Plugin afterTrack", e)
                            }
                        }
                        )),
                        v
                    },
                    addPayloadPair: s,
                    getBase64Encoding: function() {
                        return u
                    },
                    setBase64Encoding: function(e) {
                        u = e
                    },
                    addPayloadDict: function(e) {
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && (c[n] = e[n])
                    },
                    resetPayloadPairs: function(e) {
                        c = d(e) ? e : {}
                    },
                    setTrackerVersion: function(e) {
                        s("tv", e)
                    },
                    setTrackerNamespace: function(e) {
                        s("tna", e)
                    },
                    setAppId: function(e) {
                        s("aid", e)
                    },
                    setPlatform: function(e) {
                        s("p", e)
                    },
                    setUserId: function(e) {
                        s("uid", e)
                    },
                    setScreenResolution: function(e, n) {
                        s("res", e + "x" + n)
                    },
                    setViewport: function(e, n) {
                        s("vp", e + "x" + n)
                    },
                    setColorDepth: function(e) {
                        s("cd", e)
                    },
                    setTimezone: function(e) {
                        s("tz", e)
                    },
                    setLang: function(e) {
                        s("lang", e)
                    },
                    setIpAddress: function(e) {
                        s("ip", e)
                    },
                    setUseragent: function(e) {
                        s("ua", e)
                    },
                    addGlobalContexts: function(e) {
                        a.addGlobalContexts(e)
                    },
                    clearGlobalContexts: function() {
                        a.clearGlobalContexts()
                    },
                    removeGlobalContexts: function(e) {
                        a.removeGlobalContexts(e)
                    }
                };
                return f
            }(null == n || n, u, a)
              , s = r(r({}, c), {
                addPlugin: function(e) {
                    var n, t, r = e.plugin;
                    u.push(r),
                    null === (n = r.logger) || void 0 === n || n.call(r, p),
                    null === (t = r.activateCorePlugin) || void 0 === t || t.call(r, s)
                }
            });
            return null == u || u.forEach((function(e) {
                var n, t;
                null === (n = e.logger) || void 0 === n || n.call(e, p),
                null === (t = e.activateCorePlugin) || void 0 === t || t.call(e, s)
            }
            )),
            s
        }
        function D(e) {
            var n = e.event
              , t = n.schema
              , r = n.data
              , o = s()
              , i = {
                schema: "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",
                data: {
                    schema: t,
                    data: r
                }
            };
            return o.add("e", "ue"),
            o.addJson("ue_px", "ue_pr", i),
            o
        }
        var j = "3.24.1"
          , U = t(258101)
          , R = t.n(U);
        function N(e, n, t) {
            void 0 === t && (t = 63072e3);
            try {
                var r = window.localStorage
                  , o = Date.now() + 1e3 * t;
                return r.setItem("".concat(e, ".expires"), o.toString()),
                r.setItem(e, n),
                !0
            } catch (e) {
                return !1
            }
        }
        function B(e) {
            try {
                var n = window.localStorage;
                return n.removeItem(e),
                n.removeItem(e + ".expires"),
                !0
            } catch (e) {
                return !1
            }
        }
        function _(e) {
            try {
                return window.sessionStorage.getItem(e)
            } catch (e) {
                return
            }
        }
        var V = {
            sessionId: !0,
            sourceId: !0,
            sourcePlatform: !1,
            userId: !1,
            reason: !1
        };
        function M(e) {
            return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=+$/, "")
        }
        function z(e) {
            return !(!e || "string" != typeof e.valueOf())
        }
        function H(e) {
            return Number.isInteger && Number.isInteger(e) || "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }
        function J(e) {
            if (!z(e)) {
                e = e.text || "";
                var n = document.getElementsByTagName("title");
                n && null != n[0] && (e = n[0].text)
            }
            return e
        }
        function q(e) {
            var n = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)").exec(e);
            return n ? n[1] : e
        }
        function F(e) {
            var n = e.length;
            return "." === e.charAt(--n) && (e = e.slice(0, n)),
            "*." === e.slice(0, 2) && (e = e.slice(1)),
            e
        }
        function G(e) {
            var n = window
              , t = W("referrer", n.location.href) || W("referer", n.location.href);
            if (t)
                return t;
            if (e)
                return e;
            try {
                if (n.top)
                    return n.top.document.referrer;
                if (n.parent)
                    return n.parent.document.referrer
            } catch (e) {}
            return document.referrer
        }
        function X(e, n, t, r) {
            return e.addEventListener ? (e.addEventListener(n, t, r),
            !0) : e.attachEvent ? e.attachEvent("on" + n, t) : void (e["on" + n] = t)
        }
        function W(e, n) {
            var t = new RegExp("^[^#]*[?&]" + e + "=([^&#]*)").exec(n);
            return t ? decodeURIComponent(t[1].replace(/\+/g, " ")) : null
        }
        function Y(e, n, t, r) {
            Z(e, "", -1, "/", n, t, r)
        }
        function Q(e) {
            for (var n = document.cookie.split("; "), t = [], r = 0; r < n.length; r++)
                n[r].substring(0, e.length) === e && t.push(n[r]);
            return t
        }
        function Z(e, n, t, r, o, i, a) {
            return arguments.length > 1 ? document.cookie = e + "=" + encodeURIComponent(null != n ? n : "") + (t ? "; Expires=" + new Date(+new Date + 1e3 * t).toUTCString() : "") + (r ? "; Path=" + r : "") + (o ? "; Domain=" + o : "") + (i ? "; SameSite=" + i : "") + (a ? "; Secure" : "") : decodeURIComponent((("; " + document.cookie).split("; " + e + "=")[1] || "").split(";")[0])
        }
        function K() {
            var e = "modernizr";
            if (!function() {
                try {
                    return !!window.localStorage
                } catch (e) {
                    return !0
                }
            }())
                return !1;
            try {
                var n = window.localStorage;
                return n.setItem(e, e),
                n.removeItem(e),
                !0
            } catch (e) {
                return !1
            }
        }
        var $ = "iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0"
          , ee = "iglu:com.snowplowanalytics.snowplow/browser_context/jsonschema/2-0-0"
          , ne = "iglu:com.snowplowanalytics.snowplow/client_session/jsonschema/1-0-2"
          , te = "iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4";
        function re(e, n, t, r, o, i, a, u, c, s, l, f, d, v, g, m, h, y, w, b) {
            void 0 === y && (y = !0);
            var k, S, x = !1, T = [], I = !1, A = !0 === (r = "string" == typeof r ? r.toLowerCase() : r) || "beacon" === r || "true" === r, C = Boolean(A && window.navigator && "function" == typeof window.navigator.sendBeacon && !(function(e, n) {
                var t = n.match("(iP.+; CPU .*OS (d+)[_d]*.*) AppleWebKit/");
                return !(!t || !t.length) && parseInt(t[0]) <= e
            }(13, S = window.navigator.userAgent) || function(e, n, t) {
                var r = t.match("(Macintosh;.*Mac OS X (d+)_(d+)[_d]*.*) AppleWebKit/");
                return !(!r || !r.length) && (parseInt(r[0]) <= e || parseInt(r[0]) === e && parseInt(r[1]) <= n)
            }(10, 15, S) && function(e) {
                return e.match("Version/.* Safari/") && !function(e) {
                    return e.match("Chrom(e|ium)")
                }(e)
            }(S))) && A, O = "get" === r, P = Boolean(window.XMLHttpRequest && "withCredentials"in new XMLHttpRequest), E = !O && P && ("post" === r || A), L = E ? o : "/i", D = "snowplowOutQueue_".concat(e, "_").concat(E ? "post2" : "get");
            if (A && (d = {}),
            i = t && K() && E && i || 1,
            t)
                try {
                    var j = window.localStorage.getItem(D);
                    T = j ? JSON.parse(j) : []
                } catch (e) {}
            function U(e) {
                var n = Object.keys(e).map((function(n) {
                    return [n, e[n]]
                }
                )).reduce((function(e, n) {
                    var t = n[0]
                      , r = n[1];
                    return e[t] = r.toString(),
                    e
                }
                ), {});
                return {
                    evt: n,
                    bytes: R(JSON.stringify(n))
                }
            }
            function R(e) {
                for (var n = 0, t = 0; t < e.length; t++) {
                    var r = e.charCodeAt(t);
                    r <= 127 ? n += 1 : r <= 2047 ? n += 2 : r >= 55296 && r <= 57343 ? (n += 4,
                    t++) : n += r < 65535 ? 3 : 4
                }
                return n
            }
            Array.isArray(T) || (T = []),
            n.outQueues.push(T),
            P && i > 1 && n.bufferFlushers.push((function(e) {
                x || H(e)
            }
            ));
            var B = function(e) {
                return "object" == typeof e[0] && "evt"in e[0]
            };
            function _(e, n) {
                var t = q(n, !0, !1)
                  , r = G([e.evt]);
                t.onreadystatechange = function() {
                    4 === t.readyState && (J(t.status) ? null == w || w(r) : null == b || b({
                        status: t.status,
                        message: t.statusText,
                        events: r,
                        willRetry: !1
                    }))
                }
                ,
                t.send(F(r))
            }
            function V(e) {
                for (var n = 0; n < e; n++)
                    T.shift();
                t && N(D, JSON.stringify(T.slice(0, s)))
            }
            function M(e, n, t) {
                e.onreadystatechange = function() {
                    if (4 === e.readyState)
                        if (clearTimeout(r),
                        J(e.status))
                            V(n),
                            null == w || w(t),
                            H();
                        else {
                            var o = function(e) {
                                if (J(e))
                                    return !1;
                                if (!y)
                                    return !1;
                                if (g.includes(e))
                                    return !0;
                                return !m.includes(e)
                            }(e.status);
                            o || (p.error("Status ".concat(e.status, ", will not retry.")),
                            V(n)),
                            null == b || b({
                                status: e.status,
                                message: e.statusText,
                                events: t,
                                willRetry: o
                            }),
                            x = !1
                        }
                }
                ;
                var r = setTimeout((function() {
                    e.abort(),
                    y || V(n),
                    null == b || b({
                        status: 0,
                        message: "timeout",
                        events: t,
                        willRetry: y
                    }),
                    x = !1
                }
                ), l)
            }
            function H(e) {
                for (void 0 === e && (e = !1); T.length && "string" != typeof T[0] && "object" != typeof T[0]; )
                    T.shift();
                if (T.length) {
                    if (!z(k))
                        throw "No collector configured";
                    if (x = !0,
                    h && !I) {
                        var n = q(h, !1, e);
                        return I = !0,
                        n.timeout = l,
                        n.onreadystatechange = function() {
                            4 === n.readyState && H()
                        }
                        ,
                        void n.send()
                    }
                    if (P) {
                        var r = void 0
                          , o = void 0
                          , i = void 0;
                        if (B(T) ? (o = q(r = k, !0, e),
                        i = function(e) {
                            for (var n = 0, t = 0; n < e.length && !((t += e[n].bytes) >= a); )
                                n += 1;
                            return n
                        }(T)) : (o = q(r = X(T[0]), !1, e),
                        i = 1),
                        B(T)) {
                            var u = T.slice(0, i);
                            if (u.length > 0) {
                                var c = !1
                                  , d = u.map((function(e) {
                                    return e.evt
                                }
                                ));
                                if (C) {
                                    var v = new Blob([F(G(d))],{
                                        type: "application/json"
                                    });
                                    try {
                                        c = window.navigator.sendBeacon(r, v)
                                    } catch (e) {
                                        c = !1
                                    }
                                }
                                if (!0 === c)
                                    V(i),
                                    null == w || w(u),
                                    H();
                                else {
                                    var g = G(d);
                                    M(o, i, g),
                                    o.send(F(g))
                                }
                            }
                        } else
                            M(o, i, [r]),
                            o.send()
                    } else if (f || B(T))
                        x = !1;
                    else {
                        var p = new Image(1,1)
                          , m = !0;
                        p.onload = function() {
                            m && (m = !1,
                            T.shift(),
                            t && N(D, JSON.stringify(T.slice(0, s))),
                            H())
                        }
                        ,
                        p.onerror = function() {
                            m && (m = !1,
                            x = !1)
                        }
                        ,
                        p.src = X(T[0]),
                        setTimeout((function() {
                            m && x && (m = !1,
                            H())
                        }
                        ), l)
                    }
                } else
                    x = !1
            }
            function J(e) {
                return e >= 200 && e < 300
            }
            function q(e, n, t) {
                var r = new XMLHttpRequest;
                for (var o in n ? (r.open("POST", e, !t),
                r.setRequestHeader("Content-Type", "application/json; charset=UTF-8")) : r.open("GET", e, !t),
                r.withCredentials = v,
                f && r.setRequestHeader("SP-Anonymous", "*"),
                d)
                    Object.prototype.hasOwnProperty.call(d, o) && r.setRequestHeader(o, d[o]);
                return r
            }
            function F(e) {
                return JSON.stringify({
                    schema: te,
                    data: e
                })
            }
            function G(e) {
                for (var n = (new Date).getTime().toString(), t = 0; t < e.length; t++)
                    e[t].stm = n;
                return e
            }
            function X(e) {
                return c ? k + e.replace("?", "?stm=" + (new Date).getTime() + "&") : k + e
            }
            return {
                enqueueRequest: function(e, n) {
                    k = n + L;
                    var r = function(e, n) {
                        return p.warn("Event (" + e + "B) too big, max is " + n)
                    };
                    if (E) {
                        if ((f = U(e)).bytes >= a)
                            return r(f.bytes, a),
                            void _(f, k);
                        T.push(f)
                    } else {
                        var c = function(e) {
                            var n = "?"
                              , t = {
                                co: !0,
                                cx: !0
                            }
                              , r = !0;
                            for (var o in e)
                                e.hasOwnProperty(o) && !t.hasOwnProperty(o) && (r ? r = !1 : n += "&",
                                n += encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
                            for (var i in t)
                                e.hasOwnProperty(i) && t.hasOwnProperty(i) && (n += "&" + i + "=" + encodeURIComponent(e[i]));
                            return n
                        }(e);
                        if (u > 0) {
                            var l = R(X(c));
                            if (l >= u) {
                                var f;
                                if (r(l, u),
                                P)
                                    _(f = U(e), n + o);
                                return
                            }
                        }
                        T.push(c)
                    }
                    var d = !1;
                    t && (d = N(D, JSON.stringify(T.slice(0, s)))),
                    x || d && !(T.length >= i) || H()
                },
                executeQueue: function() {
                    x || H()
                },
                setUseLocalStorage: function(e) {
                    t = e
                },
                setAnonymousTracking: function(e) {
                    f = e
                },
                setCollectorUrl: function(e) {
                    k = e + L
                },
                setBufferSize: function(e) {
                    i = e
                }
            }
        }
        function oe(e, n, t) {
            var r, o, i, a;
            return "translate.googleusercontent.com" === e ? ("" === t && (t = n),
            e = q(n = null !== (o = n,
            i = "u",
            r = (a = new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+))([?][^#]+)").exec(o)) && (null == a ? void 0 : a.length) > 1 ? W(i, a[1]) : null) && void 0 !== r ? r : "")) : "cc.bingj.com" !== e && "webcache.googleusercontent.com" !== e || (e = q(n = document.links[0].href)),
            [e, n, t]
        }
        var ie = 0
          , ae = 1
          , ue = 2
          , ce = 3
          , se = 4
          , le = 5
          , fe = 6
          , de = 7
          , ve = 8
          , ge = 9
          , pe = 10;
        function me(e, n) {
            void 0 === n && (n = {
                memorizedVisitCount: 1
            });
            var t = n.memorizedVisitCount;
            ke(e) ? (e[de] = e[fe],
            e[le] = e[se],
            e[ce]++) : e[ce] = t;
            var r = (0,
            i.v4)();
            return e[fe] = r,
            e[pe] = 0,
            e[ve] = "",
            e[ge] = void 0,
            r
        }
        function he(e) {
            e[se] = Math.round((new Date).getTime() / 1e3)
        }
        function ye(e, n, t) {
            var r = e[ge];
            return {
                userId: t ? "00000000-0000-0000-0000-000000000000" : e[ae],
                sessionId: e[fe],
                eventIndex: e[pe],
                sessionIndex: e[ce],
                previousSessionId: t ? null : e[de] || null,
                storageMechanism: "localStorage" == n ? "LOCAL_STORAGE" : "COOKIE_1",
                firstEventId: e[ve] || null,
                firstEventTimestamp: r ? new Date(r).toISOString() : null
            }
        }
        function we(e) {
            return e[fe]
        }
        function be(e) {
            return e[ce]
        }
        function ke(e) {
            return "0" === e[ie]
        }
        var Se, xe = !1;
        var Te = "x";
        function Ie() {
            return "ResizeObserver"in window ? (Se || (Se = Ae()),
            function() {
                if (!xe && document && document.body && document.documentElement) {
                    xe = !0;
                    var e = new ResizeObserver((function(e) {
                        for (var n = 0, t = e; n < t.length; n++) {
                            var r = t[n];
                            r.target !== document.body && r.target !== document.documentElement || (Se = Ae())
                        }
                    }
                    ));
                    e.observe(document.body),
                    e.observe(document.documentElement)
                }
            }(),
            Se) : Ae()
        }
        function Ae() {
            return {
                viewport: Oe(Ce()),
                documentSize: Oe((e = document.documentElement,
                n = document.body,
                t = n ? Math.max(n.offsetHeight, n.scrollHeight) : 0,
                r = Math.max(e.clientWidth, e.offsetWidth, e.scrollWidth),
                o = Math.max(e.clientHeight, e.offsetHeight, e.scrollHeight, t),
                isNaN(r) || isNaN(o) ? "" : r + Te + o)),
                resolution: Oe(screen.width + Te + screen.height),
                colorDepth: screen.colorDepth,
                devicePixelRatio: window.devicePixelRatio,
                cookiesEnabled: window.navigator.cookieEnabled,
                online: window.navigator.onLine,
                browserLanguage: window.navigator.language || window.navigator.userLanguage,
                documentLanguage: document.documentElement.lang,
                webdriver: window.navigator.webdriver,
                deviceMemory: window.navigator.deviceMemory,
                hardwareConcurrency: window.navigator.hardwareConcurrency
            };
            var e, n, t, r, o
        }
        function Ce() {
            var e, n;
            if ("innerWidth"in window)
                e = window.innerWidth,
                n = window.innerHeight;
            else {
                var t = document.documentElement || document.body;
                e = t.clientWidth,
                n = t.clientHeight
            }
            return e >= 0 && n >= 0 ? e + Te + n : null
        }
        function Oe(e) {
            return e && e.split(Te).map((function(e) {
                return Math.floor(Number(e))
            }
            )).join(Te)
        }
        function Pe(e, n, t, a, u, c) {
            void 0 === c && (c = {});
            var l = []
              , f = function(e, n, t, a, u, c) {
                var f, d, v, g, m, h, y, w, b, k, S, x, T, I, A, C, O, P, E, D, j, U, z, K, te, Se, xe, Te, Ae;
                c.eventMethod = null !== (f = c.eventMethod) && void 0 !== f ? f : "post";
                var Ce, Oe, Pe = function(e) {
                    var n;
                    return null !== (n = e.stateStorageStrategy) && void 0 !== n ? n : "cookieAndLocalStorage"
                }, Ee = function(e) {
                    var n, t;
                    return "boolean" != typeof e.anonymousTracking && (null !== (t = !0 === (null === (n = e.anonymousTracking) || void 0 === n ? void 0 : n.withSessionTracking)) && void 0 !== t && t)
                }, Le = function(e) {
                    var n, t;
                    return "boolean" != typeof e.anonymousTracking && (null !== (t = !0 === (null === (n = e.anonymousTracking) || void 0 === n ? void 0 : n.withServerAnonymisation)) && void 0 !== t && t)
                }, De = function(e) {
                    return !!e.anonymousTracking
                }, je = null !== (v = null === (d = null == c ? void 0 : c.contexts) || void 0 === d ? void 0 : d.browser) && void 0 !== v && v, Ue = null === (m = null === (g = null == c ? void 0 : c.contexts) || void 0 === g ? void 0 : g.webPage) || void 0 === m || m;
                l.push((Ce = function(e) {
                    return Sn ? null : e
                }
                ,
                Oe = function(e) {
                    return bn ? e : Ce(e)
                }
                ,
                {
                    beforeTrack: function(e) {
                        var n = Wn("ses")
                          , t = ut()
                          , r = 0 === function(e) {
                            return e[pe]
                        }(t);
                        if (Qe = !!Me && !!Z(Me),
                        hn || Qe)
                            ot();
                        else {
                            ke(t) ? (We = n || "none" == xn ? we(t) : me(t),
                            In = be(t)) : (new Date).getTime() - Tn > 1e3 * wn && (In++,
                            We = me(t, {
                                memorizedVisitCount: In
                            })),
                            he(t),
                            function(e, n) {
                                if (0 === e[pe]) {
                                    var t = n.build();
                                    e[ve] = t.eid;
                                    var r = t.dtm || t.ttm;
                                    e[ge] = r ? parseInt(r) : void 0
                                }
                            }(t, e),
                            function(e) {
                                e[pe] += 1
                            }(t);
                            var o = Ie()
                              , i = o.viewport
                              , a = o.documentSize;
                            e.add("vp", i),
                            e.add("ds", a),
                            e.add("vid", Oe(In)),
                            e.add("sid", Oe(We)),
                            e.add("duid", Ce(function(e) {
                                return e[ae]
                            }(t))),
                            e.add("uid", Ce(Ye)),
                            Hn(),
                            e.add("refr", Fn(Re || rn)),
                            e.add("url", Fn(Ne || tn));
                            var u = ye(t, xn, Sn);
                            if (!Ln || Sn && !bn || function(e, n) {
                                var t = {
                                    schema: ne,
                                    data: n
                                };
                                e.addContextEntity(t)
                            }(e, u),
                            "none" != xn) {
                                tt(t);
                                var c = nt();
                                n && !r || !c || !Dn || jn || (Dn(u),
                                jn = !1)
                            }
                            Tn = (new Date).getTime()
                        }
                    }
                })),
                Ue && l.push({
                    contexts: function() {
                        return [{
                            schema: $,
                            data: {
                                id: lt()
                            }
                        }]
                    }
                }),
                je && l.push({
                    contexts: function() {
                        return [{
                            schema: ee,
                            data: r(r({}, Ie()), {
                                tabId: ft()
                            })
                        }]
                    }
                }),
                l.push.apply(l, null !== (h = c.plugins) && void 0 !== h ? h : []);
                var Re, Ne, Be, _e, Ve, Me, ze, He, Je, qe, Fe, Ge, Xe, We, Ye, Qe, Ze, Ke = L({
                    base64: c.encodeBase64,
                    corePlugins: l,
                    callback: function(e) {
                        hn || Qe || An.enqueueRequest(e.build(), an)
                    }
                }), $e = document.characterSet || document.charset, en = oe(window.location.hostname, window.location.href, G()), nn = F(en[0]), tn = en[1], rn = en[2], on = null !== (y = c.platform) && void 0 !== y ? y : "web", an = ct(a), un = null !== (w = c.postPath) && void 0 !== w ? w : "/com.snowplowanalytics.snowplow/tp2", cn = null !== (b = c.appId) && void 0 !== b ? b : "", sn = document.title, ln = null === (k = c.resetActivityTrackingOnPageView) || void 0 === k || k, fn = null !== (S = c.cookieName) && void 0 !== S ? S : "_sp_", dn = null !== (x = c.cookieDomain) && void 0 !== x ? x : void 0, vn = "/", gn = null !== (T = c.cookieSameSite) && void 0 !== T ? T : "None", pn = null === (I = c.cookieSecure) || void 0 === I || I, mn = window.navigator.doNotTrack || window.navigator.msDoNotTrack || window.doNotTrack, hn = void 0 !== c.respectDoNotTrack && (c.respectDoNotTrack && ("yes" === mn || "1" === mn)), yn = null !== (A = c.cookieLifetime) && void 0 !== A ? A : 63072e3, wn = null !== (C = c.sessionCookieTimeout) && void 0 !== C ? C : 1800, bn = Ee(c), kn = Le(c), Sn = De(c), xn = Pe(c), Tn = (new Date).getTime(), In = 1, An = re(e, u, "localStorage" == xn || "cookieAndLocalStorage" == xn, c.eventMethod, un, null !== (O = c.bufferSize) && void 0 !== O ? O : 1, null !== (P = c.maxPostBytes) && void 0 !== P ? P : 4e4, null !== (E = c.maxGetBytes) && void 0 !== E ? E : 0, null === (D = c.useStm) || void 0 === D || D, null !== (j = c.maxLocalStorageQueueSize) && void 0 !== j ? j : 1e3, null !== (U = c.connectionTimeout) && void 0 !== U ? U : 5e3, kn, null !== (z = c.customHeaders) && void 0 !== z ? z : {}, null === (K = c.withCredentials) || void 0 === K || K, null !== (te = c.retryStatusCodes) && void 0 !== te ? te : [], (null !== (Se = c.dontRetryStatusCodes) && void 0 !== Se ? Se : []).concat([400, 401, 403, 410, 422]), c.idService, c.retryFailedRequests, c.onRequestSuccess, c.onRequestFailure), Cn = !1, On = null !== (xe = c.preservePageViewIdForUrl) && void 0 !== xe && xe, Pn = void 0, En = {
                    enabled: !1,
                    installed: !1,
                    configurations: {}
                }, Ln = null !== (Ae = null === (Te = c.contexts) || void 0 === Te ? void 0 : Te.session) && void 0 !== Ae && Ae, Dn = c.onSessionUpdateCallback, jn = !1, Un = "boolean" == typeof (Ze = c.useExtendedCrossDomainLinker || !1) ? {
                    useExtendedCrossDomainLinker: Ze
                } : {
                    useExtendedCrossDomainLinker: !0,
                    collectCrossDomainAttributes: Ze
                }, Rn = Un.useExtendedCrossDomainLinker, Nn = Un.collectCrossDomainAttributes;
                c.hasOwnProperty("discoverRootDomain") && c.discoverRootDomain && (dn = function(e, n) {
                    for (var t = window.location.hostname, r = "_sp_root_domain_test_", o = r + (new Date).getTime(), i = "_test_value_" + (new Date).getTime(), a = t.split("."), u = a.length - 2; u >= 0; u--) {
                        var c = a.slice(u).join(".");
                        if (Z(o, i, 0, "/", c, e, n),
                        Z(o) === i) {
                            Y(o, c, e, n);
                            for (var s = Q(r), l = 0; l < s.length; l++)
                                Y(s[l], c, e, n);
                            return c
                        }
                    }
                    return t
                }(gn, pn));
                var Bn = Ie()
                  , _n = Bn.browserLanguage
                  , Vn = Bn.resolution
                  , Mn = Bn.colorDepth
                  , zn = Bn.cookiesEnabled;
                function Hn() {
                    (en = oe(window.location.hostname, window.location.href, G()))[1] !== tn && (rn = G(tn)),
                    nn = F(en[0]),
                    tn = en[1]
                }
                function Jn(e) {
                    return function(n) {
                        var t = n.currentTarget
                          , o = function(e, n, t) {
                            var o, i = (new Date).getTime(), a = r(r({}, V), n), u = t.domainUserId, c = t.userId, s = t.sessionId, l = t.sourceId, f = t.sourcePlatform, d = t.event, v = d.currentTarget, g = "function" == typeof a.reason ? a.reason(d) : null === (o = null == v ? void 0 : v.textContent) || void 0 === o ? void 0 : o.trim();
                            return e ? [u, i, a.sessionId && s, a.userId && M(c || ""), a.sourceId && M(l || ""), a.sourcePlatform && f, a.reason && M(g || "")].map((function(e) {
                                return e || ""
                            }
                            )).join(".").replace(/([.]*$)/, "") : t.domainUserId + "." + i
                        }(e, Nn, {
                            domainUserId: Xe,
                            userId: Ye || void 0,
                            sessionId: We,
                            sourceId: cn,
                            sourcePlatform: on,
                            event: n
                        });
                        (null == t ? void 0 : t.href) && (t.href = function(e, n, t) {
                            var r = n + "=" + t
                              , o = e.split("#")
                              , i = o[0].split("?")
                              , a = i.shift()
                              , u = i.join("?");
                            if (u) {
                                for (var c = !0, s = u.split("&"), l = 0; l < s.length; l++)
                                    if (s[l].substr(0, n.length + 1) === n + "=") {
                                        c = !1,
                                        s[l] = r,
                                        u = s.join("&");
                                        break
                                    }
                                c && (u = r + "&" + u)
                            } else
                                u = r;
                            return o[0] = a + "?" + u,
                            o.join("#")
                        }(t.href, "_sp", o))
                    }
                }
                function qn(e) {
                    for (var n = Jn(Rn), t = 0; t < document.links.length; t++) {
                        var r = document.links[t];
                        !r.spDecorationEnabled && e(r) && (r.addEventListener("click", n, !0),
                        r.addEventListener("mousedown", n, !0),
                        r.spDecorationEnabled = !0)
                    }
                }
                function Fn(e) {
                    var n;
                    return _e && (n = new RegExp("#.*"),
                    e = e.replace(n, "")),
                    Ve && (n = new RegExp("[{}]","g"),
                    e = e.replace(n, "")),
                    e
                }
                function Gn(e) {
                    var n = new RegExp("^([a-z]+):").exec(e);
                    return n ? n[1] : null
                }
                function Xn(e) {
                    return fn + e + "." + Ge
                }
                function Wn(e) {
                    var n = Xn(e);
                    return "localStorage" == xn ? function(e) {
                        try {
                            var n = window.localStorage
                              , t = n.getItem(e + ".expires");
                            return null === t || +t > Date.now() ? n.getItem(e) : (n.removeItem(e),
                            void n.removeItem(e + ".expires"))
                        } catch (e) {
                            return
                        }
                    }(n) : "cookie" == xn || "cookieAndLocalStorage" == xn ? Z(n) : void 0
                }
                function Yn() {
                    Hn(),
                    Ge = R()((dn || nn) + (vn || "/")).slice(0, 4)
                }
                function Qn() {
                    var e = new Date;
                    ze = e.getTime()
                }
                function Zn() {
                    !function() {
                        var e = Kn()
                          , n = e[0];
                        n < He ? He = n : n > Je && (Je = n);
                        var t = e[1];
                        t < qe ? qe = t : t > Fe && (Fe = t)
                    }(),
                    Qn()
                }
                function Kn() {
                    var e = document.documentElement;
                    return e ? [e.scrollLeft || window.pageXOffset, e.scrollTop || window.pageYOffset] : [0, 0]
                }
                function $n() {
                    var e = Kn()
                      , n = e[0];
                    He = n,
                    Je = n;
                    var t = e[1];
                    qe = t,
                    Fe = t
                }
                function et(e) {
                    return Math.round(e)
                }
                function nt() {
                    return rt(Xn("ses"), "*", wn)
                }
                function tt(e) {
                    var n = Xn("id")
                      , t = function(e, n) {
                        var t = o([], e, !0);
                        return n && (t[ae] = "",
                        t[de] = ""),
                        t.shift(),
                        t.join(".")
                    }(e, Sn);
                    return rt(n, t, yn)
                }
                function rt(e, n, t) {
                    return !(Sn && !bn) && ("localStorage" == xn ? N(e, n, t) : ("cookie" == xn || "cookieAndLocalStorage" == xn) && (Z(e, n, t, vn, dn, gn, pn),
                    -1 !== document.cookie.indexOf("".concat(e, "="))))
                }
                function ot(e) {
                    var n = Xn("id")
                      , t = Xn("ses");
                    B(n),
                    B(t),
                    Y(n, dn, gn, pn),
                    Y(t, dn, gn, pn),
                    (null == e ? void 0 : e.preserveSession) || (We = (0,
                    i.v4)(),
                    In = 1),
                    (null == e ? void 0 : e.preserveUser) || (Xe = Sn ? "" : (0,
                    i.v4)(),
                    Ye = null)
                }
                function it(e) {
                    e && e.stateStorageStrategy && (c.stateStorageStrategy = e.stateStorageStrategy,
                    xn = Pe(c)),
                    Sn = De(c),
                    bn = Ee(c),
                    kn = Le(c),
                    An.setUseLocalStorage("localStorage" == xn || "cookieAndLocalStorage" == xn),
                    An.setAnonymousTracking(kn)
                }
                function at() {
                    if (!Sn || bn) {
                        var e = "none" != xn && !!Wn("ses")
                          , n = ut();
                        Xe = function(e, n) {
                            var t;
                            return e[ae] ? t = e[ae] : n ? (t = "",
                            e[ae] = t) : (t = (0,
                            i.v4)(),
                            e[ae] = t),
                            t
                        }(n, Sn),
                        We = e ? we(n) : me(n),
                        In = be(n),
                        "none" != xn && (nt(),
                        he(n),
                        tt(n))
                    }
                }
                function ut() {
                    return "none" == xn ? ["1", "", 0, 0, 0, void 0, "", "", "", void 0, 0] : function(e, n, t, r) {
                        var o, a = new Date, u = Math.round(a.getTime() / 1e3);
                        e ? (o = e.split(".")).unshift("0") : o = ["1", n, u, r, u, "", t],
                        o[fe] && "undefined" !== o[fe] || (o[fe] = (0,
                        i.v4)()),
                        o[de] && "undefined" !== o[de] || (o[de] = ""),
                        o[ve] && "undefined" !== o[ve] || (o[ve] = ""),
                        o[ge] && "undefined" !== o[ge] || (o[ge] = ""),
                        o[pe] && "undefined" !== o[pe] || (o[pe] = 0);
                        var c = function(e, n) {
                            var t = parseInt(e);
                            return isNaN(t) ? n : t
                        }
                          , s = function(e) {
                            return e ? c(e, void 0) : void 0
                        };
                        return [o[ie], o[ae], c(o[ue], u), c(o[ce], r), c(o[se], u), s(o[le]), o[fe], o[de], o[ve], s(o[ge]), c(o[pe], 0)]
                    }(Wn("id") || void 0, Xe, We, In)
                }
                function ct(e) {
                    return 0 === e.indexOf("http") ? e : ("https:" === document.location.protocol ? "https" : "http") + "://" + e
                }
                function st() {
                    Cn && null != u.pageViewId || (u.pageViewId = (0,
                    i.v4)(),
                    u.pageViewUrl = Ne || tn)
                }
                function lt() {
                    return function() {
                        if (null == u.pageViewId)
                            return !0;
                        if (Cn || !On)
                            return !1;
                        if (void 0 === u.pageViewUrl)
                            return !0;
                        var e = Ne || tn;
                        if (!0 === On || "full" == On || !("URL"in window))
                            return u.pageViewUrl != e;
                        var n = new URL(e)
                          , t = new URL(u.pageViewUrl);
                        if ("pathname" == On)
                            return n.pathname != t.pathname;
                        if ("pathnameAndSearch" == On)
                            return n.pathname != t.pathname || n.search != t.search;
                        return !1
                    }() && (u.pageViewId = (0,
                    i.v4)(),
                    u.pageViewUrl = Ne || tn),
                    u.pageViewId
                }
                function ft() {
                    if ("none" === xn || Sn || !Ue)
                        return null;
                    var e = "_sp_tab_id"
                      , n = _(e);
                    return n || (!function(e, n) {
                        try {
                            return window.sessionStorage.setItem(e, n),
                            !0
                        } catch (e) {
                            return !1
                        }
                    }(e, (0,
                    i.v4)()),
                    n = _(e)),
                    n || null
                }
                function dt(e, n) {
                    return (e || []).concat(n ? n() : [])
                }
                function vt(e) {
                    var n = e.title
                      , t = e.context
                      , r = e.timestamp
                      , o = e.contextCallback;
                    Hn(),
                    Pn && Pn == lt() && st(),
                    Pn = lt(),
                    sn = document.title;
                    var i = J((Be = null != n ? n : Be) || sn);
                    Ke.track(function(e) {
                        var n = e.pageUrl
                          , t = e.pageTitle
                          , r = e.referrer
                          , o = s();
                        return o.add("e", "pv"),
                        o.add("url", n),
                        o.add("page", t),
                        o.add("refr", r),
                        o
                    }({
                        pageUrl: Fn(Ne || tn),
                        pageTitle: i,
                        referrer: Fn(Re || rn)
                    }), dt(t, o), r);
                    var a = new Date
                      , u = !1;
                    if (En.enabled && !En.installed) {
                        En.installed = !0,
                        u = !0;
                        var c = {
                            update: function() {
                                if ("undefined" != typeof window && "function" == typeof window.addEventListener) {
                                    var e = !1
                                      , n = Object.defineProperty({}, "passive", {
                                        get: function() {
                                            e = !0
                                        },
                                        set: function() {}
                                    })
                                      , t = function() {};
                                    window.addEventListener("testPassiveEventSupport", t, n),
                                    window.removeEventListener("testPassiveEventSupport", t, n),
                                    c.hasSupport = e
                                }
                            }
                        };
                        c.update();
                        var l = "onwheel"in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                        Object.prototype.hasOwnProperty.call(c, "hasSupport") ? X(document, l, Qn, {
                            passive: !0
                        }) : X(document, l, Qn),
                        $n();
                        var f = function(e, n) {
                            return void 0 === n && (n = Qn),
                            function(e) {
                                return X(document, e, n)
                            }
                        };
                        ["click", "mouseup", "mousedown", "mousemove", "keypress", "keydown", "keyup", "touchend", "touchstart"].forEach(f(document)),
                        ["resize", "focus", "blur"].forEach(f(window)),
                        f(window, Zn)("scroll")
                    }
                    if (En.enabled && (ln || u)) {
                        ze = a.getTime();
                        var d = void 0;
                        for (d in En.configurations) {
                            var v = En.configurations[d];
                            v && (window.clearInterval(v.activityInterval),
                            gt(v, t, o))
                        }
                    }
                }
                function gt(e, n, t) {
                    var r = function(e, n) {
                        Hn(),
                        e({
                            context: n,
                            pageViewId: lt(),
                            minXOffset: He,
                            minYOffset: qe,
                            maxXOffset: Je,
                            maxYOffset: Fe
                        }),
                        $n()
                    }
                      , o = function() {
                        var o = new Date;
                        ze + e.configHeartBeatTimer > o.getTime() && r(e.callback, dt(n, t))
                    };
                    0 === e.configMinimumVisitLength ? e.activityInterval = window.setInterval(o, e.configHeartBeatTimer) : e.activityInterval = window.setTimeout((function() {
                        var i = new Date;
                        ze + e.configMinimumVisitLength > i.getTime() && r(e.callback, dt(n, t)),
                        e.activityInterval = window.setInterval(o, e.configHeartBeatTimer)
                    }
                    ), e.configMinimumVisitLength)
                }
                function pt(e) {
                    var n = e.minimumVisitLength
                      , t = e.heartbeatDelay
                      , r = e.callback;
                    if (H(n) && H(t))
                        return {
                            configMinimumVisitLength: 1e3 * n,
                            configHeartBeatTimer: 1e3 * t,
                            callback: r
                        };
                    p.error("Activity tracking minimumVisitLength & heartbeatDelay must be integers")
                }
                function mt(e) {
                    var n = e.context
                      , t = e.minXOffset
                      , r = e.minYOffset
                      , o = e.maxXOffset
                      , i = e.maxYOffset
                      , a = document.title;
                    a !== sn && (sn = a,
                    Be = void 0),
                    Ke.track(function(e) {
                        var n = e.pageUrl
                          , t = e.pageTitle
                          , r = e.referrer
                          , o = e.minXOffset
                          , i = e.maxXOffset
                          , a = e.minYOffset
                          , u = e.maxYOffset
                          , c = s();
                        return c.add("e", "pp"),
                        c.add("url", n),
                        c.add("page", t),
                        c.add("refr", r),
                        o && !isNaN(Number(o)) && c.add("pp_mix", o.toString()),
                        i && !isNaN(Number(i)) && c.add("pp_max", i.toString()),
                        a && !isNaN(Number(a)) && c.add("pp_miy", a.toString()),
                        u && !isNaN(Number(u)) && c.add("pp_may", u.toString()),
                        c
                    }({
                        pageUrl: Fn(Ne || tn),
                        pageTitle: J(Be || sn),
                        referrer: Fn(Re || rn),
                        minXOffset: et(t),
                        maxXOffset: et(o),
                        minYOffset: et(r),
                        maxYOffset: et(i)
                    }), n)
                }
                function ht(e) {
                    var n = En.configurations[e];
                    0 === (null == n ? void 0 : n.configMinimumVisitLength) ? window.clearTimeout(null == n ? void 0 : n.activityInterval) : window.clearInterval(null == n ? void 0 : n.activityInterval),
                    En.configurations[e] = void 0
                }
                Ke.setTrackerVersion(t),
                Ke.setTrackerNamespace(n),
                Ke.setAppId(cn),
                Ke.setPlatform(on),
                Ke.addPayloadPair("cookie", zn ? "1" : "0"),
                Ke.addPayloadPair("cs", $e),
                Ke.addPayloadPair("lang", _n),
                Ke.addPayloadPair("res", Vn),
                Ke.addPayloadPair("cd", Mn),
                Yn(),
                at(),
                c.crossDomainLinker && qn(c.crossDomainLinker);
                var yt = {
                    getDomainSessionIndex: function() {
                        return In
                    },
                    getPageViewId: lt,
                    getTabId: ft,
                    newSession: function() {
                        var e = ut();
                        if (ke(e) ? (We = "none" != xn ? me(e) : we(e),
                        In = be(e)) : (In++,
                        We = me(e, {
                            memorizedVisitCount: In
                        })),
                        he(e),
                        "none" != xn) {
                            var n = ye(e, xn, Sn);
                            tt(e),
                            nt() && Dn && (jn = !0,
                            Dn(n))
                        }
                        Tn = (new Date).getTime()
                    },
                    getCookieName: function(e) {
                        return Xn(e)
                    },
                    getUserId: function() {
                        return Ye
                    },
                    getDomainUserId: function() {
                        return ut()[1]
                    },
                    getDomainUserInfo: function() {
                        return ut()
                    },
                    setReferrerUrl: function(e) {
                        Re = e
                    },
                    setCustomUrl: function(e) {
                        Hn(),
                        Ne = function(e, n) {
                            var t;
                            return Gn(n) ? n : "/" === n.slice(0, 1) ? Gn(e) + "://" + q(e) + n : ((t = (e = Fn(e)).indexOf("?")) >= 0 && (e = e.slice(0, t)),
                            (t = e.lastIndexOf("/")) !== e.length - 1 && (e = e.slice(0, t + 1)),
                            e + n)
                        }(tn, e)
                    },
                    setDocumentTitle: function(e) {
                        sn = document.title,
                        Be = e
                    },
                    discardHashTag: function(e) {
                        _e = e
                    },
                    discardBrace: function(e) {
                        Ve = e
                    },
                    setCookiePath: function(e) {
                        vn = e,
                        Yn()
                    },
                    setVisitorCookieTimeout: function(e) {
                        yn = e
                    },
                    crossDomainLinker: function(e) {
                        qn(e)
                    },
                    enableActivityTracking: function(e) {
                        En.configurations.pagePing || (En.enabled = !0,
                        En.configurations.pagePing = pt(r(r({}, e), {
                            callback: mt
                        })))
                    },
                    enableActivityTrackingCallback: function(e) {
                        En.configurations.callback || (En.enabled = !0,
                        En.configurations.callback = pt(e))
                    },
                    disableActivityTracking: function() {
                        ht("pagePing")
                    },
                    disableActivityTrackingCallback: function() {
                        ht("callback")
                    },
                    updatePageActivity: function() {
                        Qn()
                    },
                    setOptOutCookie: function(e) {
                        Me = e
                    },
                    setUserId: function(e) {
                        Ye = e
                    },
                    setUserIdFromLocation: function(e) {
                        Hn(),
                        Ye = W(e, tn)
                    },
                    setUserIdFromReferrer: function(e) {
                        Hn(),
                        Ye = W(e, rn)
                    },
                    setUserIdFromCookie: function(e) {
                        Ye = Z(e)
                    },
                    setCollectorUrl: function(e) {
                        an = ct(e),
                        An.setCollectorUrl(an)
                    },
                    setBufferSize: function(e) {
                        An.setBufferSize(e)
                    },
                    flushBuffer: function(e) {
                        void 0 === e && (e = {}),
                        An.executeQueue(),
                        e.newBufferSize && An.setBufferSize(e.newBufferSize)
                    },
                    trackPageView: function(e) {
                        void 0 === e && (e = {}),
                        vt(e)
                    },
                    preservePageViewId: function() {
                        Cn = !0
                    },
                    preservePageViewIdForUrl: function(e) {
                        On = e
                    },
                    disableAnonymousTracking: function(e) {
                        c.anonymousTracking = !1,
                        it(e),
                        at(),
                        An.executeQueue()
                    },
                    enableAnonymousTracking: function(e) {
                        var n;
                        c.anonymousTracking = null === (n = e && (null == e ? void 0 : e.options)) || void 0 === n || n,
                        it(e),
                        bn || st()
                    },
                    clearUserData: ot
                };
                return r(r({}, yt), {
                    id: e,
                    namespace: n,
                    core: Ke,
                    sharedState: u
                })
            }(e, n, t, a, u, c)
              , d = r(r({}, f), {
                addPlugin: function(e) {
                    var n, t;
                    d.core.addPlugin(e),
                    null === (t = (n = e.plugin).activateBrowserPlugin) || void 0 === t || t.call(n, d)
                }
            });
            return l.forEach((function(e) {
                var n;
                null === (n = e.activateBrowserPlugin) || void 0 === n || n.call(e, d)
            }
            )),
            d
        }
        var Ee = {};
        function Le(e, n) {
            try {
                (t = null != e ? e : Object.keys(Ee),
                De(t, Ee)).forEach(n)
            } catch (e) {
                p.error("Function failed", e)
            }
            var t
        }
        function De(e, n) {
            for (var t = [], r = 0, o = e; r < o.length; r++) {
                var i = o[r];
                n.hasOwnProperty(i) ? t.push(n[i]) : p.warn(i + " not configured")
            }
            return t
        }
        var je = function() {
            this.outQueues = [],
            this.bufferFlushers = [],
            this.hasLoaded = !1,
            this.registeredOnLoadHandlers = []
        };
        function Ue(e, n) {
            Le(n, (function(n) {
                n.discardBrace(e)
            }
            ))
        }
        function Re(e, n) {
            Le(n, (function(n) {
                n.enableActivityTrackingCallback(e)
            }
            ))
        }
        function Ne(e) {
            Le(e, (function(e) {
                e.disableActivityTracking()
            }
            ))
        }
        function Be(e, n) {
            Le(n, (function(n) {
                n.setUserId(e)
            }
            ))
        }
        function _e(e, n) {
            Le(n, (function(n) {
                n.trackPageView(e)
            }
            ))
        }
        function Ve(e, n) {
            Le(n, (function(n) {
                n.core.track(D({
                    event: e.event
                }), e.context, e.timestamp)
            }
            ))
        }
        function Me(e, n) {
            Le(n, (function(n) {
                n.disableAnonymousTracking(e)
            }
            ))
        }
        function ze(e, n) {
            Le(n, (function(n) {
                n.enableAnonymousTracking(e)
            }
            ))
        }
        var He = "undefined" != typeof window ? function() {
            var e = new je
              , n = document
              , t = window;
            function r() {
                var n;
                if (!e.hasLoaded)
                    for (e.hasLoaded = !0,
                    n = 0; n < e.registeredOnLoadHandlers.length; n++)
                        e.registeredOnLoadHandlers[n]();
                return !0
            }
            return n.visibilityState && X(n, "visibilitychange", (function() {
                "hidden" == n.visibilityState && e.bufferFlushers.forEach((function(e) {
                    e(!1)
                }
                ))
            }
            ), !1),
            X(t, "beforeunload", (function() {
                e.bufferFlushers.forEach((function(e) {
                    e(!1)
                }
                ))
            }
            ), !1),
            "loading" === document.readyState ? (n.addEventListener ? n.addEventListener("DOMContentLoaded", (function e() {
                n.removeEventListener("DOMContentLoaded", e, !1),
                r()
            }
            )) : n.attachEvent && n.attachEvent("onreadystatechange", (function e() {
                "complete" === n.readyState && (n.detachEvent("onreadystatechange", e),
                r())
            }
            )),
            X(t, "load", r, !1)) : r(),
            e
        }() : void 0;
        function Je(e, n, t) {
            return void 0 === t && (t = {}),
            He ? function(e, n, t, r, o, i) {
                return Ee.hasOwnProperty(e) ? null : (Ee[e] = Pe(e, n, t, r, o, i),
                Ee[e])
            }(e, e, "js-".concat(j), n, He, t) : void 0
        }
    }
    ,
    306636: e => {
        var n = {
            utf8: {
                stringToBytes: function(e) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(n.bin.bytesToString(e)))
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var n = [], t = 0; t < e.length; t++)
                        n.push(255 & e.charCodeAt(t));
                    return n
                },
                bytesToString: function(e) {
                    for (var n = [], t = 0; t < e.length; t++)
                        n.push(String.fromCharCode(e[t]));
                    return n.join("")
                }
            }
        };
        e.exports = n
    }
    ,
    401048: e => {
        var n, t;
        n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        t = {
            rotl: function(e, n) {
                return e << n | e >>> 32 - n
            },
            rotr: function(e, n) {
                return e << 32 - n | e >>> n
            },
            endian: function(e) {
                if (e.constructor == Number)
                    return 16711935 & t.rotl(e, 8) | 4278255360 & t.rotl(e, 24);
                for (var n = 0; n < e.length; n++)
                    e[n] = t.endian(e[n]);
                return e
            },
            randomBytes: function(e) {
                for (var n = []; e > 0; e--)
                    n.push(Math.floor(256 * Math.random()));
                return n
            },
            bytesToWords: function(e) {
                for (var n = [], t = 0, r = 0; t < e.length; t++,
                r += 8)
                    n[r >>> 5] |= e[t] << 24 - r % 32;
                return n
            },
            wordsToBytes: function(e) {
                for (var n = [], t = 0; t < 32 * e.length; t += 8)
                    n.push(e[t >>> 5] >>> 24 - t % 32 & 255);
                return n
            },
            bytesToHex: function(e) {
                for (var n = [], t = 0; t < e.length; t++)
                    n.push((e[t] >>> 4).toString(16)),
                    n.push((15 & e[t]).toString(16));
                return n.join("")
            },
            hexToBytes: function(e) {
                for (var n = [], t = 0; t < e.length; t += 2)
                    n.push(parseInt(e.substr(t, 2), 16));
                return n
            },
            bytesToBase64: function(e) {
                for (var t = [], r = 0; r < e.length; r += 3)
                    for (var o = e[r] << 16 | e[r + 1] << 8 | e[r + 2], i = 0; i < 4; i++)
                        8 * r + 6 * i <= 8 * e.length ? t.push(n.charAt(o >>> 6 * (3 - i) & 63)) : t.push("=");
                return t.join("")
            },
            base64ToBytes: function(e) {
                e = e.replace(/[^A-Z0-9+\/]/gi, "");
                for (var t = [], r = 0, o = 0; r < e.length; o = ++r % 4)
                    0 != o && t.push((n.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | n.indexOf(e.charAt(r)) >>> 6 - 2 * o);
                return t
            }
        },
        e.exports = t
    }
    ,
    258101: (e, n, t) => {
        var r, o, i, a;
        r = t(401048),
        o = t(306636).utf8,
        i = t(306636).bin,
        (a = function(e, n) {
            var t = r.wordsToBytes(function(e) {
                e.constructor == String ? e = o.stringToBytes(e) : "undefined" != typeof Buffer && "function" == typeof Buffer.isBuffer && Buffer.isBuffer(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                var n = r.bytesToWords(e)
                  , t = 8 * e.length
                  , i = []
                  , a = 1732584193
                  , u = -271733879
                  , c = -1732584194
                  , s = 271733878
                  , l = -1009589776;
                n[t >> 5] |= 128 << 24 - t % 32,
                n[15 + (t + 64 >>> 9 << 4)] = t;
                for (var f = 0; f < n.length; f += 16) {
                    for (var d = a, v = u, g = c, p = s, m = l, h = 0; h < 80; h++) {
                        if (h < 16)
                            i[h] = n[f + h];
                        else {
                            var y = i[h - 3] ^ i[h - 8] ^ i[h - 14] ^ i[h - 16];
                            i[h] = y << 1 | y >>> 31
                        }
                        var w = (a << 5 | a >>> 27) + l + (i[h] >>> 0) + (h < 20 ? 1518500249 + (u & c | ~u & s) : h < 40 ? 1859775393 + (u ^ c ^ s) : h < 60 ? (u & c | u & s | c & s) - 1894007588 : (u ^ c ^ s) - 899497514);
                        l = s,
                        s = c,
                        c = u << 30 | u >>> 2,
                        u = a,
                        a = w
                    }
                    a += d,
                    u += v,
                    c += g,
                    s += p,
                    l += m
                }
                return [a, u, c, s, l]
            }(e));
            return n && n.asBytes ? t : n && n.asString ? i.bytesToString(t) : r.bytesToHex(t)
        }
        )._blocksize = 16,
        a._digestsize = 20,
        e.exports = a
    }
    ,
    892674: (e, n, t) => {
        var r = t(862335)
          , o = t(685234)
          , i = o;
        i.v1 = r,
        i.v4 = o,
        e.exports = i
    }
    ,
    140614: e => {
        for (var n = [], t = 0; t < 256; ++t)
            n[t] = (t + 256).toString(16).substr(1);
        e.exports = function(e, t) {
            var r = t || 0
              , o = n;
            return [o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], "-", o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]], o[e[r++]]].join("")
        }
    }
    ,
    210537: e => {
        var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (n) {
            var t = new Uint8Array(16);
            e.exports = function() {
                return n(t),
                t
            }
        } else {
            var r = new Array(16);
            e.exports = function() {
                for (var e, n = 0; n < 16; n++)
                    3 & n || (e = 4294967296 * Math.random()),
                    r[n] = e >>> ((3 & n) << 3) & 255;
                return r
            }
        }
    }
    ,
    862335: (e, n, t) => {
        var r, o, i = t(210537), a = t(140614), u = 0, c = 0;
        e.exports = function(e, n, t) {
            var s = n && t || 0
              , l = n || []
              , f = (e = e || {}).node || r
              , d = void 0 !== e.clockseq ? e.clockseq : o;
            if (null == f || null == d) {
                var v = i();
                null == f && (f = r = [1 | v[0], v[1], v[2], v[3], v[4], v[5]]),
                null == d && (d = o = 16383 & (v[6] << 8 | v[7]))
            }
            var g = void 0 !== e.msecs ? e.msecs : (new Date).getTime()
              , p = void 0 !== e.nsecs ? e.nsecs : c + 1
              , m = g - u + (p - c) / 1e4;
            if (m < 0 && void 0 === e.clockseq && (d = d + 1 & 16383),
            (m < 0 || g > u) && void 0 === e.nsecs && (p = 0),
            p >= 1e4)
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            u = g,
            c = p,
            o = d;
            var h = (1e4 * (268435455 & (g += 122192928e5)) + p) % 4294967296;
            l[s++] = h >>> 24 & 255,
            l[s++] = h >>> 16 & 255,
            l[s++] = h >>> 8 & 255,
            l[s++] = 255 & h;
            var y = g / 4294967296 * 1e4 & 268435455;
            l[s++] = y >>> 8 & 255,
            l[s++] = 255 & y,
            l[s++] = y >>> 24 & 15 | 16,
            l[s++] = y >>> 16 & 255,
            l[s++] = d >>> 8 | 128,
            l[s++] = 255 & d;
            for (var w = 0; w < 6; ++w)
                l[s + w] = f[w];
            return n || a(l)
        }
    }
    ,
    685234: (e, n, t) => {
        var r = t(210537)
          , o = t(140614);
        e.exports = function(e, n, t) {
            var i = n && t || 0;
            "string" == typeof e && (n = "binary" === e ? new Array(16) : null,
            e = null);
            var a = (e = e || {}).random || (e.rng || r)();
            if (a[6] = 15 & a[6] | 64,
            a[8] = 63 & a[8] | 128,
            n)
                for (var u = 0; u < 16; ++u)
                    n[i + u] = a[u];
            return n || o(a)
        }
    }
}]);
