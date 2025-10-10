(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[33357, 78775], {
    737643: t => {
        t.exports = {
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
    757554: t => {
        t.exports = {
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
    140987: t => {
        t.exports = {
            "tv-spinner__container-rotate": "tv-spinner__container-rotate-aLqboHuu"
        }
    }
    ,
    506438: t => {
        t.exports = {}
    }
    ,
    54661: t => {
        t.exports = {
            wrapper: "wrapper-PQ5O_1M7",
            touch: "touch-PQ5O_1M7"
        }
    }
    ,
    115078: (t, e, s) => {
        "use strict";
        s.d(e, {
            getBlockStyleClasses: () => l,
            getLogoStyleClasses: () => h
        });
        var i = s(497754)
          , o = s.n(i)
          , r = s(548729)
          , n = s(737643)
          , a = s.n(n);
        function l(t, e) {
            return o()(a().pair, a()[t], e)
        }
        function h(t, e=2, s=!0) {
            return o()(a().logo, a()[t], a().skeleton, r.skeletonTheme.wrapper, !s && a().empty, 1 === e && o()(r.skeletonTheme.animated))
        }
    }
    ,
    465201: (t, e, s) => {
        "use strict";
        s.d(e, {
            CustomBehaviourContext: () => i
        });
        const i = (0,
        s(50959).createContext)({
            enableActiveStateStyles: !0
        });
        i.displayName = "CustomBehaviourContext"
    }
    ,
    169986: (t, e, s) => {
        "use strict";
        s.d(e, {
            CustomBehaviourContext: () => i.CustomBehaviourContext,
            presetDefault: () => o.presetDefault,
            presetPlatform: () => o.presetPlatform
        });
        var i = s(465201)
          , o = s(741083)
    }
    ,
    132734: (t, e, s) => {
        "use strict";
        s.d(e, {
            Icon: () => o
        });
        var i = s(50959);
        const o = i.forwardRef(( (t, e) => {
            const {icon: s="", title: o, ariaLabel: r, ariaLabelledby: n, ariaHidden: a, ...l} = t
              , h = !!(o || r || n);
            return i.createElement("span", {
                role: "img",
                ...l,
                ref: e,
                "aria-label": r,
                "aria-labelledby": n,
                "aria-hidden": a || !h,
                title: o,
                dangerouslySetInnerHTML: {
                    __html: s
                }
            })
        }
        ))
    }
    ,
    79205: (t, e, s) => {
        "use strict";
        s.d(e, {
            Icon: () => i.Icon
        });
        var i = s(132734)
    }
    ,
    685023: (t, e, s) => {
        "use strict";
        s.d(e, {
            DEFAULT_SIZE: () => i,
            spinnerSizeMap: () => o
        });
        const i = "large"
          , o = {
            mini: "xsmall",
            xxsmall: "xxsmall",
            xsmall: "xsmall",
            small: "small",
            medium: "medium",
            large: "large"
        }
    }
    ,
    551080: (t, e, s) => {
        "use strict";
        function i(t) {
            return e => {
                t.forEach((t => {
                    "function" == typeof t ? t(e) : null != t && (t.current = e)
                }
                ))
            }
        }
        function o(t) {
            return i([t])
        }
        s.d(e, {
            isomorphicRef: () => o,
            mergeRefs: () => i
        })
    }
    ,
    941285: (t, e, s) => {
        "use strict";
        s.r(e),
        s.d(e, {
            Spinner: () => n,
            renderSpinnerTemplate: () => r
        });
        s(140987);
        var i = s(760863)
          , o = s(685023);
        function r(t="") {
            return `<div class="tv-spinner ${t}" role="progressbar"></div>`
        }
        class n {
            constructor(t) {
                this._shown = !1,
                this._el = (0,
                i.parseHtmlElement)(r()),
                this.setSize(o.spinnerSizeMap[t || o.DEFAULT_SIZE])
            }
            spin(t) {
                return this._el.classList.add("tv-spinner--shown"),
                void 0 === this._container && (this._container = t,
                void 0 !== t && t.appendChild(this._el)),
                this._shown = !0,
                this
            }
            stop(t) {
                return t && void 0 !== this._container && this._container.removeChild(this._el),
                this._el && this._el.classList.remove("tv-spinner--shown"),
                this._shown = !1,
                this
            }
            setStyle(t) {
                return Object.keys(t).forEach((e => {
                    const s = t[e];
                    void 0 !== s && this._el.style.setProperty(e, s)
                }
                )),
                this
            }
            style() {
                return this._el.style
            }
            setSize(t) {
                const e = void 0 !== t ? `tv-spinner--size_${t}` : "";
                return this._el.className = `tv-spinner ${e} ${this._shown ? "tv-spinner--shown" : ""}`,
                this
            }
            getEl() {
                return this._el
            }
            destroy() {
                this.stop(),
                delete this._el,
                delete this._container
            }
        }
    }
    ,
    833813: (t, e, s) => {
        "use strict";
        var i;
        s.d(e, {
            ProductFeaturesEnum: () => i,
            UNLIMITED_FEATURE_LIMIT: () => o
        }),
        function(t) {
            t.CAN_EDIT_PUBLIC_CHATS = "CAN_EDIT_PUBLIC_CHATS",
            t.NO_SPONSORED_ADS = "NO_SPONSORED_ADS",
            t.ALERTS_NO_EXPIRATION = "ALERTS_NO_EXPIRATION",
            t.ALERTS_WEBHOOK = "ALERTS_WEBHOOK",
            t.SCREENER_AUTO_REFRESH = "SCREENER_AUTO_REFRESH",
            t.SCREENER_INTERVALS = "SCREENER_INTERVALS",
            t.SCREENER_EXPORT_DATA = "SCREENER_EXPORT_DATA",
            t.SOCIAL_ACTIVITY = "SOCIAL_ACTIVITY"
        }(i || (i = {}));
        const o = 99999
    }
    ,
    147582: (t, e, s) => {
        "use strict";
        s.d(e, {
            sparseUsersTrackingCoefficient: () => a
        });
        var i = s(49437);
        const o = "sparseUsersTrackingCoefficient"
          , r = (0,
        s(66974).isProd)() ? null : i.TVLocalStorage.getItem(o);
        let n = null !== r ? parseFloat(r) : null;
        null !== n && (!Number.isFinite(n) || n < 0 || n > 1) && (n = null,
        i.TVLocalStorage.removeItem(o));
        const a = n ?? .1
    }
    ,
    224743: (t, e, s) => {
        "use strict";
        s.d(e, {
            globalCloseDelegate: () => i,
            globalCloseMenu: () => o
        });
        const i = new (s(547465).Delegate);
        function o() {
            i.fire()
        }
    }
    ,
    68777: (t, e, s) => {
        "use strict";
        s.d(e, {
            accumulate: () => a,
            combine: () => n,
            combineWithFilteredUpdate: () => r
        });
        var i = s(820028);
        function o(t, e, ...s) {
            let o = null;
            const r = (...e) => t(...e.map((t => t.value())), o?.value())
              , n = o = new i.WatchedValue(r(...s))
              , a = () => {
                const t = s.map(( (t, e) => t.value()));
                e(...t) && n.setValue(r(...s))
            }
              , l = s.map((t => t.spawn()));
            for (const t of l)
                t.subscribe(a);
            return n.readonly().spawn(( () => {
                l.forEach((t => t.destroy())),
                s.forEach((t => t.release()))
            }
            ))
        }
        function r(t, e, ...s) {
            return o(t, e, ...s)
        }
        function n(t, ...e) {
            return o(t, ( () => !0), ...e)
        }
        function a(t, e, ...s) {
            let o = null;
            const r = n(( (...t) => (t.splice(-1),
            t)), ...s)
              , a = e.spawn()
              , l = (e, ...s) => {
                const i = e.map((t => t.value()));
                return t(i, ...s, o?.value())
            }
              , h = o = new i.WatchedValue(l(a.value(), ...r.value()));
            let c = [];
            const p = () => {
                h.setValue(l(c, ...r.value()))
            }
              , u = t => {
                c.forEach((t => t.destroy())),
                c = t.map((t => t.spawn())),
                c.forEach((t => t.subscribe(p))),
                p()
            }
            ;
            u(a.value()),
            a.subscribe(u),
            r.subscribe(p);
            return h.readonly().spawn(( () => {
                c.forEach((t => t.destroy())),
                a.destroy(),
                r.destroy(),
                e.release()
            }
            ))
        }
    }
    ,
    862150: (t, e, s) => {
        "use strict";
        function i(t) {
            const e = Object.create(t);
            return e.release = () => {}
            ,
            e.ownership = () => e,
            e
        }
        function o(t) {
            const e = t;
            return e.release = () => e.destroy(),
            e.ownership = () => e,
            e
        }
        s.d(e, {
            ownership: () => o,
            weakReference: () => i
        })
    }
    ,
    169707: (t, e, s) => {
        "use strict";
        s.d(e, {
            SidebarCustomScroll: () => p
        });
        var i = s(778785)
          , o = s(547465)
          , r = s(318557)
          , n = s(913950)
          , a = s(404573);
        const l = [ () => navigator.userAgent.includes("Win") && navigator.userAgent.includes("Chrome") ? 1 / window.devicePixelRatio : 1, () => 16, (t= () => 0) => .8 * (t() ?? 0)];
        s(506438);
        var h = s(54661);
        const c = {
            headerHeight: 0,
            additionalClass: "",
            alwaysVisible: !1,
            showBottomShadow: !0,
            scrollMarginTop: 1,
            bubbleScrollEvent: !1
        };
        class p {
            constructor(t, e, s={}) {
                if (this.scrolled = new o.Delegate,
                this.scrolltoend = new o.Delegate,
                this.scrolltostart = new o.Delegate,
                this.visibilityCallbacks = [],
                this._scrollTargetTop = 0,
                this._scrollSpeed = 40,
                this._shadowOffset = 10,
                this._shadowTop = null,
                this._shadowBottom = null,
                this._dragInitialized = !1,
                this._dragging = !1,
                this._draggable = null,
                this._atStart = !1,
                this._atEnd = !1,
                this._stickyBottom = null,
                this._animation = null,
                this._saved = null,
                this._options = {
                    ...c,
                    ...s
                },
                this._wrapper = t,
                this._wrapper.classList.add(h.wrapper),
                this._content = e,
                this._headerHeight = this._options.headerHeight,
                this._scrollMarginTop = this._options.scrollMarginTop,
                this._scrollBar = document.createElement("div"),
                this._scrollBar.classList.add("sb-scrollbar", "sb-scrollbar-body"),
                this._options.additionalClass && this._scrollBar.classList.add(this._options.additionalClass),
                this._scrollBar.classList.toggle("active-always", this._options.alwaysVisible),
                this._scrollBarWrapper = document.createElement("div"),
                this._scrollBarWrapper.classList.add("sb-scrollbar-wrap"),
                this._touch = i.touch,
                this._touch)
                    return this._content.style.position = "relative",
                    this._wrapper.classList.add(h.touch),
                    void this._wrapper.addEventListener("scroll", ( () => this._onScroll()));
                this._wrapper.style.overflow = "hidden",
                this._unsubscribe = ( () => {
                    const t = () => {
                        this._dragging || (this._options.alwaysVisible || this._scrollBar.classList.add("active"),
                        this._onScroll())
                    }
                      , e = () => {
                        this._dragging || (this._options.alwaysVisible || this._scrollBar.classList.remove("active"),
                        this._onScroll())
                    }
                      , s = t => {
                        const e = t.target instanceof HTMLElement ? t.target : null;
                        if ((!!!e?.closest(".ignore-horizontal-scroll") || t.deltaY) && !t.defaultPrevented) {
                            const e = function(t, e= () => ({})) {
                                return {
                                    x: t.deltaX * l[t.deltaMode](( () => e().width)),
                                    y: t.deltaY * l[t.deltaMode](( () => e().height))
                                }
                            }(t, ( () => ({
                                height: this._wrapper.clientHeight
                            }))).y;
                            this.scroll(-e, 1) || (t.stopPropagation(),
                            t.preventDefault())
                        }
                    }
                    ;
                    return this._wrapper.addEventListener("mouseenter", t),
                    this._wrapper.addEventListener("mouseleave", e),
                    this._wrapper.addEventListener("wheel", s),
                    () => {
                        this._wrapper.removeEventListener("mouseenter", t),
                        this._wrapper.removeEventListener("mouseleave", e),
                        this._wrapper.removeEventListener("wheel", s)
                    }
                }
                )(),
                !1 !== this._options.showTopShadow && (this._shadowTop = document.createElement("div"),
                this._shadowTop.classList.add("sb-inner-shadow", "top", "i-invisible"),
                this._wrapper.appendChild(this._shadowTop)),
                !1 !== this._options.showBottomShadow && (this._shadowBottom = document.createElement("div"),
                this._shadowBottom.classList.add("sb-inner-shadow"),
                this._wrapper.appendChild(this._shadowBottom)),
                this._shadowTop && this._headerHeight && (this._shadowTop.style.top = this._headerHeight - this._shadowOffset + "px"),
                this._wrapper.appendChild(this._scrollBarWrapper),
                this._scrollBarWrapper.appendChild(this._scrollBar),
                this._onScroll()
            }
            isTouch() {
                return this._touch
            }
            getScrollBar() {
                return this._scrollBar
            }
            initDraggable() {
                return this._dragInitialized || (this._draggable = new a.Draggable({
                    axis: "y",
                    source: this._scrollBar,
                    containment: this._scrollBarWrapper,
                    start: () => {
                        this._dragging = !0
                    }
                    ,
                    stop: () => {
                        this._dragging = !1
                    }
                    ,
                    drag: () => {
                        this.updateScroll()
                    }
                }),
                this._dragInitialized = !0),
                this
            }
            updateScroll() {
                if (this._touch)
                    return this;
                const t = Math.ceil((0,
                r.position)(this._scrollBar).top - this._scrollMarginTop - this._headerHeight)
                  , e = this.getContainerHeightWithoutHeader()
                  , s = (0,
                r.outerHeight)(this._content)
                  , i = s - e - 1;
                return e <= 0 || (this._scrollTargetTop = i <= 0 ? this._headerHeight : Math.min(-t * s / e + this._headerHeight, this._headerHeight),
                t + (0,
                r.contentHeight)(this._scrollBar) + 2 >= e ? this.scrollToEnd() : (this._content.style.top = this._scrollTargetTop + "px",
                this._onScroll())),
                this
            }
            getContainerHeightWithoutHeader() {
                return this._wrapper.getBoundingClientRect().height - this._headerHeight
            }
            getContainerHeight() {
                return this._wrapper.getBoundingClientRect().height
            }
            getContentHeight() {
                return this._content.getBoundingClientRect().height
            }
            updateScrollBar() {
                if (this._touch)
                    return this;
                const t = (0,
                r.position)(this._content).top
                  , e = this.getContentHeight()
                  , s = this.getContainerHeight()
                  , i = this.getContainerHeightWithoutHeader()
                  , o = 1 + this._headerHeight
                  , n = i - 2
                  , a = (Math.abs(t) - this._headerHeight) * n / e
                  , l = s * s / e;
                return this.isContentShort() ? (this._scrollBar.classList.add("js-hidden"),
                this._wrapper.classList.remove("sb-scroll-active")) : (this._scrollBar.classList.remove("js-hidden"),
                this._scrollBar.style.height = l + "px",
                this._scrollBar.style.top = o + a + "px",
                this._wrapper.classList.add("sb-scroll-active"),
                this.initDraggable()),
                this
            }
            scroll(t, e) {
                const s = (0,
                r.position)(this._content).top
                  , i = (0,
                r.outerHeight)(this._content) - this.getContainerHeightWithoutHeader() - 1
                  , o = e || this._scrollSpeed;
                return i <= 0 || (this._scrollTargetTop = Math.max(-i + this._headerHeight, Math.min(this._headerHeight, s + t * o)),
                this.setContentTop(this._scrollTargetTop),
                this._onScroll())
            }
            animateTo(t) {
                if (this._touch)
                    return this;
                const e = (0,
                r.outerHeight)(this._content) - this.getContainerHeightWithoutHeader() - 1;
                if (e <= 0)
                    return !0;
                this._scrollTargetTop = Math.max(-e + this._headerHeight, Math.min(this._headerHeight, -t)),
                this._animation && this._animation.stop(),
                this._animation = (0,
                n.doAnimate)({
                    duration: 500,
                    from: parseFloat(getComputedStyle(this._content).top),
                    to: this._scrollTargetTop,
                    onStep: (t, e) => {
                        this._content.style.top = e + "px"
                    }
                    ,
                    onComplete: () => {
                        this._onScroll()
                    }
                })
            }
            resize() {
                const t = (0,
                r.outerHeight)(this._content)
                  , e = (0,
                r.outerHeight)(this._wrapper);
                !this._options.vAlignBottom && t < e ? this.atStart() || this.scrollToStart() : this.atEnd() ? this.scrollToEnd() : "number" == typeof this._stickyBottom && this.setContentTop(Math.min(0, this._stickyBottom + (0,
                r.outerHeight)(this._wrapper) - (0,
                r.outerHeight)(this._content)))
            }
            resizeHeader(t) {
                const e = t - this._headerHeight;
                this._headerHeight = t,
                this._scrollTargetTop += e,
                this._shadowTop && (this._shadowTop.style.top = this._headerHeight - this._shadowOffset + "px"),
                this.resize()
            }
            scrollTo(t, e) {
                const s = {
                    position: "visible",
                    areaHeight: t instanceof HTMLElement ? (0,
                    r.contentHeight)(t) : 0,
                    ...e
                };
                t instanceof HTMLElement && (t = s.offsetTop || (0,
                r.position)(t).top);
                const i = (0,
                r.position)(this._content).top
                  , o = this._content.getBoundingClientRect().height
                  , n = this.getContainerHeightWithoutHeader();
                if (o - n - 1 <= 0)
                    return !0;
                const a = -1 * (i - this._headerHeight)
                  , l = a + n;
                let h = 0;
                if ("visible" === s.position) {
                    if (t > a && t + s.areaHeight < l)
                        return !1;
                    h = t + s.areaHeight > l ? l - t - s.areaHeight : a - t
                } else
                    "top" === s.position && (h = a - t);
                return this.scroll(h, 1),
                this._onScroll(),
                !1
            }
            scrollToEnd() {
                const t = (0,
                r.position)(this._content).top
                  , e = (0,
                r.outerHeight)(this._content)
                  , s = (0,
                r.outerHeight)(this._wrapper)
                  , i = e > s ? t + (s - (e + t)) + 1 : 1;
                return this.setContentTop(i),
                this._onScroll(),
                this
            }
            scrollToStart() {
                return this.setContentTop(this._headerHeight),
                this._onScroll(),
                this
            }
            currentPosition() {
                return Math.round((0,
                r.position)(this._content).top)
            }
            atStart() {
                return Math.round((0,
                r.position)(this._content).top) >= this._headerHeight
            }
            atEnd(t) {
                "number" == typeof t && isFinite(t) || (t = 0);
                const e = Math.round((0,
                r.position)(this._content).top)
                  , s = Math.floor((0,
                r.outerHeight)(this._content))
                  , i = Math.floor((0,
                r.outerHeight)(this._wrapper));
                return s - Math.abs(e) - 1 <= i + t
            }
            checkContentVisibility() {
                this._onContentVisible()
            }
            subscribeToContentVisible(t, e, s) {
                this.visibilityCallbacks.push({
                    id: t,
                    element: e,
                    callback: s
                })
            }
            triggerVisibilityCallbacks(t) {
                this._onContentVisible(t)
            }
            save() {
                return this._saved = {
                    top: (0,
                    r.position)(this._content).top,
                    height: (0,
                    r.outerHeight)(this._content)
                },
                this
            }
            restore() {
                if (this._saved) {
                    if (this._saved.top === (0,
                    r.position)(this._content).top && this._saved.height === (0,
                    r.outerHeight)(this._content))
                        return this._saved = null,
                        this;
                    this._options.vAlignBottom && (this._saved.top -= (0,
                    r.outerHeight)(this._content) - this._saved.height,
                    this._saved.top > this._headerHeight && (this._saved.top = this._headerHeight)),
                    this.setContentTop(this._saved.top),
                    this._saved = null,
                    this._onScroll(!0)
                }
                return this
            }
            setContentTop(t) {
                return this._touch ? this._options.vAlignBottom && (0,
                r.outerHeight)(this._content) < (0,
                r.outerHeight)(this._wrapper) ? (this._wrapper.style.overflowY = "visible",
                this._content.style.position = "absolute",
                this._content.style.bottom = "0px") : (this._content.style.position = "relative",
                this._content.style.position = "auto",
                this._wrapper.style.overflowY = "auto",
                this._wrapper.scrollTop = -t) : this._content.style.top = t + "px",
                this
            }
            isContentShort() {
                return this.getContentHeight() <= this.getContainerHeightWithoutHeader()
            }
            destroy() {
                this._animation && this._animation.stop(),
                this._scrollBarWrapper && this._scrollBarWrapper.remove(),
                this._shadowBottom && this._shadowBottom.remove(),
                this._shadowTop && this._shadowTop.remove(),
                this._draggable && (this._draggable.destroy(),
                this._draggable = null),
                this._content.style.cssText = "",
                this._wrapper.style.cssText = "",
                this._unsubscribe?.()
            }
            _onScroll(t) {
                this._touch || (this._content.style.bottom = "auto"),
                this.scrolled.fire(),
                this._dragging && !0 !== t || this.updateScrollBar();
                const e = this.atStart()
                  , s = this.atEnd();
                return this._shadowTop && this._shadowTop.classList.toggle("i-invisible", !!e),
                this._shadowBottom && this._shadowBottom.classList.toggle("i-invisible", !!s),
                this._onContentVisible(),
                !this._atStart && e ? (this._atStart = !0,
                this.scrolltostart.fire()) : this._atStart && !e && (this._atStart = !1),
                !this._atEnd && s ? (this._atEnd = !0,
                this.scrolltoend.fire()) : this._atEnd && !s && (this._atEnd = !1),
                this._options.vAlignBottom && (this._stickyBottom = (0,
                r.outerHeight)(this._content) - Math.abs((0,
                r.position)(this._content).top) - (0,
                r.outerHeight)(this._wrapper)),
                (this._atStart || this._atEnd) && ("function" == typeof this._options.bubbleScrollEvent ? Boolean(this._options.bubbleScrollEvent()) : Boolean(this._options.bubbleScrollEvent))
            }
            _contentIsVisible(t) {
                return (0,
                r.position)(t.element).top > -1 * this.currentPosition()
            }
            _onContentVisible(t) {
                if (!this.visibilityCallbacks.length)
                    return;
                const e = t || this._contentIsVisible.bind(this)
                  , s = []
                  , i = this.visibilityCallbacks.filter(( (t, i) => {
                    if (!this._content.contains(t.element))
                        return !1;
                    const o = e(t);
                    return o && s.push(i),
                    !o
                }
                ));
                s.forEach((e => {
                    this.visibilityCallbacks[e].callback(!!t)
                }
                )),
                this.visibilityCallbacks = i
            }
        }
    }
    ,
    781567: (t, e, s) => {
        "use strict";
        s.d(e, {
            createPrimitiveProperty: () => o
        });
        var i = s(905520);
        function o(t) {
            return new i.Property(t)
        }
    }
    ,
    421566: (t, e, s) => {
        "use strict";
        s.d(e, {
            PropertyBase: () => r
        });
        var i = s(650151)
          , o = s(547465);
        class r {
            constructor() {
                this._listeners = new o.Delegate,
                this._muteChildChanges = !1,
                this._owner = null,
                this._name = ""
            }
            nameInOwner() {
                return this._name
            }
            setNameInOwner(t) {
                this._name = t
            }
            owner() {
                return this._owner
            }
            setOwner(t) {
                this._owner = t
            }
            pathToRoot() {
                const t = this._owner?.pathToRoot();
                return t ? `${t}.${this._name}` : this._name
            }
            pathToRootProperty() {
                if (!this._owner)
                    return "";
                const t = this._owner.pathToRootProperty?.();
                return t ? `${t}.${this._name}` : this._name
            }
            removeProperty(t) {
                (0,
                i.assert)(!1, `Trying to call "removeProperty" on property ${this.pathToRoot()}`)
            }
            addChild(t, e) {
                (0,
                i.assert)(!1, `Trying to call "addChild" on property ${this.pathToRoot()}`)
            }
            hasChild(t) {
                return !1
            }
            childCount() {
                return 0
            }
            childNames() {
                return []
            }
            childs() {
                (0,
                i.assert)(!1, `Trying to call "childs" on property ${this.pathToRoot()}`)
            }
            state(t, e) {
                return this.value()
            }
            merge(t, e) {
                (0,
                i.assert)(!1, `Trying to call "merge" on property ${this.pathToRoot()}`)
            }
            mergeAndFire(t) {
                (0,
                i.assert)(!1, `Trying to call "mergeAndFire" on property ${this.pathToRoot()}`)
            }
            child(t) {
                if (this.hasChild(t))
                    return this.childs()[t]
            }
            muteChildChanges(t) {
                this._muteChildChanges = t
            }
            fireChanged() {
                this._listeners.fire(this, this.pathToRootProperty())
            }
            listeners() {
                return this._listeners
            }
            subscribe(t, e) {
                this.listeners().subscribe(t, e, !1)
            }
            unsubscribe(t, e) {
                this.listeners().unsubscribe(t, e)
            }
            unsubscribeAll(t) {
                this.listeners().unsubscribeAll(t)
            }
        }
    }
    ,
    690370: (t, e, s) => {
        "use strict";
        s.d(e, {
            DataTypes: () => i,
            createPropertySchema: () => d,
            dataType: () => c,
            extractStateWithSchema: () => _,
            isArraySchema: () => u,
            validateSchema: () => p
        });
        var i, o = s(569708), r = s(283873), n = s(683350), a = s(456052), l = s(182433), h = s(936714);
        function c(t) {
            return (0,
            o.default)(t) ? i.NUMBER : (0,
            r.default)(t) ? i.STRING : (0,
            n.default)(t) ? i.BOOLEAN : (0,
            a.default)(t) ? i.ARRAY : null === t ? i.UNKNOWN : "object" == typeof t ? i.OBJECT : i.UNKNOWN
        }
        function p(t, e) {
            const s = c(t);
            switch (e.type) {
            case i.ARRAY:
                return s === i.ARRAY && t.every((t => p(t, e.subschema)));
            case i.OBJECT:
                {
                    if (s !== i.OBJECT)
                        return !1;
                    const o = Object.entries(e.subschema);
                    for (const e of o)
                        if (!p(t[e[0]], e[1]))
                            return !1;
                    return !0
                }
            default:
                return s === e.type || e.type === i.UNKNOWN
            }
        }
        function u(t) {
            return t.type === i.ARRAY
        }
        function d(t, e) {
            let s;
            const o = c(t);
            switch (o) {
            case i.NUMBER:
            case i.STRING:
            case i.BOOLEAN:
                s = {
                    type: o,
                    saveFlags: e
                };
                break;
            case i.ARRAY:
                s = {
                    type: i.ARRAY,
                    saveFlags: e,
                    subschema: d(t[0], e)
                };
                break;
            case i.OBJECT:
                {
                    const o = {};
                    for (const [s,i] of Object.entries(t))
                        o[s] = d(i, e);
                    s = {
                        type: i.OBJECT,
                        saveFlags: e,
                        subschema: o
                    };
                    break
                }
            default:
                s = {
                    type: i.UNKNOWN,
                    saveFlags: e
                }
            }
            return s
        }
        function _(t, e, s) {
            if (!function(t) {
                return t.type === i.OBJECT
            }(e) || !(0,
            l.default)(t))
                return t;
            const o = Object.keys(t);
            for (const i of o) {
                const o = e.subschema[i];
                void 0 === e.saveFlags || o || (0,
                h.default)(t, i);
                const r = o?.saveFlags;
                void 0 === r || r & s || (0,
                h.default)(t, i),
                o && _(t[i], o, s)
            }
            return t
        }
        !function(t) {
            t.STRING = "string",
            t.NUMBER = "number",
            t.BOOLEAN = "boolean",
            t.OBJECT = "object",
            t.ARRAY = "array",
            t.UNKNOWN = "unknown"
        }(i || (i = {}))
    }
    ,
    582441: (t, e, s) => {
        "use strict";
        s.d(e, {
            createWVFromGetterAndSubscriptions: () => o
        });
        var i = s(820028);
        function o(t, e) {
            const s = new i.WatchedValue(t())
              , o = {};
            e.forEach((e => e.subscribe(o, ( () => {
                s.setValue(t())
            }
            ))));
            return s.readonly().spawn(( () => e.forEach((t => t.unsubscribeAll(o)))))
        }
    }
    ,
    870855: (t, e, s) => {
        "use strict";
        s.r(e),
        s.d(e, {
            SERIES_STATUS_TEXT: () => T,
            STATUS_CALCULATION_ERROR: () => g,
            STATUS_DELAYED: () => p,
            STATUS_DELAYED_STREAMING: () => u,
            STATUS_EOD: () => h,
            STATUS_ERROR: () => m,
            STATUS_INVALID_SYMBOL: () => a,
            STATUS_LOADING: () => r,
            STATUS_NO_BARS: () => d,
            STATUS_OFFLINE: () => i,
            STATUS_PULSE: () => c,
            STATUS_READY: () => n,
            STATUS_REPLAY: () => _,
            STATUS_RESOLVING: () => o,
            STATUS_SNAPSHOT: () => l,
            STATUS_UNSUPPORTED_RESOLUTION: () => v,
            STYLE_AREA: () => E,
            STYLE_BARS: () => y,
            STYLE_BASELINE: () => H,
            STYLE_CANDLES: () => w,
            STYLE_COLUMNS: () => U,
            STYLE_HEIKEN_ASHI: () => L,
            STYLE_HILO: () => I,
            STYLE_HLC_AREA: () => M,
            STYLE_HLC_BARS: () => V,
            STYLE_HOLLOW_CANDLES: () => N,
            STYLE_KAGI: () => x,
            STYLE_LINE: () => f,
            STYLE_LINE_WITH_MARKERS: () => O,
            STYLE_PB: () => R,
            STYLE_PNF: () => C,
            STYLE_RANGE: () => B,
            STYLE_RENKO: () => A,
            STYLE_SHORT_NAMES: () => k,
            STYLE_STEPLINE: () => P,
            SYMBOL_STRING_DATA: () => F,
            chartStylesWithAttachedStudies: () => D,
            seriesLoadingStatuses: () => S,
            seriesReadyStatuses: () => b
        });
        const i = 0
          , o = 1
          , r = 2
          , n = 3
          , a = 4
          , l = 5
          , h = 6
          , c = 7
          , p = 8
          , u = 9
          , d = 10
          , _ = 11
          , m = 12
          , g = 13
          , v = 14
          , b = new Set([3, 6, 7, 8, 9, 11])
          , S = new Set([1, 2])
          , T = {
            [i]: "connecting",
            [o]: "loading",
            [r]: "loading",
            [n]: "realtime",
            [a]: "invalid",
            [l]: "snapshot",
            [h]: "endofday",
            [c]: "endofday",
            [p]: "delayed",
            [u]: "delayed_streaming",
            [d]: "forbidden",
            [_]: "replay",
            [m]: "error",
            [g]: "calculation_error",
            [v]: "unsupported_resolution"
        }
          , y = 0
          , w = 1
          , f = 2
          , E = 3
          , A = 4
          , x = 5
          , C = 6
          , R = 7
          , L = 8
          , N = 9
          , H = 10
          , B = 11
          , I = 12
          , U = 13
          , O = 14
          , P = 15
          , M = 16
          , V = 21
          , k = {
            0: "bar",
            1: "candle",
            9: "hollowCandle",
            2: "line",
            14: "lineWithMarkers",
            15: "stepline",
            3: "area",
            16: "hlcArea",
            4: "renko",
            7: "pb",
            5: "kagi",
            6: "pnf",
            8: "ha",
            10: "baseline",
            11: "range",
            12: "hilo",
            13: "column",
            17: "volFootprint",
            18: "tpo",
            19: "volCandles",
            20: "svp",
            21: "hlcBars"
        }
          , F = {
            4: {
                type: "BarSetRenko@tv-prostudies",
                basicStudyVersion: 73
            },
            7: {
                type: "BarSetPriceBreak@tv-prostudies",
                basicStudyVersion: 34
            },
            5: {
                type: "BarSetKagi@tv-prostudies",
                basicStudyVersion: 73
            },
            6: {
                type: "BarSetPnF@tv-prostudies",
                basicStudyVersion: 73
            },
            8: {
                type: "BarSetHeikenAshi@tv-basicstudies",
                basicStudyVersion: 60
            },
            11: {
                type: "BarSetRange@tv-basicstudies",
                basicStudyVersion: 72
            },
            17: {
                type: "Footprint@tv-volumebyprice",
                basicStudyVersion: 104
            },
            18: {
                type: "TPOPeriodic@tv-volumebyprice",
                basicStudyVersion: 104
            },
            20: {
                type: "VbPSessions@tv-volumebyprice",
                basicStudyVersion: 126
            }
        }
          , D = [17, 18, 20]
    }
    ,
    242651: (t, e, s) => {
        "use strict";
        function i(t, e) {
            return o(t, e, e ? ["&amp;"] : ["&"])
        }
        function o(t, e, s) {
            const i = [["&", "&amp;"], ["<", "&lt;"], [">", "&gt;"], ['"', "&quot;"], ["'", "&#039;"], ["'", "&#39;"]];
            e && i.forEach((t => t.reverse()));
            let o = t;
            if (!t || !t.replace)
                return o;
            for (const t of i) {
                const [e,i] = t;
                s && -1 !== s.indexOf(e) || (o = o.replace(new RegExp(e,"g"), i))
            }
            return o
        }
        s.d(e, {
            clean: () => o,
            cleanButAmpersand: () => i
        })
    }
    ,
    913950: (t, e, s) => {
        "use strict";
        function i(t, e, s) {
            return t * (1 - s) + e * s
        }
        s.d(e, {
            doAnimate: () => n,
            lerp: () => i
        });
        const o = {
            from: 0,
            duration: 250,
            easing: s(335048).easingFunc.easeOutCubic
        };
        class r {
            constructor(t) {
                this._doing = !0,
                this._completed = !1,
                this._options = {
                    ...o,
                    ...t
                };
                const e = performance.now();
                window.requestAnimationFrame((t => {
                    this._animation(e, this._options.from, t)
                }
                ))
            }
            stop() {
                this._doing = !1
            }
            completed() {
                return this._completed
            }
            _animation(t, e, s) {
                if (!this._doing)
                    return void this._finishAnimation();
                const o = (s = !s || s < 1e12 ? performance.now() : s) - t
                  , r = o >= this._options.duration || e === this._options.to
                  , n = i(this._options.from, this._options.to, this._options.easing(o / this._options.duration))
                  , a = r ? this._options.to : n
                  , l = a - e;
                this._options.onStep(l, a),
                r ? this._finishAnimation() : window.requestAnimationFrame((e => {
                    this._animation(t, a, e)
                }
                ))
            }
            _finishAnimation() {
                this._options.onComplete && this._options.onComplete(),
                this._completed = !0
            }
        }
        function n(t) {
            return new r(t)
        }
    }
    ,
    335048: (t, e, s) => {
        "use strict";
        s.d(e, {
            CubicBezier: () => i.CubicBezier,
            color: () => i.color,
            dur: () => i.dur,
            easingFunc: () => i.easingFunc
        });
        var i = s(745269)
    }
    ,
    228931: (t, e, s) => {
        "use strict";
        s.r(e),
        s.d(e, {
            createNoticeDialog: () => o,
            showNoticeDialog: () => r
        });
        var i = s(444372);
        async function o(t) {
            return (await Promise.all([s.e(57335), s.e(38452), s.e(41392), s.e(66534), s.e(71761), s.e(11194), s.e(3016), s.e(67799), s.e(64935), s.e(25977), s.e(47793), s.e(30938), s.e(43385), s.e(34834)]).then(s.bind(s, 414929))).createDialog({
                width: 400,
                destroyOnClose: !0,
                title: i.t(null, void 0, s(620748)),
                content: i.t(null, void 0, s(653497)),
                contentWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--no-border"><div class="tv-text"><p></p></div></div>',
                actionsWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--actions tv-dialog__section--no-border">',
                actions: [{
                    name: "ok",
                    type: "primary",
                    text: i.t(null, void 0, s(819295)),
                    method: "close",
                    key: [13, 32]
                }],
                ...t
            })
        }
        function r(t) {
            o(t).then((t => t.open()))
        }
    }
    ,
    23203: (t, e, s) => {
        "use strict";
        s.d(e, {
            extractTabPath: () => b,
            getSymbolPagePath: () => h,
            makeSymbolChartUrl: () => v,
            makeSymbolPageUrl: () => g,
            makeTemplateSymbolUrl: () => _
        });
        var i = s(199583)
          , o = s(912465);
        if (/^(37525|45206|53934|88261)$/.test(s.j))
            var r = s(974629);
        var n = s(889267)
          , a = s(519073);
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
        function h(t, e) {
            const s = l(t);
            return u(d(s, e), p(s))
        }
        function c(t) {
            return (0,
            n.tokenize)(t).find((t => "symbol" === t.type))?.value
        }
        function p(t) {
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
        function u(t, e) {
            const s = encodeURIComponent(e.shortName || "")
              , i = encodeURIComponent(e.exchange || "")
              , o = encodeURIComponent(e.proName || "")
              , r = encodeURIComponent(e.root || "");
            return t.replace("{tvexchange}", i).replace("{tvsymbol}", s).replace("{tvprosymbol}", o).replace("{tvroot}", r)
        }
        function d(t, e="") {
            const s = p(t)
              , {type: i, typespecs: o, shortName: r, proName: n, exchange: l, root: h} = s;
            return void 0 === r && void 0 === n ? (console.warn("Params missed"),
            "/") : i || o ? "commodity" === i && o && o.includes("cfd") ? "/symbols/{tvsymbol}/?exchange={tvexchange}" : !h || !o || "futures" !== i || o.includes("continuous") && r?.endsWith("1!") || o.includes("exchange-continuous") ? l && ("forex" === i || o && (0,
            a.hasCryptoTypespec)(o)) ? "/symbols/{tvsymbol}/?exchange={tvexchange}" : l ? `/symbols/{tvexchange}-{tvsymbol}/${e}` : `/symbols/{tvsymbol}/${e}` : `/symbols/{tvexchange}-{tvroot}1!/${e}?contract={tvsymbol}` : l ? `/symbols/{tvexchange}-{tvsymbol}/${e}` : `/symbols/{tvsymbol}/${e}`
        }
        function _(t, e) {
            let s = t;
            if (!/{tvsymbol}|{tvexchange}|{tvprosymbol}/.test(t)) {
                let i = "tvprosymbol";
                void 0 === e.proName && (i = "tvsymbol"),
                s = `${t}?tvwidgetsymbol={${i}}`
            }
            const i = u(s, p(l(e)));
            if (!(0,
            r.isSafeUrl)(i))
                throw new Error(`The symbol URL ${i} is not allowed.`);
            return i
        }
        function m(t, e, s, r) {
            const n = (window.locale_domains ? (0,
            o.determineBaseUrl)(window.locale_domains, r) : window.location.origin) + u(t, p(l(e)));
            return s ? (0,
            i.addUtmToUrl)(n, s) : n
        }
        function g(t, e, s, i) {
            const o = l(t);
            return m(d(o, i), o, e, s)
        }
        function v(t, e) {
            return m("/chart/?symbol={tvprosymbol}", t, e)
        }
        function b(t, e) {
            const s = h({
                proName: t
            });
            return e.startsWith(s) ? e.replace(s.slice(0, s.length - 1), "") : null
        }
    }
    ,
    779893: (t, e, s) => {
        const i = s(647793);
        t.exports = i,
        i(document).ajaxSend(( (t, e, s) => {
            s.crossDomain && !s.forceLanguageHeader || (window.locale ? e.setRequestHeader("X-Language", window.locale) : console.warn("window.locale is not defined"))
        }
        ))
    }
    ,
    974629: (t, e, s) => {
        "use strict";
        function i(t) {
            const e = new URL(t,document.baseURI);
            return l(e) && a(e) && n(e)
        }
        function o(t) {
            const e = new URL(t,document.baseURI);
            return a(e) && n(e)
        }
        function r(t) {
            return !t.split(/(\s+)/).filter((t => t.trim().length > 0)).some((t => {
                try {
                    const e = new URL(t);
                    return !(!e || !e.hostname.length) && !o(t)
                } catch (t) {
                    return !1
                }
            }
            ))
        }
        s.d(e, {
            isInternalHost: () => h,
            isInternalUrl: () => i,
            isSafeUrl: () => o,
            isTvLink: () => c,
            validateUrlsInText: () => r
        });
        const n = t => !t.username
          , a = t => "http:" === t.protocol || "https:" === t.protocol
          , l = t => t.hostname === location.hostname || !/^\d+\.\d+\.\d+\.\d+$/.test(t.hostname) && h(t.hostname);
        function h(t, e=window.location.hostname) {
            const s = "." === e.slice(-1) ? 3 : 2
              , i = e.toLowerCase().split(".").slice(-s)
              , o = t.toLowerCase().split(".").slice(-i.length);
            return i.join(".") === o.join(".")
        }
        function c(t) {
            try {
                return t.startsWith("/") || h(new URL(t).hostname, "tradingview.com")
            } catch {
                return !1
            }
        }
    }
    ,
    546014: (t, e, s) => {
        "use strict";
        function i(t) {
            let e, s;
            return t.includes(":") ? (s = t.split(":")[1],
            e = t) : s = t,
            {
                proName: e,
                shortName: s
            }
        }
        s.d(e, {
            getShortNameAndProName: () => i
        })
    }
    ,
    372665: t => {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="M10.893 9.512l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>'
    }
}]);
