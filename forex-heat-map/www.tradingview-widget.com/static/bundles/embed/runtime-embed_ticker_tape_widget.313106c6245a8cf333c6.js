( () => {
    "use strict";
    var e, t, a, r = {}, n = {};
    function c(e) {
        var t = n[e];
        if (void 0 !== t)
            return t.exports;
        var a = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return r[e].call(a.exports, a, a.exports, c),
        a.loaded = !0,
        a.exports
    }
    c.m = r,
    c._plural = {
        ar: (e, t=6, a=(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 && e % 100 <= 99 ? 4 : 5)) => null == e ? 0 : +a,
        cs: (e, t=3, a=(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)) => null == e ? 0 : +a,
        ru: (e, t=3, a=(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)) => null == e ? 0 : +a,
        ro: (e, t=3, a=(1 == e ? 0 : e % 100 > 19 || e % 100 == 0 && 0 != e ? 2 : 1)) => null == e ? 0 : +a,
        pl: (e, t=3, a=(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)) => null == e ? 0 : +a,
        pt: (e, t=2, a=1 != e) => null == e ? 0 : +a,
        de: (e, t=2, a=1 != e) => null == e ? 0 : +a,
        en: (e, t=2, a=1 != e) => null == e ? 0 : +a,
        es: (e, t=2, a=1 != e) => null == e ? 0 : +a,
        sv: (e, t=2, a=1 != e) => null == e ? 0 : +a,
        it: (e, t=2, a=1 != e) => null == e ? 0 : +a,
        tr: (e, t=2, a=1 != e) => null == e ? 0 : +a,
        el: (e, t=2, a=1 != e) => null == e ? 0 : +a,
        fr: (e, t=2, a=e > 1) => null == e ? 0 : +a,
        fa: (e, t=1, a=0) => null == e ? 0 : +a,
        ja: (e, t=1, a=0) => null == e ? 0 : +a,
        ko: (e, t=1, a=0) => null == e ? 0 : +a,
        th: (e, t=1, a=0) => null == e ? 0 : +a,
        vi: (e, t=1, a=0) => null == e ? 0 : +a,
        zh: (e, t=1, a=0) => null == e ? 0 : +a,
        he_IL: (e, t=4, a=(1 == e ? 0 : 2 == e ? 1 : e > 10 && e % 10 == 0 ? 2 : 3)) => null == e ? 0 : +a,
        ca_ES: (e, t=2, a=1 != e) => null == e ? 0 : +a,
        nl_NL: (e, t=2, a=1 != e) => null == e ? 0 : +a,
        hu_HU: (e, t=2, a=1 != e) => null == e ? 0 : +a,
        id_ID: (e, t=1, a=0) => null == e ? 0 : +a,
        ms_MY: (e, t=1, a=0) => null == e ? 0 : +a,
        zh_TW: (e, t=1, a=0) => null == e ? 0 : +a
    },
    e = [],
    c.O = (t, a, r, n) => {
        if (!a) {
            var d = 1 / 0;
            for (f = 0; f < e.length; f++) {
                for (var [a,r,n] = e[f], l = !0, i = 0; i < a.length; i++)
                    (!1 & n || d >= n) && Object.keys(c.O).every((e => c.O[e](a[i]))) ? a.splice(i--, 1) : (l = !1,
                    n < d && (d = n));
                if (l) {
                    e.splice(f--, 1);
                    var o = r();
                    void 0 !== o && (t = o)
                }
            }
            return t
        }
        n = n || 0;
        for (var f = e.length; f > 0 && e[f - 1][2] > n; f--)
            e[f] = e[f - 1];
        e[f] = [a, r, n]
    }
    ,
    c.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return c.d(t, {
            a: t
        }),
        t
    }
    ,
    c.d = (e, t) => {
        for (var a in t)
            c.o(t, a) && !c.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
    }
    ,
    c.f = {},
    c.e = e => Promise.all(Object.keys(c.f).reduce(( (t, a) => (c.f[a](e, t),
    t)), [])),
    c.u = e => 61560 === e ? "__LANG__." + e + ".90a288e6a0416e4d30c3.js" : 43878 === e ? "__LANG__." + e + ".5bc677df45e2b79d8265.js" : ({
        1523: "lentaru-copyright-data-impl",
        3844: "social-pages-period-formatter",
        30362: "clear-old-settings",
        34604: "pushstream-multiplexer",
        36228: "tradingview-copyright-new-data-impl",
        36683: "snowplow-embed-widget-tracker",
        37753: "tradingview-copyright-with-border-data-impl",
        38890: "simple-dialog",
        42091: "cmoneycomtw-copyright-data-impl",
        47259: "tradingview-copyright-trade-with-data-impl",
        53259: "tradingview-copyright-data-impl"
    }[e] || e) + "." + {
        1523: "85b4967f3ef5ba0ebb7a",
        2011: "680451a19ca51abdcca3",
        3844: "d3ef3a77d61f7c8905db",
        6471: "888c9bb387b9c4b39e69",
        9323: "dd7d6e1bcd754d2b0e8c",
        13114: "d3486775955efbed4670",
        13672: "8341ebdf1dfb9df2d9a7",
        15371: "00ff2a41a6fa725c8853",
        17102: "282c1c83440296b6b9ff",
        18883: "8a77370386b8ed9c4ea6",
        30158: "aff94a065070a0047fb4",
        30362: "5af7558b1ab938123ae5",
        30683: "976a0bb3a8312c742364",
        32937: "f31e81e19de007d8fc25",
        34604: "164af4b895dcf10512ec",
        36228: "8f77cf6e521d70e4eb89",
        36683: "b81cd839ca37b671fb00",
        37753: "d4d101bd16850bc9c452",
        38890: "2aa593dd489d2a3c3024",
        42091: "dce4b7c74afd417cafac",
        44213: "764772bdd089dd65325d",
        46195: "f6e44b1d246fb84137e8",
        47259: "b0988d1244b49bbfb72e",
        47597: "9f03fab2c9b8369d9ba9",
        52431: "cbffcb565fe01782d9b9",
        53259: "846246fff3f6ccd20767",
        60159: "bdbcc14fca476133dd5e",
        61144: "1d3664a9eed2c59c1a9a",
        61171: "63c7756e5f057ca54d40",
        61681: "7f04346e3fc2b81d5879",
        62526: "5172b09c000aa4dc9b0b",
        62764: "644aea9da7689a56e7bd",
        65743: "2ee4a277d849c0a3ef89",
        66032: "5ccd1bd5d90c67203c58",
        67780: "673e6c050827a4d82467",
        69374: "3ce254fa7bcfde9c981a",
        73034: "ad60b83f4348cc8c1c06",
        78894: "f7a4cb3552b774c5b755",
        79317: "9cd6ad7e7d343442e54c",
        80349: "66d4d54cbc9a0db9ad50",
        87473: "86a26db29dde6be5fa5e",
        88380: "59fe8d3f1c2c72d96003",
        90431: "32f5a6713a521ddc3920",
        92537: "0f35bf291cd383d9b915",
        98185: "d00e5391184812f5ac68",
        99578: "85cc7a29360f75945ac4",
        99778: "dacf261e5189777f39a5"
    }[e] + ".js",
    c.miniCssF = e => 88380 === e ? e + ".f98421c85cb0fbfc8df6.css" : 18883 === e ? e + ".f577339c11e6441a352f.css" : 98185 === e ? e + ".fbb750fd312778403036.css" : 46195 === e ? e + ".1ee43ed7cda5d814dba7.css" : 32937 === e ? e + ".97c3623a0a16ade99de8.css" : 92537 === e ? e + ".a8e87c60a250a6212b03.css" : 61681 === e ? e + ".df517de208b59f042c3b.css" : 61171 === e ? e + ".146c7925be9f43c9c767.css" : 67780 === e ? e + ".70ca504e4ac7c5a8089d.css" : 66032 === e ? e + ".ed61cfe7a279b765a52c.css" : 13672 === e ? e + ".362fa6a7ab1f3e3b06c4.css" : e + "." + {
        9323: "b86e76f1c9dea8b48f7e",
        15371: "bd4a617f902d8e4336d7",
        30158: "7bc9ff894cd07686e3a0",
        30683: "9ce134321e5f7ed1c4ad",
        44213: "eb3336ff79829b0650c1",
        47597: "2487adf7cca8d6bc7b4a",
        52431: "2d44a9cc5c64e031b46c",
        60159: "becae41ba09fceb64287",
        61144: "3bcf3e2b04d67b8ca804",
        62764: "8d4294b9818effa74437",
        65743: "826c38517eae6571304f",
        78894: "75671d34e410a0c2830a",
        79317: "cc38e39623d7e4580adb",
        90431: "c4d5f08a9b7f191daf9d",
        99578: "f6ae2aeec1002c6731c3",
        99778: "bf74d87343fa8a5ef296"
    }[e] + ".css",
    c.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    t = {},
    a = "tradingview:",
    c.l = (e, r, n, d) => {
        if (t[e])
            t[e].push(r);
        else {
            var l, i;
            if (void 0 !== n)
                for (var o = document.getElementsByTagName("script"), f = 0; f < o.length; f++) {
                    var s = o[f];
                    if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == a + n) {
                        l = s;
                        break
                    }
                }
            l || (i = !0,
            (l = document.createElement("script")).charset = "utf-8",
            l.timeout = 120,
            c.nc && l.setAttribute("nonce", c.nc),
            l.setAttribute("data-webpack", a + n),
            l.src = e,
            0 !== l.src.indexOf(window.location.origin + "/") && (l.crossOrigin = "anonymous")),
            t[e] = [r];
            var u = (a, r) => {
                l.onerror = l.onload = null,
                clearTimeout(b);
                var n = t[e];
                if (delete t[e],
                l.parentNode && l.parentNode.removeChild(l),
                n && n.forEach((e => e(r))),
                a)
                    return a(r)
            }
              , b = setTimeout(u.bind(null, void 0, {
                type: "timeout",
                target: l
            }), 12e4);
            l.onerror = u.bind(null, l.onerror),
            l.onload = u.bind(null, l.onload),
            i && document.head.appendChild(l)
        }
    }
    ,
    c.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    c.nmd = e => (e.paths = [],
    e.children || (e.children = []),
    e),
    c.j = 39303,
    ( () => {
        var e;
        c.g.importScripts && (e = c.g.location + "");
        var t = c.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src),
        !e)) {
            var a = t.getElementsByTagName("script");
            a.length && (e = a[a.length - 1].src)
        }
        if (!e)
            throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        c.p = e
    }
    )(),
    c.g.location && c.p.startsWith(c.g.location.origin) && (c.p = c.p.slice(c.g.location.origin.length)),
    ( () => {
        const e = c.u;
        c.u = t => e(t).replace("__LANG__", c.g.language)
    }
    )(),
    c.p = c.g.WEBPACK_PUBLIC_PATH || c.p;
    var d = c.e
      , l = Object.create(null);
    function i(e, t) {
        return d(e).catch((function() {
            return new Promise((function(a) {
                var r = function() {
                    self.removeEventListener("online", r, !1),
                    !1 === navigator.onLine ? self.addEventListener("online", r, !1) : a(t < 2 ? i(e, t + 1) : d(e))
                };
                setTimeout(r, t * t * 1e3)
            }
            ))
        }
        ))
    }
    c.e = function(e) {
        if (!l[e]) {
            l[e] = i(e, 0);
            var t = function() {
                delete l[e]
            };
            l[e].then(t, t)
        }
        return l[e]
    }
    ,
    ( () => {
        if ("undefined" != typeof document) {
            var e = e => new Promise(( (t, a) => {
                var r = c.miniCssF(e)
                  , n = c.p + r;
                if (( (e, t) => {
                    for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                        var n = (d = a[r]).getAttribute("data-href") || d.getAttribute("href");
                        if ("stylesheet" === d.rel && (n === e || n === t))
                            return d
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                        var d;
                        if ((n = (d = c[r]).getAttribute("data-href")) === e || n === t)
                            return d
                    }
                }
                )(r, n))
                    return t();
                ( (e, t, a, r, n) => {
                    var c = document.createElement("link");
                    c.rel = "stylesheet",
                    c.type = "text/css",
                    c.onerror = c.onload = a => {
                        if (c.onerror = c.onload = null,
                        "load" === a.type)
                            r();
                        else {
                            var d = a && ("load" === a.type ? "missing" : a.type)
                              , l = a && a.target && a.target.href || t
                              , i = new Error("Loading CSS chunk " + e + " failed.\n(" + l + ")");
                            i.code = "CSS_CHUNK_LOAD_FAILED",
                            i.type = d,
                            i.request = l,
                            c.parentNode && c.parentNode.removeChild(c),
                            n(i)
                        }
                    }
                    ,
                    c.href = t,
                    0 !== c.href.indexOf(window.location.origin + "/") && (c.crossOrigin = "anonymous"),
                    a ? a.parentNode.insertBefore(c, a.nextSibling) : document.head.appendChild(c)
                }
                )(e, n, null, t, a)
            }
            ))
              , t = {
                39303: 0
            };
            c.f.miniCss = (a, r) => {
                t[a] ? r.push(t[a]) : 0 !== t[a] && {
                    9323: 1,
                    13672: 1,
                    15371: 1,
                    18883: 1,
                    30158: 1,
                    30683: 1,
                    32937: 1,
                    44213: 1,
                    46195: 1,
                    47597: 1,
                    52431: 1,
                    60159: 1,
                    61144: 1,
                    61171: 1,
                    61681: 1,
                    62764: 1,
                    65743: 1,
                    66032: 1,
                    67780: 1,
                    78894: 1,
                    79317: 1,
                    88380: 1,
                    90431: 1,
                    92537: 1,
                    98185: 1,
                    99578: 1,
                    99778: 1
                }[a] && r.push(t[a] = e(a).then(( () => {
                    t[a] = 0
                }
                ), (e => {
                    throw delete t[a],
                    e
                }
                )))
            }
        }
    }
    )(),
    c.i18next = (e, t={}, a, r=c.g.language) => {
        if (null === e) {
            if (Array.isArray(a))
                return a[void 0 === t.count ? 0 : c._plural[r](t.count)].replace(/{(\w+)}/g, ( (e, a) => void 0 !== (t.replace || t)[a] ? (t.replace || t)[a] : e));
            if ("object" == typeof a)
                return a[c.g.language] ? c.i18next(null, t, a[c.g.language]) : c.i18next(null, t, a.en, "en")
        } else if (a && e) {
            const r = `${e}${t.context ? `_${t.context}` : ""}`;
            if (a[r])
                return c.i18next(null, t, a[r])
        }
        return "number" == typeof e ? e.toString() : "string" != typeof e ? "" : e
    }
    ,
    ( () => {
        var e = {
            39303: 0,
            83439: 0,
            38752: 0,
            98681: 0,
            80259: 0,
            3579: 0,
            55822: 0,
            44883: 0,
            94562: 0
        };
        c.f.j = (t, a) => {
            var r = c.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r)
                    a.push(r[2]);
                else if (/^(1(3672|5371|8883)|3(0158|0683|2937|579|8752|9303)|4(4213|4883|6195|7597)|6(1(144|171|681)|0159|2764|5743|6032|7780)|8(0259|3439|8380)|9(9[57]78|0431|2537|323|4562|8185|8681)|52431|55822|78894|79317)$/.test(t))
                    e[t] = 0;
                else {
                    var n = new Promise(( (a, n) => r = e[t] = [a, n]));
                    a.push(r[2] = n);
                    var d = c.p + c.u(t)
                      , l = new Error;
                    c.l(d, (a => {
                        if (c.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                        r)) {
                            var n = a && ("load" === a.type ? "missing" : a.type)
                              , d = a && a.target && a.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + n + ": " + d + ")",
                            l.name = "ChunkLoadError",
                            l.type = n,
                            l.request = d,
                            r[1](l)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        c.O.j = t => 0 === e[t];
        var t = (t, a) => {
            var r, n, [d,l,i] = a, o = 0;
            if (d.some((t => 0 !== e[t]))) {
                for (r in l)
                    c.o(l, r) && (c.m[r] = l[r]);
                if (i)
                    var f = i(c)
            }
            for (t && t(a); o < d.length; o++)
                n = d[o],
                c.o(e, n) && e[n] && e[n][0](),
                e[n] = 0;
            return c.O(f)
        }
          , a = self.webpackChunktradingview = self.webpackChunktradingview || [];
        a.forEach(t.bind(null, 0)),
        a.push = t.bind(null, a.push.bind(a))
    }
    )(),
    ( () => {
        const {miniCssF: e} = c;
        c.miniCssF = t => self.document && "rtl" === self.document.dir ? e(t).replace(/\.css$/, ".rtl.css") : e(t)
    }
    )()
}
)();
