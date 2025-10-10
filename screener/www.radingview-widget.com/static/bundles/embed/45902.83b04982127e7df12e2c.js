"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[45902], {
    978956: (e, t, i) => {
        i.d(t, {
            Delegate: () => _
        });
        const o = (0,
        i(735566).getLogger)("Common.Delegate");
        function r(e) {
            return !e.singleShot
        }
        class _ {
            constructor() {
                this.fire = this._fireImpl.bind(this),
                this._listeners = []
            }
            subscribe(e, t, i) {
                this._listeners.push({
                    object: e,
                    member: t,
                    singleShot: !!i,
                    skip: !1
                })
            }
            unsubscribe(e, t) {
                for (let i = 0; i < this._listeners.length; ++i) {
                    const o = this._listeners[i];
                    if (o.object === e && o.member === t) {
                        o.skip = !0,
                        this._listeners.splice(i, 1);
                        break
                    }
                }
            }
            unsubscribeAll(e) {
                for (let t = this._listeners.length - 1; t >= 0; --t) {
                    const i = this._listeners[t];
                    i.object === e && (i.skip = !0,
                    this._listeners.splice(t, 1))
                }
            }
            destroy() {
                this._listeners = []
            }
            _fireImpl(...e) {
                const t = this._listeners;
                this._listeners = this._listeners.filter(r);
                const i = t.length;
                for (let r = 0; r < i; ++r) {
                    const i = t[r];
                    if (!i.skip)
                        try {
                            i.member.apply(i.object || null, e)
                        } catch (e) {
                            o.logError(`${e && (e.stack || e.message)}`)
                        }
                }
            }
        }
    }
    ,
    900608: (e, t, i) => {
        i.d(t, {
            guid: () => _,
            randomHash: () => s,
            randomHashN: () => a
        });
        const o = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
          , r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        function _() {
            return o.replace(/[xy]/g, (e => {
                const t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            }
            ))
        }
        function s() {
            return a(12)
        }
        function a(e) {
            let t = "";
            for (let i = 0; i < e; ++i) {
                const e = Math.floor(Math.random() * r.length);
                t += r[e]
            }
            return t
        }
    }
    ,
    405942: (e, t, i) => {
        i.d(t, {
            numOfDecimalPlaces: () => _
        });
        var o = i(960521)
          , r = i.n(o);
        function _(e) {
            return (new (r())(e).toFixed().split(".")[1] || "").length
        }
    }
    ,
    954992: (e, t, i) => {
        function o(e, t, i) {
            if (t(e.value()))
                return void i();
            const o = r => {
                t(r) && (e.unsubscribe(o),
                i())
            }
            ;
            e.subscribe(o, {
                callWithLast: !0
            })
        }
        i.d(t, {
            callWhen: () => o
        })
    }
    ,
    372988: (e, t, i) => {
        i.r(t),
        i.d(t, {
            getNewPeveCloseMode: () => _,
            setNewPrevCloseMode: () => r
        });
        let o = !1;
        function r(e) {
            o = e
        }
        function _() {
            return o
        }
    }
    ,
    659863: (e, t, i) => {
        new class {
            constructor(e, t) {
                this._test = e[t] = {}
            }
            provide(e, t) {
                this._test[e] = t
            }
        }
        (window,"qaGlobals")
    }
    ,
    175203: (e, t, i) => {
        i.d(t, {
            telemetry: () => c
        });
        var o = i(547465)
          , r = i(803912)
          , _ = i(638456)
          , s = i(314802);
        i(659863);
        const a = (0,
        i(735566).getLogger)("Common.Telemetry")
          , n = {
            default: 15e3,
            site: 3e5
        }
          , l = ["before_websocket_connection_time_frame", "websocket_connection_time_frame", "first_series_full_time_frame", "page_full_load_time_frame", "page_load_time_frame"];
        const c = new class {
            constructor() {
                this.reportSent = new o.Delegate,
                this.timeCounters = {
                    series: {
                        marks: []
                    },
                    study: {},
                    pine: {}
                },
                this._timeoutIds = {},
                this._commonAdditionalData = {
                    cluster: null,
                    userId: "0"
                },
                this._reportStash = {}
            }
            setSessionInfo(e) {
                const t = this._parseCluster(e);
                null !== t && (this._commonAdditionalData.cluster = t)
            }
            sendReport(e, t, i) {
                if (!this._isAbleToSendReport(t))
                    return;
                const o = this._getSubserviceType(e)
                  , r = this._getHost(e, o);
                if (null !== r) {
                    if (i = void 0 === i ? {
                        count: 1
                    } : i,
                    this._addReportToStash(i, t, r),
                    !this._timeoutIds[e]) {
                        const t = n[e] ?? n.default;
                        this._timeoutIds[e] = setTimeout(this._sendTelemetryToService.bind(this, e, r), t)
                    }
                } else
                    a.logError(`Unable to get host for counter: ${t}, metric type: ${e}, serivce type: ${o}`)
            }
            sendChartReport(e, t, i=!0) {
                this._sendServiceSpecifiedReport("charts", e, t, i)
            }
            sendLineToolsStorageReport(e, t, i=!0) {
                this._sendServiceSpecifiedReport("line_tools_storage", e, t, i)
            }
            _sendServiceSpecifiedReport(e, t, i, o=!0) {
                this._updateUserInfo(),
                i = void 0 === i ? {
                    count: 1
                } : i,
                o && (i = this._appendCommonAdditionalInfo(i, ["cluster", "userId"])),
                this.sendReport(e, t, i)
            }
            _updateUserInfo() {
                const e = "user"in window && "id"in window.user ? window.user.id : "0";
                this._commonAdditionalData.userId = String(e)
            }
            _isAbleToSendReport(e) {
                const t = window.TELEMETRY_HOSTS
                  , i = l.includes(e)
                  , o = Boolean(window.TradingView?.onChartPage || (0,
                _.onWidget)());
                return t && (!i || o)
            }
            _sendTelemetryToService(e, t) {
                if (this._reportStash.hasOwnProperty(t)) {
                    const e = this._cropParams(this._reportStash[t])
                      , i = this._renameAllParams(e)
                      , o = {
                        event: "report_stash",
                        params: this._cleanAllParams(i)
                    };
                    a.logDebug(`Report to host: ${t}; stash: ${JSON.stringify(this._reportStash[t])}`),
                    this.reportSent.fire(this._reportStash[t]),
                    delete this._reportStash[t],
                    (0,
                    r.fetch)(`${t}/report`, {
                        method: "POST",
                        body: JSON.stringify(o)
                    })
                }
                this._timeoutIds[e] = null
            }
            _getHost(e, t) {
                const i = window.TELEMETRY_HOSTS
                  , o = i[e] && i[e][t];
                return Boolean(o) ? o : null
            }
            _getSubserviceType(e) {
                if (!["charts", "site"].includes(e))
                    return "all";
                let t = "free";
                const i = window.user.is_pro;
                return "charts" === e && (0,
                s.isOnMobileAppPage)("old") ? t = i ? "ios_pro" : "ios_free" : "charts" === e && (0,
                s.isOnMobileAppPage)("new") ? t = i ? "android_pro" : "android_free" : (0,
                _.onWidget)() ? t = "widget" : i && (t = "pro"),
                t
            }
            _parseCluster(e) {
                let t;
                try {
                    t = JSON.parse(e).session_id
                } catch (e) {
                    return a.logError("Could not parse cluster id (session id)"),
                    null
                }
                const i = /(.*@)(.*)/gi.exec(t);
                return null !== i && i.length >= 3 ? i[2] : null
            }
            _appendCommonAdditionalInfo(e, t) {
                return t.forEach((t => {
                    t in this._commonAdditionalData && (e.additional = e.additional || {},
                    e.additional[t] = this._commonAdditionalData[t])
                }
                )),
                e
            }
            _cropParams(e) {
                for (const t in e)
                    e.hasOwnProperty(t) && e[t].length > 1e3 && (e.too_much_metrics_frame = e.too_much_metrics_frame ?? [],
                    e.too_much_metrics_frame.push({
                        value: e[t].length,
                        additional: {
                            event: t
                        }
                    }),
                    delete e[t]);
                return e
            }
            _renameAllParams(e) {
                const t = {};
                for (const i in e)
                    e.hasOwnProperty(i) && (t[i] = [],
                    e[i].forEach((e => {
                        t[i].push(this._renameEntryParams(e))
                    }
                    )));
                return t
            }
            _renameEntryParams(e) {
                const t = {
                    count: "c",
                    value: "v",
                    text: "t",
                    additional: "a"
                };
                return Object.keys(e).reduce(( (i, o) => (i[t[o]] = e[o],
                i)), {})
            }
            _cleanAllParams(e) {
                const t = {};
                for (const i in e)
                    if (e.hasOwnProperty(i)) {
                        t[i] = [];
                        const o = {
                            c: 0
                        };
                        e[i].forEach((e => {
                            const r = this._cleanEntryParams(e)
                              , _ = Object.keys(r).length;
                            1 === _ && void 0 !== r.c ? o.c += r.c : _ > 0 && t[i].push(r)
                        }
                        )),
                        o.c > 0 && t[i].push(o),
                        0 === t[i].length && delete t[i]
                    }
                return t
            }
            _cleanEntryParams(e) {
                const t = Object.keys(e).reduce(( (t, i) => "c" !== i && "t" !== i || e[i] ? (t[i] = e[i],
                t) : t), {});
                return "c"in t || "v"in t || "t"in t ? t : {}
            }
            _addReportToStash(e, t, i) {
                i in this._reportStash || (this._reportStash[i] = {}),
                t in this._reportStash[i] || (this._reportStash[i][t] = []),
                Object.keys(e).length > 0 && this._reportStash[i][t].push(e)
            }
        }
    }
    ,
    288533: (e, t, i) => {
        e = i.nmd(e);
        var o = i(920057).default
          , r = i(290484).default
          , _ = i(89831).PriceFormatter;
        const {uniq: s} = i(999102);
        var a = i(623213);
        const {normalizeUpdateMode: n} = i(761637);
        var l = i(144731).deepExtend;
        const {QUOTE_FIELDS_CACHE: c, QUOTE_FIELDS: d} = i(645778);
        var m = i(547465).Delegate;
        const {getNewPeveCloseMode: u} = i(372988)
          , {QuoteSession: p} = i(332906);
        function h(e, t) {
            this.options = Object.assign({
                throttleTimeout: 125
            }, t),
            this._connected = !1,
            this._symbol_data = {},
            this._subscriptions = {},
            this.onConnect = new m,
            this.onDisconnect = new m,
            this._quoteApi = new p(window.ChartApiInstance),
            this._type = e || "full",
            this._delayUpdateFastSymbols = r(this._updateFastSymbols, 250),
            this._throttledSymbolData = {},
            this._formatterValuesCache = {},
            this._waitingForFormatters = {},
            this._snapshotValuesCache = {},
            this._waitingForSnapshot = {},
            this.connect()
        }
        h.prototype.destroy = function() {
            this._quoteApi.destroy(),
            this._quoteApi = null,
            this._connected = !1,
            this.onDisconnect.fire()
        }
        ,
        h.prototype.typeFields = {},
        h.prototype.typeFields.simple = ["base-currency-logoid", "ch", "chp", "currency-logoid", "currency_code", "currency_id", "base_currency_id", "current_session", "description", "exchange", "format", "fractional", "is_tradable", "language", "local_description", "listed_exchange", "logoid", "lp", "lp_time", "minmov", "minmove2", "original_name", "pricescale", "pro_name", "short_name", "type", "typespecs", "update_mode", "volume", "variable_tick_size", "value_unit_id", "unit_id", "measure"],
        h.prototype.typeFields.simpleDetailed = [].concat(h.prototype.typeFields.simple, ["ask", "bid", "fundamentals", "high_price", "is_tradable", "low_price", "open_price", "prev_close_price", "rch", "rchp", "rtc", "rtc_time", "status", "basic_eps_net_income", "beta_1_year", "earnings_per_share_basic_ttm", "industry", "market_cap_basic", "price_earnings_ttm", "sector", "volume", "dividends_yield", "timezone"]),
        h.prototype.typeFields.full = [],
        h.prototype.typeFields.watchlist = [].concat(h.prototype.typeFields.simple, ["rchp", "rtc", "country_code", "provider_id", "dividends_availability", "financials_availability", "earnings_availability"]),
        h.prototype.typeFields.portfolio = ["pro_name", "short_name", "exchange", "listed_exchange", "description", "local_description", "language", "sector", "type", "typespecs", "industry", "currency_code", "currency_id", "ch", "chp", "logoid", "currency-logoid", "base-currency-logoid", "earnings_per_share_forecast_next_fq", "earnings_release_next_date", "earnings_release_date", "earnings_per_share_fq", "lp", "fractional", "minmov", "minmove2", "pricescale", "volume", "average_volume", "market_cap_calc", "market_cap_basic", "total_revenue", "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year", "dps_common_stock_prim_issue_fy", "dividends_yield", "fundamental_currency_code", "rates_mc", "rates_fy", "rates_ttm", "format", "value_unit_id", "unit_id", "measure"],
        h.prototype.typeFields.notes = ["short_name", "pro_name", "logoid", "currency-logoid", "base-currency-logoid", "symbol-primaryname", "type", "typespecs"],
        h.prototype.typeFields.estimates = ["fundamental_data", "type", "typespecs", "earnings_per_share_forecast_next_symbol_currency_fq", "earnings_release_next_aligned_date", "earnings_release_next_calendar_date", "earnings_release_next_date"],
        h.prototype.typeFields.economic = ["reference-last-period", "lp", "currency_code", "value_unit_id", "unit_id", "measure"],
        h.prototype.typeFields.options = ["ask", "bid", "lp", "volume"],
        h.prototype.connect = function(e) {
            this._quoteApi.connect(this.quoteHandler.bind(this))
        }
        ,
        h.prototype.quoteHandler = function(e) {
            var t = e.method
              , i = e.params;
            switch (t) {
            case "connected":
                this._connected || (this._connected = !0,
                this.onConnected());
                break;
            case "quote_list_fields":
                break;
            case "quote_symbol_data":
                this._connected && this.onSymbolData(i[0]);
                break;
            case "quote_completed":
                this._connected && this.onSymbolData({
                    symbolname: i[0],
                    complete: performance.now(),
                    values: {}
                });
                break;
            case "disconnected":
                this._connected && (this._connected = !1,
                this.onDisconnect.fire())
            }
        }
        ,
        h.prototype.onConnected = function() {
            this.setFields();
            var e = Object.keys(this._symbol_data);
            e.length && (this._quoteApi.quoteAddSymbols(e),
            this._delayUpdateFastSymbols()),
            this.onConnect.fire()
        }
        ,
        h.prototype.setFields = function() {
            var e = h.prototype.typeFields[this._type];
            e && e.length && this._quoteApi.quoteSetFields(e)
        }
        ,
        h.prototype.onSymbolData = function(e) {
            try {
                e.status && c.update(e, d, !1)
            } catch (e) {}
            var t = e.symbolname
              , i = this._throttledSymbolData[t];
            u() && (delete e.values.prev_close_price,
            void 0 !== e.values.regular_close && (e.values.prev_close_price = e.values.regular_close)),
            i || (i = this._throttledSymbolData[t] = {
                fnDispatch: o(this.dipatchSymbolData.bind(this), this.options.throttleTimeout)
            }),
            i.cache ? l(i.cache, e) : i.cache = e,
            i.fnDispatch(t)
        }
        ,
        h.prototype._parseUpdateMode = function(e) {
            n(e)
        }
        ,
        h.prototype.dipatchSymbolData = function(e) {
            var t = this._symbol_data[e]
              , i = this._throttledSymbolData[e].cache;
            if (delete this._throttledSymbolData[e].cache,
            this._symbol_data[e])
                for (var o in l(t, i),
                t.values && this._parseUpdateMode(t.values),
                this._subscriptions) {
                    var r = this._subscriptions[o];
                    r.has(e) && [...r.get(e)].forEach((function(e) {
                        e(t, i)
                    }
                    ))
                }
        }
        ,
        h.prototype.subscribe = function(e, t, i) {
            this._subscriptions[e] = this._subscriptions[e] || new Map;
            var o = this._subscriptions[e];
            t = [].concat(t);
            var r = [];
            t.forEach((function(e) {
                this._symbol_data[e] ? o && o.has(e) || this._symbol_data[e].subscribers_count++ : (this._symbol_data[e] = {
                    subscribers_count: 1
                },
                r.push(e)),
                o.has(e) || o.set(e, []),
                o.get(e).push(i),
                o.get(e).fast = !0,
                this._symbol_data[e] && this._symbol_data[e].values && i(this._symbol_data[e], this._symbol_data[e])
            }
            ), this),
            r.length && this._connected && (this._quoteApi.quoteAddSymbols(r),
            this._delayUpdateFastSymbols())
        }
        ,
        h.prototype.unsubscribe = function(e, t, i) {
            t = [].concat(t);
            for (var o = this._subscriptions[e], r = [], _ = 0; _ < t.length; _++) {
                var s = t[_];
                if (o)
                    if (o.has(s) && i) {
                        var a = o.get(s).indexOf(i);
                        ~a && o.get(s).splice(a, 1),
                        o.get(s).length || o.delete(s)
                    } else
                        o.delete(s);
                o && 0 === o.size && delete this._subscriptions[e],
                this._symbol_data.hasOwnProperty(s) && (o && !o.has(s) && this._symbol_data[s].subscribers_count--,
                this._symbol_data[s].subscribers_count || (delete this._symbol_data[s],
                r.push(s)))
            }
            r.length && this._connected && (this._quoteApi.quoteRemoveSymbols(r),
            this._delayUpdateFastSymbols())
        }
        ,
        h.prototype.setFastSymbols = function(e, t) {
            if (this._subscriptions[e])
                for (var i = this._subscriptions[e], o = Array.from(i.keys()), r = 0; r < o.length; ++r) {
                    var _ = o[r];
                    i.get(_).fast = -1 !== t.indexOf(_)
                }
            this._delayUpdateFastSymbols()
        }
        ,
        h.prototype._updateFastSymbols = function() {
            if (this._connected) {
                var e = this._fastSymbols();
                0 === e.length ? this._quoteApi.quoteHibernateAll() : this._quoteApi.quoteFastSymbols(e)
            }
        }
        ,
        h.prototype._delayUpdateFastSymbols = h.prototype._updateFastSymbols,
        h.prototype._fastSymbols = function() {
            var e = [];
            for (var t in this._subscriptions)
                for (var i = this._subscriptions[t], o = Array.from(i.keys()), r = 0; r < o.length; ++r) {
                    var _ = o[r];
                    i.get(_).fast && e.push(_)
                }
            return e = s(e)
        }
        ,
        h.prototype.formatter = function(e, t) {
            var i = this;
            if (this._waitingForFormatters[e])
                return this._waitingForFormatters[e];
            function o(e) {
                var i = t && !e.fractional ? 1 : e.minmov;
                return new _({
                    priceScale: e.pricescale,
                    minMove: i,
                    fractional: e.fractional,
                    minMove2: e.minmove2
                })
            }
            var r = new Promise((function(t, r) {
                if (i._formatterValuesCache[e])
                    t(o(i._formatterValuesCache[e]));
                else {
                    var _ = a.guid();
                    i.subscribe(_, [e], (function(s) {
                        "error" === s.status && (i._waitingForFormatters[e] = null,
                        r("Quotes snapshot is not received")),
                        function(e) {
                            return e && null != e.pricescale && null != e.minmov
                        }(s.values) && (i._waitingForFormatters[e] = null,
                        i._formatterValuesCache[e] = s.values,
                        t(o(s.values)),
                        i.unsubscribe(_, e))
                    }
                    ))
                }
            }
            ));
            return this._waitingForFormatters[e] = r,
            r
        }
        ,
        h.prototype.snapshot = function(e) {
            var t = this;
            if (this._waitingForSnapshot[e])
                return this._waitingForSnapshot[e];
            var i = new Promise((function(i, o) {
                if (t._snapshotValuesCache[e])
                    i(t._snapshotValuesCache[e]);
                else {
                    var r = a.guid();
                    t.subscribe(r, [e], (function(_) {
                        "error" === _.status && (t._waitingForSnapshot[e] = null,
                        o("Quotes snapshot is not received"));
                        var s = _.values;
                        s && s.minmov && s.pricescale && s.description && (t._waitingForSnapshot[e] = null,
                        t._snapshotValuesCache[e] = s,
                        i(s),
                        t.unsubscribe(r, e))
                    }
                    ))
                }
            }
            ));
            return this._waitingForSnapshot[e] = i,
            i
        }
        ,
        window.TradingView = window.TradingView || {},
        window.TradingView.QuoteSessionMultiplexer = h,
        e && e.exports && (e.exports = h)
    }
    ,
    781441: (e, t, i) => {
        i.d(t, {
            formatNumber: () => s,
            parseNumber: () => n
        });
        var o = i(960521)
          , r = i(259332)
          , _ = i(969680);
        function s(e, t, i, r, _) {
            if (!Number.isFinite(e))
                return `${e}`;
            const s = -1 === Math.sign(e) ? "-" : "";
            e = Math.abs(e);
            let a = void 0 === i ? e.toString() : e.toFixed(i);
            if (a.includes("e")) {
                if (!r)
                    return `${s}${a.replace(".", t.decimalSign)}`;
                {
                    const i = new o.Big(e);
                    if (a = i.lt(1) ? i.toFixed() : i.toString(),
                    a.includes("e"))
                        return `${s}${a.replace(".", t.decimalSign)}`
                }
            }
            const n = a.split(".")
              , l = n[0];
            let c = n[1];
            const d = function(e, t) {
                let i = e.length;
                const o = [];
                for (; i > 0; )
                    o.unshift(e.slice(Math.max(i - 3, 0), i)),
                    i -= 3;
                return o.join(t)
            }(l, t.groupingSeparator);
            return void 0 !== i && (c = 0 === i ? void 0 : e.toFixed(i).slice(-i)),
            void 0 !== _ && void 0 !== c && (c = function(e, t) {
                let i = e.length - 1;
                for (let o = i; o >= t && "0" === e[o]; o -= 1)
                    i -= 1;
                return e.slice(0, i + 1)
            }(c, _)),
            c ? `${s}${d}${t.decimalSign}${c}` : `${s}${d}`
        }
        const a = (0,
        r.default)((e => {
            const t = e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            return new RegExp(t,"gm")
        }
        ));
        function n(e, t) {
            if (/^(NaN|[+|-]?Infinity)$/.test(e))
                return parseFloat(e);
            e = (0,
            _.stripLTRMarks)(e);
            const i = a(t.groupingSeparator);
            return i && (e = e.replace(i, "")),
            e = e.replace(t.decimalSign, "."),
            /^(\+|-)?\d+(\.\d+|\.)?(e(\+|-)?\d+)?$/.test(e) ? parseFloat(e) : NaN
        }
    }
    ,
    976531: (e, t, i) => {
        let o;
        i.d(t, {
            formatterOptions: () => r,
            getNumberFormat: () => c
        });
        const r = {
            decimalSign: ".",
            decimalSignFractional: "'"
        };
        const _ = {
            groupingSeparator: ",",
            decimalSign: "."
        }
          , s = {
            groupingSeparator: ".",
            decimalSign: ","
        }
          , a = {
            groupingSeparator: " ",
            decimalSign: ","
        }
          , n = {
            groupingSeparator: "",
            decimalSign: "."
        }
          , l = new Map([["en", _], ["th", _], ["ja", _], ["ko", _], ["zh", _], ["zh_TW", _], ["ar", _], ["he_IL", _], ["ms_MY", _], ["vi", _], ["de", s], ["es", s], ["it", s], ["tr", s], ["pt", s], ["id_ID", s], ["fr", a], ["pl", a], ["ru", a]]);
        function c(e) {
            if (e)
                return {
                    decimalSign: r.decimalSign,
                    groupingSeparator: ""
                };
            const t = o || window.language || "";
            return l.get(t) ?? n
        }
    }
    ,
    618648: (e, t, i) => {
        i.d(t, {
            DecimalPriceFormatterImpl: () => c
        });
        var o = i(960521)
          , r = i(735566)
          , _ = i(47522)
          , s = i(781441)
          , a = i(909456)
          , n = i(976531);
        const l = (0,
        r.getLogger)("Chart.DecimalPriceFormatter");
        class c extends _.PriceFormatterImplementationBase {
            constructor(e) {
                super(e);
                const {minMove2: t, ignoreLocaleNumberFormat: i, noExponentialForm: o} = e;
                void 0 !== t && 10 !== t && 0 !== t && 1 !== t && l.logDebug("invalid minmove2"),
                this._ignoreLocaleNumberFormat = i,
                this._noExponentialForm = o
            }
            hasForexAdditionalPrecision() {
                return 10 === this._minMove2
            }
            _parseUnsigned(e, t) {
                return this._parseAsDecimal(e, t)
            }
            _formatUnsigned(e, t) {
                const {tailSize: i, cutFractionalByPrecision: o=!1, variableMinTickDataPrice: r, ignoreLocaleNumberFormat: s, noExponentialForm: a, removeAllEndingZeros: n=!1} = t
                  , l = {
                    price: Math.abs(e),
                    priceScale: this._priceScale,
                    minMove: this._minMove,
                    fractionalLength: this._fractionalLength,
                    tailSize: i,
                    cutFractionalByPrecision: o,
                    ignoreLocaleNumberFormat: s,
                    noExponentialForm: a,
                    removeAllEndingZeros: n
                };
                return void 0 !== this._variableMinTickData && (Object.assign(l, (0,
                _.variableMinTickParamsByPrice)(!1, this._variableMinTickData, r ?? l.price)),
                this._ignoreMinMove && (l.minMove = 1)),
                this._formatAsDecimal(l)
            }
            _formatAsDecimal(e) {
                const {price: t, priceScale: i, minMove: r, fractionalLength: _=0, tailSize: l=0, cutFractionalByPrecision: c, ignoreLocaleNumberFormat: d=this._ignoreLocaleNumberFormat, noExponentialForm: m=this._noExponentialForm, removeAllEndingZeros: u} = e
                  , p = (0,
                n.getNumberFormat)(d);
                if (t >= 1e21 && !m)
                    return t.toString().replace(".", p.decimalSign);
                const h = Math.pow(10, l) * i / (c ? 1 : r)
                  , g = 1 / h;
                let b;
                if (h > 1)
                    b = Math.floor(t);
                else {
                    const e = Math.floor(Math.round(t / g) * g);
                    b = 0 === Math.round((t - e) / g) ? e : e + g
                }
                let y = "";
                if (h > 1) {
                    let e = c ? new o.Big(t).mul(h).round(void 0, 0).minus(new o.Big(b).mul(h)).toNumber() : parseFloat((Math.round(t * h) - b * h).toFixed(_));
                    e >= h && (e -= h,
                    b += 1),
                    e = c ? new o.Big(e).round(_, 0).toNumber() : parseFloat(e.toFixed(_)) * r;
                    const i = (0,
                    a.numberToStringWithLeadingZero)(e, _ + l);
                    if (!m && t < 1 && _ >= 10 && i.startsWith("0000")) {
                        let e = 4;
                        for (let t = e; t < i.length && "0" === i[t]; t++)
                            e++;
                        const t = this._removeEndingZeros(i.slice(e), _);
                        return "" === t ? "0" : `0${p.decimalSign}${t}e-${e}`
                    }
                    const s = this._removeEndingZeros(i, u ? i.length : l);
                    y = s ? p.decimalSign + s : s
                }
                const f = (0,
                s.formatNumber)(b, p, void 0, m);
                return f.includes("e") ? f : f + y
            }
            _parseAsDecimal(e, t={}) {
                const {ignoreLocaleNumberFormat: i} = t
                  , o = (0,
                n.getNumberFormat)(this._ignoreLocaleNumberFormat || i)
                  , r = (0,
                s.parseNumber)(e, o);
                return Number.isFinite(r) ? {
                    value: r,
                    res: !0,
                    suggest: this.formatImpl(r)
                } : {
                    error: this._formatterErrors.custom,
                    res: !1
                }
            }
        }
    }
    ,
    803431: (e, t, i) => {
        i.d(t, {
            FractionalPriceFormatterImpl: () => l
        });
        var o = i(650151)
          , r = i(735566)
          , _ = i(47522)
          , s = i(909456)
          , a = i(976531);
        const n = (0,
        r.getLogger)("Chart.FractionalPriceFormatter");
        class l extends _.PriceFormatterImplementationBase {
            constructor(e) {
                super(e);
                const {minMove2: t} = e;
                null != t && t > 0 && 2 !== t && 4 !== t && 8 !== t && n.logDebug("invalid minmove2")
            }
            hasForexAdditionalPrecision() {
                return !1
            }
            _parseUnsigned(e) {
                return this._minMove2 ? this._parseAsDoubleFractional(e) : this._parseAsSingleFractional(e)
            }
            _formatUnsigned(e, t) {
                const {tailSize: i, variableMinTickDataPrice: r} = t
                  , s = {
                    price: Math.abs(e),
                    priceScale: this._priceScale,
                    minMove: this._minMove,
                    minMove2: this._minMove2,
                    fractionalLength: (0,
                    o.ensureDefined)(this._fractionalLength),
                    tailSize: i
                };
                return void 0 !== this._variableMinTickData && Object.assign(s, (0,
                _.variableMinTickParamsByPrice)(!0, this._variableMinTickData, r ?? s.price)),
                this._formatAsFractional(s)
            }
            _parseAsSingleFractional(e) {
                let t = _.intRegexp.exec(e);
                if (t) {
                    const t = parseFloat(e);
                    return {
                        value: t,
                        res: !0,
                        suggest: this.formatImpl(t)
                    }
                }
                if (t = new RegExp("^(-?)([0-9]+)\\" + a.formatterOptions.decimalSignFractional + "([0-9]+)$").exec(e),
                t) {
                    const e = !!t[1]
                      , i = parseInt(t[2])
                      , o = this._priceScale
                      , r = this._patchFractPart(parseInt(t[3]), 1, o);
                    if (r >= o || r < 0)
                        return {
                            error: this._formatterErrors.fraction,
                            res: !1
                        };
                    let _ = i + r / o;
                    return e && (_ = -_),
                    {
                        value: _,
                        res: !0,
                        suggest: this.formatImpl(_)
                    }
                }
                return {
                    error: this._formatterErrors.custom,
                    res: !1
                }
            }
            _parseAsDoubleFractional(e) {
                let t = _.intRegexp.exec(e);
                if (t) {
                    const t = parseFloat(e);
                    return {
                        value: t,
                        res: !0,
                        suggest: this.formatImpl(t)
                    }
                }
                if (t = new RegExp("^(-?)([0-9]+)\\" + a.formatterOptions.decimalSignFractional + "([0-9]+)\\" + a.formatterOptions.decimalSignFractional + "([0-9]+)$").exec(e),
                t) {
                    const e = !!t[1]
                      , i = parseInt(t[2])
                      , o = void 0 !== this._minMove2 && null !== this._minMove2 ? this._minMove2 : NaN
                      , r = this._priceScale / o
                      , _ = this._minMove2
                      , s = this._patchFractPart(parseInt(t[3]), 1, r)
                      , a = this._patchFractPart(parseInt(t[4]), 2, _);
                    if (s >= r || s < 0)
                        return {
                            error: this._formatterErrors.fraction,
                            res: !1
                        };
                    if (null != _ && a >= _ || a < 0)
                        return {
                            error: this._formatterErrors.secondFraction,
                            res: !1
                        };
                    let n = null != _ ? i + s / r + a / (r * _) : NaN;
                    return e && (n = -n),
                    {
                        value: n,
                        res: !0,
                        suggest: this.formatImpl(n)
                    }
                }
                return {
                    error: this._formatterErrors.custom,
                    res: !1
                }
            }
            _patchFractPart(e, t, i) {
                const o = {
                    0: 0,
                    5: 1
                }
                  , r = {
                    0: 0,
                    2: 1,
                    5: 2,
                    7: 3
                }
                  , _ = {
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    5: 4,
                    6: 5,
                    7: 6,
                    8: 7
                };
                return 2 === i ? void 0 === o[e] ? -1 : o[e] : 4 === i ? void 0 === r[e] ? -1 : r[e] : 8 === i && 2 === t ? void 0 === _[e] ? -1 : _[e] : e
            }
            _formatAsFractional(e) {
                const {price: t, tailSize: i, priceScale: o, minMove: r, minMove2: _, fractionalLength: n} = e
                  , l = o / r;
                let c = Math.floor(t)
                  , d = i ? Math.floor(t * l) - c * l : Math.round(t * l) - c * l;
                d === l && (d = 0,
                c += 1);
                let m = "";
                if (i) {
                    let e = (t - c - d / l) * l;
                    e = Math.round(e * Math.pow(10, i)),
                    m = (0,
                    s.numberToStringWithLeadingZero)(e, i),
                    m = this._removeEndingZeros(m, i)
                }
                if (!n)
                    throw new Error("_fractionalLength is not calculated");
                let u = "";
                if (_) {
                    const e = d % _;
                    d = (d - e) / _;
                    const t = (0,
                    s.numberToStringWithLeadingZero)(d, n)
                      , i = this._getFractPart(e, 2, _);
                    u = t + a.formatterOptions.decimalSignFractional + i
                } else
                    d = this._getFractPart(d, 1, o),
                    u = (0,
                    s.numberToStringWithLeadingZero)(d * r, n);
                return c.toString() + a.formatterOptions.decimalSignFractional + u + m
            }
            _getFractPart(e, t, i) {
                const o = [0, 5]
                  , r = [0, 2, 5, 7]
                  , _ = [0, 1, 2, 3, 5, 6, 7, 8];
                return 2 === i ? void 0 === o[e] ? -1 : o[e] : 4 === i ? void 0 === r[e] ? -1 : r[e] : 8 === i && 2 === t ? void 0 === _[e] ? -1 : _[e] : e
            }
        }
    }
    ,
    47522: (e, t, i) => {
        i.d(t, {
            PriceFormatterImplementationBase: () => c,
            calculateDecimal: () => n,
            intRegexp: () => a,
            variableMinTickParamsByPrice: () => l
        });
        var o = i(650151)
          , r = i(444372)
          , _ = i(544151)
          , s = i(969680);
        const a = new RegExp(/^(-?)[0-9]+$/);
        function n(e, t, i, o) {
            let r = 0;
            if (e > 0 && t > 0) {
                let t = e;
                for (i && o && (t /= o); t > 1; )
                    t /= 10,
                    r++
            }
            return r
        }
        function l(e, t, i) {
            const r = (0,
            o.ensureNotNull)((0,
            _.getMinTickData)({
                price: i,
                minTick: null,
                variableMinTickData: t,
                shouldCheckForEquality: !0
            }))
              , {priceScale: s, minMove: a, minMove2: l} = r;
            return {
                priceScale: s,
                minMove: a,
                fractionalLength: n(s, a, e, l)
            }
        }
        class c {
            constructor(e) {
                this._formatterErrors = {
                    custom: r.t(null, void 0, i(366123)),
                    fraction: r.t(null, void 0, i(339643)),
                    secondFraction: r.t(null, void 0, i(370784))
                };
                const {priceScale: t, minMove: o, minMove2: s, ignoreMinMove: a, variableMinTick: n, fractionalLength: l} = e;
                this._priceScale = t,
                this._minMove = o,
                this._minMove2 = s,
                this._ignoreMinMove = a,
                this._variableMinTickData = void 0 === n ? void 0 : (0,
                _.makeVariableMinTickData)({
                    priceScale: t,
                    minMove: o,
                    minMove2: s
                }, n),
                this._fractionalLength = l
            }
            formatImpl(e, t={}) {
                const {signPositive: i, signNegative: o=!0, tailSize: r, cutFractionalByPrecision: _=!1, useRtlFormat: a=!0, variableMinTickDataPrice: n, ignoreLocaleNumberFormat: l, noExponentialForm: c, removeAllEndingZeros: d} = t;
                let m = "";
                e < 0 ? m = !1 === o ? "" : "−" : e && !0 === i && (m = "+");
                const u = this._formatUnsigned(Math.abs(e), {
                    tailSize: r,
                    cutFractionalByPrecision: _,
                    variableMinTickDataPrice: n,
                    ignoreLocaleNumberFormat: l,
                    noExponentialForm: c,
                    removeAllEndingZeros: d
                })
                  , p = "0" === u ? u : m + u;
                return a ? (0,
                s.forceLTRStr)(p) : p
            }
            parse(e, t) {
                return "+" === (e = (e = (0,
                s.stripLTRMarks)(e)).replace("−", "-"))[0] && (e = e.substring(1)),
                this._parseUnsigned(e, t)
            }
            _removeEndingZeros(e, t) {
                for (let i = 0; i < t && "0" === e[e.length - 1]; i++)
                    e = e.substring(0, e.length - 1);
                return e
            }
        }
    }
    ,
    639247: (e, t, i) => {
        function o(e, t, i, o, r) {
            let _ = "";
            if (o = o ? "; path=" + o : "",
            r = r ? "; domain=" + r : "",
            i) {
                const e = new Date;
                e.setTime(e.getTime() + 24 * i * 60 * 60 * 1e3),
                _ = "; expires=" + e.toUTCString()
            } else
                _ = "";
            document.cookie = e + "=" + t + _ + r + o
        }
        function r(e) {
            const t = e + "="
              , i = document.cookie.split(";");
            for (let e = 0; e < i.length; e++) {
                let o = i[e];
                for (; " " === o.charAt(0); )
                    o = o.substring(1, o.length);
                if (0 === o.indexOf(t))
                    return o.substring(t.length, o.length)
            }
            return null
        }
        i.d(t, {
            get: () => r,
            set: () => o
        })
    }
    ,
    144731: (e, t, i) => {
        function o(e, ...t) {
            return e && "object" == typeof e ? (0 === t.length || t.forEach((t => {
                null != t && "object" == typeof t && Object.keys(t).forEach((i => {
                    const _ = e[i]
                      , s = t[i];
                    if (s === e)
                        return;
                    const a = Array.isArray(s);
                    if (s && (r(s) || a)) {
                        let t;
                        t = a ? _ && Array.isArray(_) ? _ : [] : _ && r(_) ? _ : {},
                        e[i] = o(t, s)
                    } else
                        void 0 !== s && (e[i] = s)
                }
                ))
            }
            )),
            e) : e
        }
        function r(e) {
            if (!e || "[object Object]" !== Object.prototype.toString.call(e))
                return !1;
            const t = Object.getPrototypeOf(e);
            if (!t)
                return !0;
            const i = Object.hasOwnProperty.toString
              , o = t.hasOwnProperty("constructor") && t.constructor;
            return "function" == typeof o && i.call(o) === i.call(Object)
        }
        i.d(t, {
            deepExtend: () => o
        })
    }
    ,
    709903: (e, t, i) => {
        function o(e, t=!1) {
            "loading" !== document.readyState ? t ? setTimeout(( () => e()), 1) : e() : document.addEventListener("DOMContentLoaded", ( () => e()))
        }
        i.d(t, {
            whenDocumentReady: () => o
        });
        new Promise((e => {
            o(e)
        }
        ))
    }
    ,
    496499: e => {
        e.exports = JSON.parse('{"adx":"widget_user_token-adx","adxD":"widget_user_token-adxD","agencialbmcombr":"widget_user_token-agencialbmcombr","aljaziracapitalD":"widget_user_token-aljaziracapitalD","aljaziracapitalRT":"widget_user_token-aljaziracapitalRT","alrajhicapitalcomD":"widget_user_token-alrajhicapitalcomD","alrajhicapitalcomRT":"widget_user_token-alrajhicapitalcomRT","ambito":"widget_user_token-ambito","artechecom":"widget_user_token-ArtecheD","atlcapital":"widget_user_token-atlcapital","bankirosru":"widget_user_token-bankirosru","bbvach":"widget_user_token-bbvach","beeksgroup":"widget_user_token-beeksgroup","belugagroupru":"widget_user_token-belugagroupru","bivacom":"widget_user_token-bivacom","bluefield":"widget_user_token-bluefield","bluelinefutures":"widget_user_token-bluelinefutures","bovespa":"widget_user_token-bmfbovespacombr","bytetravel":"widget_user_token-bytetravel","cboecanada":"widget_user_token-cboecanada","championnatbourse":"widget_user_token-championnatbourse","cincodias":"widget_user_token-cincodias","ceocaD":"widget_user_token-ceocaD","ceocaRT":"widget_user_token-ceocaRT","copees":"widget_user_token-copees","cselk":"widget_user_token-cselk","dailyfx":"widget_user_token-dailyfx","deepsearch":"widget_user_token-deepsearch","derayahcom":"widget_user_token-derayahcom","dfmaeD":"widget_user_token-dfmaeD","dfmaeRT":"widget_user_token-dfmaeRT","dolarhoy":"widget_user_token-dolarhoy","easynvestcombr":"widget_user_token-easynvestcombr","edaily":"widget_user_token-edaily","elconfidencial":"widget_user_token-elconfidencial","elespanolcom":"widget_user_token-elespanolcom","elobreroes":"widget_user_token-elobreroes","elnacionalD":"widget_user_token-ElNacionalD","elpaisfinanciero":"widget_user_token-elpaisfinanciero","elperiodicodelaenergia":"widget_user_token-elperiodicodelaenergia","euqueroinvestir":"widget_user_token-euqueroinvestircom","eurex":"widget_user_token-eurex","eurofins":"widget_user_token-eurofins","epe":"widget_user_token-epe","europapresses":"widget_user_token-europapresses","finanzasD":"widget_user_token-FinanzasD","forbescombr":"widget_user_token-forbescombr","genialinvestimentos":"widget_user_token-genialinvestimentos","healthitalia":"widget_user_token-healthitalia","hegnarno":"widget_user_token-hegnarno","hipotecariocomar":"widget_user_token-hipotecariocomar","igcom":"widget_user_token-igcom","investegatecouk":"widget_user_token-investegatecouk","investopedia":"widget_user_token-investopedia","integralyatirim":"widget_user_token-integralyatirim","ivsgroup":"widget_user_token-ivsgroup","boersenzeitung":"widget_user_token-boersenzeitung","lainformacioncom":"widget_user_token-lainformacioncom","marcopolocombr":"widget_user_token-marcopolocombr","mercadofinancierocom":"widget_user_token-mercadofinancierocom","moex":"widget_user_token-moex","moneytimescombr":"widget_user_token-moneytimescombr","monitordomercadoD":"widget_user_token-monitordomercadoD","mynetcom":"widget_user_token-mynetcom","negocios":"widget_user_token-negocios","NGX":"widget_user_token-NGX","NoticiasagricolaD":"widget_user_token-noticiasagricolaD","nsecokr":"widget_user_token-nsecokr","okdiario":"widget_user_token-okdiario","panafricanresourcescom":"widget_user_token-panafricanresourcescom","pse":"widget_user_token-pse","poder360":"widget_user_token-poder360","pseD":"widget_user_token-pseD","riyadhcapitalD":"widget_user_token-riyadhcapitalD","riyadhcapitalRT":"widget_user_token-riyadhcapitalRT","qecomqa":"widget_user_token-qecomqa","samolet":"widget_user_token-samolet","seeingmachinescom":"widget_user_token-seeingmachinescom","seudinheiro":"widget_user_token-seudinheiro","softwareag":"widget_user_token-softwareag","sogeclair":"widget_user_token-sogeclair","sgcompanyit":"widget_user_token-sgcompanyit","sharejunction":"widget_user_token-sharejunction","smartlab-custom":"widget_user_token-smartlab","smartlab":"widget_user_token-smartlab","spacemoneycombr":"widget_user_token-spacemoneycombr","stonexwdg":"widget_user_token-stonex£-!www.stonex.com","stoxio":"widget_user_token-stoxio","stonex":"widget_user_token-stonex","toroinvestimentoscom":"widget_user_token-toroinvestimentoscom","thecsecom":"widget_user_token-thecsecom","tradersclubbrasil":"widget_user_token-tradersclubbrasil","tradersclubbrasilD":"widget_user_token-tradersclubbrasilD","tradingview":"widget_user_token-tradingview","xtools":"widget_user_token-xtools","twitter":"widget_user_token-twitter","velocitycompositescom":"widget_user_token-velocitycompositescom","vocesaabrilcombr":"widget_user_token-vocesaabrilcombr","wealthsimple":"widget_user_token-wealthsimple£-!my.wealthsimple.com","xCrtyJksp":"widget_user_token-xCrtyJksp","xpicombr":"widget_user_token-xpicombr"}')
    }
    ,
    209044: e => {
        e.exports = JSON.parse('{"cme":{"INDICATORS_ON_CHART":{"limit":99999}},"bovespa":{"INDICATORS_ON_CHART":{"limit":99999}},"qecomqa":{"INDICATORS_ON_CHART":{"limit":99999}}}')
    }
    ,
    729551: e => {
        e.exports = JSON.parse('{"free":{"CHAT_ASSISTANT":{"limit":5,"disable_on_trial":true},"CHART_STORAGE":{"limit":1},"MULTIPLE_CHARTS":{"limit":1},"INDICATORS_ON_CHART":{"limit":2},"FUNDAMENTALS_ON_CHART":{"limit":1},"HISTORICAL_BARS":{"limit":5},"STUDY_ON_STUDY":{"limit":800,"child_limit":1},"SERVER_SIDE_ALERTS":{"overall_limit":2000,"limit":3,"complex_limit":0,"primitive_limit":3},"SCREENER_INTERVALS":{"interval":["1D","1W","1M"]},"STUDY_TEMPLATES":{"limit":1},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"BACKEND_CONNECTIONS":{"limit":2},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"MULTICOLOR_FLAGGED_SYMBOLS":{"limit":1},"WATCHLIST_SYMBOLS":{"limit":30},"VIDEO_IDEAS_LENGTH":{"limit":20},"CREATE_MORE_PORTFOLIOS":{"limit":1},"PORTFOLIO_TRANSACTIONS":{"limit":2000},"PORTFOLIO_HOLDINGS":{"limit":20}},"pro":{"CHAT_ASSISTANT":{"limit":5,"disable_on_trial":true},"PERSONAL_SUPPORT":{"disable_on_trial":true},"CHART_STORAGE":{"limit":5},"MULTIPLE_CHARTS":{"limit":2},"MARKET_DATA_LIMITS":{"limit":2,"primitive_limit":2},"CUSTOM_INTERVALS":{},"MULTIPLE_WATCHLISTS":{},"IMPORT_WATCHLISTS":{},"EXPORT_WATCHLISTS":{},"INDICATORS_ON_CHART":{"limit":5},"FUNDAMENTALS_ON_CHART":{"limit":4},"TV_PROSTUDIES":{"study_packages":["tv-chartpatterns"]},"HISTORICAL_BARS":{"limit":10},"TV_VOLUMEBYPRICE":{"study_packages":["tv-volumebyprice"]},"STUDY_ON_STUDY":{"limit":800,"child_limit":1},"TICK_BY_TICK_PUSH_DATA":{},"SERVER_SIDE_ALERTS":{"overall_limit":2000,"limit":20,"complex_limit":20,"primitive_limit":20},"SCREENER_AUTO_REFRESH":{},"SCREENER_NEW_AUTO_REFRESH":{},"SCREENER_EXPORT_DATA":{},"SCREENER_NEW_EXPORT_CSV_DATA":{},"SCREENER_NEW_SHOW_RESTRICTED_DATA":{},"SHOW_BONDS_RESTRICTED_DATA":{},"PORTFOLIO_DATA_LIMIT":{},"CREATE_MORE_PORTFOLIOS":{"limit":3},"PORTFOLIO_TRANSACTIONS":{"limit":5000},"PORTFOLIO_HOLDINGS":{"limit":50},"SCREENER_INTERVALS":{"interval":["1m","5m","15m","30m","1h","2h","4h","1D","1W","1M"]},"NO_SPONSORED_ADS":{"disable_on_lite_plan":"exclude_mobile"},"STUDY_TEMPLATES":{"limit":99999},"SIMULTANEOUS_CONNECTIONS":{"limit":1},"BACKEND_CONNECTIONS":{"limit":10},"IDC_AVAILABLE_DELAY":{},"STATUS":{"disable_on_trial":true},"BAR_REPLAY_INTRADAY":{"limit":1},"MULTIFLAGGED_SYMBOLS_LISTS":{},"SHOWS":{"disable_on_trial":true},"ALERTS_WEBHOOK":{},"DEEP_FUNDAMENTALS_HISTORY":{},"PUBLISH_PROTECTED_SCRIPTS":{"disable_on_trial":true},"IDEA_SOCIAL_LINKS":{"socials":["Twitter","Youtube"]},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram"],"disable_on_trial":true},"MULTI_MONITOR":{},"MULTICOLOR_FLAGGED_SYMBOLS":{"limit":7},"INTRADAY_EXCHANGE":{},"VOLUME_PROFILE":{},"STREAMS_ACCESS":{"followers":10},"SMS_2FA_VERIFICATION":{"disable_on_trial":true},"SOCIAL_ACTIVITY":{"disable_on_trial":true},"WATCHLIST_SYMBOLS":{"limit":1000},"FIELDS_PERMISSIONS":{"items":["refbonds"]},"CUSTOM_RANGE_BARS":{},"FASTEST_DATA_FLOW":{},"SESSION_VOLUME_PROFILE":{},"SHOW_ETF_HOLDINGS_DATA":{}},"pro_realtime":{"extends":"pro","CHART_STORAGE":{"limit":10},"MULTIPLE_CHARTS":{"limit":4},"MARKET_DATA_LIMITS":{"limit":4,"primitive_limit":4},"INDICATORS_ON_CHART":{"limit":10},"FUNDAMENTALS_ON_CHART":{"limit":7},"TV_PROSTUDIES":{"study_packages":["tv-prostudies","tv-chartpatterns"]},"STUDY_ON_STUDY":{"limit":800,"child_limit":9},"SERVER_SIDE_ALERTS":{"overall_limit":2000,"limit":100,"complex_limit":100,"primitive_limit":100},"ALERTS_MULTICONDITIONS":{"condition_limit":5},"CHAT_ASSISTANT":{"limit":5,"disable_on_trial":true},"CAN_EDIT_PUBLIC_CHATS":{"disable_on_trial":true},"BACKEND_CONNECTIONS":{"limit":20},"EXPORT_CHART_DATA":{},"CUSTOM_FORMULAS":{},"INTRADAY_EXOTIC_CHARTS":{},"KAGI_RENKO":{},"INTRADAY_SPREAD":{},"CUSTOM_CHATS":{},"BACKTESTING_EXPORT":{}},"pro_premium":{"extends":"pro_realtime","USE_BAR_MAGNIFIER":{},"CHART_STORAGE":{"limit":99999},"MULTIPLE_CHARTS":{"limit":8},"MARKET_DATA_LIMITS":{"limit":6,"primitive_limit":6},"INDICATORS_ON_CHART":{"limit":25},"FUNDAMENTALS_ON_CHART":{"limit":10},"CHAT_ASSISTANT":{"limit":99999,"disable_on_trial":true},"CHART_PATTERNS":{"study_packages":["tv-chartpatterns","tv-chart_patterns"]},"HISTORICAL_BARS":{"limit":20},"STUDY_ON_STUDY":{"limit":800,"child_limit":24},"SERVER_SIDE_ALERTS":{"overall_limit":2000,"limit":400,"complex_limit":400,"primitive_limit":400,"watchlist_limit":2,"overall_watchlist_limit":5},"SIMULTANEOUS_CONNECTIONS":{"limit":2},"BACKEND_CONNECTIONS":{"limit":50},"IDEA_SIGNATURE":{"disable_on_trial":true},"PROFILE_WEBSITE_FIELD":{"disable_on_trial":true},"BAR_REPLAY_INTRADAY":{"limit":4},"BAR_REPLAY_1S":{},"ALERTS_NO_EXPIRATION":{},"PUBLISH_INVITE_ONLY_SCRIPTS":{"disable_on_trial":true},"EXPORT_CHART_DATA":{},"DEEP_HISTORY_BACKTEST":{},"ALERTS_ON_SECONDS":{},"PERMANENT_STREAM_RECORDS":{},"EXTENDED_SOCIAL_LINKS":{"socials":["Facebook","Instagram","Website"],"disable_on_trial":true},"SECONDS_INTERVALS":{},"TPO_PERIODIC":{"study_packages":["tv-volumebyprice"]},"TPO_CHART_STYLE":{},"VOLUME_CANDLES":{},"VIDEO_IDEAS_LENGTH":{"limit":60},"VOLUME_FOOTPRINT":{},"PINE_SCREENER":{}},"pro_expert":{"extends":"pro_premium","INDICATORS_ON_CHART":{"limit":30},"FUNDAMENTALS_ON_CHART":{"limit":15},"STUDY_ON_STUDY":{"limit":800,"child_limit":29},"MULTIPLE_CHARTS":{"limit":10},"MARKET_DATA_LIMITS":{"limit":12,"primitive_limit":12},"HISTORICAL_BARS":{"limit":25},"SERVER_SIDE_ALERTS":{"overall_limit":2000,"limit":600,"complex_limit":600,"primitive_limit":600,"watchlist_limit":10,"overall_watchlist_limit":20},"BACKEND_CONNECTIONS":{"limit":80},"BAR_REPLAY_INTRADAY":{"limit":6},"BAR_REPLAY_1S":{},"EXPORT_FINANCIALS_DATA":{},"TICK_INTERVALS":{},"FIRST_PRIORITY_SUPPORT":{},"BUY_PRO_DATA":{}},"pro_premium_expert":{"extends":"pro_expert","INDICATORS_ON_CHART":{"limit":50},"FUNDAMENTALS_ON_CHART":{"limit":25},"STUDY_ON_STUDY":{"limit":800,"child_limit":49},"MULTIPLE_CHARTS":{"limit":16},"MARKET_DATA_LIMITS":{"limit":99999,"primitive_limit":25},"HISTORICAL_BARS":{"limit":40},"SERVER_SIDE_ALERTS":{"overall_limit":4000,"limit":1000,"complex_limit":1000,"primitive_limit":1000,"watchlist_limit":15,"overall_watchlist_limit":30},"BACKEND_CONNECTIONS":{"limit":200},"BAR_REPLAY_INTRADAY":{"limit":10},"BAR_REPLAY_1S":{}}}')
    }
    ,
    976125: e => {
        e.exports = JSON.parse('{"14851":{},"custom_items_in_context_menu":{},"countdown":{},"symbol_search_parser_mixin":{},"pay_attention_to_ticker_not_symbol":{},"graying_disabled_tools_enabled":{},"update_study_formatter_on_symbol_resolve":{},"constraint_dialogs_movement":{},"phone_verification":{},"show_trading_notifications_history":{},"show_interval_dialog_on_key_press":{},"header_interval_dialog_button":{"subsets":["show_interval_dialog_on_key_press"]},"header_fullscreen_button":{},"header_symbol_search":{},"symbol_search_hot_key":{},"header_resolutions":{"subsets":["header_interval_dialog_button"]},"header_chart_type":{},"header_settings":{},"header_indicators":{},"header_compare":{},"header_undo_redo":{},"header_quick_search":{},"header_screenshot":{},"header_saveload":{},"study_on_study":{},"scales_date_format":{},"scales_time_hours_format":{},"header_widget":{"subsets":["header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_settings","header_indicators","header_compare","header_undo_redo","header_quick_search","header_fullscreen_button","compare_symbol","header_screenshot"]},"legend_widget":{},"compare_symbol":{"subsets":["header_compare"]},"property_pages":{"subsets":["show_chart_property_page","chart_property_page"]},"show_chart_property_page":{},"chart_property_page":{"subsets":["chart_property_page_scales","chart_property_page_trading","chart_property_page_right_margin_editor"]},"left_toolbar":{},"right_toolbar":{},"hide_left_toolbar_by_default":{},"control_bar":{},"widget_logo":{},"timeframes_toolbar":{},"edit_buttons_in_legend":{"subsets":["show_hide_button_in_legend","format_button_in_legend","study_buttons_in_legend","delete_button_in_legend","legend_inplace_edit"]},"show_hide_button_in_legend":{},"object_tree_legend_mode":{},"format_button_in_legend":{},"study_buttons_in_legend":{},"delete_button_in_legend":{},"legend_inplace_edit":{},"broker_button":{},"buy_sell_buttons":{"subsets":["broker_button"]},"pane_context_menu":{},"scales_context_menu":{},"legend_context_menu":{},"context_menus":{"subsets":["pane_context_menu","scales_context_menu","legend_context_menu","objects_tree_context_menu"]},"items_favoriting":{},"save_chart_properties_to_local_storage":{},"use_localstorage_for_settings":{"subsets":["items_favoriting","save_chart_properties_to_local_storage"]},"handle_scale":{"subsets":["mouse_wheel_scale","pinch_scale","axis_pressed_mouse_move_scale"]},"handle_scroll":{"subsets":["mouse_wheel_scroll","pressed_mouse_move_scroll","horz_touch_drag_scroll","vert_touch_drag_scroll"]},"plain_studymarket":{},"disable_resolution_rebuild":{},"border_around_the_chart":{},"charting_library_debug_mode":{},"saveload_requires_authentication":{},"saveload_storage_customization":{},"volume_force_overlay":{},"create_volume_indicator_by_default":{},"create_volume_indicator_by_default_once":{},"saved_charts_count_restriction":{},"lean_chart_load":{},"stop_study_on_restart":{},"star_some_intervals_by_default":{},"move_logo_to_main_pane":{},"show_animated_logo":{},"link_to_tradingview":{},"logo_without_link":{},"logo_always_maximized":{},"right_bar_stays_on_scroll":{},"chart_content_overrides_by_defaults":{},"snapshot_trading_drawings":{},"allow_supported_resolutions_set_only":{},"widgetbar_tabs":{"subsets":["right_toolbar"]},"show_object_tree":{"subsets":["right_toolbar"]},"dom_widget":{"subsets":["right_toolbar"]},"collapsible_header":{},"study_templates":{},"side_toolbar_in_fullscreen_mode":{},"header_in_fullscreen_mode":{},"remove_library_container_border":{},"whotrades_auth_only":{},"support_multicharts":{},"display_market_status":{},"display_data_mode":{},"datasource_copypaste":{},"drawing_templates":{"subsets":["linetoolpropertieswidget_template_button"]},"expand_symbolsearch_items":{},"symbol_search_three_columns_exchanges":{},"symbol_search_flags":{},"symbol_search_limited_exchanges":{},"bugreport_button":{"subsets":["right_toolbar"]},"footer_publish_idea_button":{},"text_notes":{},"show_source_code":{},"symbol_info":{},"no_bars_status":{},"clear_bars_on_series_error":{},"hide_loading_screen_on_series_error":{},"seconds_resolution":{},"dont_show_boolean_study_arguments":{},"hide_last_na_study_output":{},"price_scale_always_last_bar_value":{},"study_dialog_fundamentals_economy_addons":{},"uppercase_instrument_names":{},"trading_notifications":{},"chart_crosshair_menu":{},"japanese_chart_styles":{},"hide_series_legend_item":{},"hide_study_overlay_legend_item":{},"hide_study_compare_legend_item":{},"linetoolpropertieswidget_template_button":{},"use_overrides_for_overlay":{},"timezone_menu":{},"main_series_scale_menu":{},"show_login_dialog":{},"remove_img_from_rss":{},"bars_marks":{},"chart_scroll":{},"chart_zoom":{},"source_selection_markers":{},"low_density_bars":{},"end_of_period_timescale_marks":{},"open_account_manager":{},"show_order_panel_on_start":{},"order_panel":{"subsets":["order_panel_close_button","order_panel_undock","right_toolbar","order_info"]},"multiple_watchlists":{},"watchlist_import_export":{},"study_overlay_compare_legend_option":{},"mobile_app_action_open_details_webview":{},"custom_resolutions":{},"referral_program_for_widget_owners":{},"mobile_trading":{},"real_brokers":{},"no_min_chart_width":{},"lock_visible_time_range_on_resize":{},"pricescale_currency":{},"cropped_tick_marks":{},"trading_account_manager":{},"disable_sameinterval_aligning":{},"display_legend_on_all_charts":{},"chart_style_hilo":{},"chart_style_hilo_last_price":{},"pricescale_unit":{},"show_spread_operators":{},"hide_exponentiation_spread_operator":{},"hide_reciprocal_spread_operator":{},"compare_symbol_search_spread_operators":{},"studies_symbol_search_spread_operators":{},"hide_resolution_in_legend":{},"hide_unresolved_symbols_in_legend":{},"fix_left_edge":{},"study_symbol_ticker_description":{},"two_character_bar_marks_labels":{},"tick_resolution":{},"secondary_series_extend_time_scale":{},"hide_volume_ma":{},"small_no_display":{},"charting_library_single_symbol_request":{},"use_ticker_on_symbol_info_update":{},"show_zoom_and_move_buttons_on_touch":{},"hide_main_series_symbol_from_indicator_legend":{},"chart_hide_close_position_button":{},"chart_hide_close_order_button":{},"hide_price_scale_global_last_bar_value":{"subsets":["use_last_visible_bar_value_in_legend"]},"keep_object_tree_widget_in_right_toolbar":{},"show_average_close_price_line_and_label":{},"hide_image_invalid_symbol":{},"hide_object_tree_and_price_scale_exchange_label":{},"confirm_overwrite_if_chart_layout_with_name_exists":{},"determine_first_data_request_size_using_visible_range":{},"use_na_string_for_not_available_values":{},"show_last_price_and_change_only_in_series_legend":{},"legend_last_day_change":{},"iframe_loading_compatibility_mode":{},"show_percent_option_for_right_margin":{},"watchlist_context_menu":{},"accessible_keyboard_shortcuts":{},"advanced_emoji_in_titles":{},"app_phone":{},"app_tablet":{},"mobile_app_hide_replay_toolbar":{},"symbol_search_option_chain_selector":{},"tv_production":{"subsets":["advanced_emoji_in_titles","auto_enable_symbol_labels","symbol_search_parser_mixin","header_fullscreen_button","header_widget","dont_show_boolean_study_arguments","left_toolbar","right_toolbar","buy_sell_buttons","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","object_tree_legend_mode","uppercase_instrument_names","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","saved_charts_count_restriction","create_volume_indicator_by_default","create_volume_indicator_by_default_once","charts_auto_save","save_old_chart_before_save_as","chart_content_overrides_by_defaults","alerts","header_saveload","header_layouttoggle","datasource_copypaste","show_saved_watchlists","watchlists_from_to_file","add_to_watchlist","property_pages","support_multicharts","display_market_status","display_data_mode","show_chart_warn_message","support_manage_drawings","widgetbar_tabs","study_templates","collapsible_header","drawing_templates","footer_publish_idea_button","text_notes","show_source_code","symbol_info","linetoolpropertieswidget_template_button","trading_notifications","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","phone_verification","custom_resolutions","compare_symbol","study_on_study","japanese_chart_styles","show_login_dialog","dom_widget","bars_marks","chart_scroll","chart_zoom","show_trading_notifications_history","source_selection_markers","study_dialog_fundamentals_economy_addons","multiple_watchlists","marked_symbols","order_panel","pricescale_currency","show_animated_logo","pricescale_currency","show_object_tree","watchlist_import_export","scales_date_format","scales_time_hours_format","popup_hints","show_right_widgets_panel_by_default","compare_recent_symbols_enabled","chart_style_hilo_last_price","symbol_search_option_chain_selector"]},"widget":{"subsets":["auto_enable_symbol_labels","symbol_search_parser_mixin","uppercase_instrument_names","left_toolbar","right_toolbar","control_bar","symbol_search_hot_key","context_menus","edit_buttons_in_legend","object_tree_legend_mode","use_localstorage_for_settings","saveload_requires_authentication","volume_force_overlay","create_volume_indicator_by_default","create_volume_indicator_by_default_once","dont_show_boolean_study_arguments","header_widget_dom_node","header_symbol_search","header_resolutions","header_chart_type","header_compare","header_indicators","star_some_intervals_by_default","display_market_status","display_data_mode","show_chart_warn_message","symbol_info","linetoolpropertieswidget_template_button","symbol_search_three_columns_exchanges","symbol_search_flags","symbol_search_limited_exchanges","widgetbar_tabs","compare_symbol","show_login_dialog","plain_studymarket","japanese_chart_styles","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","show_right_widgets_panel_by_default","chart_style_hilo_last_price"]},"bovespa_widget":{"subsets":["widget","header_settings","linetoolpropertieswidget_template_button","compare_recent_symbols_enabled"]},"charting_library_base":{"subsets":["14851","allow_supported_resolutions_set_only","auto_enable_symbol_labels","border_around_the_chart","collapsible_header","constraint_dialogs_movement","context_menus","control_bar","create_volume_indicator_by_default","custom_items_in_context_menu","datasource_copypaste","uppercase_instrument_names","display_market_status","edit_buttons_in_legend","object_tree_legend_mode","graying_disabled_tools_enabled","header_widget","legend_widget","header_saveload","dont_show_boolean_study_arguments","lean_chart_load","left_toolbar","right_toolbar","link_to_tradingview","pay_attention_to_ticker_not_symbol","plain_studymarket","refresh_saved_charts_list_on_dialog_show","right_bar_stays_on_scroll","saveload_storage_customization","stop_study_on_restart","timeframes_toolbar","symbol_search_hot_key","update_study_formatter_on_symbol_resolve","update_timeframes_set_on_symbol_resolve","use_localstorage_for_settings","volume_force_overlay","widget_logo","countdown","use_overrides_for_overlay","trading_notifications","compare_symbol","symbol_info","timezone_menu","main_series_scale_menu","create_volume_indicator_by_default_once","bars_marks","chart_scroll","chart_zoom","source_selection_markers","property_pages","go_to_date","adaptive_logo","show_animated_logo","handle_scale","handle_scroll","shift_visible_range_on_new_bar","chart_content_overrides_by_defaults","cropped_tick_marks","scales_date_format","scales_time_hours_format","popup_hints","save_shortcut","show_right_widgets_panel_by_default","show_object_tree","insert_indicator_dialog_shortcut","compare_recent_symbols_enabled","hide_main_series_symbol_from_indicator_legend","chart_style_hilo","request_only_visible_range_on_reset","clear_price_scale_on_error_or_empty_bars","show_symbol_logo_in_legend","show_symbol_logo_for_compare_studies","library_custom_color_themes","long_press_floating_tooltip"]},"charting_library":{"subsets":["charting_library_base"]},"static_charts_service":{"subsets":["charting_library","disable_resolution_rebuild"]},"trading_terminal":{"subsets":["charting_library_base","support_multicharts","header_layouttoggle","japanese_chart_styles","chart_property_page_trading","add_to_watchlist","open_account_manager","show_dom_first_time","order_panel","buy_sell_buttons","multiple_watchlists","show_trading_notifications_history","always_pass_called_order_to_modify","show_object_tree","watchlist_import_export","drawing_templates","trading_account_manager","chart_crosshair_menu","compare_recent_symbols_enabled","watchlist_context_menu","show_symbol_logo_in_account_manager","watchlist_sections","prefer_quote_short_name","enable_dom_data_for_untradable_symbols","prefer_symbol_name_over_fullname","watchlist_cross_tab_sync"]}}')
    }
}]);
