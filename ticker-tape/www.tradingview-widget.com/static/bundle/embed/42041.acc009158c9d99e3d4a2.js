"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[42041], {
    462140: (e, t, s) => {
        function n(e, t, s) {
            return Math.min(Math.max(e, t), s)
        }
        function i(e) {
            return e > 0 ? Math.floor(e) : Math.ceil(e)
        }
        function o(e) {
            return e % 2 == 0
        }
        s.d(t, {
            clamp: () => n,
            isEven: () => o,
            toInt: () => i
        })
    }
    ,
    173777: (e, t, s) => {
        s.d(t, {
            SEPARATOR_PREFIX: () => n
        });
        const n = "###"
    }
    ,
    645778: (e, t, s) => {
        s.r(t),
        s.d(t, {
            QUOTE_FIELDS: () => o,
            QUOTE_FIELDS_CACHE: () => r,
            QuoteCache: () => i
        });
        var n = s(650151);
        class i {
            constructor(e) {
                this._cache = new Map,
                this._times = new Map,
                this._fields = [...e.fields]
            }
            update(e, t, s) {
                const i = (0,
                n.ensureDefined)(e.symbolname)
                  , o = Date.now();
                if (this._cache.has(i) || this._cache.set(i, {
                    symbolname: i,
                    status: e.status,
                    values: {}
                }),
                this._times.has(i) || this._times.set(i, new Map),
                "error" === e.status)
                    return;
                const r = (0,
                n.ensureDefined)(this._cache.get(i))
                  , a = (0,
                n.ensureDefined)(this._times.get(i));
                r.status = e.status;
                for (const n of this._fields)
                    t.has(n) && (s || void 0 !== e.values[n]) && (r.values[n] = e.values[n],
                    a.set(n, o))
            }
            get(e) {
                return this._cache.get(e) ?? null
            }
            getTimes(e) {
                return this._times.get(e) ?? null
            }
            fields() {
                return this._fields
            }
        }
        const o = new Set(["pro_name", "base_name", "logoid", "currency-logoid", "base-currency-logoid", "source-logoid", "short_name", "web_site_url", "pro_perm", "timezone", "current_session", "last_price", "lp_time", "subsessions", "prev_close_price", "open_price", "high_price", "low_price", "price_52_week_high", "price_52_week_low", "ask", "ask_size", "bid", "bid_size", "rch", "rchp", "rtc", "rtc_time", "data_frequency", "reference-last-period-start", "business_description", "web_site_url", "figi", "number_of_employees", "float_shares_outstanding", "earnings_release_next_calendar_date", "root", "description", "exchange", "listed_exchange", "type", "country_code", "provider_id", "sector", "typespecs", "visible-plots-set", "industry", "currency_id", "last_price", "fractional", "minmov", "minmove2", "pricescale", "variable_tick_size", "change", "change_percent", "volume", "average_volume", "market_cap_basic", "market_cap_calc", "total_revenue", "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year", "dps_common_stock_prim_issue_fy", "dividends_yield", "earnings_release_next_date", "earnings_per_share_forecast_next_fq", "earnings_publication_type_next_fq", "earnings_release_date", "earnings_per_share_fq", "earnings_per_share_forecast_fq", "forecast_raw", "last_release_date", "next_release_date", "reference_last_period", "fundamental_currency_code", "number_of_employees", "web_site_url", "business_description", "founded", "ceo", "float_shares_outstanding", "total_shares_outstanding", "dividend_payout_ratio_ttm", "dividends_yield_current", "dividend_ex_date_upcoming", "dividend_amount_upcoming", "dividend_amount_recent", "dividend_ex_date_recent", "dividend_amount_h", "dividend_payment_date_upcoming", "dividend_payment_date_recent", "total_revenue_fq_h", "total_revenue_fy_h", "net_income_fy_h", "net_income_fq_h", "total_assets_fy_h", "total_assets_fq_h", "total_liabilities_fy_h", "total_liabilities_fq_h", "cash_f_operating_activities_fy_h", "cash_f_operating_activities_fq_h", "cash_f_investing_activities_fy_h", "cash_f_investing_activities_fq_h", "cash_f_financing_activities_fy_h", "cash_f_financing_activities_fq_h", "fiscal_period_fy_h", "fiscal_period_fq_h", "fiscal_period_fh_h", "earnings_release_date_fq_h", "earnings_release_next_date_fq", "earnings_per_share_forecast_next_fq", "earnings_per_share_forecast_fq_h", "earnings_per_share_fq_h", "earnings_fiscal_period_fq_h", "next_earnings_fiscal_period_fq", "is_next_earnings_release_date_estimated", "symbol-primaryname", "currency_code", "rates_mc", "rates_fy", "rates_ttm", "measure", "value_unit_id", "value-unit-id", "update_mode", "language", "local_description", "short_description", "source", "source2", "format", "recommendation_mark", "last_report_frequency", "price_target_estimates_num", "price_target_average", "update_mode_seconds", "recommendation_total", "recommendation_buy", "recommendation_over", "recommendation_hold", "recommendation_under", "recommendation_sell", "recommendation_total", "price_target_high", "price_target_low", "rates_pt", "rates_pt", "total_revenue_fy_h", "total_revenue_fq_h", "total_revenue_fh_h", "net_income_fy_h", "net_income_fq_h", "net_income_fh_h", "total_assets_fy_h", "total_assets_fq_h", "total_assets_fh_h", "total_liabilities_fy_h", "total_liabilities_fq_h", "total_liabilities_fh_h", "cash_f_operating_activities_fy_h", "cash_f_operating_activities_fq_h", "cash_f_operating_activities_fh_h", "cash_f_investing_activities_fy_h", "cash_f_investing_activities_fq_h", "cash_f_investing_activities_fh_h", "cash_f_financing_activities_fy_h", "cash_f_financing_activities_fq_h", "cash_f_financing_activities_fh_h", "fiscal_period_fy", "fiscal_period_fq", "fiscal_period_fh", "earnings_release_date_fq_h", "earnings_release_date_fy_h", "earnings_release_date_fh_h", "earnings_release_next_date_fq", "earnings_release_next_date_fy", "earnings_release_next_date_fh", "earnings_release_next_time", "earnings_release_time", "is_next_earnings_release_date_estimated", "earnings_per_share_forecast_next_fq", "earnings_per_share_forecast_next_fy", "earnings_per_share_forecast_next_fh", "earnings_per_share_forecast_fq_h", "earnings_per_share_forecast_fy_h", "earnings_per_share_forecast_fh_h", "earnings_per_share_fq_h", "earnings_per_share_fy_h", "earnings_per_share_fh_h", "earnings_fiscal_period_fq_h", "earnings_fiscal_period_fy_h", "earnings_fiscal_period_fh_h", "next_earnings_fiscal_period_fq", "next_earnings_fiscal_period_fy", "next_earnings_fiscal_period_fh", "revenue_fq_h", "revenue_fy_h", "revenue_fh_h", "revenue_forecast_fq_h", "revenue_forecast_fy_h", "revenue_forecast_fh_h", "revenue_forecast_next_fq", "revenue_forecast_next_fy", "revenue_forecast_next_fh", "revenue_seg_by_business_h", "revenue_seg_by_region_h", "total_revenue_fy", "total_revenue_fq", "total_revenue_fh", "gross_profit_fy", "gross_profit_fq", "gross_profit_fh", "ebitda_fy", "ebit_fy", "net_income_fy", "net_income_fq", "net_income_fh", "total_debt_fy_h", "total_debt_fq_h", "total_debt_fh_h", "free_cash_flow_fy_h", "free_cash_flow_fq_h", "free_cash_flow_fh_h", "cash_n_equivalents_fy_h", "cash_n_equivalents_fq_h", "cash_n_equivalents_fh_h", "total_current_assets_fy", "total_current_assets_fq", "total_current_assets_fh", "total_current_liabilities_fy", "total_current_liabilities_fq", "total_current_liabilities_fh", "total_non_current_assets_fy", "total_non_current_assets_fq", "total_non_current_assets_fh", "total_non_current_liabilities_fy", "total_non_current_liabilities_fq", "total_non_current_liabilities_fh", "loans_net_fy", "loans_net_fy_h", "loans_net_fq_h", "loans_net_fh_h", "total_deposits_fy", "total_deposits_fy_h", "total_deposits_fq_h", "total_deposits_fh_h", "loan_loss_allowances_fy", "loan_loss_allowances_fy_h", "loan_loss_allowances_fq_h", "loan_loss_allowances_fh_h", "reserve_to_total_capital_fy_h", "reserve_to_total_capital_fq_h", "reserve_to_total_capital_fh_h", "unearned_premium_to_total_capital_fy_h", "unearned_premium_to_total_capital_fq_h", "unearned_premium_to_total_capital_fh_h", "insurance_reserves_fy_h", "insurance_reserves_fq_h", "insurance_reserves_fh_h", "policy_claims_fy_h", "policy_claims_fq_h", "policy_claims_fh_h", "premiums_earned_fy_h", "premiums_earned_fq_h", "premiums_earned_fh_h", "price_earnings_fq_h", "price_earnings_fy_h", "price_earnings_fh_h", "price_sales_fq_h", "price_sales_fy_h", "price_sales_fh_h", "diluted_net_income_ttm", "total_revenue_ttm", "price_earnings_current", "price_sales_current", "isin-displayed", "interest_income_fy_h", "interest_income_fq_h", "interest_income_fh_h", "non_interest_income_fy_h", "non_interest_income_fq_h", "non_interest_income_fh_h", "website", "doc", "explorer", "sources", "contracts", "crypto_common_categories", "crypto_asset", "community", "dividends_availability", "earnings_availability", "financials_availability", "etf_asset_type_exposure", "etf_region_exposure", "top_holdings", "unit-id", "options-info", "interest_income_fy", "interest_income_fq", "interest_income_fh", "non_interest_income_fy", "non_interest_income_fq", "non_interest_income_fh", "interest_expense_fy", "interest_expense_fq", "interest_expense_fh", "loan_loss_provision_fy", "loan_loss_provision_fq", "loan_loss_provision_fh", "non_interest_expense_fy", "non_interest_expense_fq", "non_interest_expense_fh", "non_oper_income_fy", "non_oper_income_fq", "non_oper_income_fh", "unusual_expense_inc_fy", "unusual_expense_inc_fq", "unusual_expense_inc_fh", "pretax_income_fy", "pretax_income_fq", "pretax_income_fh", "income_tax_fy", "income_tax_fq", "income_tax_fh", "after_tax_other_income_fy", "after_tax_other_income_fq", "after_tax_other_income_fh", "total_non_oper_income_fy", "total_non_oper_income_fq", "total_non_oper_income_fh", "oper_income_fy", "oper_income_fq", "oper_income_fh", "operating_expenses_fy", "operating_expenses_fq", "operating_expenses_fh", "cost_of_goods_fy", "cost_of_goods_fq", "cost_of_goods_fh", "equity_in_earnings_fy", "equity_in_earnings_fq", "equity_in_earnings_fh", "minority_interest_exp_fy", "minority_interest_exp_fq", "minority_interest_exp_fh", "discontinued_operations_fy", "discontinued_operations_fq", "discontinued_operations_fh", "front_contract", "pointvalue", "unit_id", "expiration", "aum", "asset_class", "focus", "expense_ratio", "launch_date", "issuer", "brand", "homepage", "index_tracked", "actively_managed", "fund_view_mode", "common_equity_tier1_ratio_fy_h", "common_equity_tier1_ratio_fq_h", "common_equity_tier1_ratio_fh_h", "tier1_capital_ratio_fy_h", "tier1_capital_ratio_fq_h", "tier1_capital_ratio_fh_h", "total_capital_ratio_fy_h", "total_capital_ratio_fq_h", "total_capital_ratio_fh_h", "preferred_stock_carrying_value_fh", "preferred_stock_carrying_value_fq", "total_debt_fq", "minority_interest_fh", "minority_interest_fq", "cash_n_short_term_invest_fq", "cash_n_due_f_banks_fh", "cash_n_due_f_banks_fq", "enterprise_value_current", "etf_holdings_count", "contract-description", "reference-last-period", "all_time_high", "all_time_high_day", "all_time_low", "all_time_low_day", "outstanding_amount", "nominal_value", "denom_min", "current_coupon", "coupon_type_general", "coupon_frequency", "yield_to_maturity", "maturity-date", "days_to_maturity", "bond_issuer", "issue_date", "bond_issuer_stock_symbol", "total_issued_amount", "paid_amount", "bond_snp_rating_lt_h", "placement_type", "duration_type", "maturity_type", "offer_type", "redemption_type", "conversion_option", "sinking_fund", "ownership_form", "daily-summary-ast", "issue_status", "coupon_h", "sinking_fund_next_date", "sinking_fund_min_amount_next", "call_next_date", "redemptions_h", "call_notice_days", "put_next_date", "put_notice_days_min", "seniority_level", "inflation_protection", "pledge_status", "bond_issuer_country_of_risk", "bond_issuer_cr_parent", "credit_enhancement_type", "credit_enhancement_status", "use_of_proceeds", "bond_issuer_snp_rating_lt_h", "bond_issuer_snp_rating_st_h", "bond_agents_tr", "first_bar_time_1d", "financial-indicator-id", "exchange-info", "underlying-symbol", "strike", "lotsize", "option-style", "has_bonds", "open_time", "has_bonds", "dex_buys_15m", "dex_sells_15m", "dex_buy_volume_15m", "dex_sell_volume_15m", "dex_buyers_15m", "dex_sellers_15m", "dex_buys_1h", "dex_sells_1h", "dex_buy_volume_1h", "dex_sell_volume_1h", "dex_buyers_1h", "dex_sellers_1h", "dex_buys_4h", "dex_sells_4h", "dex_buy_volume_4h", "dex_sell_volume_4h", "dex_buyers_4h", "dex_sellers_4h", "dex_buys_12h", "dex_sells_12h", "dex_buy_volume_12h", "dex_sell_volume_12h", "dex_buyers_12h", "dex_sellers_12h", "dex_buys_24h", "dex_sells_24h", "dex_buy_volume_24h", "dex_sell_volume_24h", "dex_buyers_24h", "dex_sellers_24h", "dex_converted_symbol", "dex_trading_volume_24h", "dex_created_time", "dex_currency", "dex_currency_logoid", "blockchain_addresses_urls", "blockchain_addresses", "base_currency", "available_data_range_end_date", "available_data_range_begin_date"])
          , r = new i({
            fields: o
        })
    }
    ,
    332906: (e, t, s) => {
        s.r(t),
        s.d(t, {
            QuoteSession: () => i
        });
        var n = s(900608);
        class i {
            constructor(e, t=(0,
            n.randomHash)()) {
                this._sessionstarted = !1,
                this._globalHandler = null,
                this._chartApi = e,
                this._sessionid = "qs_" + t
            }
            destroy() {
                this._sessionstarted && (this._chartApi.quoteDeleteSession(this._sessionid),
                this._sessionstarted = !1)
            }
            connected() {
                return this._chartApi.connected()
            }
            connect(e) {
                this._globalHandler = e,
                this._chartApi.createSession(this._sessionid, this),
                this._chartApi.connect()
            }
            disconnect() {
                this._chartApi.disconnect()
            }
            quoteAddSymbols(e) {
                this._chartApi.quoteAddSymbols(this._sessionid, e)
            }
            quoteRemoveSymbols(e) {
                this._chartApi.quoteRemoveSymbols(this._sessionid, e)
            }
            quoteFastSymbols(e) {
                this._chartApi.quoteFastSymbols(this._sessionid, e)
            }
            quoteSetFields(e) {
                this._chartApi.quoteSetFields(this._sessionid, e)
            }
            onMessage(e) {
                switch (e.method) {
                case "connected":
                    this._sessionstarted || (this._chartApi.quoteCreateSession(this._sessionid),
                    this._sessionstarted = !0);
                    break;
                case "disconnected":
                    this._sessionstarted = !1
                }
                this._globalHandler?.(e)
            }
            quoteHibernateAll() {
                this._chartApi.quoteHibernateAll(this._sessionid)
            }
        }
    }
    ,
    761637: (e, t, s) => {
        function n(e) {
            if (void 0 === e)
                return null;
            const t = e.match(/(delayed_streaming)_(\d+)/);
            return null === t ? null : {
                mode: t[1],
                interval: parseInt(t[2])
            }
        }
        function i(e) {
            const t = n(e.update_mode);
            return null === t || (e.update_mode = t.mode,
            e.update_mode_seconds = t.interval),
            e
        }
        s.r(t),
        s.d(t, {
            normalizeUpdateMode: () => i,
            parseUpdateMode: () => n
        })
    }
    ,
    778016: (e, t, s) => {
        s.d(t, {
            enabled: () => a,
            getConfig: () => c
        });
        s(650151);
        var n = s(729551)
          , i = s(209044)
          , o = s(638456)
          , r = s(232759);
        function a(e, t, s) {
            let n = window.user;
            s && (n = s);
            const i = c(e, t, n);
            if (!i)
                return !1;
            if (i.disable_on_trial && (!n || n.is_trial))
                return !1;
            const r = i.disable_on_lite_plan;
            if (r && n.is_lite_plan) {
                if ("all" === r)
                    return !1;
                if ("exclude_mobile" === r && !o.CheckMobile.any())
                    return !1
            }
            return !0
        }
        function _(e) {
            const t = n[e];
            return t ? t.extends ? Object.assign({}, _(t.extends), t) : t : null
        }
        function c(e, t, s) {
            let n = _(t || (function(e) {
                let t = window.user;
                "undefined" != typeof window && window.user && (t = window.user),
                e && (t = e);
                let s = t?.pro_plan || "free";
                return "free" !== s && !(0,
                r.isTrialProduct)(s) || (s = (0,
                r.getProductForTrial)(s)),
                s
            }(s) ?? ""));
            if (!n)
                return null;
            const o = window.TradingView?.widgetCustomer;
            return o && i[o] && (n = Object.assign({}, n, i[o])),
            n && n[e] || null
        }
    }
    ,
    849204: (e, t, s) => {
        s.d(t, {
            LogoSize: () => n,
            getLogoUrlResolver: () => _
        });
        var n, i = s(650151), o = s(588948);
        !function(e) {
            e[e.Medium = 0] = "Medium",
            e[e.Large = 1] = "Large"
        }(n || (n = {}));
        class r {
            constructor(e) {
                (0,
                i.assert)("" !== e, "S3 base url must be a non-empty string"),
                this._baseUrl = e
            }
            getSymbolLogoUrl(e, t) {
                switch ((0,
                i.assert)("" !== e, "logo id must be a non-empty string"),
                t) {
                case n.Medium:
                    return this._baseUrl + `${e}.svg`;
                case n.Large:
                    return this._baseUrl + `${e}--big.svg`
                }
            }
            collectSymbolLogoUrls(e, t) {
                const {logoId: s, baseCurrencyLogoId: n, currencyLogoId: i, dexCurrencyLogoId: o} = e;
                if (s)
                    return [this.getSymbolLogoUrl(s, t)];
                const r = [];
                if (n && r.push(this.getSymbolLogoUrl(n, t)),
                o ? r.push(this.getSymbolLogoUrl(o, t)) : i && r.push(this.getSymbolLogoUrl(i, t)),
                r.length < 2)
                    return r;
                const a = r.some(c)
                  , _ = r.every((e => !e.includes("country") || c(e)));
                return a && _ ? r.filter((e => !c(e))) : r;
                function c(e) {
                    return e.includes("country/US")
                }
            }
            getCountryFlagUrl(e, t) {
                return this.getSymbolLogoUrl("country/" + e, t)
            }
            getCryptoLogoUrl(e, t) {
                return this.getSymbolLogoUrl("crypto/" + e, t)
            }
            getProviderLogoUrl(e, t) {
                return this.getSymbolLogoUrl("provider/" + e, t)
            }
            getSourceLogoUrl(e, t) {
                return this.getSymbolLogoUrl("source/" + e, t)
            }
            getBlockchainContractLogoUrl(e, t) {
                return this.getSymbolLogoUrl("blockchain/" + e, t)
            }
        }
        let a;
        function _() {
            return function() {
                if (!a) {
                    const e = (0,
                    o.getInitData)()
                      , t = e.settings ? e.settings.S3_LOGO_SERVICE_BASE_URL : "";
                    a = new r(t)
                }
                return a
            }()
        }
    }
    ,
    519073: (e, t, s) => {
        function n(e) {
            return void 0 !== e && e.includes("crypto")
        }
        s.d(t, {
            hasCryptoTypespec: () => n
        })
    }
    ,
    779923: (e, t, s) => {
        async function n(e, t) {
            const n = await Promise.all([s.e(61560), s.e(18883), s.e(98185), s.e(46195), s.e(15371), s.e(32937), s.e(92537), s.e(61681), s.e(61171), s.e(67780), s.e(78894), s.e(66032), s.e(65743), s.e(13672), s.e(79317), s.e(30158), s.e(44213), s.e(30683), s.e(9323), s.e(60159), s.e(61144), s.e(99778), s.e(87473), s.e(13114), s.e(6471), s.e(62526), s.e(17102), s.e(2011), s.e(38890)]).then(s.bind(s, 409128));
            return n.showSimpleDialog(e, n.warningModule, t)
        }
        s.d(t, {
            showWarning: () => n
        })
    }
    ,
    957259: (e, t, s) => {
        var n = s(154834)
          , i = s(290484)
          , o = s(536794)
          , r = s(569708)
          , a = s(283873)
          , _ = s(683350)
          , c = s(650151)
          , d = s(735566)
          , l = s(37010)
          , h = s(605814)
          , u = s(931924)
          , m = s(894645)
          , f = s(13692)
          , p = s(496499)
          , g = s(803155)
          , y = s(803912)
          , b = s(659923)
          , v = s(925049)
          , w = s(107447)
          , q = s(800828)
          , C = s(778016)
          , S = s(125226)
          , k = s(849204)
          , M = s(314802)
          , R = s(175203)
          , x = s(462140)
          , N = s(820028)
          , T = s(646244)
          , D = s(241361)
          , I = s(403526)
          , L = s(903656);
        const P = (0,
        d.getLogger)("Chart.Studies.StudyMetaInfoRepository", {
            color: "#606"
        })
          , E = (0,
        d.getLogger)("ChartApi.TrafficMeter", {
            maxCount: 20,
            color: "#268"
        })
          , H = (0,
        d.getLogger)("ChartApi.Core", {
            color: "#706"
        })
          , A = (0,
        d.getLogger)("ChartApi.ChartSession", {
            color: "#706"
        })
          , O = (0,
        d.getLogger)("ChartApi.ChartSession", {
            highRate: !0,
            maxCount: 100,
            color: "#706"
        })
          , U = (0,
        d.getLogger)("ChartApi.ChartSession", {
            maxCount: 0,
            color: "#706"
        })
          , B = (0,
        d.getLogger)("ChartApi.ChartSession", {
            maxCount: 50,
            color: "#706"
        })
          , F = (0,
        d.getLogger)("ChartApi.QuoteSession", {
            maxCount: 50,
            color: "#660"
        })
          , $ = (0,
        d.getLogger)("ChartApi.QuoteSession", {
            highRate: !0,
            maxCount: 10,
            color: "#660"
        })
          , W = !(0,
        M.isOnMobileAppPage)("any")
          , Q = (0,
        S.isFeatureEnabled)("broker_id_session");
        let V = !1
          , j = !1
          , G = !1;
        const z = ["", "KB", "MB", "GB", "TB"];
        function Y(e) {
            if (0 === e)
                return "0";
            const t = (0,
            x.toInt)(Math.floor(Math.log(e) / Math.log(1024)));
            return (e / Math.pow(1024, t)).toFixed(2) + z[t]
        }
        function J(e, t) {
            return `${e}__${t}`
        }
        function Z(e, t, s) {
            const n = t[s] ?? 0;
            t[s] = n + e
        }
        const K = Z.bind(null, 1)
          , X = Z.bind(null, -1)
          , ee = u.enabled("widget") ? "studies_metadata_widget" : "studies_metadata"
          , te = "/chart-api/pro_hash"
          , se = u.enabled("widget") ? "/chart-api/studies_metadata_widget" : "/chart-api/studies_metadata";
        function ne(e) {
            if (null === e)
                return "";
            if ("period-back" === e.type) {
                let t = e.value;
                return "YTD" !== t && "D" === t.slice(-1) && (t = t.slice(0, -1)),
                t
            }
            return "r," + e.from + ":" + e.to
        }
        let ie = null;
        function oe() {
            if (null === ie) {
                const e = document.querySelector('link[rel~="conversions-config"]')
                  , t = new URL((0,
                c.ensureNotNull)(e).href);
                ie = (0,
                y.fetch)(t.toString(), {
                    method: "GET"
                }).then((e => {
                    if (!e.ok)
                        throw new Error("Response status is not success");
                    return e.json()
                }
                )).then((e => {
                    const t = (0,
                    k.getLogoUrlResolver)();
                    return e.currencies.forEach((e => {
                        void 0 !== e.logoid && (e.logoUrl = t.getSymbolLogoUrl(e.logoid, k.LogoSize.Medium))
                    }
                    )),
                    e
                }
                ))
            }
            return ie
        }
        class re {
            constructor(e) {
                this.sessionid = null,
                this._banInfo = new N.WatchedValue(null),
                this._isAuthTokenLoaded = !1,
                this._authTokenDfd = null,
                this._serverTimeBasePoint = Date.now() - performance.now(),
                this._initCachePromise = (0,
                q.createCache)("TVChartApi"),
                this._trafficStats = {
                    total: 0,
                    sinceConnect: 0,
                    lastChunk: 0
                },
                this._lowQualityEnabled = !1,
                this._brokerId = "",
                this._sendingQueuedRequestsCount = 0,
                this._modifyStudyMap = new Map,
                this._disconnectCount = 0,
                this._isConnected = !1,
                this._metadataDeferredPromise = null,
                this._dataHandleModule = new I.JSONDataHandler,
                this._sessions = {},
                this._notificationHandlers = {},
                this._pendingMessagesQueue = [],
                this._loadNewBars = !1,
                this._metadataRequestNextNumber = 1,
                this._fundamentalCounter = {},
                this._studyCounter = {},
                this._childStudyCounter = {},
                this._studySpecs = new Map,
                this._connectionsLimitReached = new N.WatchedValue(!1),
                this._sentMethodsCounters = new Map,
                this._receivedMethodsCounters = new Map,
                this._requestDataProblemsPromise = null,
                this._wsBackendConnection = e,
                this._wsBackendConnection.onReconnect(this._bindSocketEvents.bind(this)),
                this._wsBackendConnection.setLogger(H, d.getLogHistory),
                this._wsBackendConnection.setTelemetry(R.telemetry),
                this._bindSocketEvents(),
                this._isNonCountedStudy = () => !0,
                setInterval(( () => {
                    E.logNormal("Last 30 seconds:" + Y(this._trafficStats.lastChunk) + " Since last connect:" + Y(this._trafficStats.sinceConnect) + " Total traffic:" + Y(this._trafficStats.total)),
                    this._trafficStats.lastChunk = 0
                }
                ), 3e4),
                this._connectionsLimitReached.subscribe((e => {
                    e && this.disconnect()
                }
                ))
            }
            connect(e) {
                this._connectOnlyOptions = e,
                this._wsBackendConnection.isConnected() || this._wsBackendConnection.isConnecting() || this._wsBackendConnection.connect()
            }
            disconnect() {
                this._wsBackendConnection.disconnect()
            }
            sentMethodsCounters() {
                return this._sentMethodsCounters
            }
            receivedMethodsCounters() {
                return this._receivedMethodsCounters
            }
            defaultResolutions() {
                return (0,
                m.getDefaultResolutions)()
            }
            availableCurrencies() {
                return oe().then((e => e.currencies))
            }
            availableUnits() {
                return oe().then((e => {
                    const t = {};
                    for (const s of e.units)
                        t[s.type] || (t[s.type] = []),
                        t[s.type].push(s);
                    return t
                }
                ))
            }
            availablePriceSources() {
                return Promise.resolve([])
            }
            supportedSymbolsTypes() {
                const e = window.TradingView?.widgetCustomer ?? "";
                return "bovespa" === e ? g.filter((e => ["", "stock", "futures", "index"].includes(e.value))) : "cme" === e ? g.filter((e => e.value !== f.types.QUANDL)) : g
            }
            symbolsGrouping() {
                return {
                    futures: /^(.+?)([12]!|\w\d{4})?$/
                }
            }
            connected() {
                return !!this._isConnected
            }
            authTokenManager() {
                return (0,
                c.ensureDefined)(this._authTokenManager)
            }
            createSession(e, t) {
                this._sessions[e] = t,
                this._notificationHandlers[e] = {},
                this.connected() && this._isAuthTokenLoaded && t.onMessage({
                    method: h.ChartApiMessageMethod.Connected,
                    params: []
                })
            }
            removeSession(e) {
                delete this._sessions[e],
                delete this._notificationHandlers[e]
            }
            disconnectCount() {
                return this._disconnectCount || 0
            }
            getPingInfo() {
                return this._wsBackendConnection.getPingInfo()
            }
            connectionBanInfo() {
                return this._banInfo.readonly()
            }
            connectionsLimitReached() {
                return this._connectionsLimitReached.readonly()
            }
            serverTime() {
                return Math.round(this._serverTimeBasePoint + performance.now())
            }
            compensateConnectionLag(e) {
                const t = this.serverTime()
                  , s = Math.floor(e - t);
                s > 0 && (this._serverTimeBasePoint += s)
            }
            setBroker(e) {
                return e === this._brokerId || (this._brokerId = e,
                this._sendBrokerIdToSession(this._brokerId))
            }
            chartCreateSession(e, t) {
                return this._sendRequest("chart_create_session", [e, t])
            }
            chartDeleteSession(e) {
                return this._sendRequest("chart_delete_session", [e])
            }
            switchTimezone(e, t) {
                return this._sendRequest("switch_timezone", [e, t])
            }
            resolveSymbol(e, t, s, n) {
                return R.telemetry.timeCounters.series["resolve_symbol_" + e] = window.performance.now(),
                this._notificationHandlers[e][t] = new L.HandlerInfo(n,t,!0),
                this._sendRequest("resolve_symbol", [e, t, s])
            }
            requestFirstBarTime(e, t, s, n) {
                return this._notificationHandlers[e][t] = new L.HandlerInfo(n,t,!0),
                this._sendRequest("get_first_bar_time", [e, t, s])
            }
            createSeries(e, t, s, n, i, o, r, a) {
                R.telemetry.timeCounters.series.marks.push("create_series_" + e),
                this._notificationHandlers[e][t] = new L.HandlerInfo(a,t);
                const _ = ne(r);
                return this._sendRequest("create_series", [e, t, s, n, i, o, _])
            }
            removeSeries(e, t) {
                return delete this._notificationHandlers[e][t],
                this._sendRequest("remove_series", [e, t])
            }
            modifySeries(e, t, s, n, i, o, r, a) {
                this._notificationHandlers[e][t] = new L.HandlerInfo(a,t);
                const _ = ne(r);
                return this._sendRequest("modify_series", [e, t, s, n, i, _])
            }
            getStudyCounter(e) {
                return this._studyCounter[e] ?? 0
            }
            getFundamentalCounter(e) {
                return this._fundamentalCounter[e] ?? 0
            }
            requestMoreData(e, t, s, n) {
                if (void 0 === s || void 0 === n)
                    throw new Error("unsupported request to load more data, bars=" + s);
                const i = t;
                return this._notificationHandlers[e][i] = new L.HandlerInfo(n,i),
                this._sendRequest("request_more_data", [e, i, s])
            }
            requestMoreTickmarks(e, t, s, n) {
                return n && (this._notificationHandlers[e][t] = new L.HandlerInfo(n,t)),
                this._sendRequest("request_more_tickmarks", [e, t, s])
            }
            setFutureTickmarksMode(e, t) {
                this._sendRequest("set_future_tickmarks_mode", [e, t])
            }
            requestDataProblems() {
                return this._requestDataProblemsPromise || (this._requestDataProblemsPromise = this.connectDfd.then(( () => new Promise(( (e, t) => {
                    this._onDataProblemsPromiseErrback = t,
                    this._sendRequest("request_data_problems", []) ? this._onDataProblemsPromiseCb = e : t()
                }
                )))).finally(( () => {
                    this._requestDataProblemsPromise = null
                }
                ))),
                this._requestDataProblemsPromise
            }
            async requestMetadata() {
                return null === this._metadataDeferredPromise && (this._metadataDeferredPromise = (0,
                v.createDeferredPromise)(),
                this._metadataDeferredPromise.promise.finally(( () => {
                    this._metadataDeferredPromise = null
                }
                )),
                this._requestMetadata()),
                this._metadataDeferredPromise.promise
            }
            allStudiesMetadata() {
                throw new Error("This method is not implemented")
            }
            setLoadNew(e) {
                this._loadNewBars = !!e
            }
            setIsNonCountedStudyFn(e) {
                this._isNonCountedStudy = e
            }
            canCreateStudy(e, t, s) {
                const {id: n, child: i, fundamental: o} = t
                  , r = (0,
                c.ensureNotNull)((0,
                C.getConfig)("STUDY_ON_STUDY")).child_limit;
                if (i && (!(0,
                C.enabled)("STUDY_ON_STUDY") || (this._childStudyCounter[e] ?? 0) >= r))
                    return {
                        success: !1,
                        reason: "child",
                        limitValue: r
                    };
                if (s)
                    return {
                        success: !0
                    };
                const a = (0,
                c.ensureNotNull)((0,
                C.getConfig)("FUNDAMENTALS_ON_CHART")).limit;
                if (o && (!(0,
                C.enabled)("FUNDAMENTALS_ON_CHART") || this.getFundamentalCounter(e) >= a))
                    return {
                        success: !1,
                        reason: "fundamental",
                        limitValue: a
                    };
                const _ = (0,
                c.ensureNotNull)((0,
                C.getConfig)("INDICATORS_ON_CHART")).limit;
                return o || this._isNonCountedStudy(n) || (0,
                C.enabled)("INDICATORS_ON_CHART") && !(this.getStudyCounter(e) >= _) ? {
                    success: !0
                } : {
                    success: !1,
                    reason: "general",
                    limitValue: _
                }
            }
            createStudy(e, t, s, n, i, o, r, a) {
                const _ = this.canCreateStudy(e, a);
                return _.success || "child" !== _.reason ? (this._notificationHandlers[e][t] = new L.HandlerInfo(r,t),
                this._sendRequest("create_study", [e, t, s, n, i, o]),
                a.fundamental ? K(this._fundamentalCounter, e) : this._isNonCountedStudy(a.id) || K(this._studyCounter, e),
                a.child && K(this._childStudyCounter, e),
                this._studySpecs.set(J(e, t), a),
                !0) : ((0,
                b.showTooManyStudiesNotice)(_.limitValue),
                !1)
            }
            modifyStudy(e, t, s, n, o, r) {
                Z(r = r ?? 0, this._childStudyCounter, e),
                0 !== r && ((0,
                c.ensureDefined)(this._studySpecs.get(J(e, t))).child = r > 0),
                this._notificationHandlers[e][t] = new L.HandlerInfo(o,t);
                const a = e + t;
                if (this._modifyStudyMap.has(a)) {
                    return (0,
                    c.ensureDefined)(this._modifyStudyMap.get(a))(e, t, s, n) ?? !0
                }
                {
                    const o = (0,
                    i.default)(( (e, t, s, n) => this._sendRequest("modify_study", [e, t, s, n])), 500, {
                        maxWait: 550
                    });
                    return this._modifyStudyMap.set(a, o),
                    o(e, t, s, n) ?? !0
                }
            }
            notifyStudy(e, t, s, n) {
                return H.logNormal(`Send notify_study, [${e}, ${t}, ${s}, ${JSON.stringify(n)}]`),
                this._sendRequest("notify_study", [e, t, s, JSON.stringify(n)])
            }
            removeStudy(e, t) {
                const s = e + t;
                delete this._notificationHandlers[e][t],
                this._modifyStudyMap.get(s)?.flush();
                const n = this._sendRequest("remove_study", [e, t]);
                if (!1 === n)
                    return !1;
                this._modifyStudyMap.delete(s);
                const i = J(e, t)
                  , o = (0,
                c.ensureDefined)(this._studySpecs.get(i));
                return this._studySpecs.delete(i),
                o.fundamental ? X(this._fundamentalCounter, e) : this._isNonCountedStudy(o.id) || X(this._studyCounter, e),
                o.child && X(this._childStudyCounter, e),
                n
            }
            createPointset(e, t, s, n, i, o, r) {
                return this._notificationHandlers[e][t] = new L.HandlerInfo(r,t),
                this._sendRequest("create_pointset", [e, t, s, n, i, o])
            }
            modifyPointset(e, t, s, n, i) {
                return this._notificationHandlers[e][t] = new L.HandlerInfo(i,t),
                this._sendRequest("modify_pointset", [e, t, s, n])
            }
            removePointset(e, t) {
                return delete this._notificationHandlers[e][t],
                this._sendRequest("remove_pointset", [e, t])
            }
            getMarks(e, t, s, n, i) {
                throw Error("This method is not implemented")
            }
            getTimescaleMarks(e, t, s, n, i) {
                throw Error("This method is not implemented")
            }
            quoteCreateSession(e) {
                return this._sendRequest("quote_create_session", [e])
            }
            quoteDeleteSession(e) {
                return this._sendRequest("quote_delete_session", [e])
            }
            quoteAddSymbols(e, t) {
                return this._sendRequest("quote_add_symbols", [e, t])
            }
            quoteRemoveSymbols(e, t) {
                return this._sendRequest("quote_remove_symbols", [e, t])
            }
            quoteFastSymbols(e, t) {
                return this._sendRequest("quote_fast_symbols", [e, t])
            }
            quoteSetFields(e, t) {
                return this._sendRequest("quote_set_fields", [e, t])
            }
            quoteHibernateAll(e) {
                return this._sendRequest("quote_hibernate_all", [e])
            }
            depthCreateSession(e, t, s) {
                return this._sendRequest("depth_create_session", [e, t, s])
            }
            depthDeleteSession(e) {
                return this._sendRequest("depth_delete_session", [e])
            }
            depthSetSymbol(e, t) {
                return this._sendRequest("depth_set_symbol", [e, t])
            }
            depthClearSymbol(e) {
                return this._sendRequest("depth_clear_symbol", [e])
            }
            depthSetScale(e, t) {
                return this._sendRequest("depth_set_scale", [e, t])
            }
            unpack(e) {
                return this._dataHandleModule.unpack(e)
            }
            sendRequest(e, t) {
                return this._sendRequest(e, t)
            }
            enableLowQualityMode() {
                this._lowQualityEnabled = !0,
                this._sendLowQualityModeIfEnabled()
            }
            _init() {
                this._notificationHandlers = {},
                this._studyCounter = {},
                this._childStudyCounter = {},
                this._fundamentalCounter = {},
                this._modifyStudyMap = new Map
            }
            _sendRequest(e, t) {
                const s = this._sentMethodsCounters.get(e) ?? 0;
                if (this._sentMethodsCounters.set(e, s + 1),
                0 !== this._sendingQueuedRequestsCount)
                    return this._pendingMessagesQueue.push({
                        method: e,
                        args: t
                    }),
                    !0;
                const i = this._dataHandleModule[e].apply(this._dataHandleModule, t)
                  , c = {
                    m: e,
                    p: (0,
                    n.default)(i)
                }
                  , d = c.m.includes("study") && c.p[5];
                d && function(e) {
                    if (!(0,
                    o.isObject)(e))
                        return !1;
                    for (const t of Object.keys(e)) {
                        const s = e[t];
                        if (!((0,
                        o.isObject)(s) || (0,
                        a.default)(s) || (0,
                        r.default)(s) || (0,
                        _.default)(s)))
                            return !1
                    }
                    return !0
                }(d) && "text"in d && (d.text = d.text.slice(0, 10));
                const l = JSON.stringify(c);
                if (i.length > 0) {
                    const e = i[0];
                    e.startsWith("qs_") ? F.logNormal("send: " + l) : e.startsWith("cs_") && A.logNormal("send: " + l)
                } else
                    H.logNormal("send: " + l);
                const h = this._dataHandleModule.prepareEncodeMessage(e, i);
                return this._wsBackendConnection.send(h)
            }
            _onConnect() {
                if (this.connected())
                    return;
                if (this._trafficStats.sinceConnect = 0,
                this._isAuthTokenLoaded = !1,
                this._connectOnlyOptions = this._connectOnlyOptions || {},
                this._authTokenDfd = this._getAuthTokenDfd(this._connectOnlyOptions.tokenGrabSession),
                this._connectOnlyOptions = {},
                this.sessionid = this._wsBackendConnection.getSessionId(),
                !this.sessionid || this._isConnected)
                    return;
                this._pendingMessagesQueue = [],
                this._sendingQueuedRequestsCount = 0,
                this._studyCounter = {},
                this._childStudyCounter = {},
                this._fundamentalCounter = {},
                this._studySpecs.clear(),
                this._isConnected = !0,
                this._banInfo.setValue(null),
                this._connectionsLimitReached.setValue(!1);
                const e = JSON.parse(this.sessionid);
                this._sendLowQualityModeIfEnabled(),
                this._metadataServerHash = e.studies_metadata_hash || null;
                const t = this._wsBackendConnection.getConnectionEstablished();
                try {
                    this._serverTimeBasePoint = Math.round(e.timestampMs - t)
                } catch (e) {
                    this._serverTimeBasePoint = Date.now() - performance.now()
                }
                if (H.logInfo("Time shift with server: " + this._formatTime(this.serverTime() - Date.now())),
                this._authTokenDfd) {
                    this._sendingQueuedRequestsCount += 1,
                    H.logInfo("Wait for auth token before send messages");
                    const e = this._authTokenDfd;
                    e.then((t => {
                        if (null !== this._authTokenDfd && this._authTokenDfd === e) {
                            if (H.logNormal("Auth token request is finished, token: " + Boolean(t)),
                            this._authTokenDfd = null,
                            t) {
                                const e = [{
                                    method: "set_auth_token",
                                    args: [t]
                                }];
                                if (W) {
                                    const t = window.initData && window.initData.currentLocaleInfo;
                                    t && e.push({
                                        method: "set_locale",
                                        args: [t.iso, t.flag.toUpperCase()]
                                    })
                                }
                                this._pendingMessagesQueue.unshift(...e)
                            }
                            this._onSendingQueueRequestFinished(),
                            this._isAuthTokenLoaded = !0,
                            this._notifySessions({
                                method: h.ChartApiMessageMethod.Connected,
                                params: []
                            })
                        } else
                            H.logNormal("Comes auth token after requesting new token or after socket disconnected")
                    }
                    )).catch((e => {
                        H.logNormal((0,
                        w.errorToString)(e))
                    }
                    ))
                } else
                    H.logWarn("Deferred auth token object is not valid"),
                    this._isAuthTokenLoaded = !0;
                "" !== this._brokerId && this._sendBrokerIdToSession(this._brokerId);
                const s = this._wsBackendConnection.getConnectionStart();
                R.telemetry.setSessionInfo(this.sessionid),
                R.telemetry.sendChartReport("websocket_connected"),
                R.telemetry.sendChartReport("websocket_connection_time_frame", {
                    value: t - s
                }),
                R.telemetry.sendChartReport("reconnect_count_frame", {
                    value: this._wsBackendConnection.getReconnectCount()
                }),
                R.telemetry.sendChartReport("redirect_count_frame", {
                    value: this._wsBackendConnection.getRedirectCount()
                }),
                V || (V = !0,
                R.telemetry.sendChartReport("before_websocket_connection_time_frame", {
                    value: s
                })),
                this._wsBackendConnection.resetCounters(),
                clearTimeout(this._telemetryDisconnectTimeout)
            }
            _formatTime(e) {
                return `${(e / 1e3).toFixed(2)} seconds.`
            }
            _dispatchNotification(e, t) {
                if ("request_data_problems" === e.method && this._onDataProblemsPromiseCb)
                    return void this._onDataProblemsPromiseCb(e.params);
                if (e.method === D.WebchartChartSessionResponseMethod.StudiesMetadata && null !== this._metadataDeferredPromise)
                    return void this._processedMetadata(e);
                const s = e.params.shift();
                if (!this._notificationHandlers[s])
                    return;
                if ("symbol_resolved" === e.method) {
                    const t = e.params[1].full_name;
                    R.telemetry.sendChartReport("symbol_resolved", {
                        count: 1,
                        additional: {
                            symbol: t
                        }
                    });
                    const n = R.telemetry.timeCounters.series["resolve_symbol_" + s];
                    "number" == typeof n && R.telemetry.sendChartReport("symbol_resolve_time_frame", {
                        value: window.performance.now() - n,
                        additional: {
                            symbol: t
                        }
                    })
                }
                if (["series_error", "series_completed"].includes(e.method) && R.telemetry.timeCounters.series.marks.length > 0) {
                    const e = "create_series_" + s
                      , t = R.telemetry.timeCounters.series.marks.indexOf(e);
                    t >= 0 && R.telemetry.timeCounters.series.marks.splice(t, 1)
                }
                G || "series_error" !== e.method || (G = !0);
                const n = this._wsBackendConnection.getConnectionEstablished();
                if (null !== n && "series_completed" === e.method && (G || (G = !0,
                R.telemetry.sendChartReport("first_series_full_time_frame", {
                    value: window.performance.now() - n
                }),
                R.telemetry.timeCounters.series.marks = []),
                j || (j = !0,
                R.telemetry.sendChartReport("page_full_load_time_frame", {
                    value: window.performance.now()
                }))),
                s.startsWith("cs_")) {
                    let s = "recv: " + t;
                    "data_update" === e.method ? (s = (0,
                    d.isHighRateEnabled)() ? s : s.slice(0, 500),
                    O.logNormal(this._appendDuration(s, e.time))) : "study_loading" === e.method ? U.logNormal(this._appendDuration(s, e.time)) : "tickmark_update" === e.method ? B.logNormal(this._appendDuration(s, e.time)) : A.logNormal(this._appendDuration(s, e.time))
                }
                if (s.startsWith("qs_")) {
                    ("quote_symbol_data" === e.method ? $.logNormal : F.logNormal)("recv: " + t)
                }
                switch (e.method) {
                case D.WebchartChartSessionResponseMethod.TimeScaleUpdate:
                    {
                        const t = this._dataHandleModule.getTimescaleObjects(e)
                          , n = this._dataHandleModule.getTimescaleChangeset(e)
                          , i = this._convertTimescaleResponse(n);
                        this._sessions[s].onMessage({
                            method: D.WebchartChartSessionResponseMethod.TimeScaleUpdate,
                            params: i
                        }),
                        this._dataHandleModule.prepareDataUpdateObjects(s, t, ( (e, t, s) => {
                            this._invokeNotificationHandler(e, t, s)
                        }
                        ));
                        break
                    }
                case "tickmark_update":
                    const t = {
                        ...this._convertTimescaleResponse(e.params[0]),
                        changes: []
                    };
                    this._sessions[s].onMessage({
                        method: D.WebchartChartSessionResponseMethod.TimeScaleUpdate,
                        params: t
                    });
                    break;
                case D.WebchartChartSessionResponseMethod.DataUpdate:
                    {
                        const t = this._dataHandleModule.getDataUpdateObjects(e);
                        this._dataHandleModule.prepareDataUpdateObjects(s, t, ( (e, t, s) => {
                            this._invokeNotificationHandler(e, t, s)
                        }
                        ));
                        break
                    }
                case "index_update":
                    for (const t in e.params[0])
                        if (e.params[0].hasOwnProperty(t)) {
                            const n = {
                                method: "index_update",
                                params: e.params[0][t]
                            };
                            this._invokeNotificationHandler(s, t, n)
                        }
                    break;
                case D.WebchartResponseMethod.CriticalError:
                    H.logInfo(new Date + " critical_error session:" + this.sessionid + " reason:" + e.params[0]),
                    R.telemetry.sendChartReport("critical_error"),
                    this._sessions[s].onMessage({
                        method: D.WebchartResponseMethod.CriticalError,
                        params: e.params
                    });
                    break;
                case "timescale_completed":
                case "quote_symbol_data":
                case "quote_list_fields":
                case "quote_completed":
                case "depth_symbol_error":
                case "depth_symbol_success":
                case "dd":
                case "dpu":
                case "depth_bar_last_value":
                    this._sessions[s].onMessage({
                        method: e.method,
                        params: e.params
                    });
                    break;
                case "clear_data":
                    for (const t in e.params[0])
                        e.params[0].hasOwnProperty(t) && this._invokeNotificationHandler(s, t, {
                            method: D.WebchartChartSessionResponseMethod.ClearData,
                            params: e.params[0][t]
                        });
                    break;
                case D.WebchartReplaySessionResponseMethod.ReplayPoint:
                case D.WebchartReplaySessionResponseMethod.ReplayResolutions:
                case D.WebchartReplaySessionResponseMethod.ReplayDataEnd:
                case D.WebchartReplaySessionResponseMethod.ReplayInstanceId:
                case D.WebchartReplaySessionResponseMethod.ReplayDepth:
                case D.WebchartReplaySessionResponseMethod.ReplayError:
                case D.WebchartReplaySessionResponseMethod.ReplayOk:
                    this._sessions[s].onMessage(e);
                    break;
                case "series_timeframe":
                    e.params[4] = function(e) {
                        if (null == e)
                            return null;
                        const t = /r,(\d+):(\d+)/.exec(e);
                        return null !== t ? {
                            from: Number(t[1]),
                            to: Number(t[2]),
                            type: "time-range"
                        } : {
                            value: e,
                            type: "period-back"
                        }
                    }(e.params[4]),
                    this._invokeNotificationHandler(s, e.params[0], e);
                    break;
                case "symbol_resolved":
                    !function(e) {
                        if (void 0 === e.corrections) {
                            const t = (e.subsessions ?? []).find((t => t.id === e.subsession_id));
                            void 0 !== t && (e.corrections = t["session-correction"])
                        }
                    }(e.params[1]),
                    this._invokeNotificationHandler(s, e.params[0], e);
                    break;
                default:
                    this._invokeNotificationHandler(s, e.params[0], e)
                }
            }
            _notifySessions(e) {
                for (const t in this._sessions)
                    if (this._sessions.hasOwnProperty(t)) {
                        const s = this._sessions[t];
                        "function" == typeof s.onMessage && s.onMessage(e)
                    }
            }
            _onMessage(e) {
                this._calcTrafficStats(e);
                const t = this.unpack(e);
                this._receivedMethodsCounters.set(t.method, (this._receivedMethodsCounters.get(t.method) ?? 0) + 1),
                "t_ms"in t && (0,
                r.default)(t.t_ms) && window.ChartApiInstance.compensateConnectionLag(t.t_ms),
                "protocol_switched" !== t.method ? "protocol_error" !== t.method ? this._dispatchNotification(t, e) : this._processProtocolError(t) : H.logError("Unexpected protocol changing request, try skipping. Requested protocol:" + t.params[0])
            }
            async _processedMetadata(e) {
                const t = (0,
                c.ensureNotNull)(this._metadataDeferredPromise)
                  , s = await this._initCachePromise
                  , i = window.pro.hash()
                  , o = u.enabled("widget");
                try {
                    await s.setValue(se, (0,
                    n.default)(e));
                    const r = Array.from(new Set(e.params[1].metainfo.map((e => {
                        return `${(t = (0,
                        T.parseIdString)(e.id)).packageId}-${t.version}`;
                        var t
                    }
                    ))));
                    if (H.logNormal(`Updated studies_metadata cache, unique package ids: ${r.join(", ")}`),
                    !o)
                        try {
                            await s.setValue(te, (0,
                            n.default)(i)),
                            H.logNormal("Updated pro_hash cache")
                        } catch (e) {
                            t.reject(),
                            H.logError("Cannot update pro_hash cache, reason: " + e)
                        }
                } catch (e) {
                    t.reject(),
                    H.logError("Cannot update studies_metadata cache, reason: " + e)
                }
                t.resolve((0,
                n.default)(e))
            }
            _invokeNotificationHandler(e, t, s) {
                if (void 0 === t)
                    return;
                const n = this._notificationHandlers[e][t];
                void 0 !== n && (n.singleShot && delete this._notificationHandlers[e][t],
                n.handler?.(s))
            }
            _convertTimescaleResponse(e) {
                return this._dataHandleModule.convertTimescaleResponse(e)
            }
            _appendDuration(e, t) {
                return t ? `${e}, duration: ${this._formatTime(this.serverTime() - 1e3 * t)}` : e
            }
            async _requestMetadata() {
                const e = this._makeNextRequestId();
                P.logNormal(`Requesting metainfo #${e}`);
                const t = (0,
                c.ensureNotNull)(this._metadataDeferredPromise)
                  , s = window.pro
                  , i = s.hash()
                  , o = u.enabled("widget");
                H.logNormal("Requesting pro hash");
                try {
                    const r = await this._initCachePromise;
                    await r.migrateValue("pro_hash", te),
                    await r.migrateValue(ee, se);
                    const a = await r.getValue(te);
                    if (null !== a && a === i || o) {
                        H.logNormal("Pro hash has not changed, requesting from local");
                        const o = await r.getValue(se)
                          , a = null !== o && o.params[1].hash || null;
                        if (null === a || null === this._metadataServerHash || this._metadataServerHash !== a)
                            H.logNormal(`Metadata hash has changed (cached: '${a}', server: '${this._metadataServerHash}')`),
                            this._requestMetadataFromServer(e);
                        else {
                            if (!s.hasPackage("tv-volumebyprice") || void 0 !== o.params[1].metainfo.find((e => e.id.includes("@tv-volumebyprice"))))
                                return H.logNormal("Using studies_metadata from browser cache"),
                                void t.resolve((0,
                                n.default)(o));
                            H.logNormal(`De-sync detected! pro.hash contains VbPR studies, but data from cache doesn't and pro.hash isn't changed, pro.hash=${i}`),
                            this._requestMetadataFromServer(e)
                        }
                    } else
                        H.logNormal(`Pro hash has changed (cached: '${a}', current: '${i}')`),
                        this._requestMetadataFromServer(e)
                } catch (t) {
                    H.logError("Cannot get studies_metadata, reason: " + t),
                    this._requestMetadataFromServer(e)
                } finally {
                    P.logNormal(`Requesting studies metadata #${e} finished`)
                }
            }
            _makeNextRequestId() {
                return "metadata_" + this._metadataRequestNextNumber++
            }
            _processProtocolError(e) {
                const t = e.params[0];
                H.logError(`Protocol error. Reason=${t}.`),
                "banned" !== t && "banned by user_id" !== t && "banned by ip" !== t || (this._banInfo.setValue({
                    reason: t
                }),
                this.disconnect()),
                this._connectionsLimitReached.setValue("user connections limit reached" === t)
            }
            _requestMetadataFromServer(e) {
                return H.logNormal("Request studies_metadata from server"),
                this._sendRequest("request_studies_metadata", [e])
            }
            _bindSocketEvents() {
                this.connectDfd = new Promise(( (e, t) => {
                    this._wsBackendConnection.on("connect", ( () => {
                        this._onConnect(),
                        e()
                    }
                    )),
                    this._wsBackendConnection.on("message", this._onMessage.bind(this)),
                    this._wsBackendConnection.on("disconnect", ( () => {
                        this._authTokenDfd && (this._authTokenDfd = null),
                        this._onDataProblemsPromiseErrback && this._onDataProblemsPromiseErrback(),
                        this._isConnected = !1,
                        this._notifySessions({
                            method: h.ChartApiMessageMethod.Disconnected,
                            params: []
                        }),
                        this._banInfo.value() || (this._metadataDeferredPromise = null),
                        this._disconnectCount = (this._disconnectCount || 0) + 1,
                        this._wsBackendConnection.isConnected() && (this._telemetryDisconnectTimeout = setTimeout(( () => {
                            R.telemetry.sendChartReport("disconnect")
                        }
                        ), 5e3),
                        this._wsBackendConnection.isMaxReconnects() && (this._notifySessions({
                            method: h.ChartApiMessageMethod.ReconnectBailout,
                            params: []
                        }),
                        t(),
                        R.telemetry.sendChartReport("reconnect_bailout")))
                    }
                    ))
                }
                ))
            }
            _calcTrafficStats(e) {
                const t = e.length;
                this._trafficStats.total += t,
                this._trafficStats.sinceConnect += t,
                this._trafficStats.lastChunk += t
            }
            _sendBrokerIdToSession(e) {
                return !Q || this._sendRequest("set_broker", [e])
            }
            _sendLowQualityModeIfEnabled() {
                this._lowQualityEnabled && this.connected() && this._sendRequest("set_data_quality", [])
            }
            _getAuthTokenDfd(e) {
                if (this._loadNewBars)
                    return Promise.resolve("load_new_token");
                if (u.enabled("widget") || -1 !== window.location.search.indexOf("widget_token") || -1 !== window.location.hash.indexOf("widget_token")) {
                    const e = window.TradingView && window.TradingView.widgetCustomer || "";
                    return Promise.resolve(p[e] || "widget_user_token")
                }
                return window.is_authenticated ? (this._authTokenManager || (this._authTokenManager = new l.AuthToken,
                this._authTokenManager.invalidated.subscribe(null, ( () => {
                    this._authTokenManager?.get().then((e => {
                        e && this.connected() && this._sendRequest("set_auth_token", [e])
                    }
                    ))
                }
                ))),
                this._authTokenManager.get(e)) : Promise.resolve("unauthorized_user_token")
            }
            _onSendingQueueRequestFinished() {
                this._sendingQueuedRequestsCount -= 1,
                H.logInfo(`Sending queue request finished. Remaining pending requests=${this._sendingQueuedRequestsCount}`),
                this._sendingQueuedRequestsCount < 0 && H.logError(`Invalid queue state=${this._sendingQueuedRequestsCount}`),
                0 === this._sendingQueuedRequestsCount && this._flushPendingMessages()
            }
            _flushPendingMessages() {
                H.logInfo(`Flush pending messages. Count=${this._pendingMessagesQueue.length}`),
                this._pendingMessagesQueue.forEach((e => this._sendRequest(e.method, e.args))),
                this._pendingMessagesQueue = []
            }
        }
        "undefined" != typeof window && (window.ChartApiInstance = new re(window.WSBackendConnection))
    }
    ,
    534197: (e, t, s) => {
        s.d(t, {
            getQuoteSessionInstance: () => o
        });
        var n = s(288533);
        const i = {};
        function o(e="full") {
            return i[e] || function(e="full", t) {
                i[e] = t
            }(e, new n(e)),
            i[e]
        }
    }
    ,
    544151: (e, t, s) => {
        s.d(t, {
            getMinTickData: () => _,
            makeVariableMinTickData: () => d
        });
        var n = s(960521)
          , i = s(150335)
          , o = s(405942)
          , r = s(462140);
        function a(e) {
            return e ? (0,
            n.Big)(e.minMove).div(e.priceScale).toNumber() : NaN
        }
        function _(e) {
            const {minTick: t, price: s, variableMinTickData: n, shouldCheckForEquality: o} = e
              , r = (0,
            i.isNumber)(t) ? c(t) : t;
            return void 0 === n ? r : function(e, t, s=!1) {
                for (let n = 0; n < t.length; n++) {
                    if (e < t[n].price)
                        return t[n].minTick;
                    if (s && e === t[n].price)
                        return t[n].minTick
                }
                return t[t.length - 1].minTick
            }(s, n, o)
        }
        function c(e) {
            const t = (0,
            o.numOfDecimalPlaces)(e)
              , s = Math.pow(10, t);
            return {
                priceScale: s,
                minMove: (0,
                n.Big)(e).mul(s).toNumber()
            }
        }
        function d(e, t) {
            const s = [{
                minTick: (0,
                i.isNumber)(e) ? c(e) : e,
                price: 1 / 0,
                maxIndex: 1 / 0
            }];
            try {
                const e = t.split(" ").map(( (e, t) => (0,
                r.isEven)(t) ? function(e) {
                    const t = Number(e);
                    if (Number.isFinite(t))
                        return c(t);
                    {
                        const t = e.split("/");
                        if (t.length < 2 || t.length > 3)
                            throw new Error(`Unexpected mintick: ${e}`);
                        const s = Number(t[1])
                          , n = Number(t[0]);
                        if (!Number.isFinite(s) || !Number.isFinite(n))
                            throw new Error(`Unexpected mintick: ${e}`);
                        const i = 3 === t.length ? Number(t[2]) : void 0;
                        if (void 0 !== i && !Number.isFinite(i))
                            throw new Error(`Unexpected mintick: ${e}`);
                        const o = {
                            priceScale: s,
                            minMove: n
                        };
                        return void 0 !== i && (o.minMove2 = i),
                        o
                    }
                }(e) : function(e) {
                    const t = Number(e);
                    if (Number.isNaN(t))
                        throw new Error(`Unexpected price limit: ${e}`);
                    return t
                }(e)));
                if ((0,
                r.isEven)(e.length))
                    throw new Error("Theme must not be event number of elements");
                const s = [];
                for (let t = 0; t < e.length; t += 2) {
                    const i = e[t + 1] ?? 1 / 0
                      , o = s[s.length - 1]?.price ?? 0
                      , r = s[s.length - 1]?.maxIndex ?? 0
                      , _ = i === 1 / 0 ? 1 / 0 : new n.Big(i).minus(o).div(a(e[t])).plus(r).toNumber();
                    s.push({
                        minTick: e[t],
                        price: i,
                        maxIndex: _
                    })
                }
                return s
            } catch {
                return s
            }
        }
    }
    ,
    909456: (e, t, s) => {
        s.d(t, {
            numberToStringWithLeadingZero: () => i
        });
        var n = s(536794);
        function i(e, t) {
            if (!(0,
            n.isNumber)(e))
                return "n/a";
            if (!(0,
            n.isInteger)(t))
                throw new TypeError("invalid length");
            if (t < 0 || t > 24)
                throw new TypeError("invalid length");
            if (0 === t)
                return e.toString();
            return ("00000000000000000000" + e.toString()).slice(-t)
        }
    }
    ,
    89831: (e, t, s) => {
        s.d(t, {
            PriceFormatter: () => a
        });
        var n = s(618648)
          , i = s(803431)
          , o = s(536794)
          , r = s(47522);
        class a {
            constructor(e={}) {
                this.type = "price";
                const {minMove2: t, fractional: s, variableMinTick: a, ignoreMinMove: _, ignoreLocaleNumberFormat: c} = e
                  , d = !e.minMove || _ ? 1 : e.minMove
                  , l = (0,
                o.isNumber)(e.priceScale) && (0,
                o.isInteger)(e.priceScale) ? e.priceScale : 100
                  , h = (0,
                r.calculateDecimal)(l, d, s, t)
                  , u = {
                    ...e,
                    minMove: d,
                    priceScale: l,
                    fractionalLength: h
                };
                if (l < 0)
                    throw new TypeError("invalid base");
                this._priceScale = l,
                this._minMove = d,
                this._minMove2 = t,
                this._fractional = s,
                this._variableMinTick = a,
                this._ignoreMinMove = _,
                this._fractionalLength = h,
                this._ignoreLocaleNumberFormat = c,
                this._noExponentialForm = e.noExponentialForm,
                this._implementation = s ? new i.FractionalPriceFormatterImpl(u) : new n.DecimalPriceFormatterImpl(u)
            }
            isFractional() {
                return !!this._fractional
            }
            state() {
                return {
                    minMove: this._minMove,
                    minMove2: this._minMove2,
                    priceScale: this._priceScale,
                    variableMinTick: this._variableMinTick,
                    ignoreMinMove: this._ignoreMinMove,
                    fractional: this._fractional,
                    noExponentialForm: this._noExponentialForm
                }
            }
            formatChange(e, t, s) {
                return this._implementation.formatImpl(e - t, {
                    ...s,
                    variableMinTickDataPrice: Math.min(Math.abs(e), Math.abs(t))
                })
            }
            format(e, t) {
                return this._implementation.formatImpl(e, t)
            }
            parse(e, t) {
                return this._implementation.parse(e, t)
            }
            hasForexAdditionalPrecision() {
                return this._implementation.hasForexAdditionalPrecision()
            }
            static serialize(e) {
                return e.state()
            }
            static deserialize(e) {
                return new a(e)
            }
        }
    }
    ,
    303999: (e, t, s) => {
        s.d(t, {
            isTicksEnabled: () => i
        });
        var n = s(638456);
        s(931924);
        function i() {
            return !(0,
            n.onWidget)()
        }
    }
    ,
    302221: (e, t, s) => {
        var n;
        !function(e) {
            e.Monthly = "m",
            e.ThreeMonths = "3m",
            e.OneYear = "y"
        }(n || (n = {}))
    }
    ,
    912465: (e, t, s) => {
        function n(e, t) {
            const s = t || window.locale || "en";
            let n = e[s] ? e[s] : e.en;
            return n = "tradingview.com" === n ? "www.tradingview.com" : n,
            n ? document.location.protocol + "//" + n : ""
        }
        s.d(t, {
            determineBaseUrl: () => n
        })
    }
    ,
    659923: (e, t, s) => {
        s.d(t, {
            showTooManyStudiesNotice: () => o
        });
        var n = s(444372)
          , i = s(779923);
        function o(e) {
            (0,
            i.showWarning)({
                title: n.t(null, void 0, s(966719)),
                text: n.t(null, {
                    replace: {
                        number: `${e}`
                    }
                }, s(586146))
            })
        }
    }
    ,
    232759: (e, t, s) => {
        s.d(t, {
            getProductForTrial: () => o,
            isTrialProduct: () => i
        });
        s(142492),
        s(444372),
        s(302221);
        const n = "_trial";
        function i(e) {
            return new RegExp(n + "$").test(e)
        }
        function o(e) {
            return e.split(n)[0]
        }
    }
    ,
    925049: (e, t, s) => {
        function n() {
            let e, t;
            return {
                promise: new Promise(( (s, n) => {
                    e = s,
                    t = n
                }
                )),
                reject: t,
                resolve: e
            }
        }
        s.d(t, {
            createDeferredPromise: () => n
        })
    }
    ,
    623213: (e, t, s) => {
        s.r(t),
        s.d(t, {
            guid: () => n.guid,
            randomHash: () => n.randomHash,
            randomHashN: () => n.randomHashN
        });
        var n = s(900608)
    }
    ,
    999102: (e, t, s) => {
        function n(e) {
            return e.reduce((function(e, t, s) {
                return ~e.indexOf(t) || e.push(t),
                e
            }
            ), [])
        }
        s.r(t),
        s.d(t, {
            uniq: () => n
        })
    }
    ,
    974629: (e, t, s) => {
        function n(e) {
            const t = new URL(e,document.baseURI);
            return o(t) && i(t)
        }
        s.d(t, {
            isInternalHost: () => r,
            isSafeUrl: () => n
        });
        const i = e => !e.username
          , o = e => "http:" === e.protocol || "https:" === e.protocol;
        function r(e, t=window.location.hostname) {
            const s = "." === t.slice(-1) ? 3 : 2
              , n = t.toLowerCase().split(".").slice(-s)
              , i = e.toLowerCase().split(".").slice(-n.length);
            return n.join(".") === i.join(".")
        }
    }
    ,
    199583: (e, t, s) => {
        s.d(t, {
            addUtmToUrl: () => i
        });
        var n = s(283834);
        function i(e, t) {
            if (!/([a-zA-Z0-9.-]*tradingview.com)|localhost/.test(e))
                return e;
            const s = (0,
            n.buildUtmQueryString)(t);
            if ("" === s)
                return e;
            const i = e.indexOf("?")
              , o = e.indexOf("#")
              , r = -1 !== o;
            if (-1 !== i && (!r || i < o)) {
                return `${e.slice(0, i)}?${r ? e.slice(i + 1, o) : e.slice(i + 1)}&${s}${r ? e.slice(o) : ""}`
            }
            if (r) {
                return `${e.slice(0, o)}?${s}${e.slice(o)}`
            }
            return `${e}?${s}`
        }
    }
    ,
    735566: (e, t, s) => {
        var n;
        s.r(t),
        s.d(t, {
            LOGLEVEL: () => n,
            getLogHistory: () => b,
            getLogLevel: () => u,
            getLogger: () => w,
            getRawLogHistory: () => g,
            isHighRateEnabled: () => m,
            loggingOff: () => C,
            loggingOn: () => q,
            serializeLogHistoryEntry: () => y,
            setHighRateStatus: () => p,
            setLogLevel: () => f
        }),
        function(e) {
            e[e.ERROR = 1] = "ERROR",
            e[e.WARNING = 2] = "WARNING",
            e[e.INFO = 3] = "INFO",
            e[e.NORMAL = 4] = "NORMAL",
            e[e.DEBUG = 5] = "DEBUG"
        }(n || (n = {}));
        let i = 0;
        const o = 1e3
          , r = [];
        let a = null
          , _ = null
          , c = null
          , d = null
          , l = n.WARNING
          , h = !1;
        function u() {
            return l
        }
        function m() {
            return h
        }
        function f(e) {
            e = Math.max(n.ERROR, Math.min(n.DEBUG, e)),
            l = e
        }
        function p(e) {
            h = e
        }
        function g(e, t) {
            let s = r.reduce(( (e, t) => e.concat(t)), []);
            return s.sort(( (e, t) => e.id - t.id)),
            void 0 !== t && (s = s.filter((e => e.subSystemId === t))),
            "number" == typeof e && (s = s.slice(-e)),
            s
        }
        function y(e) {
            return new Date(e.timestamp).toISOString() + ":" + e.subSystemId + ":" + e.message.replace(/"/g, "'")
        }
        const b = (e, t) => function(e, t) {
            let s, n = 0, i = 0;
            for (s = e.length - 1; s >= 1 && (n += 8 * (1 + encodeURIComponent(e[s]).length),
            !(s - 1 > 0 && (i = 8 * (1 + encodeURIComponent(e[s - 1]).length),
            n + i > t))); s--)
                ;
            return e.slice(s)
        }(g(e, t).map(y), 75497472);
        function v(e, t, s, r) {
            if (t === _ && r.id === c)
                return;
            const h = new Date;
            if (e <= n.NORMAL && function(e, t, s, n, r) {
                "function" == typeof structuredClone && (t = structuredClone(t)),
                t = t.slice(0, o);
                const a = {
                    id: i,
                    message: t,
                    subSystemId: n,
                    timestamp: Number(e)
                };
                i += 1,
                s.push(a),
                void 0 !== r && s.length > r && s.splice(0, 1)
            }(h, t, s, r.id, r.maxCount),
            e <= l && (!r.highRate || m()) && (!a || r.id.match(a))) {
                const s = h.toISOString() + ":" + r.id + ":" + t;
                switch (e) {
                case n.DEBUG:
                    console.debug(s);
                    break;
                case n.INFO:
                case n.NORMAL:
                    r.color ? console.log("%c" + s, "color: " + r.color) : console.log(s);
                    break;
                case n.WARNING:
                    console.warn(s);
                    break;
                case n.ERROR:
                    console.error(s)
                }
                _ = t,
                c = r.id,
                null !== d && clearTimeout(d),
                d = setTimeout(( () => {
                    _ = null,
                    c = null,
                    d = null
                }
                ), 1e3)
            }
        }
        function w(e, t={}) {
            const s = [];
            r.push(s);
            const i = Object.assign(t, {
                id: e
            });
            function o(e) {
                return t => v(e, String(t), s, i)
            }
            return {
                logDebug: o(n.DEBUG),
                logError: o(n.ERROR),
                logInfo: o(n.INFO),
                logNormal: o(n.NORMAL),
                logWarn: o(n.WARNING)
            }
        }
        const q = (e, t) => {
            f(n.DEBUG),
            h = Boolean(e),
            a = t || null
        }
          , C = () => {
            f(n.INFO)
        }
    }
}]);
