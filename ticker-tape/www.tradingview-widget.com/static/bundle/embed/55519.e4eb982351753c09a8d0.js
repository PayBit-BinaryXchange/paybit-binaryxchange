(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[55519], {
    737643: o => {
        o.exports = {
            pair: "pair-ocURKVwI",
            xxceptionallysmalldonotusebrv1023: "xxceptionallysmalldonotusebrv1023-ocURKVwI",
            xxxxsmall: "xxxxsmall-ocURKVwI",
            xxxsmall: "xxxsmall-ocURKVwI",
            xxsmall: "xxsmall-ocURKVwI",
            xsmall: "xsmall-ocURKVwI",
            small: "small-ocURKVwI",
            medium: "medium-ocURKVwI",
            large: "large-ocURKVwI",
            xlarge: "xlarge-ocURKVwI",
            xxlarge: "xxlarge-ocURKVwI",
            xxxlarge: "xxxlarge-ocURKVwI",
            logo: "logo-ocURKVwI",
            skeleton: "skeleton-ocURKVwI",
            empty: "empty-ocURKVwI"
        }
    }
    ,
    757554: o => {
        o.exports = {
            logo: "logo-PsAlMQQF",
            hidden: "hidden-PsAlMQQF",
            xxceptionallysmalldonotusebrv1023: "xxceptionallysmalldonotusebrv1023-PsAlMQQF",
            xxxsmall: "xxxsmall-PsAlMQQF",
            xxsmall: "xxsmall-PsAlMQQF",
            xsmall: "xsmall-PsAlMQQF",
            small: "small-PsAlMQQF",
            medium: "medium-PsAlMQQF",
            large: "large-PsAlMQQF",
            xlarge: "xlarge-PsAlMQQF",
            xxlarge: "xxlarge-PsAlMQQF",
            xxxlarge: "xxxlarge-PsAlMQQF",
            skeleton: "skeleton-PsAlMQQF",
            letter: "letter-PsAlMQQF"
        }
    }
    ,
    467236: (o, r, l) => {
        "use strict";
        l.d(r, {
            getCircleLogoAnyHtml: () => a
        });
        var e = l(857430)
          , c = l(348091);
        function a(o) {
            const {logoUrls: r, ...l} = o;
            return 1 === r.length ? (0,
            e.getCircleLogoHtml)({
                logoUrl: r[0],
                ...l
            }) : 2 === r.length ? (0,
            c.getCircleLogoPairHtml)({
                primaryLogoUrl: r[0],
                secondaryLogoUrl: r[1],
                ...l
            }) : (0,
            e.getCircleLogoHtml)({
                logoUrl: void 0,
                ...l
            })
        }
    }
    ,
    348091: (o, r, l) => {
        "use strict";
        l.d(r, {
            getCircleLogoPairHtml: () => c
        });
        var e = l(115078);
        function c(o) {
            const {primaryLogoUrl: r, secondaryLogoUrl: l, size: c, className: t} = o;
            return `<span class="${(0,
            e.getBlockStyleClasses)(c, t)}">\n\t\t\t${a({
                logoUrl: l,
                size: c
            })}\n\t\t\t${a({
                logoUrl: r,
                size: c
            })}\n\t\t</span>`
        }
        function a(o) {
            const {logoUrl: r, size: l} = o
              , c = (0,
            e.getLogoStyleClasses)(l, 2, Boolean(r));
            return void 0 === r ? `<span class="${c}"></span>` : `<img class="${c}" crossorigin src="${r}" alt="" />`
        }
    }
    ,
    115078: (o, r, l) => {
        "use strict";
        l.d(r, {
            getBlockStyleClasses: () => g,
            getLogoStyleClasses: () => d
        });
        var e = l(497754)
          , c = l.n(e)
          , a = l(548729)
          , t = l(737643)
          , n = l.n(t);
        function g(o, r) {
            return c()(n().pair, n()[o], r)
        }
        function d(o, r=2, l=!0) {
            return c()(n().logo, n()[o], n().skeleton, a.skeletonTheme.wrapper, !l && n().empty, 1 === r && c()(a.skeletonTheme.animated))
        }
    }
    ,
    857430: (o, r, l) => {
        "use strict";
        l.d(r, {
            getCircleLogoHtml: () => c
        });
        var e = l(842060);
        l(757554);
        function c(o) {
            const r = (0,
            e.getStyleClasses)(o.size, 2, o.className);
            return (0,
            e.isCircleLogoWithUrlProps)(o) ? `<img class="${r}" crossorigin src="${o.logoUrl}" alt="">` : `<span class="${r}">${o.placeholderLetter || ""}</span>`
        }
    }
    ,
    17966: (o, r, l) => {
        "use strict";
        l.d(r, {
            getCircleLogoAnyHtml: () => e.getCircleLogoAnyHtml
        });
        var e = l(467236)
    }
    ,
    631013: (o, r, l) => {
        "use strict";
        l.d(r, {
            trackWidgetLoadMetaInfo: () => c
        });
        var e = l(439563);
        async function c(o) {
            Math.random() > .005 || (await (0,
            e.getEmbedWidgetTracker)())?.trackWidgetLoadMetaInfo(o)
        }
    }
    ,
    130714: o => {
        "use strict";
        o.exports = JSON.parse('{"color-white":"#ffffff","color-black":"#000000","color-transparent":"#00000000","color-cold-gray-50":"#F9F9F9","color-cold-gray-100":"#F2F2F2","color-cold-gray-150":"#EBEBEB","color-cold-gray-200":"#DBDBDB","color-cold-gray-250":"#C9C9C9","color-cold-gray-300":"#B8B8B8","color-cold-gray-350":"#A8A8A8","color-cold-gray-400":"#9C9C9C","color-cold-gray-450":"#8C8C8C","color-cold-gray-500":"#808080","color-cold-gray-550":"#707070","color-cold-gray-600":"#636363","color-cold-gray-650":"#575757","color-cold-gray-700":"#4A4A4A","color-cold-gray-750":"#3D3D3D","color-cold-gray-800":"#2E2E2E","color-cold-gray-850":"#1F1F1F","color-cold-gray-900":"#0F0F0F","color-cold-gray-950":"#000000","color-ripe-red-50":"#FFEBEC","color-ripe-red-100":"#FCCBCD","color-ripe-red-200":"#FAA1A4","color-ripe-red-300":"#F77C80","color-ripe-red-400":"#F7525F","color-ripe-red-500":"#F23645","color-ripe-red-600":"#CC2F3C","color-ripe-red-700":"#B22833","color-ripe-red-800":"#991F29","color-ripe-red-900":"#801922","color-ripe-red-a100":"#FF8080","color-ripe-red-a200":"#FF5252","color-ripe-red-a400":"#FF3333","color-ripe-red-a600":"#CC2929","color-ripe-red-a700":"#802028","color-ripe-red-a800":"#4D191D","color-ripe-red-a900":"#331F20","color-tan-orange-50":"#FFF3E0","color-tan-orange-100":"#FFE0B2","color-tan-orange-200":"#FFCC80","color-tan-orange-300":"#ffb74d","color-tan-orange-400":"#FFA726","color-tan-orange-500":"#FF9800","color-tan-orange-600":"#FB8C00","color-tan-orange-700":"#F57C00","color-tan-orange-800":"#EF6C00","color-tan-orange-900":"#e65100","color-tan-orange-a100":"#FFD180","color-tan-orange-a200":"#ffab40","color-tan-orange-a400":"#FF9100","color-tan-orange-a500":"#E57E17","color-tan-orange-a600":"#CC7014","color-tan-orange-a700":"#8C541C","color-tan-orange-a800":"#593A1B","color-tan-orange-a900":"#33261A","color-iguana-green-50":"#E8F5E9","color-iguana-green-100":"#C8E6C9","color-iguana-green-200":"#A5D6A7","color-iguana-green-300":"#81c784","color-iguana-green-400":"#66BB6A","color-iguana-green-500":"#4caf50","color-iguana-green-600":"#43a047","color-iguana-green-700":"#388e3c","color-iguana-green-800":"#2E7D32","color-iguana-green-900":"#1B5E20","color-iguana-green-a100":"#B9F6CA","color-iguana-green-a200":"#69F0AE","color-iguana-green-a400":"#00E676","color-iguana-green-a700":"#00c853","color-banana-yellow-50":"#FFFDE7","color-banana-yellow-100":"#FFF9C4","color-banana-yellow-200":"#FFF59D","color-banana-yellow-300":"#FFF176","color-banana-yellow-400":"#ffee58","color-banana-yellow-500":"#ffeb3b","color-banana-yellow-600":"#fdd835","color-banana-yellow-700":"#fbc02d","color-banana-yellow-800":"#f9a825","color-banana-yellow-900":"#F57F17","color-banana-yellow-a100":"#FFFF8D","color-banana-yellow-a200":"#FFFF00","color-banana-yellow-a400":"#ffea00","color-banana-yellow-a700":"#EEDA01","color-tv-blue-50":"#E3EFFD","color-tv-blue-100":"#BBD9FB","color-tv-blue-200":"#90BFF9","color-tv-blue-300":"#5B9CF6","color-tv-blue-400":"#3179F5","color-tv-blue-500":"#2962FF","color-tv-blue-600":"#1E53E5","color-tv-blue-700":"#1848CC","color-tv-blue-800":"#143EB2","color-tv-blue-900":"#0C3299","color-tv-blue-a100":"#82b1ff","color-tv-blue-a200":"#448aff","color-tv-blue-a400":"#2979ff","color-tv-blue-a600":"#2962FF","color-tv-blue-a700":"#143A87","color-tv-blue-a800":"#142E61","color-tv-blue-a900":"#132042","color-deep-blue-50":"#EDE7F6","color-deep-blue-100":"#D1C4E9","color-deep-blue-200":"#B39DDB","color-deep-blue-300":"#9575cd","color-deep-blue-400":"#7e57c2","color-deep-blue-500":"#673ab7","color-deep-blue-600":"#5E35B1","color-deep-blue-700":"#512da8","color-deep-blue-800":"#4527A0","color-deep-blue-900":"#311B92","color-deep-blue-a100":"#b388ff","color-deep-blue-a200":"#7C4DFF","color-deep-blue-a400":"#651FFF","color-deep-blue-a700":"#6200EA","color-minty-green-50":"#DAF2EE","color-minty-green-100":"#ACE5DC","color-minty-green-200":"#70CCBD","color-minty-green-300":"#42BDA8","color-minty-green-400":"#22AB94","color-minty-green-500":"#089981","color-minty-green-600":"#06806B","color-minty-green-700":"#056656","color-minty-green-800":"#004D40","color-minty-green-900":"#00332A","color-minty-green-a100":"#A7FFF0","color-minty-green-a200":"#45E5CB","color-minty-green-a400":"#2BD9BC","color-minty-green-a600":"#24B29B","color-minty-green-a700":"#1B7667","color-minty-green-a800":"#10443B","color-minty-green-a900":"#082621","color-grapes-purple-50":"#F3E5F5","color-grapes-purple-100":"#E1BEE7","color-grapes-purple-200":"#CE93D8","color-grapes-purple-300":"#ba68c8","color-grapes-purple-400":"#ab47bc","color-grapes-purple-500":"#9c27b0","color-grapes-purple-600":"#8e24aa","color-grapes-purple-700":"#7b1fa2","color-grapes-purple-800":"#6A1B9A","color-grapes-purple-900":"#4A148C","color-grapes-purple-a100":"#EA80FC","color-grapes-purple-a200":"#E040FB","color-grapes-purple-a400":"#D500F9","color-grapes-purple-a700":"#aa00ff","color-berry-pink-50":"#FCE4EC","color-berry-pink-100":"#F8BBD0","color-berry-pink-200":"#f48fb1","color-berry-pink-300":"#f06292","color-berry-pink-400":"#ec407a","color-berry-pink-500":"#e91e63","color-berry-pink-600":"#D81B60","color-berry-pink-700":"#C2185B","color-berry-pink-800":"#AD1457","color-berry-pink-900":"#880E4F","color-berry-pink-a100":"#ff80ab","color-berry-pink-a200":"#ff4081","color-berry-pink-a400":"#f50057","color-berry-pink-a700":"#c51162","color-sky-blue-50":"#E0F7FA","color-sky-blue-100":"#B2EBF2","color-sky-blue-200":"#80DEEA","color-sky-blue-300":"#4dd0e1","color-sky-blue-400":"#26c6da","color-sky-blue-500":"#00bcd4","color-sky-blue-600":"#00acc1","color-sky-blue-700":"#0097A7","color-sky-blue-800":"#00838F","color-sky-blue-900":"#006064","color-sky-blue-a100":"#84FFFF","color-sky-blue-a200":"#18FFFF","color-sky-blue-a400":"#00e5ff","color-sky-blue-a700":"#00B8D4","color-forest-green-50":"#DAF2E6","color-forest-green-100":"#ACE5C9","color-forest-green-200":"#70CC9E","color-forest-green-300":"#42BD7F","color-forest-green-400":"#22AB67","color-forest-green-500":"#089950","color-forest-green-600":"#068043","color-forest-green-700":"#056636","color-forest-green-800":"#004D27","color-forest-green-900":"#1A3326","color-facebook":"#1877F2","color-deep-facebook":"#1564CA","color-twitter":"#1DA1F2","color-deep-twitter":"#188CD3","color-youtube":"#FF0000","color-linkedin":"#007BB5","color-seeking-alpha-brand":"#ff7200"}')
    }
    ,
    410515: o => {
        "use strict";
        o.exports = JSON.parse('{"color-header-bg":"color-white","color-body-bg":"color-white","color-body-secondary-bg":"color-cold-gray-100","color-bg-primary":"color-white","color-bg-primary-hover":"color-cold-gray-100","color-bg-secondary":"color-white","color-bg-highlight":"color-cold-gray-50","color-bg-scroll-buttons":"color-cold-gray-100","color-legacy-bg-scroll-buttons":"color-cold-gray-850","color-legacy-bg-widget":"color-white","color-text-primary":"color-cold-gray-900","color-text-secondary":"color-cold-gray-550","color-text-tertiary":"color-cold-gray-400","color-text-disabled":"color-cold-gray-300","color-accent-content":"color-cold-gray-900","color-box-shadow":"color-cold-gray-300","color-divider":"color-cold-gray-150","color-divider-hover":"color-cold-gray-100","color-divider-secondary":"color-cold-gray-100","color-active-hover-text":"color-cold-gray-900","color-alert-text":"color-cold-gray-900","color-border-table":"color-cold-gray-100","color-brand":"color-tv-blue-500","color-brand-active":"color-tv-blue-700","color-brand-hover":"color-tv-blue-600","color-chart-page-bg":"color-cold-gray-150","color-common-tooltip-bg":"color-cold-gray-800","color-danger":"color-ripe-red-400","color-danger-hover":"color-ripe-red-500","color-danger-active":"color-ripe-red-600","color-depthrenderer-stroke-style":"color-cold-gray-100","color-halal":"color-iguana-green-400","color-continuous":"color-cold-gray-500","color-tv-calculated-pair":"color-grapes-purple-400","color-highlight-new":"color-tan-orange-50","color-input-bg":"color-white","color-input-publish-bg":"color-white","color-link":"color-tv-blue-500","color-link-hover":"color-tv-blue-600","color-link-active":"color-tv-blue-700","color-list-nth-child-bg":"color-cold-gray-50","color-pane-bg":"color-white","color-pane-secondary-bg":"color-cold-gray-100","color-popup-menu-item-hover-bg":"color-cold-gray-100","color-popup-menu-separator":"color-cold-gray-150","color-primary-symbol":"color-sky-blue-500","color-screener-description":"color-cold-gray-650","color-success":"color-minty-green-500","color-success-hover":"color-minty-green-600","color-success-active":"color-minty-green-700","color-toolbar-button-text":"color-cold-gray-900","color-toolbar-button-text-hover":"color-cold-gray-900","color-toolbar-button-text-active":"color-tv-blue-500","color-toolbar-button-text-active-hover":"color-tv-blue-600","color-toolbar-button-background-hover":"color-cold-gray-100","color-toolbar-button-background-secondary-hover":"color-cold-gray-150","color-toolbar-button-background-active":"color-tv-blue-50","color-toolbar-button-background-active-hover":"color-tv-blue-100","color-toolbar-toggle-button-background-active":"color-tv-blue-500","color-toolbar-toggle-button-background-active-hover":"color-tv-blue-600","color-toolbar-toggle-button-icon":"color-cold-gray-200","color-toolbar-interactive-element-text-normal":"color-cold-gray-900","color-toolbar-opened-element-bg":"color-cold-gray-100","color-toolbar-divider-background":"color-cold-gray-150","color-popup-background":"color-white","color-popup-element-text":"color-cold-gray-900","color-popup-element-text-hover":"color-cold-gray-900","color-popup-element-background-hover":"color-cold-gray-100","color-popup-element-secondary-text":"color-cold-gray-500","color-popup-element-hint-text":"color-cold-gray-400","color-popup-element-text-active":"color-white","color-popup-element-background-active":"color-tv-blue-500","color-popup-element-toolbox-text":"color-cold-gray-500","color-popup-element-toolbox-text-hover":"color-cold-gray-900","color-popup-element-toolbox-text-active-hover":"color-tv-blue-200","color-popup-element-toolbox-background-hover":"color-cold-gray-150","color-popup-element-toolbox-background-active-hover":"color-tv-blue-700","color-tooltip-bg":"color-cold-gray-800","color-tv-dialog-caption":"color-cold-gray-650","color-tv-dropdown-item-hover-bg":"color-cold-gray-100","color-underlined-text":"color-cold-gray-550","color-widget-pages-bg":"color-white","color-warning":"color-tan-orange-500","color-growing":"color-minty-green-500","color-falling":"color-ripe-red-500","color-forex-icon":"color-cold-gray-750","color-list-item-active-bg":"color-tv-blue-400","color-list-item-hover-bg":"color-tv-blue-50","color-list-item-text":"color-cold-gray-800","color-price-axis-label-back":"color-cold-gray-150","color-price-axis-label-text":"color-cold-gray-650","color-price-axis-gear":"color-cold-gray-900","color-price-axis-gear-hover":"color-black","color-price-axis-highlight":"color-cold-gray-150","color-bid":"color-tv-blue-500","color-border":"color-cold-gray-150","color-border-chat-fields":"color-cold-gray-250","color-border-hover":"color-cold-gray-250","color-button-hover-bg":"color-cold-gray-150","color-depthrenderer-fill-style":"color-cold-gray-650","color-disabled-border-and-color":"color-cold-gray-150","color-disabled-input":"color-cold-gray-150","color-empty-container-message":"color-cold-gray-550","color-icons":"color-cold-gray-550","color-input-textarea-readonly":"color-cold-gray-650","color-input-placeholder-text":"color-cold-gray-350","color-item-active-blue":"color-tv-blue-50","color-item-hover-active-bg":"color-tv-blue-100","color-item-hover-bg":"color-tv-blue-100","color-item-hover-blue":"color-tv-blue-100","color-item-selected-blue":"color-tv-blue-50","color-item-active-text":"color-white","color-item-active-bg":"color-tv-blue-500","color-list-item":"color-cold-gray-550","color-news-highlight":"color-tv-blue-100","color-placeholder":"color-cold-gray-350","color-row-hover-active-bg":"color-cold-gray-100","color-sb-scrollbar-body-bg":"color-cold-gray-200","color-section-separator-border":"color-cold-gray-300","color-separator-table-chat":"color-cold-gray-150","color-tag-active-bg":"color-cold-gray-200","color-tag-hover-bg":"color-cold-gray-150","color-text-regular":"color-cold-gray-700","color-tv-button-checked":"color-cold-gray-550","color-scroll-bg":"color-cold-gray-400","color-scroll-border":"color-cold-gray-100","color-widget-border":"color-cold-gray-100","color-scroll-buttons-arrow":"color-white","color-control-intent-default":"color-cold-gray-200","color-control-intent-success":"color-minty-green-500","color-control-intent-primary":"color-tv-blue-500","color-control-intent-warning":"color-tan-orange-500","color-control-intent-danger":"color-ripe-red-500","color-goto-label-background":"color-cold-gray-800","color-pre-market":"color-tan-orange-600","color-pre-market-bg":"color-tan-orange-400","color-post-market":"color-tv-blue-500","color-post-market-bg":"color-tv-blue-400","color-market-open":"color-minty-green-500","color-market-open-bg":"color-minty-green-400","color-market-closed":"color-cold-gray-400","color-market-holiday":"color-cold-gray-400","color-market-expired":"color-ripe-red-500","color-invalid-symbol":"color-ripe-red-400","color-invalid-symbol-hover":"color-ripe-red-700","color-delisted-symbol":"color-ripe-red-600","color-delisted-symbol-hover":"color-ripe-red-800","color-replay-mode":"color-tv-blue-500","color-replay-mode-point-select":"color-cold-gray-350","color-replay-mode-icon":"color-white","color-replay-mode-hover":"color-tv-blue-600","color-notaccurate-mode":"color-berry-pink-600","color-delay-mode":"color-tan-orange-700","color-delay-mode-bg":"color-tan-orange-400","color-eod-mode":"color-grapes-purple-700","color-eod-mode-bg":"color-grapes-purple-400","color-data-problem":"color-ripe-red-600","color-data-problem-bg":"color-ripe-red-400","color-data-problem-hover":"color-ripe-red-700","color-list-item-bg-highlighted":"color-tv-blue-50","color-list-item-bg-selected":"color-tv-blue-100","color-list-item-bg-highlighted-hover":"color-tv-blue-100","color-list-item-bg-selected-hover":"color-tv-blue-200","color-screener-header-bg":"color-white","color-screener-header-bg-hover":"color-cold-gray-100","color-marker-flagged":"color-ripe-red-400","color-marker-flagged-hovered":"color-ripe-red-600","color-ask":"color-ripe-red-400","color-sell":"color-ripe-red-400","color-buy":"color-tv-blue-500","color-neutral":"color-cold-gray-550","color-pro":"color-minty-green-400","color-pro-hover":"color-minty-green-600","color-pro-plus":"color-tv-blue-500","color-pro-plus-hover":"color-tv-blue-600","color-pro-premium":"color-tan-orange-500","color-pro-premium-hover":"color-tan-orange-700","color-trial":"color-cold-gray-550","color-trial-hover":"color-cold-gray-550","color-mod":"color-ripe-red-400","color-mod-hover":"color-ripe-red-600","color-ad":"color-tan-orange-500","color-broker-featured":"color-minty-green-400","color-broker-featured-hover":"color-minty-green-600","color-alert-status-active":"color-minty-green-400","color-alert-status-stopped":"color-ripe-red-500","color-alert-status-triggered":"color-tan-orange-500","color-overlay":"color-cold-gray-400","color-search-button-hover":"color-cold-gray-150","color-boost-button-content-selected":"color-tv-blue-600","color-boost-button-content-hover":"color-cold-gray-900","color-boost-button-bg-hover":"color-cold-gray-150","color-boost-button-border-hover":"color-cold-gray-150","color-boost-button-border-default":"color-cold-gray-150","color-common-tooltip-text":"color-cold-gray-100","color-replay-data-mode":"color-ripe-red-400","color-legacy-success":"color-minty-green-300","color-collapse-tabs-border":"color-cold-gray-100","color-site-widget-hover":"color-cold-gray-50","color-attention":"color-banana-yellow-700","color-x-twitter-content":"color-cold-gray-900","color-card-border":"color-cold-gray-150","color-card-border-hover":"color-cold-gray-300","color-background-special-primary":"color-white","color-stroke-special-primary":"color-cold-gray-150","color-selection-bg":"color-tv-blue-100","color-default-gray":"color-cold-gray-550","color-featured-broker-badge-bg":"color-cold-gray-900","color-featured-broker-badge-bg-hover":"color-cold-gray-800","color-featured-broker-badge-text":"color-white"}')
    }
}]);
