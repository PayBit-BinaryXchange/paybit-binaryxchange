(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[62526], {
    241427: t => {
        t.exports = {
            dialog: "dialog-aRAWUDhF",
            rounded: "rounded-aRAWUDhF",
            shadowed: "shadowed-aRAWUDhF",
            fullscreen: "fullscreen-aRAWUDhF",
            darker: "darker-aRAWUDhF",
            backdrop: "backdrop-aRAWUDhF"
        }
    }
    ,
    947156: t => {
        t.exports = {
            "tablet-normal-breakpoint": "(max-width: 768px)",
            "tooltip-offset": "20px",
            dialog: "dialog-qyCw0PaN",
            dragging: "dragging-qyCw0PaN",
            mobile: "mobile-qyCw0PaN",
            fullscreen: "fullscreen-qyCw0PaN",
            dialogAnimatedAppearance: "dialogAnimatedAppearance-qyCw0PaN",
            dialogAnimation: "dialogAnimation-qyCw0PaN",
            dialogTooltip: "dialogTooltip-qyCw0PaN"
        }
    }
    ,
    600234: (t, e, i) => {
        "use strict";
        i.d(e, {
            Dialog: () => d
        });
        var s = i(50959)
          , o = i(497754)
          , n = i.n(o)
          , a = i(692822)
          , r = i(351290)
          , l = i(8626)
          , h = i(241427)
          , c = i.n(h);
        class d extends s.PureComponent {
            constructor() {
                super(...arguments),
                this._manager = new r.OverlapManager,
                this._handleSlot = t => {
                    this._manager.setContainer(t)
                }
            }
            render() {
                const {rounded: t=!0, shadowed: e=!0, fullscreen: i=!1, darker: o=!1, className: r, backdrop: h, containerTabIndex: d=-1} = this.props
                  , u = n()(r, c().dialog, t && c().rounded, e && c().shadowed, i && c().fullscreen, o && c().darker)
                  , p = (0,
                l.filterDataProps)(this.props)
                  , g = this.props.style ? {
                    ...this._createStyles(),
                    ...this.props.style
                } : this._createStyles();
                return s.createElement(s.Fragment, null, s.createElement(a.SlotContext.Provider, {
                    value: this._manager
                }, h && s.createElement("div", {
                    onClick: this.props.onClickBackdrop,
                    className: c().backdrop
                }), s.createElement("div", {
                    ...p,
                    className: u,
                    style: g,
                    ref: this.props.reference,
                    onFocus: this.props.onFocus,
                    onMouseDown: this.props.onMouseDown,
                    onMouseUp: this.props.onMouseUp,
                    onClick: this.props.onClick,
                    onKeyDown: this.props.onKeyDown,
                    tabIndex: d,
                    "aria-label": this.props.containerAriaLabel
                }, this.props.children)), s.createElement(a.Slot, {
                    reference: this._handleSlot
                }))
            }
            _createStyles() {
                const {bottom: t, left: e, width: i, right: s, top: o, zIndex: n, height: a} = this.props;
                return {
                    bottom: t,
                    left: e,
                    right: s,
                    top: o,
                    zIndex: n,
                    maxWidth: i,
                    height: a
                }
            }
        }
    }
    ,
    488653: (t, e, i) => {
        "use strict";
        i.d(e, {
            DragHandler: () => o
        });
        var s = i(686668);
        class o {
            constructor(t, e, i={
                boundByScreen: !0
            }) {
                this._drag = null,
                this._canBeTouchClick = !1,
                this._frame = null,
                this._onMouseDragStart = t => {
                    if (0 !== t.button || this._isTargetNoDraggable(t))
                        return;
                    t.preventDefault(),
                    document.addEventListener("mousemove", this._onMouseDragMove),
                    document.addEventListener("mouseup", this._onMouseDragEnd);
                    const e = (0,
                    s.clampPosition)((0,
                    s.positionFromMouseEvent)(t));
                    this._dragStart(e)
                }
                ,
                this._onTouchDragStart = t => {
                    if (this._isTargetNoDraggable(t))
                        return;
                    this._canBeTouchClick = !0,
                    t.preventDefault(),
                    this._header.addEventListener("touchmove", this._onTouchDragMove, {
                        passive: !1
                    });
                    const e = (0,
                    s.clampPosition)((0,
                    s.positionFromTouchEvent)(t));
                    this._dragStart(e)
                }
                ,
                this._onMouseDragEnd = t => {
                    t.target instanceof Node && this._header.contains(t.target) && t.preventDefault(),
                    document.removeEventListener("mousemove", this._onMouseDragMove),
                    document.removeEventListener("mouseup", this._onMouseDragEnd),
                    this._onDragStop()
                }
                ,
                this._onTouchDragEnd = t => {
                    this._header.removeEventListener("touchmove", this._onTouchDragMove),
                    this._onDragStop(),
                    this._canBeTouchClick && (this._canBeTouchClick = !1,
                    (0,
                    s.simulateClick)(t.target))
                }
                ,
                this._onMouseDragMove = t => {
                    const e = (0,
                    s.clampPosition)((0,
                    s.positionFromMouseEvent)(t));
                    this._dragMove(e)
                }
                ,
                this._onTouchDragMove = t => {
                    this._canBeTouchClick = !1,
                    t.preventDefault();
                    const e = (0,
                    s.clampPosition)((0,
                    s.positionFromTouchEvent)(t));
                    this._dragMove(e)
                }
                ,
                this._onDragStop = () => {
                    this._drag = null,
                    this._header.classList.remove("dragging"),
                    this._options.onDragEnd && this._options.onDragEnd()
                }
                ,
                this._dialog = t,
                this._header = e,
                this._options = i,
                this._header.addEventListener("mousedown", this._onMouseDragStart),
                this._header.addEventListener("touchstart", this._onTouchDragStart),
                this._header.addEventListener("touchend", this._onTouchDragEnd)
            }
            destroy() {
                null !== this._frame && cancelAnimationFrame(this._frame),
                this._header.removeEventListener("mousedown", this._onMouseDragStart),
                document.removeEventListener("mouseup", this._onMouseDragEnd),
                this._header.removeEventListener("touchstart", this._onTouchDragStart),
                this._header.removeEventListener("touchend", this._onTouchDragEnd),
                document.removeEventListener("mouseleave", this._onMouseDragEnd)
            }
            updateOptions(t) {
                this._options = t
            }
            _dragStart(t) {
                const e = this._dialog.getBoundingClientRect();
                this._drag = {
                    startX: t.x,
                    startY: t.y,
                    finishX: t.x,
                    finishY: t.y,
                    dialogX: e.left,
                    dialogY: e.top
                };
                const i = Math.round(e.left)
                  , s = Math.round(e.top);
                this._dialog.style.transform = `translate(${i}px, ${s}px)`,
                this._header.classList.add("dragging"),
                this._options.onDragStart && this._options.onDragStart()
            }
            _dragMove(t) {
                if (this._drag) {
                    if (this._drag.finishX = t.x,
                    this._drag.finishY = t.y,
                    null !== this._frame)
                        return;
                    this._frame = requestAnimationFrame(( () => {
                        if (this._drag) {
                            const e = t.x - this._drag.startX
                              , i = t.y - this._drag.startY;
                            this._moveDialog(this._drag.dialogX + e, this._drag.dialogY + i)
                        }
                        this._frame = null
                    }
                    ))
                }
            }
            _moveDialog(t, e) {
                const i = this._dialog.getBoundingClientRect()
                  , {boundByScreen: o} = this._options
                  , n = (0,
                s.clampSegment)(t, i.width, o ? 0 : -1 / 0, o ? window.innerWidth : 1 / 0)
                  , a = (0,
                s.clampSegment)(e, i.height, o ? 0 : -1 / 0, o ? window.innerHeight : 1 / 0);
                this._dialog.style.transform = `translate(${Math.round(n)}px, ${Math.round(a)}px)`
            }
            _isTargetNoDraggable(t) {
                return t.target instanceof Element && null !== t.target.closest("[data-disable-drag]")
            }
        }
    }
    ,
    8629: (t, e, i) => {
        "use strict";
        i.d(e, {
            PopupContext: () => s
        });
        const s = i(50959).createContext(null)
    }
    ,
    62526: (t, e, i) => {
        "use strict";
        i.d(e, {
            PopupDialog: () => b
        });
        var s = i(50959)
          , o = i(497754)
          , n = i(650151)
          , a = i(600234)
          , r = i(368337)
          , l = i(58407)
          , h = i(488653)
          , c = i(686668);
        const d = {
            vertical: 0
        };
        class u {
            constructor(t, e) {
                this._frame = null,
                this._isFullscreen = !1,
                this._handleResize = () => {
                    null === this._frame && (this._frame = requestAnimationFrame(( () => {
                        this.recalculateBounds(),
                        this._frame = null
                    }
                    )))
                }
                ,
                this._dialog = t,
                this._guard = e.guard || d,
                this._calculateDialogPosition = e.calculateDialogPosition,
                this._initialHeight = t.style.height,
                window.addEventListener("resize", this._handleResize)
            }
            updateOptions(t) {
                this._guard = t.guard || d,
                this._calculateDialogPosition = t.calculateDialogPosition
            }
            setFullscreen(t) {
                this._isFullscreen !== t && (this._isFullscreen = t,
                this.recalculateBounds())
            }
            centerAndFit() {
                const {x: t, y: e} = this.getDialogsTopLeftCoordinates()
                  , i = this._calcAvailableHeight()
                  , s = this._calcDialogHeight();
                if (i === s)
                    if (this._calculateDialogPosition) {
                        const {left: t, top: e} = this._calculateDialogPosition(this._dialog, document.documentElement, this._guard);
                        this._dialog.style.transform = `translate(${Math.round(t)}px, ${Math.round(e)}px)`
                    } else
                        this._dialog.style.height = s + "px";
                this._dialog.style.top = "0px",
                this._dialog.style.left = "0px",
                this._dialog.style.transform = `translate(${t}px, ${e}px)`
            }
            getDialogsTopLeftCoordinates() {
                const {clientWidth: t, clientHeight: e} = this._getClientDimensions()
                  , i = this._calcDialogHeight()
                  , s = t / 2 - this._dialog.clientWidth / 2
                  , o = e / 2 - i / 2 + this._getTopOffset();
                return {
                    x: Math.round(s),
                    y: Math.round(o)
                }
            }
            recalculateBounds() {
                const {clientWidth: t, clientHeight: e} = this._getClientDimensions()
                  , {vertical: i} = this._guard
                  , s = this._calculateDialogPosition?.(this._dialog, {
                    clientWidth: t,
                    clientHeight: e
                }, {
                    vertical: i
                });
                if (this._isFullscreen) {
                    if (this._dialog.style.top = "0px",
                    this._dialog.style.left = "0px",
                    this._dialog.style.width = "100%",
                    this._dialog.style.height = "100%",
                    this._dialog.style.transform = "none",
                    s) {
                        const {left: t, top: e, width: i, height: o} = s;
                        this._dialog.style.transform = `translate(${Math.round(t)}px, ${Math.round(e)}px)`,
                        i && (this._dialog.style.width = `${i}px`,
                        this._dialog.style.minWidth = "unset"),
                        o && (this._dialog.style.height = `${o}px`,
                        this._dialog.style.minHeight = "unset")
                    }
                } else if (s) {
                    const {left: t, top: e} = s;
                    this._dialog.style.transform = `translate(${Math.round(t)}px, ${Math.round(e)}px)`
                } else {
                    this._dialog.style.width = "",
                    this._dialog.style.height = "";
                    const s = this._dialog.getBoundingClientRect()
                      , o = e - 2 * i
                      , n = (0,
                    c.clampSegment)(s.left, s.width, 0, t)
                      , a = (0,
                    c.clampSegment)(s.top, s.height, i, e);
                    this._dialog.style.top = "0px",
                    this._dialog.style.left = "0px",
                    this._dialog.style.transform = `translate(${Math.round(n)}px, ${Math.round(a)}px)`,
                    this._dialog.style.height = o < s.height ? o + "px" : this._initialHeight
                }
            }
            destroy() {
                window.removeEventListener("resize", this._handleResize),
                null !== this._frame && (cancelAnimationFrame(this._frame),
                this._frame = null)
            }
            _getClientDimensions() {
                return {
                    clientHeight: document.documentElement.clientHeight,
                    clientWidth: document.documentElement.clientWidth
                }
            }
            _getTopOffset() {
                return 0
            }
            _calcDialogHeight() {
                const t = this._calcAvailableHeight();
                return t < this._dialog.clientHeight ? t : this._dialog.clientHeight
            }
            _calcAvailableHeight() {
                return this._getClientDimensions().clientHeight - 2 * this._guard.vertical
            }
        }
        var p = i(707533)
          , g = i(8629)
          , _ = i(575658)
          , m = i(113658)
          , f = i(314802)
          , v = i(991336)
          , D = i(931924);
        var y = i(12173)
          , E = i(89317)
          , x = i(947156);
        const T = x["tooltip-offset"]
          , S = D.enabled("embed_resizer_overrides") ? class extends u {
            constructor(t, e) {
                super(t, e),
                this._enabled = D.enabled("embed_resizer_overrides")
            }
            _getClientDimensions() {
                const t = super._getClientDimensions();
                if (this._enabled) {
                    const e = v.EmbedViewportDimensionsProvider.getInstance().data();
                    e && (t.clientHeight = e.height)
                }
                return t
            }
            _getTopOffset() {
                if (this._enabled) {
                    const t = v.EmbedViewportDimensionsProvider.getInstance().data();
                    if (t)
                        return t.top
                }
                return super._getTopOffset()
            }
        }
        : u;
        class F extends s.PureComponent {
            constructor(t) {
                super(t),
                this._dialog = null,
                this._cleanUpFunctions = [],
                this._prevActiveElement = null,
                this._eventDispatcher = new m.DialogEventDispatcher,
                this._handleDialogRef = t => {
                    const {reference: e} = this.props;
                    this._dialog = t,
                    "function" == typeof e ? e(t) : null != e && (e.current = t)
                }
                ,
                this._handleFocus = () => {
                    this._moveToTop()
                }
                ,
                this._handleMouseDown = t => {
                    this._moveToTop()
                }
                ,
                this._handleTouchStart = t => {
                    this._moveToTop()
                }
                ,
                this.state = {
                    canFitTooltip: !1
                },
                this._prevActiveElement = document.activeElement
            }
            render() {
                return s.createElement(g.PopupContext.Provider, {
                    value: this
                }, s.createElement(l.OutsideEvent, {
                    mouseDown: !0,
                    touchStart: !0,
                    handler: this.props.onClickOutside
                }, (t => s.createElement("div", {
                    ref: t,
                    "data-outside-boundary-for": this.props.name,
                    onFocus: this._handleFocus,
                    onMouseDown: this._handleMouseDown,
                    onTouchStart: this._handleTouchStart,
                    "data-dialog-name": this.props["data-dialog-name"],
                    "data-tooltip-show-on-focus": "true",
                    "data-qa-id": (0,
                    E.dataQaIds)("ui-lib-PopupDialog", this.props.dataQaId)
                }, s.createElement(a.Dialog, {
                    style: this._applyAnimationCSSVariables(),
                    ...this.props,
                    reference: this._handleDialogRef,
                    className: o(x.dialog, (0,
                    f.isOnMobileAppPage)("any") && !this.props.noMobileAppShadows && x.mobile, this.props.fullscreen && x.fullscreen, this.props.className)
                }, this.props.dialogTooltip && this.state.canFitTooltip && s.createElement(y.TooltipWidget, {
                    className: x.dialogTooltip
                }, this.props.dialogTooltip), this.props.children)))))
            }
            componentDidMount() {
                const {draggable: t, boundByScreen: e, onDragStart: i} = this.props
                  , s = (0,
                n.ensureNotNull)(this._dialog);
                if (this._eventDispatcher.dispatch("dialog-open"),
                t) {
                    const t = s.querySelector("[data-dragg-area]");
                    if (t && t instanceof HTMLElement) {
                        const o = new h.DragHandler(s,t,{
                            boundByScreen: Boolean(e),
                            onDragStart: i
                        });
                        this._cleanUpFunctions.push(( () => o.destroy())),
                        this._drag = o
                    }
                }
                this.props.autofocus && !s.contains(document.activeElement) && s.focus(),
                (this._isFullScreen() || this.props.fixedBody) && (0,
                _.setFixedBodyState)(!0);
                const {guard: o, calculateDialogPosition: a} = this.props;
                if (this.props.resizeHandler)
                    this._resize = this.props.resizeHandler;
                else {
                    const t = new S(s,{
                        guard: o,
                        calculateDialogPosition: a
                    });
                    this._cleanUpFunctions.push(( () => t.destroy())),
                    this._resize = t
                }
                if (this._isFullScreen() && this._eventDispatcher.dispatch("dialog-fullscreen-on"),
                this.props.isAnimationEnabled && this.props.growPoint && this._applyAppearanceAnimation(this.props.growPoint),
                this.props.centeredOnMount && this._resize.centerAndFit(),
                this._resize.setFullscreen(this._isFullScreen()),
                this.props.dialogTooltip && this._handleTooltipFit(),
                this.props.shouldForceFocus) {
                    if (this.props.onForceFocus)
                        return void this.props.onForceFocus(s);
                    s.focus()
                }
                if (!s.contains(document.activeElement)) {
                    const t = (0,
                    c.findDefaultFocusableElement)(s);
                    t instanceof HTMLElement && t.focus()
                }
            }
            componentDidUpdate(t) {
                const e = t.fullscreen;
                if (this._resize) {
                    const {guard: t, calculateDialogPosition: e} = this.props;
                    this._resize.updateOptions({
                        guard: t,
                        calculateDialogPosition: e
                    }),
                    this._resize.setFullscreen(this._isFullScreen())
                }
                if (this._drag && this._drag.updateOptions({
                    boundByScreen: Boolean(this.props.boundByScreen),
                    onDragStart: this.props.onDragStart
                }),
                t.fullscreen !== this.props.fullscreen) {
                    const t = this.props.fullscreen;
                    t && !e ? this._eventDispatcher.dispatch("dialog-fullscreen-on") : !t && e && this._eventDispatcher.dispatch("dialog-fullscreen-off")
                }
            }
            componentWillUnmount() {
                if (this.props.shouldReturnFocus && this._prevActiveElement && document.body.contains(this._prevActiveElement) && (null === document.activeElement || document.activeElement === document.body || this._dialog?.contains(document.activeElement)))
                    try {
                        setTimeout(( () => {
                            this._prevActiveElement.focus({
                                preventScroll: !0
                            })
                        }
                        ))
                    } catch {}
                for (const t of this._cleanUpFunctions)
                    t();
                (this._isFullScreen() || this.props.fixedBody) && (0,
                _.setFixedBodyState)(!1),
                this._isFullScreen() && this._eventDispatcher.dispatch("dialog-fullscreen-off"),
                this._eventDispatcher.dispatch("dialog-close")
            }
            focus() {
                this._dialog && this._dialog.focus()
            }
            centerAndFit() {
                this._resize && this._resize.centerAndFit()
            }
            recalculateBounds() {
                this._resize && this._resize.recalculateBounds()
            }
            _moveToTop() {
                this.props.isZIndexFixed || null !== this.context && this.context.moveToTop()
            }
            _applyAnimationCSSVariables() {
                return {
                    "--animationTranslateStartX": null,
                    "--animationTranslateStartY": null,
                    "--animationTranslateEndX": null,
                    "--animationTranslateEndY": null
                }
            }
            _applyAppearanceAnimation(t) {
                if (this._resize && this._dialog) {
                    const {x: e, y: i} = t
                      , {x: s, y: o} = this._resize.getDialogsTopLeftCoordinates();
                    this._dialog.style.setProperty("--animationTranslateStartX", `${e}px`),
                    this._dialog.style.setProperty("--animationTranslateStartY", `${i}px`),
                    this._dialog.style.setProperty("--animationTranslateEndX", `${s}px`),
                    this._dialog.style.setProperty("--animationTranslateEndY", `${o}px`),
                    this._dialog.classList.add(x.dialogAnimatedAppearance)
                }
            }
            _handleTooltipFit() {
                if (this._resize) {
                    const t = this._resize.getDialogsTopLeftCoordinates().y - parseInt(T) >= 0;
                    this.setState({
                        canFitTooltip: t
                    })
                }
            }
            _isFullScreen() {
                return Boolean(this.props.fullscreen)
            }
        }
        F.contextType = p.PortalContext,
        F.defaultProps = {
            boundByScreen: !0,
            draggable: !0,
            centeredOnMount: !0,
            shouldReturnFocus: !0
        };
        const b = (0,
        r.makeOverlapable)(F, !0)
    }
    ,
    686668: (t, e, i) => {
        "use strict";
        i.d(e, {
            clampPosition: () => a,
            clampSegment: () => n,
            findDefaultFocusableElement: () => c,
            positionFromMouseEvent: () => l,
            positionFromTouchEvent: () => h,
            simulateClick: () => r
        });
        var s = i(462140)
          , o = i(355734);
        function n(t, e, i, s) {
            return t + e > s && (t = s - e),
            t < i && (t = i),
            t
        }
        function a(t) {
            return {
                x: (0,
                s.clamp)(t.x, 20, document.documentElement.clientWidth - 20),
                y: (0,
                s.clamp)(t.y, 20, window.innerHeight - 20)
            }
        }
        function r(t) {
            if (t instanceof SVGElement) {
                const e = document.createEvent("SVGEvents");
                e.initEvent("click", !0, !0),
                t.dispatchEvent(e)
            }
            t instanceof HTMLElement && t.click()
        }
        function l(t) {
            return {
                x: t.clientX,
                y: t.clientY
            }
        }
        function h(t) {
            return {
                x: t.touches[0].clientX,
                y: t.touches[0].clientY
            }
        }
        function c(t) {
            const e = t.querySelector("[autofocus]:not([disabled])");
            if (e)
                return e;
            if (t.tabIndex >= 0)
                return t;
            const i = (0,
            o.getActiveElementSelectors)()
              , s = Array.from(t.querySelectorAll(i)).filter((0,
            o.createScopedVisibleElementFilter)(t));
            let n = Number.NEGATIVE_INFINITY
              , a = null;
            for (let t = 0; t < s.length; t++) {
                const e = s[t]
                  , i = e.getAttribute("tabindex");
                if (null !== i) {
                    const t = parseInt(i, 10);
                    !isNaN(t) && t > n && (n = t,
                    a = e)
                }
            }
            return a
        }
    }
}]);

