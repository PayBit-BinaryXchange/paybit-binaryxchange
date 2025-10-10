(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[36683], {
    24654: e => {
        "use strict";
        e.exports = function(e) {
            for (var t = [], n = e.length, i = 0; i < n; i++) {
                var o = e.charCodeAt(i);
                if (o >= 55296 && o <= 56319 && n > i + 1) {
                    var r = e.charCodeAt(i + 1);
                    r >= 56320 && r <= 57343 && (o = 1024 * (o - 55296) + r - 56320 + 65536,
                    i += 1)
                }
                o < 128 ? t.push(o) : o < 2048 ? (t.push(o >> 6 | 192),
                t.push(63 & o | 128)) : o < 55296 || o >= 57344 && o < 65536 ? (t.push(o >> 12 | 224),
                t.push(o >> 6 & 63 | 128),
                t.push(63 & o | 128)) : o >= 65536 && o <= 1114111 ? (t.push(o >> 18 | 240),
                t.push(o >> 12 & 63 | 128),
                t.push(o >> 6 & 63 | 128),
                t.push(63 & o | 128)) : t.push(239, 191, 189)
            }
            return new Uint8Array(t).buffer
        }
    }
    ,
    9995: (e, t, n) => {
        var i = n(939340);
        e.exports = function(e) {
            return e = i(e ^= e >>> 16, 2246822507),
            e = i(e ^= e >>> 13, 3266489909),
            (e ^= e >>> 16) >>> 0
        }
    }
    ,
    939340: e => {
        "use strict";
        e.exports = Math.imul || function(e, t) {
            var n = 65535 & e
              , i = 65535 & t;
            return n * i + ((e >>> 16 & 65535) * i + n * (t >>> 16 & 65535) << 16 >>> 0) | 0
        }
    }
    ,
    855385: (e, t, n) => {
        var i = n(939340)
          , o = n(9995)
          , r = n(24654)
          , s = new Uint32Array([3432918353, 461845907]);
        function a(e, t) {
            return e << t | e >>> 32 - t
        }
        e.exports = function(e, t) {
            if (t = t ? 0 | t : 0,
            "string" == typeof e && (e = r(e)),
            !(e instanceof ArrayBuffer))
                throw new TypeError("Expected key to be ArrayBuffer or string");
            var n = new Uint32Array([t]);
            return function(e, t) {
                for (var n = e.byteLength / 4 | 0, o = new Uint32Array(e,0,n), r = 0; r < n; r++)
                    o[r] = i(o[r], s[0]),
                    o[r] = a(o[r], 15),
                    o[r] = i(o[r], s[1]),
                    t[0] = t[0] ^ o[r],
                    t[0] = a(t[0], 13),
                    t[0] = i(t[0], 5) + 3864292196
            }(e, n),
            function(e, t) {
                var n = e.byteLength / 4 | 0
                  , o = e.byteLength % 4
                  , r = 0
                  , c = new Uint8Array(e,4 * n,o);
                switch (o) {
                case 3:
                    r ^= c[2] << 16;
                case 2:
                    r ^= c[1] << 8;
                case 1:
                    r ^= c[0],
                    r = a(r = i(r, s[0]), 15),
                    r = i(r, s[1]),
                    t[0] = t[0] ^ r
                }
            }(e, n),
            function(e, t) {
                t[0] = t[0] ^ e.byteLength,
                t[0] = o(t[0])
            }(e, n),
            n.buffer
        }
    }
    ,
    978956: (e, t, n) => {
        "use strict";
        n.d(t, {
            Delegate: () => r
        });
        const i = (0,
        n(735566).getLogger)("Common.Delegate");
        function o(e) {
            return !e.singleShot
        }
        class r {
            constructor() {
                this.fire = this._fireImpl.bind(this),
                this._listeners = []
            }
            subscribe(e, t, n) {
                this._listeners.push({
                    object: e,
                    member: t,
                    singleShot: !!n,
                    skip: !1
                })
            }
            unsubscribe(e, t) {
                for (let n = 0; n < this._listeners.length; ++n) {
                    const i = this._listeners[n];
                    if (i.object === e && i.member === t) {
                        i.skip = !0,
                        this._listeners.splice(n, 1);
                        break
                    }
                }
            }
            unsubscribeAll(e) {
                for (let t = this._listeners.length - 1; t >= 0; --t) {
                    const n = this._listeners[t];
                    n.object === e && (n.skip = !0,
                    this._listeners.splice(t, 1))
                }
            }
            destroy() {
                this._listeners = []
            }
            _fireImpl(...e) {
                const t = this._listeners;
                this._listeners = this._listeners.filter(o);
                const n = t.length;
                for (let o = 0; o < n; ++o) {
                    const n = t[o];
                    if (!n.skip)
                        try {
                            n.member.apply(n.object || null, e)
                        } catch (e) {
                            i.logError(`${e && (e.stack || e.message)}`)
                        }
                }
            }
        }
    }
    ,
    66974: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            environment: () => r,
            getEnvironmentByHost: () => o,
            isDebug: () => c,
            isLocal: () => s,
            isProd: () => a
        });
        const i = new Set(["battle", "staging", "test", "local"]);
        function o(e) {
            return -1 !== ["i18n.tradingview.com", "partial.tradingview.com", "www.tradingview.com", "wwwcn.tradingview.com"].indexOf(e) || -1 !== ["d33t3vvu2t2yu5.cloudfront.net", "dwq4do82y8xi7.cloudfront.net", "s.tradingview.com", "s3.tradingview.com"].indexOf(e) || e.match(/^[a-z]{2}\.tradingview\.com/) || e.match(/prod-[^.]+.tradingview.com/) ? "battle" : e.includes("tradingview.com") || e.includes("staging") ? "staging" : "local"
        }
        function r() {
            const e = self.environment;
            return function(e) {
                i.has(e) || console.warn("Invalid environment " + e)
            }(e),
            e
        }
        function s() {
            return "local" === r()
        }
        function a() {
            return "battle" === r()
        }
        function c() {
            return !a()
        }
    }
    ,
    125226: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            FeatureToggle: () => l,
            isFeatureEnabled: () => u,
            onFeaturesStateChanged: () => a
        });
        var i = n(49437)
          , o = n(547465)
          , r = n(584878);
        n(638456);
        const s = new o.Delegate
          , a = () => s
          , c = "forcefeaturetoggle.";
        const l = new class {
            enableFeature(e) {
                i.TVLocalStorage.setItem(c + e, "true"),
                s.fire(e)
            }
            disableFeature(e) {
                i.TVLocalStorage.setItem(c + e, "false"),
                s.fire(e)
            }
            resetFeature(e) {
                i.TVLocalStorage.removeItem(c + e),
                s.fire(e)
            }
            onFeaturesStateChanged() {
                return s
            }
        }
        ;
        function g(e, t) {
            return (!e[t] || -1 !== e[t]) && (!!("true" === i.TVLocalStorage.getItem(c + t) || window.is_authenticated && "true" === window.user?.settings?.[c + t]) || !("false" === i.TVLocalStorage.getItem(c + t) || window.is_authenticated && "false" === window.user?.settings?.[c + t]) && (!!e[t] && (1 === e[t] || (0,
            r.shouldAffectUser)(t, e[t]))))
        }
        window.TradingView = window.TradingView || {},
        window.TradingView.FeatureToggle = l;
        const u = (d = window.featureToggleState || {},
        window.TradingView.onWidget?.() || Promise.all([n.e(80349), n.e(34604)]).then(n.bind(n, 180349)).then((e => {
            e.pushStreamMultiplexer.on("featuretoggle", (e => {
                const t = g(d, e.name);
                d[e.name] = e.state,
                t !== g(d, e.name) && s.fire(e.name)
            }
            ))
        }
        )),
        g.bind(null, d));
        var d;
        window.TradingView.isFeatureEnabled = u
    }
    ,
    251954: (e, t, n) => {
        "use strict";
        n.d(t, {
            emit: () => g,
            emitOnce: () => u,
            on: () => c,
            subscribe: () => l,
            unsubscribe: () => a
        });
        var i = n(547465);
        const o = {}
          , r = []
          , s = {};
        function a(e, t, n) {
            o[e].unsubscribe(n, t)
        }
        function c(e, t, n) {
            l(e, t, n)
        }
        function l(e, t, n, r) {
            o.hasOwnProperty(e) || (o[e] = new i.Delegate),
            s[e] ? t.call(n) : o[e].subscribe(n, t, r)
        }
        function g(e, ...t) {
            const n = [e].concat(t);
            r.forEach((e => {
                e.apply(null, n)
            }
            )),
            o.hasOwnProperty(e) && o[e].fire.apply(o[e], t)
        }
        function u(e) {
            s[e] && console.warn(`Something went wrong: emitOnce called multiple times with same event (${e})`),
            s[e] = !0,
            g.apply(null, arguments)
        }
    }
    ,
    49437: (e, t, n) => {
        "use strict";
        const {getLogger: i} = n(735566)
          , o = i("TVLocalStorage");
        var r = function() {
            try {
                this.isAvailable = !0,
                this.localStorage = window.localStorage,
                this.localStorage.setItem("tvlocalstorage.available", "true")
            } catch (e) {
                delete this.isAvailable,
                delete this.localStorage
            }
            this._updateLength();
            try {
                this._report()
            } catch (e) {}
        };
        r.prototype._report = function() {
            if (this.isAvailable) {
                const e = 10
                  , t = [];
                for (let e = 0; e < this.localStorage.length; e++) {
                    const n = this.key(e);
                    t.push({
                        key: n,
                        length: String(this.getItem(n)).length
                    })
                }
                t.sort(( (e, t) => t.length - e.length));
                const n = t.slice(0, e);
                t.sort(( (e, t) => t.key.length - e.key.length));
                const i = t.slice(0, e);
                o.logNormal(`Total amount of keys in Local Storage: ${this.length}`),
                o.logNormal(`Top ${e} keys with longest values: ${JSON.stringify(n)}`),
                o.logNormal(`Top ${e} longest key names: ${JSON.stringify(i)}`);
                try {
                    navigator.storage.estimate().then((e => {
                        o.logNormal(`Storage estimate: ${JSON.stringify(e)}`)
                    }
                    ))
                } catch (e) {}
            }
        }
        ,
        r.prototype.length = 0,
        r.prototype.isAvailable = !1,
        r.prototype.localStorage = {
            "tvlocalstorage.available": "false"
        },
        r.prototype._updateLength = function() {
            if (this.isAvailable)
                this.length = this.localStorage.length;
            else {
                var e, t = 0;
                for (e in this.localStorage)
                    this.localStorage.hasOwnProperty(e) && t++;
                this.length = t
            }
        }
        ,
        r.prototype.key = function(e) {
            return this.isAvailable ? this.localStorage.key(e) : Object.keys(this.localStorage)[e]
        }
        ,
        r.prototype.getItem = function(e) {
            return this.isAvailable ? this.localStorage.getItem(e) : void 0 === this.localStorage[e] ? null : this.localStorage[e]
        }
        ,
        r.prototype.setItem = function(e, t) {
            this.isAvailable ? this.localStorage.setItem(e, t) : this.localStorage[e] = t,
            this._updateLength()
        }
        ,
        r.prototype.removeItem = function(e) {
            this.isAvailable ? this.localStorage.removeItem(e) : delete this.localStorage[e],
            this._updateLength()
        }
        ,
        r.prototype.clear = function() {
            this.isAvailable ? this.localStorage.clear() : this.localStorage = {},
            this._updateLength()
        }
        ,
        window.TVLocalStorage = new r,
        e.exports.TVLocalStorage = window.TVLocalStorage
    }
    ,
    314802: (e, t, n) => {
        "use strict";
        n.d(t, {
            isOnMobileAppPage: () => o,
            urlWithMobileAppParams: () => r
        });
        var i = n(639247);
        function o(e, t=!1) {
            const {searchParams: n} = new URL(String(location));
            let o = "true" === n.get("mobileapp_new")
              , r = "true" === n.get("mobileapp");
            if (!t) {
                const e = i.get("tv_app") || "";
                o ||= ["android", "android_nps"].includes(e),
                r ||= "ios" === e
            }
            return !("new" !== e && "any" !== e || !o) || !("new" === e || !r)
        }
        function r(e, t=!1) {
            if (o("new", t)) {
                const t = new URL(e,location.href);
                t.searchParams.set("mobileapp_new", "true"),
                e = t.toString()
            }
            if (o("old", t)) {
                const t = new URL(e,location.href);
                t.searchParams.set("mobileapp", "true"),
                e = t.toString()
            }
            return e
        }
    }
    ,
    638456: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            CheckMobile: () => d,
            appVersion: () => u,
            checkPageType: () => p,
            desktopAppVersion: () => g,
            isChrome: () => m,
            isDesktopApp: () => c,
            isEdge: () => v,
            isFF: () => b,
            isLinux: () => a,
            isMac: () => r,
            isSafari: () => y,
            isSymphonyEmbed: () => l,
            isWindows: () => s,
            onGoPro: () => _,
            onMainPage: () => S,
            onWidget: () => w,
            supportTouch: () => f
        });
        var i = n(23482);
        const o = window.TradingView = window.TradingView || {};
        function r() {
            return i.isMac
        }
        function s() {
            return i.isWindows
        }
        function a() {
            return i.isLinux
        }
        function c() {
            return /TVDesktop/i.test(navigator.userAgent)
        }
        function l() {
            return o.isSymphony || !1
        }
        function g() {
            const e = navigator.userAgent.match(/TVDesktop\/([^\s]+)/);
            return e && e[1]
        }
        function u() {
            const e = navigator.userAgent.match(/TradingView\/([^\s]+)/);
            return e && e[1]
        }
        const d = {
            Android: () => i.isAndroid,
            BlackBerry: () => i.isBlackBerry,
            iOS: () => i.isIOS,
            Opera: () => i.isOperaMini,
            isIPad: () => i.isIPad,
            any: () => i.isAnyMobile
        };
        o.isMobile = d;
        const h = new Map;
        function w() {
            const e = window.location.pathname
              , t = window.location.host
              , n = `${t}${e}`;
            return h.has(n) || h.set(n, function(e, t) {
                const n = ["^widget-docs"];
                for (const e of n)
                    if (new RegExp(e).test(t))
                        return !0;
                const i = ["^widgetembed/?$", "^cmewidgetembed/?$", "^([0-9a-zA-Z-]+)/widgetembed/?$", "^([0-9a-zA-Z-]+)/widgetstatic/?$", "^([0-9a-zA-Z-]+)?/?mediumwidgetembed/?$", "^twitter-chart/?$", "^telegram/chart/?$", "^embed/([0-9a-zA-Z]{8})/?$", "^widgetpopup/?$", "^extension/?$", "^idea-popup/?$", "^hotlistswidgetembed/?$", "^([0-9a-zA-Z-]+)/hotlistswidgetembed/?$", "^marketoverviewwidgetembed/?$", "^([0-9a-zA-Z-]+)/marketoverviewwidgetembed/?$", "^eventswidgetembed/?$", "^tickerswidgetembed/?$", "^forexcrossrateswidgetembed/?$", "^forexheatmapwidgetembed/?$", "^marketquoteswidgetembed/?$", "^screenerwidget/?$", "^cryptomktscreenerwidget/?$", "^([0-9a-zA-Z-]+)/cryptomktscreenerwidget/?$", "^([0-9a-zA-Z-]+)/marketquoteswidgetembed/?$", "^technical-analysis-widget-embed/$", "^singlequotewidgetembed/?$", "^([0-9a-zA-Z-]+)/singlequotewidgetembed/?$", "^embed-widget/([0-9a-zA-Z-]+)/(([0-9a-zA-Z-]+)/)?$", "^widget-docs/([0-9a-zA-Z-]+)/([0-9a-zA-Z-/]+)?$"]
                  , o = e.replace(/^\//, "");
                let r;
                for (let e = i.length - 1; e >= 0; e--)
                    if (r = new RegExp(i[e]),
                    r.test(o))
                        return !0;
                return !1
            }(e, t)),
            h.get(n) ?? !1
        }
        function f() {
            return i.mobiletouch || i.touch || i.isAnyMobile
        }
        function p(e) {
            return new URLSearchParams(window.location.search).get("page_type") === e
        }
        o.onWidget = w;
        const m = i.isChrome
          , b = i.isFF
          , v = i.isEdge
          , y = i.isSafari;
        function _() {
            return "/pricing/" === window.location.pathname
        }
        function S() {
            return "/" === window.location.pathname
        }
    }
    ,
    469449: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            SnowplowEmbedWidgetTracker: () => d,
            getTrackerInstance: () => u
        });
        var i = n(162226)
          , o = n(188526)
          , r = n(68207);
        const s = {
            host: "_unknown",
            path: ""
        };
        function a(e) {
            if (e)
                try {
                    const t = new URL(e);
                    return {
                        host: t.hostname || t.host || "_unknown",
                        path: t.pathname
                    }
                } catch {
                    return
                }
        }
        function c() {
            return a(function() {
                const e = window.initData?.hashSettings?.["page-uri"];
                if (e)
                    return "https://" + e
            }()) || a(document.referrer) || a(location.ancestorOrigins?.[0]) || s
        }
        function l(e) {
            const t = c();
            return {
                host: t.host,
                path: t.path,
                widget_id: e
            }
        }
        let g = null;
        function u() {
            if (null === g) {
                const e = (0,
                o.getSettings)();
                void 0 !== e && (g = new d(e,{
                    widget_tv_link_click: i.widget_tv_link_click,
                    widgets_without_websocket: i.widgets_without_websocket,
                    widget_load_meta_info: i.widget_load_meta_info
                }))
            }
            return g
        }
        class d extends r.SnowplowTrackerBase {
            trackWidgetTVLinkClick(e) {
                this._trackSelfDescribingEvent("widget_tv_link_click", e)
            }
            trackWidgetPageView(e) {
                setTimeout(( () => {
                    const t = {
                        ...l(e),
                        event_name: "page_view"
                    };
                    this._trackSelfDescribingEvent("widgets_without_websocket", t)
                }
                ), 0)
            }
            trackWidgetLoadMetaInfo(e) {
                const t = {
                    ...e,
                    ...l(e.widget_id),
                    event_name: "widget_load_meta_info"
                };
                this._trackSelfDescribingEvent("widget_load_meta_info", t)
            }
        }
    }
    ,
    584878: (e, t, n) => {
        "use strict";
        n.d(t, {
            shouldAffectUser: () => c
        });
        var i = n(855385)
          , o = n.n(i)
          , r = n(49437);
        const s = "featuretoggle_seed";
        function a(e) {
            try {
                const t = o()(e + function() {
                    if (window.user && window.user.id)
                        return window.user.id;
                    const e = r.TVLocalStorage.getItem(s);
                    if (null !== e)
                        return e;
                    const t = Math.floor(1e6 * Math.random());
                    return r.TVLocalStorage.setItem(s, `${t}`),
                    t
                }())
                  , n = new DataView(t);
                return n.getUint32(0, !0) / 4294967296
            } catch (e) {
                return .5
            }
        }
        function c(e, t) {
            return a(e) <= t
        }
    }
    ,
    547465: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            Delegate: () => i.Delegate
        });
        var i = n(978956)
    }
    ,
    639247: (e, t, n) => {
        "use strict";
        function i(e, t, n, i, o) {
            let r = "";
            if (i = i ? "; path=" + i : "",
            o = o ? "; domain=" + o : "",
            n) {
                const e = new Date;
                e.setTime(e.getTime() + 24 * n * 60 * 60 * 1e3),
                r = "; expires=" + e.toUTCString()
            } else
                r = "";
            document.cookie = e + "=" + t + r + o + i
        }
        function o(e) {
            const t = e + "="
              , n = document.cookie.split(";");
            for (let e = 0; e < n.length; e++) {
                let i = n[e];
                for (; " " === i.charAt(0); )
                    i = i.substring(1, i.length);
                if (0 === i.indexOf(t))
                    return i.substring(t.length, i.length)
            }
            return null
        }
        n.d(t, {
            get: () => o,
            set: () => i
        })
    }
}]);
