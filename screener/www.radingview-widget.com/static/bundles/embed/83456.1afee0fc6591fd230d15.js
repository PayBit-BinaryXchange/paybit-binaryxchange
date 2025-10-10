"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[83456], {
    158942: (e, t, n) => {
        n.d(t, {
            WatchedObject: () => r.WatchedObject,
            WatchedValue: () => i.WatchedValue
        });
        var i = n(597773)
          , r = n(390251)
    }
    ,
    462140: (e, t, n) => {
        function i(e, t, n) {
            return Math.min(Math.max(e, t), n)
        }
        function r(e) {
            return e < 0 ? -1 : e > 0 ? 1 : 0
        }
        function _(e) {
            if (e < 0)
                return !1;
            if (e > 1e18)
                return !0;
            for (let t = e; t > 1; t /= 10)
                if (t % 10 != 0)
                    return !1;
            return !0
        }
        function o(e, t, n) {
            return t - e <= n
        }
        function s(e, t, n) {
            return Math.abs(e - t) < n
        }
        function a(e) {
            return e <= 0 ? NaN : Math.log(e) / Math.log(10)
        }
        function c(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }
        function l(e, t=c) {
            if (e.length < 1)
                throw Error("array is empty");
            let n = e[0];
            for (let i = 0; i < e.length; ++i)
                t(e[i], n) < 0 && (n = e[i]);
            return n
        }
        function u(e, t=c) {
            if (e.length < 1)
                throw Error("array is empty");
            let n = e[0];
            for (let i = 0; i < e.length; ++i)
                t(e[i], n) > 0 && (n = e[i]);
            return n
        }
        function d(e) {
            const t = Math.ceil(e);
            return t % 2 != 0 ? t - 1 : t
        }
        function f(e) {
            const t = Math.ceil(e);
            return t % 2 == 0 ? t - 1 : t
        }
        function h(e) {
            return e > 0 ? Math.floor(e) : Math.ceil(e)
        }
        function m(e) {
            return e % 2 == 0
        }
        n.d(t, {
            ceiledEven: () => d,
            ceiledOdd: () => f,
            clamp: () => i,
            equal: () => s,
            greaterOrEqual: () => o,
            isBaseDecimal: () => _,
            isEven: () => m,
            log10: () => a,
            max: () => u,
            min: () => l,
            sign: () => r,
            toInt: () => h
        })
    }
    ,
    378338: (e, t, n) => {
        n.d(t, {
            t: () => i
        });
        const i = n.i18next
    }
    ,
    927301: (e, t, n) => {
        n.r(t),
        n.d(t, {
            capitalizeFirstLetterInWord: () => h,
            decodeHTMLEntities: () => c,
            encodeHTMLEntities: () => l,
            getFirstSegmentOrCodePointString: () => m,
            htmlEscape: () => u,
            removeSpaces: () => f,
            removeTags: () => d
        });
        const i = /[<"'&>]/g
          , r = e => `&#${e.charCodeAt(0)};`
          , _ = {
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
          , o = Object.assign({}, ...Object.entries(_).map(( ([e,t]) => ({
            [t]: e
        }))))
          , s = new RegExp(Object.keys(_).join("|"),"g")
          , a = new RegExp(Object.keys(o).join("|"),"g");
        function c(e) {
            return e.replace(s, (e => _[e] || e))
        }
        function l(e) {
            return e.replace(a, (e => o[e] || e))
        }
        function u(e) {
            return e.replace(i, r)
        }
        function d(e="") {
            return e.replace(/(<([^>]+)>)/gi, "")
        }
        function f(e="") {
            return e.replace(/\s+/g, "")
        }
        function h(e="") {
            return e.replace(/\b\w/g, (e => e.toUpperCase()))
        }
        function m(e) {
            const t = Intl.Segmenter;
            if (t) {
                const n = new t(void 0,{
                    granularity: "grapheme"
                })
                  , [{segment: i}={
                    segment: null
                }] = n.segment(e);
                return i?.toUpperCase() ?? null
            }
            {
                const t = e.codePointAt(0);
                return t ? String.fromCodePoint(t).toUpperCase() : null
            }
        }
    }
    ,
    645778: (e, t, n) => {
        n.r(t),
        n.d(t, {
            QUOTE_FIELDS: () => _,
            QUOTE_FIELDS_CACHE: () => o,
            QuoteCache: () => r
        });
        var i = n(650151);
        class r {
            constructor(e) {
                this._cache = new Map,
                this._times = new Map,
                this._fields = [...e.fields]
            }
            update(e, t, n) {
                const r = (0,
                i.ensureDefined)(e.symbolname)
                  , _ = Date.now();
                if (this._cache.has(r) || this._cache.set(r, {
                    symbolname: r,
                    status: e.status,
                    values: {}
                }),
                this._times.has(r) || this._times.set(r, new Map),
                "error" === e.status)
                    return;
                const o = (0,
                i.ensureDefined)(this._cache.get(r))
                  , s = (0,
                i.ensureDefined)(this._times.get(r));
                o.status = e.status;
                for (const i of this._fields)
                    t.has(i) && (n || void 0 !== e.values[i]) && (o.values[i] = e.values[i],
                    s.set(i, _))
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
        const _ = new Set(["pro_name", "base_name", "logoid", "currency-logoid", "base-currency-logoid", "source-logoid", "short_name", "web_site_url", "pro_perm", "timezone", "current_session", "last_price", "lp_time", "subsessions", "prev_close_price", "open_price", "high_price", "low_price", "price_52_week_high", "price_52_week_low", "ask", "ask_size", "bid", "bid_size", "rch", "rchp", "rtc", "rtc_time", "data_frequency", "reference-last-period-start", "business_description", "web_site_url", "figi", "number_of_employees", "float_shares_outstanding", "earnings_release_next_calendar_date", "root", "description", "exchange", "listed_exchange", "type", "country_code", "provider_id", "sector", "typespecs", "visible-plots-set", "industry", "currency_id", "last_price", "fractional", "minmov", "minmove2", "pricescale", "variable_tick_size", "change", "change_percent", "volume", "average_volume", "market_cap_basic", "market_cap_calc", "total_revenue", "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year", "dps_common_stock_prim_issue_fy", "dividends_yield", "earnings_release_next_date", "earnings_per_share_forecast_next_fq", "earnings_publication_type_next_fq", "earnings_release_date", "earnings_per_share_fq", "earnings_per_share_forecast_fq", "forecast_raw", "last_release_date", "next_release_date", "reference_last_period", "fundamental_currency_code", "number_of_employees", "web_site_url", "business_description", "founded", "ceo", "float_shares_outstanding", "total_shares_outstanding", "dividend_payout_ratio_ttm", "dividends_yield_current", "dividend_ex_date_upcoming", "dividend_amount_upcoming", "dividend_amount_recent", "dividend_ex_date_recent", "dividend_amount_h", "dividend_payment_date_upcoming", "dividend_payment_date_recent", "total_revenue_fq_h", "total_revenue_fy_h", "net_income_fy_h", "net_income_fq_h", "total_assets_fy_h", "total_assets_fq_h", "total_liabilities_fy_h", "total_liabilities_fq_h", "cash_f_operating_activities_fy_h", "cash_f_operating_activities_fq_h", "cash_f_investing_activities_fy_h", "cash_f_investing_activities_fq_h", "cash_f_financing_activities_fy_h", "cash_f_financing_activities_fq_h", "fiscal_period_fy_h", "fiscal_period_fq_h", "fiscal_period_fh_h", "earnings_release_date_fq_h", "earnings_release_next_date_fq", "earnings_per_share_forecast_next_fq", "earnings_per_share_forecast_fq_h", "earnings_per_share_fq_h", "earnings_fiscal_period_fq_h", "next_earnings_fiscal_period_fq", "is_next_earnings_release_date_estimated", "symbol-primaryname", "currency_code", "rates_mc", "rates_fy", "rates_ttm", "measure", "value_unit_id", "value-unit-id", "update_mode", "language", "local_description", "short_description", "source", "source2", "format", "recommendation_mark", "last_report_frequency", "price_target_estimates_num", "price_target_average", "update_mode_seconds", "recommendation_total", "recommendation_buy", "recommendation_over", "recommendation_hold", "recommendation_under", "recommendation_sell", "recommendation_total", "price_target_high", "price_target_low", "rates_pt", "rates_pt", "total_revenue_fy_h", "total_revenue_fq_h", "total_revenue_fh_h", "net_income_fy_h", "net_income_fq_h", "net_income_fh_h", "total_assets_fy_h", "total_assets_fq_h", "total_assets_fh_h", "total_liabilities_fy_h", "total_liabilities_fq_h", "total_liabilities_fh_h", "cash_f_operating_activities_fy_h", "cash_f_operating_activities_fq_h", "cash_f_operating_activities_fh_h", "cash_f_investing_activities_fy_h", "cash_f_investing_activities_fq_h", "cash_f_investing_activities_fh_h", "cash_f_financing_activities_fy_h", "cash_f_financing_activities_fq_h", "cash_f_financing_activities_fh_h", "fiscal_period_fy", "fiscal_period_fq", "fiscal_period_fh", "earnings_release_date_fq_h", "earnings_release_date_fy_h", "earnings_release_date_fh_h", "earnings_release_next_date_fq", "earnings_release_next_date_fy", "earnings_release_next_date_fh", "earnings_release_next_time", "earnings_release_time", "is_next_earnings_release_date_estimated", "earnings_per_share_forecast_next_fq", "earnings_per_share_forecast_next_fy", "earnings_per_share_forecast_next_fh", "earnings_per_share_forecast_fq_h", "earnings_per_share_forecast_fy_h", "earnings_per_share_forecast_fh_h", "earnings_per_share_fq_h", "earnings_per_share_fy_h", "earnings_per_share_fh_h", "earnings_fiscal_period_fq_h", "earnings_fiscal_period_fy_h", "earnings_fiscal_period_fh_h", "next_earnings_fiscal_period_fq", "next_earnings_fiscal_period_fy", "next_earnings_fiscal_period_fh", "revenue_fq_h", "revenue_fy_h", "revenue_fh_h", "revenue_forecast_fq_h", "revenue_forecast_fy_h", "revenue_forecast_fh_h", "revenue_forecast_next_fq", "revenue_forecast_next_fy", "revenue_forecast_next_fh", "revenue_seg_by_business_h", "revenue_seg_by_region_h", "total_revenue_fy", "total_revenue_fq", "total_revenue_fh", "gross_profit_fy", "gross_profit_fq", "gross_profit_fh", "ebitda_fy", "ebit_fy", "net_income_fy", "net_income_fq", "net_income_fh", "total_debt_fy_h", "total_debt_fq_h", "total_debt_fh_h", "free_cash_flow_fy_h", "free_cash_flow_fq_h", "free_cash_flow_fh_h", "cash_n_equivalents_fy_h", "cash_n_equivalents_fq_h", "cash_n_equivalents_fh_h", "total_current_assets_fy", "total_current_assets_fq", "total_current_assets_fh", "total_current_liabilities_fy", "total_current_liabilities_fq", "total_current_liabilities_fh", "total_non_current_assets_fy", "total_non_current_assets_fq", "total_non_current_assets_fh", "total_non_current_liabilities_fy", "total_non_current_liabilities_fq", "total_non_current_liabilities_fh", "loans_net_fy", "loans_net_fy_h", "loans_net_fq_h", "loans_net_fh_h", "total_deposits_fy", "total_deposits_fy_h", "total_deposits_fq_h", "total_deposits_fh_h", "loan_loss_allowances_fy", "loan_loss_allowances_fy_h", "loan_loss_allowances_fq_h", "loan_loss_allowances_fh_h", "reserve_to_total_capital_fy_h", "reserve_to_total_capital_fq_h", "reserve_to_total_capital_fh_h", "unearned_premium_to_total_capital_fy_h", "unearned_premium_to_total_capital_fq_h", "unearned_premium_to_total_capital_fh_h", "insurance_reserves_fy_h", "insurance_reserves_fq_h", "insurance_reserves_fh_h", "policy_claims_fy_h", "policy_claims_fq_h", "policy_claims_fh_h", "premiums_earned_fy_h", "premiums_earned_fq_h", "premiums_earned_fh_h", "price_earnings_fq_h", "price_earnings_fy_h", "price_earnings_fh_h", "price_sales_fq_h", "price_sales_fy_h", "price_sales_fh_h", "diluted_net_income_ttm", "total_revenue_ttm", "price_earnings_current", "price_sales_current", "isin-displayed", "interest_income_fy_h", "interest_income_fq_h", "interest_income_fh_h", "non_interest_income_fy_h", "non_interest_income_fq_h", "non_interest_income_fh_h", "website", "doc", "explorer", "sources", "contracts", "crypto_common_categories", "crypto_asset", "community", "dividends_availability", "earnings_availability", "financials_availability", "etf_asset_type_exposure", "etf_region_exposure", "top_holdings", "unit-id", "options-info", "interest_income_fy", "interest_income_fq", "interest_income_fh", "non_interest_income_fy", "non_interest_income_fq", "non_interest_income_fh", "interest_expense_fy", "interest_expense_fq", "interest_expense_fh", "loan_loss_provision_fy", "loan_loss_provision_fq", "loan_loss_provision_fh", "non_interest_expense_fy", "non_interest_expense_fq", "non_interest_expense_fh", "non_oper_income_fy", "non_oper_income_fq", "non_oper_income_fh", "unusual_expense_inc_fy", "unusual_expense_inc_fq", "unusual_expense_inc_fh", "pretax_income_fy", "pretax_income_fq", "pretax_income_fh", "income_tax_fy", "income_tax_fq", "income_tax_fh", "after_tax_other_income_fy", "after_tax_other_income_fq", "after_tax_other_income_fh", "total_non_oper_income_fy", "total_non_oper_income_fq", "total_non_oper_income_fh", "oper_income_fy", "oper_income_fq", "oper_income_fh", "operating_expenses_fy", "operating_expenses_fq", "operating_expenses_fh", "cost_of_goods_fy", "cost_of_goods_fq", "cost_of_goods_fh", "equity_in_earnings_fy", "equity_in_earnings_fq", "equity_in_earnings_fh", "minority_interest_exp_fy", "minority_interest_exp_fq", "minority_interest_exp_fh", "discontinued_operations_fy", "discontinued_operations_fq", "discontinued_operations_fh", "front_contract", "pointvalue", "unit_id", "expiration", "aum", "asset_class", "focus", "expense_ratio", "launch_date", "issuer", "brand", "homepage", "index_tracked", "actively_managed", "fund_view_mode", "common_equity_tier1_ratio_fy_h", "common_equity_tier1_ratio_fq_h", "common_equity_tier1_ratio_fh_h", "tier1_capital_ratio_fy_h", "tier1_capital_ratio_fq_h", "tier1_capital_ratio_fh_h", "total_capital_ratio_fy_h", "total_capital_ratio_fq_h", "total_capital_ratio_fh_h", "preferred_stock_carrying_value_fh", "preferred_stock_carrying_value_fq", "total_debt_fq", "minority_interest_fh", "minority_interest_fq", "cash_n_short_term_invest_fq", "cash_n_due_f_banks_fh", "cash_n_due_f_banks_fq", "enterprise_value_current", "etf_holdings_count", "contract-description", "reference-last-period", "all_time_high", "all_time_high_day", "all_time_low", "all_time_low_day", "outstanding_amount", "nominal_value", "denom_min", "current_coupon", "coupon_type_general", "coupon_frequency", "yield_to_maturity", "maturity-date", "days_to_maturity", "bond_issuer", "issue_date", "bond_issuer_stock_symbol", "total_issued_amount", "paid_amount", "bond_snp_rating_lt_h", "placement_type", "duration_type", "maturity_type", "offer_type", "redemption_type", "conversion_option", "sinking_fund", "ownership_form", "daily-summary-ast", "issue_status", "coupon_h", "sinking_fund_next_date", "sinking_fund_min_amount_next", "call_next_date", "redemptions_h", "call_notice_days", "put_next_date", "put_notice_days_min", "seniority_level", "inflation_protection", "pledge_status", "bond_issuer_country_of_risk", "bond_issuer_cr_parent", "credit_enhancement_type", "credit_enhancement_status", "use_of_proceeds", "bond_issuer_snp_rating_lt_h", "bond_issuer_snp_rating_st_h", "bond_agents_tr", "first_bar_time_1d", "financial-indicator-id", "exchange-info", "underlying-symbol", "strike", "lotsize", "option-style", "has_bonds", "open_time", "has_bonds", "dex_buys_15m", "dex_sells_15m", "dex_buy_volume_15m", "dex_sell_volume_15m", "dex_buyers_15m", "dex_sellers_15m", "dex_buys_1h", "dex_sells_1h", "dex_buy_volume_1h", "dex_sell_volume_1h", "dex_buyers_1h", "dex_sellers_1h", "dex_buys_4h", "dex_sells_4h", "dex_buy_volume_4h", "dex_sell_volume_4h", "dex_buyers_4h", "dex_sellers_4h", "dex_buys_12h", "dex_sells_12h", "dex_buy_volume_12h", "dex_sell_volume_12h", "dex_buyers_12h", "dex_sellers_12h", "dex_buys_24h", "dex_sells_24h", "dex_buy_volume_24h", "dex_sell_volume_24h", "dex_buyers_24h", "dex_sellers_24h", "dex_converted_symbol", "dex_trading_volume_24h", "dex_created_time", "dex_currency", "dex_currency_logoid", "blockchain_addresses_urls", "blockchain_addresses", "base_currency", "available_data_range_begin_date", "available_data_range_end_date"])
          , o = new r({
            fields: _
        })
    }
    ,
    332906: (e, t, n) => {
        n.r(t),
        n.d(t, {
            QuoteSession: () => r
        });
        var i = n(900608);
        class r {
            constructor(e, t=(0,
            i.randomHash)()) {
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
    761637: (e, t, n) => {
        function i(e) {
            if (void 0 === e)
                return null;
            const t = e.match(/(delayed_streaming)_(\d+)/);
            return null === t ? null : {
                mode: t[1],
                interval: parseInt(t[2])
            }
        }
        function r(e) {
            const t = i(e.update_mode);
            return null === t || (e.update_mode = t.mode,
            e.update_mode_seconds = t.interval),
            e
        }
        n.r(t),
        n.d(t, {
            normalizeUpdateMode: () => r,
            parseUpdateMode: () => i
        })
    }
    ,
    778016: (e, t, n) => {
        n.d(t, {
            canUpgradePlan: () => d,
            enabled: () => c,
            getConfig: () => u,
            getProductFeaturesConfig: () => l,
            getProductId: () => a
        });
        var i = n(650151)
          , r = n(729551)
          , _ = n(209044)
          , o = n(638456)
          , s = n(232759);
        function a(e) {
            let t = window.user;
            "undefined" != typeof window && window.user && (t = window.user),
            e && (t = e);
            let n = t?.pro_plan || "free";
            return "free" !== n && !(0,
            s.isTrialProduct)(n) || (n = (0,
            s.getProductForTrial)(n)),
            n
        }
        function c(e, t, n) {
            let i = window.user;
            n && (i = n);
            const r = u(e, t, i);
            if (!r)
                return !1;
            if (r.disable_on_trial && (!i || i.is_trial))
                return !1;
            const _ = r.disable_on_lite_plan;
            if (_ && i.is_lite_plan) {
                if ("all" === _)
                    return !1;
                if ("exclude_mobile" === _ && !o.CheckMobile.any())
                    return !1
            }
            return !0
        }
        function l(e) {
            const t = r[e];
            return t ? t.extends ? Object.assign({}, l(t.extends), t) : t : null
        }
        function u(e, t, n) {
            let i = l(t || (a(n) ?? ""));
            if (!i)
                return null;
            const r = window.TradingView?.widgetCustomer;
            return r && _[r] && (i = Object.assign({}, i, _[r])),
            i && i[e] || null
        }
        function d() {
            const e = u("BACKEND_CONNECTIONS")?.limit ?? 0
              , t = (0,
            i.ensureDefined)(window.pro)
              , n = t.getProductsByType(t.PRODUCT_TYPES.pro_plan);
            for (const t of n)
                if ((u("BACKEND_CONNECTIONS", (0,
                i.ensureDefined)(t.id))?.limit ?? 0) > e)
                    return !0;
            return !1
        }
    }
    ,
    314802: (e, t, n) => {
        n.d(t, {
            isOnMobileAppPage: () => r,
            urlWithMobileAppParams: () => _
        });
        var i = n(639247);
        function r(e, t=!1) {
            const {searchParams: n} = new URL(String(location));
            let r = "true" === n.get("mobileapp_new")
              , _ = "true" === n.get("mobileapp");
            if (!t) {
                const e = i.get("tv_app") || "";
                r ||= ["android", "android_nps"].includes(e),
                _ ||= "ios" === e
            }
            return !("new" !== e && "any" !== e || !r) || !("new" === e || !_)
        }
        function _(e, t=!1) {
            if (r("new", t)) {
                const t = new URL(e,location.href);
                t.searchParams.set("mobileapp_new", "true"),
                e = t.toString()
            }
            if (r("old", t)) {
                const t = new URL(e,location.href);
                t.searchParams.set("mobileapp", "true"),
                e = t.toString()
            }
            return e
        }
    }
    ,
    584878: (e, t, n) => {
        n.d(t, {
            shouldAffectUser: () => a
        });
        var i = n(855385)
          , r = n.n(i)
          , _ = n(49437);
        const o = "featuretoggle_seed";
        function s(e) {
            try {
                const t = r()(e + function() {
                    if (window.user && window.user.id)
                        return window.user.id;
                    const e = _.TVLocalStorage.getItem(o);
                    if (null !== e)
                        return e;
                    const t = Math.floor(1e6 * Math.random());
                    return _.TVLocalStorage.setItem(o, `${t}`),
                    t
                }())
                  , n = new DataView(t);
                return n.getUint32(0, !0) / 4294967296
            } catch (e) {
                return .5
            }
        }
        function a(e, t) {
            return s(e) <= t
        }
    }
    ,
    779923: (e, t, n) => {
        async function i(e, t) {
            const i = await Promise.all([n.e(61560), n.e(18883), n.e(32937), n.e(98185), n.e(46195), n.e(92537), n.e(15371), n.e(61681), n.e(61171), n.e(67780), n.e(78894), n.e(66032), n.e(65743), n.e(13672), n.e(79317), n.e(30158), n.e(44213), n.e(30683), n.e(9323), n.e(60159), n.e(61144), n.e(99778), n.e(87473), n.e(13114), n.e(6471), n.e(62526), n.e(26362), n.e(67696), n.e(54679), n.e(38890)]).then(n.bind(n, 409128));
            return i.showSimpleDialog(e, i.renameModule, t)
        }
        async function r(e, t) {
            const i = await Promise.all([n.e(61560), n.e(18883), n.e(32937), n.e(98185), n.e(46195), n.e(92537), n.e(15371), n.e(61681), n.e(61171), n.e(67780), n.e(78894), n.e(66032), n.e(65743), n.e(13672), n.e(79317), n.e(30158), n.e(44213), n.e(30683), n.e(9323), n.e(60159), n.e(61144), n.e(99778), n.e(87473), n.e(13114), n.e(6471), n.e(62526), n.e(26362), n.e(67696), n.e(54679), n.e(38890)]).then(n.bind(n, 409128));
            return i.showSimpleDialog(e, i.confirmModule, t)
        }
        async function _(e, t) {
            const i = await Promise.all([n.e(61560), n.e(18883), n.e(32937), n.e(98185), n.e(46195), n.e(92537), n.e(15371), n.e(61681), n.e(61171), n.e(67780), n.e(78894), n.e(66032), n.e(65743), n.e(13672), n.e(79317), n.e(30158), n.e(44213), n.e(30683), n.e(9323), n.e(60159), n.e(61144), n.e(99778), n.e(87473), n.e(13114), n.e(6471), n.e(62526), n.e(26362), n.e(67696), n.e(54679), n.e(38890)]).then(n.bind(n, 409128));
            return i.showSimpleDialog(e, i.warningModule, t)
        }
        n.r(t),
        n.d(t, {
            showConfirm: () => r,
            showRename: () => i,
            showWarning: () => _
        })
    }
    ,
    544151: (e, t, n) => {
        n.d(t, {
            getMinTick: () => c,
            getMinTickData: () => a,
            makeVariableMinTickData: () => u
        });
        var i = n(960521)
          , r = n(150335)
          , _ = n(405942)
          , o = n(462140);
        function s(e) {
            return e ? (0,
            i.Big)(e.minMove).div(e.priceScale).toNumber() : NaN
        }
        function a(e) {
            const {minTick: t, price: n, variableMinTickData: i, shouldCheckForEquality: _} = e
              , o = (0,
            r.isNumber)(t) ? l(t) : t;
            return void 0 === i ? o : function(e, t, n=!1) {
                for (let i = 0; i < t.length; i++) {
                    if (e < t[i].price)
                        return t[i].minTick;
                    if (n && e === t[i].price)
                        return t[i].minTick
                }
                return t[t.length - 1].minTick
            }(n, i, _)
        }
        function c(e) {
            return s(a(e))
        }
        function l(e) {
            const t = (0,
            _.numOfDecimalPlaces)(e)
              , n = Math.pow(10, t);
            return {
                priceScale: n,
                minMove: (0,
                i.Big)(e).mul(n).toNumber()
            }
        }
        function u(e, t) {
            const n = [{
                minTick: (0,
                r.isNumber)(e) ? l(e) : e,
                price: 1 / 0,
                maxIndex: 1 / 0
            }];
            try {
                const e = t.split(" ").map(( (e, t) => (0,
                o.isEven)(t) ? function(e) {
                    const t = Number(e);
                    if (Number.isFinite(t))
                        return l(t);
                    {
                        const t = e.split("/");
                        if (t.length < 2 || t.length > 3)
                            throw new Error(`Unexpected mintick: ${e}`);
                        const n = Number(t[1])
                          , i = Number(t[0]);
                        if (!Number.isFinite(n) || !Number.isFinite(i))
                            throw new Error(`Unexpected mintick: ${e}`);
                        const r = 3 === t.length ? Number(t[2]) : void 0;
                        if (void 0 !== r && !Number.isFinite(r))
                            throw new Error(`Unexpected mintick: ${e}`);
                        const _ = {
                            priceScale: n,
                            minMove: i
                        };
                        return void 0 !== r && (_.minMove2 = r),
                        _
                    }
                }(e) : function(e) {
                    const t = Number(e);
                    if (Number.isNaN(t))
                        throw new Error(`Unexpected price limit: ${e}`);
                    return t
                }(e)));
                if ((0,
                o.isEven)(e.length))
                    throw new Error("Theme must not be event number of elements");
                const n = [];
                for (let t = 0; t < e.length; t += 2) {
                    const r = e[t + 1] ?? 1 / 0
                      , _ = n[n.length - 1]?.price ?? 0
                      , o = n[n.length - 1]?.maxIndex ?? 0
                      , a = r === 1 / 0 ? 1 / 0 : new i.Big(r).minus(_).div(s(e[t])).plus(o).toNumber();
                    n.push({
                        minTick: e[t],
                        price: r,
                        maxIndex: a
                    })
                }
                return n
            } catch {
                return n
            }
        }
    }
    ,
    820028: (e, t, n) => {
        n.d(t, {
            WatchedValue: () => i.WatchedValue
        });
        var i = n(158942)
    }
    ,
    909456: (e, t, n) => {
        n.d(t, {
            numDependencyFormatter: () => _,
            numberToStringWithLeadingZero: () => r,
            yieldCurveTickmarksPriceFormatter: () => o
        });
        var i = n(536794);
        function r(e, t) {
            if (!(0,
            i.isNumber)(e))
                return "n/a";
            if (!(0,
            i.isInteger)(t))
                throw new TypeError("invalid length");
            if (t < 0 || t > 24)
                throw new TypeError("invalid length");
            if (0 === t)
                return e.toString();
            return ("00000000000000000000" + e.toString()).slice(-t)
        }
        function _(e) {
            const t = new Map;
            return n => {
                const i = n ?? -1;
                let r = t.get(i);
                return r || (r = e(n),
                t.set(i, r)),
                r
            }
        }
        function o(e) {
            const t = function(e, t) {
                let n = t;
                for (; n > 0; n--) {
                    const t = Math.pow(10, n);
                    if (e.map((e => Math.round(e * t))).some((e => e % 10)))
                        break
                }
                return n
            }(e, 4);
            return e.map((e => `${e.toFixed(t)}%`))
        }
    }
    ,
    808708: (e, t, n) => {
        n.d(t, {
            NumericFormatter: () => _
        });
        var i = n(781441)
          , r = n(976531);
        class _ {
            constructor(e={}) {
                this._options = e
            }
            format(e, t={}) {
                if (!Number.isFinite(e))
                    return String(e);
                const {ignoreLocaleNumberFormat: n=this._options.ignoreLocaleNumberFormat, noExponentialForm: o=this._options.noExponentialForm} = t
                  , {minPrecision: s, precision: a} = this._options
                  , c = (0,
                r.getNumberFormat)(n);
                return void 0 === a ? _._formatNoEImpl(e, c, a, s) : (0,
                i.formatNumber)(e, c, a, o, s)
            }
            parse(e, t) {
                const {ignoreLocaleNumberFormat: n, precision: _} = this._options
                  , o = (0,
                r.getNumberFormat)(n || t?.ignoreLocaleNumberFormat);
                let s = (0,
                i.parseNumber)(e, o);
                return Number.isFinite(s) ? (_ && (s = +s.toFixed(_)),
                {
                    res: !0,
                    value: s
                }) : {
                    res: !1
                }
            }
            static formatNoE(e, t) {
                return this._formatNoEImpl(e, t)
            }
            static _formatNoEImpl(e, t, n, r) {
                return Number.isFinite(e) ? (t = t ?? {
                    groupingSeparator: "",
                    decimalSign: "."
                },
                (0,
                i.formatNumber)(e, t, n, !0, r)) : String(e)
            }
        }
    }
    ,
    722652: (e, t, n) => {
        n.d(t, {
            PercentageFormatter: () => _
        });
        var i = n(89831)
          , r = n(969680);
        class _ extends i.PriceFormatter {
            constructor(e={}) {
                void 0 !== e.decimalPlaces && (e.priceScale = Math.pow(10, e.decimalPlaces)),
                super(e),
                this.type = "percentage"
            }
            state() {
                return {
                    ...super.state(),
                    percent: !0
                }
            }
            parse(e, t) {
                return e = e.replace("%", ""),
                super.parse(e, t)
            }
            format(e, t={}) {
                const {useRtlFormat: n=!0} = t
                  , i = super.format(e, {
                    ...t,
                    useRtlFormat: !1
                }) + "%";
                return n ? (0,
                r.forceLTRStr)(i) : i
            }
            static serialize(e) {
                return e.state()
            }
            static deserialize(e) {
                return new _(e)
            }
        }
    }
    ,
    89831: (e, t, n) => {
        n.d(t, {
            PriceFormatter: () => s
        });
        var i = n(618648)
          , r = n(803431)
          , _ = n(536794)
          , o = n(47522);
        class s {
            constructor(e={}) {
                this.type = "price";
                const {minMove2: t, fractional: n, variableMinTick: s, ignoreMinMove: a, ignoreLocaleNumberFormat: c} = e
                  , l = !e.minMove || a ? 1 : e.minMove
                  , u = (0,
                _.isNumber)(e.priceScale) && (0,
                _.isInteger)(e.priceScale) ? e.priceScale : 100
                  , d = (0,
                o.calculateDecimal)(u, l, n, t)
                  , f = {
                    ...e,
                    minMove: l,
                    priceScale: u,
                    fractionalLength: d
                };
                if (u < 0)
                    throw new TypeError("invalid base");
                this._priceScale = u,
                this._minMove = l,
                this._minMove2 = t,
                this._fractional = n,
                this._variableMinTick = s,
                this._ignoreMinMove = a,
                this._fractionalLength = d,
                this._ignoreLocaleNumberFormat = c,
                this._noExponentialForm = e.noExponentialForm,
                this._implementation = n ? new r.FractionalPriceFormatterImpl(f) : new i.DecimalPriceFormatterImpl(f)
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
            formatChange(e, t, n) {
                return this._implementation.formatImpl(e - t, {
                    ...n,
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
                return new s(e)
            }
        }
    }
    ,
    803912: (e, t, n) => {
        n.d(t, {
            fetch: () => _
        });
        var i = n(735566);
        n(659863);
        const r = (0,
        i.getLogger)("Fetch");
        function _(e, t, n={}) {
            {
                const {logOnErrorStatus: i=!0, logBodyOnError: _=!1} = n;
                t = t || {},
                function(e) {
                    return new URL(e,document.baseURI).origin === location.origin
                }(e) && (t.headers ? t.headers instanceof Headers || (t.headers = new Headers(t.headers)) : t.headers = new Headers,
                window.locale && t.headers.set("X-Language", window.locale),
                t.headers.set("X-Requested-With", "XMLHttpRequest")),
                void 0 === t.credentials && (t.credentials = "same-origin");
                const o = window.fetch(e, t);
                return o.then((n => {
                    if (!n.ok && i) {
                        let i = "";
                        t.method && (i += `${t.method.toUpperCase()} `),
                        i += e,
                        i += `. Status ${n.status}`,
                        n.statusText && (i += `. ${n.statusText}`),
                        n.headers.via && (i += `. Via: ${n.headers.via}`),
                        _ && "string" == typeof t.body && (i += `. Body: ${t.body.slice(0, 1024)}`),
                        r.logError(i)
                    }
                    return n
                }
                ), (n => {
                    if (n && "AbortError" === n.name)
                        return;
                    let i = "";
                    t.method && (i += `${t.method.toUpperCase()} `),
                    i += e,
                    navigator.onLine ? i += `. ${n}` : i += ". User is offline.",
                    r.logError(i)
                }
                )),
                o
            }
        }
    }
    ,
    302221: (e, t, n) => {
        var i;
        n.d(t, {
            BillingCycle: () => i,
            MONTHLY_SUBSCRIPTION_DAYS_LEN: () => _,
            WEEKLY_SUBSCRIPTION_DAYS_LEN: () => r
        }),
        function(e) {
            e.Monthly = "m",
            e.ThreeMonths = "3m",
            e.OneYear = "y"
        }(i || (i = {}));
        const r = 7
          , _ = 30
    }
    ,
    232759: (e, t, n) => {
        n.d(t, {
            CUSTOM_SUFFIX: () => s,
            EA_SUFFIX: () => o,
            TRIAL_SUFFIX: () => _,
            billingCycleToMonth: () => v,
            billingCycleToTimeUnit: () => a,
            billingPeriodText: () => u,
            countDiscountByBillingCycle: () => y,
            getDiscountProductId: () => h,
            getPlanName: () => q,
            getProductForTrial: () => f,
            getReadableCycle: () => c,
            getReadableNumericCycle: () => l,
            getRelativeAmountOfDaysFromBillingCycle: () => g,
            humanizeCardPlan: () => p,
            humanizeProPlan: () => m,
            isOldUser: () => M,
            isTrialProduct: () => d,
            round0: () => x,
            round2: () => b,
            round2or0: () => w
        });
        n(142492);
        var i = n(444372)
          , r = n(302221);
        const _ = "_trial"
          , o = "_discount"
          , s = "_custom";
        function a(e) {
            return {
                y: i.t(null, {
                    plural: "years",
                    count: 1
                }, n(993205)),
                m: i.t(null, {
                    plural: "months",
                    count: 1
                }, n(898393)),
                "3m": i.t(null, void 0, n(81277))
            }[e] || ""
        }
        function c(e) {
            return {
                m: i.t(null, void 0, n(173039)),
                y: i.t(null, void 0, n(317310)),
                "3m": i.t(null, void 0, n(820877))
            }[e] || ""
        }
        function l(e) {
            return {
                [r.BillingCycle.Monthly]: i.t(null, void 0, n(173039)),
                [r.BillingCycle.OneYear]: i.t(null, void 0, n(744479)),
                [r.BillingCycle.ThreeMonths]: i.t(null, void 0, n(820877))
            }[e] || ""
        }
        function u(e) {
            return {
                y: i.t(null, void 0, n(967752)),
                m: i.t(null, void 0, n(745504))
            }[e] ?? ""
        }
        function d(e) {
            return new RegExp(_ + "$").test(e)
        }
        function f(e) {
            return e.split(_)[0]
        }
        function h(e, t, n) {
            return `${e}_${t}${n}`
        }
        function m(e, t) {
            let r = e;
            switch (e) {
            case "free":
                r = "Basic";
                break;
            case "pro":
                r = "Essential";
                break;
            case "pro_realtime":
                r = "Plus";
                break;
            case "pro_premium":
                r = "Premium";
                break;
            case "pro_expert":
                r = "Expert";
                break;
            case "pro_premium_expert":
                r = "Ultimate"
            }
            return t && (r += " " + i.t(null, void 0, n(233969))),
            r
        }
        function p(e) {
            let t = e;
            switch (e) {
            case "pro":
                t = "Essential";
                break;
            case "pro_realtime":
                t = "Plus";
                break;
            case "pro_premium":
                t = "Premium";
                break;
            case "pro_expert":
                t = "Expert";
                break;
            case "pro_premium_expert":
                t = "Ultimate";
                break;
            case "free":
                t = "Basic"
            }
            return t
        }
        function g(e, t) {
            const n = t || new Date
              , i = v(e)
              , r = n.getMonth() + i
              , _ = new Date(new Date(n).setMonth(r));
            return _.getMonth() > r % 12 && _.setDate(0),
            function(e, t) {
                const n = t.getTime() - e.getTime();
                return Math.round(n / 1e3 / 60 / 60 / 24)
            }(n, _)
        }
        function y(e, t, n) {
            return Math.round((t - e) * v(n))
        }
        function v(e) {
            switch (e) {
            case r.BillingCycle.OneYear:
                return 12;
            case r.BillingCycle.ThreeMonths:
                return 3;
            default:
                return 1
            }
        }
        function b(e) {
            return (Math.round(100 * e) / 100).toFixed(2)
        }
        function x(e) {
            const t = Math.round(100 * e) / 100;
            return Math.round(t).toFixed(0)
        }
        function w(e) {
            const t = Math.round(100 * e) / 100
              , n = Math.round(t);
            return Math.abs(t - n) > 0 ? t.toFixed(2) : n.toFixed(0)
        }
        function q(e) {
            const t = i.t(null, void 0, n(946530));
            if (d(e)) {
                const n = m(f(e));
                return t.format({
                    proPlanName: n
                })
            }
            return m(e)
        }
        function M() {
            return !!window.user.date_joined && new Date(window.user.date_joined).getTime() < new Date("2022-05-26").getTime()
        }
    }
    ,
    623213: (e, t, n) => {
        n.r(t),
        n.d(t, {
            guid: () => i.guid,
            randomHash: () => i.randomHash,
            randomHashN: () => i.randomHashN
        });
        var i = n(900608)
    }
    ,
    760863: (e, t, n) => {
        n.d(t, {
            parseHtml: () => r,
            parseHtmlElement: () => _
        });
        const i = new WeakMap;
        function r(e, t) {
            let n, r;
            return n = null == t ? document.documentElement : 9 === t.nodeType ? t.documentElement : t,
            i && (r = i.get(n)),
            r || (r = n.ownerDocument.createRange(),
            r.selectNodeContents(n),
            i && i.set(n, r)),
            r.createContextualFragment(e)
        }
        function _(e, t) {
            const n = r(e, t)
              , i = n.firstElementChild;
            return null !== i && n.removeChild(i),
            i
        }
    }
    ,
    999102: (e, t, n) => {
        function i(e) {
            return e.reduce((function(e, t, n) {
                return ~e.indexOf(t) || e.push(t),
                e
            }
            ), [])
        }
        n.r(t),
        n.d(t, {
            uniq: () => i
        })
    }
    ,
    949643: (e, t, n) => {
        n.d(t, {
            disable: () => l,
            enable: () => c,
            enabled: () => s,
            getAllFeatures: () => u,
            setEnabled: () => a
        });
        var i = n(976125);
        const r = new Map
          , _ = new Map
          , o = new Set;
        function s(e) {
            const t = r.get(e);
            if (void 0 !== t)
                return t;
            const n = _.get(e);
            return !!n && n.some(s)
        }
        function a(e, t) {
            r.set(String(e), Boolean(t))
        }
        function c(e) {
            a(e, !0)
        }
        function l(e) {
            a(e, !1)
        }
        function u() {
            const e = Object.create(null);
            for (const t of o)
                e[t] = s(t);
            return e
        }
        !function() {
            for (const [e,t] of Object.entries(i))
                if (o.add(e),
                "subsets"in t)
                    for (const n of t.subsets) {
                        o.add(n);
                        let t = _.get(n);
                        void 0 === t && (t = [],
                        _.set(n, t)),
                        t.push(e)
                    }
        }()
    }
}]);
