"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[69374], {
    261030: (e, i, a) => {
        a.d(i, {
            CookieSettings: () => s,
            bannerPrivacyPreferenceKey: () => d,
            checkBannerPrivacyPreferenceKey: () => A,
            cookieSettingsChangeEvent: () => m,
            cookieSettingsReady: () => _,
            getCookieSetting: () => V,
            hideBanner: () => P,
            isBannerVisible: () => D,
            notApplicateBanner: () => C,
            rejectBanner: () => I,
            setCookieSetting: () => L,
            showBanner: () => T
        });
        var s, n = a(251954), c = a(925049), o = a(49437), t = a(66974), r = a(639247);
        !function(e) {
            e.Analytics = "analytics",
            e.Advertising = "advertising"
        }(s || (s = {}));
        const m = "cookie_settings_changed"
          , _ = (0,
        c.createDeferredPromise)()
          , g = window.location.hostname.split(".")
          , l = (0,
        t.isLocal)() ? "" : "." + g.slice(1, g.length).join(".")
          , h = "cookieBanner"
          , d = (0,
        t.isProd)() ? "cookiePrivacyPreferenceBannerProduction" : "cookiePrivacyPreferenceBannerLocal"
          , u = "accepted"
          , v = "ignored"
          , p = "notApplicable"
          , w = "reject"
          , j = "cookiesSettings"
          , b = "localCookiesSettings"
          , f = "cookiePrivacyPreferenceBanner"
          , k = {
            [s.Analytics]: !1,
            [s.Advertising]: !1
        };
        function y() {
            return o.TVLocalStorage.removeItem(h)
        }
        function S(e) {
            return [u, p, w].includes(o.TVLocalStorage.getItem(e) ?? "")
        }
        function A() {
            return e = d,
            [u, p, w].includes(r.get(e) ?? "");
            var e
        }
        function P() {
            B(u)
        }
        function I() {
            B(w)
        }
        function T() {
            B(v)
        }
        function C() {
            B(p)
        }
        function B(e) {
            r.set(d, e, 3653, "/", l)
        }
        function D() {
            return r.get(d) === v
        }
        function L(e, i) {
            k[e] = i,
            r.set((0,
            t.isProd)() ? j : b, JSON.stringify(k), 3653, "/", l),
            n.emit(m, e, i)
        }
        function V(e) {
            return k[e]
        }
        function E() {
            return o.TVLocalStorage.removeItem(f)
        }
        !function() {
            const e = r.get((0,
            t.isProd)() ? j : b)
              , i = o.TVLocalStorage.getItem(f)
              , a = o.TVLocalStorage.getItem(j);
            if (e) {
                i && a && (E(),
                o.TVLocalStorage.removeItem(j)),
                S(h) && y();
                try {
                    const i = JSON.parse(e);
                    k[s.Analytics] = i?.[s.Analytics] || !1,
                    k[s.Advertising] = i?.[s.Advertising] || !1
                } catch {}
            } else if (S(h) && (L(s.Analytics, !0),
            L(s.Advertising, !0),
            P(),
            y()),
            i && a) {
                const e = JSON.parse(a);
                B(i),
                L(s.Analytics, e?.[s.Analytics]),
                L(s.Advertising, e?.[s.Advertising]),
                E(),
                o.TVLocalStorage.removeItem(j)
            }
        }()
    }
    ,
    188526: (e, i, a) => {
        a.d(i, {
            getSettings: () => h
        });
        var s = a(251954)
          , n = a(573034)
          , c = a(638456)
          , o = a(314802)
          , t = a(261030)
          , r = a(125226);
        const m = window.initData.snowplowSettings;
        let _, g = "web", l = "";
        if ((0,
        c.isDesktopApp)() && (g = "pc",
        l = "_desktop"),
        (0,
        o.isOnMobileAppPage)("old") ? (g = "mob",
        l = "_ios") : (0,
        o.isOnMobileAppPage)("new") && (g = "mob",
        l = "_android"),
        m && m.params && m.enabled) {
            const e = !(0,
            o.isOnMobileAppPage)("any") && !(0,
            t.getCookieSetting)(t.CookieSettings.Analytics) && {
                withSessionTracking: !0
            };
            _ = {
                collectorId: m.collectorId,
                url: m.url,
                params: {
                    appId: m.params.appId + l,
                    platform: g,
                    discoverRootDomain: !0,
                    contexts: {
                        webPage: !0
                    },
                    eventMethod: "get",
                    maxLocalStorageQueueSize: 30,
                    anonymousTracking: e,
                    sessionCookieTimeout: (0,
                    t.getCookieSetting)(t.CookieSettings.Analytics) ? 1800 : 7776e3
                }
            },
            (0,
            r.isFeatureEnabled)("snowplow_beacon_feature") && (_.params.eventMethod = "beacon",
            _.params.postPath = m.params.postPath)
        }
        function h() {
            if (_)
                return _
        }
        s.subscribe(t.cookieSettingsChangeEvent, ( (e, i) => {
            e === t.CookieSettings.Analytics && (i ? (0,
            n.disableAnonymousTracking)() : (0,
            n.enableAnonymousTracking)({
                options: {
                    withSessionTracking: !0
                }
            }))
        }
        ), null)
    }
    ,
    68207: (e, i, a) => {
        a.d(i, {
            SnowplowTrackerBase: () => o
        });
        var s = a(638456)
          , n = a(573034);
        let c = !1;
        class o {
            constructor(e, i) {
                (0,
                n.newTracker)(e.collectorId, e.url, e.params),
                this._schemes = i,
                this._collectorId = e.collectorId,
                this._setDiscardBrace(!0)
            }
            trackPageView() {
                (0,
                n.trackPageView)(void 0, [this._collectorId])
            }
            setUserId(e) {
                const i = !e || (0,
                s.isSymphonyEmbed)() ? null : `${e}`;
                (0,
                n.setUserId)(i, [this._collectorId])
            }
            _setDiscardBrace(e) {
                (0,
                n.discardBrace)(e, [this._collectorId])
            }
            _startActivityWatcher(e) {
                let i = 0;
                return (0,
                n.enableActivityTrackingCallback)({
                    minimumVisitLength: e.minimumVisitLength,
                    heartbeatDelay: e.heartbeatDelay,
                    callback: () => {
                        i++
                    }
                }, [this._collectorId]),
                {
                    disableTracking: n.disableActivityTracking,
                    flushTrackingResult: () => {
                        const a = i * e.heartbeatDelay;
                        return i = 0,
                        a
                    }
                }
            }
            _trackSelfDescribingEvent(e, i) {
                if (c)
                    return;
                const a = this._schemes[e];
                if (!a)
                    throw new Error("SelfDescribingEvent must have a schema");
                const s = {
                    event: {
                        data: i,
                        schema: a.schema
                    }
                };
                (0,
                n.trackSelfDescribingEvent)(s, [this._collectorId])
            }
        }
    }
    ,
    925049: (e, i, a) => {
        function s() {
            let e, i;
            return {
                promise: new Promise(( (a, s) => {
                    e = a,
                    i = s
                }
                )),
                reject: i,
                resolve: e
            }
        }
        a.d(i, {
            createDeferredPromise: () => s
        })
    }
    ,
    162226: e => {
        e.exports = JSON.parse('{"permission_dialogs":{"schema":"iglu:com.tradingview/permission_dialogs/jsonschema/1-0-0"},"studies_analytics":{"schema":"iglu:com.tradingview/studies_analytics_v2/jsonschema/1-0-2"},"drawings_analytics":{"schema":"iglu:com.tradingview/drawings_analytics/jsonschema/1-0-0"},"bar_replay_analytics":{"schema":"iglu:com.tradingview/bar_replay_analytics/jsonschema/1-0-5"},"chart_api_drawing_creation":{"schema":"iglu:com.tradingview/chart_api_drawing_creation/jsonschema/1-0-0"},"chart_symbols":{"schema":"iglu:com.tradingview/chart_symbols/jsonschema/1-0-6"},"chart_styles":{"schema":"iglu:com.tradingview/chart_styles/jsonschema/1-0-0"},"dino_dialog":{"schema":"iglu:com.tradingview/dino_dialog/jsonschema/1-0-0"},"chart_context_menus_10_percentages":{"schema":"iglu:com.tradingview/chart_context_menus_10_percentages/jsonschema/1-0-0"},"drawings_10_percentages":{"schema":"iglu:com.tradingview/drawings_10_percentages/jsonschema/1-0-0"},"chart_intervals_10_percentages":{"schema":"iglu:com.tradingview/chart_intervals_10_percentages/jsonschema/1-0-0"},"drawing_tools_selection_10_percentages":{"schema":"iglu:com.tradingview/drawing_tools_selection_10_percentages/jsonschema/1-0-0"},"solutions_watch":{"schema":"iglu:com.tradingview/solutions_watch/jsonschema/1-0-3"},"solutions_send_ticket":{"schema":"iglu:com.tradingview/solutions_send_ticket/jsonschema/1-0-0"},"solutions_nodes_watch":{"schema":"iglu:com.tradingview/solutions_nodes_watch/jsonschema/1-0-0"},"solutions_skip":{"schema":"iglu:com.tradingview/solutions_skip/jsonschema/1-0-0"},"solutions_reactions":{"schema":"iglu:com.tradingview/solutions_reactions/jsonschema/1-0-0"},"user_signup":{"schema":"iglu:com.tradingview/user_signup/jsonschema/1-0-1"},"trials":{"schema":"iglu:com.tradingview/trials/jsonschema/1-0-2"},"refund_transactions":{"schema":"iglu:com.tradingview/refund_transactions/jsonschema/1-0-1"},"billing":{"schema":"iglu:com.tradingview/billing/jsonschema/1-0-1"},"subscription_renewal":{"schema":"iglu:com.tradingview/subscription_renewal/jsonschema/1-0-1"},"subscription_removal":{"schema":"iglu:com.tradingview/subscription_removal/jsonschema/1-0-0"},"chargeback":{"schema":"iglu:com.tradingview/chargeback/jsonschema/1-0-0"},"news_clicks":{"schema":"iglu:com.tradingview/news_clicks/jsonschema/1-0-2"},"news_events":{"schema":"iglu:com.tradingview/news_events/jsonschema/1-0-4"},"news_screener_clicks":{"schema":"iglu:com.tradingview/news_screener_clicks/jsonschema/1-0-2"},"gopro_visits":{"schema":"iglu:com.tradingview/gopro_visits/jsonschema/1-0-0"},"logins":{"schema":"iglu:com.tradingview/logins/jsonschema/1-0-1"},"referral_signup":{"schema":"iglu:com.tradingview/referral_signup/jsonschema/1-0-0"},"referral_income":{"schema":"iglu:com.tradingview/referral_income/jsonschema/1-0-0"},"referral_spending":{"schema":"iglu:com.tradingview/referral_spending/jsonschema/1-0-0"},"referral_ref_link":{"schema":"iglu:com.tradingview/referral_ref_link/jsonschema/1-0-0"},"referral_visits":{"schema":"iglu:com.tradingview/referral_visits/jsonschema/1-0-0"},"full_featured_chart_button":{"schema":"iglu:com.tradingview/full_featured_chart_button/jsonschema/1-0-0"},"maps_sharing_clicks":{"schema":"iglu:com.tradingview/maps_sharing_clicks/jsonschema/1-0-0"},"publish_ideas":{"schema":"iglu:com.tradingview/publish_ideas/jsonschema/1-0-0"},"idea_update_created":{"schema":"iglu:com.tradingview/idea_update_created/jsonschema/1-0-0"},"idea_posting_comments":{"schema":"iglu:com.tradingview/idea_posting_comments/jsonschema/1-0-0"},"publish_scripts":{"schema":"iglu:com.tradingview/publish_scripts/jsonschema/1-0-0"},"idea_likes":{"schema":"iglu:com.tradingview/idea_likes/jsonschema/1-0-0"},"paper_order_placed":{"schema":"iglu:com.tradingview/paper_order_placed/jsonschema/1-0-0"},"trading_broker_connection_status":{"schema":"iglu:com.tradingview/trading_broker_connection_status/jsonschema/1-0-2"},"trading_order_status":{"schema":"iglu:com.tradingview/trading_order_status/jsonschema/1-0-5"},"trading_order_widget":{"schema":"iglu:com.tradingview/trading_order_widget/jsonschema/3-0-0"},"trading_order_placed":{"schema":"iglu:com.tradingview/trading_order_placed/jsonschema/1-0-0"},"switch_year_to_month_after_fail":{"schema":"iglu:com.tradingview/switch_year_to_month_after_fail/jsonschema/1-0-0"},"switching_yearly_to_monthly":{"schema":"iglu:com.tradingview/switching_yearly_to_monthly/jsonschema/1-0-0"},"phone_verification_dialog":{"schema":"iglu:com.tradingview/phone_verification_dialog/jsonschema/1-0-0"},"copy_reserve_codes":{"schema":"iglu:com.tradingview/copy_reserve_codes/jsonschema/1-0-0"},"tv_coins_dialog_watch":{"schema":"iglu:com.tradingview/tv_coins_dialog_watch/jsonschema/1-0-0"},"set_script_permission":{"schema":"iglu:com.tradingview/set_script_permission/jsonschema/1-0-0"},"remove_script_permission":{"schema":"iglu:com.tradingview/remove_script_permission/jsonschema/1-0-0"},"change_pro_plan":{"schema":"iglu:com.tradingview/change_pro_plan/jsonschema/1-0-0"},"unsubscribe_feedback":{"schema":"iglu:com.tradingview/unsubscribe_feedback/jsonschema/1-0-0"},"unsubscribe_dialog":{"schema":"iglu:com.tradingview/unsubscribe_dialog/jsonschema/1-0-0"},"gifts":{"schema":"iglu:com.tradingview/gifts/jsonschema/1-0-0"},"fail_on_duplicate_bt_payment_method":{"schema":"iglu:com.tradingview/fail_on_duplicate_bt_payment_method/jsonschema/1-0-0"},"trial_block_event":{"schema":"iglu:com.tradingview/trial_block_event/jsonschema/1-0-0"},"chat":{"schema":"iglu:com.tradingview/chat/jsonschema/1-0-0"},"broker_profile_links_click":{"schema":"iglu:com.tradingview/broker_profile_links_click/jsonschema/1-0-0"},"broker_open_account":{"schema":"iglu:com.tradingview/broker_open_account/jsonschema/1-0-3"},"financials_dialog":{"schema":"iglu:com.tradingview/financials_dialog/jsonschema/1-0-0"},"payment_order_dialog_initial":{"schema":"iglu:com.tradingview/payment_order_dialog_initial/jsonschema/1-0-0"},"payment_order_dialog_changes":{"schema":"iglu:com.tradingview/payment_order_dialog_changes/jsonschema/1-0-0"},"gopro_cards_clicks":{"schema":"iglu:com.tradingview/gopro_cards_clicks/jsonschema/1-0-0"},"search_toolbar":{"schema":"iglu:com.tradingview/search_toolbar/jsonschema/1-0-1"},"change_symbol":{"schema":"iglu:com.tradingview/change_symbol/jsonschema/1-0-0"},"burger_menu_click":{"schema":"iglu:com.tradingview/burger_menu_click/jsonschema/1-0-0"},"app_banner":{"schema":"iglu:com.tradingview/app_banner/jsonschema/1-0-0"},"app_link":{"schema":"iglu:com.tradingview/app_link/jsonschema/1-0-0"},"screener_high_level":{"schema":"iglu:com.tradingview/screener_high_level/jsonschema/1-0-0"},"screener_new_clicks":{"schema":"iglu:com.tradingview/screener_new_clicks/jsonschema/1-0-0"},"widget_tv_link_click":{"schema":"iglu:com.tradingview/widget_tv_link_click/jsonschema/1-0-0"},"widgets_without_websocket":{"schema":"iglu:com.tradingview/widgets_without_websocket/jsonschema/1-0-0"},"widget_load_meta_info":{"schema":"iglu:com.tradingview/widget_load_meta_info/jsonschema/1-0-0"},"telegram_mini_app_event":{"schema":"iglu:com.tradingview/telegram_mini_app_event/jsonschema/1-0-0"},"time_spend":{"schema":"iglu:com.tradingview/time_spend/jsonschema/1-0-0"},"page_unload":{"schema":"iglu:com.tradingview/page_unload/jsonschema/1-0-0"},"publication_actions":{"schema":"iglu:com.tradingview/web_test/jsonschema/1-0-0"},"social_action":{"schema":"iglu:com.tradingview/social_action/jsonschema/1-0-1"},"market_heatmap_events":{"schema":"iglu:com.tradingview/market_heatmap_events/jsonschema/1-0-0"},"toast_dialog":{"schema":"iglu:com.tradingview/toast_dialog/jsonschema/1-0-0"},"ad_dialog":{"schema":"iglu:com.tradingview/ad_dialog/jsonschema/1-0-4"},"toolbar_button_click":{"schema":"iglu:com.tradingview/toolbar_button_click/jsonschema/1-0-0"},"sparks":{"schema":"iglu:com.tradingview/sparks/jsonschema/1-0-0"},"longer_billing_cycle_offer":{"schema":"iglu:com.tradingview/longer_billing_cycle_offer/jsonschema/1-0-0"},"market_data_solution":{"schema":"iglu:com.tradingview/market_data_solution/jsonschema/1-0-0"},"pine_editor_events":{"schema":"iglu:com.tradingview/pine_editor_events/jsonschema/1-0-0"},"backtesting_events":{"schema":"iglu:com.tradingview/backtesting_events/jsonschema/1-0-3"},"three_d_secure":{"schema":"iglu:com.tradingview/three_d_secure/jsonschema/1-0-0"},"featured_placement":{"schema":"iglu:com.tradingview/featured_placement/jsonschema/1-0-1"},"toolbar_indicators":{"schema":"iglu:com.tradingview/toolbar_indicators/jsonschema/1-0-1"},"ui_events":{"schema":"iglu:com.tradingview/ui_events/jsonschema/1-0-1"},"mind_events":{"schema":"iglu:com.tradingview/mind_events/jsonschema/1-0-0"},"signup_popup_dialog":{"schema":"iglu:com.tradingview/signup_popup_dialog/jsonschema/1-0-0"},"solutions_search_events":{"schema":"iglu:com.tradingview/help_desk/jsonschema/1-0-0"},"trading_general_events":{"schema":"iglu:com.tradingview/trading_general_events/jsonschema/1-0-1"},"get_widget_button":{"schema":"iglu:com.tradingview/get_widget_button/jsonschema/1-0-0"},"device_check_decline":{"schema":"iglu:com.tradingview/device_check_decline/jsonschema/1-0-0"},"run_or_signin_with_feature":{"schema":"iglu:com.tradingview/run_or_signin_with_feature/jsonschema/1-0-0"},"user_declaration_event":{"schema":"iglu:com.tradingview/user_declaration_event/jsonschema/1-0-0"},"partial_refund_offer_event":{"schema":"iglu:com.tradingview/partial_refund_offer_event/jsonschema/1-0-0"},"paper_competition_event":{"schema":"iglu:com.tradingview/paper_competition_event/jsonschema/1-0-2"},"paper_account":{"schema":"iglu:com.tradingview/paper_account/jsonschema/1-0-0"},"order_preset":{"schema":"iglu:com.tradingview/order_preset/jsonschema/1-0-0"},"language_selector":{"schema":"iglu:com.tradingview/language_selector/jsonschema/1-0-0"},"promo_banner_event":{"schema":"iglu:com.tradingview/promo_banner/jsonschema/1-0-3"},"ai_news_summary":{"schema":"iglu:com.tradingview/ai_news_summary/jsonschema/1-0-0"},"alerts_creation":{"schema":"iglu:com.tradingview/alerts_creation/jsonschema/1-0-0"},"login_required":{"schema":"iglu:com.tradingview/login_required/jsonschema/1-0-0"},"assistant_chat_action":{"schema":"iglu:com.tradingview/assistant_chat_action/jsonschema/1-0-2"},"options_event":{"schema":"iglu:com.tradingview/options_event/jsonschema/1-0-0"},"raf_notification_popup":{"schema":"iglu:com.tradingview/raf_notification_popup/jsonschema/1-0-0"},"christmas_recap_event":{"schema":"iglu:com.tradingview/christmas_recap_event/jsonschema/1-0-0"},"support_wizard_event":{"schema":"iglu:com.tradingview/support_wizard_event/jsonschema/1-0-0"},"pine_coders_page_event":{"schema":"iglu:com.tradingview/pine_coders_page_event/jsonschema/1-0-0"},"main_page_widgets":{"schema":"iglu:com.tradingview/main_page_widgets/jsonschema/1-0-0"},"assistant_chat_action_for_free_user":{"schema":"iglu:com.tradingview/assistant_chat_action_for_free_user/jsonschema/1-0-0"},"symbol_page_tab_overview_widgets":{"schema":"iglu:com.tradingview/symbol_page_tab_overview_widgets/jsonschema/1-0-0"},"yield_curves_tool":{"schema":"iglu:com.tradingview/yield_curves_tool/jsonschema/2-0-0"},"portfolio_actions":{"schema":"iglu:com.tradingview/portfolio_actions/jsonschema/1-0-0"},"pricing_tooltip_event":{"schema":"iglu:com.tradingview/pricing_tooltip_event/jsonschema/1-0-0"},"fundamental_graphs":{"schema":"iglu:com.tradingview/fundamental_graphs/jsonschema/1-0-0"},"seasonals":{"schema":"iglu:com.tradingview/seasonals/jsonschema/1-0-0"},"right_panel_products_10_percentages":{"schema":"iglu:com.tradingview/right_panel_products_10_percentages/jsonschema/1-0-0"}}')
    }
}]);
