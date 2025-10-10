(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[53617], {
    429341: e => {
        e.exports = {}
    }
    ,
    536794: (e, t, n) => {
        "use strict";
        function i(e) {
            return "number" == typeof e && isFinite(e)
        }
        function s(e) {
            if (!e || "object" != typeof e)
                return e;
            let t;
            t = Array.isArray(e) ? [] : {};
            for (const n in e)
                if (e.hasOwnProperty(n)) {
                    const i = e[n];
                    t[n] = i && "object" == typeof i ? s(i) : i
                }
            return t
        }
        function o(e, t) {
            for (const n in t)
                null !== t[n] && "object" == typeof t[n] && e.hasOwnProperty(n) ? o(e[n], t[n]) : e[n] = t[n];
            return e
        }
        function r(e) {
            return "object" == typeof e && null !== e
        }
        function a(e) {
            return null != e && (e.constructor === Function || "[object Function]" === Object.prototype.toString.call(e))
        }
        function u(e, t, n="") {
            if (e === t)
                return [!0, n];
            if (a(e) && (e = void 0),
            a(t) && (t = void 0),
            null == e || null == t)
                return [e === t, n];
            if ("object" != typeof e && "object" != typeof t)
                return [e === t, n];
            if (Array.isArray(e) && Array.isArray(t)) {
                const i = e.length;
                if (i !== t.length)
                    return [!1, n];
                for (let s = 0; s < i; s++) {
                    const i = u(e[s], t[s], n + "[" + s + "]");
                    if (!i[0])
                        return i
                }
                return [!0, n]
            }
            if (Array.isArray(e) || Array.isArray(t))
                return [!1, n];
            if (Object.keys(e).length !== Object.keys(t).length)
                return [!1, n];
            for (const i in e) {
                const s = u(e[i], t[i], n + "[" + i + "]");
                if (!s[0])
                    return s
            }
            return [!0, n]
        }
        n.r(t),
        n.d(t, {
            clone: () => s,
            declareClassAsPureInterface: () => b,
            deepEquals: () => u,
            inherit: () => g,
            isAbsent: () => h,
            isArray: () => l,
            isExistent: () => m,
            isFunction: () => a,
            isHashObject: () => c,
            isInteger: () => f,
            isNaN: () => d,
            isNumber: () => i,
            isObject: () => r,
            isPromise: () => v,
            isSameType: () => p,
            isString: () => _,
            merge: () => o,
            notNull: () => M,
            notUndefined: () => w,
            requireFullInterfaceImplementation: () => y
        });
        const l = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        ;
        function c(e) {
            return r(e) && -1 !== e.constructor.toString().indexOf("function Object")
        }
        function d(e) {
            return !(e <= 0 || e > 0)
        }
        function h(e) {
            return null == e
        }
        function m(e) {
            return null != e
        }
        function p(e, t) {
            return Number.isNaN(e) || Number.isNaN(t) ? Number.isNaN(e) === Number.isNaN(t) : {}.toString.call(e) === {}.toString.call(t)
        }
        function f(e) {
            return "number" == typeof e && e % 1 == 0
        }
        function _(e) {
            return null != e && e.constructor === String
        }
        function v(e) {
            return r(e) && "then"in e && a(e.then)
        }
        function g(e, t) {
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        }
        function b(e, t) {
            for (const n in e.prototype)
                "function" == typeof e.prototype[n] && e.prototype.hasOwnProperty(n) && (e.prototype[n] = function() {
                    throw new Error(t + "::" + n + " is an interface member declaration and must be overloaded in order to be called")
                }
                )
        }
        function y(e, t, n, i) {
            for (const s in n.prototype)
                if ("function" == typeof n.prototype[s] && !e.prototype[s])
                    throw new Error("Interface implementation assertion failed: " + t + " does not implement " + i + "::" + s + " function")
        }
        function M(e) {
            return null !== e
        }
        function w(e) {
            return void 0 !== e
        }
        Number.isNaN = Number.isNaN || function(e) {
            return e != e
        }
    }
    ,
    129592: (e, t, n) => {
        "use strict";
        n.d(t, {
            createGroup: () => u,
            keyboardPressedKeysState: () => a,
            pressedKeys: () => r,
            registerWindow: () => l
        });
        var i = n(163586)
          , s = n(764250);
        n(591800);
        const o = new i.ActionManager
          , r = o.pressedKeys()
          , a = o.keyboardPressedKeysState();
        function u(e) {
            return new s.ActionGroup(o,e)
        }
        function l(e) {
            o.listen(e)
        }
    }
    ,
    591800: (e, t, n) => {
        "use strict";
        n.d(t, {
            Modifiers: () => o,
            hashFromEvent: () => a,
            hotkeyHashToAriaKeyshortcuts: () => m,
            humanReadableHash: () => d,
            humanReadableModifiers: () => u,
            isMacKeyboard: () => s,
            modifiersFromEvent: () => r
        });
        var i = n(23482);
        const s = i.isMac || i.isIOS;
        var o;
        function r(e) {
            let t = 0;
            return e.shiftKey && (t += 1024),
            e.altKey && (t += 512),
            e.ctrlKey && (t += 256),
            e.metaKey && (t += 2048),
            t
        }
        function a(e) {
            return r(e) | e.keyCode
        }
        !function(e) {
            e[e.None = 0] = "None",
            e[e.Alt = 512] = "Alt",
            e[e.Shift = 1024] = "Shift",
            e[e.Mod = s ? 2048 : 256] = "Mod",
            e[e.Control = 256] = "Control",
            e[e.Meta = 2048] = "Meta"
        }(o || (o = {}));
        function u(e, t=!s) {
            let n = "";
            return 256 & e && (n += h(s ? "^" : "Ctrl", t)),
            512 & e && (n += h(s ? "⌥" : "Alt", t)),
            1024 & e && (n += h(s ? "⇧" : "Shift", t)),
            2048 & e && (n += h(s ? "⌘" : "Win", t)),
            n
        }
        const l = {
            9: "⇥",
            13: "↵",
            27: "Esc",
            8: s ? "⌫" : "Backspace",
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
        for (let e = 1; e <= 16; e++)
            l[e + 111] = `F${e}`,
            c[e + 111] = `F${e}`;
        function d(e) {
            let t = u(e);
            const n = 255 & e;
            return t += n in l ? l[n] : String.fromCharCode(n),
            t
        }
        function h(e, t) {
            return `${e}${t ? " + " : s ? " " : ""}`
        }
        function m(e) {
            const t = [];
            256 & e && t.push("Ctrl"),
            512 & e && t.push("Alt"),
            1024 & e && t.push("Shift"),
            2048 & e && t.push("Meta");
            const n = 255 & e;
            return n in l ? t.push(l[n]) : t.push(String.fromCharCode(n)),
            t.join("+")
        }
    }
    ,
    607423: (e, t, n) => {
        "use strict";
        n.d(t, {
            isNativeUIInteraction: () => o,
            isTextEditingField: () => s
        });
        var i = n(591800);
        function s(e) {
            if ("INPUT" === e.tagName) {
                const t = e.type;
                return "text" === t || "email" === t || "number" === t || "password" === t || "search" === t || "tel" === t || "url" === t
            }
            return "TEXTAREA" === e.tagName || e.isContentEditable
        }
        function o(e, t) {
            if (!t)
                return !1;
            const n = 255 & e;
            if (27 === n || n >>> 4 == 7)
                return !1;
            switch (e ^ n) {
            case i.Modifiers.Alt:
                return (38 === n || 40 === n) && "SELECT" === t.tagName || s(t);
            case i.Modifiers.Alt + i.Modifiers.Shift:
                return s(t);
            case i.Modifiers.Mod:
                if (67 === n || !i.isMacKeyboard && 45 === n) {
                    const e = t.ownerDocument && t.ownerDocument.getSelection();
                    if (e && !e.isCollapsed)
                        return !0
                }
                return s(t);
            case i.Modifiers.Mod + i.Modifiers.Shift:
                return n >= 33 && n <= 40 && s(t);
            case i.Modifiers.Shift:
            case 0:
                return 9 === n ? !(!t.ownerDocument || t === t.ownerDocument.body || t === t.ownerDocument.documentElement) : (!function(e) {
                    if ("BUTTON" === e.tagName)
                        return !0;
                    if ("INPUT" === e.tagName) {
                        const t = e.type;
                        if ("submit" === t || "button" === t || "reset" === t || "checkbox" === t || "radio" === t)
                            return !0
                    }
                    return !1
                }(t) || 13 === n || 32 === n || 9 === n) && ("form"in t || t.isContentEditable)
            }
            return !1
        }
    }
    ,
    745269: (e, t, n) => {
        "use strict";
        n.d(t, {
            CubicBezier: () => o,
            color: () => r,
            dur: () => i,
            easingFunc: () => s
        });
        const i = 350
          , s = {
            linear: e => e,
            easeInQuad: e => e * e,
            easeOutQuad: e => e * (2 - e),
            easeInOutQuad: e => e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1,
            easeInCubic: e => e * e * e,
            easeOutCubic: e => --e * e * e + 1,
            easeInOutCubic: e => e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
            easeInQuart: e => e * e * e * e,
            easeOutQuart: e => 1 - --e * e * e * e,
            easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e,
            easeInQuint: e => e * e * e * e * e,
            easeOutQuint: e => 1 + --e * e * e * e * e,
            easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
        };
        class o {
            constructor(e, t, n, i) {
                this._mX1 = e,
                this._mY1 = t,
                this._mX2 = n,
                this._mY2 = i
            }
            easingFunc(e) {
                return this._mX1 === this._mY1 && this._mX2 === this._mY2 ? e : this._calcBezier(this._getTForX(e))
            }
            _a(e, t) {
                return 1 - 3 * t + 3 * e
            }
            _b(e, t) {
                return 3 * t - 6 * e
            }
            _c(e) {
                return 3 * e
            }
            _calcBezier(e) {
                return ((this._a(this._mY1, this._mY2) * e + this._b(this._mY1, this._mY2)) * e + this._c(this._mY1)) * e
            }
            _getSlope(e) {
                return 3 * this._a(this._mX1, this._mX2) * e * e + 2 * this._b(this._mX1, this._mX2) * e + this._c(this._mX1)
            }
            _getTForX(e) {
                let t = e;
                for (let n = 0; n < 4; ++n) {
                    const n = this._getSlope(t);
                    if (0 === n)
                        return t;
                    t -= (this._calcBezier(t) - e) / n
                }
                return t
            }
        }
        const r = {
            black70: "#4A4A4A",
            black80: "#535353"
        }
    }
    ,
    604286: (e, t, n) => {
        "use strict";
        n.d(t, {
            hotKeyDeserialize: () => o,
            hotKeySerialize: () => s
        });
        var i = n(927301);
        function s(e) {
            return (0,
            i.htmlEscape)(JSON.stringify(e))
        }
        function o(e) {
            return JSON.parse((0,
            i.decodeHTMLEntities)(e))
        }
    }
    ,
    673747: (e, t, n) => {
        "use strict";
        n.r(t),
        n.d(t, {
            hide: () => M,
            show: () => p,
            showOnElement: () => m,
            tempForceHide: () => y,
            tooltipClickHandler: () => v,
            updateTooltipText: () => f
        });
        var i = n(778785)
          , s = n(650151)
          , o = n(799786)
          , r = n(112539)
          , a = n(630112)
          , u = n(471802);
        let l = !1
          , c = null
          , d = null;
        i.mobiletouch || (document.addEventListener("mouseover", _, !0),
        document.addEventListener("focus", (function(e) {
            const t = e.target;
            if (!(t instanceof HTMLElement && t.closest('[data-tooltip-show-on-focus="true"]') && t.matches(":focus-visible")))
                return;
            _(e, !0)
        }
        ), {
            capture: !0
        }),
        document.addEventListener("active-descendant-focus", (function(e) {
            e.target instanceof HTMLElement && _(e, !0)
        }
        ), {
            capture: !0
        }));
        const h = new MutationObserver(( () => {
            if (c && c.options.target) {
                let e;
                e = "isConnected"in c.options.target ? c.options.target.isConnected : document.body.contains(c.options.target),
                e || M()
            }
        }
        ))
          , m = (e, t={}) => {
            const {content: n, ...i} = S(t)
              , s = u.getDataFromTarget(e)
              , o = Object.assign(s, i);
            return "none" !== n.type && (o.content = n),
            !("none" === o.content.type && !o.hotkey) && (o.target = e,
            p(o),
            !0)
        }
          , p = e => {
            const t = S(e)
              , n = u.getTooltip(t);
            if (c = {
                options: t,
                element: n
            },
            (0,
            a.setTooltip)(n),
            (0,
            r.clearSchedule)(),
            !l)
                return u.hideTooltip(n),
                void (0,
                r.scheduleRender)(( () => w(n)), function(e) {
                    return "number" != typeof e.tooltipDelay || isNaN(e.tooltipDelay) ? 500 : e.tooltipDelay
                }(t));
            const {tooltipDebounce: i} = e;
            "number" != typeof i || isNaN(i) ? w(n) : (0,
            r.scheduleRender)(( () => w(n)), i)
        }
          , f = e => u.updateTooltipTextFromTarget(e);
        function _(e, t) {
            if ("sourceCapabilities"in e && e.sourceCapabilities?.firesTouchEvents)
                return;
            const n = function(e, t, n) {
                const i = [];
                for (; e && e !== t; )
                    e.classList && e.classList.contains(n) && i.push(e),
                    e = e.parentElement || T(e.parentNode);
                return i
            }(e.target, e.currentTarget, "apply-common-tooltip");
            for (const i of n) {
                if (e instanceof MouseEvent)
                    if ("buttons"in e) {
                        if (1 & e.buttons)
                            continue
                    } else if (1 === e.which)
                        continue;
                const n = () => m(i);
                if (n()) {
                    const e = e => s(null, !0)
                      , s = (o, r=!1) => {
                        i.removeEventListener("common-tooltip-update", n),
                        i.removeEventListener("mouseleave", s),
                        i.removeEventListener("mousedown", s),
                        document.removeEventListener("scroll", e, {
                            capture: !0
                        }),
                        t && (i.removeEventListener("blur", s),
                        i.removeEventListener("active-descendant-blur", s)),
                        d && (d.destroy(),
                        d = null),
                        M(r)
                    }
                    ;
                    i.addEventListener("common-tooltip-update", n),
                    i.addEventListener("mouseleave", s),
                    i.addEventListener("mousedown", s),
                    document.addEventListener("scroll", e, {
                        capture: !0
                    }),
                    t && (i.addEventListener("blur", s),
                    i.addEventListener("active-descendant-blur", s)),
                    null === d && (d = (0,
                    o.createGroup)({
                        desc: "Tooltip"
                    }),
                    d.add({
                        desc: "Hide",
                        hotkey: 27,
                        handler: s
                    }));
                    break
                }
            }
        }
        function v(e) {
            i.mobiletouch && (m(e.currentTarget, {
                tooltipDelay: 0
            }),
            document.addEventListener("scroll", g),
            document.addEventListener("touchstart", g),
            window.addEventListener("orientationchange", g),
            window.screen.orientation?.addEventListener("change", g))
        }
        function g() {
            document.removeEventListener("scroll", g),
            document.removeEventListener("touchstart", g),
            window.removeEventListener("orientationchange", g),
            window.screen.orientation?.removeEventListener("change", g),
            M()
        }
        function b() {
            (0,
            a.empty)(),
            l = !1,
            c = null
        }
        const y = () => {
            if ((0,
            r.clearSchedule)(),
            (0,
            s.ensureNotNull)(h).disconnect(),
            !c || !l)
                return;
            const {element: e} = c;
            u.hideTooltip(e),
            b()
        }
          , M = (e, t) => {
            if ((0,
            r.clearSchedule)(),
            (0,
            s.ensureNotNull)(h).disconnect(),
            !c)
                return;
            if (!e && !l)
                return;
            const {element: n, options: i} = c
              , o = () => {
                n.removeEventListener("mouseleave", o),
                u.hideTooltip(n),
                e ? b() : (0,
                r.scheduleRemove)(( () => {
                    b()
                }
                ), 250),
                t?.()
            }
            ;
            i.tooltipHideDelay ? (0,
            r.scheduleHide)(( () => {
                n.querySelector(":hover") ? n.addEventListener("mouseleave", o) : o()
            }
            ), i.tooltipHideDelay) : o()
        }
        ;
        function w(e) {
            const {options: t} = (0,
            s.ensureNotNull)(c);
            if (u.setStyle(e, t),
            u.showTooltip(e),
            (0,
            s.ensureNotNull)(h).observe(document, {
                childList: !0,
                subtree: !0
            }),
            l = !0,
            t.forceHideOnMove) {
                const e = () => {
                    document.removeEventListener("mousemove", e),
                    document.removeEventListener("touchmove", e),
                    M()
                }
                ;
                document.addEventListener("mousemove", e),
                document.addEventListener("touchmove", e)
            }
        }
        function T(e) {
            return e && (e.nodeType === Node.ELEMENT_NODE ? e : null)
        }
        function S(e) {
            if (function(e) {
                return "content"in e
            }(e))
                return e;
            const {inner: t, html: n, text: i, ...s} = e;
            let o = {
                type: "none"
            };
            return t && (o = {
                type: "element",
                data: t
            }),
            i && (o = {
                type: n ? "html" : "text",
                data: i
            }),
            {
                content: o,
                ...s
            }
        }
    }
    ,
    780792: (e, t, n) => {
        "use strict";
        n.d(t, {
            AbstractIndicator: () => a
        });
        var i = n(735566)
          , s = n(900608)
          , o = n(534197);
        n(673747);
        const r = (0,
        i.getLogger)("GUI.Blocks.AbstractIndicator");
        class a {
            constructor(e) {
                this._classSuffix = "",
                this._quoteSessionPrefix = "abstract-indicator",
                this._shortMode = !1,
                this._showTooltip = !0,
                this._subscribed = !1,
                this._tooltipType = "custom",
                this._lastTooltipText = "",
                this._quoteSession = e.quoteSession
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
            update(e, t) {
                this._updateValue(e, t),
                this._render()
            }
            setTooltipEnabled(e=!1) {
                this._showTooltip !== e && (this._showTooltip = e,
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
                o.getQuoteSessionInstance)("simple")),
                this._quoteSession.subscribe(this._getQuoteSessionId(), this._symbolName, this.update.bind(this)),
                this._subscribed = !0)
            }
            stop() {
                this._subscribed && this._quoteSession && this._symbolName && (this._quoteSession.unsubscribe(this._getQuoteSessionId(), this._symbolName),
                this._subscribed = !1)
            }
            setSessionStatusIcon(e) {
                this._sessionStatusIcon !== e && (this._sessionStatusIcon = e,
                this._render())
            }
            _init(e) {
                this._el = e.el ? e.el : document.createElement("span"),
                this._el.innerHTML = "",
                this._classMap = e.classMap,
                this._iconClassMap = e.iconClassMap,
                this._labelMap = e.labelMap,
                this._showTooltip = e.showTooltip,
                this._classSuffix = e.classSuffix,
                this._symbolName = e.symbol,
                this._sessionStatusIcon = e.sessionStatusIcon,
                this._onValueChange = e.onValueChange,
                e.tooltipType && (this._tooltipType = e.tooltipType),
                this._quoteSessionGUID = (0,
                s.guid)(),
                !0 === e.short && this.enableShortMode(),
                e.data && this._updateValue(e.data)
            }
            _clearClasses() {
                Object.values(this._classMap).map((e => {
                    this._el.classList.remove(`${e}`),
                    this._el.classList.remove(`${e}${this._classSuffix}`)
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
            _updateValue(e, t) {
                const n = this._getValueFromData(e);
                (t || n !== this._value) && (this._value = n,
                this._onValueChange?.(this._value))
            }
            _renderClasses() {
                const e = this._el.classList;
                e.add(this._componentClass, this._componentClass + this._classSuffix);
                const t = this._classMap[this._value];
                for (const n in this._classMap) {
                    const i = this._classMap[n];
                    i && (i === t ? (e.add(i, i + this._classSuffix),
                    this._sessionStatusIcon && e.add(i + "__withIcon")) : (e.remove(i, i + this._classSuffix),
                    this._sessionStatusIcon && e.remove(i + "__withIcon")))
                }
                !t && this._value && r.logWarn(`no className for status ${this._value}`)
            }
            _renderTooltip() {
                const e = this._showTooltip ? this.getTooltipText() : "";
                e !== this._lastTooltipText && (this._lastTooltipText = e,
                this._el.setAttribute("title", e),
                "custom" === this._tooltipType && this._el.classList.toggle("apply-common-tooltip", this._showTooltip))
            }
            _getQuoteSessionId() {
                return `${this._quoteSessionPrefix}.${this._quoteSessionGUID}`
            }
        }
    }
    ,
    719240: (e, t, n) => {
        "use strict";
        n.d(t, {
            DataModeIndicator: () => u
        });
        var i = n(444372)
          , s = (n(142492),
        n(429341),
        n(780792));
        const o = {
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
        function r() {
            return {
                connecting: i.t(null, {
                    context: "data_mode_connecting_letter"
                }, n(167040)),
                delayed: i.t(null, {
                    context: "data_mode_delayed_letter"
                }, n(800919)),
                delayed_streaming: i.t(null, {
                    context: "data_mode_delayed_streaming_letter"
                }, n(933088)),
                endofday: i.t(null, {
                    context: "data_mode_end_of_day_letter"
                }, n(918400)),
                forbidden: i.t(null, {
                    context: "data_mode_forbidden_letter"
                }, n(514149)),
                realtime: i.t(null, {
                    context: "data_mode_realtime_letter"
                }, n(650940)),
                snapshot: i.t(null, {
                    context: "data_mode_snapshot_letter"
                }, n(756757)),
                loading: "",
                replay: i.t(null, {
                    context: "data_mode_replay_letter"
                }, n(745540))
            }
        }
        const a = {
            streaming: "realtime"
        };
        class u extends s.AbstractIndicator {
            constructor(e) {
                super(e),
                this._quoteSessionPrefix = "data-mode-indicator",
                this._componentClass = "tv-data-mode",
                this._init(e)
            }
            getLabel() {
                return !0 === this._shortMode ? this._shortLabelMap[this._value] || "" : super.getLabel()
            }
            setMode(e, t) {
                this.update({
                    values: {
                        update_mode: e,
                        update_mode_seconds: t
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
                let e = "";
                const t = this.getValue();
                if ("" === t)
                    return e;
                switch (t) {
                case "delayed":
                    e = i.t(null, void 0, n(369539));
                    break;
                case "delayed_streaming":
                    e = i.t(null, void 0, n(167476));
                    break;
                default:
                    e = this._labelMap[t] || e
                }
                return ["delayed", "delayed_streaming"].includes(t) && (e = e.format({
                    number: String(Math.round(this._modeInterval / 60))
                })),
                e
            }
            _init(e={}) {
                const t = Object.assign({}, {
                    classMap: o,
                    classSuffix: "",
                    data: {
                        values: {
                            update_mode: "connecting"
                        }
                    },
                    labelMap: {
                        connecting: i.t(null, void 0, n(366891)),
                        delayed: i.t(null, void 0, n(739688)),
                        delayed_streaming: i.t(null, void 0, n(739688)),
                        endofday: i.t(null, void 0, n(328304)),
                        forbidden: i.t(null, void 0, n(909161)),
                        realtime: i.t(null, void 0, n(303058)),
                        snapshot: i.t(null, void 0, n(988408)),
                        loading: "",
                        replay: i.t(null, void 0, n(38822))
                    },
                    modeInterval: 600,
                    short: !1,
                    shortLabelMap: r(),
                    showTooltip: !0,
                    tooltipType: "custom"
                }, e);
                this._modeInterval = t.modeInterval || 600,
                this._shortLabelMap = t.shortLabelMap || r(),
                super._init(t),
                this._render()
            }
            _getValueFromData(e) {
                let t;
                return t = void 0 !== e.values && void 0 !== e.values.update_mode ? e.values.update_mode : this.getValue(),
                a[t] || t
            }
            _updateValue(e, t) {
                void 0 !== e.values && void 0 !== e.values.update_mode_seconds && (this._modeInterval = e.values.update_mode_seconds),
                super._updateValue(e, t)
            }
        }
    }
    ,
    799786: (e, t, n) => {
        "use strict";
        n.d(t, {
            Modifiers: () => o.Modifiers,
            createGroup: () => i.createGroup,
            keyboardPressedKeysState: () => i.keyboardPressedKeysState,
            pressedKeys: () => i.pressedKeys
        });
        var i = n(129592)
          , s = n(764250)
          , o = n(591800)
          , r = n(345848);
        (0,
        i.registerWindow)(window),
        s.ActionGroup.setMatchedHotkeyHandler((e => {
            (0,
            r.trackEvent)("Keyboard Shortcuts", (0,
            o.humanReadableHash)(e))
        }
        ))
    }
    ,
    192784: (e, t, n) => {
        "use strict";
        n.d(t, {
            flushDelegate: () => i
        });
        const i = new (n(547465).Delegate)
    }
    ,
    345848: (e, t, n) => {
        "use strict";
        n.d(t, {
            trackEvent: () => r
        });
        n(251954);
        var i = n(931924);
        const s = (0,
        n(735566).getLogger)("Common.TrackEvent");
        let o = !1;
        const r = (e, t, n) => {
            if (o)
                return;
            let r = (e ? e + ":" : "") + t;
            n && (r += " " + n),
            s.logNormal(r),
            i.enabled("widget") || !window._UNIT_TESTS && window.gtag && window.gtag("event", t, {
                event_category: e,
                event_label: n
            })
        }
        ;
        "undefined" != typeof window && (window.TradingView = window.TradingView || {},
        window.TradingView.trackEvent = r)
    }
    ,
    226722: (e, t, n) => {
        "use strict";
        n.d(t, {
            TVXWindowEvents: () => r
        });
        n(142492);
        var i = n(735566)
          , s = n(49437);
        const o = (0,
        i.getLogger)("XWindowEvents");
        var r;
        !function(e) {
            const t = "tvxwevents."
              , n = {};
            let i;
            window.BroadcastChannel ? (i = new BroadcastChannel("tvxwevents"),
            i.addEventListener("message", (function(e) {
                const {data: {event: t, value: i}} = e;
                n[t] && n[t].forEach((e => {
                    e(i)
                }
                ))
            }
            )),
            function() {
                const e = []
                  , n = performance.now();
                for (let n = 0; n < s.TVLocalStorage.length; n++) {
                    const i = s.TVLocalStorage.key(n);
                    i.startsWith(t) && e.push(i)
                }
                const i = s.TVLocalStorage.length;
                for (const t of e)
                    s.TVLocalStorage.removeItem(t);
                const r = performance.now() - n;
                o.logNormal(`Total keys amount in local storage on operation start: ${i}`),
                o.logNormal(`Keys amount in local storage to be deleted: ${e.length}`),
                o.logNormal(`Keys to be deleted from local storage: ${JSON.stringify(e)}`),
                o.logNormal(`Removing keys from local storage took ${r} ms`)
            }()) : window.addEventListener("storage", (function(e) {
                const {newValue: i, key: o} = e;
                if (null === i || !o || !o.startsWith(t))
                    return;
                const r = o.substring(11);
                n[r] && n[r].forEach((t => {
                    t(e.newValue)
                }
                ));
                s.TVLocalStorage.removeItem(o)
            }
            )),
            e.on = function(e, t) {
                n[e] || (n[e] = []),
                n[e].push(t)
            }
            ,
            e.off = function(e, t) {
                if (!n[e])
                    return;
                const i = n[e].indexOf(t);
                -1 !== i && (1 === n[e].length ? delete n[e] : n[e].splice(i, 1))
            }
            ,
            e.emit = function(e, n=Date.now()) {
                try {
                    i ? i.postMessage({
                        event: e,
                        value: n
                    }) : s.TVLocalStorage.setItem(t + e, n.toString())
                } catch (e) {
                    o.logError(e.message)
                }
            }
        }(r || (r = {}))
    }
    ,
    51196: (e, t, n) => {
        "use strict";
        n.d(t, {
            PLACE_HOLDER: () => r,
            VolumeFormatter: () => l
        });
        var i = n(444372)
          , s = n(808708)
          , o = n(536794);
        const r = "---"
          , a = [{
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
        function u(e, t) {
            const n = e - t;
            return a.find((e => e.value >= n)) ?? a[a.length - 1]
        }
        class l {
            constructor(e={}) {
                this.type = "volume";
                const {precision: t=0, minPrecision: n=0, dimensionPrecision: i=2, dimensionMinPrecision: o=0, significantDigits: r=3, ignoreLocaleNumberFormat: a, noExponentialForm: u, removeSpaceBeforeDimension: l} = e;
                this._precision = t,
                this._formatter = new s.NumericFormatter({
                    ignoreLocaleNumberFormat: a,
                    precision: this._precision,
                    minPrecision: n,
                    noExponentialForm: u
                }),
                this._dimensionPrecision = i,
                this._dimensionFormatter = new s.NumericFormatter({
                    ignoreLocaleNumberFormat: a,
                    precision: this._dimensionPrecision,
                    minPrecision: o,
                    noExponentialForm: u
                }),
                this._significantDigits = r,
                this._fractionalValues = void 0 !== t && t > 0,
                this._spaceBeforeDimension = l ? "" : " ",
                this._options = e
            }
            state() {
                const {ignoreLocaleNumberFormat: e, ...t} = this._options;
                return t
            }
            format(e, t) {
                if (!(0,
                o.isNumber)(e))
                    return r;
                if (Math.abs(e) >= 1e100)
                    return i.t(null, void 0, n(696935));
                let s = "";
                Math.abs(e) < 1 && (e = +e.toFixed(this._precision)),
                e < 0 ? s = "−" : e > 0 && t?.signPositive && (s = "+"),
                e = Math.abs(e);
                const a = !!(t?.ignoreLocaleNumberFormat ?? this._options.ignoreLocaleNumberFormat);
                let l, c, d = Math.floor(Math.log10(e)) + 1;
                if (d <= this._significantDigits && (e = +e.toFixed(this._precision),
                d = Math.floor(Math.log10(e)) + 1),
                d <= this._significantDigits)
                    l = this._formatNumber(e, a, this._formatter);
                else {
                    let t = u(d, this._significantDigits);
                    const n = Math.pow(10, t.value);
                    e = +(e / n).toFixed(this._dimensionPrecision) * n,
                    t = u(Math.floor(Math.log10(e)) + 1, this._significantDigits),
                    l = this._formatNumber(e / Math.pow(10, t.value), a, this._dimensionFormatter),
                    c = t.letter
                }
                return c ? `${s}${l}${this._spaceBeforeDimension}${c}` : `${s}${l}`
            }
            parse(e, t) {
                if ("---" === e)
                    return {
                        error: "not a number",
                        res: !1,
                        value: NaN
                    };
                const n = {
                    K: 1e3,
                    M: 1e6,
                    B: 1e9,
                    T: 1e12
                }
                  , i = (e = e.replace("−", "-")).slice(-1);
                if (n.hasOwnProperty(i)) {
                    const s = this._formatter.parse(e.slice(0, -1).trim(), t)
                      , r = s.res ? s.value : NaN;
                    return (0,
                    o.isNumber)(r) ? {
                        res: !0,
                        value: r * n[i]
                    } : {
                        error: "not a number",
                        res: !1,
                        value: NaN
                    }
                }
                {
                    const n = this._formatter.parse(e.trim(), t);
                    let i = n.res ? n.value : NaN;
                    return -0 === i && (i = 0),
                    (0,
                    o.isNumber)(i) ? {
                        res: !0,
                        value: i
                    } : {
                        error: "not a number",
                        res: !1,
                        value: NaN
                    }
                }
            }
            static serialize(e) {
                return e.state()
            }
            static deserialize(e) {
                return new l(e)
            }
            _formatNumber(e, t, n) {
                if (this._fractionalValues && 0 !== e) {
                    const t = 14 - Math.ceil(Math.log10(e))
                      , n = Math.pow(10, t);
                    e = Math.round(e * n) / n
                }
                return n.format(e, {
                    ignoreLocaleNumberFormat: t
                })
            }
        }
    }
    ,
    482030: (e, t, n) => {
        "use strict";
        function i(e) {
            return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
        }
        n.d(t, {
            regExpEscape: () => i
        })
    }
    ,
    982528: (e, t, n) => {
        "use strict";
        function i(e) {
            e.preventDefault()
        }
        n.d(t, {
            preventDefault: () => i,
            preventDefaultForContextMenu: () => o
        });
        const s = ["input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="search"]', 'input[type="number"]', 'input[type="url"]', "textarea", "a[href]", '*[contenteditable="true"]', "[data-allow-context-menu]"];
        function o(e) {
            const t = e.target;
            t && !t.closest(s.join(", ")) && e.preventDefault()
        }
    }
    ,
    257253: (e, t, n) => {
        "use strict";
        n.d(t, {
            Interval: () => c,
            ResolutionKind: () => o,
            SpecialResolutionKind: () => r,
            isHour: () => h
        });
        const i = /^(\d*)([TSHDWMR])$/
          , s = /^(\d+)$/;
        var o, r;
        !function(e) {
            e.Ticks = "ticks",
            e.Seconds = "seconds",
            e.Minutes = "minutes",
            e.Days = "days",
            e.Weeks = "weeks",
            e.Months = "months",
            e.Range = "range",
            e.Invalid = "invalid"
        }(o || (o = {})),
        function(e) {
            e.Hours = "hours"
        }(r || (r = {}));
        const a = {};
        a[o.Ticks] = 1e3,
        a[o.Seconds] = 1e3,
        a[o.Minutes] = 60 * a[o.Seconds],
        a[o.Days] = 1440 * a[o.Minutes],
        a[o.Weeks] = 7 * a[o.Days];
        const u = {
            T: o.Ticks,
            S: o.Seconds,
            D: o.Days,
            W: o.Weeks,
            M: o.Months,
            R: o.Range
        }
          , l = new Set([o.Ticks, o.Seconds, o.Minutes]);
        class c {
            constructor(e, t) {
                this._kind = o.Invalid,
                this._multiplier = 0,
                e !== o.Invalid && t > 0 && (this._kind = e,
                this._multiplier = t)
            }
            kind() {
                return this._kind
            }
            guiKind() {
                return this.isMinuteHours() ? r.Hours : this._kind
            }
            multiplier() {
                return this._multiplier
            }
            isValid() {
                return this.kind() !== o.Invalid && this.multiplier() > 0
            }
            isDWM() {
                return this.isValid() && !this.isRange() && !this.isIntraday() && !this.isTicks()
            }
            isIntraday() {
                const e = l.has(this.kind());
                return this.isValid() && e
            }
            isSeconds() {
                return this.kind() === o.Seconds
            }
            isMinutes() {
                return this.kind() === o.Minutes
            }
            isMinuteHours() {
                return this.kind() === o.Minutes && h(this.multiplier())
            }
            isDays() {
                return this.kind() === o.Days
            }
            isWeeks() {
                return this.kind() === o.Weeks
            }
            isMonths() {
                return this.kind() === o.Months
            }
            isRange() {
                return this.kind() === o.Range
            }
            isTicks() {
                return this.kind() === o.Ticks
            }
            is1Tick() {
                return this.isTicks() && 1 === this.multiplier()
            }
            isTimeBased() {
                return !this.isRange()
            }
            letter() {
                return this.isValid() && this.kind() !== o.Minutes ? this.kind()[0].toUpperCase() : ""
            }
            value() {
                return this.isValid() ? this.kind() === o.Minutes ? this.multiplier() + "" : this.multiplier() + this.letter() : ""
            }
            isEqualTo(e) {
                if (!(e instanceof c))
                    throw new Error("Argument is not an Interval");
                return !(!this.isValid() || !e.isValid()) && (this.kind() === e.kind() && this.multiplier() === e.multiplier())
            }
            inMilliseconds(e=Date.now()) {
                if (!this.isValid() || this.isRange())
                    return NaN;
                if (this.isMonths()) {
                    const t = new Date(e);
                    t.setUTCMonth(t.getUTCMonth() + (this.multiplier() || 1));
                    return +t - e
                }
                const t = this.multiplier();
                return a[this.kind()] * t
            }
            static isEqual(e, t) {
                return e === t || c.parse(e).isEqualTo(c.parse(t))
            }
            static parseExt(e) {
                e = (e + "").toUpperCase().split(",")[0];
                let t = i.exec(e);
                return null !== t ? "H" === t[2] ? {
                    interval: new c(o.Minutes,60 * d(t[1])),
                    guiResolutionKind: r.Hours
                } : {
                    interval: new c(u[t[2]],d(t[1])),
                    guiResolutionKind: u[t[2]]
                } : (t = s.exec(e),
                null !== t ? {
                    interval: new c(o.Minutes,d(t[1])),
                    guiResolutionKind: o.Minutes
                } : {
                    interval: new c(o.Invalid,0),
                    guiResolutionKind: o.Invalid
                })
            }
            static parse(e) {
                return c.parseExt(e).interval
            }
            static kind(e) {
                return c.parse(e).kind()
            }
            static isValid(e) {
                return c.parse(e).isValid()
            }
            static isDWM(e) {
                return c.parse(e).isDWM()
            }
            static isIntraday(e) {
                return c.parse(e).isIntraday()
            }
            static isSeconds(e) {
                return c.parse(e).isSeconds()
            }
            static isMinutes(e) {
                return c.parse(e).isMinutes()
            }
            static isMinuteHours(e) {
                return c.parse(e).isMinuteHours()
            }
            static isDays(e) {
                return c.parse(e).isDays()
            }
            static isWeeks(e) {
                return c.parse(e).isWeeks()
            }
            static isMonths(e) {
                return c.parse(e).isMonths()
            }
            static isRange(e) {
                return c.parse(e).isRange()
            }
            static isTicks(e) {
                return c.parse(e).isTicks()
            }
            static isTimeBased(e) {
                return c.parse(e).isTimeBased()
            }
            static normalize(e) {
                const t = c.parse(e);
                return t.isValid() ? t.value() : null
            }
        }
        function d(e) {
            return 0 === e.length ? 1 : parseInt(e, 10)
        }
        function h(e) {
            return e >= 60 && !(e % 60)
        }
    }
}]);
