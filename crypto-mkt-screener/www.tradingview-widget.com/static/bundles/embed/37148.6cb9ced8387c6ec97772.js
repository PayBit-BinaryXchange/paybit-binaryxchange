(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[37148, 15483], {
    649107: e => {
        e.exports = {
            loader: "loader-UL6iwcBa",
            static: "static-UL6iwcBa",
            item: "item-UL6iwcBa",
            "tv-button-loader": "tv-button-loader-UL6iwcBa",
            medium: "medium-UL6iwcBa",
            small: "small-UL6iwcBa",
            black: "black-UL6iwcBa",
            white: "white-UL6iwcBa",
            gray: "gray-UL6iwcBa",
            primary: "primary-UL6iwcBa"
        }
    }
    ,
    648692: e => {
        e.exports = {
            wrap: "wrap-HXzRntFl",
            input: "input-HXzRntFl",
            box: "box-HXzRntFl",
            hoverDot: "hoverDot-HXzRntFl",
            red: "red-HXzRntFl",
            blue: "blue-HXzRntFl",
            green: "green-HXzRntFl",
            orange: "orange-HXzRntFl",
            purple: "purple-HXzRntFl",
            cyan: "cyan-HXzRntFl",
            pink: "pink-HXzRntFl",
            large: "large-HXzRntFl",
            pickerDot: "pickerDot-HXzRntFl"
        }
    }
    ,
    534426: e => {
        e.exports = {
            wrapper: "wrapper-xPNB6vOB",
            selector: "selector-xPNB6vOB",
            arrowLeft: "arrowLeft-xPNB6vOB",
            colorSelectButton: "colorSelectButton-xPNB6vOB",
            popup: "popup-xPNB6vOB"
        }
    }
    ,
    447429: e => {
        e.exports = {
            item: "item-GJX1EXhk",
            interactive: "interactive-GJX1EXhk",
            hovered: "hovered-GJX1EXhk",
            disabled: "disabled-GJX1EXhk",
            active: "active-GJX1EXhk",
            shortcut: "shortcut-GJX1EXhk",
            normal: "normal-GJX1EXhk",
            big: "big-GJX1EXhk",
            iconCell: "iconCell-GJX1EXhk",
            icon: "icon-GJX1EXhk",
            content: "content-GJX1EXhk",
            label: "label-GJX1EXhk",
            checked: "checked-GJX1EXhk",
            toolbox: "toolbox-GJX1EXhk",
            showToolboxOnHover: "showToolboxOnHover-GJX1EXhk",
            arrowIcon: "arrowIcon-GJX1EXhk",
            subMenu: "subMenu-GJX1EXhk",
            invisibleHotkey: "invisibleHotkey-GJX1EXhk"
        }
    }
    ,
    405264: e => {
        e.exports = {
            item: "item-WJDah4zD",
            emptyIcons: "emptyIcons-WJDah4zD",
            loading: "loading-WJDah4zD",
            disabled: "disabled-WJDah4zD",
            interactive: "interactive-WJDah4zD",
            hovered: "hovered-WJDah4zD",
            normal: "normal-WJDah4zD",
            big: "big-WJDah4zD",
            icon: "icon-WJDah4zD",
            label: "label-WJDah4zD",
            title: "title-WJDah4zD",
            nested: "nested-WJDah4zD",
            shortcut: "shortcut-WJDah4zD",
            remove: "remove-WJDah4zD"
        }
    }
    ,
    868745: e => {
        e.exports = {
            separator: "separator-Ymxd0dt_"
        }
    }
    ,
    276773: e => {
        e.exports = {
            "default-drawer-min-top-distance": "100px",
            wrap: "wrap-_HnK0UIN",
            positionBottom: "positionBottom-_HnK0UIN",
            backdrop: "backdrop-_HnK0UIN",
            drawer: "drawer-_HnK0UIN",
            positionLeft: "positionLeft-_HnK0UIN"
        }
    }
    ,
    230725: (e, t, o) => {
        "use strict";
        o.d(t, {
            ColorSelector: () => k
        });
        var s = o(50959)
          , n = o(604e3)
          , r = o(591800)
          , i = o(364511)
          , l = o(887208)
          , c = o(432438)
          , a = o(497754)
          , h = o.n(a)
          , u = o(79205)
          , d = o(444372)
          , m = o(948019)
          , p = o(263361)
          , v = o(676809)
          , g = o(24122)
          , f = o(648692);
        const _ = (0,
        i.makeSwitchGroupItem)((function(e) {
            const {className: t, value: r=n.ListColor.Red, name: i, checked: l} = e
              , [c,a] = (0,
            p.useRovingTabindexElement)(null)
              , _ = (0,
            s.useContext)(m.ContextMenuContext)
              , w = _?.type ?? "menu"
              , k = r;
            return s.createElement("label", {
                ref: c,
                tabIndex: a,
                className: h()(t, f.wrap, "drawer" === w && f.large),
                "data-color": k,
                role: "menuitem",
                "aria-label": d.t(null, {
                    replace: {
                        color: k
                    }
                }, o(958673)),
                "aria-checked": l
            }, s.createElement("input", {
                className: f.input,
                type: "radio",
                name: i,
                value: r,
                checked: l,
                onChange: function() {
                    e.onChange && e.onChange(r)
                },
                onClick: l ? function() {
                    e.onClickIfChecked && e.onClickIfChecked(r)
                }
                : void 0
            }), s.createElement("div", {
                className: h()(f.box, f[k], "drawer" === w && f.large)
            }, l ? s.createElement(u.Icon, {
                icon: v
            }) : s.createElement("div", {
                className: f.pickerDot
            }, s.createElement(u.Icon, {
                className: f.hoverDot,
                icon: g
            }))))
        }
        ))
          , w = [39, 37, 13, 32, 27];
        function k(e) {
            const {buttonClassName: t, value: o, onSelectedClick: a, fromKeyboard: h} = e
              , u = (0,
            s.useRef)(null)
              , d = (0,
            s.useCallback)((e => {
                if (!u.current || e.defaultPrevented)
                    return;
                const t = (0,
                r.hashFromEvent)(e);
                if (!w.includes(t))
                    return;
                e.preventDefault();
                const s = (0,
                l.queryFocusableElements)(u.current).sort(l.navigationOrderComparator)
                  , i = s.findIndex((e => e === document.activeElement));
                if (-1 === i)
                    return;
                const a = s[i];
                let h;
                switch (t) {
                case 13:
                case 32:
                    p(a.dataset.color || n.ListColor.Red);
                    break;
                case 27:
                    p(o)
                }
                switch ((0,
                l.mapKeyCodeToDirection)(t)) {
                case "inlineNext":
                    h = s[i + 1] || s[0];
                    break;
                case "inlinePrev":
                    h = s[i - 1] || s[s.length - 1]
                }
                h instanceof HTMLLabelElement && ((0,
                c.becomeSecondaryElement)(a),
                (0,
                c.becomeMainElement)(h),
                h.focus())
            }
            ), []);
            (0,
            s.useLayoutEffect)(( () => {
                if (!h)
                    return;
                const e = document.activeElement
                  , t = u.current;
                if (!t)
                    return;
                const [o] = (0,
                l.queryFocusableElements)(t).sort(l.navigationOrderComparator);
                return o ? ((0,
                c.becomeMainElement)(o),
                o.focus(),
                () => {
                    e instanceof HTMLElement && e.focus()
                }
                ) : void 0
            }
            ), []);
            const m = n.LIST_COLORS.map(( (e, o) => s.createElement(_, {
                key: o,
                className: t,
                onClickIfChecked: a,
                value: e
            })));
            return s.createElement("menu", {
                ref: u,
                onKeyDown: d
            }, s.createElement(i.SwitchGroup, {
                name: "color-selector",
                onChange: p,
                values: void 0 !== o ? [o] : []
            }, m));
            function p(t) {
                e.onChange && void 0 !== t && e.onChange(t)
            }
        }
    }
    ,
    857769: (e, t, o) => {
        "use strict";
        o.d(t, {
            PopupColorSelector: () => y
        });
        var s = o(50959)
          , n = o(670797)
          , r = o(642709)
          , i = o(18182)
          , l = o(332585)
          , c = o(67812)
          , a = o(762852)
          , h = o(969680)
          , u = o(707533)
          , d = o(230725)
          , m = o(778785)
          , p = o(534426);
        class v extends s.PureComponent {
            constructor() {
                super(...arguments),
                this._popUpElem = null,
                this._onChange = e => {
                    this.props.onSelectColor(e),
                    this.props.hide()
                }
                ,
                this._onTargetMouseLeave = e => {
                    const t = !!e.relatedTarget.nodeName
                      , o = e.relatedTarget === this._popUpElem
                      , s = this._popUpElem && t && this._popUpElem.contains(e.relatedTarget);
                    o || s || this.props.hide()
                }
                ,
                this._onPopUpMouseLeave = e => {
                    const t = !!e.nativeEvent.relatedTarget.nodeName
                      , o = e.nativeEvent.relatedTarget === this.props.elem
                      , s = t && this.props.elem.contains(e.nativeEvent.relatedTarget);
                    o || s || this.props.hide()
                }
                ,
                this._onTouchStart = e => {
                    const t = !!e.target.nodeName
                      , o = e.target === this.props.elem
                      , s = e.target === this._popUpElem
                      , n = t && this.props.elem.contains(e.target)
                      , r = this._popUpElem && t && this._popUpElem.contains(e.target);
                    o || n || s || r || this.props.hide()
                }
                ,
                this._setPopUpElem = e => {
                    this._popUpElem = e
                }
            }
            componentDidMount() {
                document.documentElement && (m.mobiletouch ? document.documentElement.addEventListener("touchstart", this._onTouchStart) : (this.props.elem.addEventListener("mouseleave", this._onTargetMouseLeave),
                document.body.addEventListener("scroll", this.props.hide)))
            }
            componentWillUnmount() {
                document.documentElement && (m.mobiletouch ? document.documentElement.removeEventListener("touchstart", this._onTouchStart) : this.props.elem && (this.props.elem.removeEventListener("mouseleave", this._onTargetMouseLeave),
                document.documentElement.removeEventListener("scroll", this.props.hide)))
            }
            render() {
                const e = {
                    top: 0,
                    left: 0
                };
                if (this.props.elem) {
                    const t = this.props.elem.getBoundingClientRect();
                    e.top = t.top + t.height / 2,
                    e.left = t.left + ((0,
                    h.isRtl)() ? 0 : t.width)
                }
                return s.createElement(u.Portal, null, s.createElement("div", {
                    style: e,
                    className: p.popup,
                    ref: this._setPopUpElem,
                    onMouseLeave: m.mobiletouch ? void 0 : this._onPopUpMouseLeave
                }, s.createElement("div", {
                    className: p.wrapper
                }, s.createElement("div", {
                    className: p.selector
                }, s.createElement("div", {
                    className: p.arrowLeft
                }), s.createElement(d.ColorSelector, {
                    buttonClassName: p.colorSelectButton,
                    value: this.props.currentColor,
                    fromKeyboard: this.props.fromKeyboard,
                    onChange: this._onChange
                })))))
            }
        }
        var g = o(948019);
        function f(e) {
            const {actions: t, ...o} = e;
            return s.createElement(i.MatchMedia, {
                rule: r.DialogBreakpoints.TabletSmall
            }, (e => e && t ? s.createElement(l.DrawerManager, null, s.createElement(g.ContextMenuContext.Provider, {
                value: {
                    type: "drawer"
                }
            }, s.createElement(a.Drawer, {
                onClose: o.hide,
                position: "Bottom"
            }, s.createElement(c.ContextMenuList, {
                items: t
            })))) : s.createElement(v, {
                ...o
            })))
        }
        var _ = o(687341);
        let w = null
          , k = null;
        var y;
        !function(e) {
            function t() {
                w && k?.unmount()
            }
            e.show = function(e) {
                w || (w = document.createElement("div")),
                t(),
                k = (0,
                _.createReactRoot)(s.createElement(n.SlotContext.Provider, {
                    value: e.manager || null
                }, s.createElement(f, {
                    ...e,
                    hide: t
                })), w)
            }
            ,
            e.hide = t
        }(y || (y = {}))
    }
    ,
    883522: (e, t, o) => {
        "use strict";
        o.d(t, {
            AppContext: () => s
        });
        const s = (0,
        o(50959).createContext)({
            isOnMobileAppPage: () => !1,
            isRtl: !1,
            locale: "en",
            renderMode: "legacy"
        })
    }
    ,
    265005: (e, t, o) => {
        "use strict";
        o.d(t, {
            Loader: () => s.Loader
        });
        var s = o(386290)
    }
    ,
    386290: (e, t, o) => {
        "use strict";
        o.d(t, {
            Loader: () => c
        });
        var s = o(50959)
          , n = o(497754)
          , r = o.n(n)
          , i = o(649107)
          , l = o.n(i);
        function c(e) {
            const {className: t, size: o="medium", staticPosition: n, color: i="black"} = e
              , c = r()(l().item, l()[i], l()[o]);
            return s.createElement("span", {
                className: r()(l().loader, n && l().static, t)
            }, s.createElement("span", {
                className: c
            }), s.createElement("span", {
                className: c
            }), s.createElement("span", {
                className: c
            }))
        }
    }
    ,
    364511: (e, t, o) => {
        "use strict";
        o.d(t, {
            SwitchGroup: () => s.SwitchGroup,
            makeSwitchGroupItem: () => n.makeSwitchGroupItem
        });
        var s = o(367254)
          , n = o(771813)
    }
    ,
    746326: (e, t, o) => {
        "use strict";
        function s(e) {
            const {paddingTop: t, paddingBottom: o} = window.getComputedStyle(e);
            return [t, o].reduce(( (e, t) => e - Number((t || "").replace("px", ""))), e.clientHeight)
        }
        function n(e, t=!1) {
            const o = getComputedStyle(e)
              , s = [o.height];
            return "border-box" !== o.boxSizing && s.push(o.paddingTop, o.paddingBottom, o.borderTopWidth, o.borderBottomWidth),
            t && s.push(o.marginTop, o.marginBottom),
            s.reduce(( (e, t) => e + (parseFloat(t) || 0)), 0)
        }
        function r(e, t=!1) {
            const o = getComputedStyle(e)
              , s = [o.width];
            return "border-box" !== o.boxSizing && s.push(o.paddingLeft, o.paddingRight, o.borderLeftWidth, o.borderRightWidth),
            t && s.push(o.marginLeft, o.marginRight),
            s.reduce(( (e, t) => e + (parseFloat(t) || 0)), 0)
        }
        o.d(t, {
            contentHeight: () => s,
            outerHeight: () => n,
            outerWidth: () => r
        })
    }
    ,
    740203: (e, t, o) => {
        "use strict";
        o.d(t, {
            createSelectableList: () => v
        });
        class s {
            constructor(e) {
                this._coll = e
            }
            getItemByIdx(e) {
                return this._coll.item(e)
            }
            getItems() {
                return Array.from(this._coll)
            }
            getFirstItem() {
                return this.getItemByIdx(0)
            }
            getLastItem() {
                const e = this._coll.length;
                return this.getItemByIdx(e - 1)
            }
            getItemIdx(e) {
                return Array.prototype.findIndex.call(this._coll, (t => t === e))
            }
            getLength() {
                return this._coll.length
            }
            contains(e) {
                return -1 !== this.getItemIdx(e)
            }
        }
        var n, r = o(799786);
        !function(e) {
            e[e.Prev = -1] = "Prev",
            e[e.Next = 1] = "Next"
        }(n || (n = {}));
        const i = "cursor";
        class l {
            constructor(e) {
                this._list = e.list,
                this._items = new s(this._list.getElementsByClassName(e.listItemClass)),
                this._focused = new s(this._list.getElementsByClassName(e.focusedListItemClass)),
                this._selected = new s(this._list.getElementsByClassName(e.selectedListItemClass)),
                this._cursor = new s(this._list.getElementsByClassName(i)),
                this._selectedListItemClass = e.selectedListItemClass,
                this._focusedListItemClass = e.focusedListItemClass,
                this._onSelect = e.onSelect,
                this._onNavigate = e.onNavigate,
                this._onConfirm = e.onConfirm,
                this._onDelete = e.onDelete,
                this._mouseActions = new Map,
                this._cyclicNavigationDisabled = Boolean(e.cyclicNavigationDisabled),
                this.hotkeys = (0,
                r.createGroup)({
                    desc: "Selectable list"
                }),
                e.modes && e.modes.forEach((t => new t({
                    selection: this,
                    localHotkeyElement: this._list,
                    globalHotkeyElement: e.globalHotkeys ? null : this._list
                })))
            }
            selectItem(e) {
                e.classList.add(this._selectedListItemClass)
            }
            unselectItem(e) {
                e.classList.remove(this._selectedListItemClass)
            }
            focusItem(e) {
                this.removeFocus(),
                e.classList.add(this._focusedListItemClass),
                this.setCursor(e)
            }
            getFocusedItemIdx() {
                const e = this._focused.getFirstItem();
                return e ? this._items.getItemIdx(e) : -1
            }
            getFocusedItem() {
                return this._focused.getFirstItem()
            }
            isSelected(e) {
                return this._selected.contains(e)
            }
            isFocused(e) {
                return this._focused.contains(e)
            }
            isListItem(e) {
                return this._items.contains(e)
            }
            removeSelections() {
                this._selected.getItems().forEach((e => e.classList.remove(this._selectedListItemClass)))
            }
            removeFocus() {
                this._focused.getItems().forEach((e => e.classList.remove(this._focusedListItemClass)))
            }
            move(e, t, o) {
                const s = e ? this._items.getItemIdx(e) : -1;
                let n;
                n = "number" == typeof t ? this._items.getItemByIdx(this._calcNextItemIdx(s, t)) : t,
                n && (o(n, e),
                this._scrollIfNotVisible(n))
            }
            getSelectedItems() {
                return this._selected.getItems()
            }
            getList() {
                return this._list
            }
            getItemsCollection() {
                return this._items
            }
            getSelectedCollection() {
                return this._selected
            }
            setCursor(e) {
                this.removeCursor(),
                e.classList.add(i)
            }
            removeCursor() {
                this._cursor.getItems().forEach((e => e.classList.remove(i)))
            }
            getCursorItem() {
                return this._cursor.getFirstItem()
            }
            getCursorItemIdx() {
                const e = this.getCursorItem();
                return e ? this._items.getItemIdx(e) : -1
            }
            onSelect(e, t) {
                this._onSelect && this._onSelect({
                    cursor: t,
                    items: this.getSelectedItems(),
                    action: e
                })
            }
            onNavigate(e, t) {
                this._onNavigate && this._onNavigate({
                    cursor: e,
                    cursorIdx: this.getCursorItemIdx(),
                    items: [e],
                    action: t
                })
            }
            onConfirm(e, t) {
                this._onConfirm && this._onConfirm({
                    cursor: e,
                    items: [e],
                    action: t
                })
            }
            onDelete(e, t, o) {
                this._onDelete && this._onDelete({
                    cursor: o,
                    items: e,
                    action: t
                })
            }
            registerMouseAction(e, t) {
                this._mouseActions.set(e, t)
            }
            dispatchMouseEvent(e, t) {
                const o = this._mouseActions.get(e);
                o && o(t)
            }
            delegateClick(e) {
                return t => {
                    if (!t.defaultPrevented) {
                        const o = this._list.contains(t.target);
                        let s = t.target;
                        for (; o && s !== this._list; ) {
                            if (s && this.isListItem(s))
                                return void e(s);
                            s = s && s.parentElement
                        }
                    }
                }
            }
            clear() {
                this.removeSelections(),
                this.removeFocus(),
                this.removeCursor()
            }
            destroy() {
                this.hotkeys.destroy(),
                delete this._list,
                delete this._items,
                delete this._selected,
                delete this._focused,
                delete this._cursor,
                delete this._mouseActions
            }
            _scrollIfNotVisible(e) {
                const t = this._list.getBoundingClientRect()
                  , o = e.getBoundingClientRect()
                  , s = t.top
                  , n = t.bottom
                  , r = o.top
                  , i = o.bottom;
                r < s ? this._list.scrollTop -= s - r : i > n && (this._list.scrollTop += i - n)
            }
            _calcNextItemIdx(e, t) {
                const o = this._items.getLength() - 1;
                let s = e + t;
                if (s < 0) {
                    if (this._cyclicNavigationDisabled)
                        return -1;
                    s = o
                }
                if (s > o) {
                    if (this._cyclicNavigationDisabled)
                        return -1;
                    s = 0
                }
                return s
            }
        }
        class c {
            constructor(e) {
                this._focusNext = () => {
                    if (!this._isValidNavigation())
                        return;
                    const e = this._selection.getCursorItem();
                    this._selection.move(e, n.Next, this._focusItem.bind(this, "down"))
                }
                ,
                this._focusPrev = () => {
                    if (!this._isValidNavigation())
                        return;
                    const e = this._selection.getCursorItem();
                    this._selection.move(e, n.Prev, this._focusItem.bind(this, "up"))
                }
                ,
                this._focusFirst = () => {
                    if (!this._isValidNavigation())
                        return;
                    const e = this._selection.getItemsCollection().getFirstItem()
                      , t = this._selection.getFocusedItem();
                    this._selection.move(t, e, this._focusItem.bind(this, "home"))
                }
                ,
                this._focusLast = () => {
                    if (!this._isValidNavigation())
                        return;
                    const e = this._selection.getItemsCollection().getLastItem()
                      , t = this._selection.getFocusedItem();
                    this._selection.move(t, e, this._focusItem.bind(this, "end"))
                }
                ,
                this._selection = e.selection,
                this._selection.registerMouseAction("click", this._selection.delegateClick(this._focusItem.bind(this, "click"))),
                this._selection.hotkeys.add({
                    desc: "Focus Previous",
                    hotkey: 38,
                    handler: this._focusPrev,
                    element: e.globalHotkeyElement
                }),
                this._selection.hotkeys.add({
                    desc: "Focus Next",
                    hotkey: 40,
                    handler: this._focusNext,
                    element: e.globalHotkeyElement
                }),
                this._selection.hotkeys.add({
                    desc: "Focus Previous",
                    hotkey: r.Modifiers.Shift + 32,
                    handler: this._focusPrev,
                    element: e.globalHotkeyElement
                }),
                this._selection.hotkeys.add({
                    desc: "Focus Next",
                    hotkey: 32,
                    handler: this._focusNext,
                    element: e.globalHotkeyElement
                }),
                this._selection.hotkeys.add({
                    desc: "Focus First",
                    hotkey: 36,
                    handler: this._focusFirst,
                    element: e.globalHotkeyElement
                }),
                this._selection.hotkeys.add({
                    desc: "Focus Last",
                    hotkey: 35,
                    handler: this._focusLast,
                    element: e.globalHotkeyElement
                })
            }
            _focusItem(e, t) {
                this._selection.removeSelections(),
                this._selection.focusItem(t),
                this._selection.setCursor(t),
                this._selection.selectItem(t),
                this._selection.onNavigate(t, e)
            }
            _isValidNavigation() {
                return document.activeElement === document.body || this._selection.getList().contains(document.activeElement)
            }
        }
        class a {
            constructor(e) {
                this._selection = e.selection,
                this._selection.hotkeys.add({
                    hotkey: r.Modifiers.Alt + 13,
                    handler: this._onItemKeyDown.bind(this, "alt+return"),
                    element: e.localHotkeyElement
                }),
                this._selection.hotkeys.add({
                    hotkey: r.Modifiers.Alt + r.Modifiers.Shift + 13,
                    handler: this._onItemKeyDown.bind(this, "alt+return"),
                    element: e.localHotkeyElement
                })
            }
            _onItemKeyDown(e, t) {
                const o = this._selection.getCursorItem();
                o && this._selection.onConfirm(o, e)
            }
        }
        class h {
            constructor(e) {
                this._selection = e.selection,
                this._selection.registerMouseAction("shift+click", this._selection.delegateClick(this._onItemClick.bind(this, "shift+click"))),
                this._selection.hotkeys.add({
                    desc: "Extend Selection Down",
                    hotkey: r.Modifiers.Shift + 40,
                    handler: this._nextRangeItem.bind(this, "shift+down"),
                    element: e.localHotkeyElement
                }),
                this._selection.hotkeys.add({
                    desc: "Extend Selection Up",
                    hotkey: r.Modifiers.Shift + 38,
                    handler: this._prevRangeItem.bind(this, "shift+up"),
                    element: e.localHotkeyElement
                })
            }
            _nextRangeItem(e) {
                const t = this._selection.getItemsCollection()
                  , o = this._selection.getCursorItem();
                this._selection.getCursorItemIdx() !== t.getLength() - 1 && this._selection.move(o, n.Next, this._addItemToRange(e, ( (e, t) => e < t)))
            }
            _prevRangeItem(e) {
                const t = this._selection.getCursorItem();
                0 !== this._selection.getCursorItemIdx() && this._selection.move(t, n.Prev, this._addItemToRange(e, ( (e, t) => e > t)))
            }
            _onItemClick(e, t) {
                const o = this._selection.getItemsCollection().getItems()
                  , s = this._getRangeInfo(t);
                this._selection.removeSelections();
                for (let e = s.start; e <= s.end; e++)
                    this._selection.isSelected(o[e]) || this._selection.selectItem(o[e]);
                this._selection.setCursor(t),
                this._selection.onSelect(e, t)
            }
            _getRangeInfo(e) {
                const t = this._selection.getItemsCollection().getItemIdx(e)
                  , o = this._selection.getFocusedItemIdx()
                  , s = -1 !== o ? o : 0;
                return t > s ? {
                    start: s,
                    end: t
                } : {
                    start: t,
                    end: s
                }
            }
            _addItemToRange(e, t) {
                return (o, s) => {
                    const n = this._selection.getItemsCollection().getItemIdx(o)
                      , r = this._selection.getFocusedItemIdx();
                    0 === this._selection.getSelectedCollection().getLength() && s && this._selection.selectItem(s),
                    t(r, n) ? this._selection.selectItem(o) : s && this._selection.unselectItem(s),
                    this._selection.setCursor(o),
                    this._selection.onSelect(e, o)
                }
            }
        }
        class u {
            constructor(e) {
                this._selection = e.selection,
                this._selection.registerMouseAction("ctrl+click", this._selection.delegateClick(this._onItemClick.bind(this, "ctrl+click"))),
                this._selection.registerMouseAction("meta+click", this._selection.delegateClick(this._onItemClick.bind(this, "meta+click"))),
                this._selection.hotkeys.add({
                    hotkey: r.Modifiers.Mod + 65,
                    handler: this._selectAll.bind(this, "ctrl+a"),
                    element: e.localHotkeyElement
                }),
                this._selection.hotkeys.add({
                    hotkey: 27,
                    handler: this._unselectAll.bind(this, "esc"),
                    element: e.localHotkeyElement
                })
            }
            _onItemClick(e, t) {
                const o = this._selection.getFocusedItem()
                  , s = this._selection.getSelectedCollection().getLength();
                o && 0 === s && this._selection.selectItem(o),
                this._toggleSelection(t),
                this._selection.onSelect(e, t)
            }
            _toggleSelection(e) {
                this._selection.isSelected(e) ? this._selection.unselectItem(e) : this._selection.selectItem(e),
                this._selection.setCursor(e)
            }
            _selectAll(e) {
                this._selection.getItemsCollection().getItems().forEach((e => this._selection.selectItem(e))),
                this._selection.onSelect(e)
            }
            _unselectAll(e) {
                this._selection.removeSelections();
                const t = this._selection.getFocusedItem();
                t && this._selection.setCursor(t),
                this._selection.onSelect(e)
            }
        }
        class d {
            constructor(e) {
                this._selection = e.selection,
                this._selection.hotkeys.add({
                    desc: "Delete",
                    hotkey: 46,
                    handler: this._delete.bind(this, "del"),
                    element: e.globalHotkeyElement
                })
            }
            _delete(e) {
                const t = this._selection.getSelectedItems()
                  , o = this._selection.getCursorItem();
                o && t.length > 0 ? this._selection.onDelete(t, e, o) : o && this._selection.onDelete([o], e, o)
            }
        }
        var m = o(638456);
        class p {
            constructor(e) {
                this._dispatchClick = e => {
                    e.ctrlKey && !(0,
                    m.isMac)() ? this._selection.dispatchMouseEvent("ctrl+click", e) : e.shiftKey ? this._selection.dispatchMouseEvent("shift+click", e) : e.metaKey && (0,
                    m.isMac)() ? this._selection.dispatchMouseEvent("meta+click", e) : this._selection.dispatchMouseEvent("click", e)
                }
                ,
                this._onSelect = e => {
                    this._collectKeys(),
                    this._opts.onSelect && this._opts.onSelect(e)
                }
                ,
                this._onNavigate = e => {
                    this._collectKeys(),
                    this._opts.onNavigate && this._opts.onNavigate(e)
                }
                ,
                this._disableSelection = () => {
                    this._list.onselectstart = () => !1
                }
                ,
                this._enableSelection = () => {
                    this._list.onselectstart = () => null
                }
                ,
                this._opts = e,
                this._list = e.list,
                this._selection = new l({
                    list: e.list,
                    listItemClass: e.listItemClass,
                    selectedListItemClass: e.selectedListItemClass,
                    focusedListItemClass: e.focusedListItemClass,
                    onSelect: this._onSelect,
                    onNavigate: this._onNavigate,
                    onConfirm: e.onConfirm,
                    onDelete: e.onDelete,
                    modes: e.modes,
                    globalHotkeys: Boolean(e.globalHotkeys),
                    cyclicNavigationDisabled: Boolean(e.cyclicNavigationDisabled)
                }),
                this._selectedKeys = [],
                this._focusedKey = null,
                this._cursorKey = null,
                this.activate(),
                this._collectKeys()
            }
            activate() {
                this._list.addEventListener("click", this._dispatchClick),
                this._list.addEventListener("keydown", this._disableSelection),
                this._list.addEventListener("keyup", this._enableSelection),
                this._selection.hotkeys.promote()
            }
            deactivate() {
                this._list.removeEventListener("click", this._dispatchClick),
                this._list.removeEventListener("keydown", this._disableSelection),
                this._list.removeEventListener("keyup", this._enableSelection)
            }
            focusItem(e) {
                this._selection.isSelected(e) || this._selection.isFocused(e) || (this._selection.removeSelections(),
                this._selection.focusItem(e))
            }
            removeFocus() {
                this._selection.removeFocus()
            }
            restore() {
                if (this._opts.getNodeKey) {
                    const e = this._selection.getItemsCollection().getItems()
                      , t = this._opts.getNodeKey;
                    e.forEach((e => {
                        const o = t(e);
                        this._focusedKey === o && this._selection.focusItem(e),
                        this._cursorKey === o && this._selection.setCursor(e),
                        this._selectedKeys.includes(o) && this._selection.selectItem(e)
                    }
                    ))
                }
            }
            getSelectedKeys() {
                return this._collectKeys(),
                this._selectedKeys
            }
            getFocusedKey() {
                return this._collectKeys(),
                this._focusedKey || null
            }
            clear() {
                this._selection.clear()
            }
            destroy() {
                this.deactivate(),
                this._selection.destroy(),
                delete this._selection,
                delete this._list,
                delete this._opts
            }
            _collectKeys() {
                if (this._opts.getNodeKey) {
                    const e = this._opts.getNodeKey
                      , t = this._selection.getSelectedItems()
                      , o = this._selection.getFocusedItem()
                      , s = this._selection.getCursorItem();
                    this._selectedKeys = t.map((t => e(t))),
                    this._focusedKey = o ? e(o) : null,
                    this._cursorKey = s ? e(s) : null
                }
            }
        }
        function v(e) {
            return new p(Object.assign({}, {
                modes: [c, a, d, u, h]
            }, e))
        }
    }
    ,
    406103: (e, t, o) => {
        "use strict";
        o.d(t, {
            isIDCExchange: () => n
        });
        var s = o(184026);
        function n(e, t=!1) {
            if (e && e.startsWith("exchange-"))
                return function(e, t=!1) {
                    const o = window.pro?.getProduct(e);
                    return !(void 0 === o || !(0,
                    s.isProductDefined)(o) || (t ? !o.idc_service_codes_delay : !o.idc_service_codes))
                }(e, t);
            const o = (e || "").toLowerCase();
            return window.pro?.getIDCExchanges(t)?.includes(o) ?? !1
        }
    }
    ,
    31214: (e, t, o) => {
        "use strict";
        o.d(t, {
            reloginOrGoPro: () => a,
            runOrGoPro: () => c,
            runOrGoProWithoutSync: () => l
        });
        var s = o(526225)
          , n = o(707934)
          , r = o(456335)
          , i = o(678708);
        function l(e, t, o, s) {
            (0,
            r.featureCheck)(t, s) ? e() : (0,
            n.createGoProDialog)({
                ...o,
                runOrGoproWithFeatureCheckOptions: {
                    featureCheck: () => (0,
                    r.featureCheck)(t, s),
                    signInSuccess: e
                }
            })
        }
        async function c(e, t, o, n={}) {
            const r = window.is_authenticated;
            window.is_authenticated && window.user.is_pro && await (0,
            s.syncUserData)("gopro"),
            r === window.is_authenticated ? l(e, t, o, n) : (0,
            i.showSignModal)({
                source: o.goproSource,
                feature: o.feature,
                signinSuccess: e
            })
        }
        async function a(e) {
            const t = window.is_authenticated;
            window.is_authenticated && window.user.is_pro && await (0,
            s.syncUserData)("gopro"),
            t === window.is_authenticated ? (0,
            n.createGoProDialog)(e) : (0,
            i.showSignModal)({
                source: e.goproSource,
                feature: e.feature
            })
        }
    }
    ,
    76107: (e, t, o) => {
        "use strict";
        o.d(t, {
            getCSSProperty: () => l,
            getCSSPropertyNumericValue: () => c,
            getContentWidth: () => r,
            getScrollbarWidth: () => s,
            matchMediaMinMax: () => n,
            setStyle: () => i
        });
        const s = ( () => {
            let e;
            return () => {
                if (void 0 === e) {
                    const t = document.createElement("div")
                      , o = t.style;
                    o.visibility = "hidden",
                    o.width = "100px",
                    o.msOverflowStyle = "scrollbar",
                    document.body.appendChild(t);
                    const s = t.offsetWidth;
                    t.style.overflow = "scroll";
                    const n = document.createElement("div");
                    n.style.width = "100%",
                    t.appendChild(n);
                    const r = n.offsetWidth;
                    t.parentNode?.removeChild(t),
                    e = s - r
                }
                return e
            }
        }
        )();
        function n(e, t) {
            return t === 1 / 0 ? window.matchMedia(`(min-width: ${e}px)`) : window.matchMedia(`(min-width: ${e}px) and (max-width: ${t}px)`)
        }
        function r(e) {
            return c(e, "width") - c(e, "padding-left") - c(e, "padding-right")
        }
        function i(e, t, o) {
            null !== e && e.style.setProperty(t, o)
        }
        function l(e, t) {
            return getComputedStyle(e, null).getPropertyValue(t)
        }
        function c(e, t) {
            return parseInt(l(e, t))
        }
    }
    ,
    263361: (e, t, o) => {
        "use strict";
        o.d(t, {
            useRovingTabindexElement: () => i
        });
        var s = o(50959)
          , n = o(267521)
          , r = o(774218);
        function i(e, t=[]) {
            const [o,i] = (0,
            s.useState)(!1)
              , l = (0,
            n.useFunctionalRefObject)(e);
            return (0,
            r.useIsomorphicLayoutEffect)(( () => {
                const e = l.current;
                if (null === e)
                    return;
                const t = e => {
                    switch (e.type) {
                    case "roving-tabindex:main-element":
                        i(!0);
                        break;
                    case "roving-tabindex:secondary-element":
                        i(!1)
                    }
                }
                ;
                return e.addEventListener("roving-tabindex:main-element", t),
                e.addEventListener("roving-tabindex:secondary-element", t),
                () => {
                    e.removeEventListener("roving-tabindex:main-element", t),
                    e.removeEventListener("roving-tabindex:secondary-element", t)
                }
            }
            ), t),
            [l, o ? 0 : -1]
        }
    }
    ,
    948019: (e, t, o) => {
        "use strict";
        o.d(t, {
            ContextMenuContext: () => s
        });
        const s = o(50959).createContext(null)
    }
    ,
    582997: (e, t, o) => {
        "use strict";
        o.d(t, {
            Hint: () => l
        });
        var s = o(50959)
          , n = o(497754)
          , r = o.n(n)
          , i = o(447429);
        function l(e) {
            const {text: t="", className: o} = e;
            return s.createElement("span", {
                className: r()(i.shortcut, o)
            }, t)
        }
    }
    ,
    886004: (e, t, o) => {
        "use strict";
        o.d(t, {
            ContextMenuItem: () => p
        });
        var s = o(50959)
          , n = o(497754)
          , r = o.n(n)
          , i = o(79205)
          , l = o(265005)
          , c = o(302478)
          , a = o(582997)
          , h = o(339750)
          , u = o(379978)
          , d = o(460925)
          , m = o(405264);
        function p(e) {
            const {className: t, isTitle: o, isLoading: n, isHovered: p, active: v, checkable: g, disabled: f, checked: _, icon: w, iconChecked: k, hint: y, subItems: C, label: x, styledLabel: b, onClick: M, children: E, toolbox: I, jsxLabel: S, size: N="normal"} = e
              , L = (0,
            s.useContext)(c.EmptyIconsContext)
              , D = !!C.length;
            return n ? s.createElement("li", {
                className: r()(t, m.item, m.loading, m[N])
            }, s.createElement(l.Loader, null)) : s.createElement("li", {
                className: r()(t, m.item, m.interactive, o && m.title, f && m.disabled, p && m.hovered, v && m.active, L && m.emptyIcons, m[N]),
                onClick: M
            }, s.createElement(i.Icon, {
                className: r()(m.icon),
                icon: function() {
                    if (g && _)
                        return k || w || h;
                    return w
                }()
            }), s.createElement("span", {
                className: r()(m.label)
            }, !S && b ? b.map(( ({text: e, ...t}, o) => s.createElement("span", {
                key: o,
                style: t
            }, e))) : S ?? x), !!I && s.createElement(i.Icon, {
                onClick: function() {
                    I && I.action()
                },
                className: m.remove,
                icon: d
            }), !D && y && s.createElement(a.Hint, {
                className: m.shortcut,
                text: y
            }), D && s.createElement(i.Icon, {
                className: m.nested,
                icon: u
            }), E)
        }
    }
    ,
    67812: (e, t, o) => {
        "use strict";
        o.d(t, {
            ContextMenuList: () => p
        });
        var s = o(50959)
          , n = o(868745);
        function r(e) {
            return s.createElement("li", {
                className: n.separator
            })
        }
        var i = o(886004)
          , l = o(125226)
          , c = o(762852)
          , a = o(224743);
        const h = (0,
        l.isFeatureEnabled)("force_disable_jsx_menu_items_rendering");
        function u(e) {
            const t = h ? e.action : e.action.custom() ?? e.action
              , [o,n] = (0,
            s.useState)(( () => t.getState()))
              , [r,l] = (0,
            s.useState)(!1)
              , u = !!o.subItems.length
              , d = u && r;
            return (0,
            s.useEffect)(( () => {
                const e = () => n(t.getState());
                return t.onUpdate().subscribe(null, e),
                () => {
                    t.onUpdate().unsubscribe(null, e)
                }
            }
            ), []),
            s.createElement(i.ContextMenuItem, {
                ...o,
                onClick: function(e) {
                    if (o.disabled || e.defaultPrevented)
                        return;
                    if (u)
                        return void l(!0);
                    o.doNotCloseOnClick || (0,
                    a.globalCloseMenu)();
                    t.execute()
                },
                isLoading: o.loading,
                isHovered: d
            }, d && s.createElement(c.Drawer, {
                onClose: m
            }, s.createElement(p, {
                items: o.subItems,
                parentAction: t,
                closeNested: m
            })));
            function m(e) {
                e && e.preventDefault(),
                l(!1)
            }
        }
        var d = o(302478)
          , m = o(366493);
        function p(e) {
            const {items: t, parentAction: o, closeNested: n} = e
              , l = !Boolean(o) && t.every((e => !Boolean("separator" !== e.type && (e.getState().icon || e.getState().checkable))));
            return s.createElement(d.EmptyIconsContext.Provider, {
                value: l
            }, s.createElement("ul", null, o && s.createElement(s.Fragment, null, s.createElement(i.ContextMenuItem, {
                label: o.getState().label,
                isTitle: !0,
                active: !1,
                disabled: !1,
                subItems: [],
                checkable: !1,
                checked: !1,
                doNotCloseOnClick: !1,
                icon: m,
                onClick: n
            }), s.createElement(r, null)), t.map((e => {
                switch (e.type) {
                case "action":
                    return s.createElement(u, {
                        key: e.id,
                        action: e
                    });
                case "separator":
                    return s.createElement(r, {
                        key: e.id
                    })
                }
            }
            ))))
        }
    }
    ,
    302478: (e, t, o) => {
        "use strict";
        o.d(t, {
            EmptyIconsContext: () => s
        });
        const s = o(50959).createContext(!1)
    }
    ,
    332585: (e, t, o) => {
        "use strict";
        o.d(t, {
            DrawerContext: () => i,
            DrawerManager: () => r
        });
        var s = o(50959)
          , n = o(575658);
        class r extends s.PureComponent {
            constructor(e) {
                super(e),
                this._isBodyFixed = !1,
                this._addDrawer = e => {
                    this.setState((t => ({
                        stack: [...t.stack, e]
                    })))
                }
                ,
                this._removeDrawer = e => {
                    this.setState((t => ({
                        stack: t.stack.filter((t => t !== e))
                    })))
                }
                ,
                this.state = {
                    stack: []
                }
            }
            componentDidUpdate(e, t) {
                !t.stack.length && this.state.stack.length && ((0,
                n.setFixedBodyState)(!0),
                this._isBodyFixed = !0),
                t.stack.length && !this.state.stack.length && this._isBodyFixed && ((0,
                n.setFixedBodyState)(!1),
                this._isBodyFixed = !1)
            }
            componentWillUnmount() {
                this.state.stack.length && this._isBodyFixed && (0,
                n.setFixedBodyState)(!1)
            }
            render() {
                return s.createElement(i.Provider, {
                    value: {
                        addDrawer: this._addDrawer,
                        removeDrawer: this._removeDrawer,
                        currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null
                    }
                }, this.props.children)
            }
        }
        const i = s.createContext(null)
    }
    ,
    762852: (e, t, o) => {
        "use strict";
        o.d(t, {
            Drawer: () => d
        });
        var s = o(50959)
          , n = o(650151)
          , r = o(497754)
          , i = o(900608)
          , l = o(707533)
          , c = o(332585)
          , a = o(320116)
          , h = o(150881)
          , u = o(276773);
        function d(e) {
            const {position: t="Bottom", onClose: o, children: h, reference: d, className: p, theme: v=u} = e
              , g = (0,
            n.ensureNotNull)((0,
            s.useContext)(c.DrawerContext))
              , [f] = (0,
            s.useState)(( () => (0,
            i.randomHash)()))
              , _ = (0,
            s.useRef)(null)
              , w = (0,
            s.useContext)(a.CloseDelegateContext);
            return (0,
            s.useLayoutEffect)(( () => ((0,
            n.ensureNotNull)(_.current).focus({
                preventScroll: !0
            }),
            w.subscribe(g, o),
            g.addDrawer(f),
            () => {
                g.removeDrawer(f),
                w.unsubscribe(g, o)
            }
            )), []),
            s.createElement(l.Portal, null, s.createElement("div", {
                ref: d,
                className: r(u.wrap, u[`position${t}`])
            }, f === g.currentDrawer && s.createElement("div", {
                className: u.backdrop,
                onClick: o
            }), s.createElement(m, {
                className: r(v.drawer, u[`position${t}`], p),
                ref: _,
                "data-name": e["data-name"],
                "data-qa-id": e["data-qa-id"]
            }, h)))
        }
        const m = (0,
        s.forwardRef)(( (e, t) => {
            const {className: o, ...n} = e;
            return s.createElement(h.TouchScrollContainer, {
                className: r(u.drawer, o),
                tabIndex: -1,
                ref: t,
                ...n
            })
        }
        ))
    }
    ,
    320116: (e, t, o) => {
        "use strict";
        o.d(t, {
            CloseDelegateContext: () => r
        });
        var s = o(50959)
          , n = o(224743);
        const r = s.createContext(n.globalCloseDelegate)
    }
    ,
    670797: (e, t, o) => {
        "use strict";
        o.d(t, {
            Slot: () => s.Slot,
            SlotContext: () => s.SlotContext
        });
        var s = o(692822)
    }
    ,
    212363: e => {
        "use strict";
        var t = [{
            d: "E-Mini S&P 500",
            t: "ES"
        }, {
            d: "E-Mini Nasdaq 100",
            t: "NQ"
        }, {
            d: "Gold",
            t: "GC"
        }, {
            d: "Silver",
            t: "SI"
        }, {
            d: "Crude Oil WTI",
            t: "CL"
        }, {
            d: "Natural Gas",
            t: "NG"
        }, {
            d: "Australian Dollar",
            t: "6A"
        }, {
            d: "Australian Dollar (Floor)",
            t: "AD"
        }, {
            d: "Euro FX",
            t: "6E"
        }, {
            d: "Euro FX (Floor)",
            t: "EC"
        }, {
            d: "Corn",
            t: "ZC"
        }, {
            d: "Corn (Floor)",
            t: "C"
        }, {
            d: "Eurodollar",
            t: "GE"
        }, {
            d: "Eurodollar (Floor)",
            t: "ED"
        }]
          , o = function() {
            var e = [{
                pattern: "(",
                ctor: r
            }, {
                pattern: ")",
                ctor: i
            }, {
                pattern: "+",
                ctor: c
            }, {
                pattern: "-",
                ctor: a
            }, {
                pattern: "*",
                ctor: h
            }, {
                pattern: "/",
                ctor: u
            }, {
                pattern: "^",
                ctor: d
            }, {
                pattern: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
                ctor: g
            }, {
                pattern: /\./,
                ctor: w
            }, {
                pattern: /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!|:.&]*|'.+?'/,
                ctor: v
            }, {
                pattern: /'[^']*/,
                ctor: _
            }, {
                pattern: /[\0-\x20\s]+/,
                ctor: n
            }];
            function o(e, t) {
                var o = function() {};
                return o.prototype = t.prototype,
                e.prototype = new o,
                e
            }
            function s() {}
            function n(e) {
                this.value = e
            }
            function r() {}
            function i() {}
            function l() {}
            function c() {}
            function a() {}
            function h() {}
            function u() {}
            function d() {}
            s.prototype.toString = function() {
                return this.value
            }
            ,
            o(n, s),
            o(r, s),
            r.prototype.value = "(",
            o(i, s),
            i.prototype.value = ")",
            o(l, s),
            o(c, l),
            c.prototype.value = "+",
            c.prototype.precedence = 0,
            c.prototype.commutative = !0,
            o(a, l),
            a.prototype.value = "-",
            a.prototype.precedence = 0,
            a.prototype.commutative = !1,
            o(h, l),
            h.prototype.value = "*",
            h.prototype.precedence = 1,
            h.prototype.commutative = !0,
            o(u, l),
            u.prototype.value = "/",
            u.prototype.precedence = 1,
            u.prototype.commutative = !1,
            o(d, l),
            d.prototype.value = "^",
            d.prototype.precedence = 2,
            d.prototype.commutative = !1;
            var m = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i
              , p = /[+\-/*]/;
            function v(e) {
                this.value = e
            }
            function g(e) {
                this.value = e
            }
            function f(e) {
                this.value = e
            }
            function _() {
                v.apply(this, arguments)
            }
            function w() {
                g.apply(this, arguments)
            }
            o(v, s),
            v.prototype.toString = function() {
                if (this.hasOwnProperty("_ticker")) {
                    var e = p.test(this._ticker) ? "'" : "";
                    return e + (this._exchange ? this._exchange + ":" : "") + this._ticker + e
                }
                return this.value
            }
            ,
            v.prototype.parse = function() {
                var e = m.exec(this.value);
                e[1] && (this._exchange = e[1]),
                this._ticker = e[2]
            }
            ,
            v.prototype.parseAsFutures = function() {
                this.hasOwnProperty("_ticker") || this.parse();
                for (var e = function(e) {
                    return t.some((function(t) {
                        return t.t === e
                    }
                    ))
                }, o = 2; o >= 1; --o) {
                    var s = this._ticker.slice(0, o);
                    if (e(s)) {
                        this._root = s,
                        this._contract = this._ticker.slice(o);
                        break
                    }
                }
            }
            ,
            v.prototype.exchange = function(e) {
                if (this.hasOwnProperty("_ticker") || this.parse(),
                !(arguments.length > 0))
                    return this._exchange;
                null == e ? delete this._exchange : this._exchange = e + ""
            }
            ,
            v.prototype.ticker = function(e) {
                if (this.hasOwnProperty("_ticker") || this.parse(),
                !(arguments.length > 0))
                    return this._ticker;
                null == e ? delete this._ticker : this._ticker = e + "",
                delete this._root,
                delete this._contract
            }
            ,
            v.prototype.root = function(e) {
                if (this.hasOwnProperty("_root") || this.parseAsFutures(),
                !(arguments.length > 0))
                    return this._root;
                null == e ? delete this._root : (this._root = e + "",
                this._root && (this._ticker = this._root + (this._contract || "")))
            }
            ,
            v.prototype.contract = function(e) {
                if (this.hasOwnProperty("_contract") || this.parseAsFutures(),
                !(arguments.length > 0))
                    return this._root;
                null == e ? delete this._contract : (this._contract = e + "",
                this._root && (this._ticker = this._root + this._contract))
            }
            ,
            o(g, s),
            g.prototype.toString = function() {
                return this.hasOwnProperty("_normalizedValue") ? this._normalizedValue : this.value
            }
            ,
            g.prototype.parse = function() {
                this._normalizedValue = this.value.replace(/^0+|\.0*$/g, "").replace(/(\.\d*?)0+$/, "$1").replace(/^(\.|$)/, "0$1")
            }
            ,
            f.prototype.toString = function() {
                return this.value
            }
            ,
            o(_, v),
            _.prototype.isIncomplete = !0,
            _.prototype.incompleteSuggest = function() {
                if ("'" !== this.value)
                    return String("'")
            }
            ,
            o(w, g),
            w.prototype.isIncomplete = !0;
            var k = new RegExp(e.map((function(e) {
                return "(" + ("string" == typeof e.pattern ? e.pattern.replace(/[\^$()[\]{}*+?|\\]/g, "\\$&") : e.pattern.source) + ")"
            }
            )).concat(".").join("|"),"g");
            function y(t, o) {
                var s, r = [];
                e: for (; s = k.exec(t); ) {
                    for (var i = e.length; i--; )
                        if (s[i + 1]) {
                            if (e[i].ctor) {
                                var l = new e[i].ctor(s[i + 1]);
                                l._offset = s.index,
                                r.push(l)
                            }
                            continue e
                        }
                    var c = new f(s[0]);
                    c._offset = s.index,
                    r.push(c)
                }
                if (o && o.recover) {
                    var a;
                    for (i = r.length; i--; ) {
                        var h = r[i];
                        if (h instanceof g || h instanceof v) {
                            if (void 0 !== a) {
                                var u = new v("")
                                  , d = r.splice(i, a - i + 1, u);
                                u.value = d.map((function(e) {
                                    return e.value
                                }
                                )).join("")
                            }
                            a = i
                        } else
                            h instanceof n || (a = void 0)
                    }
                }
                return r
            }
            function C(e) {
                for (var t = [], o = 0; o < e.length; o++)
                    e[o]instanceof n || t.push(e[o]);
                return t
            }
            function x(e) {
                e = C(e);
                for (var t, o = [], s = [], n = 0; n < e.length; n++) {
                    var c = e[n];
                    if (c instanceof l)
                        s.length && s[s.length - 1].minPrecedence > c.precedence && (s[s.length - 1].minPrecedence = c.precedence);
                    else if (c instanceof r)
                        s.push(t = {
                            minPrecedence: 1 / 0,
                            openBraceIndex: n
                        });
                    else if (c instanceof i) {
                        var a = e[(t = s.pop()).openBraceIndex - 1]
                          , h = e[n + 1];
                        h instanceof l && !(h.precedence <= t.minPrecedence) || !(!(a instanceof l) || a.precedence < t.minPrecedence || a.precedence === t.minPrecedence && a.commutative) || (o.unshift(t.openBraceIndex),
                        o.push(n),
                        s.length && s[s.length - 1].minPrecedence > t.minPrecedence && (s[s.length - 1].minPrecedence = t.minPrecedence))
                    }
                }
                for (n = o.length; n--; )
                    e.splice(o[n], 1);
                return e
            }
            function b(e) {
                if ("string" != typeof e)
                    throw new TypeError("expression must be a string");
                return (e = y(e)).filter((function(e) {
                    return e instanceof v
                }
                )).map((function(e) {
                    return e.exchange()
                }
                )).filter((function(e) {
                    return e
                }
                ))
            }
            function M(e) {
                return 1 !== (e = b(e)).length ? null : e[0]
            }
            function E(e, t) {
                return (e = b(e)).some((function(e) {
                    return t.includes((e || "").toUpperCase())
                }
                ))
            }
            function I(e) {
                return e.join("")
            }
            return {
                tokenize: y,
                validate: function(e) {
                    for (var t = "init", o = "var", s = t, c = {
                        warnings: [],
                        errors: [],
                        isEmpty: !0
                    }, a = [], h = 0; h < e.length; h++) {
                        if (!((d = e[h])instanceof n)) {
                            if (delete c.isEmpty,
                            d.isIncomplete) {
                                var u = {
                                    status: "incomplete",
                                    reason: "incomplete_token",
                                    offset: d._offset,
                                    token: d
                                };
                                if (d.incompleteSuggest && (u.recover = {
                                    append: d.incompleteSuggest()
                                }),
                                c.warnings.push(u),
                                h !== e.length - 1) {
                                    u.status = "error";
                                    continue
                                }
                            }
                            if (d instanceof v || d instanceof g) {
                                if (s === o) {
                                    c.errors.push({
                                        status: "error",
                                        reason: "unexpected_token",
                                        offset: d._offset,
                                        token: d
                                    });
                                    continue
                                }
                                s = o
                            } else if (d instanceof l) {
                                if (s !== o) {
                                    c.errors.push({
                                        status: "error",
                                        reason: "unexpected_token",
                                        offset: d._offset,
                                        token: d
                                    });
                                    continue
                                }
                                s = "operator"
                            } else if (d instanceof r) {
                                if (s === o) {
                                    c.errors.push({
                                        status: "error",
                                        reason: "unexpected_token",
                                        offset: d._offset,
                                        token: d
                                    });
                                    continue
                                }
                                a.push(d),
                                s = t
                            } else if (d instanceof i) {
                                if (s !== o) {
                                    c.errors.push({
                                        status: "error",
                                        reason: "unexpected_token",
                                        offset: d._offset,
                                        token: d
                                    });
                                    continue
                                }
                                a.pop() || c.errors.push({
                                    status: "error",
                                    reason: "unbalanced_brace",
                                    offset: d._offset,
                                    token: d,
                                    recover: {
                                        prepend: new r
                                    }
                                }),
                                s = o
                            } else
                                d instanceof f && c.errors.push({
                                    status: "error",
                                    reason: "unparsed_entity",
                                    offset: d._offset,
                                    token: d
                                })
                        }
                    }
                    for (c.braceBalance = a.length,
                    s !== o && c.warnings.push({
                        status: "incomplete"
                    }); a.length; ) {
                        var d;
                        u = {
                            status: "incomplete",
                            reason: "unbalanced_brace",
                            offset: (d = a.pop())._offset,
                            token: d
                        };
                        s === o && (u.recover = {
                            append: new i
                        }),
                        c.warnings.push(u)
                    }
                    return c.currentState = s,
                    0 === c.warnings.length && delete c.warnings,
                    0 === c.errors.length && delete c.errors,
                    c
                },
                factorOutBraces: x,
                normalizeTokens: function(e) {
                    for (var t = 0; t < e.length; t++)
                        e[t].parse && e[t].parse();
                    return e
                },
                flip: function(e) {
                    var t = function(e) {
                        for (var t, o = 0, s = 1, c = 2, a = 3, h = o, d = 0, m = 0; m < e.length; m++) {
                            var p = e[m];
                            if (!(p instanceof n))
                                switch (h) {
                                case o:
                                    if (!(p instanceof g && 1 == +p.value))
                                        return !1;
                                    h = s;
                                    break;
                                case s:
                                    if (!(h === s && p instanceof u))
                                        return !1;
                                    h = c,
                                    t = m + 1;
                                    break;
                                case c:
                                    if (p instanceof r)
                                        h = a,
                                        d = 1;
                                    else if (p instanceof l)
                                        return !1;
                                    break;
                                case a:
                                    p instanceof r ? d++ : p instanceof i && --d <= 0 && (h = c)
                                }
                        }
                        return e.slice(t)
                    }(e);
                    return x(t || [new g("1"), new u, new r].concat(e).concat(new i))
                },
                hasBatsSymbols: function(e) {
                    return E(e, ["BATS"])
                },
                hasEodSymbols: function(e) {
                    return (e = M(e)) && -1 !== e.toUpperCase().indexOf("_EOD")
                },
                hasChxjpySymbols: function(e) {
                    return E(e, ["CHXJPY"])
                },
                hasFreeDelaySymbols: function(e) {
                    return E(e, pro.getProductsByType(pro.PRODUCT_TYPES.exchange).map((function(e) {
                        return e.exchange.toUpperCase() + "_DLY"
                    }
                    )))
                },
                getExchange: M,
                getExchanges: b,
                isExchange: function(e, t) {
                    return !!(e = M(e)) && e.substring(0, t.length) === t
                },
                SymbolToken: v,
                IncompleteSymbolToken: _,
                NumberToken: g,
                BinaryOperatorToken: l,
                OpenBraceToken: r,
                CloseBraceToken: i,
                ticker: function(e) {
                    return new v(e).ticker()
                },
                shortName: function(e) {
                    if ("string" != typeof e)
                        throw new TypeError("expression must be a string");
                    var t = x(C(y(e)));
                    return t.forEach((function(e) {
                        e instanceof v && e.exchange(null)
                    }
                    )),
                    I(t)
                },
                normalize: function(e) {
                    if ("string" != typeof e)
                        throw new TypeError("expression must be a string");
                    return I(x(C(y(e))))
                }
            }
        }();
        e.exports = o
    }
    ,
    432438: (e, t, o) => {
        "use strict";
        function s(e) {
            e.dispatchEvent(new CustomEvent("roving-tabindex:main-element"))
        }
        function n(e) {
            e.dispatchEvent(new CustomEvent("roving-tabindex:secondary-element"))
        }
        o.d(t, {
            becomeMainElement: () => s,
            becomeSecondaryElement: () => n
        })
    }
    ,
    887208: (e, t, o) => {
        "use strict";
        o.d(t, {
            mapKeyCodeToDirection: () => a,
            navigationOrderComparator: () => r,
            queryFocusableElements: () => l,
            queryTabbableElements: () => i,
            updateTabIndexes: () => c
        });
        var s = o(969680)
          , n = o(355734);
        function r(e, t) {
            return e === t ? 0 : e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
        }
        function i(e) {
            return Array.from(e.querySelectorAll('button:not([disabled]):not([aria-disabled]):not([tabindex="-1"]), [tabindex]:not([disabled]):not([aria-disabled]):not([tabindex="-1"])')).filter((0,
            n.createScopedVisibleElementFilter)(e))
        }
        function l(e) {
            return Array.from(e.querySelectorAll('button:not([disabled]):not([aria-disabled="true"]):not([aria-disabled=""]), [tabindex]:not([disabled]):not([aria-disabled="true"]):not([aria-disabled=""])')).filter((0,
            n.createScopedVisibleElementFilter)(e))
        }
        function c() {
            window.dispatchEvent(new CustomEvent("keyboard-navigation-activation",{
                bubbles: !0
            }))
        }
        function a(e) {
            const t = (0,
            s.isRtl)();
            switch (e) {
            case 38:
                return "blockPrev";
            case 40:
                return "blockNext";
            case 37:
                return t ? "inlineNext" : "inlinePrev";
            case 39:
                return t ? "inlinePrev" : "inlineNext";
            default:
                return null
            }
        }
    }
    ,
    608571: (e, t, o) => {
        "use strict";
        o.d(t, {
            availableDateFormats: () => w,
            dateFormatFunctions: () => f,
            defaultDateFormat: () => k,
            getDateFormatWithWeekday: () => _
        });
        var s = o(444372)
          , n = o(39654)
          , r = o(909456);
        const i = {
            1: () => s.t(null, void 0, o(562310)),
            2: () => s.t(null, void 0, o(302507)),
            3: () => s.t(null, void 0, o(92767)),
            4: () => s.t(null, void 0, o(227072)),
            5: () => s.t(null, {
                context: "short"
            }, o(13132)),
            6: () => s.t(null, void 0, o(800429)),
            7: () => s.t(null, void 0, o(853786)),
            8: () => s.t(null, void 0, o(546450)),
            9: () => s.t(null, void 0, o(806816)),
            10: () => s.t(null, void 0, o(912179)),
            11: () => s.t(null, void 0, o(526899)),
            12: () => s.t(null, void 0, o(532084))
        }
          , l = {
            1: () => s.t(null, void 0, o(914568)),
            2: () => s.t(null, void 0, o(913534)),
            3: () => s.t(null, void 0, o(914530)),
            4: () => s.t(null, void 0, o(903762))
        }
          , c = (e, t) => (t ? e.getMonth() : e.getUTCMonth()) + 1
          , a = (e, t) => t ? e.getFullYear() : e.getUTCFullYear()
          , h = (e, t) => e.toLocaleDateString(window.language ? (0,
        n.getIsoLanguageCodeFromLanguage)(window.language) : void 0, {
            weekday: "short",
            timeZone: "local" === t ? void 0 : t
        })
          , u = (e, t) => l[( (e, t) => Math.floor((c(e, t) - 1) / 3) + 1)(e, t)]()
          , d = (e, t) => (0,
        r.numberToStringWithLeadingZero)(( (e, t) => t ? e.getDate() : e.getUTCDate())(e, t), 2)
          , m = (e, t) => i[c(e, t)]()
          , p = (e, t) => (0,
        r.numberToStringWithLeadingZero)(c(e, t), 2)
          , v = (e, t) => (0,
        r.numberToStringWithLeadingZero)(a(e, t) % 100, 2)
          , g = (e, t) => (0,
        r.numberToStringWithLeadingZero)(a(e, t), 4)
          , f = {
            "qq 'yy": (e, t) => `${u(e, t)} '${v(e, t)}`,
            "qq yyyy": (e, t) => `${u(e, t)} ${g(e, t)}`,
            "dd MMM 'yy": (e, t) => `${d(e, t)} ${m(e, t)} '${v(e, t)}`,
            "MMM 'yy": (e, t) => `${m(e, t)} '${v(e, t)}`,
            "MMM dd, yyyy": (e, t) => `${m(e, t)} ${d(e, t)}, ${g(e, t)}`,
            "MMM yyyy": (e, t) => `${m(e, t)} ${g(e, t)}`,
            "MMM dd": (e, t) => `${m(e, t)} ${d(e, t)}`,
            "dd MMM": (e, t) => `${d(e, t)} ${m(e, t)}`,
            "yyyy-MM-dd": (e, t) => `${g(e, t)}-${p(e, t)}-${d(e, t)}`,
            "yy-MM-dd": (e, t) => `${v(e, t)}-${p(e, t)}-${d(e, t)}`,
            "yy/MM/dd": (e, t) => `${v(e, t)}/${p(e, t)}/${d(e, t)}`,
            "yyyy/MM/dd": (e, t) => `${g(e, t)}/${p(e, t)}/${d(e, t)}`,
            "dd-MM-yyyy": (e, t) => `${d(e, t)}-${p(e, t)}-${g(e, t)}`,
            "dd-MM-yy": (e, t) => `${d(e, t)}-${p(e, t)}-${v(e, t)}`,
            "dd/MM/yy": (e, t) => `${d(e, t)}/${p(e, t)}/${v(e, t)}`,
            "dd/MM/yyyy": (e, t) => `${d(e, t)}/${p(e, t)}/${g(e, t)}`,
            "MM/dd/yy": (e, t) => `${p(e, t)}/${d(e, t)}/${v(e, t)}`,
            "MM/dd/yyyy": (e, t) => `${p(e, t)}/${d(e, t)}/${g(e, t)}`
        };
        function _(e, t) {
            return "ja" === window.language ? (o, s) => `${f[e](o, s)} (${h(o, t)})` : (o, s) => `${h(o, t)} ${f[e](o, s)}`
        }
        const w = Object.keys(f)
          , k = () => -1 !== ["ja", "ko", "zh", "zh_TW"].indexOf(window.language || "") ? "yyyy-MM-dd" : "dd MMM 'yy"
    }
    ,
    810978: (e, t, o) => {
        "use strict";
        o.d(t, {
            runOrSigninWithFeature: () => r
        });
        var s = o(120296);
        var n = o(314802);
        const r = (e, t) => {
            {
                if ((0,
                n.isOnMobileAppPage)("any"))
                    return void window.runOrSignIn(e, t);
                const r = [];
                if (t.paidAccountCheck && r.push(( () => (0,
                s.paidAccountCheck)({
                    successButtonText: t.paidAccountSuccessButtonText
                }))),
                window.is_authenticated)
                    r.reduce(( (e, t) => e.then(t)), Promise.resolve()).then(e).catch(( () => {}
                    ));
                else {
                    !async function(e) {
                        (await Promise.all([o.e(14188), o.e(36133), o.e(18883), o.e(92537), o.e(19190), o.e(39759), o.e(52186), o.e(67131), o.e(59546), o.e(65161), o.e(94036), o.e(7276), o.e(51989), o.e(6796), o.e(17725), o.e(82321), o.e(83215), o.e(7160), o.e(98230), o.e(94913)]).then(o.bind(o, 774004))).renderRunOrSigninWithFeatureDialog(e)
                    }({
                        signInSuccess: e,
                        options: {
                            source: t.source,
                            sourceMeta: t.sourceMeta,
                            feature: t.feature,
                            mode: t.mode,
                            startTrial: t.startTrial
                        }
                    })
                }
            }
        }
        ;
        window.TradingView.runOrSigninWithFeature = r
    }
    ,
    120296: (e, t, o) => {
        "use strict";
        o.d(t, {
            paidAccountCheck: () => i
        });
        var s = o(49437)
          , n = o(638456);
        const r = (0,
        o(735566).getLogger)("PaidAccountCheck");
        async function i(e) {
            const {onlyCheck: t, successButtonText: i, isNeedCancelButton: l} = e
              , c = window.user
              , a = s.TVLocalStorage.getItem("previous_username");
            if (c && window.is_authenticated && !c.is_pro && a && !(0,
            n.isSymphonyEmbed)()) {
                const {getProfile: e} = await Promise.all([o.e(35256), o.e(90254)]).then(o.bind(o, 824027));
                try {
                    const s = await e(a);
                    if (Boolean(s.pro_plan)) {
                        if (t)
                            return a;
                        {
                            const {showWrongAccountDialog: e} = await Promise.all([o.e(18607), o.e(85938), o.e(12019)]).then(o.bind(o, 723216));
                            return e({
                                userName: a,
                                isNeedCancelButton: l,
                                successButtonText: i
                            })
                        }
                    }
                } catch (e) {
                    r.logError(e.message)
                }
            }
            return !1
        }
    }
    ,
    904207: (e, t, o) => {
        "use strict";
        o.r(t),
        o.d(t, {
            getTranslatedSymbolDescription: () => r
        });
        var s = o(444372);
        function n(e) {
            const t = `#${e}-symbol-description`
              , n = s.t(t, void 0, o(956316));
            return n === t ? null : n
        }
        function r(e) {
            if (void 0 !== e.pro_name) {
                const t = n(e.pro_name);
                if (null !== t)
                    return t;
                if (void 0 !== e.short_name) {
                    const t = n(e.short_name);
                    if (null !== t)
                        return t
                }
            }
            return "en" !== e.language && void 0 !== e.local_description && e.language === window.language || "en" === e.language && void 0 !== e.local_description && e.language === window.language ? e.local_description : e.description || ""
        }
    }
    ,
    460925: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12 4h3v1h-1.04l-.88 9.64a1.5 1.5 0 0 1-1.5 1.36H6.42a1.5 1.5 0 0 1-1.5-1.36L4.05 5H3V4h3v-.5C6 2.67 6.67 2 7.5 2h3c.83 0 1.5.67 1.5 1.5V4ZM7.5 3a.5.5 0 0 0-.5.5V4h4v-.5a.5.5 0 0 0-.5-.5h-3ZM5.05 5l.87 9.55a.5.5 0 0 0 .5.45h5.17a.5.5 0 0 0 .5-.45L12.94 5h-7.9Z"/></svg>'
    }
    ,
    366493: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 20L11 14.5 16.5 9"/></svg>'
    }
    ,
    379978: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>'
    }
    ,
    339750: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>'
    }
    ,
    24122: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M4 8a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/></svg>'
    }
    ,
    676809: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M0 8a8 8 0 1 0 16 0A8 8 0 1 0 0 8zm2 0a6 6 0 1 0 12 0A6 6 0 1 0 2 8zm2 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/></svg>'
    }
    ,
    238739: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" d="M3.5 10.5h2v5h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M4.5 8.5v2m0 5v2"/><path fill="currentColor" d="M14 8h3v6h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M15.5 6.5v9m-7-11h4m-2-2v4"/></g></svg>'
    }
    ,
    554794: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" d="M14.5 4.5h2v6h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M15.5 2.5v2m0 6v2"/><path fill="currentColor" d="M3 4h3v6H3z"/><path stroke="currentColor" stroke-linecap="square" d="M4.5 2.5v9m4 4h4m-2-2v4"/></g></svg>'
    }
    ,
    48632: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" d="M14.5 10.5v7m-1-7h2m-5 1v-4m-3 2v-4m-3 2v-4"/></svg>'
    }
    ,
    502506: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" d="M14.5 2.5v7m-1 0h2m-5 2v-4m-3 7v-4m-3 6v-4"/></svg>'
    }
    ,
    162088: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" d="M10.5 6.5v7m-2-4h4"/></svg>'
    }
    ,
    601285: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M15 4h3v12h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M16.5 17.5v-15"/><path stroke="currentColor" d="M10.5 7.5h2v4h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M11.5 5.5v2m0 4v2m-4 2v-4m-3 5v-4m-3 5v-4"/></g></svg>'
    }
    ,
    383425: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M9 8h3v6H9z"/><path stroke="currentColor" stroke-linecap="square" d="M10.5 6.5v9"/><path stroke="currentColor" d="M14.5 4.5h2v11h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M15.5 2.5v2m-9 4v-4m-3 3v-4m12 12v2"/></g></svg>'
    }
    ,
    829016: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" d="M6.5 6.5h2v5h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M7.5 4.5v2m0 5v2"/><path fill="currentColor" d="M16 5h3v6h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M17.5 3.5v9"/><path fill="currentColor" d="M11 3h3v2h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M12.5 2.5v3m-8 11v-4m-2 6v-4"/></g></svg>'
    }
    ,
    14723: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="square" d="M11.5 9.5v8m-4-8v-4m8 4v-4m-11 2v-4"/><path fill="currentColor" d="M10 9h3v4h-3z"/></g></svg>'
    }
    ,
    693505: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="square" d="M11.5 4.5v10m-4-3v-4m-3 7v-4"/><path fill="currentColor" d="M10 4h3v3h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M15.5 11.5v-4"/></g></svg>'
    }
    ,
    159402: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" d="M10.5 5.5h2v7h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M11.5 3.5v2m0 7v2"/><path fill="currentColor" d="M15 5h3v3h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M16.5 3.5v6.07m-9 3.93v-4m-3 6v-4m-3 6v-4"/></g></svg>'
    }
    ,
    364697: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M10 7h3v8h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M11.5 5.5v11"/><path stroke="currentColor" d="M15.5 7.5h2v3h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M16.5 5.5v2m0 3v2m-9-2v-4m-3 2v-4m-3 2v-4"/></g></svg>'
    }
    ,
    110416: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path stroke-linecap="square" d="M11.5 6.5v7m-4 0v-4m8 4v-4m-11 2v-4"/><path d="M10.5 13.5h2v3h-2z"/></g></svg>'
    }
    ,
    623788: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M15 9h3v4h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M11.5 9.5v-2m0-5v2m5 3v7m0-5v2"/><path stroke="currentColor" d="M10.5 4.5h2v3h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M7.5 13.5v-2m0-5v2"/><path stroke="currentColor" d="M6.5 8.5h2v3h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M3.5 17.5v-2m0-5v2"/><path stroke="currentColor" d="M2.5 12.5h2v3h-2z"/></g></svg>'
    }
    ,
    492619: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M15 7h3v4h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M11.5 17.5v-2m0-5v2m5-7v7m0-3v2"/><path stroke="currentColor" d="M10.5 12.5h2v3h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M7.5 13.5v-2m0-5v2"/><path stroke="currentColor" d="M6.5 8.5h2v3h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M3.5 9.5v-2m0-5v2"/><path stroke="currentColor" d="M2.5 4.5h2v3h-2z"/></g></svg>'
    }
    ,
    11951: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="square" d="M9.5 9.5v8m-4-9v-4m-3 2v-4"/><path fill="currentColor" d="M8 7h3v5H8z"/><path stroke="currentColor" stroke-linecap="square" d="M14.5 11.5v4"/><path stroke="currentColor" d="M13.5 7.5h2v4h-2z"/></g></svg>'
    }
    ,
    630410: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="square" d="M9.5 11.5v2m-4 2v-4m-3 6v-4"/><path stroke="currentColor" d="M8.5 7.5h2v4h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M14.5 2.5v5"/><path fill="currentColor" d="M13 7h3v5h-3z"/></g></svg>'
    }
    ,
    672687: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M13 4h3v12h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M10.5 11.5v-4m-3 2v-4m-3 2v-4"/></g></svg>'
    }
    ,
    651316: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path d="M13.5 4.5h2v11h-2z"/><path stroke-linecap="square" d="M10.5 12.5v-4m-3 6v-4m-3 6v-4"/></g></svg>'
    }
    ,
    601354: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="square" d="M4.5 2.5v11"/><path fill="currentColor" d="M3 4h3v8H3z"/><path stroke="currentColor" stroke-linecap="square" d="M14.5 4.5v2m0 7v2"/><path stroke="currentColor" d="M13.5 6.5h2v7h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M9.5 12.5v5"/><path fill="currentColor" d="M8 14h3v2H8z"/></g></svg>'
    }
    ,
    829605: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path d="M10.5 9.5h2v3h-2z"/><path stroke-linecap="square" d="M11.5 8.5v-6m-4 13v-4m8 4v-4m-11 6v-4"/></g></svg>'
    }
    ,
    488287: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="square" d="M10.5 3.5v13"/><path fill="currentColor" d="M9 8h3v4H9z"/></g></svg>'
    }
    ,
    636627: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd" stroke="currentColor"><path stroke-linecap="square" d="M10.5 3.5v5m0 3v5"/><path d="M9.5 8.5h2v3h-2z"/></g></svg>'
    }
    ,
    775110: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M15 12h3v4h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M16.5 10.5v7"/><path fill="currentColor" d="M11 8h3v4h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M12.5 6.5v7"/><path fill="currentColor" d="M7 4h3v4H7z"/><path stroke="currentColor" stroke-linecap="square" d="M8.5 2.5v7m-4 1v-4m-2 6v-4"/></g></svg>'
    }
    ,
    923549: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M15 4h3v2h-3z"/><path stroke="currentColor" stroke-linecap="square" d="M11.5 11.5v-2m0-7v2m5-2v5"/><path stroke="currentColor" d="M10.5 4.5h2v5h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M7.5 14.5v-2m0-7v2"/><path stroke="currentColor" d="M6.5 7.5h2v5h-2z"/><path stroke="currentColor" stroke-linecap="square" d="M3.5 17.5v-2m0-7v2"/><path stroke="currentColor" d="M2.5 10.5h2v5h-2z"/></g></svg>'
    }
    ,
    837553: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" d="M14.5 8.5h4m-2-2v4m-7-6h4m-2-2v4m-6 2h4m-2-2v4m-3 5v-4m-2 6v-4"/></svg>'
    }
    ,
    249478: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" d="M14.5 11.5h4m-2-2v4m-7 2h4m-2-2v4m-6-6h4m-2-2v4m-3-5v-4m-2 2v-4"/></svg>'
    }
}]);
