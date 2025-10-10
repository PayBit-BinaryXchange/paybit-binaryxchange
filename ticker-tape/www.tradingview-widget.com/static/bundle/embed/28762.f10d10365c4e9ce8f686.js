"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[28762], {
    650151: (e, t) => {
        function n(e, t) {
            if (void 0 === e)
                throw new Error("".concat(null != t ? t : "Value", " is undefined"));
            return e
        }
        function r(e, t) {
            if (null === e)
                throw new Error("".concat(null != t ? t : "Value", " is null"));
            return e
        }
        t.ensureNotNull = t.ensureDefined = t.assert = void 0,
        t.assert = function(e, t) {
            if (!e)
                throw new Error("Assertion failed".concat(t ? ": ".concat(t) : ""))
        }
        ,
        t.ensureDefined = n,
        t.ensureNotNull = r
    }
    ,
    64531: (e, t) => {
        var n, r = !("undefined" == typeof window || !window.document || !window.document.createElement);
        function i() {
            if (n)
                return n;
            if (!r || !window.document.body)
                return "indeterminate";
            var e = window.document.createElement("div");
            return e.appendChild(document.createTextNode("ABCD")),
            e.dir = "rtl",
            e.style.fontSize = "14px",
            e.style.width = "4px",
            e.style.height = "1px",
            e.style.position = "absolute",
            e.style.top = "-1000px",
            e.style.overflow = "scroll",
            document.body.appendChild(e),
            n = "reverse",
            e.scrollLeft > 0 ? n = "default" : (e.scrollLeft = 1,
            0 === e.scrollLeft && (n = "negative")),
            document.body.removeChild(e),
            n
        }
    }
    ,
    158942: (e, t, n) => {
        n.d(t, {
            WatchedValue: () => r.WatchedValue
        });
        var r = n(597773);
        n(390251)
    }
    ,
    536794: (e, t, n) => {
        function r(e) {
            return "number" == typeof e && isFinite(e)
        }
        function i(e) {
            if (!e || "object" != typeof e)
                return e;
            let t;
            t = Array.isArray(e) ? [] : {};
            for (const n in e)
                if (e.hasOwnProperty(n)) {
                    const r = e[n];
                    t[n] = r && "object" == typeof r ? i(r) : r
                }
            return t
        }
        function s(e) {
            return "object" == typeof e && null !== e
        }
        n.d(t, {
            clone: () => i,
            isArray: () => o,
            isInteger: () => a,
            isNumber: () => r,
            isObject: () => s
        });
        const o = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        ;
        function a(e) {
            return "number" == typeof e && e % 1 == 0
        }
        Number.isNaN = Number.isNaN || function(e) {
            return e != e
        }
    }
    ,
    390251: (e, t, n) => {
        n(536794),
        n(597773)
    }
    ,
    597773: (e, t, n) => {
        n.d(t, {
            WatchedValue: () => a
        });
        var r = n(735566)
          , i = n(954992);
        const s = (0,
        r.getLogger)("Common.WatchedValue");
        function o(e) {
            s.logError(`${e && (e.stack || e.message)}`)
        }
        class a {
            constructor(...e) {
                this._listeners = [],
                e.length > 0 ? this._value = e[0] : delete this._value
            }
            destroy() {
                this.unsubscribe()
            }
            value() {
                return this._owner ? this._owner._value : this._value
            }
            setValue(e, t) {
                const n = this._owner ? this._owner : this;
                if (n.writeLock)
                    return;
                const r = n._value === e || Number.isNaN(n._value) && Number.isNaN(e);
                if (!t && r && n.hasOwnProperty("_value"))
                    return;
                n._value = e;
                const i = n._listeners.slice();
                let s = 0;
                for (let t = 0; t < i.length; t++) {
                    i[t].once && (n._listeners.splice(t - s, 1),
                    s++);
                    try {
                        i[t].cb(e)
                    } catch (e) {
                        o(e)
                    }
                }
            }
            deleteValue() {
                this.setValue(void 0)
            }
            subscribe(e, t) {
                if ("function" != typeof e)
                    throw new TypeError("callback must be a function");
                const n = !!t && !!t.once
                  , r = !!t && !!t.callWithLast
                  , i = this._owner ? this._owner : this;
                if (r && i.hasOwnProperty("_value")) {
                    try {
                        e(i._value)
                    } catch (e) {
                        o(e)
                    }
                    if (n)
                        return
                }
                i._listeners.push({
                    cb: e,
                    owner: this,
                    once: !!t && !!t.once
                })
            }
            unsubscribe(e) {
                const t = this._owner ? this._owner : this;
                void 0 === e && (e = null);
                const n = t._listeners;
                for (let r = n.length; r--; )
                    n[r].owner !== this && t !== this || n[r].cb !== e && null !== e || n.splice(r, 1)
            }
            readonly() {
                if (this._readonlyInstance)
                    return this._readonlyInstance;
                const e = {
                    subscribe: this.subscribe.bind(this),
                    unsubscribe: this.unsubscribe.bind(this),
                    value: this.value.bind(this),
                    when: this.when.bind(this),
                    ownership: this.ownership.bind(this),
                    spawnOwnership: this.spawnOwnership.bind(this),
                    weakReference: this.weakReference.bind(this),
                    spawn: e => this.spawn(e).readonly(),
                    destroy: this.destroy.bind(this)
                };
                return this._readonlyInstance = e,
                e
            }
            spawn(e) {
                return this._spawn(e)
            }
            when(e) {
                (0,
                i.callWhen)(this, (e => Boolean(e)), ( () => {
                    try {
                        e(this.value())
                    } catch (e) {
                        o(e)
                    }
                }
                ))
            }
            assertNoSubscriptions() {
                0
            }
            ownership() {
                return this
            }
            release() {
                this.destroy()
            }
            spawnOwnership() {
                return this._spawn()
            }
            weakReference() {
                return this._spawn(void 0, !0)
            }
            _spawn(e, t) {
                return new c(this._owner || this,e,t)
            }
        }
        class c extends a {
            constructor(e, t, n) {
                super(),
                delete this._listeners,
                this._owner = e,
                this._onDestroy = t,
                this._weakReference = !!n
            }
            destroy() {
                try {
                    this._onDestroy?.()
                } catch (e) {
                    o(e)
                }
                super.destroy()
            }
            readonly() {
                return this._readonlySpawnInstance || (this._readonlySpawnInstance = {
                    ...super.readonly(),
                    destroy: () => this.destroy(),
                    readonly() {
                        return this
                    }
                }),
                this._readonlySpawnInstance
            }
            release() {
                this._weakReference || super.release()
            }
        }
    }
    ,
    607423: (e, t, n) => {
        n.d(t, {
            isNativeUIInteraction: () => s
        });
        var r = n(591800);
        function i(e) {
            if ("INPUT" === e.tagName) {
                const t = e.type;
                return "text" === t || "email" === t || "number" === t || "password" === t || "search" === t || "tel" === t || "url" === t
            }
            return "TEXTAREA" === e.tagName || e.isContentEditable
        }
        function s(e, t) {
            if (!t)
                return !1;
            const n = 255 & e;
            if (27 === n || n >>> 4 == 7)
                return !1;
            switch (e ^ n) {
            case r.Modifiers.Alt:
                return (38 === n || 40 === n) && "SELECT" === t.tagName || i(t);
            case r.Modifiers.Alt + r.Modifiers.Shift:
                return i(t);
            case r.Modifiers.Mod:
                if (67 === n || !r.isMacKeyboard && 45 === n) {
                    const e = t.ownerDocument && t.ownerDocument.getSelection();
                    if (e && !e.isCollapsed)
                        return !0
                }
                return i(t);
            case r.Modifiers.Mod + r.Modifiers.Shift:
                return n >= 33 && n <= 40 && i(t);
            case r.Modifiers.Shift:
            case 0:
                return 9 === n ? !(!t.ownerDocument || t === t.ownerDocument.body || t === t.ownerDocument.documentElement) : (!function(e) {
                    if ("BUTTON" === e.tagName)
                        return !0;
                    if ("INPUT" === e.tagName) {
                        const t = e.type;
                        if ("submit" === t || "button" === t || "reset" === t || "checkbox" === t || "radio" === t)
                            return !0
                    }
                    return !1
                }(t) || 13 === n || 32 === n || 9 === n) && ("form"in t || t.isContentEditable)
            }
            return !1
        }
    }
    ,
    336748: (e, t, n) => {
        n.d(t, {
            colorsPalette: () => d
        });
        var r = n(130714)
          , i = n(410515)
          , s = n(650151);
        const o = {
            ...r,
            ...i
        }
          , a = {}
          , c = Object.keys(o).length
          , u = /^#(([a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i;
        function l(e, t=[], n=o) {
            const r = n[e];
            if (!r)
                return null;
            if (u.test(r))
                return r;
            const i = r;
            return t.push(e),
            -1 !== t.indexOf(i) ? (console.warn("Colors definitions cycled"),
            r) : t.length > c ? (console.warn("Too many variables-link in HEX-color search: " + t[0]),
            null) : l(i, t, n)
        }
        Object.keys(o).forEach((e => {
            const t = l(e);
            a[e] = (0,
            s.ensureNotNull)(t)
        }
        ));
        const d = a
    }
    ,
    790188: (e, t, n) => {
        n.d(t, {
            colorsPalette: () => r.colorsPalette
        });
        var r = n(336748)
    }
    ,
    745269: (e, t, n) => {
        n.d(t, {
            color: () => r
        });
        const r = {
            black70: "#4A4A4A",
            black80: "#535353"
        }
    }
    ,
    778785: (e, t, n) => {
        n.d(t, {
            mobiletouch: () => i,
            setClasses: () => s
        });
        var r = n(23482);
        const i = r.mobiletouch;
        r.touch;
        function s() {
            document.documentElement.classList.add(r.touch ? "feature-touch" : "feature-no-touch", r.mobiletouch ? "feature-mobiletouch" : "feature-no-mobiletouch")
        }
    }
    ,
    638456: (e, t, n) => {
        n.d(t, {
            CheckMobile: () => c,
            isDesktopApp: () => o,
            isMac: () => s,
            isSymphonyEmbed: () => a,
            onWidget: () => l,
            supportTouch: () => d
        });
        var r = n(23482);
        const i = window.TradingView = window.TradingView || {};
        function s() {
            return r.isMac
        }
        function o() {
            return /TVDesktop/i.test(navigator.userAgent)
        }
        function a() {
            return i.isSymphony || !1
        }
        const c = {
            Android: () => r.isAndroid,
            BlackBerry: () => r.isBlackBerry,
            iOS: () => r.isIOS,
            Opera: () => r.isOperaMini,
            isIPad: () => r.isIPad,
            any: () => r.isAnyMobile
        };
        i.isMobile = c;
        const u = new Map;
        function l() {
            const e = window.location.pathname
              , t = window.location.host
              , n = `${t}${e}`;
            return u.has(n) || u.set(n, function(e, t) {
                const n = ["^widget-docs"];
                for (const e of n)
                    if (new RegExp(e).test(t))
                        return !0;
                const r = ["^widgetembed/?$", "^cmewidgetembed/?$", "^([0-9a-zA-Z-]+)/widgetembed/?$", "^([0-9a-zA-Z-]+)/widgetstatic/?$", "^([0-9a-zA-Z-]+)?/?mediumwidgetembed/?$", "^twitter-chart/?$", "^telegram/chart/?$", "^embed/([0-9a-zA-Z]{8})/?$", "^widgetpopup/?$", "^extension/?$", "^idea-popup/?$", "^hotlistswidgetembed/?$", "^([0-9a-zA-Z-]+)/hotlistswidgetembed/?$", "^marketoverviewwidgetembed/?$", "^([0-9a-zA-Z-]+)/marketoverviewwidgetembed/?$", "^eventswidgetembed/?$", "^tickerswidgetembed/?$", "^forexcrossrateswidgetembed/?$", "^forexheatmapwidgetembed/?$", "^marketquoteswidgetembed/?$", "^screenerwidget/?$", "^cryptomktscreenerwidget/?$", "^([0-9a-zA-Z-]+)/cryptomktscreenerwidget/?$", "^([0-9a-zA-Z-]+)/marketquoteswidgetembed/?$", "^technical-analysis-widget-embed/$", "^singlequotewidgetembed/?$", "^([0-9a-zA-Z-]+)/singlequotewidgetembed/?$", "^embed-widget/([0-9a-zA-Z-]+)/(([0-9a-zA-Z-]+)/)?$", "^widget-docs/([0-9a-zA-Z-]+)/([0-9a-zA-Z-/]+)?$"]
                  , i = e.replace(/^\//, "");
                let s;
                for (let e = r.length - 1; e >= 0; e--)
                    if (s = new RegExp(r[e]),
                    s.test(i))
                        return !0;
                return !1
            }(e, t)),
            u.get(n) ?? !1
        }
        function d() {
            return r.mobiletouch || r.touch || r.isAnyMobile
        }
        i.onWidget = l;
        r.isChrome,
        r.isFF,
        r.isEdge,
        r.isSafari
    }
    ,
    547465: (e, t, n) => {
        n.d(t, {
            Delegate: () => r.Delegate
        });
        var r = n(978956)
    }
    ,
    931924: (e, t, n) => {
        n.d(t, {
            enabled: () => r.enabled
        });
        var r = n(949643);
        "object" == typeof __initialDisabledFeaturesets && Array.isArray(__initialDisabledFeaturesets) && __initialDisabledFeaturesets.forEach(r.disable),
        "object" == typeof __initialEnabledFeaturesets && Array.isArray(__initialEnabledFeaturesets) && __initialEnabledFeaturesets.forEach(r.enable)
    }
    ,
    820028: (e, t, n) => {
        n.d(t, {
            WatchedValue: () => r.WatchedValue
        });
        var r = n(158942)
    }
}]);
