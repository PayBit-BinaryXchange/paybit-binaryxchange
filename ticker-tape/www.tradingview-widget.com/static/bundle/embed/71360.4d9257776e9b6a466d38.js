(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[71360, 15483, 73105], {
    429341: t => {
        t.exports = {}
    }
    ,
    105332: t => {
        t.exports = {}
    }
    ,
    591800: (t, e, s) => {
        "use strict";
        s.d(e, {
            Modifiers: () => n,
            hashFromEvent: () => r,
            humanReadableHash: () => h,
            isMacKeyboard: () => o,
            modifiersFromEvent: () => a
        });
        var i = s(23482);
        const o = i.isMac || i.isIOS;
        var n;
        function a(t) {
            let e = 0;
            return t.shiftKey && (e += 1024),
            t.altKey && (e += 512),
            t.ctrlKey && (e += 256),
            t.metaKey && (e += 2048),
            e
        }
        function r(t) {
            return a(t) | t.keyCode
        }
        !function(t) {
            t[t.None = 0] = "None",
            t[t.Alt = 512] = "Alt",
            t[t.Shift = 1024] = "Shift",
            t[t.Mod = o ? 2048 : 256] = "Mod",
            t[t.Control = 256] = "Control",
            t[t.Meta = 2048] = "Meta"
        }(n || (n = {}));
        const l = {
            9: "⇥",
            13: "↵",
            27: "Esc",
            8: o ? "⌫" : "Backspace",
            32: "Space",
            35: "End",
            36: "Home",
            37: "←",
            38: "↑",
            39: "→",
            40: "↓",
            45: "Ins",
            46: "Del",
            188: ",",
            191: "/"
        }
          , c = {
            9: "Tab",
            13: "Enter",
            27: "Esc",
            8: "Backspace",
            32: "Space",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Ins",
            46: "Del",
            188: ",",
            191: "/"
        };
        for (let t = 1; t <= 16; t++)
            l[t + 111] = `F${t}`,
            c[t + 111] = `F${t}`;
        function h(t) {
            let e = function(t, e=!o) {
                let s = "";
                return 256 & t && (s += d(o ? "^" : "Ctrl", e)),
                512 & t && (s += d(o ? "⌥" : "Alt", e)),
                1024 & t && (s += d(o ? "⇧" : "Shift", e)),
                2048 & t && (s += d(o ? "⌘" : "Win", e)),
                s
            }(t);
            const s = 255 & t;
            return e += s in l ? l[s] : String.fromCharCode(s),
            e
        }
        function d(t, e) {
            return `${t}${e ? " + " : o ? " " : ""}`
        }
    }
    ,
    927301: (t, e, s) => {
        "use strict";
        s.d(e, {
            decodeHTMLEntities: () => l,
            getFirstSegmentOrCodePointString: () => h,
            htmlEscape: () => c
        });
        const i = /[<"'&>]/g
          , o = t => `&#${t.charCodeAt(0)};`
          , n = {
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&apos;": "'",
            "&amp;": "&",
            "&#60;": "<",
            "&#62;": ">",
            "&#34;": '"',
            "&#39;": "'",
            "&#039;": "'",
            "&#38;": "&"
        }
          , a = Object.assign({}, ...Object.entries(n).map(( ([t,e]) => ({
            [e]: t
        }))))
          , r = new RegExp(Object.keys(n).join("|"),"g");
        new RegExp(Object.keys(a).join("|"),"g");
        function l(t) {
            return t.replace(r, (t => n[t] || t))
        }
        function c(t) {
            return t.replace(i, o)
        }
        function h(t) {
            const e = Intl.Segmenter;
            if (e) {
                const s = new e(void 0,{
                    granularity: "grapheme"
                })
                  , [{segment: i}={
                    segment: null
                }] = s.segment(t);
                return i?.toUpperCase() ?? null
            }
            {
                const e = t.codePointAt(0);
                return e ? String.fromCodePoint(e).toUpperCase() : null
            }
        }
    }
    ,
    604286: (t, e, s) => {
        "use strict";
        s.d(e, {
            hotKeyDeserialize: () => o
        });
        var i = s(927301);
        function o(t) {
            return JSON.parse((0,
            i.decodeHTMLEntities)(t))
        }
    }
    ,
    780738: (t, e, s) => {
        "use strict";
        s.d(e, {
            quoteTickerFormatChange: () => r
        });
        var i = s(89831)
          , o = s(51196);
        const n = (t, e=!0) => e ? `(${t})` : t;
        var a = s(572570);
        function r(t, e, s) {
            const r = (0,
            a.toNumberOrUndefined)(t);
            if ("economic" === e?.type && 0 === r || void 0 === r)
                return;
            const l = s?.customPriceFormatter || "volume" === e.format && new o.VolumeFormatter({
                precision: 2
            }) || new i.PriceFormatter({
                priceScale: e.pricescale || 100,
                minMove: e.minmov || 1,
                fractional: e.fractional,
                minMove2: e.minmove2
            })
              , c = void 0 !== s?.signPositiveChange ? s.signPositiveChange : s?.signPositive
              , h = l.format(r, {
                signPositive: c,
                signNegative: s?.signNegative
            });
            return n(h, s?.changeInBrackets)
        }
    }
    ,
    950324: (t, e, s) => {
        "use strict";
        s.d(e, {
            quoteTickerFormatCurrency: () => o
        });
        var i = s(444372);
        function o(t) {
            switch (t) {
            case "PCTDY":
                return i.t(null, {
                    context: "_max_len_9"
                }, s(291500));
            case "PCTPAR":
                return i.t(null, {
                    context: "_max_len_9"
                }, s(46374));
            default:
                return t
            }
        }
    }
    ,
    572570: (t, e, s) => {
        "use strict";
        function i(t) {
            if (null != t && "boolean" != typeof t && !isNaN(Number(t)))
                return Number(t)
        }
        s.d(e, {
            toNumberOrUndefined: () => i
        })
    }
    ,
    780792: (t, e, s) => {
        "use strict";
        s.d(e, {
            AbstractIndicator: () => r
        });
        var i = s(735566)
          , o = s(900608)
          , n = s(534197);
        s(673747);
        const a = (0,
        i.getLogger)("GUI.Blocks.AbstractIndicator");
        class r {
            constructor(t) {
                this._classSuffix = "",
                this._quoteSessionPrefix = "abstract-indicator",
                this._shortMode = !1,
                this._showTooltip = !0,
                this._subscribed = !1,
                this._tooltipType = "custom",
                this._lastTooltipText = "",
                this._quoteSession = t.quoteSession
            }
            getValue() {
                return this._value
            }
            getTooltipText() {
                return this._labelMap[this._value] || ""
            }
            getLabel() {
                return this._labelMap[this._value] || ""
            }
            getElement() {
                return this._el
            }
            update(t, e) {
                this._updateValue(t, e),
                this._render()
            }
            setTooltipEnabled(t=!1) {
                this._showTooltip !== t && (this._showTooltip = t,
                this._renderTooltip())
            }
            enableShortMode() {
                !0 !== this._shortMode && (this._shortMode = !0,
                this._render())
            }
            disableShortMode() {
                !1 !== this._shortMode && (this._shortMode = !1,
                this._render())
            }
            isShortModeEnabled() {
                return this._shortMode
            }
            start() {
                !this._subscribed && this._symbolName && (this._quoteSession || (this._quoteSession = (0,
                n.getQuoteSessionInstance)("simple")),
                this._quoteSession.subscribe(this._getQuoteSessionId(), this._symbolName, this.update.bind(this)),
                this._subscribed = !0)
            }
            stop() {
                this._subscribed && this._quoteSession && this._symbolName && (this._quoteSession.unsubscribe(this._getQuoteSessionId(), this._symbolName),
                this._subscribed = !1)
            }
            setSessionStatusIcon(t) {
                this._sessionStatusIcon !== t && (this._sessionStatusIcon = t,
                this._render())
            }
            _init(t) {
                this._el = t.el ? t.el : document.createElement("span"),
                this._el.innerHTML = "",
                this._classMap = t.classMap,
                this._iconClassMap = t.iconClassMap,
                this._labelMap = t.labelMap,
                this._showTooltip = t.showTooltip,
                this._classSuffix = t.classSuffix,
                this._symbolName = t.symbol,
                this._sessionStatusIcon = t.sessionStatusIcon,
                this._onValueChange = t.onValueChange,
                t.tooltipType && (this._tooltipType = t.tooltipType),
                this._quoteSessionGUID = (0,
                o.guid)(),
                !0 === t.short && this.enableShortMode(),
                t.data && this._updateValue(t.data)
            }
            _clearClasses() {
                Object.values(this._classMap).map((t => {
                    this._el.classList.remove(`${t}`),
                    this._el.classList.remove(`${t}${this._classSuffix}`)
                }
                ))
            }
            _render() {
                this._renderClasses(),
                this._renderTooltip(),
                this._renderLabel()
            }
            _renderLabel() {
                this._el.textContent = this.getLabel()
            }
            _updateValue(t, e) {
                const s = this._getValueFromData(t);
                (e || s !== this._value) && (this._value = s,
                this._onValueChange?.(this._value))
            }
            _renderClasses() {
                const t = this._el.classList;
                t.add(this._componentClass, this._componentClass + this._classSuffix);
                const e = this._classMap[this._value];
                for (const s in this._classMap) {
                    const i = this._classMap[s];
                    i && (i === e ? (t.add(i, i + this._classSuffix),
                    this._sessionStatusIcon && t.add(i + "__withIcon")) : (t.remove(i, i + this._classSuffix),
                    this._sessionStatusIcon && t.remove(i + "__withIcon")))
                }
                !e && this._value && a.logWarn(`no className for status ${this._value}`)
            }
            _renderTooltip() {
                const t = this._showTooltip ? this.getTooltipText() : "";
                t !== this._lastTooltipText && (this._lastTooltipText = t,
                this._el.setAttribute("title", t),
                "custom" === this._tooltipType && this._el.classList.toggle("apply-common-tooltip", this._showTooltip))
            }
            _getQuoteSessionId() {
                return `${this._quoteSessionPrefix}.${this._quoteSessionGUID}`
            }
        }
    }
    ,
    719240: (t, e, s) => {
        "use strict";
        s.d(e, {
            DataModeIndicator: () => l
        });
        var i = s(444372)
          , o = (s(142492),
        s(429341),
        s(780792));
        const n = {
            connecting: "tv-data-mode--connecting",
            delayed: "tv-data-mode--delayed",
            delayed_streaming: "tv-data-mode--delayed",
            endofday: "tv-data-mode--endofday",
            forbidden: "tv-data-mode--forbidden",
            realtime: "tv-data-mode--realtime",
            snapshot: "tv-data-mode--snapshot",
            loading: "tv-data-mode--loading",
            replay: "tv-data-mode--replay"
        };
        function a() {
            return {
                connecting: i.t(null, {
                    context: "data_mode_connecting_letter"
                }, s(167040)),
                delayed: i.t(null, {
                    context: "data_mode_delayed_letter"
                }, s(800919)),
                delayed_streaming: i.t(null, {
                    context: "data_mode_delayed_streaming_letter"
                }, s(933088)),
                endofday: i.t(null, {
                    context: "data_mode_end_of_day_letter"
                }, s(918400)),
                forbidden: i.t(null, {
                    context: "data_mode_forbidden_letter"
                }, s(514149)),
                realtime: i.t(null, {
                    context: "data_mode_realtime_letter"
                }, s(650940)),
                snapshot: i.t(null, {
                    context: "data_mode_snapshot_letter"
                }, s(756757)),
                loading: "",
                replay: i.t(null, {
                    context: "data_mode_replay_letter"
                }, s(745540))
            }
        }
        const r = {
            streaming: "realtime"
        };
        class l extends o.AbstractIndicator {
            constructor(t) {
                super(t),
                this._quoteSessionPrefix = "data-mode-indicator",
                this._componentClass = "tv-data-mode",
                this._init(t)
            }
            getLabel() {
                return !0 === this._shortMode ? this._shortLabelMap[this._value] || "" : super.getLabel()
            }
            setMode(t, e) {
                this.update({
                    values: {
                        update_mode: t,
                        update_mode_seconds: e
                    }
                })
            }
            hide() {
                this._el.classList.add("i-hidden")
            }
            show() {
                this._el.classList.remove("i-hidden")
            }
            getTooltipText() {
                let t = "";
                const e = this.getValue();
                if ("" === e)
                    return t;
                switch (e) {
                case "delayed":
                    t = i.t(null, void 0, s(369539));
                    break;
                case "delayed_streaming":
                    t = i.t(null, void 0, s(167476));
                    break;
                default:
                    t = this._labelMap[e] || t
                }
                return ["delayed", "delayed_streaming"].includes(e) && (t = t.format({
                    number: String(Math.round(this._modeInterval / 60))
                })),
                t
            }
            _init(t={}) {
                const e = Object.assign({}, {
                    classMap: n,
                    classSuffix: "",
                    data: {
                        values: {
                            update_mode: "connecting"
                        }
                    },
                    labelMap: {
                        connecting: i.t(null, void 0, s(366891)),
                        delayed: i.t(null, void 0, s(739688)),
                        delayed_streaming: i.t(null, void 0, s(739688)),
                        endofday: i.t(null, void 0, s(328304)),
                        forbidden: i.t(null, void 0, s(909161)),
                        realtime: i.t(null, void 0, s(303058)),
                        snapshot: i.t(null, void 0, s(988408)),
                        loading: "",
                        replay: i.t(null, void 0, s(38822))
                    },
                    modeInterval: 600,
                    short: !1,
                    shortLabelMap: a(),
                    showTooltip: !0,
                    tooltipType: "custom"
                }, t);
                this._modeInterval = e.modeInterval || 600,
                this._shortLabelMap = e.shortLabelMap || a(),
                super._init(e),
                this._render()
            }
            _getValueFromData(t) {
                let e;
                return e = void 0 !== t.values && void 0 !== t.values.update_mode ? t.values.update_mode : this.getValue(),
                r[e] || e
            }
            _updateValue(t, e) {
                void 0 !== t.values && void 0 !== t.values.update_mode_seconds && (this._modeInterval = t.values.update_mode_seconds),
                super._updateValue(t, e)
            }
        }
    }
    ,
    600303: (t, e, s) => {
        "use strict";
        s.d(e, {
            MarketStatusIndicator: () => r
        });
        var i = s(444372)
          , o = s(780792);
        s(105332);
        const n = {
            invalid: "tv-market-status--invalid",
            market: "tv-market-status--market",
            out_of_session: "tv-market-status--out-of-session",
            post_market: "tv-market-status--post-market",
            pre_market: "tv-market-status--pre-market",
            loading: "tv-market-status--loading",
            holiday: "tv-market-status--holiday",
            replay: "tv-market-status--replay",
            delisted: "tv-market-status--delisted"
        }
          , a = {
            invalid: "tv-market-status__icon--invalid",
            market: "tv-market-status__icon--market",
            out_of_session: "tv-market-status__icon--out-of-session",
            post_market: "tv-market-status__icon--post-market",
            pre_market: "tv-market-status__icon--pre-market",
            loading: "tv-market-status__icon--loading",
            holiday: "tv-market-status__icon--holiday",
            replay: "tv-market-status__icon--replay",
            delisted: "tv-market-status__icon--delisted"
        };
        class r extends o.AbstractIndicator {
            constructor(t) {
                super(t),
                this._quoteSessionPrefix = "market-status-indicator",
                this._componentClass = "tv-market-status",
                this._extraTitle = "",
                this._init(t)
            }
            setStatus(t, e) {
                const s = {
                    values: {
                        current_session: "delisted" === this.getValue() ? "delisted" : t
                    }
                };
                this.update(s, e)
            }
            getTooltipText() {
                let t = super.getTooltipText();
                return "" === t || "" !== this._extraTitle && (t = `${t}, ${this._extraTitle}`),
                t
            }
            setExtraTitle(t) {
                this._extraTitle = t
            }
            reset() {
                this._clearClasses(),
                this._labelEl.textContent = "",
                this._extraTitle = "",
                this._el.setAttribute("title", ""),
                this._value = ""
            }
            enableShortMode(t=!0) {
                void 0 !== this._labelEl && this._labelEl.classList.add("i-hidden"),
                super.enableShortMode()
            }
            disableShortMode() {
                void 0 !== this._labelEl && this._labelEl.classList.remove("i-hidden"),
                super.disableShortMode()
            }
            _renderLabel() {
                this._labelEl.textContent = this.getLabel()
            }
            _getValueFromData(t) {
                return t.values?.typespecs?.includes("discontinued") ? "delisted" : void 0 !== t.values?.current_session ? t.values.current_session : this.getValue()
            }
            _render() {
                this._renderLabelElement(),
                this._sessionStatusIcon ? this._renderIconElement() : this._renderDotElement(),
                super._render()
            }
            _init(t) {
                const e = Object.assign({}, function() {
                    const t = {
                        invalid: i.t(null, void 0, s(652969)),
                        market: i.t(null, void 0, s(241410)),
                        out_of_session: i.t(null, void 0, s(762464)),
                        post_market: i.t(null, void 0, s(673897)),
                        pre_market: i.t(null, void 0, s(236018)),
                        loading: i.t(null, void 0, s(786726)),
                        holiday: i.t(null, void 0, s(987845)),
                        delisted: i.t(null, void 0, s(254602)),
                        replay: ""
                    };
                    return {
                        classMap: n,
                        iconClassMap: a,
                        classSuffix: "",
                        data: {},
                        extraTitle: "",
                        labelMap: t,
                        short: !1,
                        showTooltip: !0,
                        tooltipType: "custom"
                    }
                }(), t);
                super._init(e),
                this.setExtraTitle(e.extraTitle),
                this._render()
            }
            _renderLabelElement() {
                void 0 === this._labelEl && (this._labelEl = document.createElement("span"),
                this._labelEl.classList.add(`${this._componentClass}__label`),
                this._labelEl.classList.add(`${this._componentClass}__label${this._classSuffix}`),
                this._el.appendChild(this._labelEl))
            }
            _renderDotElement() {
                this._el.contains(this._iconEl) && this._el.removeChild(this._iconEl),
                void 0 === this._dotEl && (this._dotEl = document.createElement("span"),
                this._dotEl.classList.add(`${this._componentClass}__dot`),
                this._dotEl.classList.add(`${this._componentClass}__dot${this._classSuffix}`),
                this._el.appendChild(this._dotEl))
            }
            _renderIconElement() {
                this._el.contains(this._dotEl) && this._el.removeChild(this._dotEl),
                void 0 === this._iconEl && this._value && (this._iconEl = document.createElement("span"),
                this._iconEl.classList.add(`${this._componentClass}__icon`),
                this._iconEl.classList.add(`${this._componentClass}__icon${this._classSuffix}`),
                this._el.appendChild(this._iconEl))
            }
        }
    }
    ,
    152592: (t, e, s) => {
        "use strict";
        s.d(e, {
            isMcxQuoteData: () => n
        });
        var i = s(416234);
        function o(t) {
            return t === i.SymbolGroup.McxFlag
        }
        function n(t) {
            return !!t && (o(t.symbolname) || "permission_denied" === t.status && o(t.values?.alternative))
        }
    }
    ,
    40763: (t, e, s) => {
        "use strict";
        function i(t) {
            return t.endsWith("_dly")
        }
        function o(t) {
            return !!t && (!(void 0 === t.symbolname || !i(t.symbolname)) || Boolean("permission_denied" === t.status && t.values && void 0 !== t.values.alternative && i(t.values.alternative)))
        }
        s.d(e, {
            isSfQuoteData: () => o
        })
    }
    ,
    416234: (t, e, s) => {
        "use strict";
        s.d(e, {
            SymbolGroup: () => i
        });
        var i;
        s(142492),
        s(444372);
        !function(t) {
            t.NseFlag = "nse_free",
            t.McxFlag = "mcx_free"
        }(i || (i = {}))
    }
    ,
    345848: (t, e, s) => {
        "use strict";
        s.d(e, {
            trackEvent: () => a
        });
        s(251954);
        var i = s(931924);
        const o = (0,
        s(735566).getLogger)("Common.TrackEvent");
        let n = !1;
        const a = (t, e, s) => {
            if (n)
                return;
            let a = (t ? t + ":" : "") + e;
            s && (a += " " + s),
            o.logNormal(a),
            i.enabled("widget") || !window._UNIT_TESTS && window.gtag && window.gtag("event", e, {
                event_category: t,
                event_label: s
            })
        }
        ;
        "undefined" != typeof window && (window.TradingView = window.TradingView || {},
        window.TradingView.trackEvent = a)
    }
    ,
    808708: (t, e, s) => {
        "use strict";
        s.d(e, {
            NumericFormatter: () => n
        });
        var i = s(781441)
          , o = s(976531);
        class n {
            constructor(t={}) {
                this._options = t
            }
            format(t, e={}) {
                if (!Number.isFinite(t))
                    return String(t);
                const {ignoreLocaleNumberFormat: s=this._options.ignoreLocaleNumberFormat, noExponentialForm: a=this._options.noExponentialForm} = e
                  , {minPrecision: r, precision: l} = this._options
                  , c = (0,
                o.getNumberFormat)(s);
                return void 0 === l ? n._formatNoEImpl(t, c, l, r) : (0,
                i.formatNumber)(t, c, l, a, r)
            }
            parse(t, e) {
                const {ignoreLocaleNumberFormat: s, precision: n} = this._options
                  , a = (0,
                o.getNumberFormat)(s || e?.ignoreLocaleNumberFormat);
                let r = (0,
                i.parseNumber)(t, a);
                return Number.isFinite(r) ? (n && (r = +r.toFixed(n)),
                {
                    res: !0,
                    value: r
                }) : {
                    res: !1
                }
            }
            static formatNoE(t, e) {
                return this._formatNoEImpl(t, e)
            }
            static _formatNoEImpl(t, e, s, o) {
                return Number.isFinite(t) ? (e = e ?? {
                    groupingSeparator: "",
                    decimalSign: "."
                },
                (0,
                i.formatNumber)(t, e, s, !0, o)) : String(t)
            }
        }
    }
    ,
    722652: (t, e, s) => {
        "use strict";
        s.d(e, {
            PercentageFormatter: () => n
        });
        var i = s(89831)
          , o = s(969680);
        class n extends i.PriceFormatter {
            constructor(t={}) {
                void 0 !== t.decimalPlaces && (t.priceScale = Math.pow(10, t.decimalPlaces)),
                super(t),
                this.type = "percentage"
            }
            state() {
                return {
                    ...super.state(),
                    percent: !0
                }
            }
            parse(t, e) {
                return t = t.replace("%", ""),
                super.parse(t, e)
            }
            format(t, e={}) {
                const {useRtlFormat: s=!0} = e
                  , i = super.format(t, {
                    ...e,
                    useRtlFormat: !1
                }) + "%";
                return s ? (0,
                o.forceLTRStr)(i) : i
            }
            static serialize(t) {
                return t.state()
            }
            static deserialize(t) {
                return new n(t)
            }
        }
    }
    ,
    280355: (t, e, s) => {
        "use strict";
        s.d(e, {
            PriceColorer: () => i
        });
        var i, o = s(335048), n = s(790188);
        !function(t) {
            function e(t, e) {
                return 0 === t ? e && void 0 !== e.neutral ? e.neutral : o.color.black70 : t > 0 ? e && void 0 !== e.up ? e.up : n.colorsPalette["color-success"] : e && void 0 !== e.down ? e.down : n.colorsPalette["color-danger"]
            }
            t.formatSign = e,
            t.formatDiff = function(t, s) {
                return e(s - t)
            }
            ,
            t.domDifference = function(t, e, s=0, i="", o="") {
                function n(t) {
                    const e = document.createElement("span");
                    return e.innerHTML = t,
                    e
                }
                const a = document.createElement("div");
                if (!s)
                    return a.appendChild(n(t)),
                    a;
                const r = t + ""
                  , l = e + "";
                let c = null;
                if (r.length === l.length) {
                    for (let t = 0; t < r.length; t++)
                        if (r.charAt(t) !== l.charAt(t)) {
                            c = t;
                            break
                        }
                } else
                    c = Number("0");
                if (null === c)
                    return a.appendChild(n(r)),
                    a;
                const h = n(r.substring(0, c))
                  , d = document.createElement("span");
                return d.className = s < 0 ? i : o,
                d.appendChild(n(r.substring(c))),
                a.appendChild(h),
                a.appendChild(d),
                a
            }
        }(i || (i = {}))
    }
    ,
    51196: (t, e, s) => {
        "use strict";
        s.d(e, {
            PLACE_HOLDER: () => a,
            VolumeFormatter: () => c
        });
        var i = s(444372)
          , o = s(808708)
          , n = s(536794);
        const a = "---"
          , r = [{
            value: 3,
            letter: "K"
        }, {
            value: 6,
            letter: "M"
        }, {
            value: 9,
            letter: "B"
        }, {
            value: 12,
            letter: "T"
        }];
        function l(t, e) {
            const s = t - e;
            return r.find((t => t.value >= s)) ?? r[r.length - 1]
        }
        class c {
            constructor(t={}) {
                this.type = "volume";
                const {precision: e=0, minPrecision: s=0, dimensionPrecision: i=2, dimensionMinPrecision: n=0, significantDigits: a=3, ignoreLocaleNumberFormat: r, noExponentialForm: l, removeSpaceBeforeDimension: c} = t;
                this._precision = e,
                this._formatter = new o.NumericFormatter({
                    ignoreLocaleNumberFormat: r,
                    precision: this._precision,
                    minPrecision: s,
                    noExponentialForm: l
                }),
                this._dimensionPrecision = i,
                this._dimensionFormatter = new o.NumericFormatter({
                    ignoreLocaleNumberFormat: r,
                    precision: this._dimensionPrecision,
                    minPrecision: n,
                    noExponentialForm: l
                }),
                this._significantDigits = a,
                this._fractionalValues = void 0 !== e && e > 0,
                this._spaceBeforeDimension = c ? "" : " ",
                this._options = t
            }
            state() {
                const {ignoreLocaleNumberFormat: t, ...e} = this._options;
                return e
            }
            format(t, e) {
                if (!(0,
                n.isNumber)(t))
                    return a;
                if (Math.abs(t) >= 1e100)
                    return i.t(null, void 0, s(696935));
                let o = "";
                Math.abs(t) < 1 && (t = +t.toFixed(this._precision)),
                t < 0 ? o = "−" : t > 0 && e?.signPositive && (o = "+"),
                t = Math.abs(t);
                const r = !!(e?.ignoreLocaleNumberFormat ?? this._options.ignoreLocaleNumberFormat);
                let c, h, d = Math.floor(Math.log10(t)) + 1;
                if (d <= this._significantDigits && (t = +t.toFixed(this._precision),
                d = Math.floor(Math.log10(t)) + 1),
                d <= this._significantDigits)
                    c = this._formatNumber(t, r, this._formatter);
                else {
                    let e = l(d, this._significantDigits);
                    const s = Math.pow(10, e.value);
                    t = +(t / s).toFixed(this._dimensionPrecision) * s,
                    e = l(Math.floor(Math.log10(t)) + 1, this._significantDigits),
                    c = this._formatNumber(t / Math.pow(10, e.value), r, this._dimensionFormatter),
                    h = e.letter
                }
                return h ? `${o}${c}${this._spaceBeforeDimension}${h}` : `${o}${c}`
            }
            parse(t, e) {
                if ("---" === t)
                    return {
                        error: "not a number",
                        res: !1,
                        value: NaN
                    };
                const s = {
                    K: 1e3,
                    M: 1e6,
                    B: 1e9,
                    T: 1e12
                }
                  , i = (t = t.replace("−", "-")).slice(-1);
                if (s.hasOwnProperty(i)) {
                    const o = this._formatter.parse(t.slice(0, -1).trim(), e)
                      , a = o.res ? o.value : NaN;
                    return (0,
                    n.isNumber)(a) ? {
                        res: !0,
                        value: a * s[i]
                    } : {
                        error: "not a number",
                        res: !1,
                        value: NaN
                    }
                }
                {
                    const s = this._formatter.parse(t.trim(), e);
                    let i = s.res ? s.value : NaN;
                    return -0 === i && (i = 0),
                    (0,
                    n.isNumber)(i) ? {
                        res: !0,
                        value: i
                    } : {
                        error: "not a number",
                        res: !1,
                        value: NaN
                    }
                }
            }
            static serialize(t) {
                return t.state()
            }
            static deserialize(t) {
                return new c(t)
            }
            _formatNumber(t, e, s) {
                if (this._fractionalValues && 0 !== t) {
                    const e = 14 - Math.ceil(Math.log10(t))
                      , s = Math.pow(10, e);
                    t = Math.round(t * s) / s
                }
                return s.format(t, {
                    ignoreLocaleNumberFormat: e
                })
            }
        }
    }
    ,
    335048: (t, e, s) => {
        "use strict";
        s.d(e, {
            color: () => i.color
        });
        var i = s(745269)
    }
    ,
    23203: (t, e, s) => {
        "use strict";
        s.d(e, {
            makeSymbolPageUrl: () => p,
            makeTemplateSymbolUrl: () => _
        });
        var i = s(199583)
          , o = s(912465)
          , n = s(974629)
          , a = s(889267)
          , r = s(519073);
        function l(t) {
            const e = {
                ...t
            };
            if ("spread" === e.type || "expression" === e.type) {
                const t = e.shortName && c(e.shortName)
                  , s = e.proName && c(e.proName);
                e.type = void 0,
                e.shortName = t,
                e.proName = s
            }
            return e
        }
        function c(t) {
            return (0,
            a.tokenize)(t).find((t => "symbol" === t.type))?.value
        }
        function h(t) {
            const e = {
                shortName: t.shortName,
                exchange: t.exchange,
                proName: t.proName,
                type: t.type,
                typespecs: t.typespecs,
                root: t.root
            };
            return e.proName && e.proName.includes(":") && ([e.exchange,e.shortName] = e.proName.split(":")),
            e
        }
        function d(t, e) {
            const s = encodeURIComponent(e.shortName || "")
              , i = encodeURIComponent(e.exchange || "")
              , o = encodeURIComponent(e.proName || "")
              , n = encodeURIComponent(e.root || "");
            return t.replace("{tvexchange}", i).replace("{tvsymbol}", s).replace("{tvprosymbol}", o).replace("{tvroot}", n)
        }
        function u(t, e="") {
            const s = h(t)
              , {type: i, typespecs: o, shortName: n, proName: a, exchange: l, root: c} = s;
            return void 0 === n && void 0 === a ? (console.warn("Params missed"),
            "/") : i || o ? "commodity" === i && o && o.includes("cfd") ? "/symbols/{tvsymbol}/?exchange={tvexchange}" : !c || !o || "futures" !== i || o.includes("continuous") && n?.endsWith("1!") || o.includes("exchange-continuous") ? l && ("forex" === i || o && (0,
            r.hasCryptoTypespec)(o)) ? "/symbols/{tvsymbol}/?exchange={tvexchange}" : l ? `/symbols/{tvexchange}-{tvsymbol}/${e}` : `/symbols/{tvsymbol}/${e}` : `/symbols/{tvexchange}-{tvroot}1!/${e}?contract={tvsymbol}` : l ? `/symbols/{tvexchange}-{tvsymbol}/${e}` : `/symbols/{tvsymbol}/${e}`
        }
        function _(t, e) {
            let s = t;
            if (!/{tvsymbol}|{tvexchange}|{tvprosymbol}/.test(t)) {
                let i = "tvprosymbol";
                void 0 === e.proName && (i = "tvsymbol"),
                s = `${t}?tvwidgetsymbol={${i}}`
            }
            const i = d(s, h(l(e)));
            if (!(0,
            n.isSafeUrl)(i))
                throw new Error(`The symbol URL ${i} is not allowed.`);
            return i
        }
        function m(t, e, s, n) {
            const a = (window.locale_domains ? (0,
            o.determineBaseUrl)(window.locale_domains, n) : window.location.origin) + d(t, h(l(e)));
            return s ? (0,
            i.addUtmToUrl)(a, s) : a
        }
        function p(t, e, s, i) {
            const o = l(t);
            return m(u(o, i), o, e, s)
        }
    }
    ,
    109378: (t, e, s) => {
        "use strict";
        s.d(e, {
            QuoteTicker: () => N
        });
        var i = s(144731)
          , o = s(735566)
          , n = s(536794)
          , a = s(722652)
          , r = s(280355)
          , l = s(89831)
          , c = s(51196)
          , h = s(600303)
          , d = s(719240)
          , u = s(904207)
          , _ = s(927435)
          , m = s(534197)
          , p = s(780738)
          , g = s(950324)
          , f = s(152592)
          , v = s(40763);
        const b = (0,
        o.getLogger)("QuoteTicker")
          , y = {
            addDescriptionTitle: !0,
            changeDirectionDownClass: "down",
            changeDirectionUpClass: "up",
            changeDirectionNeutralClass: "neutral",
            changeInBrackets: !1,
            changePercentInBrackets: !1,
            lastPriceTimeInBrackets: !0,
            lastReleaseDateTimeInBrackets: !0,
            rtcTimeInBrackets: !0,
            clientName: "quote-ticker",
            dontDyePrice: !1,
            fallingBg: null,
            growingBg: null,
            lastFallingClass: "falling",
            lastGrowingClass: "growing",
            quoteSession: null,
            signNegative: !0,
            signPositive: !1,
            customPriceFormatter: null,
            customTimeFormatter: null,
            sessionStatusClassSuffix: "--for-ticker",
            dataModeClassSuffix: "--for-ticker",
            showInvalidSymbolStatus: !1,
            indicatorsTooltipType: "custom",
            lastPriceLastCharSup: !1,
            lastPriceHighlightDiffOnly: !1,
            initedHook: void 0,
            setStateHook: void 0,
            permissionDeniedHook: void 0,
            noSuchSymbolHook: void 0
        }
          , x = /[KMBT]/;
        function N(t, e, s={}) {
            this.enabled = !0,
            this._symbol = t,
            this._symbolOriginal = null,
            this._options = (0,
            i.deepExtend)({}, y, s),
            !1 !== this._options.signNegative && !0 !== this._options.signNegative && delete this._options.signNegative,
            s.customPriceFormatter && (this._customPriceFormatter = s.customPriceFormatter),
            s.customTimeFormatter && (void 0 !== s.customTimeFormatter.lastPrice || void 0 !== s.customTimeFormatter.rtc ? this._timeFormatter = s.customTimeFormatter : this._timeFormatter = {
                lastPrice: s.customPriceFormatter,
                rtc: s.customPriceFormatter
            }),
            this._percentFormatter = new a.PercentageFormatter,
            this._defaultPriceFormatter = new l.PriceFormatter({
                priceScale: 100
            }),
            this._priceFormatter = this._customPriceFormatter || this._defaultPriceFormatter,
            this._volumeFormatter = new c.VolumeFormatter({
                precision: 2
            }),
            this._cache = {},
            this._lastPrice = null,
            this._lastPriceFormatted = "",
            this._lastMinMove = 0,
            this._elements = {},
            this._textNodes = {},
            this._changeVolumeLetter = this._getChangeVolumeLetterCallback(),
            this._setElements(e),
            this._highlighters = {},
            this._initHighlighters(),
            this._options.setStateHook && this.setStateHook(this._options.setStateHook),
            this.quoteSession = this._options.quoteSession || (0,
            m.getQuoteSessionInstance)("simple"),
            this._quoteSessionEventHandler = this.onData.bind(this),
            this._connectTimeoutId = setTimeout(this.connect.bind(this), 0)
        }
        function C(t) {
            const e = t.search(x)
              , s = e >= 0 ? t.slice(e) : "";
            return [e > 0 ? t.substring(e, 0) : 0 === e ? "" : t, s]
        }
        function S(t, e, s, i, o) {
            var n, a = null;
            function r() {
                if (n && (clearTimeout(n),
                n = void 0),
                s || e)
                    for (var a = 0; a < t.length; a++)
                        t[a].style.background = "";
                if (!s || !e)
                    for (a = 0; a < t.length; a++)
                        i && t[a].classList.remove(i),
                        o && t[a].classList.remove(o)
            }
            return {
                show: function(l) {
                    var c = 0;
                    if (l !== a) {
                        if (null !== a && null !== l && (c = l - a),
                        r(),
                        n = setTimeout(r, 750),
                        0 < c) {
                            if (e)
                                for (var h = 0; h < t.length; h++)
                                    t[h].style.background = e;
                            else if (i)
                                for (h = 0; h < t.length; h++)
                                    t[h].classList.add(i)
                        } else if (c < 0)
                            if (s)
                                for (h = 0; h < t.length; h++)
                                    t[h].style.background = s;
                            else if (o)
                                for (h = 0; h < t.length; h++)
                                    t[h].classList.add(o);
                        null !== l && (a = l)
                    }
                },
                hide: r
            }
        }
        N.prototype._setElements = function(t) {
            this._container = t,
            this._elements.change = this._findElements(t, ["js-symbol-change", "symbol-change"]),
            this._elements.changeDirection = this._findElements(t, ["js-symbol-change-direction", "symbol-change-direction"]),
            this._elements.extHrsChangeDirection = this._findElements(t, ["js-symbol-ext-hrs-change-direction"]),
            this._elements.changePercent = this._findElements(t, ["js-symbol-change-pt", "symbol-change-pt"]),
            this._elements.description = this._findElements(t, ["js-symbol-description-name", "symbol-description-name"]),
            this._elements.extHrsChange = this._findElements(t, "js-symbol-ext-hrs-change"),
            this._elements.extHrsChangePercent = this._findElements(t, "js-symbol-ext-hrs-change-pt"),
            this._elements.extHrsClose = this._findElements(t, "js-symbol-ext-hrs-close"),
            this._elements.industry = this._findElements(t, ["js-symbol-industry", "symbol-industry"]),
            this._elements.last = this._findElements(t, ["js-symbol-last", "symbol-last"]),
            this._elements.sector = this._findElements(t, ["js-symbol-sector", "symbol-sector"]),
            this._elements.sessionStatus = this._findElements(t, "js-symbol-session-status"),
            this._elements.shortName = this._findElements(t, ["js-symbol-short-name", "symbol-short-name"]),
            this._elements.updateMode = this._findElements(t, "js-data-mode"),
            this._elements.lastPeriod = this._findElements(t, "js-symbol-last-period"),
            this._elements.updateMode.forEach((t => t.classList.add("i-hidden"))),
            this._textNodes.change = this._getOrCreateTextNodes(this._elements.change),
            this._textNodes.changePercent = this._getOrCreateTextNodes(this._elements.changePercent),
            this._textNodes.extHrsChange = this._getOrCreateTextNodes(this._elements.extHrsChange),
            this._textNodes.extHrsChangePercent = this._getOrCreateTextNodes(this._elements.extHrsChangePercent),
            this._textNodes.extHrsClose = this._getOrCreateTextNodes(this._elements.extHrsClose),
            this._textNodes.last = this._getOrCreateTextNodes(this._elements.last),
            this._textNodes.open = this._findTextNodes(t, "js-symbol-open"),
            this._textNodes.eps = this._findTextNodes(t, "js-symbol-eps"),
            this._textNodes.marketCap = this._findTextNodes(t, "js-symbol-market-cap"),
            this._textNodes.prevClose = this._findTextNodes(t, "js-symbol-prev-close"),
            this._textNodes.dividends = this._findTextNodes(t, "js-symbol-dividends"),
            this._textNodes.priceEarnings = this._findTextNodes(t, "js-symbol-pe"),
            this._textNodes.volume = this._findTextNodes(t, "js-symbol-volume"),
            this._textNodes.high = this._findTextNodes(t, "js-symbol-high"),
            this._textNodes.low = this._findTextNodes(t, "js-symbol-low"),
            this._textNodes.currency = this._findTextNodes(t, "js-symbol-currency"),
            this._textNodes.lastPriceTime = this._findTextNodes(t, "js-symbol-lp-time"),
            this._textNodes.lastReleaseDate = this._findTextNodes(t, "js-symbol-last-release-date"),
            this._textNodes.rtcTime = this._findTextNodes(t, "js-symbol-rtc-time"),
            this._elements.lastHighlight = this._options.lastPriceHighlightDiffOnly ? this._elements.last.map((t => this._appendAndGetNewElement(t, "span"))) : this._elements.last,
            this._textNodes.lastHighlight = this._getOrCreateTextNodes(this._elements.lastHighlight),
            this._elements.lastSup = this._options.lastPriceLastCharSup ? this._elements.lastHighlight.map((t => this._appendAndGetNewElement(t, "sup"))) : [],
            this._textNodes.lastSup = this._getOrCreateTextNodes(this._elements.lastSup)
        }
        ,
        N.prototype._findElements = function(t, e) {
            var s = (0,
            n.isArray)(e) ? e : [e];
            return Array.prototype.concat.apply([], s.map((e => Array.prototype.slice.call(t.getElementsByClassName(e)))))
        }
        ,
        N.prototype._findTextNodes = function(t, e) {
            return this._getOrCreateTextNodes(this._findElements(t, e))
        }
        ,
        N.prototype._getOrCreateTextNodes = function(t) {
            return t.map((t => {
                var e = this._getFirstTextNode(t);
                return e || (e = t.ownerDocument.createTextNode(""),
                t.appendChild(e)),
                e
            }
            ))
        }
        ,
        N.prototype._appendAndGetNewElement = function(t, e) {
            const s = document.createElement(e);
            return t.appendChild(s),
            s
        }
        ,
        N.prototype._getFirstTextNode = function(t) {
            for (var e = t.childNodes, s = e.length - 1; s >= 0; s--)
                if (3 === e.item(s).nodeType)
                    return e.item(s);
            return null
        }
        ,
        N.prototype.connect = function(t) {
            this._subscribed || (this._subscribedSymbol = t || this._symbol,
            this.quoteSession.subscribe(this._options.clientName, this._subscribedSymbol, this._quoteSessionEventHandler),
            this._subscribed = !0)
        }
        ,
        N.prototype.disconnect = function() {
            clearTimeout(this._connectTimeoutId),
            this._subscribed && (this.quoteSession.unsubscribe(this._options.clientName, this._subscribedSymbol, this._quoteSessionEventHandler),
            this._subscribed = !1)
        }
        ,
        N.prototype.onData = function(t, e) {
            this.enabled && ("ok" === t.status ? this.successData(t, e) : "permission_denied" === t.status ? this.onPermissionDenied(t) : "error" === t.status && this.errorData(t))
        }
        ,
        N.prototype.successData = function(t, e) {
            t.values && this.setState(t.values, t, e)
        }
        ,
        N.prototype.onPermissionDenied = function(t) {
            (0,
            v.isSfQuoteData)(t) || (0,
            f.isMcxQuoteData)(t) ? this._options.permissionDeniedHook ? this._options.permissionDeniedHook(t, this._symbolOriginal || this._symbol) : this.errorData(t) : this.downgradeData(t)
        }
        ,
        N.prototype.errorData = function(t) {
            this._options.showInvalidSymbolStatus && (this.setShortName(this._symbol),
            this._elements.sessionStatus.map((t => new h.MarketStatusIndicator({
                classSuffix: this._options.sessionStatusClassSuffix,
                el: t,
                data: {
                    values: {
                        current_session: "invalid"
                    }
                },
                tooltipType: this._options.indicatorsTooltipType
            })))),
            this._options.noSuchSymbolHook ? (this._symbolOriginal && this.setShortName(this._symbolOriginal),
            this._options.noSuchSymbolHook.call(this, t, this._symbolOriginal || this._symbol)) : b.logWarn("No data for: " + this._symbol)
        }
        ,
        N.prototype.downgradeData = function(t) {
            {
                const e = t && t.values && t.values.alternative
                  , s = this._symbol === e;
                if (!(e && -1 !== e.indexOf(":")) || s)
                    return void this.errorData(t);
                this._symbolOriginal = this._symbol,
                this._symbol = e,
                this._subscribed = !1,
                this.connect()
            }
        }
        ,
        N.prototype.setState = function(t, e, i) {
            const o = i.values;
            this._isVolumeFormat = "volume" === t.format,
            null == o.pricescale && null == o.minmov && null == o.fractional && null == o.minmove2 || (this._priceFormatter = this._customPriceFormatter || this._isVolumeFormat && this._volumeFormatter || new l.PriceFormatter({
                priceScale: t.pricescale || 100,
                minMove: t.minmov || 1,
                fractional: t.fractional,
                minMove2: t.minmove2
            }));
            const n = this._options
              , a = this._percentFormatter
              , r = this._priceFormatter
              , m = this._defaultPriceFormatter
              , f = this._volumeFormatter
              , v = (t, e=!0) => e ? `(${t})` : t
              , y = void 0 !== n.signPositiveChange ? n.signPositiveChange : n.signPositive
              , x = t => (0,
            p.quoteTickerFormatChange)(t, o, n)
              , N = t => {
                const e = a.format(t, {
                    signPositive: y,
                    signNegative: n.signNegative
                });
                return v(e, n.changePercentInBrackets)
            }
              , C = r.format.bind(r)
              , S = m.format.bind(m)
              , T = f.format.bind(f)
              , w = t => null == t ? c.PLACE_HOLDER : S(t);
            n.disableChange || (this._setNodesValue(this._textNodes.change, o.change, x),
            this._setNodesValue(this._textNodes.changePercent, o.change_percent, N),
            null != o.change && (n.dontDyePrice || this._setChangeFontColor([].concat(this._elements.change, this._elements.changePercent), o.change, n.changeUpFontColor, n.changeDownFontColor, n.changeNeutralFontColor),
            this._setChangeDirection(this._elements.changeDirection, o.change)),
            this._setNodesValue(this._textNodes.extHrsChange, o.rch, x),
            this._setNodesValue(this._textNodes.extHrsChangePercent, o.rchp, N),
            null != o.rch && (n.dontDyePrice || this._setChangeFontColor([].concat(this._elements.extHrsChange, this._elements.extHrsChangePercent), o.rch, n.changeUpFontColor, n.changeDownFontColor, n.changeNeutralFontColor),
            this._setChangeDirection(this._elements.extHrsChangeDirection, o.rch))),
            this._setNodesValue(this._textNodes.prevClose, o.prev_close_price, C),
            this._setNodesValue(this._textNodes.dividends, t.dividends_yield, (t => null == t ? c.PLACE_HOLDER : a.format(t, {
                signPositive: n.signPositive,
                signNegative: n.signNegative
            })), !0);
            let F = (0,
            u.getTranslatedSymbolDescription)(o);
            if (F && (F = this._prepareSymbolDescription(F),
            this._setTextsContent(this._elements.description, F),
            this._options.addDescriptionTitle))
                for (var P = 0; P < this._elements.description.length; P++)
                    this._elements.description[P].setAttribute("title", F);
            if ((null != o.short_name || null != o.exchange) && t.short_name) {
                var E = t.short_name;
                "QUANDL" === t.exchange && void 0 !== t.short_name.split("/")[1] && (E = t.short_name.split("/")[1] + ", " + t.short_name.split("/")[0]),
                this.setShortName(E)
            }
            t["reference-last-period"] && this._elements.lastPeriod.length && Promise.all([s.e(43878), s.e(3844)]).then(s.bind(s, 800620)).then((e => {
                this._setTextsContent(this._elements.lastPeriod, e.periodFormatter(t["reference-last-period"]))
            }
            )),
            this._elements.lastPeriod.length && void 0 === t["reference-last-period"] && this._setTextsContent(this._elements.lastPeriod, "—"),
            this._setLastValue(o.last_price, o.minmove2, C),
            this._setNodesValue(this._textNodes.extHrsClose, o.rtc, C),
            o.rtc && this._highlighters.extHrsClose.show(o.rtc),
            o.industry && this._setTextsContent(this._elements.industry, t.industry, (t => t)),
            o.sector && this._setTextsContent(this._elements.sector, t.sector),
            this._elements.sessionStatus && o.current_session && (this._sessionStatusInstances ? this._sessionStatusInstances.forEach((t => t.setStatus(o.current_session))) : this._sessionStatusInstances = this._elements.sessionStatus.map((e => new h.MarketStatusIndicator({
                classSuffix: this._options.sessionStatusClassSuffix,
                el: e,
                short: !0,
                data: {
                    values: o
                },
                quoteSession: this.quoteSession,
                symbol: t.original_name,
                manualUpdate: !0,
                tooltipType: this._options.indicatorsTooltipType,
                sessionStatusIcon: this._options.sessionStatusIcon
            })))),
            this._setNodesValue(this._textNodes.open, o.open_price, C),
            this._setNodesValue(this._textNodes.high, o.high_price, C),
            this._setNodesValue(this._textNodes.low, o.low_price, C),
            this._setNodesValue(this._textNodes.eps, t.earnings_per_share_basic_ttm, w, !0),
            this._setNodesValue(this._textNodes.priceEarnings, t.price_earnings_ttm, w, !0),
            this._setNodesValue(this._textNodes.marketCap, t.market_cap_basic, T, !0),
            this._setNodesValue(this._textNodes.volume, t.volume, T, !0);
            const k = (0,
            _.prepareCurrencyValue)(o);
            if (k && this._setNodesValue(this._textNodes.currency, k, g.quoteTickerFormatCurrency, !0),
            (o.lp_time || t.lp_time) && this._textNodes.lastPriceTime.length && (this._timeFormatter && this._timeFormatter.lastPrice ? this._setNodesValue(this._textNodes.lastPriceTime, v(this._timeFormatter.lastPrice(t.lp_time, t.current_session), this._options.lastPriceTimeInBrackets)) : b.logError("last price time field requested with no formatter provided")),
            (o.last_release_date || t.last_release_date) && this._textNodes.lastReleaseDate.length && (this._timeFormatter && this._timeFormatter.lastReleaseDate ? this._setNodesValue(this._textNodes.lastReleaseDate, v(this._timeFormatter.lastReleaseDate(t.last_release_date, t.current_session), this._options.lastReleaseDateTimeInBrackets)) : b.logError("lastReleaseDate time field requested with no formatter provided")),
            (o.rtc_time || t.rtc_time) && this._textNodes.rtcTime.length && (this._timeFormatter && this._timeFormatter.rtc ? this._setNodesValue(this._textNodes.rtcTime, v(this._timeFormatter.rtc(t.rtc_time, t.current_session), this._options.rtcTimeInBrackets)) : b.logError("rtc time field requested with no formatter provided")),
            null != o.last_price)
                for (P = 0; P < this._elements.updateMode.length; P++)
                    this._elements.updateMode[P].classList.remove("i-hidden");
            this._elements.updateMode && (o.update_mode || o.update_mode_seconds) && (this._updateModeInstances ? this._updateModeInstances.forEach((e => e.update({
                values: t
            }))) : this._updateModeInstances = this._elements.updateMode.map((e => new d.DataModeIndicator({
                classSuffix: this._options.dataModeClassSuffix,
                el: e,
                data: {
                    values: t
                },
                modeInterval: t.update_mode_seconds,
                short: !0,
                tooltipType: this._options.indicatorsTooltipType
            })))),
            this._setStateHook && this._setStateHook(e.values, i.values, e.complete, this.getOptions()),
            this._lastPrice ? this._highlighters.last.show(t.last_price) : null === this._lastPrice && (this._container.classList.add("quote-ticker-inited"),
            "function" == typeof this._options.initedHook && this._options.initedHook("last_price"in t)),
            this._lastPrice = t.last_price
        }
        ,
        N.prototype._setNodesValue = function(t, e, s, i) {
            if (null != e || i)
                for (var o = "function" == typeof s ? s(e) : e, n = 0; n < t.length; n++)
                    t[n].nodeValue = o
        }
        ,
        N.prototype._setTextsContent = function(t, e, s) {
            if (t && t.length && e)
                for (var i = "function" == typeof s ? s(e) : e, o = 0; o < t.length; o++)
                    t[o].textContent = i
        }
        ,
        N.prototype._setLastValue = function(t, e, s) {
            if (null == t)
                return;
            const i = "function" == typeof s ? s(t) : String(t);
            if (i === this._lastPriceFormatted)
                return;
            const [o,n,a] = this._options.lastPriceHighlightDiffOnly ? this._getLastValueStringDiff(this._lastPriceFormatted, i) : ["", i, ""]
              , r = o
              , l = this._calculatePipetteDigits(e)
              , [c,h] = this._options.lastPriceLastCharSup && l ? [n.slice(0, -l), n.slice(-l)] : [n, ""];
            this._options.lastPriceHighlightDiffOnly && (this._isVolumeFormat && this._changeVolumeLetter.call(this, a),
            this._setNodesValue(this._textNodes.last, r)),
            this._setNodesValue(this._textNodes.lastHighlight, c),
            this._setNodesValue(this._textNodes.lastSup, h),
            this._lastPriceFormatted = i
        }
        ,
        N.prototype._getChangeVolumeLetterCallback = function() {
            let t;
            return function(e) {
                e !== t && (t = e,
                this._elements.last.forEach((e => {
                    3 !== e.childNodes.length ? e.appendChild(document.createTextNode(t)) : e.childNodes[2].nodeValue = t
                }
                )))
            }
        }
        ,
        N.prototype._getLastValueStringDiff = function(t, e) {
            if (t === e) {
                const [t,s] = C(e);
                return [t, "", s]
            }
            let s = 0;
            for (; t[s] === e[s]; )
                s++;
            const [i,o] = C(e.slice(s));
            return [e.slice(0, s), i, o]
        }
        ,
        N.prototype._calculatePipetteDigits = function(t) {
            return t && t !== this._lastMinMove && (this._lastMinMove = t),
            this._lastMinMove ? ("" + this._lastMinMove).length - 1 : 0
        }
        ,
        N.prototype._setChangeFontColor = function(t, e, s, i, o) {
            for (var n = r.PriceColorer.formatSign(e, {
                up: s,
                down: i,
                neutral: o
            }), a = 0; a < t.length; a++)
                t[a].style.color = n
        }
        ,
        N.prototype._setChangeDirection = function(t, e) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s].classList;
                i.toggle(this._options.changeDirectionUpClass, e > 0),
                i.toggle(this._options.changeDirectionDownClass, e < 0),
                i.toggle(this._options.changeDirectionNeutralClass, 0 === e)
            }
        }
        ,
        N.prototype.setShortName = function(t="") {
            this._setTextsContent(this._elements.shortName, t)
        }
        ,
        N.prototype._prepareSymbolDescription = function(t) {
            var e = this._getCache("symbol-description:" + t);
            return e || (e = t,
            this._setCache("symbol-description:" + t, e),
            e)
        }
        ,
        N.prototype._initHighlighters = function() {
            this._highlighters.last = new S(this._elements.lastHighlight,this._options.growingBg,this._options.fallingBg,this._options.lastGrowingClass,this._options.lastFallingClass),
            this._highlighters.extHrsClose = new S(this._elements.extHrsClose,this._options.growingBg,this._options.fallingBg,this._options.lastGrowingClass,this._options.lastFallingClass)
        }
        ,
        N.prototype.disable = function() {
            this.enabled = !1,
            this.disconnect()
        }
        ,
        N.prototype.enable = function() {
            this.enabled = !0,
            this.connect()
        }
        ,
        N.prototype.setStateHook = function(t) {
            null === t && this._setStateHook ? delete this._setStateHook : "function" == typeof t && (this._setStateHook = t)
        }
        ,
        N.prototype._setCache = function(t, e) {
            null == e ? delete this._cache[t] : this._cache[t] = e
        }
        ,
        N.prototype._getCache = function(t) {
            return this._cache && this._cache[t]
        }
        ,
        N.prototype.getOptions = function() {
            return this._options
        }
    }
    ,
    904207: (t, e, s) => {
        "use strict";
        s.d(e, {
            getTranslatedSymbolDescription: () => n
        });
        var i = s(444372);
        function o(t) {
            const e = `#${t}-symbol-description`
              , o = i.t(e, void 0, s(956316));
            return o === e ? null : o
        }
        function n(t) {
            if (void 0 !== t.pro_name) {
                const e = o(t.pro_name);
                if (null !== e)
                    return e;
                if (void 0 !== t.short_name) {
                    const e = o(t.short_name);
                    if (null !== e)
                        return e
                }
            }
            return "en" !== t.language && void 0 !== t.local_description && t.language === window.language || "en" === t.language && void 0 !== t.local_description && t.language === window.language ? t.local_description : t.description || ""
        }
    }
    ,
    927435: (t, e, s) => {
        "use strict";
        s.d(e, {
            prepareCurrencyValue: () => o
        });
        var i = s(444372);
        function o(t) {
            let e = [];
            const o = function(t) {
                switch (t) {
                case "PCT":
                    return "%";
                case "PCTPAR":
                    return i.t(null, {
                        context: "_max_len_9"
                    }, s(46374));
                case "PCTGDP":
                    return i.t(null, {
                        context: "_max_len_9"
                    }, s(421685));
                default:
                    return t
                }
            }(t.currency_code || t.value_unit_id || "");
            switch (t.measure) {
            case "price":
            case "unit":
                e = [o, t.unit_id];
                break;
            default:
                e = [o]
            }
            return e.filter(Boolean).join(" / ")
        }
    }
    ,
    982528: (t, e, s) => {
        "use strict";
        function i(t) {
            t.preventDefault()
        }
        s.d(e, {
            preventDefault: () => i,
            preventDefaultForContextMenu: () => n
        });
        const o = ["input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="search"]', 'input[type="number"]', 'input[type="url"]', "textarea", "a[href]", '*[contenteditable="true"]', "[data-allow-context-menu]"];
        function n(t) {
            const e = t.target;
            e && !e.closest(o.join(", ")) && t.preventDefault()
        }
    }
}]);
