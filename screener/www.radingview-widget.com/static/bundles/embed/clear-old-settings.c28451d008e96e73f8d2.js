"use strict";
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[30362], {
    276141: (e, t, o) => {
        o.r(t),
        o.d(t, {
            clearOldSettings: () => a
        });
        var i = o(62802);
        function *n() {
            yield*function*() {
                for (const e of ["markets.quotes.hide_description", "main_page_hotlist_stocks_market", "studyMarket.favorites.extra", "hint.colorThemeHeaderMenu", "hint.layoutMenu", "hint.helpMenu", "hint.newsTab", "hint.removeSaveButton", "hint.watchlistDotsMenu", "hint.menuSwitcher", "hint.anonymous_user_menu", "hint.symbolSearchHotkeyChanged", "hint.favoriteDrawingsFixedToolbar", "hint.intervalHotkeyChanged", "hint.themeSwitcher", "hint.watchlist.move_to_chart", "alerts.hide_inactive", "alerts.show_for_curren_symbol_only", "alerts.show_for_curren_resolution_only", "alerts.widget.selected_alert_id", "alerts.creating.send_true_sms", "alerts.widget.show_price", "alerts.widget.show_indicator", "alerts.widget.show_drawing", "alerts.widget.show_strategy", "alerts.push.showDialog", "alerts.widget.hide_inactive", "alerts.no_warning.readonlyAlerts", "alerts.no_warning.screenerFlaggedAlert", "site.feed_widgets", "tv-chart-changed-notification", "hotlist.active_tab", "trading.filter_brokers_by_locale", "trading.reviewDialogShowedOnLogin", "trading.panelHeight", "trading.showTooltipForOrderSizeCalculator", "trading.tradingPanelOpened", "blackfriday.showPopup", "black_friday.shown_popup_2017", "black_friday.shown_popup_2018", "black_friday.shown_popup_2019", "black_friday.shown_popup_2020", "black_friday.shown_popup_2021", "black_friday.shown_popup_2022", "black_friday.shown_popup_2023", "black_friday.shown_popup_2024", "black_friday.show_popup_2024", "black_friday.shown_popup_last_day_2022", "cyber_monday.shown_popup_2020", "cyber_monday.shown_popup_2021", "cyber_monday.shown_popup_2022", "cyber_monday.shown_popup_2023", "cyber_monday.show_popup_2024", "cyber_monday.shown_popup_last_day_2022", "replay.highlightShown", "replay.manager.autoplayDelay", "gui.replay.toolbar.position", "hint.screenerDialog", "hint.alertsOnSymbolPage", "hint.alertsOnWatchlist", "hint.optionsBuilderDialog", "hint.editorDropDownHint", "hint.editorProfilerMoved", "main_promo_closed", "hint.yieldCurvesBuilderDialog", "pineStudiesUpdates", "optionsChain.settingsHint", "screener.switchToStockScreenerInRightPanel", "Paper.showNewCommissionPopup", "macro_maps_onboarding_hidden"])
                    i.remove(e),
                    yield;
                for (const e of i.keys()) {
                    if (e.startsWith("widgetbar.widget.news.") && i.remove(e),
                    e.startsWith("study_") && "{}" === i.getValue(e) && i.remove(e),
                    e.startsWith("trading.orderPanelSettings")) {
                        const t = i.getValue(e);
                        if (void 0 === t)
                            continue;
                        const o = JSON.parse(t);
                        delete o.showCryptoBracketsInCurrency,
                        delete o.showCryptoBracketsInPercent,
                        delete o.showBracketsInCurrency,
                        delete o.showBracketsInPercent,
                        delete o.showCurrencyRiskInQty,
                        delete o.showPercentRiskInQty,
                        i.setValue(e, JSON.stringify(o))
                    }
                    yield
                }
            }(),
            yield*function*() {
                for (const e of ["application-clipboard", "NaN", "opened-tabs", "symbol_page_overview_chart_type", "LastPeriodOfTotalPublications"])
                    localStorage.removeItem(e),
                    yield
            }()
        }
        function a() {
            const e = n();
            function t() {
                window.requestIdleCallback ? window.requestIdleCallback(o) : setTimeout(o, 0)
            }
            function o(o) {
                do {
                    if (e.next().done)
                        return
                } while (o && o.timeRemaining() > 3);
                t()
            }
            t()
        }
    }
}]);
