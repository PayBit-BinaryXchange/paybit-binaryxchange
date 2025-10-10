(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[32547], {
    390251: (e, t, n) => {
        "use strict";
        n.d(t, {
            WatchedObject: () => s
        });
        var r = n(536794)
          , o = n(597773);
        function i(e, t) {
            return (0,
            r.deepEquals)(e, t)[0]
        }
        class s extends o.WatchedValue {
            constructor(e, t=i) {
                super(e),
                this._comparator = t
            }
            setValue(e, t) {
                !t && this._comparator(this.value(), e) || super.setValue(e, t)
            }
        }
    }
    ,
    597773: (e, t, n) => {
        "use strict";
        n.d(t, {
            WatchedValue: () => a
        });
        var r = n(735566)
          , o = n(954992);
        const i = (0,
        r.getLogger)("Common.WatchedValue");
        function s(e) {
            i.logError(`${e && (e.stack || e.message)}`)
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
                const o = n._listeners.slice();
                let i = 0;
                for (let t = 0; t < o.length; t++) {
                    o[t].once && (n._listeners.splice(t - i, 1),
                    i++);
                    try {
                        o[t].cb(e)
                    } catch (e) {
                        s(e)
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
                  , o = this._owner ? this._owner : this;
                if (r && o.hasOwnProperty("_value")) {
                    try {
                        e(o._value)
                    } catch (e) {
                        s(e)
                    }
                    if (n)
                        return
                }
                o._listeners.push({
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
                o.callWhen)(this, (e => Boolean(e)), ( () => {
                    try {
                        e(this.value())
                    } catch (e) {
                        s(e)
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
                    s(e)
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
    173777: (e, t, n) => {
        "use strict";
        n.d(t, {
            SEPARATOR_PREFIX: () => r,
            isSeparatorItem: () => o
        });
        const r = "###";
        function o(e) {
            return e.startsWith(r)
        }
    }
    ,
    62889: (e, t, n) => {
        "use strict";
        n.d(t, {
            CopyrightPosition: () => r,
            copyrightLabel: () => l
        });
        var r, o = n(444372), i = n(497754), s = n(536794), a = n(995683), c = n(828133);
        function l({svgText: e, icon: t, theme: l, url: u, mode: d, verticalPosition: g=r.Vertical.Bottom, horizontalPosition: h=r.Horizontal.End, snapToEdge: p=!0, isExpanded: f=!1, className: m}) {
            let w;
            switch (d) {
            case "new":
            case "with_border":
            case "large_trade":
                w = (0,
                s.clone)(l);
                break;
            default:
                w = (0,
                a.mergeThemes)((0,
                s.clone)(c), l)
            }
            const y = document.createElement("span");
            let b;
            u && (b = document.createElement("a"),
            b.classList.add(...w.label__link.split(/\s/)),
            b.href = u,
            b.target = "_blank",
            b.rel = "noopener noreferrer",
            b.setAttribute("data-target-type", "copyright"),
            b.ariaLabel = o.t(null, void 0, n(15572)),
            y.append(b)),
            y.className = i(w.label, h === r.Horizontal.Start && w.start, h === r.Horizontal.End && w.end, g === r.Vertical.Top && w.top, g === r.Vertical.Bottom && w.bottom, p && "large_trade" !== d && w.snap, "large_old" === d && w.large, (f || "large_trade" === d) && w.expanded, m, "js-copyright-label"),
            y.addEventListener("click", ( () => {
                function e() {
                    y.classList.remove(w.expandedByClick),
                    y.removeEventListener("mouseleave", e)
                }
                y.classList.contains(w.expandedWithTransition) || y.classList.contains(w.expanded) || (y.classList.contains(w.expandedByClick) ? u || e() : (y.classList.add(w.expandedByClick),
                y.addEventListener("mouseleave", e)))
            }
            ));
            const v = document.createElement("span");
            v.className = w.logoWrap,
            v.innerHTML = t;
            const S = document.createElement("span");
            return S.className = w.svgTextWrap,
            S.innerHTML = e,
            y.append(v, S),
            [y, w]
        }
        !function(e) {
            let t, n;
            !function(e) {
                e[e.Bottom = 0] = "Bottom",
                e[e.Top = 1] = "Top"
            }(t = e.Vertical || (e.Vertical = {})),
            function(e) {
                e[e.Start = 0] = "Start",
                e[e.End = 1] = "End"
            }(n = e.Horizontal || (e.Horizontal = {}))
        }(r || (r = {}))
    }
    ,
    351079: (e, t, n) => {
        "use strict";
        n.d(t, {
            CopyrightPosition: () => o.CopyrightPosition,
            createCopyrightLabel: () => s
        });
        var r = n(497754)
          , o = n(62889)
          , i = n(952598);
        function s({sheriffOptions: e, ...t}) {
            const [n,s] = (0,
            o.copyrightLabel)(t)
              , a = e && e.includes(i.KnownAction.Expand)
              , c = e && e.includes(i.KnownAction.LargeTradeLogo);
            return n.className = r(n.className, (a || c) && s.expandedWithTransition),
            n
        }
    }
    ,
    23580: (e, t, n) => {
        "use strict";
        function r(e, t) {
            return e && e.utm_campaign && (e.utm_campaign += `-${t}`),
            e
        }
        async function o(e, t, r, o) {
            if ("lentaru" === e) {
                const {getLentaCopyrightData: e} = await Promise.all([n.e(90431), n.e(1523)]).then(n.bind(n, 466672));
                return e()
            }
            if ("cmoneycomtw" === e) {
                const {getCmoneycomtwCopyrightData: e} = await Promise.all([n.e(47597), n.e(99578), n.e(42091)]).then(n.bind(n, 20922));
                return e(t, r)
            }
            if ("new" === o) {
                const {getTradingViewCopyrightData: e} = await Promise.all([n.e(88380), n.e(36228)]).then(n.bind(n, 703094));
                return e(t, r)
            }
            if ("with_border" === o) {
                const {getTradingViewCopyrightData: e} = await Promise.all([n.e(62764), n.e(37753)]).then(n.bind(n, 513316));
                return e(t, r)
            }
            if ("large_trade" === o) {
                const {getTradingViewCopyrightData: e} = await Promise.all([n.e(52431), n.e(47259)]).then(n.bind(n, 203515));
                return e(t, r)
            }
            {
                const {getTradingViewCopyrightData: e} = await Promise.all([n.e(47597), n.e(53259)]).then(n.bind(n, 88136));
                return e(t, r)
            }
        }
        n.d(t, {
            addUtmCampaignSource: () => r,
            getCustomerCopyrightData: () => o
        })
    }
    ,
    650401: (e, t, n) => {
        "use strict";
        n.d(t, {
            getWidgetSheriffActions: () => l
        });
        var r = n(735566)
          , o = n(803912)
          , i = n(952598);
        const s = window.WIDGET_SHERIFF_HOST || "https://widget-sheriff.xstaging-widget.tv"
          , a = (0,
        r.getLogger)("WidgetSheriff.Widget");
        let c = null;
        async function l() {
            return null === c && (c = await async function() {
                const e = function() {
                    if (document.location.ancestorOrigins && document.location.ancestorOrigins.length)
                        return document.location.ancestorOrigins[document.location.ancestorOrigins.length - 1];
                    try {
                        return new URL(document.referrer).origin
                    } catch (e) {
                        return document.location.origin || null
                    }
                }();
                if (null === e)
                    return a.logWarn("ancestorOrigin is undefined"),
                    Promise.resolve([]);
                const t = new URL("/sheriff/api/v1/rules/search",s);
                t.searchParams.append("origin", e);
                return (await (0,
                o.fetch)(t.toJSON()).then((e => {
                    if (!e.ok)
                        throw new Error("Guard request error occured");
                    return 204 === e.status ? Promise.resolve({
                        actions: []
                    }) : e.json()
                }
                )).catch((e => (a.logWarn(e.message),
                Promise.resolve({
                    actions: []
                }))))).actions.filter((e => i.widgetSheriffActions.has(e)))
            }()),
            Promise.resolve(c)
        }
    }
    ,
    125226: (e, t, n) => {
        "use strict";
        n.d(t, {
            isFeatureEnabled: () => d,
            onFeaturesStateChanged: () => a
        });
        var r = n(49437)
          , o = n(547465)
          , i = n(584878);
        n(638456);
        const s = new o.Delegate
          , a = () => s
          , c = "forcefeaturetoggle.";
        const l = new class {
            enableFeature(e) {
                r.TVLocalStorage.setItem(c + e, "true"),
                s.fire(e)
            }
            disableFeature(e) {
                r.TVLocalStorage.setItem(c + e, "false"),
                s.fire(e)
            }
            resetFeature(e) {
                r.TVLocalStorage.removeItem(c + e),
                s.fire(e)
            }
            onFeaturesStateChanged() {
                return s
            }
        }
        ;
        function u(e, t) {
            return (!e[t] || -1 !== e[t]) && (!!("true" === r.TVLocalStorage.getItem(c + t) || window.is_authenticated && "true" === window.user?.settings?.[c + t]) || !("false" === r.TVLocalStorage.getItem(c + t) || window.is_authenticated && "false" === window.user?.settings?.[c + t]) && (!!e[t] && (1 === e[t] || (0,
            i.shouldAffectUser)(t, e[t]))))
        }
        window.TradingView = window.TradingView || {},
        window.TradingView.FeatureToggle = l;
        const d = (g = window.featureToggleState || {},
        window.TradingView.onWidget?.() || Promise.all([n.e(80349), n.e(34604)]).then(n.bind(n, 180349)).then((e => {
            e.pushStreamMultiplexer.on("featuretoggle", (e => {
                const t = u(g, e.name);
                g[e.name] = e.state,
                t !== u(g, e.name) && s.fire(e.name)
            }
            ))
        }
        )),
        u.bind(null, g));
        var g;
        window.TradingView.isFeatureEnabled = d
    }
    ,
    588948: (e, t, n) => {
        "use strict";
        n.d(t, {
            getFreshInitData: () => c,
            getInitData: () => a,
            updateInitData: () => s
        });
        var r = n(650151);
        const o = (0,
        n(735566).getLogger)("Common.InitData")
          , i = window.initData || {};
        function s() {
            window.initData && window.initData !== i && (Object.assign(i, window.initData),
            window.initData = i);
            const e = document.querySelectorAll('script[type="application/prs.init-data+json"]');
            for (let t = 0; t < e.length; t++) {
                const n = e[t];
                try {
                    const e = JSON.parse((0,
                    r.ensureNotNull)(n.textContent));
                    Object.assign(i, e)
                } catch (e) {
                    o.logWarn(`Failed to parse initData element. ${e}`)
                } finally {
                    (0,
                    r.ensureNotNull)(n.parentNode).removeChild(n)
                }
            }
        }
        function a() {
            return i
        }
        function c() {
            return s(),
            i
        }
    }
    ,
    49437: (e, t, n) => {
        "use strict";
        const {getLogger: r} = n(735566)
          , o = r("TVLocalStorage");
        var i = function() {
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
        i.prototype._report = function() {
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
                const r = t.slice(0, e);
                o.logNormal(`Total amount of keys in Local Storage: ${this.length}`),
                o.logNormal(`Top ${e} keys with longest values: ${JSON.stringify(n)}`),
                o.logNormal(`Top ${e} longest key names: ${JSON.stringify(r)}`);
                try {
                    navigator.storage.estimate().then((e => {
                        o.logNormal(`Storage estimate: ${JSON.stringify(e)}`)
                    }
                    ))
                } catch (e) {}
            }
        }
        ,
        i.prototype.length = 0,
        i.prototype.isAvailable = !1,
        i.prototype.localStorage = {
            "tvlocalstorage.available": "false"
        },
        i.prototype._updateLength = function() {
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
        i.prototype.key = function(e) {
            return this.isAvailable ? this.localStorage.key(e) : Object.keys(this.localStorage)[e]
        }
        ,
        i.prototype.getItem = function(e) {
            return this.isAvailable ? this.localStorage.getItem(e) : void 0 === this.localStorage[e] ? null : this.localStorage[e]
        }
        ,
        i.prototype.setItem = function(e, t) {
            this.isAvailable ? this.localStorage.setItem(e, t) : this.localStorage[e] = t,
            this._updateLength()
        }
        ,
        i.prototype.removeItem = function(e) {
            this.isAvailable ? this.localStorage.removeItem(e) : delete this.localStorage[e],
            this._updateLength()
        }
        ,
        i.prototype.clear = function() {
            this.isAvailable ? this.localStorage.clear() : this.localStorage = {},
            this._updateLength()
        }
        ,
        window.TVLocalStorage = new i,
        e.exports.TVLocalStorage = window.TVLocalStorage
    }
    ,
    439563: (e, t, n) => {
        "use strict";
        async function r() {
            const e = (await Promise.all([n.e(73034), n.e(69374), n.e(36683)]).then(n.bind(n, 469449))).getTrackerInstance();
            return e || null
        }
        n.d(t, {
            getEmbedWidgetTracker: () => r
        })
    }
    ,
    519073: (e, t, n) => {
        "use strict";
        function r(e) {
            return void 0 !== e && e.includes("crypto")
        }
        function o(e, t) {
            return "stock" === e && t.includes("right") || "right" === e
        }
        function i(e, t) {
            return s(e, t) || "stock" === e && t.includes("fund") && t.includes("etf") || "structured" === e && t.includes("etn")
        }
        function s(e, t) {
            return "fund" === e && t.includes("etf")
        }
        function a(e) {
            return "bond" === e
        }
        function c(e, t) {
            return "bond" === e && t.includes("corporate")
        }
        function l(e) {
            return "economic" === e
        }
        function u(e) {
            return "option" === e
        }
        function d(e) {
            return "dex" === e?.centralization
        }
        function g(e) {
            return "spread" === e
        }
        function h(e) {
            return "futures" === e
        }
        function p(e) {
            return "forex" === e
        }
        function f(e, t, n) {
            return r(t) && "spot" === e && "USD" === n
        }
        function m(e, t) {
            return "spot" === e && t.includes("cryptoasset")
        }
        function w(e, t, n) {
            return Boolean("bond" === e && n && t.includes("government"))
        }
        function y(e, t) {
            return Boolean("bond" === e && t.includes("government") && !t.includes("benchmark"))
        }
        function b(e) {
            return Boolean(e.typespecs?.includes("yield"))
        }
        function v(e, t) {
            return "stock" === e && t.includes("common") || "stock" === e && t.includes("preferred") || "stock" === e && t.includes("forward") || "stock" === e && t.includes("bonus") || "stock" === e && t.includes("cfd") || "fund" === e && t.includes("mutual") || "fund" === e && t.includes("unit") || "fund" === e && t.includes("trust") || "fund" === e && t.includes("reit") || "fund" === e && t.includes("etn") || "fund" === e && t.includes("closedend") || "bond" === e && t.includes("convertible") || "dr" === e || "warrant" === e || "structured" === e && !t.includes("etn")
        }
        function S(e) {
            return e?.includes("discontinued") ?? !1
        }
        n.d(t, {
            hasCryptoTypespec: () => r,
            isBond: () => a,
            isCorporateBond: () => c,
            isCryptoSpotUsd: () => f,
            isCryptoassetSpot: () => m,
            isDex: () => d,
            isEconomicSymbol: () => l,
            isEtf: () => i,
            isForexSymbol: () => p,
            isFundEtf: () => s,
            isFutures: () => h,
            isGovernmentBenchmarkBond: () => w,
            isGovernmentOnlyBond: () => y,
            isOption: () => u,
            isRight: () => o,
            isSpread: () => g,
            isStocksSymbol: () => v,
            isSymbolDelisted: () => S,
            isYield: () => b
        })
    }
    ,
    889267: (e, t, n) => {
        "use strict";
        n.d(t, {
            factorOutBraces: () => h,
            getTokenAtPos: () => g,
            isBinaryOperator: () => u,
            isSpread: () => d,
            parseToken: () => f,
            shortName: () => p,
            symbolTokenEscapeRe: () => s,
            tokenize: () => l
        });
        var r = n(173777)
          , o = n(125226);
        const i = /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&])*|'.+?'/
          , s = /[+\-/*]/
          , a = (e=(0,
        o.isFeatureEnabled)("allow_trailing_whitespace_in_number_token")) => ({
            number: e ? /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))(?:\s*(?=\s*$))?|\.\d+(?:\s*(?=\s*$))?/ : /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
            incompleteNumber: /\./,
            symbol: i,
            incompleteSymbol: /'[^']*/,
            separatorPrefix: r.SEPARATOR_PREFIX,
            openBrace: "(",
            closeBrace: ")",
            plus: "+",
            minus: "-",
            multiply: "*",
            divide: "/",
            power: "^",
            whitespace: /[\0-\x20\s]+/,
            unparsed: null
        })
          , c = (e=a()) => new RegExp(Object.values(e).map((e => {
            return null === e ? "" : `(${"string" == typeof e ? (t = e,
            t.replace(/[\^$()[\]{}*+?|\\]/g, "\\$&")) : e.source})`;
            var t
        }
        )).filter((e => "" !== e)).concat(".").join("|"),"g");
        function l(e, t=a()) {
            if (!e)
                return [];
            const n = []
              , r = Object.keys(t);
            let o;
            const i = c(t);
            for (; o = i.exec(e); ) {
                let e = !1;
                for (let t = r.length; t--; )
                    if (o[t + 1]) {
                        r[t] && n.push({
                            value: o[t + 1],
                            type: r[t],
                            precedence: 0,
                            offset: o.index
                        }),
                        e = !0;
                        break
                    }
                e || n.push({
                    value: o[0],
                    type: "unparsed",
                    precedence: 0,
                    offset: o.index
                })
            }
            return n
        }
        function u(e) {
            return "plus" === e || "minus" === e || "multiply" === e || "divide" === e || "power" === e
        }
        function d(e) {
            return e.length > 1 && e.some((e => u(e.type)))
        }
        function g(e, t) {
            for (let n = 0; n < e.length; n++) {
                const r = e[n]
                  , o = "symbol" === r.type || "incompleteSymbol" === r.type || "number" === r.type;
                if (r.offset <= t && t <= r.offset + r.value.length && o)
                    return r
            }
            return null
        }
        function h(e) {
            e = function(e) {
                const t = [];
                for (const n of e)
                    "whitespace" !== n.type && t.push(n);
                return t
            }(e);
            const t = []
              , n = [];
            let r;
            for (let o = 0; o < e.length; o++) {
                const i = e[o];
                switch (i.type) {
                case "plus":
                case "minus":
                case "multiply":
                case "divide":
                case "power":
                    n.length && n[n.length - 1].minPrecedence > i.precedence && (n[n.length - 1].minPrecedence = i.precedence);
                    break;
                case "openBrace":
                    r = {
                        minPrecedence: 1 / 0,
                        openBraceIndex: o
                    },
                    n.push(r);
                    break;
                case "closeBrace":
                    {
                        if (r = n.pop(),
                        !r)
                            break;
                        const i = e[r.openBraceIndex - 1]
                          , s = e[o + 1]
                          , a = i && ("plus" === i.type || "multiply" === i.type);
                        (!u(s?.type) || s?.precedence <= r.minPrecedence) && (!u(i?.type) || i?.precedence < r?.minPrecedence || i?.precedence === r?.minPrecedence && a) && (t.unshift(r.openBraceIndex),
                        t.push(o),
                        n.length && n[n.length - 1].minPrecedence > r.minPrecedence && (n[n.length - 1].minPrecedence = r.minPrecedence))
                    }
                }
            }
            for (let n = t.length; n--; )
                e.splice(t[n], 1);
            return e
        }
        function p(e) {
            return h(l(e)).reduce(( (e, t) => {
                if ("symbol" !== t.type)
                    return e + t.value;
                const [,n] = f(t);
                return n ? e + n : e
            }
            ), "")
        }
        function f(e) {
            const t = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i.exec(e.value);
            return null === t ? [void 0, void 0] : [t[1], t[2]]
        }
    }
    ,
    995683: (e, t, n) => {
        "use strict";
        function r(e, t, n={}) {
            return Object.assign({}, e, function(e, t, n={}) {
                const r = Object.assign({}, t);
                for (const o of Object.keys(t)) {
                    const i = n[o] || o;
                    i in e && (r[o] = [e[i], t[o]].join(" "))
                }
                return r
            }(e, t, n))
        }
        n.d(t, {
            mergeThemes: () => r
        })
    }
    ,
    534197: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            destroyQuoteSessions: () => c,
            getQuoteSessionInstance: () => i,
            getQuoteSessionNoEnsure: () => a,
            setQuoteSessionInstance: () => s
        });
        var r = n(288533);
        const o = {};
        function i(e="full") {
            return o[e] || s(e, new r(e)),
            o[e]
        }
        function s(e="full", t) {
            o[e] = t
        }
        function a(e="full") {
            return o[e]
        }
        function c() {
            for (const e in o)
                if (o.hasOwnProperty(e)) {
                    const t = o[e];
                    void 0 !== t && t.destroy(),
                    delete o[e]
                }
        }
    }
    ,
    256225: (e, t, n) => {
        n(778785).setClasses();
        var r = n(709903).whenDocumentReady
          , o = n(437861).handleTVLinksClick;
        r(( () => {
            o()
        }
        ))
    }
    ,
    912465: (e, t, n) => {
        "use strict";
        function r(e, t) {
            const n = t || window.locale || "en";
            let r = e[n] ? e[n] : e.en;
            return r = "tradingview.com" === r ? "www.tradingview.com" : r,
            r ? document.location.protocol + "//" + r : ""
        }
        n.d(t, {
            determineBaseUrl: () => r
        })
    }
    ,
    728104: (e, t, n) => {
        "use strict";
        function r(e) {
            return decodeURIComponent(e.replace(/\+/g, " ")).replace(/<\/?[^>]+(>|$)/g, "")
        }
        function o(e) {
            const t = /([^&=]+)=?([^&]*)/g
              , n = {};
            if (!e)
                return n;
            let o = t.exec(e);
            for (; o; )
                n[r(o[1])] = r(o[2]),
                o = t.exec(e);
            return n
        }
        function i() {
            return o(window.location.search.substring(1))
        }
        function s() {
            const e = window.location.href.split("#")[0];
            window.history.replaceState("", document.title, e)
        }
        function a(e) {
            const t = [];
            for (const n in e)
                e.hasOwnProperty(n) && null != e[n] && t.push({
                    key: n,
                    pair: encodeURIComponent(n) + "=" + encodeURIComponent(e[n])
                });
            return t.sort(( (e, t) => e.key > t.key ? 1 : e.key < t.key ? -1 : 0)).map((e => e.pair)).join("&")
        }
        n.d(t, {
            createUrlParams: () => a,
            getUrlParams: () => i,
            removeHashFromUrl: () => s
        })
    }
    ,
    437861: (e, t, n) => {
        "use strict";
        n.d(t, {
            handleTVLinksClick: () => s,
            sendWidgetTrackData: () => a
        });
        var r = n(439563)
          , o = n(283834)
          , i = n(974629);
        function s() {
            document.addEventListener("click", (e => {
                const t = e.target.closest(":link");
                if (!t?.hostname || !(0,
                i.isInternalHost)(t.hostname, "tradingview.com"))
                    return;
                const n = t.dataset.targetType || null;
                a(t.href, n)
            }
            ))
        }
        function a(e, t) {
            const n = function() {
                const e = window.initData.hashSettings;
                if (Object.keys(e).length > 0)
                    return (0,
                    o.filterUtmInfo)(e);
                const t = new URLSearchParams(location.href);
                return {
                    utm_campaign: t.get("utm_campaign") || void 0,
                    utm_source: t.get("utm_source") || void 0
                }
            }()
              , i = function(e) {
                const t = location.ancestorOrigins?.[0] || document.referrer;
                return e.utm_source || function(e) {
                    try {
                        return new URL(e).host
                    } catch (e) {
                        return ""
                    }
                }(t)
            }(n);
            !async function(e) {
                (await (0,
                r.getEmbedWidgetTracker)())?.trackWidgetTVLinkClick(e)
            }({
                widget_type: c(n),
                domain: i,
                link: e,
                target_type: t
            })
        }
        function c(e) {
            if (e.utm_campaign)
                return e.utm_campaign;
            const t = location.pathname;
            return t.includes("embed-widget") ? t.split("/")[2] : t
        }
    }
    ,
    762553: (e, t, n) => {
        "use strict";
        n.d(t, {
            extractWidgetSettings: () => o
        });
        const r = {
            whitelabel: !0,
            permissionOverrides: !0
        };
        function o(e, t=[], n) {
            return function(e, t, n, o=[], i) {
                const s = n.slice(1)
                  , a = decodeURIComponent(s);
                let c = {};
                try {
                    "" !== a && (c = JSON.parse(a),
                    void 0 !== i && i(e, c),
                    Object.keys(c).forEach((e => {
                        (r[e] || o.includes(e)) && delete c[e]
                    }
                    )))
                } catch (e) {
                    c = {},
                    console.warn("Hash params parsing error! Hash params ignored.")
                }
                const l = t.slice(1)
                  , u = t.includes("%") ? decodeURIComponent(l) : t
                  , d = new URLSearchParams(u);
                let g = {};
                try {
                    d.forEach(( (e, t) => {
                        o.includes(t) || (g[t] = e)
                    }
                    )),
                    void 0 !== i && i(e, g)
                } catch (e) {
                    g = {},
                    console.warn("Search query params parsing error! Search query params ignored.")
                }
                return Object.assign({}, e, c, g)
            }(e, location.search, location.hash, t, n)
        }
    }
    ,
    735566: (e, t, n) => {
        "use strict";
        var r;
        n.r(t),
        n.d(t, {
            LOGLEVEL: () => r,
            getLogHistory: () => b,
            getLogLevel: () => h,
            getLogger: () => S,
            getRawLogHistory: () => w,
            isHighRateEnabled: () => p,
            loggingOff: () => k,
            loggingOn: () => _,
            serializeLogHistoryEntry: () => y,
            setHighRateStatus: () => m,
            setLogLevel: () => f
        }),
        function(e) {
            e[e.ERROR = 1] = "ERROR",
            e[e.WARNING = 2] = "WARNING",
            e[e.INFO = 3] = "INFO",
            e[e.NORMAL = 4] = "NORMAL",
            e[e.DEBUG = 5] = "DEBUG"
        }(r || (r = {}));
        let o = 0;
        const i = 1e3
          , s = [];
        let a = null
          , c = null
          , l = null
          , u = null
          , d = r.WARNING
          , g = !1;
        function h() {
            return d
        }
        function p() {
            return g
        }
        function f(e) {
            e = Math.max(r.ERROR, Math.min(r.DEBUG, e)),
            d = e
        }
        function m(e) {
            g = e
        }
        function w(e, t) {
            let n = s.reduce(( (e, t) => e.concat(t)), []);
            return n.sort(( (e, t) => e.id - t.id)),
            void 0 !== t && (n = n.filter((e => e.subSystemId === t))),
            "number" == typeof e && (n = n.slice(-e)),
            n
        }
        function y(e) {
            return new Date(e.timestamp).toISOString() + ":" + e.subSystemId + ":" + e.message.replace(/"/g, "'")
        }
        const b = (e, t) => function(e, t) {
            let n, r = 0, o = 0;
            for (n = e.length - 1; n >= 1 && (r += 8 * (1 + encodeURIComponent(e[n]).length),
            !(n - 1 > 0 && (o = 8 * (1 + encodeURIComponent(e[n - 1]).length),
            r + o > t))); n--)
                ;
            return e.slice(n)
        }(w(e, t).map(y), 75497472);
        function v(e, t, n, s) {
            if (t === c && s.id === l)
                return;
            const g = new Date;
            if (e <= r.NORMAL && function(e, t, n, r, s) {
                "function" == typeof structuredClone && (t = structuredClone(t)),
                t = t.slice(0, i);
                const a = {
                    id: o,
                    message: t,
                    subSystemId: r,
                    timestamp: Number(e)
                };
                o += 1,
                n.push(a),
                void 0 !== s && n.length > s && n.splice(0, 1)
            }(g, t, n, s.id, s.maxCount),
            e <= d && (!s.highRate || p()) && (!a || s.id.match(a))) {
                const n = g.toISOString() + ":" + s.id + ":" + t;
                switch (e) {
                case r.DEBUG:
                    console.debug(n);
                    break;
                case r.INFO:
                case r.NORMAL:
                    s.color ? console.log("%c" + n, "color: " + s.color) : console.log(n);
                    break;
                case r.WARNING:
                    console.warn(n);
                    break;
                case r.ERROR:
                    console.error(n)
                }
                c = t,
                l = s.id,
                null !== u && clearTimeout(u),
                u = setTimeout(( () => {
                    c = null,
                    l = null,
                    u = null
                }
                ), 1e3)
            }
        }
        function S(e, t={}) {
            const n = [];
            s.push(n);
            const o = Object.assign(t, {
                id: e
            });
            function i(e) {
                return t => v(e, String(t), n, o)
            }
            return {
                logDebug: i(r.DEBUG),
                logError: i(r.ERROR),
                logInfo: i(r.INFO),
                logNormal: i(r.NORMAL),
                logWarn: i(r.WARNING)
            }
        }
        const _ = (e, t) => {
            f(r.DEBUG),
            g = Boolean(e),
            a = t || null
        }
          , k = () => {
            f(r.INFO)
        }
    }
    ,
    23482: (e, t, n) => {
        "use strict";
        n.d(t, {
            isAndroid: () => h,
            isAnyMobile: () => y,
            isBlackBerry: () => p,
            isChrome: () => a,
            isEdge: () => l,
            isFF: () => c,
            isIOS: () => f,
            isIPad: () => w,
            isLinux: () => g,
            isMac: () => d,
            isOperaMini: () => m,
            isSafari: () => u,
            mobiletouch: () => i,
            touch: () => s
        });
        const r = "undefined" != typeof window && "undefined" != typeof navigator
          , o = r && "ontouchstart"in window
          , i = r && o && "onorientationchange"in window
          , s = r && (o || !!navigator.maxTouchPoints)
          , a = r && window.chrome && window.chrome.runtime
          , c = r && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
          , l = r && /\sEdge\/\d\d\b/.test(navigator.userAgent)
          , u = r && Boolean(navigator.vendor) && navigator.vendor.indexOf("Apple") > -1 && -1 === navigator.userAgent.indexOf("CriOS") && -1 === navigator.userAgent.indexOf("FxiOS")
          , d = r && /mac/i.test(navigator.platform)
          , g = (r && /Win32|Win64/i.test(navigator.platform),
        r && /Linux/i.test(navigator.platform))
          , h = r && /Android/i.test(navigator.userAgent)
          , p = r && /BlackBerry/i.test(navigator.userAgent)
          , f = r && /iPhone|iPad|iPod/.test(navigator.platform)
          , m = r && /Opera Mini/i.test(navigator.userAgent)
          , w = r && ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || /iPad/.test(navigator.platform))
          , y = h || p || f || m
    }
}]);
