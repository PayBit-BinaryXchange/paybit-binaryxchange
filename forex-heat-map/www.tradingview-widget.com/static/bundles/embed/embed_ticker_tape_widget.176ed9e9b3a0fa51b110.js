(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[90202], {
    828133: e => {
        e.exports = {
            "css-value-copyright-transition-params": ".6s 0s cubic-bezier(.4, .01, .22, 1)",
            "css-value-copyright-transition-params-half-time": ".3s 0s cubic-bezier(.4, .01, .22, 1)",
            label: "label-dzbd7lyV",
            logoWrap: "logoWrap-dzbd7lyV",
            expandedWithTransition: "expandedWithTransition-dzbd7lyV",
            expandedByClick: "expandedByClick-dzbd7lyV",
            start: "start-dzbd7lyV",
            end: "end-dzbd7lyV",
            snap: "snap-dzbd7lyV",
            top: "top-dzbd7lyV",
            bottom: "bottom-dzbd7lyV",
            large: "large-dzbd7lyV",
            expanded: "expanded-dzbd7lyV",
            label__link: "label__link-dzbd7lyV"
        }
    }
    ,
    476507: e => {
        e.exports = {
            "css-value-ticker-item-tape-padding": "16px",
            "css-value-ticker-item-tape-height-normal": "44px",
            "css-value-ticker-item-tape-height-compact": "72px",
            "css-value-ticker-item-tape-skeleton-width-normal": "346px",
            "css-value-ticker-item-tape-skeleton-width-compact": "125px"
        }
    }
    ,
    549781: e => {
        e.exports = {
            "css-value-ticker-item-tape-height-normal": "44px",
            "css-value-ticker-item-tape-height-compact": "72px",
            "css-value-ticker-item-tape-skeleton-width-normal": "346px",
            "css-value-ticker-item-tape-skeleton-width-compact": "125px",
            "css-value-ticker-item-tape-padding": "16px"
        }
    }
    ,
    62889: (e, t, s) => {
        "use strict";
        s.d(t, {
            CopyrightPosition: () => i,
            copyrightLabel: () => c
        });
        var i, n = s(444372), a = s(497754), o = s(536794), r = s(995683), l = s(828133);
        function c({svgText: e, icon: t, theme: c, url: d, mode: h, verticalPosition: p=i.Vertical.Bottom, horizontalPosition: m=i.Horizontal.End, snapToEdge: u=!0, isExpanded: g=!1, className: _}) {
            let v;
            switch (h) {
            case "new":
            case "with_border":
            case "large_trade":
                v = (0,
                o.clone)(c);
                break;
            default:
                v = (0,
                r.mergeThemes)((0,
                o.clone)(l), c)
            }
            const y = document.createElement("span");
            let b;
            d && (b = document.createElement("a"),
            b.classList.add(...v.label__link.split(/\s/)),
            b.href = d,
            b.target = "_blank",
            b.rel = "noopener noreferrer",
            b.setAttribute("data-target-type", "copyright"),
            b.ariaLabel = n.t(null, void 0, s(15572)),
            y.append(b)),
            y.className = a(v.label, m === i.Horizontal.Start && v.start, m === i.Horizontal.End && v.end, p === i.Vertical.Top && v.top, p === i.Vertical.Bottom && v.bottom, u && "large_trade" !== h && v.snap, "large_old" === h && v.large, (g || "large_trade" === h) && v.expanded, _, "js-copyright-label"),
            y.addEventListener("click", ( () => {
                function e() {
                    y.classList.remove(v.expandedByClick),
                    y.removeEventListener("mouseleave", e)
                }
                y.classList.contains(v.expandedWithTransition) || y.classList.contains(v.expanded) || (y.classList.contains(v.expandedByClick) ? d || e() : (y.classList.add(v.expandedByClick),
                y.addEventListener("mouseleave", e)))
            }
            ));
            const k = document.createElement("span");
            k.className = v.logoWrap,
            k.innerHTML = t;
            const w = document.createElement("span");
            return w.className = v.svgTextWrap,
            w.innerHTML = e,
            y.append(k, w),
            [y, v]
        }
        !function(e) {
            let t, s;
            !function(e) {
                e[e.Bottom = 0] = "Bottom",
                e[e.Top = 1] = "Top"
            }(t = e.Vertical || (e.Vertical = {})),
            function(e) {
                e[e.Start = 0] = "Start",
                e[e.End = 1] = "End"
            }(s = e.Horizontal || (e.Horizontal = {}))
        }(i || (i = {}))
    }
    ,
    351079: (e, t, s) => {
        "use strict";
        s.d(t, {
            CopyrightPosition: () => n.CopyrightPosition,
            createCopyrightLabel: () => o
        });
        var i = s(497754)
          , n = s(62889)
          , a = s(952598);
        function o({sheriffOptions: e, ...t}) {
            const [s,o] = (0,
            n.copyrightLabel)(t)
              , r = e && e.includes(a.KnownAction.Expand)
              , l = e && e.includes(a.KnownAction.LargeTradeLogo);
            return s.className = i(s.className, (r || l) && o.expandedWithTransition),
            s
        }
    }
    ,
    952598: (e, t, s) => {
        "use strict";
        var i;
        s.d(t, {
            KnownAction: () => i,
            widgetSheriffActions: () => n
        }),
        function(e) {
            e.Expand = "expand-logo",
            e.LargeTradeLogo = "large-trade-logo"
        }(i || (i = {}));
        const n = new Set([i.Expand, i.LargeTradeLogo])
    }
    ,
    76107: (e, t, s) => {
        "use strict";
        s.d(t, {
            getCSSProperty: () => r,
            getCSSPropertyNumericValue: () => l,
            getContentWidth: () => a,
            getScrollbarWidth: () => i,
            matchMediaMinMax: () => n,
            setStyle: () => o
        });
        const i = ( () => {
            let e;
            return () => {
                if (void 0 === e) {
                    const t = document.createElement("div")
                      , s = t.style;
                    s.visibility = "hidden",
                    s.width = "100px",
                    s.msOverflowStyle = "scrollbar",
                    document.body.appendChild(t);
                    const i = t.offsetWidth;
                    t.style.overflow = "scroll";
                    const n = document.createElement("div");
                    n.style.width = "100%",
                    t.appendChild(n);
                    const a = n.offsetWidth;
                    t.parentNode?.removeChild(t),
                    e = i - a
                }
                return e
            }
        }
        )();
        function n(e, t) {
            return t === 1 / 0 ? window.matchMedia(`(min-width: ${e}px)`) : window.matchMedia(`(min-width: ${e}px) and (max-width: ${t}px)`)
        }
        function a(e) {
            return l(e, "width") - l(e, "padding-left") - l(e, "padding-right")
        }
        function o(e, t, s) {
            null !== e && e.style.setProperty(t, s)
        }
        function r(e, t) {
            return getComputedStyle(e, null).getPropertyValue(t)
        }
        function l(e, t) {
            return parseInt(r(e, t))
        }
    }
    ,
    635397: e => {
        e.exports = {
            tickerTape: "tickerTape-N_kypjt9",
            noAutoScroll: "noAutoScroll-N_kypjt9",
            tape: "tape-N_kypjt9",
            head: "head-N_kypjt9",
            tail: "tail-N_kypjt9",
            skeleton: "skeleton-N_kypjt9"
        }
    }
    ,
    375106: (e, t, s) => {
        "use strict";
        s(256225),
        s(957259);
        var i = s(444372)
          , n = s(290484)
          , a = (s(549781),
        s(780237))
          , o = s(17966)
          , r = s(607546)
          , l = s(760863)
          , c = s(927301)
          , d = s(497754);
        class h extends a.TickerItemAbstract {
            constructor(e, t, s) {
                super(e, t, s),
                this._options = s || {}
            }
            setWidth(e) {
                this._el.style.setProperty("width", e + "px")
            }
            getWidth() {
                if (!document.body.contains(this._el))
                    throw new Error("Cannot get ticker item width, because the element is not attached to DOM");
                return this._el.getBoundingClientRect().width
            }
            resetWidth() {
                this._el.style.removeProperty("width")
            }
            toggleCompactMode(e) {
                this._el.classList.toggle(`${this._getClass()}--compact`, e)
            }
            toggleTransparency(e) {
                this._el.classList.toggle(`${this._getClass()}--transparent`, e)
            }
            setView(e, t, s) {
                this.setWidth(e),
                this.toggleCompactMode(t),
                this.toggleTransparency(s)
            }
            static getSkeletonElement(e, t) {
                const s = `<div class="${d("tv-ticker-item-tape", "tv-ticker-item-tape--skeleton", {
                    "tv-ticker-item-tape--compact": e,
                    "tv-ticker-item-tape--transparent": t
                })}"><div class="tv-ticker-item-tape__border-wrapper"><div class="tv-ticker-item-tape__inner-wrapper"><div class="tv-ticker-item-tape__short-name-wrapper"></div><div class="tv-ticker-item-tape__last-wrapper"></div><div class="tv-ticker-item-tape__change-wrapper"></div></div></div></div>`;
                return (0,
                l.parseHtmlElement)(s)
            }
            _getClass() {
                return "tv-ticker-item-tape"
            }
            _getView() {
                const e = {
                    borderWrapper: this._getElementClass("border-wrapper"),
                    innerWrapper: this._getElementClass("inner-wrapper"),
                    symbol: this._getElementClass("symbol"),
                    iconWrapper: this._getElementClass("icon-wrapper"),
                    shortNameWrapper: this._getElementClass("short-name-wrapper"),
                    shortName: this._getElementClass("short-name"),
                    lastWrapper: this._getElementClass("last-wrapper"),
                    last: this._getElementClass("last"),
                    changeWrapper: this._getElementClass("change-wrapper"),
                    changeAbs: this._getElementClass("change-abs"),
                    changePt: this._getElementClass("change-pt")
                }
                  , t = this._symbolData.title || this._symbolData.description
                  , s = this._options.showSymbolLogo;
                return `<div class="${e.borderWrapper}"><div class="${e.innerWrapper}"><div class=${e.symbol}><div class="${e.iconWrapper} js-header-icon">\n\t\t\t\t\t\t\t${s ? (0,
                o.getCircleLogoAnyHtml)({
                    logoUrls: [],
                    size: this._options.isCompactMode ? "xxxsmall" : "xsmall",
                    className: this._getElementClass("icon")
                }) : ""}\n\t\t\t\t\t\t</div><div class="${e.shortNameWrapper}"><span class="${d(e.shortName, !t && "js-symbol-short-name")}">${(0,
                c.htmlEscape)(t || "")}</span><span class="js-symbol-session-status"></span></div></div><div class="${e.lastWrapper}"><span class="${e.last} js-symbol-last"></span><span class="js-data-mode"></span></div><div class="${e.changeWrapper} js-symbol-change-direction"><span class="${e.changeAbs} js-symbol-change"></span>&nbsp<span class="${e.changePt} js-symbol-change-pt"></span></div></div></div>`
            }
            _getTickerOptions() {
                return {
                    dontDyePrice: !0,
                    signPositive: !0,
                    signNegative: !0,
                    changeInBrackets: !1,
                    changePercentInBrackets: !0,
                    changeDirectionUpClass: `${this._getElementClass("change-wrapper")}--up`,
                    changeDirectionDownClass: `${this._getElementClass("change-wrapper")}--down`,
                    lastGrowingClass: `${this._getElementClass("last")}--growing`,
                    lastFallingClass: `${this._getElementClass("last")}--falling`,
                    sessionStatusClassSuffix: "--for-ticker-tape",
                    dataModeClassSuffix: "--for-ticker-tape",
                    showInvalidSymbolStatus: !0,
                    indicatorsTooltipType: "browser",
                    setStateHook: this._options.showSymbolLogo ? (0,
                    r.getLogoUrlsHook)((e => {
                        const t = this._options.isCompactMode ? "xxxsmall" : "xsmall";
                        this._renderSymbolLogo(e, t)
                    }
                    )) : void 0
                }
            }
        }
        var p = s(685459)
          , m = s.n(p)
          , u = s(709903);
        const g = {
            desktop: 1 / 0,
            desktopHd: 1919,
            phone: 767,
            "phone-vertical": 479,
            tablet: 1019
        };
        var _ = s(76107);
        class v extends (m()) {
            constructor() {
                super(),
                this.width = 0,
                this.height = 0,
                this.device = null,
                this.breakpoints = g,
                this._checkDevice(),
                window.addEventListener("resize", this._checkDevice),
                Object.entries(g).sort(( ([e,t], [s,i]) => t - i)).forEach(( ([e,t], s, i) => {
                    let n;
                    if (0 !== s) {
                        const [,e] = i[s - 1];
                        n = e + 1
                    } else
                        n = 0;
                    const a = (0,
                    _.matchMediaMinMax)(n, t);
                    a.matches && this._setNewDevice(e),
                    a.addEventListener("change", (t => {
                        t.matches && (this._checkDevice(),
                        this._setNewDevice(e))
                    }
                    ))
                }
                )),
                (0,
                u.whenDocumentReady)(this._checkDevice.bind(this)),
                this.isPhoneSizeDevice.bind(this)
            }
            isPhoneSizeDevice() {
                return "phone" === this.device || "phone-vertical" === this.device
            }
            _checkDevice() {
                this.width = window.innerWidth,
                this.height = window.innerHeight
            }
            _setNewDevice(e) {
                const t = this.device;
                this.device = e,
                this.trigger("changeDevice", [e, t])
            }
        }
        const y = new v;
        var b, k, w, f = s(900608), E = s(969680);
        !function(e) {
            e.Adaptive = "adaptive",
            e.Regular = "regular",
            e.Compact = "compact"
        }(b || (b = {})),
        function(e) {
            e.AllSymbols = "all_symbols",
            e.Market = "market",
            e.Symbol = "symbol"
        }(k || (k = {})),
        function(e) {
            e.Cryptocurrencies = "crypto",
            e.Currencies = "forex",
            e.Stocks = "stock",
            e.Indices = "index",
            e.Futures = "futures",
            e.Bonds = "cfd"
        }(w || (w = {}));
        var C = s(820028)
          , T = s(547465);
        const L = g.phone;
        function S() {
            return window.innerWidth <= L
        }
        function x(e) {
            return e ? 72 : 44
        }
        class W extends Error {
            constructor() {
                super("CancelToken")
            }
        }
        var M = s(476507)
          , I = s(635397);
        const V = i.t(null, void 0, s(381166))
          , N = parseInt(M["css-value-ticker-item-tape-skeleton-width-normal"])
          , D = parseInt(M["css-value-ticker-item-tape-skeleton-width-compact"])
          , z = parseInt(M["css-value-ticker-item-tape-padding"]);
        function $(e) {
            const t = e.getElement();
            if (t.getElementsByClassName("js-exclamationed-symbol").length)
                return;
            const s = document.createElement("span");
            s.classList.add("tv-ticker-item-tape__symbol-exclamation-mark", "js-exclamationed-symbol"),
            s.setAttribute("title", V);
            const i = t.getElementsByClassName("tv-ticker-item-tape__short-name-wrapper").item(0);
            i && i.appendChild(s)
        }
        function A(e) {
            const t = new Promise((t => {
                const s = () => t(!0);
                e.onInit.subscribe(null, (e => {
                    var t;
                    e ? s() : (t = 2e3,
                    new Promise((e => {
                        setTimeout(e, t)
                    }
                    ))).then(s)
                }
                ), !0)
            }
            ))
              , s = new Promise((t => {
                e.onError.subscribe(null, ( () => {
                    $(e),
                    t(!1)
                }
                ), !0)
            }
            ));
            return Promise.race([t, s])
        }
        var P, B, j = s(901107), R = s(283834), F = s(35946), H = s(762553), O = s(903972), K = s(331633);
        function U(e, t, s) {
            const i = {
                name: e,
                frameElementId: t,
                data: s
            };
            window.parent.postMessage(i, "*")
        }
        !function(e) {
            let t;
            !function(e) {
                e.SetSymbol = "set-symbol",
                e.SetInterval = "set-interval"
            }(t = e.Names || (e.Names = {}))
        }(P || (P = {})),
        function(e) {
            let t;
            !function(e) {
                e.SymbolClick = "tv-widget-symbol-click",
                e.WidgetLoad = "tv-widget-load",
                e.WidgetReady = "tv-widget-ready",
                e.ResizeIframe = "tv-widget-resize-iframe",
                e.NoData = "tv-widget-no-data"
            }(t = e.Names || (e.Names = {}))
        }(B || (B = {}));
        const X = window.initData.hashSettings || {}
          , q = "string" == typeof X.frameElementId ? X.frameElementId : null;
        var G = s(351079)
          , J = s(631013);
        const Q = (0,
        H.extractWidgetSettingsFromInitData)()
          , Y = (0,
        R.filterUtmInfo)(Q);
        let Z = Q.symbols;
        Array.isArray(Z) && Z.every(O.validateSymbolData) || (console.error("Invalid symbols data, fall back to defaults"),
        Z = window.initData.defaultSettings.symbols);
        const ee = Q.noLinks;
        Q.noLinks || Z.forEach((function(e) {
            const t = e.proName || e.shortName;
            e.linkPage = (0,
            F.makeWidgetSymbolLink)({
                symbol: t,
                customUrl: Q.largeChartUrl,
                utmInfo: Y
            })
        }
        ));
        const te = Q.isTransparent
          , se = Q.showSymbolLogo
          , ie = Q.displayMode
          , ne = Q.colorTheme;
        ne && (0,
        K.setTheme)(ne);
        try {
            (0,
            J.trackWidgetLoadMetaInfo)({
                widget_id: "ticker-tape",
                symbols: JSON.stringify(Q.symbols.map((e => e.proName || ""))),
                customer: Q.customer
            })
        } catch {}
        const ae = document.querySelector("#widget-ticker-tape-container");
        (0,
        j.createEmbedWidgetWrapper)(ae, "ticker-tape", Y, {
            isWhiteLabel: Q.whitelabel,
            locale: Q.locale,
            copyrightOptions: {
                verticalPosition: G.CopyrightPosition.Vertical.Top,
                mode: "small_old"
            }
        });
        const oe = new class {
            constructor(e) {
                this.height = new C.WatchedValue(0),
                this.onAllTickersFaulty = new T.Delegate,
                this._styleElement = document.createElement("style"),
                this._containerElement = document.createElement("div"),
                this._tapeElement = document.createElement("div"),
                this._headElement = document.createElement("div"),
                this._tailElement = document.createElement("div"),
                this._headTickerItems = [],
                this._tailTickerItems = [],
                this._tickerItemWidths = [],
                this._isCompactMode = new C.WatchedValue,
                this._turnKeyboardFocusOn = e => {
                    e.target.matches(":focus-visible") && (this._containerElement.classList.add(I.noAutoScroll),
                    this._containerElement.removeEventListener("focusin", this._turnKeyboardFocusOn),
                    this._containerElement.addEventListener("focusout", this._turnKeyboardFocusOff))
                }
                ,
                this._turnKeyboardFocusOff = e => {
                    const t = e.relatedTarget;
                    null !== t && this._containerElement.contains(t) || (this._containerElement.scrollLeft = 0,
                    this._containerElement.classList.remove(I.noAutoScroll),
                    this._containerElement.removeEventListener("focusout", this._turnKeyboardFocusOff),
                    this._containerElement.addEventListener("focusin", this._turnKeyboardFocusOn))
                }
                ,
                this._cancelDebouncedResize = () => {}
                ,
                this._onCompactModeChanged = () => {
                    this._updateTickerViewsAndStyles()
                }
                ,
                this._onVisibilityStateChanged = () => {
                    "visible" === document.visibilityState && this._updateTickerViewsAndStyles()
                }
                ,
                this._updateTickerViewsAndStyles = () => {
                    this._updateTickerViews(),
                    this._updateStyles()
                }
                ,
                this._onDeviceChanged = () => {
                    this._isCompactMode.setValue(S())
                }
                ,
                this._ensureSufficientTailWidth = () => {
                    if (0 === this._symbols.length)
                        return;
                    const e = this._containerElement.getBoundingClientRect().width
                      , t = this._tailElement.getBoundingClientRect().width
                      , s = this._headTickerItems.length;
                    let i = e - t;
                    for (let e = this._tailTickerItems.length % s; i > 0; e = ++e % s) {
                        const t = this._tickerItemWidths[e];
                        i -= t;
                        const s = this._createTickerItemTape(this._symbols[e]);
                        this._tailTickerItems.push(s),
                        this._tailElement.appendChild(s.getElement()),
                        s.setView(t, this._isCompactMode.value(), this._isTransparent)
                    }
                }
                ,
                this._updateHeightValue = e => {
                    this.height.setValue(x(e))
                }
                ,
                this._symbols = e.symbols,
                this._speed = e.speed,
                this._isTransparent = !!e.isTransparent,
                this._displayMode = e.displayMode,
                this._isEmbedWidget = !!e.isEmbedWidget,
                this._showSymbolLogo = !!e.showSymbolLogo,
                this._noLinks = !!e.noLinks,
                this._isCompactMode.setValue(this._displayMode === b.Adaptive ? S() : this._displayMode === b.Compact),
                this._isCompactMode.subscribe(this._updateHeightValue, {
                    callWithLast: !0
                }),
                e.container.appendChild(this._containerElement),
                this._containerElement.classList.add(I.tickerTape),
                this._containerElement.classList.toggle(I.noAutoScroll, !this._speed),
                this._speed && this._containerElement.addEventListener("focusin", this._turnKeyboardFocusOn),
                this._tapeElement.classList.add(I.tape),
                this._headElement.classList.add(I.head),
                this._tailElement.classList.add(I.tail);
                const t = function(e, t, s) {
                    const i = t ? D : N
                      , n = document.createElement("div");
                    n.classList.add(I.skeleton);
                    const a = Math.ceil(e / i);
                    for (let e = 0; e < a; e++)
                        n.appendChild(h.getSkeletonElement(t, s));
                    return n
                }(this._containerElement.getBoundingClientRect().width, this._isCompactMode.value(), this._isTransparent);
                this._tapeElement.appendChild(t);
                const s = [];
                for (const e of this._symbols) {
                    const t = this._createTickerItemTape(e);
                    t.toggleTransparency(this._isTransparent),
                    this._headTickerItems.push(t),
                    this._headElement.appendChild(t.getElement()),
                    s.push(A(t))
                }
                this._containerElement.appendChild(this._styleElement),
                this._containerElement.appendChild(this._tapeElement),
                this._waitForTickersCancelable = function(e) {
                    let t = !1;
                    return {
                        promise: new Promise(( (s, i) => {
                            e.then((e => t ? i(new W) : s(e))),
                            e.catch((e => i(t ? new W : e)))
                        }
                        )),
                        cancel() {
                            t = !0
                        }
                    }
                }(Promise.all(s)),
                this._waitForTickersCancelable.promise.then((e => {
                    e.every((e => !e)) && this.onAllTickersFaulty.fire(),
                    this._tapeElement.removeChild(t),
                    this._tapeElement.appendChild(this._headElement),
                    this._tapeElement.appendChild(this._tailElement),
                    this._init()
                }
                ), (e => {
                    if (!(e instanceof W))
                        throw e
                }
                ))
            }
            destroy() {
                this._containerElement.remove(),
                this._waitForTickersCancelable.cancel(),
                y.off("changeDevice", this._onDeviceChanged),
                this._cancelDebouncedResize(),
                document.removeEventListener("visibilitychange", this._onVisibilityStateChanged),
                this._headTickerItems.forEach((e => {
                    e.stop()
                }
                )),
                this._tailTickerItems.forEach((e => {
                    e.stop()
                }
                ))
            }
            _createTickerItemTape(e) {
                const t = document.createElement(this._noLinks ? "span" : "a");
                return new h(e,t,{
                    isEmbedWidget: this._isEmbedWidget,
                    showSymbolLogo: this._showSymbolLogo,
                    isCompactMode: this._isCompactMode.value()
                })
            }
            _init() {
                this._isCompactMode.subscribe(this._onCompactModeChanged, {
                    callWithLast: !0
                }),
                this._ensureSufficientTailWidth(),
                this._displayMode === b.Adaptive && y.on("changeDevice", this._onDeviceChanged),
                this._cancelDebouncedResize = function(e) {
                    const t = (0,
                    n.default)(e, 300);
                    return window.addEventListener("resize", t),
                    () => {
                        t.cancel(),
                        window.removeEventListener("resize", t)
                    }
                }(this._ensureSufficientTailWidth),
                document.addEventListener("visibilitychange", this._onVisibilityStateChanged);
                const e = (0,
                n.default)(this._updateTickerViewsAndStyles.bind(this), 0);
                this._tailTickerItems.forEach((t => {
                    t.onInit.subscribe(null, e, !0),
                    t.onComplete.subscribe(null, e, !0),
                    t.onError.subscribe(null, ( () => $(t)), !0)
                }
                ))
            }
            _updateTickerViews() {
                const e = this._headTickerItems.length;
                this._headTickerItems.forEach(( (e, t) => {
                    e.resetWidth(),
                    e.toggleCompactMode(this._isCompactMode.value());
                    const s = e.getWidth() + z;
                    e.setWidth(s),
                    this._tickerItemWidths[t] = s
                }
                )),
                this._tailTickerItems.forEach(( (t, s) => {
                    t.toggleCompactMode(this._isCompactMode.value()),
                    t.setWidth(this._tickerItemWidths[s % e])
                }
                ))
            }
            _updateStyles() {
                const e = this._styleElement.sheet;
                if (!e || !this._speed)
                    return;
                const t = this._headElement.getBoundingClientRect().width
                  , s = "ticker-tape-scroll" + "--" + (0,
                f.randomHashN)(4);
                for (; e.cssRules.length > 0; )
                    e.deleteRule(0);
                const i = [`@keyframes ${s} {\n\t\t\t\tfrom { transform: translateX(0); }\n\t\t\t\tto { transform: translateX(${(0,
                E.isRtl)() ? "" : "-"}${t}px); }\n\t\t\t}`, `.${I.tape} {\n\t\t\t\tanimation-duration: ${t / this._speed}s;\n\t\t\t\tanimation-name: ${s};\n\t\t\t}`];
                for (let t = 0; t < i.length; t++)
                    e.insertRule(i[t], t)
            }
        }
        ({
            container: ae,
            symbols: Z,
            isTransparent: te,
            showSymbolLogo: se,
            displayMode: ie,
            noLinks: ee,
            speed: 40,
            isEmbedWidget: !0
        });
        oe.height.subscribe((function(e) {
            te || (e += 2);
            U(B.Names.ResizeIframe, null, {
                height: e
            })
        }
        ), {
            callWithLast: !0
        }),
        oe.onAllTickersFaulty.subscribe(null, ( () => {
            U(B.Names.NoData, q, void 0)
        }
        ), !0)
    }
}, e => {
    e.O(0, [56316, 37132, 83439, 38752, 98681, 80259, 3579, 55822, 44883, 94562, 75538, 70077, 45953, 61997, 45902, 88043, 88505, 42041, 55519, 2058, 28762, 53485], ( () => {
        return t = 375106,
        e(e.s = t);
        var t
    }
    ));
    e.O()
}
]);
