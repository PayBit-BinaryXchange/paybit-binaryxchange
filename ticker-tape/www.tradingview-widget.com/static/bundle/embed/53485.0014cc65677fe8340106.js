"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[53485, 34052], {
    673747: (e, t, o) => {
        o.d(t, {
            hide: () => y,
            showOnElement: () => h
        });
        var n = o(778785)
          , i = o(650151)
          , r = o(799786)
          , s = o(112539)
          , l = o(630112)
          , c = o(471802);
        let a = !1
          , u = null
          , d = null;
        n.mobiletouch || (document.addEventListener("mouseover", f, !0),
        document.addEventListener("focus", (function(e) {
            const t = e.target;
            if (!(t instanceof HTMLElement && t.closest('[data-tooltip-show-on-focus="true"]') && t.matches(":focus-visible")))
                return;
            f(e, !0)
        }
        ), {
            capture: !0
        }),
        document.addEventListener("active-descendant-focus", (function(e) {
            e.target instanceof HTMLElement && f(e, !0)
        }
        ), {
            capture: !0
        }));
        const m = new MutationObserver(( () => {
            if (u && u.options.target) {
                let e;
                e = "isConnected"in u.options.target ? u.options.target.isConnected : document.body.contains(u.options.target),
                e || y()
            }
        }
        ))
          , h = (e, t={}) => {
            const {content: o, ...n} = b(t)
              , i = c.getDataFromTarget(e)
              , r = Object.assign(i, n);
            return "none" !== o.type && (r.content = o),
            !("none" === r.content.type && !r.hotkey) && (r.target = e,
            p(r),
            !0)
        }
          , p = e => {
            const t = b(e)
              , o = c.getTooltip(t);
            if (u = {
                options: t,
                element: o
            },
            (0,
            l.setTooltip)(o),
            (0,
            s.clearSchedule)(),
            !a)
                return c.hideTooltip(o),
                void (0,
                s.scheduleRender)(( () => v(o)), function(e) {
                    return "number" != typeof e.tooltipDelay || isNaN(e.tooltipDelay) ? 500 : e.tooltipDelay
                }(t));
            const {tooltipDebounce: n} = e;
            "number" != typeof n || isNaN(n) ? v(o) : (0,
            s.scheduleRender)(( () => v(o)), n)
        }
        ;
        function f(e, t) {
            if ("sourceCapabilities"in e && e.sourceCapabilities?.firesTouchEvents)
                return;
            const o = function(e, t, o) {
                const n = [];
                for (; e && e !== t; )
                    e.classList && e.classList.contains(o) && n.push(e),
                    e = e.parentElement || _(e.parentNode);
                return n
            }(e.target, e.currentTarget, "apply-common-tooltip");
            for (const n of o) {
                if (e instanceof MouseEvent)
                    if ("buttons"in e) {
                        if (1 & e.buttons)
                            continue
                    } else if (1 === e.which)
                        continue;
                const o = () => h(n);
                if (o()) {
                    const e = e => i(null, !0)
                      , i = (r, s=!1) => {
                        n.removeEventListener("common-tooltip-update", o),
                        n.removeEventListener("mouseleave", i),
                        n.removeEventListener("mousedown", i),
                        document.removeEventListener("scroll", e, {
                            capture: !0
                        }),
                        t && (n.removeEventListener("blur", i),
                        n.removeEventListener("active-descendant-blur", i)),
                        d && (d.destroy(),
                        d = null),
                        y(s)
                    }
                    ;
                    n.addEventListener("common-tooltip-update", o),
                    n.addEventListener("mouseleave", i),
                    n.addEventListener("mousedown", i),
                    document.addEventListener("scroll", e, {
                        capture: !0
                    }),
                    t && (n.addEventListener("blur", i),
                    n.addEventListener("active-descendant-blur", i)),
                    null === d && (d = (0,
                    r.createGroup)({
                        desc: "Tooltip"
                    }),
                    d.add({
                        desc: "Hide",
                        hotkey: 27,
                        handler: i
                    }));
                    break
                }
            }
        }
        function g() {
            (0,
            l.empty)(),
            a = !1,
            u = null
        }
        const y = (e, t) => {
            if ((0,
            s.clearSchedule)(),
            (0,
            i.ensureNotNull)(m).disconnect(),
            !u)
                return;
            if (!e && !a)
                return;
            const {element: o, options: n} = u
              , r = () => {
                o.removeEventListener("mouseleave", r),
                c.hideTooltip(o),
                e ? g() : (0,
                s.scheduleRemove)(( () => {
                    g()
                }
                ), 250),
                t?.()
            }
            ;
            n.tooltipHideDelay ? (0,
            s.scheduleHide)(( () => {
                o.querySelector(":hover") ? o.addEventListener("mouseleave", r) : r()
            }
            ), n.tooltipHideDelay) : r()
        }
        ;
        function v(e) {
            const {options: t} = (0,
            i.ensureNotNull)(u);
            if (c.setStyle(e, t),
            c.showTooltip(e),
            (0,
            i.ensureNotNull)(m).observe(document, {
                childList: !0,
                subtree: !0
            }),
            a = !0,
            t.forceHideOnMove) {
                const e = () => {
                    document.removeEventListener("mousemove", e),
                    document.removeEventListener("touchmove", e),
                    y()
                }
                ;
                document.addEventListener("mousemove", e),
                document.addEventListener("touchmove", e)
            }
        }
        function _(e) {
            return e && (e.nodeType === Node.ELEMENT_NODE ? e : null)
        }
        function b(e) {
            if (function(e) {
                return "content"in e
            }(e))
                return e;
            const {inner: t, html: o, text: n, ...i} = e;
            let r = {
                type: "none"
            };
            return t && (r = {
                type: "element",
                data: t
            }),
            n && (r = {
                type: o ? "html" : "text",
                data: n
            }),
            {
                content: r,
                ...i
            }
        }
    }
    ,
    750532: (e, t, o) => {
        var n = o(673747);
        function i(e, t="x") {
            let o = !1;
            return "x" !== t && "both" !== t || (o = o || e.offsetWidth < e.scrollWidth),
            "y" !== t && "both" !== t || (o = o || e.offsetHeight < e.scrollHeight),
            o
        }
        function r(e, t="x") {
            for (const o of Array.from(e.children))
                if (o instanceof HTMLElement && (i(o, t) || r(o, t)))
                    return !0;
            return !1
        }
        function s(e) {
            let t = "x";
            return e.matches(".apply-overflow-tooltip--direction_both") ? t = "both" : e.matches(".apply-overflow-tooltip--direction_y") && (t = "y"),
            t
        }
        function l(e) {
            const t = e.getAttribute("data-overflow-tooltip-html");
            if (t)
                return {
                    type: "html",
                    data: t
                };
            const o = e.getAttribute("data-overflow-tooltip-text");
            if (o)
                return {
                    type: "text",
                    data: o
                };
            if (e.matches?.(".apply-overflow-tooltip--allow-text")) {
                return {
                    type: "text",
                    data: e.textContent || ""
                }
            }
            const n = Array.from(e.childNodes).reduce(( (e, t) => (t.nodeType === Node.TEXT_NODE && e.push(t.textContent || ""),
            e)), []).join("").trim();
            return n ? {
                type: "text",
                data: n
            } : {
                type: "none"
            }
        }
        function c(e, t) {
            let o = !1;
            const n = e.children;
            for (let e = 0; e < n.length; e++) {
                const r = n[e];
                if (r instanceof HTMLElement && i(r, t)) {
                    o = !0;
                    break
                }
            }
            return o
        }
        function a(e) {
            const t = e.target;
            if (t instanceof HTMLElement && (t.matches(".apply-overflow-tooltip-focus") || t.querySelector(".apply-overflow-tooltip-focus"))) {
                const e = t.matches(".apply-overflow-tooltip") ? t : t.querySelector(".apply-overflow-tooltip")
                  , o = s(e);
                if (e.matches(".apply-overflow-tooltip--check-children-recursively")) {
                    if (!r(e, o))
                        return
                } else if (e.matches(".apply-overflow-tooltip--check-children")) {
                    if (!c(e, o))
                        return
                } else if (!i(e, o))
                    return;
                (0,
                n.showOnElement)(t, {
                    content: l(e)
                });
                const a = () => {
                    (0,
                    n.hide)(),
                    t.removeEventListener("blur", a),
                    t.removeEventListener("active-descendant-blur", a)
                }
                ;
                t.addEventListener("blur", a),
                t.addEventListener("active-descendant-blur", a)
            }
        }
        (0,
        o(709903).whenDocumentReady)(( () => {
            document.addEventListener("mouseenter", (e => {
                const t = e.target;
                if (t instanceof HTMLElement && t.matches(".apply-overflow-tooltip")) {
                    const e = s(t);
                    if (t.matches(".apply-overflow-tooltip--check-children-recursively")) {
                        if (!r(t, e))
                            return
                    } else if (t.matches(".apply-overflow-tooltip--check-children")) {
                        if (!c(t, e))
                            return
                    } else if (!i(t, e))
                        return;
                    (0,
                    n.showOnElement)(t, {
                        content: l(t)
                    });
                    const o = () => {
                        (0,
                        n.hide)(),
                        ["mouseleave", "mousedown"].forEach((e => t.removeEventListener(e, o)))
                    }
                    ;
                    ["mouseleave", "mousedown"].forEach((e => t.addEventListener(e, o)))
                }
            }
            ), !0),
            document.addEventListener("focus", a, !0),
            document.addEventListener("active-descendant-focus", a, !0)
        }
        ))
    }
    ,
    780237: (e, t, o) => {
        o.d(t, {
            TickerItemAbstract: () => u
        });
        o(750532);
        var n = o(735566)
          , i = o(190209)
          , r = o(903972)
          , s = o(547465)
          , l = o(969680)
          , c = o(17966);
        const a = (0,
        n.getLogger)("WidgetTicker");
        class u {
            constructor(e, t, o) {
                this.onInit = new s.Delegate,
                this.onComplete = new s.Delegate,
                this.onError = new s.Delegate,
                this._quoteTickerComplete = null,
                this._isRunning = !1,
                this._prevQuoteSymbol = null,
                this._el = t || document.createElement("a"),
                this._symbolData = e,
                this._options = o || {},
                (0,
                r.validateSymbolData)(e) ? (this.render(),
                this.start()) : a.logError("symbolData is not valid")
            }
            render() {
                this._el.classList.add(this._getClass()),
                this._el.innerHTML = this._getView(),
                this._setTitle(),
                this._setLink()
            }
            start() {
                this._isRunning || (this._startQuoteTicker(),
                this._isRunning = !0)
            }
            stop() {
                this._isRunning && (this._stopQuoteTicker(),
                this._isRunning = !1)
            }
            getElement() {
                return this._el
            }
            changeSymbol(e) {
                const t = e.includes(":") ? {
                    proName: e
                } : {
                    shortName: e
                };
                this._prevQuoteSymbol = this._getSymbolName(),
                this._symbolData = t,
                this._setTitle(),
                this._setLink(),
                this.stop(),
                this.start()
            }
            quoteTicker() {
                return this._quoteTicker
            }
            displayPlaceholderLetter() {
                this._renderSymbolLogo([], "xxxsmall")
            }
            _getElementClass(e) {
                return this._getClass() + "__" + e
            }
            _getSymbolName() {
                return this._symbolData.proName || this._symbolData.shortName
            }
            _renderSymbolLogo(e, t) {
                const o = this._el.querySelector(".js-header-icon")
                  , n = 0 === e.length ? this._getPlaceholderLetter() : void 0;
                o && this._setSymbolLogoHtml(o, e, t, n)
            }
            _getPlaceholderLetter() {
                const e = this._symbolData.proName
                  , t = e && e.split(":")[1];
                return (this._symbolData.title || this._symbolData.description || t || "" || " ")[0]
            }
            _setSymbolLogoHtml(e, t, o, n) {
                if (t.length > 0 || void 0 !== n) {
                    const i = (0,
                    c.getCircleLogoAnyHtml)({
                        logoUrls: t,
                        size: o,
                        className: this._getElementClass("icon"),
                        placeholderLetter: n
                    });
                    e.innerHTML = i
                } else
                    e.innerHTML = ""
            }
            _setTitle() {
                const e = this._getElTitle();
                if (!e)
                    return;
                const t = this._symbolData.title || this._symbolData.description || "" || this._symbolData.shortName || this._symbolData.proName || ""
                  , o = (0,
                l.detectAutoDirection)(t);
                o && (e.dir = o),
                e.textContent = t
            }
            _setLink() {
                if (!(this._el instanceof HTMLAnchorElement))
                    return;
                const e = this._symbolData.linkPage;
                e && (this._el.href = e),
                this._options.isEmbedWidget && (this._el.target = "_blank",
                this._el.rel = "external noopener")
            }
            _startQuoteTicker() {
                if (!this._quoteTicker)
                    return void this._createQuoteTicker();
                const e = this._getSymbolName();
                this._prevQuoteSymbol !== e ? (this._destroyQuoteTicker(),
                this._createQuoteTicker()) : this._quoteTicker.enable()
            }
            _stopQuoteTicker() {
                this._quoteTicker && (this._quoteTicker.disable(),
                this._quoteTickerComplete = null)
            }
            _createQuoteTicker() {
                const e = this._getSymbolName()
                  , t = this._getTickerOptions()
                  , o = t.initedHook
                  , n = t.setStateHook;
                this._quoteTickerComplete = null,
                this._quoteTicker = new i.QuoteTicker(e,this._el,{
                    noSuchSymbolHook: () => this.onError.fire("no_symbol"),
                    permissionDeniedHook: () => this.onError.fire("permission_denied"),
                    ...t,
                    initedHook: (...e) => {
                        o?.(...e),
                        this.onInit.fire(...e)
                    }
                    ,
                    setStateHook: (e, t, o) => {
                        n?.(e, t, o),
                        o && null === this._quoteTickerComplete && (this._quoteTickerComplete = o,
                        this.onComplete.fire())
                    }
                })
            }
            _destroyQuoteTicker() {
                this._stopQuoteTicker(),
                delete this._quoteTicker
            }
            _getElTitle() {
                return this._el.querySelector(`.${this._getElementClass("title")}`)
            }
        }
    }
    ,
    903972: (e, t, o) => {
        function n(e) {
            return Boolean(e) && ("string" == typeof e.proName || "string" == typeof e.shortName)
        }
        o.d(t, {
            validateSymbolData: () => n
        })
    }
    ,
    626333: (e, t, o) => {
        function n(e, t=window) {
            const o = "theme-" + e
              , n = t.document.documentElement.classList;
            for (const e of Array.from(n))
                e.startsWith("theme-") && e !== o && n.remove(e);
            n.add(o),
            t.document.documentElement.dataset.theme = e
        }
        o.d(t, {
            applyTheme: () => n
        })
    }
    ,
    331633: (e, t, o) => {
        o.d(t, {
            setTheme: () => s
        });
        var n = o(820028)
          , i = o(626333);
        const r = new n.WatchedValue;
        function s(e) {
            r.setValue(e)
        }
        r.subscribe((e => {
            (0,
            i.applyTheme)(e, window)
        }
        ))
    }
    ,
    889267: (e, t, o) => {
        o.d(t, {
            isSpread: () => u,
            tokenize: () => c
        });
        var n = o(173777)
          , i = o(125226);
        const r = /(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF])(?:[^-+\/*^\s]'|[a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&])*|'.+?'/
          , s = (e=(0,
        i.isFeatureEnabled)("allow_trailing_whitespace_in_number_token")) => ({
            number: e ? /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))(?:\s*(?=\s*$))?|\.\d+(?:\s*(?=\s*$))?/ : /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
            incompleteNumber: /\./,
            symbol: r,
            incompleteSymbol: /'[^']*/,
            separatorPrefix: n.SEPARATOR_PREFIX,
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
          , l = (e=s()) => new RegExp(Object.values(e).map((e => {
            return null === e ? "" : `(${"string" == typeof e ? (t = e,
            t.replace(/[\^$()[\]{}*+?|\\]/g, "\\$&")) : e.source})`;
            var t
        }
        )).filter((e => "" !== e)).concat(".").join("|"),"g");
        function c(e, t=s()) {
            if (!e)
                return [];
            const o = []
              , n = Object.keys(t);
            let i;
            const r = l(t);
            for (; i = r.exec(e); ) {
                let e = !1;
                for (let t = n.length; t--; )
                    if (i[t + 1]) {
                        n[t] && o.push({
                            value: i[t + 1],
                            type: n[t],
                            precedence: 0,
                            offset: i.index
                        }),
                        e = !0;
                        break
                    }
                e || o.push({
                    value: i[0],
                    type: "unparsed",
                    precedence: 0,
                    offset: i.index
                })
            }
            return o
        }
        function a(e) {
            return "plus" === e || "minus" === e || "multiply" === e || "divide" === e || "power" === e
        }
        function u(e) {
            return e.length > 1 && e.some((e => a(e.type)))
        }
    }
    ,
    607546: (e, t, o) => {
        o.d(t, {
            getLogoUrlsHook: () => n.getLogoUrlsHook
        });
        var n = o(526639)
    }
    ,
    526639: (e, t, o) => {
        o.d(t, {
            getLogoUrlsHook: () => r
        });
        var n = o(849204);
        const i = (0,
        n.getLogoUrlResolver)();
        function r(e, t) {
            let o = !1;
            return (r, l, c) => {
                const a = r["currency-logoid"] && r["base-currency-logoid"];
                if (!o && (r.logoid || a || c)) {
                    o = !0;
                    const l = function(e) {
                        if (2 !== e.length)
                            return e;
                        if (function(e) {
                            return e.some((e => s(e)))
                        }(e) && !function(e) {
                            return e.some((e => e.includes("country") && !s(e)))
                        }(e))
                            return e.filter((e => !s(e)));
                        return e
                    }(function(e, t=n.LogoSize.Medium) {
                        const o = e.logoid
                          , r = e["base-currency-logoid"]
                          , s = e["currency-logoid"]
                          , l = o && i.getSymbolLogoUrl(o, t);
                        if (l)
                            return [l];
                        const c = r && i.getSymbolLogoUrl(r, t)
                          , a = s && i.getSymbolLogoUrl(s, t);
                        return c && a ? [c, a] : c ? [c] : a ? [a] : []
                    }({
                        logoid: r.logoid,
                        "base-currency-logoid": r["base-currency-logoid"],
                        "currency-logoid": r["currency-logoid"]
                    }, t));
                    e(l)
                }
            }
        }
        function s(e) {
            return e.includes("country/US")
        }
    }
    ,
    969680: (e, t, o) => {
        o.d(t, {
            detectAutoDirection: () => d,
            forceLTRStr: () => c,
            isRtl: () => n,
            stripLTRMarks: () => l
        });
        o(64531);
        const n = () => "rtl" === window.document.dir
          , i = "‪"
          , r = "‬"
          , s = new RegExp("‎|" + i + "|‫|" + r,"g");
        function l(e) {
            return "" !== e && n() && null != e ? e.replace(s, "") : e
        }
        function c(e) {
            return "" !== e && n() && null != e ? i + e + r : e
        }
        const a = /[^\u0000-\u0040\u005B-\u0060\u007B-\u00BF\u00D7\u00F7\u02B9-\u02FF\u2000-\u200E\u2010-\u2029\u202C\u202F-\u2BFF]/
          , u = /[\u0590-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/;
        function d(e) {
            const t = a.exec(e);
            return t ? u.test(t[0]) ? "rtl" : "ltr" : ""
        }
    }
    ,
    158832: (e, t, o) => {
        function n(e) {
            return e.replace("{{shortName}}", "{tvsymbol}").replace("{{proName}}", "{tvprosymbol}").replace("{{symbol}}", "{tvsymbol}").replace("{{exchange}}", "{tvexchange}")
        }
        o.d(t, {
            replaceOldPlaceholders: () => n
        })
    }
    ,
    437861: (e, t, o) => {
        o.d(t, {
            handleTVLinksClick: () => s
        });
        var n = o(439563)
          , i = o(283834)
          , r = o(974629);
        function s() {
            document.addEventListener("click", (e => {
                const t = e.target.closest(":link");
                if (!t?.hostname || !(0,
                r.isInternalHost)(t.hostname, "tradingview.com"))
                    return;
                const o = t.dataset.targetType || null;
                !function(e, t) {
                    const o = function() {
                        const e = window.initData.hashSettings;
                        if (Object.keys(e).length > 0)
                            return (0,
                            i.filterUtmInfo)(e);
                        const t = new URLSearchParams(location.href);
                        return {
                            utm_campaign: t.get("utm_campaign") || void 0,
                            utm_source: t.get("utm_source") || void 0
                        }
                    }()
                      , r = function(e) {
                        const t = location.ancestorOrigins?.[0] || document.referrer;
                        return e.utm_source || function(e) {
                            try {
                                return new URL(e).host
                            } catch (e) {
                                return ""
                            }
                        }(t)
                    }(o)
                      , s = {
                        widget_type: l(o),
                        domain: r,
                        link: e,
                        target_type: t
                    };
                    !async function(e) {
                        (await (0,
                        n.getEmbedWidgetTracker)())?.trackWidgetTVLinkClick(e)
                    }(s)
                }(t.href, o)
            }
            ))
        }
        function l(e) {
            if (e.utm_campaign)
                return e.utm_campaign;
            const t = location.pathname;
            return t.includes("embed-widget") ? t.split("/")[2] : t
        }
    }
    ,
    762553: (e, t, o) => {
        o.d(t, {
            extractWidgetSettingsFromInitData: () => n
        });
        function n() {
            const e = window;
            return {
                ...e.initData.widgetDefaults,
                ...e.initData.hashSettings,
                ...e.initData.querySettings
            }
        }
    }
    ,
    35946: (e, t, o) => {
        o.d(t, {
            makeWidgetSymbolLink: () => s
        });
        var n = o(158832)
          , i = o(23203)
          , r = o(889267);
        function s(e) {
            const {customUrl: t, utmInfo: o, path: s, typespecs: l} = e;
            let c, a, u = e.symbol;
            const d = (0,
            r.tokenize)(u);
            return (0,
            r.isSpread)(d) && (u = d.find((e => "symbol" === e.type))?.value || u),
            u.includes(":") ? [a,c] = u.split(":") : c = u,
            t ? (0,
            i.makeTemplateSymbolUrl)((0,
            n.replaceOldPlaceholders)(t), {
                proName: u
            }) : (0,
            i.makeSymbolPageUrl)({
                shortName: c,
                exchange: a,
                typespecs: l
            }, o, void 0, s)
        }
    }
}]);
