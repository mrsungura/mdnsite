(() => {
    var Tc = Object.create;
    var mn = Object.defineProperty;
    var Fc = Object.getOwnPropertyDescriptor;
    var Ac = Object.getOwnPropertyNames;
    var Mc = Object.getPrototypeOf,
        Sc = Object.prototype.hasOwnProperty;
    var Pc = s => mn(s, "__esModule", {
        value: !0
    });
    var me = (s, t) => () => (t || s((t = {
        exports: {}
    }).exports, t), t.exports);
    var zc = (s, t, e) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let r of Ac(t)) !Sc.call(s, r) && r !== "default" && mn(s, r, {
                    get: () => t[r],
                    enumerable: !(e = Fc(t, r)) || e.enumerable
                });
            return s
        },
        or = s => zc(Pc(mn(s != null ? Tc(Mc(s)) : {}, "default", s && s.__esModule && "default" in s ? {
            get: () => s.default,
            enumerable: !0
        } : {
            value: s,
            enumerable: !0
        })), s);
    var _n = me((Ud, yn) => {
        function Dn() {}
        Dn.prototype = {
            on: function (s, t, e) {
                var r = this.e || (this.e = {});
                return (r[s] || (r[s] = [])).push({
                    fn: t,
                    ctx: e
                }), this
            },
            once: function (s, t, e) {
                var r = this;

                function i() {
                    r.off(s, i), t.apply(e, arguments)
                }
                return i._ = t, this.on(s, i, e)
            },
            emit: function (s) {
                var t = [].slice.call(arguments, 1),
                    e = ((this.e || (this.e = {}))[s] || []).slice(),
                    r = 0,
                    i = e.length;
                for (r; r < i; r++) e[r].fn.apply(e[r].ctx, t);
                return this
            },
            off: function (s, t) {
                var e = this.e || (this.e = {}),
                    r = e[s],
                    i = [];
                if (r && t)
                    for (var n = 0, o = r.length; n < o; n++) r[n].fn !== t && r[n].fn._ !== t && i.push(r[n]);
                return i.length ? e[s] = i : delete e[s], this
            }
        };
        yn.exports = Dn;
        yn.exports.TinyEmitter = Dn
    });
    var Ul = me((im, Vl) => {
        var fp = "Expected a function",
            Il = 0 / 0,
            pp = "[object Symbol]",
            dp = /^\s+|\s+$/g,
            mp = /^[-+]0x[0-9a-f]+$/i,
            gp = /^0b[01]+$/i,
            xp = /^0o[0-7]+$/i,
            Dp = parseInt,
            yp = typeof global == "object" && global && global.Object === Object && global,
            _p = typeof self == "object" && self && self.Object === Object && self,
            vp = yp || _p || Function("return this")(),
            wp = Object.prototype,
            Ep = wp.toString,
            bp = Math.max,
            Cp = Math.min,
            co = function () {
                return vp.Date.now()
            };

        function Tp(s, t, e) {
            var r, i, n, o, a, l, u = 0,
                h = !1,
                c = !1,
                f = !0;
            if (typeof s != "function") throw new TypeError(fp);
            t = Nl(t) || 0, fo(e) && (h = !!e.leading, c = "maxWait" in e, n = c ? bp(Nl(e.maxWait) || 0, t) : n, f = "trailing" in e ? !!e.trailing : f);

            function d(D) {
                var T = r,
                    A = i;
                return r = i = void 0, u = D, o = s.apply(A, T), o
            }

            function g(D) {
                return u = D, a = setTimeout(x, t), h ? d(D) : o
            }

            function p(D) {
                var T = D - l,
                    A = D - u,
                    F = t - T;
                return c ? Cp(F, n - A) : F
            }

            function m(D) {
                var T = D - l,
                    A = D - u;
                return l === void 0 || T >= t || T < 0 || c && A >= n
            }

            function x() {
                var D = co();
                if (m(D)) return y(D);
                a = setTimeout(x, p(D))
            }

            function y(D) {
                return a = void 0, f && r ? d(D) : (r = i = void 0, o)
            }

            function v() {
                a !== void 0 && clearTimeout(a), u = 0, r = l = i = a = void 0
            }

            function b() {
                return a === void 0 ? o : y(co())
            }

            function w() {
                var D = co(),
                    T = m(D);
                if (r = arguments, i = this, l = D, T) {
                    if (a === void 0) return g(l);
                    if (c) return a = setTimeout(x, t), d(l)
                }
                return a === void 0 && (a = setTimeout(x, t)), o
            }
            return w.cancel = v, w.flush = b, w
        }

        function fo(s) {
            var t = typeof s;
            return !!s && (t == "object" || t == "function")
        }

        function Fp(s) {
            return !!s && typeof s == "object"
        }

        function Ap(s) {
            return typeof s == "symbol" || Fp(s) && Ep.call(s) == pp
        }

        function Nl(s) {
            if (typeof s == "number") return s;
            if (Ap(s)) return Il;
            if (fo(s)) {
                var t = typeof s.valueOf == "function" ? s.valueOf() : s;
                s = fo(t) ? t + "" : t
            }
            if (typeof s != "string") return s === 0 ? s : +s;
            s = s.replace(dp, "");
            var e = gp.test(s);
            return e || xp.test(s) ? Dp(s.slice(2), e ? 2 : 8) : mp.test(s) ? Il : +s
        }
        Vl.exports = Tp
    });
    var Yl = me((fm, Wl) => {
        "use strict";
        var ql = Object.getOwnPropertySymbols,
            Mp = Object.prototype.hasOwnProperty,
            Sp = Object.prototype.propertyIsEnumerable;

        function Pp(s) {
            if (s == null) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(s)
        }

        function zp() {
            try {
                if (!Object.assign) return !1;
                var s = new String("abc");
                if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5") return !1;
                for (var t = {}, e = 0; e < 10; e++) t["_" + String.fromCharCode(e)] = e;
                var r = Object.getOwnPropertyNames(t).map(function (n) {
                    return t[n]
                });
                if (r.join("") !== "0123456789") return !1;
                var i = {};
                return "abcdefghijklmnopqrst".split("").forEach(function (n) {
                    i[n] = n
                }), Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst"
            } catch (n) {
                return !1
            }
        }
        Wl.exports = zp() ? Object.assign : function (s, t) {
            for (var e, r = Pp(s), i, n = 1; n < arguments.length; n++) {
                e = Object(arguments[n]);
                for (var o in e) Mp.call(e, o) && (r[o] = e[o]);
                if (ql) {
                    i = ql(e);
                    for (var a = 0; a < i.length; a++) Sp.call(e, i[a]) && (r[i[a]] = e[i[a]])
                }
            }
            return r
        }
    });
    var Gl = me(Vs => {
        (function () {
            var s;
            s = typeof Vs != "undefined" && Vs !== null ? Vs : this, s.Lethargy = function () {
                function t(e, r, i, n) {
                    this.stability = e != null ? Math.abs(e) : 8, this.sensitivity = r != null ? 1 + Math.abs(r) : 100, this.tolerance = i != null ? 1 + Math.abs(i) : 1.1, this.delay = n ? 150, this.lastUpDeltas = function () {
                        var o, a, l;
                        for (l = [], o = 1, a = this.stability * 2; 1 <= a ? o <= a : o >= a; 1 <= a ? o++ : o--) l.push(null);
                        return l
                    }.call(this), this.lastDownDeltas = function () {
                        var o, a, l;
                        for (l = [], o = 1, a = this.stability * 2; 1 <= a ? o <= a : o >= a; 1 <= a ? o++ : o--) l.push(null);
                        return l
                    }.call(this), this.deltasTimestamp = function () {
                        var o, a, l;
                        for (l = [], o = 1, a = this.stability * 2; 1 <= a ? o <= a : o >= a; 1 <= a ? o++ : o--) l.push(null);
                        return l
                    }.call(this)
                }
                return t.prototype.check = function (e) {
                    var r;
                    return e = e.originalEvent || e, e.wheelDelta != null ? r = e.wheelDelta : e.deltaY != null ? r = e.deltaY * -40 : (e.detail != null || e.detail === 0) && (r = e.detail * -40), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), r > 0 ? (this.lastUpDeltas.push(r), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(r), this.lastDownDeltas.shift(), this.isInertia(-1))
                }, t.prototype.isInertia = function (e) {
                    var r, i, n, o, a, l, u;
                    return r = e === -1 ? this.lastDownDeltas : this.lastUpDeltas, r[0] === null ? e : this.deltasTimestamp[this.stability * 2 - 2] + this.delay > Date.now() && r[0] === r[this.stability * 2 - 1] ? !1 : (n = r.slice(0, this.stability), i = r.slice(this.stability, this.stability * 2), u = n.reduce(function (h, c) {
                        return h + c
                    }), a = i.reduce(function (h, c) {
                        return h + c
                    }), l = u / n.length, o = a / i.length, Math.abs(l) < Math.abs(o * this.tolerance) && this.sensitivity < Math.abs(o) ? e : !1)
                }, t.prototype.showLastUpDeltas = function () {
                    return this.lastUpDeltas
                }, t.prototype.showLastDownDeltas = function () {
                    return this.lastDownDeltas
                }, t
            }()
        }).call(Vs)
    });
    var Hl = me((dm, Xl) => {
        "use strict";
        Xl.exports = function () {
            return {
                hasWheelEvent: "onwheel" in document,
                hasMouseWheelEvent: "onmousewheel" in document,
                hasTouch: "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
                hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                hasPointer: !!window.navigator.msPointerEnabled,
                hasKeyDown: "onkeydown" in document,
                isFirefox: navigator.userAgent.indexOf("Firefox") > -1
            }
        }()
    });
    var Ql = me((mm, $l) => {
        "use strict";
        $l.exports = function (s) {
            return JSON.parse(JSON.stringify(s))
        }
    });
    var Zl = me((gm, Kl) => {
        "use strict";
        var Lp = Object.prototype.toString,
            kp = Object.prototype.hasOwnProperty;
        Kl.exports = function (s) {
            if (!s) return console.warn("bindAll requires at least one argument.");
            var t = Array.prototype.slice.call(arguments, 1);
            if (t.length === 0)
                for (var e in s) kp.call(s, e) && typeof s[e] == "function" && Lp.call(s[e]) == "[object Function]" && t.push(e);
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                s[i] = Op(s[i], s)
            }
        };

        function Op(s, t) {
            return function () {
                return s.apply(t, arguments)
            }
        }
    });
    var mo = me((Tm, po) => {
        (function () {
            function s(g, p) {
                document.addEventListener ? g.addEventListener("scroll", p, !1) : g.attachEvent("scroll", p)
            }

            function t(g) {
                document.body ? g() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function p() {
                    document.removeEventListener("DOMContentLoaded", p), g()
                }) : document.attachEvent("onreadystatechange", function p() {
                    (document.readyState == "interactive" || document.readyState == "complete") && (document.detachEvent("onreadystatechange", p), g())
                })
            }

            function e(g) {
                this.g = document.createElement("div"), this.g.setAttribute("aria-hidden", "true"), this.g.appendChild(document.createTextNode(g)), this.h = document.createElement("span"), this.i = document.createElement("span"), this.m = document.createElement("span"), this.j = document.createElement("span"), this.l = -1, this.h.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.j.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.m.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.h.appendChild(this.m), this.i.appendChild(this.j), this.g.appendChild(this.h), this.g.appendChild(this.i)
            }

            function r(g, p) {
                g.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + p + ";"
            }

            function i(g) {
                var p = g.g.offsetWidth,
                    m = p + 100;
                return g.j.style.width = m + "px", g.i.scrollLeft = m, g.h.scrollLeft = g.h.scrollWidth + 100, g.l !== p ? (g.l = p, !0) : !1
            }

            function n(g, p) {
                function m() {
                    var y = x;
                    i(y) && y.g.parentNode !== null && p(y.l)
                }
                var x = g;
                s(g.h, m), s(g.i, m), i(g)
            }

            function o(g, p, m) {
                p = p || {}, m = m || window, this.family = g, this.style = p.style || "normal", this.weight = p.weight || "normal", this.stretch = p.stretch || "normal", this.context = m
            }
            var a = null,
                l = null,
                u = null,
                h = null;

            function c(g) {
                return l === null && (f(g) && /Apple/.test(window.navigator.vendor) ? (g = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), l = !!g && 603 > parseInt(g[1], 10)) : l = !1), l
            }

            function f(g) {
                return h === null && (h = !!g.document.fonts), h
            }

            function d(g, p) {
                var m = g.style,
                    x = g.weight;
                if (u === null) {
                    var y = document.createElement("div");
                    try {
                        y.style.font = "condensed 100px sans-serif"
                    } catch (v) {}
                    u = y.style.font !== ""
                }
                return [m, x, u ? g.stretch : "", "100px", p].join(" ")
            }
            o.prototype.load = function (g, p) {
                var m = this,
                    x = g || "BESbswy",
                    y = 0,
                    v = p || 3e3,
                    b = new Date().getTime();
                return new Promise(function (w, D) {
                    if (f(m.context) && !c(m.context)) {
                        var T = new Promise(function (F, P) {
                                function k() {
                                    new Date().getTime() - b >= v ? P(Error("" + v + "ms timeout exceeded")) : m.context.document.fonts.load(d(m, '"' + m.family + '"'), x).then(function (L) {
                                        1 <= L.length ? F() : setTimeout(k, 25)
                                    }, P)
                                }
                                k()
                            }),
                            A = new Promise(function (F, P) {
                                y = setTimeout(function () {
                                    P(Error("" + v + "ms timeout exceeded"))
                                }, v)
                            });
                        Promise.race([A, T]).then(function () {
                            clearTimeout(y), w(m)
                        }, D)
                    } else t(function () {
                        function F() {
                            var q;
                            (q = S != -1 && U != -1 || S != -1 && M != -1 || U != -1 && M != -1) && ((q = S != U && S != M && U != M) || (a === null && (q = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), a = !!q && (536 > parseInt(q[1], 10) || parseInt(q[1], 10) === 536 && 11 >= parseInt(q[2], 10))), q = a && (S == O && U == O && M == O || S == z && U == z && M == z || S == V && U == V && M == V)), q = !q), q && (G.parentNode !== null && G.parentNode.removeChild(G), clearTimeout(y), w(m))
                        }

                        function P() {
                            if (new Date().getTime() - b >= v) G.parentNode !== null && G.parentNode.removeChild(G), D(Error("" + v + "ms timeout exceeded"));
                            else {
                                var q = m.context.document.hidden;
                                (q === !0 || q === void 0) && (S = k.g.offsetWidth, U = L.g.offsetWidth, M = _.g.offsetWidth, F()), y = setTimeout(P, 50)
                            }
                        }
                        var k = new e(x),
                            L = new e(x),
                            _ = new e(x),
                            S = -1,
                            U = -1,
                            M = -1,
                            O = -1,
                            z = -1,
                            V = -1,
                            G = document.createElement("div");
                        G.dir = "ltr", r(k, d(m, "sans-serif")), r(L, d(m, "serif")), r(_, d(m, "monospace")), G.appendChild(k.g), G.appendChild(L.g), G.appendChild(_.g), m.context.document.body.appendChild(G), O = k.g.offsetWidth, z = L.g.offsetWidth, V = _.g.offsetWidth, P(), n(k, function (q) {
                            S = q, F()
                        }), r(k, d(m, '"' + m.family + '",sans-serif')), n(L, function (q) {
                            U = q, F()
                        }), r(L, d(m, '"' + m.family + '",serif')), n(_, function (q) {
                            M = q, F()
                        }), r(_, d(m, '"' + m.family + '",monospace'))
                    })
                })
            }, typeof po == "object" ? po.exports = o : (window.FontFaceObserver = o, window.FontFaceObserver.prototype.load = o.prototype.load)
        })()
    });
    var fu = me((hu, cu) => {
        var Qp = function () {
            function s(u) {
                var h = {
                    callback: function () {},
                    elem: document,
                    preventMouse: !0
                };
                this.eventWheel = "onwheel" in document ? "wheel" : "mousewheel", this._options = l(h, u), this._deltaArray = [0, 0, 0], this._isAcceleration = !1, this._isStopped = !0, this._direction = "", this._timer = "", this._isWorking = !0;
                var c = this;
                this._wheelHandler = function (f) {
                    c._isWorking && (i.call(c, f), c._options.preventMouse && r(f))
                }, o(this._options.elem, this.eventWheel, this._wheelHandler)
            }
            s.prototype = {
                constructor: s,
                turnOn: function () {
                    return this._isWorking = !0, this
                },
                turnOff: function () {
                    return this._isWorking = !1, this
                },
                setOptions: function (u) {
                    return this._options = l(this._options, u), this
                },
                getOption: function (u) {
                    var h = this._options[u];
                    if (h !== void 0) return h;
                    throw new Error("Unknown option")
                },
                destroy: function () {
                    return a(this._options.elem, this.eventWheel, this._wheelHandler), this
                }
            };

            function t(u) {
                u.direction = this._direction, this._options.callback(u)
            }
            var e = function (u) {
                return u.wheelDelta && !u.deltaY ? e = function (h) {
                    return h.wheelDelta * -1
                } : e = function (h) {
                    return h.deltaY
                }, e(u)
            };

            function r(u) {
                u = u || window.event, u.preventDefault ? u.preventDefault() : u.returnValue = !1
            }

            function i(u) {
                var h = this,
                    c = e(u);
                if (c !== 0) {
                    var f = c > 0 ? "down" : "up",
                        d = h._deltaArray.length,
                        g = !1,
                        p = 0,
                        m, x;
                    for (clearTimeout(h._timer), h._timer = setTimeout(function () {
                            h._deltaArray = [0, 0, 0], h._isStopped = !0, h._direction = f
                        }, 150), x = 0; x < d; x++) h._deltaArray[x] !== 0 && (h._deltaArray[x] > 0 ? ++p : --p);
                    Math.abs(p) === d && (m = p > 0 ? "down" : "up", m !== h._direction && (g = !0, h._direction = f)), h._isStopped || (g ? (h._isAcceleration = !0, t.call(this, u)) : Math.abs(p) === d && n.call(this, u)), h._isStopped && (h._isStopped = !1, h._isAcceleration = !0, h._direction = f, t.call(this, u)), h._deltaArray.shift(), h._deltaArray.push(c)
                }
            }

            function n(u) {
                var h = Math.abs(this._deltaArray[0]),
                    c = Math.abs(this._deltaArray[1]),
                    f = Math.abs(this._deltaArray[2]),
                    d = Math.abs(e(u));
                d > f && f > c && c > h && (this._isAcceleration || (t.call(this, u), this._isAcceleration = !0)), d < f && f <= c && (this._isAcceleration = !1)
            }

            function o(u, h, c) {
                u.addEventListener ? u.addEventListener(h, c, uu() ? {
                    passive: !1
                } : !1) : u.attachEvent && u.attachEvent("on" + h, c)
            }

            function a(u, h, c) {
                u.removeEventListener ? u.removeEventListener(h, c, uu() ? {
                    passive: !1
                } : !1) : u.detachEvent && u.detachEvent("on" + h, c)
            }

            function l(u, h) {
                var c = {},
                    f;
                for (f in u) Object.prototype.hasOwnProperty.call(u, f) && (c[f] = u[f]);
                for (f in h) Object.prototype.hasOwnProperty.call(h, f) && (c[f] = h[f]);
                return c
            }
            return s
        }();
        typeof hu == "object" && (cu.exports = Qp);

        function uu() {
            var s = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                        s = !0
                    }
                });
                window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
            } catch (e) {}
            return s
        }
    });
    var mc = me((ox, dc) => {
        dc.exports = function (s) {
            typeof s == "string" && (s = [s]);
            for (var t = [].slice.call(arguments, 1), e = [], r = 0; r < s.length - 1; r++) e.push(s[r], t[r] || "");
            return e.push(s[r]), e.join("")
        }
    });
    var vc = me((da, ma) => {
        (function (s, t) {
            typeof da == "object" && typeof ma != "undefined" ? ma.exports = t() : typeof define == "function" && define.amd ? define(t) : (s = s || self, s.Preload = t())
        })(da, function () {
            "use strict";

            function s(o, a) {
                let l = new XMLHttpRequest;
                l.open("GET", o, !0), l.responseType = "blob";
                let u = this.getItemByUrl(o);
                u.xhr = l, l.onprogress = h => {
                    if (!h.lengthComputable) return !1;
                    u.completion = parseInt(h.loaded / h.total * 100), u.downloaded = h.loaded, u.total = h.total, this.updateProgressBar(u)
                }, l.onload = h => {
                    let c = h.target.response.type,
                        f = h.target.responseURL;
                    if (u.fileName = f.substring(f.lastIndexOf("/") + 1), u.type = c, u.status = l.status, l.status == 404) u.blobUrl = u.size = null, u.error = !0, this.onerror(u);
                    else {
                        let d = new Blob([h.target.response], {
                            type: c
                        });
                        u.blobUrl = URL.createObjectURL(d), u.size = d.size, u.error = !1
                    }
                    a(u)
                }, l.send()
            }

            function t(o) {
                let a = 0,
                    l = this.stepped ? this.state.length * 100 : 0,
                    u = 0;
                for (let c of this.state) c.completion && u++, this.stepped ? c.completion && (a += c.completion) : this._readyForComputation ? (a += c.downloaded, l += c.total) : a = l = 0;
                this._readyForComputation = u == this.state.length;
                let h = parseInt(a / l * 100);
                isNaN(h) || this.onprogress({
                    progress: h,
                    item: o
                })
            }

            function e(o) {
                for (var a of this.state)
                    if (a.url == o) return a
            }

            function r(o) {
                return new Promise((a, l) => {
                    this.loaded = o.length;
                    for (let u of o) this.state.push({
                        url: u
                    }), this.preloadOne(u, h => {
                        this.onfetched(h), this.loaded--, this.loaded == 0 && (this.oncomplete(this.state), a(this.state))
                    })
                })
            }

            function i() {
                for (var o of this.state) o.completion < 100 && (o.xhr.abort(), o.status = 0);
                return this.oncancel(this.state), this.state
            }

            function n(o) {
                return {
                    state: [],
                    loaded: !1,
                    stepped: o && o.stepped || !0,
                    onprogress: () => {},
                    oncomplete: () => {},
                    onfetched: () => {},
                    onerror: () => {},
                    oncancel: () => {},
                    fetch: r,
                    updateProgressBar: t,
                    preloadOne: s,
                    getItemByUrl: e,
                    cancel: i
                }
            }
            return n
        })
    });
    var bc = me((p_, cn) => {
        (function (s, t) {
            var e = t(s, s.document, Date);
            s.lazySizes = e, typeof cn == "object" && cn.exports && (cn.exports = e)
        })(typeof window != "undefined" ? window : {}, function (t, e, r) {
            "use strict";
            var i, n;
            if (function () {
                    var O, z = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        fastLoadedClass: "ls-is-cached",
                        iframeLoadMode: 0,
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2,
                        loadHidden: !0,
                        ricTimeout: 0,
                        throttleDelay: 125
                    };
                    n = t.lazySizesConfig || t.lazysizesConfig || {};
                    for (O in z) O in n || (n[O] = z[O])
                }(), !e || !e.getElementsByClassName) return {
                init: function () {},
                cfg: n,
                noSupport: !0
            };
            var o = e.documentElement,
                a = t.HTMLPictureElement,
                l = "addEventListener",
                u = "getAttribute",
                h = t[l].bind(t),
                c = t.setTimeout,
                f = t.requestAnimationFrame || c,
                d = t.requestIdleCallback,
                g = /^picture$/i,
                p = ["load", "error", "lazyincluded", "_lazyloaded"],
                m = {},
                x = Array.prototype.forEach,
                y = function (O, z) {
                    return m[z] || (m[z] = new RegExp("(\\s|^)" + z + "(\\s|$)")), m[z].test(O[u]("class") || "") && m[z]
                },
                v = function (O, z) {
                    y(O, z) || O.setAttribute("class", (O[u]("class") || "").trim() + " " + z)
                },
                b = function (O, z) {
                    var V;
                    (V = y(O, z)) && O.setAttribute("class", (O[u]("class") || "").replace(V, " "))
                },
                w = function (O, z, V) {
                    var G = V ? l : "removeEventListener";
                    V && w(O, z), p.forEach(function (q) {
                        O[G](q, z)
                    })
                },
                D = function (O, z, V, G, q) {
                    var W = e.createEvent("Event");
                    return V || (V = {}), V.instance = i, W.initEvent(z, !G, !q), W.detail = V, O.dispatchEvent(W), W
                },
                T = function (O, z) {
                    var V;
                    !a && (V = t.picturefill || n.pf) ? (z && z.src && !O[u]("srcset") && O.setAttribute("srcset", z.src), V({
                        reevaluate: !0,
                        elements: [O]
                    })) : z && z.src && (O.src = z.src)
                },
                A = function (O, z) {
                    return (getComputedStyle(O, null) || {})[z]
                },
                F = function (O, z, V) {
                    for (V = V || O.offsetWidth; V < n.minSize && z && !O._lazysizesWidth;) V = z.offsetWidth, z = z.parentNode;
                    return V
                },
                P = function () {
                    var O, z, V = [],
                        G = [],
                        q = V,
                        W = function () {
                            var Y = q;
                            for (q = V.length ? G : V, O = !0, z = !1; Y.length;) Y.shift()();
                            O = !1
                        },
                        X = function (Y, rt) {
                            O && !rt ? Y.apply(this, arguments) : (q.push(Y), z || (z = !0, (e.hidden ? c : f)(W)))
                        };
                    return X._lsFlush = W, X
                }(),
                k = function (O, z) {
                    return z ? function () {
                        P(O)
                    } : function () {
                        var V = this,
                            G = arguments;
                        P(function () {
                            O.apply(V, G)
                        })
                    }
                },
                L = function (O) {
                    var z, V = 0,
                        G = n.throttleDelay,
                        q = n.ricTimeout,
                        W = function () {
                            z = !1, V = r.now(), O()
                        },
                        X = d && q > 49 ? function () {
                            d(W, {
                                timeout: q
                            }), q !== n.ricTimeout && (q = n.ricTimeout)
                        } : k(function () {
                            c(W)
                        }, !0);
                    return function (Y) {
                        var rt;
                        (Y = Y === !0) && (q = 33), !z && (z = !0, rt = G - (r.now() - V), rt < 0 && (rt = 0), Y || rt < 9 ? X() : c(X, rt))
                    }
                },
                _ = function (O) {
                    var z, V, G = 99,
                        q = function () {
                            z = null, O()
                        },
                        W = function () {
                            var X = r.now() - V;
                            X < G ? c(W, G - X) : (d || q)(q)
                        };
                    return function () {
                        V = r.now(), z || (z = c(W, G))
                    }
                },
                S = function () {
                    var O, z, V, G, q, W, X, Y, rt, gt, dt, Pt, Pe = /^img$/i,
                        At = /^iframe$/i,
                        Ue = "onscroll" in t && !/(gle|ing)bot/.test(navigator.userAgent),
                        je = 0,
                        be = 0,
                        R = 0,
                        nt = -1,
                        Dt = function (j) {
                            R--, (!j || R < 0 || !j.target) && (R = 0)
                        },
                        Kt = function (j) {
                            return Pt == null && (Pt = A(e.body, "visibility") == "hidden"), Pt || !(A(j.parentNode, "visibility") == "hidden" && A(j, "visibility") == "hidden")
                        },
                        jr = function (j, H) {
                            var lt, K = j,
                                J = Kt(j);
                            for (Y -= H, dt += H, rt -= H, gt += H; J && (K = K.offsetParent) && K != e.body && K != o;) J = (A(K, "opacity") || 1) > 0, J && A(K, "overflow") != "visible" && (lt = K.getBoundingClientRect(), J = gt > lt.left && rt < lt.right && dt > lt.top - 1 && Y < lt.bottom + 1);
                            return J
                        },
                        ze = function () {
                            var j, H, lt, K, J, $, ht, Z, st, ut, pt, mt, ot = i.elements;
                            if ((G = n.loadMode) && R < 8 && (j = ot.length)) {
                                for (H = 0, nt++; H < j; H++)
                                    if (!(!ot[H] || ot[H]._lazyRace)) {
                                        if (!Ue || i.prematureUnveil && i.prematureUnveil(ot[H])) {
                                            Rt(ot[H]);
                                            continue
                                        }
                                        if ((!(Z = ot[H][u]("data-expand")) || !($ = Z * 1)) && ($ = be), ut || (ut = !n.expand || n.expand < 1 ? o.clientHeight > 500 && o.clientWidth > 500 ? 500 : 370 : n.expand, i._defEx = ut, pt = ut * n.expFactor, mt = n.hFac, Pt = null, be < pt && R < 1 && nt > 2 && G > 2 && !e.hidden ? (be = pt, nt = 0) : G > 1 && nt > 1 && R < 6 ? be = ut : be = je), st !== $ && (W = innerWidth + $ * mt, X = innerHeight + $, ht = $ * -1, st = $), lt = ot[H].getBoundingClientRect(), (dt = lt.bottom) >= ht && (Y = lt.top) <= X && (gt = lt.right) >= ht * mt && (rt = lt.left) <= W && (dt || gt || rt || Y) && (n.loadHidden || Kt(ot[H])) && (z && R < 3 && !Z && (G < 3 || nt < 4) || jr(ot[H], $))) {
                                            if (Rt(ot[H]), J = !0, R > 9) break
                                        } else !J && z && !K && R < 4 && nt < 4 && G > 2 && (O[0] || n.preloadAfterLoad) && (O[0] || !Z && (dt || gt || rt || Y || ot[H][u](n.sizesAttr) != "auto")) && (K = O[0] || ot[H])
                                    } K && !J && Rt(K)
                            }
                        },
                        Ot = L(ze),
                        nr = function (j) {
                            var H = j.target;
                            if (H._lazyCache) {
                                delete H._lazyCache;
                                return
                            }
                            Dt(j), v(H, n.loadedClass), b(H, n.loadingClass), w(H, qr), D(H, "lazyloaded")
                        },
                        li = k(nr),
                        qr = function (j) {
                            li({
                                target: j.target
                            })
                        },
                        Ds = function (j, H) {
                            var lt = j.getAttribute("data-load-mode") || n.iframeLoadMode;
                            lt == 0 ? j.contentWindow.location.replace(H) : lt == 1 && (j.src = H)
                        },
                        Wr = function (j) {
                            var H, lt = j[u](n.srcsetAttr);
                            (H = n.customMedia[j[u]("data-media") || j[u]("media")]) && j.setAttribute("media", H), lt && j.setAttribute("srcset", lt)
                        },
                        ys = k(function (j, H, lt, K, J) {
                            var $, ht, Z, st, ut, pt;
                            (ut = D(j, "lazybeforeunveil", H)).defaultPrevented || (K && (lt ? v(j, n.autosizesClass) : j.setAttribute("sizes", K)), ht = j[u](n.srcsetAttr), $ = j[u](n.srcAttr), J && (Z = j.parentNode, st = Z && g.test(Z.nodeName || "")), pt = H.firesLoad || "src" in j && (ht || $ || st), ut = {
                                target: j
                            }, v(j, n.loadingClass), pt && (clearTimeout(V), V = c(Dt, 2500), w(j, qr, !0)), st && x.call(Z.getElementsByTagName("source"), Wr), ht ? j.setAttribute("srcset", ht) : $ && !st && (At.test(j.nodeName) ? Ds(j, $) : j.src = $), J && (ht || st) && T(j, {
                                src: $
                            })), j._lazyRace && delete j._lazyRace, b(j, n.lazyClass), P(function () {
                                var mt = j.complete && j.naturalWidth > 1;
                                (!pt || mt) && (mt && v(j, n.fastLoadedClass), nr(ut), j._lazyCache = !0, c(function () {
                                    "_lazyCache" in j && delete j._lazyCache
                                }, 9)), j.loading == "lazy" && R--
                            }, !0)
                        }),
                        Rt = function (j) {
                            if (!j._lazyRace) {
                                var H, lt = Pe.test(j.nodeName),
                                    K = lt && (j[u](n.sizesAttr) || j[u]("sizes")),
                                    J = K == "auto";
                                (J || !z) && lt && (j[u]("src") || j.srcset) && !j.complete && !y(j, n.errorClass) && y(j, n.lazyClass) || (H = D(j, "lazyunveilread").detail, J && U.updateElem(j, !0, j.offsetWidth), j._lazyRace = !0, R++, ys(j, H, J, K, lt))
                            }
                        },
                        Yr = _(function () {
                            n.loadMode = 3, Ot()
                        }),
                        Ce = function () {
                            n.loadMode == 3 && (n.loadMode = 2), Yr()
                        },
                        Te = function () {
                            if (!z) {
                                if (r.now() - q < 999) {
                                    c(Te, 999);
                                    return
                                }
                                z = !0, n.loadMode = 3, Ot(), h("scroll", Ce, !0)
                            }
                        };
                    return {
                        _: function () {
                            q = r.now(), i.elements = e.getElementsByClassName(n.lazyClass), O = e.getElementsByClassName(n.lazyClass + " " + n.preloadClass), h("scroll", Ot, !0), h("resize", Ot, !0), h("pageshow", function (j) {
                                if (j.persisted) {
                                    var H = e.querySelectorAll("." + n.loadingClass);
                                    H.length && H.forEach && f(function () {
                                        H.forEach(function (lt) {
                                            lt.complete && Rt(lt)
                                        })
                                    })
                                }
                            }), t.MutationObserver ? new MutationObserver(Ot).observe(o, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            }) : (o[l]("DOMNodeInserted", Ot, !0), o[l]("DOMAttrModified", Ot, !0), setInterval(Ot, 999)), h("hashchange", Ot, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (j) {
                                e[l](j, Ot, !0)
                            }), /d$|^c/.test(e.readyState) ? Te() : (h("load", Te), e[l]("DOMContentLoaded", Ot), c(Te, 2e4)), i.elements.length ? (ze(), P._lsFlush()) : Ot()
                        },
                        checkElems: Ot,
                        unveil: Rt,
                        _aLSL: Ce
                    }
                }(),
                U = function () {
                    var O, z = k(function (W, X, Y, rt) {
                            var gt, dt, Pt;
                            if (W._lazysizesWidth = rt, rt += "px", W.setAttribute("sizes", rt), g.test(X.nodeName || ""))
                                for (gt = X.getElementsByTagName("source"), dt = 0, Pt = gt.length; dt < Pt; dt++) gt[dt].setAttribute("sizes", rt);
                            Y.detail.dataAttr || T(W, Y.detail)
                        }),
                        V = function (W, X, Y) {
                            var rt, gt = W.parentNode;
                            gt && (Y = F(W, gt, Y), rt = D(W, "lazybeforesizes", {
                                width: Y,
                                dataAttr: !!X
                            }), rt.defaultPrevented || (Y = rt.detail.width, Y && Y !== W._lazysizesWidth && z(W, gt, rt, Y)))
                        },
                        G = function () {
                            var W, X = O.length;
                            if (X)
                                for (W = 0; W < X; W++) V(O[W])
                        },
                        q = _(G);
                    return {
                        _: function () {
                            O = e.getElementsByClassName(n.autosizesClass), h("resize", q)
                        },
                        checkElems: q,
                        updateElem: V
                    }
                }(),
                M = function () {
                    !M.i && e.getElementsByClassName && (M.i = !0, U._(), S._())
                };
            return c(function () {
                n.init && M()
            }), i = {
                cfg: n,
                autoSizer: U,
                loader: S,
                init: M,
                uP: T,
                aC: v,
                rC: b,
                hC: y,
                fire: D,
                gW: F,
                rAF: P
            }, i
        })
    });
    var C = {
        title: "Elva Design Group",
        author: {
            name: "Non-Linear",
            link: "https://www.non-linear.studio/"
        },
        header: null,
        html: document.querySelector("html"),
        body: document.body,
        main: document.querySelector("main"),
        page: {
            el: null,
            vw: 0,
            vh: 0,
            h: 0
        },
        sniff: {
            browser: null,
            breakpoints: null,
            orientation: null
        },
        RAF: null,
        MOUSE: null,
        SCROLL: null,
        LOADED: !1,
        smooth: {
            container: null,
            height: 0
        },
        webgl: {
            scenes: [],
            slider: {
                dragging: !1,
                planes: []
            },
            images: {
                planes: []
            },
            smiley: {
                planes: [],
                posY: 0,
                sprite: 0,
                gooey: 0
            },
            swirl: {
                planes: [],
                posY: 0
            }
        },
        flags: {
            smooth: !0,
            locked: !0,
            resize: !1,
            loaded: !1
        }
    };

    function gn() {}
    gn.prototype = {
        on: function (s, t, e) {
            var r = this.e || (this.e = {});
            return (r[s] || (r[s] = [])).push({
                fn: t,
                ctx: e
            }), this
        },
        once: function (s, t, e) {
            var r = this;

            function i() {
                r.off(s, i), t.apply(e, arguments)
            }
            return i._ = t, this.on(s, i, e)
        },
        emit: function (s) {
            for (var t = [].slice.call(arguments, 1), e = ((this.e || (this.e = {}))[s] || []).slice(), r = 0, i = e.length; r < i; r++) e[r].fn.apply(e[r].ctx, t);
            return this
        },
        off: function (s, t) {
            var e = this.e || (this.e = {}),
                r = e[s],
                i = [];
            if (r && t)
                for (var n = 0, o = r.length; n < o; n++) r[n].fn !== t && r[n].fn._ !== t && i.push(r[n]);
            return i.length ? e[s] = i : delete e[s], this
        }
    };
    var Sa = gn;
    Sa.TinyEmitter = gn;
    var We = function (s) {
        this.wrap = document.querySelector("[data-router-wrapper]"), this.properties = s, this.Transition = s.transition ? new s.transition.class(this.wrap, s.transition.name) : null
    };
    We.prototype.setup = function () {
        this.onEnter && this.onEnter(), this.onEnterCompleted && this.onEnterCompleted()
    }, We.prototype.add = function () {
        this.wrap.insertAdjacentHTML("beforeend", this.properties.view.outerHTML)
    }, We.prototype.update = function () {
        document.title = this.properties.page.title
    }, We.prototype.show = function (s) {
        var t = this;
        return new Promise(function (e) {
            try {
                let r = function (i) {
                    t.onEnterCompleted && t.onEnterCompleted(), e()
                };
                return t.update(), t.onEnter && t.onEnter(), Promise.resolve(t.Transition ? Promise.resolve(t.Transition.show(s)).then(r) : r())
            } catch (r) {
                return Promise.reject(r)
            }
        })
    }, We.prototype.hide = function (s) {
        var t = this;
        return new Promise(function (e) {
            try {
                let r = function (i) {
                    t.onLeaveCompleted && t.onLeaveCompleted(), e()
                };
                return t.onLeave && t.onLeave(), Promise.resolve(t.Transition ? Promise.resolve(t.Transition.hide(s)).then(r) : r())
            } catch (r) {
                return Promise.reject(r)
            }
        })
    };
    var Lc = new window.DOMParser,
        ue = function (s, t) {
            this.renderers = s, this.transitions = t
        };
    ue.prototype.getOrigin = function (s) {
        var t = s.match(/(https?:\/\/[\w\-.]+)/);
        return t ? t[1].replace(/https?:\/\//, "") : null
    }, ue.prototype.getPathname = function (s) {
        var t = s.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
        return t ? t[1] : "/"
    }, ue.prototype.getAnchor = function (s) {
        var t = s.match(/(#.*)$/);
        return t ? t[1] : null
    }, ue.prototype.getParams = function (s) {
        var t = s.match(/\?([\w_\-.=&]+)/);
        if (!t) return null;
        for (var e = t[1].split("&"), r = {}, i = 0; i < e.length; i++) {
            var n = e[i].split("=");
            r[n[0]] = n[1]
        }
        return r
    }, ue.prototype.getDOM = function (s) {
        return typeof s == "string" ? Lc.parseFromString(s, "text/html") : s
    }, ue.prototype.getView = function (s) {
        return s.querySelector("[data-router-view]")
    }, ue.prototype.getSlug = function (s) {
        return s.getAttribute("data-router-view")
    }, ue.prototype.getRenderer = function (s) {
        if (!this.renderers) return Promise.resolve(We);
        if (s in this.renderers) {
            var t = this.renderers[s];
            return typeof t != "function" || We.isPrototypeOf(t) ? typeof t.then == "function" ? Promise.resolve(t).then(function (e) {
                return e.default
            }) : Promise.resolve(t) : Promise.resolve(t()).then(function (e) {
                return e.default
            })
        }
        return Promise.resolve(We)
    }, ue.prototype.getTransition = function (s) {
        return this.transitions ? s in this.transitions ? {
            class: this.transitions[s],
            name: s
        } : "default" in this.transitions ? {
            class: this.transitions.default,
            name: "default"
        } : null : null
    }, ue.prototype.getProperties = function (s) {
        var t = this.getDOM(s),
            e = this.getView(t),
            r = this.getSlug(e);
        return {
            page: t,
            view: e,
            slug: r,
            renderer: this.getRenderer(r, this.renderers),
            transition: this.getTransition(r, this.transitions)
        }
    }, ue.prototype.getLocation = function (s) {
        return {
            href: s,
            anchor: this.getAnchor(s),
            origin: this.getOrigin(s),
            params: this.getParams(s),
            pathname: this.getPathname(s)
        }
    };
    var kc = function (s) {
            function t(e) {
                var r = this;
                e === void 0 && (e = {});
                var i = e.renderers,
                    n = e.transitions;
                s.call(this), this.Helpers = new ue(i, n), this.Transitions = n, this.Contextual = !1, this.location = this.Helpers.getLocation(window.location.href), this.properties = this.Helpers.getProperties(document.cloneNode(!0)), this.popping = !1, this.running = !1, this.trigger = null, this.cache = new Map, this.cache.set(this.location.href, this.properties), this.properties.renderer.then(function (o) {
                    r.From = new o(r.properties), r.From.setup()
                }), this._navigate = this.navigate.bind(this), window.addEventListener("popstate", this.popState.bind(this)), this.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])"), this.attach(this.links)
            }
            return s && (t.__proto__ = s), (t.prototype = Object.create(s && s.prototype)).constructor = t, t.prototype.attach = function (e) {
                for (var r = 0, i = e; r < i.length; r += 1) i[r].addEventListener("click", this._navigate)
            }, t.prototype.detach = function (e) {
                for (var r = 0, i = e; r < i.length; r += 1) i[r].removeEventListener("click", this._navigate)
            }, t.prototype.navigate = function (e) {
                if (!e.metaKey && !e.ctrlKey) {
                    e.preventDefault();
                    var r = !!e.currentTarget.hasAttribute("data-transition") && e.currentTarget.dataset.transition;
                    this.redirect(e.currentTarget.href, r, e.currentTarget)
                }
            }, t.prototype.redirect = function (e, r, i) {
                if (r === void 0 && (r = !1), i === void 0 && (i = "script"), this.trigger = i, !this.running && e !== this.location.href) {
                    var n = this.Helpers.getLocation(e);
                    this.Contextual = !1, r && (this.Contextual = this.Transitions.contextual[r].prototype, this.Contextual.name = r), n.origin !== this.location.origin || n.anchor && n.pathname === this.location.pathname ? window.location.href = e : (this.location = n, this.beforeFetch())
                }
            }, t.prototype.popState = function () {
                this.trigger = "popstate", this.Contextual = !1;
                var e = this.Helpers.getLocation(window.location.href);
                this.location.pathname !== e.pathname || !this.location.anchor && !e.anchor ? (this.popping = !0, this.location = e, this.beforeFetch()) : this.location = e
            }, t.prototype.pushState = function () {
                this.popping || window.history.pushState(this.location, "", this.location.href)
            }, t.prototype.fetch = function () {
                try {
                    var e = this;
                    return Promise.resolve(fetch(e.location.href, {
                        mode: "same-origin",
                        method: "GET",
                        headers: {
                            "X-Requested-With": "Highway"
                        },
                        credentials: "same-origin"
                    })).then(function (r) {
                        if (r.status >= 200 && r.status < 300) return r.text();
                        window.location.href = e.location.href
                    })
                } catch (r) {
                    return Promise.reject(r)
                }
            }, t.prototype.beforeFetch = function () {
                try {
                    let n = function () {
                        e.afterFetch()
                    };
                    var e = this;
                    e.pushState(), e.running = !0, e.emit("NAVIGATE_OUT", {
                        from: {
                            page: e.From.properties.page,
                            view: e.From.properties.view
                        },
                        trigger: e.trigger,
                        location: e.location
                    });
                    var r = {
                            trigger: e.trigger,
                            contextual: e.Contextual
                        },
                        i = e.cache.has(e.location.href) ? Promise.resolve(e.From.hide(r)).then(function () {
                            e.properties = e.cache.get(e.location.href)
                        }) : Promise.resolve(Promise.all([e.fetch(), e.From.hide(r)])).then(function (o) {
                            e.properties = e.Helpers.getProperties(o[0]), e.cache.set(e.location.href, e.properties)
                        });
                    return Promise.resolve(i && i.then ? i.then(n) : n())
                } catch (n) {
                    return Promise.reject(n)
                }
            }, t.prototype.afterFetch = function () {
                try {
                    var e = this;
                    return Promise.resolve(e.properties.renderer).then(function (r) {
                        return e.To = new r(e.properties), e.To.add(), e.emit("NAVIGATE_IN", {
                            to: {
                                page: e.To.properties.page,
                                view: e.To.wrap.lastElementChild
                            },
                            trigger: e.trigger,
                            location: e.location
                        }), Promise.resolve(e.To.show({
                            trigger: e.trigger,
                            contextual: e.Contextual
                        })).then(function () {
                            e.popping = !1, e.running = !1, e.detach(e.links), e.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])"), e.attach(e.links), e.emit("NAVIGATE_END", {
                                to: {
                                    page: e.To.properties.page,
                                    view: e.To.wrap.lastElementChild
                                },
                                from: {
                                    page: e.From.properties.page,
                                    view: e.From.properties.view
                                },
                                trigger: e.trigger,
                                location: e.location
                            }), e.From = e.To, e.trigger = null
                        })
                    })
                } catch (r) {
                    return Promise.reject(r)
                }
            }, t
        }(Sa),
        xn = function (s, t) {
            this.wrap = s, this.name = t
        };
    xn.prototype.show = function (s) {
        var t = this,
            e = s.trigger,
            r = s.contextual,
            i = this.wrap.lastElementChild,
            n = this.wrap.firstElementChild;
        return new Promise(function (o) {
            r ? (i.setAttribute("data-transition-in", r.name), i.removeAttribute("data-transition-out", r.name), r.in && r.in({
                to: i,
                from: n,
                trigger: e,
                done: o
            })) : (i.setAttribute("data-transition-in", t.name), i.removeAttribute("data-transition-out", t.name), t.in && t.in({
                to: i,
                from: n,
                trigger: e,
                done: o
            }))
        })
    }, xn.prototype.hide = function (s) {
        var t = this,
            e = s.trigger,
            r = s.contextual,
            i = this.wrap.firstElementChild;
        return new Promise(function (n) {
            r ? (i.setAttribute("data-transition-out", r.name), i.removeAttribute("data-transition-in", r.name), r.out && r.out({
                from: i,
                trigger: e,
                done: n
            })) : (i.setAttribute("data-transition-out", t.name), i.removeAttribute("data-transition-in", t.name), t.out && t.out({
                from: i,
                trigger: e,
                done: n
            }))
        })
    }, console.log("Highway v2.2.0");
    var Gr = {
        Core: kc,
        Helpers: ue,
        Renderer: We,
        Transition: xn
    };
    var Pa = or(_n()),
        B = new Pa.default;
    var N = (s, t = document) => t.querySelector(s),
        I = (s, t = document) => Oc(t.querySelectorAll(s)),
        Oc = s => Array.prototype.slice.call(s, 0);

    function Ye(s) {
        let t = [].slice.call(arguments, 1);
        for (var e = 0; e < t.length; e++) {
            let r = t[e];
            s[r] = Rc(s[r], s)
        }
    }

    function Rc(s, t) {
        return function () {
            return s.apply(t, arguments)
        }
    }

    function vs(s, t, e, r, i) {
        let n = s.length,
            o = i === !0 ? {
                passive: !0
            } : !1;
        if (n !== 0)
            for (let a = 0; a < n; a++) s[a][t + "EventListener"](e, r, o);
        else s[t + "EventListener"](e, r, o)
    }
    var at = s => {
        let t = s.getBoundingClientRect();
        return {
            bottom: t.bottom,
            left: t.left,
            height: t.height,
            right: t.right,
            top: t.top,
            width: t.width,
            x: t.x,
            y: t.y
        }
    };
    var Xr = () => {
            let s = window,
                t = "inner";
            return "innerWidth" in window || (t = "client", s = document.documentElement || document.body), {
                width: s[`${t}Width`],
                height: s[`${t}Height`]
            }
        },
        ws = () => ({
            XS: window.innerWidth <= 500,
            S: window.innerWidth <= 749,
            S_UP: window.innerWidth >= 501,
            M: window.innerWidth <= 1024,
            M_UP: window.innerWidth >= 750,
            L: window.innerWidth >= 1025
        }),
        vn = () => {
            let s = window.innerHeight * .01;
            document.documentElement.style.setProperty("--vh", `${s}px`)
        };
    var Mt = {
        uA: navigator.userAgent.toLowerCase(),
        aV: navigator.appVersion.toLowerCase(),
        get isWindowsMobile() {
            return /windows phone|iemobile|wpdesktop/.test(this.uA)
        },
        get isMobileOpera() {
            return /opera mini/i.test(this.uA)
        },
        get isIOS() {
            return /iphone|ipad|ipod/i.test(this.uA)
        },
        get isIpad() {
            return !this.isWindowsMobile && /ipad/i.test(this.uA) && this.isIOS
        },
        get isLatestIpad() {
            return /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1
        },
        get isIphone() {
            return !this.isWindowsMobile && /iphone/i.test(this.uA) && this.isIOS
        },
        get isMobileAndroid() {
            return !this.isWindowsMobile && /android.*mobile/.test(this.uA)
        },
        get isTabletAndroid() {
            return !this.isWindowsMobile && !this.isMobileAndroid && /android/i.test(this.uA)
        },
        get isAndroid() {
            return this.isMobileAndroid || this.isTabletAndroid
        },
        get isPhone() {
            return this.isMobileAndroid || this.isIOS && !this.isIpad || this.isWindowsMobile
        },
        get isTablet() {
            return this.isTabletAndroid || this.isIpad
        },
        get isDevice() {
            return this.isPhone || this.isTablet || this.isLatestIpad
        },
        get isFirefox() {
            return this.uA.indexOf("firefox") > -1
        },
        get isSafari() {
            return !!this.uA.match(/version\/[\d\.]+.*safari/)
        },
        get isOpera() {
            return this.uA.indexOf("opr") > -1
        },
        get isIE11() {
            return !window.ActiveXObject && "ActiveXObject" in window
        },
        get isIE() {
            return this.aV.indexOf("msie") > -1 || this.isIE11 || this.aV.indexOf("edge") > -1
        },
        get isEdge() {
            return this.uA.indexOf("edge") > -1
        },
        get isWindows() {
            return ["Win32", "Win64", "Windows", "WinCE"].indexOf(window.navigator.platform) !== -1
        },
        get isChrome() {
            return window.chrome !== null && window.chrome !== void 0 && navigator.vendor.toLowerCase() == "google inc." && !this.isOpera && !this.isEdge
        },
        get isMac() {
            return navigator.platform.toLowerCase().indexOf("mac") > -1
        },
        get isDesktop() {
            return !this.isPhone && !this.isTablet && !this.isLatestIpad
        },
        get isTouch() {
            return "ontouchstart" in window
        },
        get sniff() {
            return {
                isWindowsMobile: this.isWindowsMobile,
                isMobileOpera: this.isMobileOpera,
                isIOS: this.isIOS,
                isIpad: this.isIpad,
                isIphone: this.isIphone,
                isMobileAndroid: this.isMobileAndroid,
                isTabletAndroid: this.isTabletAndroid,
                isAndroid: this.isAndroid,
                isFirefox: this.isFirefox,
                isSafari: this.isSafari,
                isOpera: this.isOpera,
                isIE11: this.isIE11,
                isIE: this.isIE,
                isEdge: this.isEdge,
                isChrome: this.isChrome,
                isMac: this.isMac,
                isPhone: this.isPhone,
                isTablet: this.isTablet,
                isDevice: this.isDevice,
                isDesktop: this.isDesktop,
                isWindows: this.isWindows,
                isTouch: this.isTouch,
                isLatestIpad: this.isLatestIpad
            }
        },
        update() {
            Object.assign(this, {
                uA: navigator.userAgent.toLowerCase(),
                aV: navigator.appVersion.toLowerCase()
            })
        }
    };
    var Fe = (s, t, e) => s * (1 - e) + t * e;
    var wn = (s, t, e) => Math.min(Math.max(s, t), e);
    var Es = class {
        constructor() {
            this.el = null, this.handle = null, this.state = {
                clicked: !1,
                scale: 0,
                current: 0
            }, this.height = 0, this.init()
        }
        init() {
            this.create(), this.setBounds(), this.on()
        }
        on() {
            B.on("tick", this.transform), B.on("resize", this.resize)
        }
        off() {
            B.off("tick", this.transform), B.off("resize", this.resize)
        }
        setBounds() {
            let {
                page: t
            } = C, e = t.h, r = t.vh;
            this.state.scale = (e + r) / r, this.handle.style.height = `${r/this.state.scale}px`
        }
        transform = ({
            current: t
        }) => {
            let e = t / this.state.scale;
            this.state.current = e, this.handle.style.transform = `translate3d(0, ${this.state.current}px, 0)`
        };
        resize = () => {
            this.setBounds()
        };
        calcScroll(t) {
            let e = t.clientY * this.state.scale;
            ar.target = e, ar.clampTarget()
        }
        create() {
            this.el = document.createElement("div"), this.handle = document.createElement("div"), this.el.classList.add("scrollbar", "js-scrollbar"), this.handle.classList.add("scrollbar__handle", "js-scrollbar__handle"), Object.assign(this.el.style, {
                position: "fixed",
                top: 0,
                right: 0,
                height: "100%",
                pointerEvents: "all"
            }), Object.assign(this.handle.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                cursor: "pointer"
            }), C.page.el.appendChild(this.el), this.el.appendChild(this.handle)
        }
        update() {
            this.setBounds()
        }
        destroy() {
            this.off()
        }
    };
    var Ge = new class {
        constructor() {
            Ye(this, "run", "resize"), this.el = N("[data-smooth]"), this.elems = null, this.current = 0, this.threshold = 100, this.sections = null, this.scrollbar = null
        }
        getSections() {
            !this.elems || !C.flags.smooth || (this.sections = null, this.sections = [], this.elems.forEach(t => {
                t.style.transform = "translate3d(0, 0, 0)";
                let e = t.dataset.speed || 1,
                    {
                        top: r,
                        bottom: i,
                        offset: n
                    } = this.getVars(t, e),
                    o = t.parentNode.closest("[data-smooth-item]");
                o && this.sections.some(a => {
                    a.el === o && (o = a)
                }), this.sections.push({
                    el: t,
                    parent: o,
                    top: r,
                    bottom: i,
                    offset: n,
                    speed: e,
                    out: !0,
                    transform: 0
                })
            }))
        }
        run = ({
            current: t
        }) => {
            this.current = t, this.transformSections()
        };
        transformSections() {
            if (!this.sections || !C.flags.smooth) return;
            let {
                resize: t
            } = C.flags;
            for (let e = 0; e < this.sections.length; e++) {
                let r = this.sections[e],
                    {
                        isVisible: i,
                        transform: n
                    } = this.isVisible(r);
                i || t ? (r.out = !1, r.transform = n, r.el.style.transform = this.getTransform(n)) : r.out || (r.out = !0, r.transform = n, r.el.style.transform = this.getTransform(n))
            }
        }
        isVisible(t) {
            let {
                page: e
            } = C, {
                top: r,
                bottom: i,
                offset: n,
                speed: o,
                parent: a
            } = t, l = a && a.transform || 0, u = this.current * o, h = u - n - l, c = r - u, f = i - u;
            return {
                isVisible: c < this.threshold + e.vh && f > -this.threshold,
                transform: h
            }
        }
        getTransform(t) {
            return `translate3d(0, ${-t}px, 0)`
        }
        getVars(t, e) {
            let {
                page: r
            } = C, i = at(t), n = r.vh / 2 - i.height / 2, o = i.top < r.vh ? 0 : (i.top - n) * e - (i.top - n), a = i.top + o, l = i.bottom + o;
            return {
                top: a,
                bottom: l,
                offset: o
            }
        }
        on() {
            B.on("tick", this.run), B.on("resize", this.resize)
        }
        off() {
            B.off("tick", this.run), B.off("resize", this.resize)
        }
        update(t) {
            C.flags.resize = !0, C.SCROLL.setScrollBounds(), this.elems = t || I("[data-smooth-item]"), this.scrollbar.update(), this.getSections(), this.transformSections(), C.flags.resize = !1
        }
        clean() {
            this.elems = this.sections = null
        }
        resize() {
            !this.sections || (this.sections.forEach(t => {
                t.el.style.transform = "translate3d(0, 0, 0)";
                let {
                    top: e,
                    bottom: r,
                    offset: i
                } = this.getVars(t.el, t.speed);
                Object.assign(t, {
                    top: e,
                    bottom: r,
                    offset: i
                })
            }), B.emit("smooth:resize"), this.transformSections())
        }
        init(t) {
            this.elems = t || I("[data-smooth-item]"), this.getSections(), this.scrollbar = new Es, this.on()
        }
    };
    var En = () => {
        I("form").forEach(t => {
            let e = I("input", t),
                r = I("textarea", t);
            e.forEach(i => {
                i.addEventListener("focus", za), i.addEventListener("focusout", La)
            }), r.forEach(i => {
                i.addEventListener("focus", za), i.addEventListener("focusout", La)
            })
        })
    };
    var za = () => {
            C.focus = !0
        },
        La = () => {
            C.focus = !1
        },
        bn = () => {
            I("form").forEach(t => {
                let e = document.getElementsByTagName("textarea");
                for (var r = 0; r < e.length; r++) e[r].setAttribute("style", "height:" + e[r].scrollHeight + "px;overflow-y:hidden;"), e[r].addEventListener("input", Bc, !1)
            })
        },
        Bc = s => {
            let t = s.target,
                e = t.scrollHeight,
                r = parseInt(t.style.height);
            t.style.height = "auto", t.style.height = t.scrollHeight + "px", t.value.length !== 0 ? t.classList.add("-active") : (t.classList.remove("-active"), t.style.height = ""), e !== r && Ge.update()
        };
    var ka = (s, t) => {
            let e = s.position.z - 1,
                r = s.fov * Math.PI / 180,
                i = 2 * Math.tan(r / 2) * e;
            return {
                width: i * t,
                height: i,
                vFov: r
            }
        },
        Xe = (s, t, e) => {
            let {
                page: r
            } = C, i = {}, n = ka(t, e), {
                vw: o,
                vh: a
            } = r, l = s.width / o, u = s.height / a;
            if (!(!l || !u)) return i.x = n.width * l, i.y = n.height * u, {
                size: i,
                camUnit: n
            }
        },
        He = (s, t, e = 0) => {
            let {
                page: r
            } = C, {
                vw: i
            } = r, n;
            return n = -(t.camUnit.width / 2) + t.size.x / 2, n += (s + e) / i * t.camUnit.width, {
                x: n
            }
        },
        Oe = (s, t, e) => {
            let {
                page: r
            } = C, {
                vh: i
            } = r, n;
            return n = -(t.camUnit.height / 2) + t.size.y / 2, n += (s + e) / i * t.camUnit.height, {
                y: n
            }
        };

    function $e(s) {
        if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s
    }

    function Oa(s, t) {
        s.prototype = Object.create(t.prototype), s.prototype.constructor = s, s.__proto__ = t
    }
    var Zt = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        Hr = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        Cn, ge = 1e8,
        ct = 1 / ge,
        Tn = Math.PI * 2,
        Ic = Tn / 4,
        Nc = 0,
        Ra = Math.sqrt,
        Vc = Math.cos,
        Uc = Math.sin,
        Tt = function (t) {
            return typeof t == "string"
        },
        St = function (t) {
            return typeof t == "function"
        },
        Qe = function (t) {
            return typeof t == "number"
        },
        hi = function (t) {
            return typeof t == "undefined"
        },
        Ke = function (t) {
            return typeof t == "object"
        },
        Jt = function (t) {
            return t !== !1
        },
        Ba = function () {
            return typeof window != "undefined"
        },
        ci = function (t) {
            return St(t) || Tt(t)
        },
        Ia = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () {},
        It = Array.isArray,
        Fn = /(?:-?\.?\d|\.)+/gi,
        An = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        wr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        Mn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        Sn = /[+-]=-?[.\d]+/,
        Na = /[^,'"\[\]\s]+/gi,
        jc = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        xt, Re, Pn, zn, he = {},
        fi = {},
        Va, Ua = function (t) {
            return (fi = br(t, he)) && ce
        },
        pi = function (t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        di = function (t, e) {
            return !e && console.warn(t)
        },
        ja = function (t, e) {
            return t && (he[t] = e) && fi && (fi[t] = e) || he
        },
        bs = function () {
            return 0
        },
        Ln = {},
        lr = [],
        kn = {},
        qa, te = {},
        On = {},
        Wa = 30,
        mi = [],
        Rn = "",
        Bn = function (t) {
            var e = t[0],
                r, i;
            if (Ke(e) || St(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
                for (i = mi.length; i-- && !mi[i].targetTest(e););
                r = mi[i]
            }
            for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Xn(t[i], r))) || t.splice(i, 1);
            return t
        },
        ur = function (t) {
            return t._gsap || Bn(ye(t))[0]._gsap
        },
        In = function (t, e, r) {
            return (r = t[e]) && St(r) ? t[e]() : hi(r) && t.getAttribute && t.getAttribute(e) || r
        },
        Yt = function (t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        yt = function (t) {
            return Math.round(t * 1e5) / 1e5 || 0
        },
        Nt = function (t) {
            return Math.round(t * 1e7) / 1e7 || 0
        },
        Er = function (t, e) {
            var r = e.charAt(0),
                i = parseFloat(e.substr(2));
            return t = parseFloat(t), r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i
        },
        qc = function (t, e) {
            for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
            return i < r
        },
        gi = function () {
            var t = lr.length,
                e = lr.slice(0),
                r, i;
            for (kn = {}, lr.length = 0, r = 0; r < t; r++) i = e[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
        },
        Ya = function (t, e, r, i) {
            lr.length && gi(), t.render(e, r, i), lr.length && gi()
        },
        Ga = function (t) {
            var e = parseFloat(t);
            return (e || e === 0) && (t + "").match(Na).length < 2 ? e : Tt(t) ? t.trim() : t
        },
        Xa = function (t) {
            return t
        },
        xe = function (t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t
        },
        Wc = function (t) {
            return function (e, r) {
                for (var i in r) i in e || i === "duration" && t || i === "ease" || (e[i] = r[i])
            }
        },
        br = function (t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        Ha = function s(t, e) {
            for (var r in e) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = Ke(e[r]) ? s(t[r] || (t[r] = {}), e[r]) : e[r]);
            return t
        },
        xi = function (t, e) {
            var r = {},
                i;
            for (i in t) i in e || (r[i] = t[i]);
            return r
        },
        Cs = function (t) {
            var e = t.parent || xt,
                r = t.keyframes ? Wc(It(t.keyframes)) : xe;
            if (Jt(t.inherit))
                for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
            return t
        },
        Yc = function (t, e) {
            for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
            return r < 0
        },
        $a = function (t, e, r, i, n) {
            r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
            var o = t[i],
                a;
            if (n)
                for (a = e[n]; o && o[n] > a;) o = o._prev;
            return o ? (e._next = o._next, o._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = o, e.parent = e._dp = t, e
        },
        Di = function (t, e, r, i) {
            r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
            var n = e._prev,
                o = e._next;
            n ? n._next = o : t[r] === e && (t[r] = o), o ? o._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
        },
        Ze = function (t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
        },
        Cr = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var r = t; r;) r._dirty = 1, r = r.parent;
            return t
        },
        Gc = function (t) {
            for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
        },
        Xc = function s(t) {
            return !t || t._ts && s(t.parent)
        },
        Qa = function (t) {
            return t._repeat ? $r(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        $r = function (t, e) {
            var r = Math.floor(t /= e);
            return t && r === t ? r - 1 : r
        },
        yi = function (t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        _i = function (t) {
            return t._end = Nt(t._start + (t._tDur / Math.abs(t._ts || t._rts || ct) || 0))
        },
        Nn = function (t, e) {
            var r = t._dp;
            return r && r.smoothChildTiming && t._ts && (t._start = Nt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), _i(t), r._dirty || Cr(r, t)), t
        },
        Ka = function (t, e) {
            var r;
            if ((e._time || e._initted && !e._dur) && (r = yi(t.rawTime(), e), (!e._dur || Fs(0, e.totalDuration(), r) - e._tTime > ct) && e.render(r, !0)), Cr(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                t._zTime = -ct
            }
        },
        Be = function (t, e, r, i) {
            return e.parent && Ze(e), e._start = Nt((Qe(r) ? r : r || t !== xt ? De(t, r, e) : t._time) + e._delay), e._end = Nt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), $a(t, e, "_first", "_last", t._sort ? "_start" : 0), Vn(e) || (t._recent = e), i || Ka(t, e), t
        },
        Za = function (t, e) {
            return (he.ScrollTrigger || pi("scrollTrigger", e)) && he.ScrollTrigger.create(e, t)
        },
        Ja = function (t, e, r, i) {
            if (Kn(t, e), !t._initted) return 1;
            if (!r && t._pt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && qa !== ee.frame) return lr.push(t), t._lazy = [e, i], 1
        },
        Hc = function s(t) {
            var e = t.parent;
            return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || s(e))
        },
        Vn = function (t) {
            var e = t.data;
            return e === "isFromStart" || e === "isStart"
        },
        $c = function (t, e, r, i) {
            var n = t.ratio,
                o = e < 0 || !e && (!t._start && Hc(t) && !(!t._initted && Vn(t)) || (t._ts < 0 || t._dp._ts < 0) && !Vn(t)) ? 0 : 1,
                a = t._rDelay,
                l = 0,
                u, h, c;
            if (a && t._repeat && (l = Fs(0, t._tDur, e), h = $r(l, a), t._yoyo && h & 1 && (o = 1 - o), h !== $r(t._tTime, a) && (n = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== n || i || t._zTime === ct || !e && t._zTime) {
                if (!t._initted && Ja(t, e, i, r)) return;
                for (c = t._zTime, t._zTime = e || (r ? ct : 0), r || (r = e && !c), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, u = t._pt; u;) u.r(o, u.d), u = u._next;
                t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && _e(t, "onUpdate"), l && t._repeat && !r && t.parent && _e(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && Ze(t, 1), r || (_e(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
        },
        Qc = function (t, e, r) {
            var i;
            if (r > e)
                for (i = t._first; i && i._start <= r;) {
                    if (i.data === "isPause" && i._start > e) return i;
                    i = i._next
                } else
                    for (i = t._last; i && i._start >= r;) {
                        if (i.data === "isPause" && i._start < e) return i;
                        i = i._prev
                    }
        },
        Qr = function (t, e, r, i) {
            var n = t._repeat,
                o = Nt(e) || 0,
                a = t._tTime / t._tDur;
            return a && !i && (t._time *= o / t._dur), t._dur = o, t._tDur = n ? n < 0 ? 1e10 : Nt(o * (n + 1) + t._rDelay * n) : o, a > 0 && !i ? Nn(t, t._tTime = t._tDur * a) : t.parent && _i(t), r || Cr(t.parent, t), t
        },
        tl = function (t) {
            return t instanceof Vt ? Cr(t) : Qr(t, t._dur)
        },
        Kc = {
            _start: 0,
            endTime: bs,
            totalDuration: bs
        },
        De = function s(t, e, r) {
            var i = t.labels,
                n = t._recent || Kc,
                o = t.duration() >= ge ? n.endTime(!1) : t._dur,
                a, l, u;
            return Tt(e) && (isNaN(e) || e in i) ? (l = e.charAt(0), u = e.substr(-1) === "%", a = e.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (a < 0 ? n : r).totalDuration() / 100 : 1)) : a < 0 ? (e in i || (i[e] = o), i[e]) : (l = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), u && r && (l = l / 100 * (It(r) ? r[0] : r).totalDuration()), a > 1 ? s(t, e.substr(0, a - 1), r) + l : o + l)) : e == null ? o : +e
        },
        Ts = function (t, e, r) {
            var i = Qe(e[1]),
                n = (i ? 2 : 1) + (t < 2 ? 0 : 1),
                o = e[n],
                a, l;
            if (i && (o.duration = e[1]), o.parent = r, t) {
                for (a = o, l = r; l && !("immediateRender" in a);) a = l.vars.defaults || {}, l = Jt(l.vars.inherit) && l.parent;
                o.immediateRender = Jt(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[n - 1]
            }
            return new Ft(e[0], o, e[n + 1])
        },
        hr = function (t, e) {
            return t || t === 0 ? e(t) : e
        },
        Fs = function (t, e, r) {
            return r < t ? t : r > e ? e : r
        },
        Lt = function (t, e) {
            return !Tt(t) || !(e = jc.exec(t)) ? "" : e[1]
        },
        Zc = function (t, e, r) {
            return hr(r, function (i) {
                return Fs(t, e, i)
            })
        },
        Un = [].slice,
        el = function (t, e) {
            return t && Ke(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Ke(t[0])) && !t.nodeType && t !== Re
        },
        Jc = function (t, e, r) {
            return r === void 0 && (r = []), t.forEach(function (i) {
                var n;
                return Tt(i) && !e || el(i, 1) ? (n = r).push.apply(n, ye(i)) : r.push(i)
            }) || r
        },
        ye = function (t, e, r) {
            return Tt(t) && !r && (Pn || !Jr()) ? Un.call((e || zn).querySelectorAll(t), 0) : It(t) ? Jc(t, r) : el(t) ? Un.call(t, 0) : t ? [t] : []
        },
        tf = function (t) {
            return t = ye(t)[0] || di("Invalid scope") || {},
                function (e) {
                    var r = t.current || t.nativeElement || t;
                    return ye(e, r.querySelectorAll ? r : r === t ? di("Invalid scope") || zn.createElement("div") : t)
                }
        },
        rl = function (t) {
            return t.sort(function () {
                return .5 - Math.random()
            })
        },
        sl = function (t) {
            if (St(t)) return t;
            var e = Ke(t) ? t : {
                    each: t
                },
                r = Tr(e.ease),
                i = e.from || 0,
                n = parseFloat(e.base) || 0,
                o = {},
                a = i > 0 && i < 1,
                l = isNaN(i) || a,
                u = e.axis,
                h = i,
                c = i;
            return Tt(i) ? h = c = {
                    center: .5,
                    edges: .5,
                    end: 1
                } [i] || 0 : !a && l && (h = i[0], c = i[1]),
                function (f, d, g) {
                    var p = (g || e).length,
                        m = o[p],
                        x, y, v, b, w, D, T, A, F;
                    if (!m) {
                        if (F = e.grid === "auto" ? 0 : (e.grid || [1, ge])[1], !F) {
                            for (T = -ge; T < (T = g[F++].getBoundingClientRect().left) && F < p;);
                            F--
                        }
                        for (m = o[p] = [], x = l ? Math.min(F, p) * h - .5 : i % F, y = F === ge ? 0 : l ? p * c / F - .5 : i / F | 0, T = 0, A = ge, D = 0; D < p; D++) v = D % F - x, b = y - (D / F | 0), m[D] = w = u ? Math.abs(u === "y" ? b : v) : Ra(v * v + b * b), w > T && (T = w), w < A && (A = w);
                        i === "random" && rl(m), m.max = T - A, m.min = A, m.v = p = (parseFloat(e.amount) || parseFloat(e.each) * (F > p ? p - 1 : u ? u === "y" ? p / F : F : Math.max(F, p / F)) || 0) * (i === "edges" ? -1 : 1), m.b = p < 0 ? n - p : n, m.u = Lt(e.amount || e.each) || 0, r = r && p < 0 ? fl(r) : r
                    }
                    return p = (m[f] - m.min) / m.max || 0, Nt(m.b + (r ? r(p) : p) * m.v) + m.u
                }
        },
        jn = function (t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function (r) {
                var i = Math.round(parseFloat(r) / t) * t * e;
                return (i - i % 1) / e + (Qe(r) ? 0 : Lt(r))
            }
        },
        il = function (t, e) {
            var r = It(t),
                i, n;
            return !r && Ke(t) && (i = r = t.radius || ge, t.values ? (t = ye(t.values), (n = !Qe(t[0])) && (i *= i)) : t = jn(t.increment)), hr(e, r ? St(t) ? function (o) {
                return n = t(o), Math.abs(n - o) <= i ? n : o
            } : function (o) {
                for (var a = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), u = ge, h = 0, c = t.length, f, d; c--;) n ? (f = t[c].x - a, d = t[c].y - l, f = f * f + d * d) : f = Math.abs(t[c] - a), f < u && (u = f, h = c);
                return h = !i || u <= i ? t[h] : o, n || h === o || Qe(o) ? h : h + Lt(o)
            } : jn(t))
        },
        nl = function (t, e, r, i) {
            return hr(It(t) ? !e : r === !0 ? !!(r = 0) : !i, function () {
                return It(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * .99)) / r) * r * i) / i
            })
        },
        ef = function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            return function (i) {
                return e.reduce(function (n, o) {
                    return o(n)
                }, i)
            }
        },
        rf = function (t, e) {
            return function (r) {
                return t(parseFloat(r)) + (e || Lt(r))
            }
        },
        sf = function (t, e, r) {
            return al(t, e, 0, 1, r)
        },
        ol = function (t, e, r) {
            return hr(r, function (i) {
                return t[~~e(i)]
            })
        },
        nf = function s(t, e, r) {
            var i = e - t;
            return It(t) ? ol(t, s(0, t.length), e) : hr(r, function (n) {
                return (i + (n - t) % i) % i + t
            })
        },
        of = function s(t, e, r) {
            var i = e - t,
                n = i * 2;
            return It(t) ? ol(t, s(0, t.length - 1), e) : hr(r, function (o) {
                return o = (n + (o - t) % n) % n || 0, t + (o > i ? n - o : o)
            })
        },
        Kr = function (t) {
            for (var e = 0, r = "", i, n, o, a; ~(i = t.indexOf("random(", e));) o = t.indexOf(")", i), a = t.charAt(i + 7) === "[", n = t.substr(i + 7, o - i - 7).match(a ? Na : Fn), r += t.substr(e, i - e) + nl(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), e = o + 1;
            return r + t.substr(e, t.length - e)
        },
        al = function (t, e, r, i, n) {
            var o = e - t,
                a = i - r;
            return hr(n, function (l) {
                return r + ((l - t) / o * a || 0)
            })
        },
        af = function s(t, e, r, i) {
            var n = isNaN(t + e) ? 0 : function (d) {
                return (1 - d) * t + d * e
            };
            if (!n) {
                var o = Tt(t),
                    a = {},
                    l, u, h, c, f;
                if (r === !0 && (i = 1) && (r = null), o) t = {
                    p: t
                }, e = {
                    p: e
                };
                else if (It(t) && !It(e)) {
                    for (h = [], c = t.length, f = c - 2, u = 1; u < c; u++) h.push(s(t[u - 1], t[u]));
                    c--, n = function (g) {
                        g *= c;
                        var p = Math.min(f, ~~g);
                        return h[p](g - p)
                    }, r = e
                } else i || (t = br(It(t) ? [] : {}, t));
                if (!h) {
                    for (l in e) Hn.call(a, t, l, "get", e[l]);
                    n = function (g) {
                        return to(g, a) || (o ? t.p : t)
                    }
                }
            }
            return hr(r, n)
        },
        ll = function (t, e, r) {
            var i = t.labels,
                n = ge,
                o, a, l;
            for (o in i) a = i[o] - e, a < 0 == !!r && a && n > (a = Math.abs(a)) && (l = o, n = a);
            return l
        },
        _e = function (t, e, r) {
            var i = t.vars,
                n = i[e],
                o, a;
            if (!!n) return o = i[e + "Params"], a = i.callbackScope || t, r && lr.length && gi(), o ? n.apply(a, o) : n.call(a)
        },
        As = function (t) {
            return Ze(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && _e(t, "onInterrupt"), t
        },
        Zr, lf = function (t) {
            t = !t.name && t.default || t;
            var e = t.name,
                r = St(t),
                i = e && !r && t.init ? function () {
                    this._props = []
                } : t,
                n = {
                    init: bs,
                    render: to,
                    add: Hn,
                    kill: bf,
                    modifier: Ef,
                    rawVars: 0
                },
                o = {
                    targetTest: 0,
                    get: 0,
                    getSetter: vi,
                    aliases: {},
                    register: 0
                };
            if (Jr(), t !== i) {
                if (te[e]) return;
                xe(i, xe(xi(t, n), o)), br(i.prototype, br(n, xi(t, o))), te[i.prop = e] = i, t.targetTest && (mi.push(i), Ln[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            ja(e, i), t.register && t.register(ce, i, Gt)
        },
        ft = 255,
        Ms = {
            aqua: [0, ft, ft],
            lime: [0, ft, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, ft],
            navy: [0, 0, 128],
            white: [ft, ft, ft],
            olive: [128, 128, 0],
            yellow: [ft, ft, 0],
            orange: [ft, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [ft, 0, 0],
            pink: [ft, 192, 203],
            cyan: [0, ft, ft],
            transparent: [ft, ft, ft, 0]
        },
        qn = function (t, e, r) {
            return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (r - e) * t * 6 : t < .5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * ft + .5 | 0
        },
        ul = function (t, e, r) {
            var i = t ? Qe(t) ? [t >> 16, t >> 8 & ft, t & ft] : 0 : Ms.black,
                n, o, a, l, u, h, c, f, d, g;
            if (!i) {
                if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Ms[t]) i = Ms[t];
                else if (t.charAt(0) === "#") {
                    if (t.length < 6 && (n = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + n + n + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9) return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & ft, i & ft, parseInt(t.substr(7), 16) / 255];
                    t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & ft, t & ft]
                } else if (t.substr(0, 3) === "hsl") {
                    if (i = g = t.match(Fn), !e) l = +i[0] % 360 / 360, u = +i[1] / 100, h = +i[2] / 100, o = h <= .5 ? h * (u + 1) : h + u - h * u, n = h * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = qn(l + 1 / 3, n, o), i[1] = qn(l, n, o), i[2] = qn(l - 1 / 3, n, o);
                    else if (~t.indexOf("=")) return i = t.match(An), r && i.length < 4 && (i[3] = 1), i
                } else i = t.match(Fn) || Ms.transparent;
                i = i.map(Number)
            }
            return e && !g && (n = i[0] / ft, o = i[1] / ft, a = i[2] / ft, c = Math.max(n, o, a), f = Math.min(n, o, a), h = (c + f) / 2, c === f ? l = u = 0 : (d = c - f, u = h > .5 ? d / (2 - c - f) : d / (c + f), l = c === n ? (o - a) / d + (o < a ? 6 : 0) : c === o ? (a - n) / d + 2 : (n - o) / d + 4, l *= 60), i[0] = ~~(l + .5), i[1] = ~~(u * 100 + .5), i[2] = ~~(h * 100 + .5)), r && i.length < 4 && (i[3] = 1), i
        },
        hl = function (t) {
            var e = [],
                r = [],
                i = -1;
            return t.split(Je).forEach(function (n) {
                var o = n.match(wr) || [];
                e.push.apply(e, o), r.push(i += o.length + 1)
            }), e.c = r, e
        },
        cl = function (t, e, r) {
            var i = "",
                n = (t + i).match(Je),
                o = e ? "hsla(" : "rgba(",
                a = 0,
                l, u, h, c;
            if (!n) return t;
            if (n = n.map(function (f) {
                    return (f = ul(f, e, 1)) && o + (e ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")"
                }), r && (h = hl(t), l = r.c, l.join(i) !== h.c.join(i)))
                for (u = t.replace(Je, "1").split(wr), c = u.length - 1; a < c; a++) i += u[a] + (~l.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (h.length ? h : n.length ? n : r).shift());
            if (!u)
                for (u = t.split(Je), c = u.length - 1; a < c; a++) i += u[a] + n[a];
            return i + u[c]
        },
        Je = function () {
            var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
                t;
            for (t in Ms) s += "|" + t + "\\b";
            return new RegExp(s + ")", "gi")
        }(),
        uf = /hsl[a]?\(/,
        Wn = function (t) {
            var e = t.join(" "),
                r;
            if (Je.lastIndex = 0, Je.test(e)) return r = uf.test(e), t[1] = cl(t[1], r), t[0] = cl(t[0], r, hl(t[1])), !0
        },
        Ss, ee = function () {
            var s = Date.now,
                t = 500,
                e = 33,
                r = s(),
                i = r,
                n = 1e3 / 240,
                o = n,
                a = [],
                l, u, h, c, f, d, g = function p(m) {
                    var x = s() - i,
                        y = m === !0,
                        v, b, w, D;
                    if (x > t && (r += x - e), i += x, w = i - r, v = w - o, (v > 0 || y) && (D = ++c.frame, f = w - c.time * 1e3, c.time = w = w / 1e3, o += v + (v >= n ? 4 : n - v), b = 1), y || (l = u(p)), b)
                        for (d = 0; d < a.length; d++) a[d](w, f, D, m)
                };
            return c = {
                time: 0,
                frame: 0,
                tick: function () {
                    g(!0)
                },
                deltaRatio: function (m) {
                    return f / (1e3 / (m || 60))
                },
                wake: function () {
                    Va && (!Pn && Ba() && (Re = Pn = window, zn = Re.document || {}, he.gsap = ce, (Re.gsapVersions || (Re.gsapVersions = [])).push(ce.version), Ua(fi || Re.GreenSockGlobals || !Re.gsap && Re || {}), h = Re.requestAnimationFrame), l && c.sleep(), u = h || function (m) {
                        return setTimeout(m, o - c.time * 1e3 + 1 | 0)
                    }, Ss = 1, g(2))
                },
                sleep: function () {
                    (h ? Re.cancelAnimationFrame : clearTimeout)(l), Ss = 0, u = bs
                },
                lagSmoothing: function (m, x) {
                    t = m || 1 / ct, e = Math.min(x, t, 0)
                },
                fps: function (m) {
                    n = 1e3 / (m || 240), o = c.time * 1e3 + n
                },
                add: function (m, x, y) {
                    var v = x ? function (b, w, D, T) {
                        m(b, w, D, T), c.remove(v)
                    } : m;
                    return c.remove(m), a[y ? "unshift" : "push"](v), Jr(), v
                },
                remove: function (m, x) {
                    ~(x = a.indexOf(m)) && a.splice(x, 1) && d >= x && d--
                },
                _listeners: a
            }, c
        }(),
        Jr = function () {
            return !Ss && ee.wake()
        },
        it = {},
        hf = /^[\d.\-M][\d.\-,\s]/,
        cf = /["']/g,
        ff = function (t) {
            for (var e = {}, r = t.substr(1, t.length - 3).split(":"), i = r[0], n = 1, o = r.length, a, l, u; n < o; n++) l = r[n], a = n !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), e[i] = isNaN(u) ? u.replace(cf, "").trim() : +u, i = l.substr(a + 1).trim();
            return e
        },
        pf = function (t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        },
        df = function (t) {
            var e = (t + "").split("("),
                r = it[e[0]];
            return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [ff(e[1])] : pf(t).split(",").map(Ga)) : it._CE && hf.test(t) ? it._CE("", t) : r
        },
        fl = function (t) {
            return function (e) {
                return 1 - t(1 - e)
            }
        },
        pl = function s(t, e) {
            for (var r = t._first, i; r;) r instanceof Vt ? s(r, e) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== e && (r.timeline ? s(r.timeline, e) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = e)), r = r._next
        },
        Tr = function (t, e) {
            return t && (St(t) ? t : it[t] || df(t)) || e
        },
        Fr = function (t, e, r, i) {
            r === void 0 && (r = function (l) {
                return 1 - e(1 - l)
            }), i === void 0 && (i = function (l) {
                return l < .5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2
            });
            var n = {
                    easeIn: e,
                    easeOut: r,
                    easeInOut: i
                },
                o;
            return Yt(t, function (a) {
                it[a] = he[a] = n, it[o = a.toLowerCase()] = r;
                for (var l in n) it[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = it[a + "." + l] = n[l]
            }), n
        },
        dl = function (t) {
            return function (e) {
                return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2
            }
        },
        Yn = function s(t, e, r) {
            var i = e >= 1 ? e : 1,
                n = (r || (t ? .3 : .45)) / (e < 1 ? e : 1),
                o = n / Tn * (Math.asin(1 / i) || 0),
                a = function (h) {
                    return h === 1 ? 1 : i * Math.pow(2, -10 * h) * Uc((h - o) * n) + 1
                },
                l = t === "out" ? a : t === "in" ? function (u) {
                    return 1 - a(1 - u)
                } : dl(a);
            return n = Tn / n, l.config = function (u, h) {
                return s(t, u, h)
            }, l
        },
        Gn = function s(t, e) {
            e === void 0 && (e = 1.70158);
            var r = function (o) {
                    return o ? --o * o * ((e + 1) * o + e) + 1 : 0
                },
                i = t === "out" ? r : t === "in" ? function (n) {
                    return 1 - r(1 - n)
                } : dl(r);
            return i.config = function (n) {
                return s(t, n)
            }, i
        };
    Yt("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, t) {
        var e = t < 5 ? t + 1 : t;
        Fr(s + ",Power" + (e - 1), t ? function (r) {
            return Math.pow(r, e)
        } : function (r) {
            return r
        }, function (r) {
            return 1 - Math.pow(1 - r, e)
        }, function (r) {
            return r < .5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2
        })
    });
    it.Linear.easeNone = it.none = it.Linear.easeIn;
    Fr("Elastic", Yn("in"), Yn("out"), Yn());
    (function (s, t) {
        var e = 1 / t,
            r = 2 * e,
            i = 2.5 * e,
            n = function (a) {
                return a < e ? s * a * a : a < r ? s * Math.pow(a - 1.5 / t, 2) + .75 : a < i ? s * (a -= 2.25 / t) * a + .9375 : s * Math.pow(a - 2.625 / t, 2) + .984375
            };
        Fr("Bounce", function (o) {
            return 1 - n(1 - o)
        }, n)
    })(7.5625, 2.75);
    Fr("Expo", function (s) {
        return s ? Math.pow(2, 10 * (s - 1)) : 0
    });
    Fr("Circ", function (s) {
        return -(Ra(1 - s * s) - 1)
    });
    Fr("Sine", function (s) {
        return s === 1 ? 1 : -Vc(s * Ic) + 1
    });
    Fr("Back", Gn("in"), Gn("out"), Gn());
    it.SteppedEase = it.steps = he.SteppedEase = {
        config: function (t, e) {
            t === void 0 && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0,
                o = 1 - ct;
            return function (a) {
                return ((i * Fs(0, o, a) | 0) + n) * r
            }
        }
    };
    Hr.ease = it["quad.out"];
    Yt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (s) {
        return Rn += s + "," + s + "Params,"
    });
    var Xn = function (t, e) {
            this.id = Nc++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : In, this.set = e ? e.getSetter : vi
        },
        Ps = function () {
            function s(e) {
                this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Qr(this, +e.duration, 1, 1), this.data = e.data, Ss || ee.wake()
            }
            var t = s.prototype;
            return t.delay = function (r) {
                return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay
            }, t.duration = function (r) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
            }, t.totalDuration = function (r) {
                return arguments.length ? (this._dirty = 0, Qr(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, t.totalTime = function (r, i) {
                if (Jr(), !arguments.length) return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (Nn(this, r), !n._dp || n.parent || Ka(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Be(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === ct || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Ya(this, r, i)), this
            }, t.time = function (r, i) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Qa(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
            }, t.totalProgress = function (r, i) {
                return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }, t.progress = function (r, i) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Qa(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }, t.iteration = function (r, i) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? $r(this._tTime, n) + 1 : 1
            }, t.timeScale = function (r) {
                if (!arguments.length) return this._rts === -ct ? 0 : this._rts;
                if (this._rts === r) return this;
                var i = this.parent && this._ts ? yi(this.parent._time, this) : this._tTime;
                return this._rts = +r || 0, this._ts = this._ps || r === -ct ? 0 : this._rts, this.totalTime(Fs(-this._delay, this._tDur, i), !0), _i(this), Gc(this)
            }, t.paused = function (r) {
                return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Jr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ct && (this._tTime -= ct)))), this) : this._ps
            }, t.startTime = function (r) {
                if (arguments.length) {
                    this._start = r;
                    var i = this.parent || this._dp;
                    return i && (i._sort || !this.parent) && Be(i, this, r - this._delay), this
                }
                return this._start
            }, t.endTime = function (r) {
                return this._start + (Jt(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }, t.rawTime = function (r) {
                var i = this.parent || this._dp;
                return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? yi(i.rawTime(r), this) : this._tTime : this._tTime
            }, t.globalTime = function (r) {
                for (var i = this, n = arguments.length ? r : i.rawTime(); i;) n = i._start + n / (i._ts || 1), i = i._dp;
                return n
            }, t.repeat = function (r) {
                return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, tl(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
            }, t.repeatDelay = function (r) {
                if (arguments.length) {
                    var i = this._time;
                    return this._rDelay = r, tl(this), i ? this.time(i) : this
                }
                return this._rDelay
            }, t.yoyo = function (r) {
                return arguments.length ? (this._yoyo = r, this) : this._yoyo
            }, t.seek = function (r, i) {
                return this.totalTime(De(this, r), Jt(i))
            }, t.restart = function (r, i) {
                return this.play().totalTime(r ? -this._delay : 0, Jt(i))
            }, t.play = function (r, i) {
                return r != null && this.seek(r, i), this.reversed(!1).paused(!1)
            }, t.reverse = function (r, i) {
                return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1)
            }, t.pause = function (r, i) {
                return r != null && this.seek(r, i), this.paused(!0)
            }, t.resume = function () {
                return this.paused(!1)
            }, t.reversed = function (r) {
                return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -ct : 0)), this) : this._rts < 0
            }, t.invalidate = function () {
                return this._initted = this._act = 0, this._zTime = -ct, this
            }, t.isActive = function () {
                var r = this.parent || this._dp,
                    i = this._start,
                    n;
                return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= i && n < this.endTime(!0) - ct)
            }, t.eventCallback = function (r, i, n) {
                var o = this.vars;
                return arguments.length > 1 ? (i ? (o[r] = i, n && (o[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = i)) : delete o[r], this) : o[r]
            }, t.then = function (r) {
                var i = this;
                return new Promise(function (n) {
                    var o = St(r) ? r : Xa,
                        a = function () {
                            var u = i.then;
                            i.then = null, St(o) && (o = o(i)) && (o.then || o === i) && (i.then = u), n(o), i.then = u
                        };
                    i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a
                })
            }, t.kill = function () {
                As(this)
            }, s
        }();
    xe(Ps.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -ct,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Vt = function (s) {
        Oa(t, s);

        function t(r, i) {
            var n;
            return r === void 0 && (r = {}), n = s.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = Jt(r.sortChildren), xt && Be(r.parent || xt, $e(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && Za($e(n), r.scrollTrigger), n
        }
        var e = t.prototype;
        return e.to = function (i, n, o) {
            return Ts(0, arguments, this), this
        }, e.from = function (i, n, o) {
            return Ts(1, arguments, this), this
        }, e.fromTo = function (i, n, o, a) {
            return Ts(2, arguments, this), this
        }, e.set = function (i, n, o) {
            return n.duration = 0, n.parent = this, Cs(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new Ft(i, n, De(this, o), 1), this
        }, e.call = function (i, n, o) {
            return Be(this, Ft.delayedCall(0, i, n), o)
        }, e.staggerTo = function (i, n, o, a, l, u, h) {
            return o.duration = n, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = h, o.parent = this, new Ft(i, o, De(this, l)), this
        }, e.staggerFrom = function (i, n, o, a, l, u, h) {
            return o.runBackwards = 1, Cs(o).immediateRender = Jt(o.immediateRender), this.staggerTo(i, n, o, a, l, u, h)
        }, e.staggerFromTo = function (i, n, o, a, l, u, h, c) {
            return a.startAt = o, Cs(a).immediateRender = Jt(a.immediateRender), this.staggerTo(i, n, a, l, u, h, c)
        }, e.render = function (i, n, o) {
            var a = this._time,
                l = this._dirty ? this.totalDuration() : this._tDur,
                u = this._dur,
                h = i <= 0 ? 0 : Nt(i),
                c = this._zTime < 0 != i < 0 && (this._initted || !u),
                f, d, g, p, m, x, y, v, b, w, D, T;
            if (this !== xt && h > l && i >= 0 && (h = l), h !== this._tTime || o || c) {
                if (a !== this._time && u && (h += this._time - a, i += this._time - a), f = h, b = this._start, v = this._ts, x = !v, c && (u || (a = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
                    if (D = this._yoyo, m = u + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(m * 100 + i, n, o);
                    if (f = Nt(h % m), h === l ? (p = this._repeat, f = u) : (p = ~~(h / m), p && p === h / m && (f = u, p--), f > u && (f = u)), w = $r(this._tTime, m), !a && this._tTime && w !== p && (w = p), D && p & 1 && (f = u - f, T = 1), p !== w && !this._lock) {
                        var A = D && w & 1,
                            F = A === (D && p & 1);
                        if (p < w && (A = !A), a = A ? 0 : u, this._lock = 1, this.render(a || (T ? 0 : Nt(p * m)), n, !u)._lock = 0, this._tTime = h, !n && this.parent && _e(this, "onRepeat"), this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1), a && a !== this._time || x !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (u = this._dur, l = this._tDur, F && (this._lock = 2, a = A ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !T && this.invalidate()), this._lock = 0, !this._ts && !x) return this;
                        pl(this, T)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (y = Qc(this, Nt(a), Nt(f)), y && (h -= f - (f = y._start))), this._tTime = h, this._time = f, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && f && !n && (_e(this, "onStart"), this._tTime !== h)) return this;
                if (f >= a && i >= 0)
                    for (d = this._first; d;) {
                        if (g = d._next, (d._act || f >= d._start) && d._ts && y !== d) {
                            if (d.parent !== this) return this.render(i, n, o);
                            if (d.render(d._ts > 0 ? (f - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (f - d._start) * d._ts, n, o), f !== this._time || !this._ts && !x) {
                                y = 0, g && (h += this._zTime = -ct);
                                break
                            }
                        }
                        d = g
                    } else {
                        d = this._last;
                        for (var P = i < 0 ? i : f; d;) {
                            if (g = d._prev, (d._act || P <= d._end) && d._ts && y !== d) {
                                if (d.parent !== this) return this.render(i, n, o);
                                if (d.render(d._ts > 0 ? (P - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (P - d._start) * d._ts, n, o), f !== this._time || !this._ts && !x) {
                                    y = 0, g && (h += this._zTime = P ? -ct : ct);
                                    break
                                }
                            }
                            d = g
                        }
                    }
                if (y && !n && (this.pause(), y.render(f >= a ? 0 : -ct)._zTime = f >= a ? 1 : -1, this._ts)) return this._start = b, _i(this), this.render(i, n, o);
                this._onUpdate && !n && _e(this, "onUpdate", !0), (h === l && this._tTime >= this.totalDuration() || !h && a) && (b === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (h === l && this._ts > 0 || !h && this._ts < 0) && Ze(this, 1), !n && !(i < 0 && !a) && (h || a || !l) && (_e(this, h === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, e.add = function (i, n) {
            var o = this;
            if (Qe(n) || (n = De(this, n, i)), !(i instanceof Ps)) {
                if (It(i)) return i.forEach(function (a) {
                    return o.add(a, n)
                }), this;
                if (Tt(i)) return this.addLabel(i, n);
                if (St(i)) i = Ft.delayedCall(0, i);
                else return this
            }
            return this !== i ? Be(this, i, n) : this
        }, e.getChildren = function (i, n, o, a) {
            i === void 0 && (i = !0), n === void 0 && (n = !0), o === void 0 && (o = !0), a === void 0 && (a = -ge);
            for (var l = [], u = this._first; u;) u._start >= a && (u instanceof Ft ? n && l.push(u) : (o && l.push(u), i && l.push.apply(l, u.getChildren(!0, n, o)))), u = u._next;
            return l
        }, e.getById = function (i) {
            for (var n = this.getChildren(1, 1, 1), o = n.length; o--;)
                if (n[o].vars.id === i) return n[o]
        }, e.remove = function (i) {
            return Tt(i) ? this.removeLabel(i) : St(i) ? this.killTweensOf(i) : (Di(this, i), i === this._recent && (this._recent = this._last), Cr(this))
        }, e.totalTime = function (i, n) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Nt(ee.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), s.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime
        }, e.addLabel = function (i, n) {
            return this.labels[i] = De(this, n), this
        }, e.removeLabel = function (i) {
            return delete this.labels[i], this
        }, e.addPause = function (i, n, o) {
            var a = Ft.delayedCall(0, n || bs, o);
            return a.data = "isPause", this._hasPause = 1, Be(this, a, De(this, i))
        }, e.removePause = function (i) {
            var n = this._first;
            for (i = De(this, i); n;) n._start === i && n.data === "isPause" && Ze(n), n = n._next
        }, e.killTweensOf = function (i, n, o) {
            for (var a = this.getTweensOf(i, o), l = a.length; l--;) cr !== a[l] && a[l].kill(i, n);
            return this
        }, e.getTweensOf = function (i, n) {
            for (var o = [], a = ye(i), l = this._first, u = Qe(n), h; l;) l instanceof Ft ? qc(l._targets, a) && (u ? (!cr || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && o.push(l) : (h = l.getTweensOf(a, n)).length && o.push.apply(o, h), l = l._next;
            return o
        }, e.tweenTo = function (i, n) {
            n = n || {};
            var o = this,
                a = De(o, i),
                l = n,
                u = l.startAt,
                h = l.onStart,
                c = l.onStartParams,
                f = l.immediateRender,
                d, g = Ft.to(o, xe({
                    ease: n.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: a,
                    overwrite: "auto",
                    duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || ct,
                    onStart: function () {
                        if (o.pause(), !d) {
                            var m = n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
                            g._dur !== m && Qr(g, m, 0, 1).render(g._time, !0, !0), d = 1
                        }
                        h && h.apply(g, c || [])
                    }
                }, n));
            return f ? g.render(0) : g
        }, e.tweenFromTo = function (i, n, o) {
            return this.tweenTo(n, xe({
                startAt: {
                    time: De(this, i)
                }
            }, o))
        }, e.recent = function () {
            return this._recent
        }, e.nextLabel = function (i) {
            return i === void 0 && (i = this._time), ll(this, De(this, i))
        }, e.previousLabel = function (i) {
            return i === void 0 && (i = this._time), ll(this, De(this, i), 1)
        }, e.currentLabel = function (i) {
            return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + ct)
        }, e.shiftChildren = function (i, n, o) {
            o === void 0 && (o = 0);
            for (var a = this._first, l = this.labels, u; a;) a._start >= o && (a._start += i, a._end += i), a = a._next;
            if (n)
                for (u in l) l[u] >= o && (l[u] += i);
            return Cr(this)
        }, e.invalidate = function () {
            var i = this._first;
            for (this._lock = 0; i;) i.invalidate(), i = i._next;
            return s.prototype.invalidate.call(this)
        }, e.clear = function (i) {
            i === void 0 && (i = !0);
            for (var n = this._first, o; n;) o = n._next, this.remove(n), n = o;
            return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Cr(this)
        }, e.totalDuration = function (i) {
            var n = 0,
                o = this,
                a = o._last,
                l = ge,
                u, h, c;
            if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
            if (o._dirty) {
                for (c = o.parent; a;) u = a._prev, a._dirty && a.totalDuration(), h = a._start, h > l && o._sort && a._ts && !o._lock ? (o._lock = 1, Be(o, a, h - a._delay, 1)._lock = 0) : l = h, h < 0 && a._ts && (n -= h, (!c && !o._dp || c && c.smoothChildTiming) && (o._start += h / o._ts, o._time -= h, o._tTime -= h), o.shiftChildren(-h, !1, -1 / 0), l = 0), a._end > n && a._ts && (n = a._end), a = u;
                Qr(o, o === xt && o._time > n ? o._time : n, 1, 1), o._dirty = 0
            }
            return o._tDur
        }, t.updateRoot = function (i) {
            if (xt._ts && (Ya(xt, yi(i, xt)), qa = ee.frame), ee.frame >= Wa) {
                Wa += Zt.autoSleep || 120;
                var n = xt._first;
                if ((!n || !n._ts) && Zt.autoSleep && ee._listeners.length < 2) {
                    for (; n && !n._ts;) n = n._next;
                    n || ee.sleep()
                }
            }
        }, t
    }(Ps);
    xe(Vt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var mf = function (t, e, r, i, n, o, a) {
            var l = new Gt(this._pt, t, e, 0, 1, Jn, null, n),
                u = 0,
                h = 0,
                c, f, d, g, p, m, x, y;
            for (l.b = r, l.e = i, r += "", i += "", (x = ~i.indexOf("random(")) && (i = Kr(i)), o && (y = [r, i], o(y, t, e), r = y[0], i = y[1]), f = r.match(Mn) || []; c = Mn.exec(i);) g = c[0], p = i.substring(u, c.index), d ? d = (d + 1) % 5 : p.substr(-5) === "rgba(" && (d = 1), g !== f[h++] && (m = parseFloat(f[h - 1]) || 0, l._pt = {
                _next: l._pt,
                p: p || h === 1 ? p : ",",
                s: m,
                c: g.charAt(1) === "=" ? Er(m, g) - m : parseFloat(g) - m,
                m: d && d < 4 ? Math.round : 0
            }, u = Mn.lastIndex);
            return l.c = u < i.length ? i.substring(u, i.length) : "", l.fp = a, (Sn.test(i) || x) && (l.e = 0), this._pt = l, l
        },
        Hn = function (t, e, r, i, n, o, a, l, u) {
            St(i) && (i = i(n || 0, t, o));
            var h = t[e],
                c = r !== "get" ? r : St(h) ? u ? t[e.indexOf("set") || !St(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : h,
                f = St(h) ? u ? _f : xl : Zn,
                d;
            if (Tt(i) && (~i.indexOf("random(") && (i = Kr(i)), i.charAt(1) === "=" && (d = Er(c, i) + (Lt(c) || 0), (d || d === 0) && (i = d))), c !== i || Qn) return !isNaN(c * i) && i !== "" ? (d = new Gt(this._pt, t, e, +c || 0, i - (c || 0), typeof h == "boolean" ? wf : Dl, 0, f), u && (d.fp = u), a && d.modifier(a, this, t), this._pt = d) : (!h && !(e in t) && pi(e, i), mf.call(this, t, e, c, i, f, l || Zt.stringFilter, u))
        },
        gf = function (t, e, r, i, n) {
            if (St(t) && (t = zs(t, n, e, r, i)), !Ke(t) || t.style && t.nodeType || It(t) || Ia(t)) return Tt(t) ? zs(t, n, e, r, i) : t;
            var o = {},
                a;
            for (a in t) o[a] = zs(t[a], n, e, r, i);
            return o
        },
        $n = function (t, e, r, i, n, o) {
            var a, l, u, h;
            if (te[t] && (a = new te[t]).init(n, a.rawVars ? e[t] : gf(e[t], i, n, o, r), r, i, o) !== !1 && (r._pt = l = new Gt(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== Zr))
                for (u = r._ptLookup[r._targets.indexOf(n)], h = a._props.length; h--;) u[a._props[h]] = l;
            return a
        },
        cr, Qn, Kn = function s(t, e) {
            var r = t.vars,
                i = r.ease,
                n = r.startAt,
                o = r.immediateRender,
                a = r.lazy,
                l = r.onUpdate,
                u = r.onUpdateParams,
                h = r.callbackScope,
                c = r.runBackwards,
                f = r.yoyoEase,
                d = r.keyframes,
                g = r.autoRevert,
                p = t._dur,
                m = t._startAt,
                x = t._targets,
                y = t.parent,
                v = y && y.data === "nested" ? y.parent._targets : x,
                b = t._overwrite === "auto" && !Cn,
                w = t.timeline,
                D, T, A, F, P, k, L, _, S, U, M, O, z;
            if (w && (!d || !i) && (i = "none"), t._ease = Tr(i, Hr.ease), t._yEase = f ? fl(Tr(f === !0 ? i : f, Hr.ease)) : 0, f && t._yoyo && !t._repeat && (f = t._yEase, t._yEase = t._ease, t._ease = f), t._from = !w && !!r.runBackwards, !w || d && !r.stagger) {
                if (_ = x[0] ? ur(x[0]).harness : 0, O = _ && r[_.prop], D = xi(r, Ln), m && (Ze(m.render(-1, !0)), m._lazy = 0), n)
                    if (Ze(t._startAt = Ft.set(x, xe({
                            data: "isStart",
                            overwrite: !1,
                            parent: y,
                            immediateRender: !0,
                            lazy: Jt(a),
                            startAt: null,
                            delay: 0,
                            onUpdate: l,
                            onUpdateParams: u,
                            callbackScope: h,
                            stagger: 0
                        }, n))), e < 0 && !o && !g && t._startAt.render(-1, !0), o) {
                        if (e > 0 && !g && (t._startAt = 0), p && e <= 0) {
                            e && (t._zTime = e);
                            return
                        }
                    } else g === !1 && (t._startAt = 0);
                else if (c && p) {
                    if (m) !g && (t._startAt = 0);
                    else if (e && (o = !1), A = xe({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: o && Jt(a),
                            immediateRender: o,
                            stagger: 0,
                            parent: y
                        }, D), O && (A[_.prop] = O), Ze(t._startAt = Ft.set(x, A)), e < 0 && t._startAt.render(-1, !0), t._zTime = e, !o) s(t._startAt, ct);
                    else if (!e) return
                }
                for (t._pt = t._ptCache = 0, a = p && Jt(a) || a && !p, T = 0; T < x.length; T++) {
                    if (P = x[T], L = P._gsap || Bn(x)[T]._gsap, t._ptLookup[T] = U = {}, kn[L.id] && lr.length && gi(), M = v === x ? T : v.indexOf(P), _ && (S = new _).init(P, O || D, t, M, v) !== !1 && (t._pt = F = new Gt(t._pt, P, S.name, 0, 1, S.render, S, 0, S.priority), S._props.forEach(function (V) {
                            U[V] = F
                        }), S.priority && (k = 1)), !_ || O)
                        for (A in D) te[A] && (S = $n(A, D, t, M, P, v)) ? S.priority && (k = 1) : U[A] = F = Hn.call(t, P, A, "get", D[A], M, v, 0, r.stringFilter);
                    t._op && t._op[T] && t.kill(P, t._op[T]), b && t._pt && (cr = t, xt.killTweensOf(P, U, t.globalTime(e)), z = !t.parent, cr = 0), t._pt && a && (kn[L.id] = 1)
                }
                k && eo(t), t._onInit && t._onInit(t)
            }
            t._onUpdate = l, t._initted = (!t._op || t._pt) && !z, d && e <= 0 && w.render(ge, !0, !0)
        },
        xf = function (t, e, r, i, n, o, a) {
            var l = (t._pt && t._ptCache || (t._ptCache = {}))[e],
                u, h, c;
            if (!l)
                for (l = t._ptCache[e] = [], h = t._ptLookup, c = t._targets.length; c--;) {
                    if (u = h[c][e], u && u.d && u.d._pt)
                        for (u = u.d._pt; u && u.p !== e;) u = u._next;
                    if (!u) return Qn = 1, t.vars[e] = "+=0", Kn(t, a), Qn = 0, 1;
                    l.push(u)
                }
            for (c = l.length; c--;) u = l[c], u.s = (i || i === 0) && !n ? i : u.s + (i || 0) + o * u.c, u.c = r - u.s, u.e && (u.e = yt(r) + Lt(u.e)), u.b && (u.b = u.s + Lt(u.b))
        },
        Df = function (t, e) {
            var r = t[0] ? ur(t[0]).harness : 0,
                i = r && r.aliases,
                n, o, a, l;
            if (!i) return e;
            n = br({}, e);
            for (o in i)
                if (o in n)
                    for (l = i[o].split(","), a = l.length; a--;) n[l[a]] = n[o];
            return n
        },
        yf = function (t, e, r, i) {
            var n = e.ease || i || "power1.inOut",
                o, a;
            if (It(e)) a = r[t] || (r[t] = []), e.forEach(function (l, u) {
                return a.push({
                    t: u / (e.length - 1) * 100,
                    v: l,
                    e: n
                })
            });
            else
                for (o in e) a = r[o] || (r[o] = []), o === "ease" || a.push({
                    t: parseFloat(t),
                    v: e[o],
                    e: n
                })
        },
        zs = function (t, e, r, i, n) {
            return St(t) ? t.call(e, r, i, n) : Tt(t) && ~t.indexOf("random(") ? Kr(t) : t
        },
        ml = Rn + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        gl = {};
    Yt(ml + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
        return gl[s] = 1
    });
    var Ft = function (s) {
        Oa(t, s);

        function t(r, i, n, o) {
            var a;
            typeof i == "number" && (n.duration = i, i = n, n = null), a = s.call(this, o ? i : Cs(i)) || this;
            var l = a.vars,
                u = l.duration,
                h = l.delay,
                c = l.immediateRender,
                f = l.stagger,
                d = l.overwrite,
                g = l.keyframes,
                p = l.defaults,
                m = l.scrollTrigger,
                x = l.yoyoEase,
                y = i.parent || xt,
                v = (It(r) || Ia(r) ? Qe(r[0]) : "length" in i) ? [r] : ye(r),
                b, w, D, T, A, F, P, k;
            if (a._targets = v.length ? Bn(v) : di("GSAP target " + r + " not found. https://greensock.com", !Zt.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d, g || f || ci(u) || ci(h)) {
                if (i = a.vars, b = a.timeline = new Vt({
                        data: "nested",
                        defaults: p || {}
                    }), b.kill(), b.parent = b._dp = $e(a), b._start = 0, f || ci(u) || ci(h)) {
                    if (T = v.length, P = f && sl(f), Ke(f))
                        for (A in f) ~ml.indexOf(A) && (k || (k = {}), k[A] = f[A]);
                    for (w = 0; w < T; w++) D = xi(i, gl), D.stagger = 0, x && (D.yoyoEase = x), k && br(D, k), F = v[w], D.duration = +zs(u, $e(a), w, F, v), D.delay = (+zs(h, $e(a), w, F, v) || 0) - a._delay, !f && T === 1 && D.delay && (a._delay = h = D.delay, a._start += h, D.delay = 0), b.to(F, D, P ? P(w, F, v) : 0), b._ease = it.none;
                    b.duration() ? u = h = 0 : a.timeline = 0
                } else if (g) {
                    Cs(xe(b.vars.defaults, {
                        ease: "none"
                    })), b._ease = Tr(g.ease || i.ease || "none");
                    var L = 0,
                        _, S, U;
                    if (It(g)) g.forEach(function (M) {
                        return b.to(v, M, ">")
                    });
                    else {
                        D = {};
                        for (A in g) A === "ease" || A === "easeEach" || yf(A, g[A], D, g.easeEach);
                        for (A in D)
                            for (_ = D[A].sort(function (M, O) {
                                    return M.t - O.t
                                }), L = 0, w = 0; w < _.length; w++) S = _[w], U = {
                                ease: S.e,
                                duration: (S.t - (w ? _[w - 1].t : 0)) / 100 * u
                            }, U[A] = S.v, b.to(v, U, L), L += U.duration;
                        b.duration() < u && b.to({}, {
                            duration: u - b.duration()
                        })
                    }
                }
                u || a.duration(u = b.duration())
            } else a.timeline = 0;
            return d === !0 && !Cn && (cr = $e(a), xt.killTweensOf(v), cr = 0), Be(y, $e(a), n), i.reversed && a.reverse(), i.paused && a.paused(!0), (c || !u && !g && a._start === Nt(y._time) && Jt(c) && Xc($e(a)) && y.data !== "nested") && (a._tTime = -ct, a.render(Math.max(0, -h))), m && Za($e(a), m), a
        }
        var e = t.prototype;
        return e.render = function (i, n, o) {
            var a = this._time,
                l = this._tDur,
                u = this._dur,
                h = i > l - ct && i >= 0 ? l : i < ct ? 0 : i,
                c, f, d, g, p, m, x, y, v;
            if (!u) $c(this, i, n, o);
            else if (h !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 != i < 0) {
                if (c = h, y = this.timeline, this._repeat) {
                    if (g = u + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(g * 100 + i, n, o);
                    if (c = Nt(h % g), h === l ? (d = this._repeat, c = u) : (d = ~~(h / g), d && d === h / g && (c = u, d--), c > u && (c = u)), m = this._yoyo && d & 1, m && (v = this._yEase, c = u - c), p = $r(this._tTime, g), c === a && !o && this._initted) return this._tTime = h, this;
                    d !== p && (y && this._yEase && pl(y, m), this.vars.repeatRefresh && !m && !this._lock && (this._lock = o = 1, this.render(Nt(g * d), !0).invalidate()._lock = 0))
                }
                if (!this._initted) {
                    if (Ja(this, i < 0 ? i : c, o, n)) return this._tTime = 0, this;
                    if (a !== this._time) return this;
                    if (u !== this._dur) return this.render(i, n, o)
                }
                if (this._tTime = h, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = x = (v || this._ease)(c / u), this._from && (this.ratio = x = 1 - x), c && !a && !n && (_e(this, "onStart"), this._tTime !== h)) return this;
                for (f = this._pt; f;) f.r(x, f.d), f = f._next;
                y && y.render(i < 0 ? i : !c && m ? -ct : y._dur * y._ease(c / this._dur), n, o) || this._startAt && (this._zTime = i), this._onUpdate && !n && (i < 0 && this._startAt && this._startAt.render(i, !0, o), _e(this, "onUpdate")), this._repeat && d !== p && this.vars.onRepeat && !n && this.parent && _e(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (i < 0 && this._startAt && !this._onUpdate && this._startAt.render(i, !0, !0), (i || !u) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Ze(this, 1), !n && !(i < 0 && !a) && (h || a) && (_e(this, h === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < l && this.timeScale() > 0) && this._prom()))
            }
            return this
        }, e.targets = function () {
            return this._targets
        }, e.invalidate = function () {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), s.prototype.invalidate.call(this)
        }, e.resetTo = function (i, n, o, a) {
            Ss || ee.wake(), this._ts || this.play();
            var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
                u;
            return this._initted || Kn(this, l), u = this._ease(l / this._dur), xf(this, i, n, o, a, u, l) ? this.resetTo(i, n, o, a) : (Nn(this, 0), this.parent || $a(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, e.kill = function (i, n) {
            if (n === void 0 && (n = "all"), !i && (!n || n === "all")) return this._lazy = this._pt = 0, this.parent ? As(this) : this;
            if (this.timeline) {
                var o = this.timeline.totalDuration();
                return this.timeline.killTweensOf(i, n, cr && cr.vars.overwrite !== !0)._first || As(this), this.parent && o !== this.timeline.totalDuration() && Qr(this, this._dur * this.timeline._tDur / o, 0, 1), this
            }
            var a = this._targets,
                l = i ? ye(i) : a,
                u = this._ptLookup,
                h = this._pt,
                c, f, d, g, p, m, x;
            if ((!n || n === "all") && Yc(a, l)) return n === "all" && (this._pt = 0), As(this);
            for (c = this._op = this._op || [], n !== "all" && (Tt(n) && (p = {}, Yt(n, function (y) {
                    return p[y] = 1
                }), n = p), n = Df(a, n)), x = a.length; x--;)
                if (~l.indexOf(a[x])) {
                    f = u[x], n === "all" ? (c[x] = n, g = f, d = {}) : (d = c[x] = c[x] || {}, g = n);
                    for (p in g) m = f && f[p], m && ((!("kill" in m.d) || m.d.kill(p) === !0) && Di(this, m, "_pt"), delete f[p]), d !== "all" && (d[p] = 1)
                } return this._initted && !this._pt && h && As(this), this
        }, t.to = function (i, n) {
            return new t(i, n, arguments[2])
        }, t.from = function (i, n) {
            return Ts(1, arguments)
        }, t.delayedCall = function (i, n, o, a) {
            return new t(n, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: i,
                onComplete: n,
                onReverseComplete: n,
                onCompleteParams: o,
                onReverseCompleteParams: o,
                callbackScope: a
            })
        }, t.fromTo = function (i, n, o) {
            return Ts(2, arguments)
        }, t.set = function (i, n) {
            return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(i, n)
        }, t.killTweensOf = function (i, n, o) {
            return xt.killTweensOf(i, n, o)
        }, t
    }(Ps);
    xe(Ft.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    });
    Yt("staggerTo,staggerFrom,staggerFromTo", function (s) {
        Ft[s] = function () {
            var t = new Vt,
                e = Un.call(arguments, 0);
            return e.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, e)
        }
    });
    var Zn = function (t, e, r) {
            return t[e] = r
        },
        xl = function (t, e, r) {
            return t[e](r)
        },
        _f = function (t, e, r, i) {
            return t[e](i.fp, r)
        },
        vf = function (t, e, r) {
            return t.setAttribute(e, r)
        },
        vi = function (t, e) {
            return St(t[e]) ? xl : hi(t[e]) && t.setAttribute ? vf : Zn
        },
        Dl = function (t, e) {
            return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
        },
        wf = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        Jn = function (t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (t === 1 && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        to = function (t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        Ef = function (t, e, r, i) {
            for (var n = this._pt, o; n;) o = n._next, n.p === i && n.modifier(t, e, r), n = o
        },
        bf = function (t) {
            for (var e = this._pt, r, i; e;) i = e._next, e.p === t && !e.op || e.op === t ? Di(this, e, "_pt") : e.dep || (r = 1), e = i;
            return !r
        },
        Cf = function (t, e, r, i) {
            i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
        },
        eo = function (t) {
            for (var e = t._pt, r, i, n, o; e;) {
                for (r = e._next, i = n; i && i.pr > e.pr;) i = i._next;
                (e._prev = i ? i._prev : o) ? e._prev._next = e: n = e, (e._next = i) ? i._prev = e : o = e, e = r
            }
            t._pt = n
        },
        Gt = function () {
            function s(e, r, i, n, o, a, l, u, h) {
                this.t = r, this.s = n, this.c = o, this.p = i, this.r = a || Dl, this.d = l || this, this.set = u || Zn, this.pr = h || 0, this._next = e, e && (e._prev = this)
            }
            var t = s.prototype;
            return t.modifier = function (r, i, n) {
                this.mSet = this.mSet || this.set, this.set = Cf, this.m = r, this.mt = n, this.tween = i
            }, s
        }();
    Yt(Rn + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (s) {
        return Ln[s] = 1
    });
    he.TweenMax = he.TweenLite = Ft;
    he.TimelineLite = he.TimelineMax = Vt;
    xt = new Vt({
        sortChildren: !1,
        defaults: Hr,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    });
    Zt.stringFilter = Wn;
    var wi = {
        registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function (i) {
                return lf(i)
            })
        },
        timeline: function (t) {
            return new Vt(t)
        },
        getTweensOf: function (t, e) {
            return xt.getTweensOf(t, e)
        },
        getProperty: function (t, e, r, i) {
            Tt(t) && (t = ye(t)[0]);
            var n = ur(t || {}).get,
                o = r ? Xa : Ga;
            return r === "native" && (r = ""), t && (e ? o((te[e] && te[e].get || n)(t, e, r, i)) : function (a, l, u) {
                return o((te[a] && te[a].get || n)(t, a, l, u))
            })
        },
        quickSetter: function (t, e, r) {
            if (t = ye(t), t.length > 1) {
                var i = t.map(function (h) {
                        return ce.quickSetter(h, e, r)
                    }),
                    n = i.length;
                return function (h) {
                    for (var c = n; c--;) i[c](h)
                }
            }
            t = t[0] || {};
            var o = te[e],
                a = ur(t),
                l = a.harness && (a.harness.aliases || {})[e] || e,
                u = o ? function (h) {
                    var c = new o;
                    Zr._pt = 0, c.init(t, r ? h + r : h, Zr, 0, [t]), c.render(1, c), Zr._pt && to(1, Zr)
                } : a.set(t, l);
            return o ? u : function (h) {
                return u(t, l, r ? h + r : h, a, 1)
            }
        },
        quickTo: function (t, e, r) {
            var i, n = ce.to(t, br((i = {}, i[e] = "+=0.1", i.paused = !0, i), r || {})),
                o = function (l, u, h) {
                    return n.resetTo(e, l, u, h)
                };
            return o.tween = n, o
        },
        isTweening: function (t) {
            return xt.getTweensOf(t, !0).length > 0
        },
        defaults: function (t) {
            return t && t.ease && (t.ease = Tr(t.ease, Hr.ease)), Ha(Hr, t || {})
        },
        config: function (t) {
            return Ha(Zt, t || {})
        },
        registerEffect: function (t) {
            var e = t.name,
                r = t.effect,
                i = t.plugins,
                n = t.defaults,
                o = t.extendTimeline;
            (i || "").split(",").forEach(function (a) {
                return a && !te[a] && !he[a] && di(e + " effect requires " + a + " plugin.")
            }), On[e] = function (a, l, u) {
                return r(ye(a), xe(l || {}, n), u)
            }, o && (Vt.prototype[e] = function (a, l, u) {
                return this.add(On[e](a, Ke(l) ? l : (u = l) && {}, this), u)
            })
        },
        registerEase: function (t, e) {
            it[t] = Tr(e)
        },
        parseEase: function (t, e) {
            return arguments.length ? Tr(t, e) : it
        },
        getById: function (t) {
            return xt.getById(t)
        },
        exportRoot: function (t, e) {
            t === void 0 && (t = {});
            var r = new Vt(t),
                i, n;
            for (r.smoothChildTiming = Jt(t.smoothChildTiming), xt.remove(r), r._dp = 0, r._time = r._tTime = xt._time, i = xt._first; i;) n = i._next, (e || !(!i._dur && i instanceof Ft && i.vars.onComplete === i._targets[0])) && Be(r, i, i._start - i._delay), i = n;
            return Be(xt, r, 0), r
        },
        utils: {
            wrap: nf,
            wrapYoyo: of ,
            distribute: sl,
            random: nl,
            snap: il,
            normalize: sf,
            getUnit: Lt,
            clamp: Zc,
            splitColor: ul,
            toArray: ye,
            selector: tf,
            mapRange: al,
            pipe: ef,
            unitize: rf,
            interpolate: af,
            shuffle: rl
        },
        install: Ua,
        effects: On,
        ticker: ee,
        updateRoot: Vt.updateRoot,
        plugins: te,
        globalTimeline: xt,
        core: {
            PropTween: Gt,
            globals: ja,
            Tween: Ft,
            Timeline: Vt,
            Animation: Ps,
            getCache: ur,
            _removeLinkedListItem: Di,
            suppressOverwrites: function (t) {
                return Cn = t
            }
        }
    };
    Yt("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
        return wi[s] = Ft[s]
    });
    ee.add(Vt.updateRoot);
    Zr = wi.to({}, {
        duration: 0
    });
    var Tf = function (t, e) {
            for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
            return r
        },
        Ff = function (t, e) {
            var r = t._targets,
                i, n, o;
            for (i in e)
                for (n = r.length; n--;) o = t._ptLookup[n][i], o && (o = o.d) && (o._pt && (o = Tf(o, i)), o && o.modifier && o.modifier(e[i], t, r[n], i))
        },
        ro = function (t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function (i, n, o) {
                    o._onInit = function (a) {
                        var l, u;
                        if (Tt(n) && (l = {}, Yt(n, function (h) {
                                return l[h] = 1
                            }), n = l), e) {
                            l = {};
                            for (u in n) l[u] = e(n[u]);
                            n = l
                        }
                        Ff(a, n)
                    }
                }
            }
        },
        ce = wi.registerPlugin({
            name: "attr",
            init: function (t, e, r, i, n) {
                var o, a;
                for (o in e) a = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], i, n, 0, 0, o), a && (a.op = o), this._props.push(o)
            }
        }, {
            name: "endArray",
            init: function (t, e) {
                for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r])
            }
        }, ro("roundProps", jn), ro("modifiers"), ro("snap", il)) || wi;
    Ft.version = Vt.version = ce.version = "3.10.4";
    Va = 1;
    Ba() && Jr();
    var Af = it.Power0,
        Mf = it.Power1,
        Sf = it.Power2,
        Pf = it.Power3,
        zf = it.Power4,
        Lf = it.Linear,
        kf = it.Quad,
        Of = it.Cubic,
        Rf = it.Quart,
        Bf = it.Quint,
        If = it.Strong,
        Nf = it.Elastic,
        Vf = it.Back,
        Uf = it.SteppedEase,
        jf = it.Bounce,
        qf = it.Sine,
        Wf = it.Expo,
        Yf = it.Circ;
    var yl, fr, ts, so, Ar, Gf, _l, Xf = function () {
            return typeof window != "undefined"
        },
        pr = {},
        Mr = 180 / Math.PI,
        es = Math.PI / 180,
        rs = Math.atan2,
        vl = 1e8,
        wl = /([A-Z])/g,
        Hf = /(left|right|width|margin|padding|x)/i,
        $f = /[\s,\(]\S/,
        dr = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        El = function (t, e) {
            return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
        },
        Qf = function (t, e) {
            return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
        },
        Kf = function (t, e) {
            return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
        },
        Zf = function (t, e) {
            var r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
        },
        bl = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        Cl = function (t, e) {
            return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
        },
        Jf = function (t, e, r) {
            return t.style[e] = r
        },
        tp = function (t, e, r) {
            return t.style.setProperty(e, r)
        },
        ep = function (t, e, r) {
            return t._gsap[e] = r
        },
        rp = function (t, e, r) {
            return t._gsap.scaleX = t._gsap.scaleY = r
        },
        sp = function (t, e, r, i, n) {
            var o = t._gsap;
            o.scaleX = o.scaleY = r, o.renderTransform(n, o)
        },
        ip = function (t, e, r, i, n) {
            var o = t._gsap;
            o[e] = r, o.renderTransform(n, o)
        },
        kt = "transform",
        mr = kt + "Origin",
        Tl, io = function (t, e) {
            var r = fr.createElementNS ? fr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : fr.createElement(t);
            return r.style ? r : fr.createElement(t)
        },
        tr = function s(t, e, r) {
            var i = getComputedStyle(t);
            return i[e] || i.getPropertyValue(e.replace(wl, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && s(t, ss(e) || e, 1) || ""
        },
        Fl = "O,Moz,ms,Ms,Webkit".split(","),
        ss = function (t, e, r) {
            var i = e || Ar,
                n = i.style,
                o = 5;
            if (t in n && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(Fl[o] + t in n););
            return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Fl[o] : "") + t
        },
        no = function () {
            Xf() && window.document && (yl = window, fr = yl.document, ts = fr.documentElement, Ar = io("div") || {
                style: {}
            }, Gf = io("div"), kt = ss(kt), mr = kt + "Origin", Ar.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Tl = !!ss("perspective"), so = 1)
        },
        oo = function s(t) {
            var e = io("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                r = this.parentNode,
                i = this.nextSibling,
                n = this.style.cssText,
                o;
            if (ts.appendChild(e), e.appendChild(this), this.style.display = "block", t) try {
                o = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = s
            } catch (a) {} else this._gsapBBox && (o = this._gsapBBox());
            return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), ts.removeChild(e), this.style.cssText = n, o
        },
        Al = function (t, e) {
            for (var r = e.length; r--;)
                if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
        },
        Ml = function (t) {
            var e;
            try {
                e = t.getBBox()
            } catch (r) {
                e = oo.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === oo || (e = oo.call(t, !0)), e && !e.width && !e.x && !e.y ? {
                x: +Al(t, ["x", "cx", "x1"]) || 0,
                y: +Al(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            } : e
        },
        Sl = function (t) {
            return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Ml(t))
        },
        Ls = function (t, e) {
            if (e) {
                var r = t.style;
                e in pr && e !== mr && (e = kt), r.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(e.replace(wl, "-$1").toLowerCase())) : r.removeAttribute(e)
            }
        },
        gr = function (t, e, r, i, n, o) {
            var a = new Gt(t._pt, e, r, 0, 1, o ? Cl : bl);
            return t._pt = a, a.b = i, a.e = n, t._props.push(r), a
        },
        Pl = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        xr = function s(t, e, r, i) {
            var n = parseFloat(r) || 0,
                o = (r + "").trim().substr((n + "").length) || "px",
                a = Ar.style,
                l = Hf.test(e),
                u = t.tagName.toLowerCase() === "svg",
                h = (u ? "client" : "offset") + (l ? "Width" : "Height"),
                c = 100,
                f = i === "px",
                d = i === "%",
                g, p, m, x;
            return i === o || !n || Pl[i] || Pl[o] ? n : (o !== "px" && !f && (n = s(t, e, r, "px")), x = t.getCTM && Sl(t), (d || o === "%") && (pr[e] || ~e.indexOf("adius")) ? (g = x ? t.getBBox()[l ? "width" : "height"] : t[h], yt(d ? n / g * c : n / 100 * g)) : (a[l ? "width" : "height"] = c + (f ? o : i), p = ~e.indexOf("adius") || i === "em" && t.appendChild && !u ? t : t.parentNode, x && (p = (t.ownerSVGElement || {}).parentNode), (!p || p === fr || !p.appendChild) && (p = fr.body), m = p._gsap, m && d && m.width && l && m.time === ee.time ? yt(n / m.width * c) : ((d || o === "%") && (a.position = tr(t, "position")), p === t && (a.position = "static"), p.appendChild(Ar), g = Ar[h], p.removeChild(Ar), a.position = "absolute", l && d && (m = ur(p), m.time = ee.time, m.width = p[h]), yt(f ? g * n / c : g && n ? c / g * n : 0))))
        },
        Sr = function (t, e, r, i) {
            var n;
            return so || no(), e in dr && e !== "transform" && (e = dr[e], ~e.indexOf(",") && (e = e.split(",")[0])), pr[e] && e !== "transform" ? (n = Os(t, i), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : bi(tr(t, mr)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Ei[e] && Ei[e](t, e, r) || tr(t, e) || In(t, e) || (e === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? xr(t, e, n, r) + r : n
        },
        np = function (t, e, r, i) {
            if (!r || r === "none") {
                var n = ss(e, t, 1),
                    o = n && tr(t, n, 1);
                o && o !== r ? (e = n, r = o) : e === "borderColor" && (r = tr(t, "borderTopColor"))
            }
            var a = new Gt(this._pt, t.style, e, 0, 1, Jn),
                l = 0,
                u = 0,
                h, c, f, d, g, p, m, x, y, v, b, w;
            if (a.b = r, a.e = i, r += "", i += "", i === "auto" && (t.style[e] = i, i = tr(t, e) || i, t.style[e] = r), h = [r, i], Wn(h), r = h[0], i = h[1], f = r.match(wr) || [], w = i.match(wr) || [], w.length) {
                for (; c = wr.exec(i);) m = c[0], y = i.substring(l, c.index), g ? g = (g + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (g = 1), m !== (p = f[u++] || "") && (d = parseFloat(p) || 0, b = p.substr((d + "").length), m.charAt(1) === "=" && (m = Er(d, m) + b), x = parseFloat(m), v = m.substr((x + "").length), l = wr.lastIndex - v.length, v || (v = v || Zt.units[e] || b, l === i.length && (i += v, a.e += v)), b !== v && (d = xr(t, e, p, v) || 0), a._pt = {
                    _next: a._pt,
                    p: y || u === 1 ? y : ",",
                    s: d,
                    c: x - d,
                    m: g && g < 4 || e === "zIndex" ? Math.round : 0
                });
                a.c = l < i.length ? i.substring(l, i.length) : ""
            } else a.r = e === "display" && i === "none" ? Cl : bl;
            return Sn.test(i) && (a.e = 0), this._pt = a, a
        },
        zl = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        op = function (t) {
            var e = t.split(" "),
                r = e[0],
                i = e[1] || "50%";
            return (r === "top" || r === "bottom" || i === "left" || i === "right") && (t = r, r = i, i = t), e[0] = zl[r] || r, e[1] = zl[i] || i, e.join(" ")
        },
        ap = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var r = e.t,
                    i = r.style,
                    n = e.u,
                    o = r._gsap,
                    a, l, u;
                if (n === "all" || n === !0) i.cssText = "", l = 1;
                else
                    for (n = n.split(","), u = n.length; --u > -1;) a = n[u], pr[a] && (l = 1, a = a === "transformOrigin" ? mr : kt), Ls(r, a);
                l && (Ls(r, kt), o && (o.svg && r.removeAttribute("transform"), Os(r, 1), o.uncache = 1))
            }
        },
        Ei = {
            clearProps: function (t, e, r, i, n) {
                if (n.data !== "isFromStart") {
                    var o = t._pt = new Gt(t._pt, e, r, 0, 0, ap);
                    return o.u = i, o.pr = -10, o.tween = n, t._props.push(r), 1
                }
            }
        },
        ks = [1, 0, 0, 1, 0, 0],
        Ll = {},
        kl = function (t) {
            return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
        },
        Ol = function (t) {
            var e = tr(t, kt);
            return kl(e) ? ks : e.substr(7).match(An).map(yt)
        },
        ao = function (t, e) {
            var r = t._gsap || ur(t),
                i = t.style,
                n = Ol(t),
                o, a, l, u;
            return r.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, n = [l.a, l.b, l.c, l.d, l.e, l.f], n.join(",") === "1,0,0,1,0,0" ? ks : n) : (n === ks && !t.offsetParent && t !== ts && !r.svg && (l = i.display, i.display = "block", o = t.parentNode, (!o || !t.offsetParent) && (u = 1, a = t.nextSibling, ts.appendChild(t)), n = Ol(t), l ? i.display = l : Ls(t, "display"), u && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : ts.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
        },
        lo = function (t, e, r, i, n, o) {
            var a = t._gsap,
                l = n || ao(t, !0),
                u = a.xOrigin || 0,
                h = a.yOrigin || 0,
                c = a.xOffset || 0,
                f = a.yOffset || 0,
                d = l[0],
                g = l[1],
                p = l[2],
                m = l[3],
                x = l[4],
                y = l[5],
                v = e.split(" "),
                b = parseFloat(v[0]) || 0,
                w = parseFloat(v[1]) || 0,
                D, T, A, F;
            r ? l !== ks && (T = d * m - g * p) && (A = b * (m / T) + w * (-p / T) + (p * y - m * x) / T, F = b * (-g / T) + w * (d / T) - (d * y - g * x) / T, b = A, w = F) : (D = Ml(t), b = D.x + (~v[0].indexOf("%") ? b / 100 * D.width : b), w = D.y + (~(v[1] || v[0]).indexOf("%") ? w / 100 * D.height : w)), i || i !== !1 && a.smooth ? (x = b - u, y = w - h, a.xOffset = c + (x * d + y * p) - x, a.yOffset = f + (x * g + y * m) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = b, a.yOrigin = w, a.smooth = !!i, a.origin = e, a.originIsAbsolute = !!r, t.style[mr] = "0px 0px", o && (gr(o, a, "xOrigin", u, b), gr(o, a, "yOrigin", h, w), gr(o, a, "xOffset", c, a.xOffset), gr(o, a, "yOffset", f, a.yOffset)), t.setAttribute("data-svg-origin", b + " " + w)
        },
        Os = function (t, e) {
            var r = t._gsap || new Xn(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i = t.style,
                n = r.scaleX < 0,
                o = "px",
                a = "deg",
                l = tr(t, mr) || "0",
                u, h, c, f, d, g, p, m, x, y, v, b, w, D, T, A, F, P, k, L, _, S, U, M, O, z, V, G, q, W, X, Y;
            return u = h = c = g = p = m = x = y = v = 0, f = d = 1, r.svg = !!(t.getCTM && Sl(t)), D = ao(t, r.svg), r.svg && (M = (!r.uncache || l === "0px 0px") && !e && t.getAttribute("data-svg-origin"), lo(t, M || l, !!M || r.originIsAbsolute, r.smooth !== !1, D)), b = r.xOrigin || 0, w = r.yOrigin || 0, D !== ks && (P = D[0], k = D[1], L = D[2], _ = D[3], u = S = D[4], h = U = D[5], D.length === 6 ? (f = Math.sqrt(P * P + k * k), d = Math.sqrt(_ * _ + L * L), g = P || k ? rs(k, P) * Mr : 0, x = L || _ ? rs(L, _) * Mr + g : 0, x && (d *= Math.abs(Math.cos(x * es))), r.svg && (u -= b - (b * P + w * L), h -= w - (b * k + w * _))) : (Y = D[6], W = D[7], V = D[8], G = D[9], q = D[10], X = D[11], u = D[12], h = D[13], c = D[14], T = rs(Y, q), p = T * Mr, T && (A = Math.cos(-T), F = Math.sin(-T), M = S * A + V * F, O = U * A + G * F, z = Y * A + q * F, V = S * -F + V * A, G = U * -F + G * A, q = Y * -F + q * A, X = W * -F + X * A, S = M, U = O, Y = z), T = rs(-L, q), m = T * Mr, T && (A = Math.cos(-T), F = Math.sin(-T), M = P * A - V * F, O = k * A - G * F, z = L * A - q * F, X = _ * F + X * A, P = M, k = O, L = z), T = rs(k, P), g = T * Mr, T && (A = Math.cos(T), F = Math.sin(T), M = P * A + k * F, O = S * A + U * F, k = k * A - P * F, U = U * A - S * F, P = M, S = O), p && Math.abs(p) + Math.abs(g) > 359.9 && (p = g = 0, m = 180 - m), f = yt(Math.sqrt(P * P + k * k + L * L)), d = yt(Math.sqrt(U * U + Y * Y)), T = rs(S, U), x = Math.abs(T) > 2e-4 ? T * Mr : 0, v = X ? 1 / (X < 0 ? -X : X) : 0), r.svg && (M = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !kl(tr(t, kt)), M && t.setAttribute("transform", M))), Math.abs(x) > 90 && Math.abs(x) < 270 && (n ? (f *= -1, x += g <= 0 ? 180 : -180, g += g <= 0 ? 180 : -180) : (d *= -1, x += x <= 0 ? 180 : -180)), e = e || r.uncache, r.x = u - ((r.xPercent = u && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + o, r.y = h - ((r.yPercent = h && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + o, r.z = c + o, r.scaleX = yt(f), r.scaleY = yt(d), r.rotation = yt(g) + a, r.rotationX = yt(p) + a, r.rotationY = yt(m) + a, r.skewX = x + a, r.skewY = y + a, r.transformPerspective = v + o, (r.zOrigin = parseFloat(l.split(" ")[2]) || 0) && (i[mr] = bi(l)), r.xOffset = r.yOffset = 0, r.force3D = Zt.force3D, r.renderTransform = r.svg ? up : Tl ? Rl : lp, r.uncache = 0, r
        },
        bi = function (t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        uo = function (t, e, r) {
            var i = Lt(e);
            return yt(parseFloat(e) + parseFloat(xr(t, "x", r + "px", i))) + i
        },
        lp = function (t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Rl(t, e)
        },
        Pr = "0deg",
        Rs = "0px",
        zr = ") ",
        Rl = function (t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                o = r.x,
                a = r.y,
                l = r.z,
                u = r.rotation,
                h = r.rotationY,
                c = r.rotationX,
                f = r.skewX,
                d = r.skewY,
                g = r.scaleX,
                p = r.scaleY,
                m = r.transformPerspective,
                x = r.force3D,
                y = r.target,
                v = r.zOrigin,
                b = "",
                w = x === "auto" && t && t !== 1 || x === !0;
            if (v && (c !== Pr || h !== Pr)) {
                var D = parseFloat(h) * es,
                    T = Math.sin(D),
                    A = Math.cos(D),
                    F;
                D = parseFloat(c) * es, F = Math.cos(D), o = uo(y, o, T * F * -v), a = uo(y, a, -Math.sin(D) * -v), l = uo(y, l, A * F * -v + v)
            }
            m !== Rs && (b += "perspective(" + m + zr), (i || n) && (b += "translate(" + i + "%, " + n + "%) "), (w || o !== Rs || a !== Rs || l !== Rs) && (b += l !== Rs || w ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + zr), u !== Pr && (b += "rotate(" + u + zr), h !== Pr && (b += "rotateY(" + h + zr), c !== Pr && (b += "rotateX(" + c + zr), (f !== Pr || d !== Pr) && (b += "skew(" + f + ", " + d + zr), (g !== 1 || p !== 1) && (b += "scale(" + g + ", " + p + zr), y.style[kt] = b || "translate(0, 0)"
        },
        up = function (t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                o = r.x,
                a = r.y,
                l = r.rotation,
                u = r.skewX,
                h = r.skewY,
                c = r.scaleX,
                f = r.scaleY,
                d = r.target,
                g = r.xOrigin,
                p = r.yOrigin,
                m = r.xOffset,
                x = r.yOffset,
                y = r.forceCSS,
                v = parseFloat(o),
                b = parseFloat(a),
                w, D, T, A, F;
            l = parseFloat(l), u = parseFloat(u), h = parseFloat(h), h && (h = parseFloat(h), u += h, l += h), l || u ? (l *= es, u *= es, w = Math.cos(l) * c, D = Math.sin(l) * c, T = Math.sin(l - u) * -f, A = Math.cos(l - u) * f, u && (h *= es, F = Math.tan(u - h), F = Math.sqrt(1 + F * F), T *= F, A *= F, h && (F = Math.tan(h), F = Math.sqrt(1 + F * F), w *= F, D *= F)), w = yt(w), D = yt(D), T = yt(T), A = yt(A)) : (w = c, A = f, D = T = 0), (v && !~(o + "").indexOf("px") || b && !~(a + "").indexOf("px")) && (v = xr(d, "x", o, "px"), b = xr(d, "y", a, "px")), (g || p || m || x) && (v = yt(v + g - (g * w + p * T) + m), b = yt(b + p - (g * D + p * A) + x)), (i || n) && (F = d.getBBox(), v = yt(v + i / 100 * F.width), b = yt(b + n / 100 * F.height)), F = "matrix(" + w + "," + D + "," + T + "," + A + "," + v + "," + b + ")", d.setAttribute("transform", F), y && (d.style[kt] = F)
        },
        hp = function (t, e, r, i, n) {
            var o = 360,
                a = Tt(n),
                l = parseFloat(n) * (a && ~n.indexOf("rad") ? Mr : 1),
                u = l - i,
                h = i + u + "deg",
                c, f;
            return a && (c = n.split("_")[1], c === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), c === "cw" && u < 0 ? u = (u + o * vl) % o - ~~(u / o) * o : c === "ccw" && u > 0 && (u = (u - o * vl) % o - ~~(u / o) * o)), t._pt = f = new Gt(t._pt, e, r, i, u, Qf), f.e = h, f.u = "deg", t._props.push(r), f
        },
        Bl = function (t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        cp = function (t, e, r) {
            var i = Bl({}, r._gsap),
                n = "perspective,force3D,transformOrigin,svgOrigin",
                o = r.style,
                a, l, u, h, c, f, d, g;
            i.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), o[kt] = e, a = Os(r, 1), Ls(r, kt), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[kt], o[kt] = e, a = Os(r, 1), o[kt] = u);
            for (l in pr) u = i[l], h = a[l], u !== h && n.indexOf(l) < 0 && (d = Lt(u), g = Lt(h), c = d !== g ? xr(r, l, u, g) : parseFloat(u), f = parseFloat(h), t._pt = new Gt(t._pt, a, l, c, f - c, El), t._pt.u = g || 0, t._props.push(l));
            Bl(a, i)
        };
    Yt("padding,margin,Width,Radius", function (s, t) {
        var e = "Top",
            r = "Right",
            i = "Bottom",
            n = "Left",
            o = (t < 3 ? [e, r, i, n] : [e + n, e + r, i + r, i + n]).map(function (a) {
                return t < 2 ? s + a : "border" + a + s
            });
        Ei[t > 1 ? "border" + s : s] = function (a, l, u, h, c) {
            var f, d;
            if (arguments.length < 4) return f = o.map(function (g) {
                return Sr(a, g, u)
            }), d = f.join(" "), d.split(f[0]).length === 5 ? f[0] : d;
            f = (h + "").split(" "), d = {}, o.forEach(function (g, p) {
                return d[g] = f[p] = f[p] || f[(p - 1) / 2 | 0]
            }), a.init(l, d, c)
        }
    });
    var ho = {
        name: "css",
        register: no,
        targetTest: function (t) {
            return t.style && t.nodeType
        },
        init: function (t, e, r, i, n) {
            var o = this._props,
                a = t.style,
                l = r.vars.startAt,
                u, h, c, f, d, g, p, m, x, y, v, b, w, D, T;
            so || no();
            for (p in e)
                if (p !== "autoRound" && (h = e[p], !(te[p] && $n(p, e, r, i, t, n)))) {
                    if (d = typeof h, g = Ei[p], d === "function" && (h = h.call(r, i, t, n), d = typeof h), d === "string" && ~h.indexOf("random(") && (h = Kr(h)), g) g(this, t, p, h, r) && (T = 1);
                    else if (p.substr(0, 2) === "--") u = (getComputedStyle(t).getPropertyValue(p) + "").trim(), h += "", Je.lastIndex = 0, Je.test(u) || (m = Lt(u), x = Lt(h)), x ? m !== x && (u = xr(t, p, u, x) + x) : m && (h += m), this.add(a, "setProperty", u, h, i, n, 0, 0, p), o.push(p);
                    else if (d !== "undefined") {
                        if (l && p in l ? (u = typeof l[p] == "function" ? l[p].call(r, i, t, n) : l[p], Tt(u) && ~u.indexOf("random(") && (u = Kr(u)), Lt(u + "") || (u += Zt.units[p] || Lt(Sr(t, p)) || ""), (u + "").charAt(1) === "=" && (u = Sr(t, p))) : u = Sr(t, p), f = parseFloat(u), y = d === "string" && h.charAt(1) === "=" && h.substr(0, 2), y && (h = h.substr(2)), c = parseFloat(h), p in dr && (p === "autoAlpha" && (f === 1 && Sr(t, "visibility") === "hidden" && c && (f = 0), gr(this, a, "visibility", f ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), p !== "scale" && p !== "transform" && (p = dr[p], ~p.indexOf(",") && (p = p.split(",")[0]))), v = p in pr, v) {
                            if (b || (w = t._gsap, w.renderTransform && !e.parseTransform || Os(t, e.parseTransform), D = e.smoothOrigin !== !1 && w.smooth, b = this._pt = new Gt(this._pt, a, kt, 0, 1, w.renderTransform, w, 0, -1), b.dep = 1), p === "scale") this._pt = new Gt(this._pt, w, "scaleY", w.scaleY, (y ? Er(w.scaleY, y + c) : c) - w.scaleY || 0), o.push("scaleY", p), p += "X";
                            else if (p === "transformOrigin") {
                                h = op(h), w.svg ? lo(t, h, 0, D, 0, this) : (x = parseFloat(h.split(" ")[2]) || 0, x !== w.zOrigin && gr(this, w, "zOrigin", w.zOrigin, x), gr(this, a, p, bi(u), bi(h)));
                                continue
                            } else if (p === "svgOrigin") {
                                lo(t, h, 1, D, 0, this);
                                continue
                            } else if (p in Ll) {
                                hp(this, w, p, f, y ? Er(f, y + h) : h);
                                continue
                            } else if (p === "smoothOrigin") {
                                gr(this, w, "smooth", w.smooth, h);
                                continue
                            } else if (p === "force3D") {
                                w[p] = h;
                                continue
                            } else if (p === "transform") {
                                cp(this, h, t);
                                continue
                            }
                        } else p in a || (p = ss(p) || p);
                        if (v || (c || c === 0) && (f || f === 0) && !$f.test(h) && p in a) m = (u + "").substr((f + "").length), c || (c = 0), x = Lt(h) || (p in Zt.units ? Zt.units[p] : m), m !== x && (f = xr(t, p, u, x)), this._pt = new Gt(this._pt, v ? w : a, p, f, (y ? Er(f, y + c) : c) - f, !v && (x === "px" || p === "zIndex") && e.autoRound !== !1 ? Zf : El), this._pt.u = x || 0, m !== x && x !== "%" && (this._pt.b = u, this._pt.r = Kf);
                        else if (p in a) np.call(this, t, p, u, y ? y + h : h);
                        else if (p in t) this.add(t, p, u || t[p], y ? y + h : h, i, n);
                        else {
                            pi(p, h);
                            continue
                        }
                        o.push(p)
                    }
                } T && eo(this)
        },
        get: Sr,
        aliases: dr,
        getSetter: function (t, e, r) {
            var i = dr[e];
            return i && i.indexOf(",") < 0 && (e = i), e in pr && e !== mr && (t._gsap.x || Sr(t, "x")) ? r && _l === r ? e === "scale" ? rp : ep : (_l = r || {}) && (e === "scale" ? sp : ip) : t.style && !hi(t.style[e]) ? Jf : ~e.indexOf("-") ? tp : vi(t, e)
        },
        core: {
            _removeProperty: Ls,
            _getMatrix: ao
        }
    };
    ce.utils.checkPrefix = ss;
    (function (s, t, e, r) {
        var i = Yt(s + "," + t + "," + e, function (n) {
            pr[n] = 1
        });
        Yt(t, function (n) {
            Zt.units[n] = "deg", Ll[n] = 1
        }), dr[i[13]] = s + "," + t, Yt(r, function (n) {
            var o = n.split(":");
            dr[o[1]] = i[o[0]]
        })
    })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
    Yt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (s) {
        Zt.units[s] = "px"
    });
    ce.registerPlugin(ho);
    var E = ce.registerPlugin(ho) || ce,
        w0 = E.core.Tween;
    var Bs = class {
        constructor(t) {
            let e = t.desktop,
                r = t.mobile;
            this.state = {
                toggle: !1
            }, this.data = {
                background: t.background ? t.background : "red",
                desktop: {
                    colums: e ? e.columns : 0,
                    rows: e ? e.rows : 0,
                    gutter: e ? e.gutter : 0,
                    size: e ? e.size : 0
                },
                mobile: {
                    colums: r ? r.columns : 0,
                    rows: r ? r.rows : 0,
                    gutter: r ? r.gutter : 0,
                    size: r ? r.size : 0
                }
            }, this.container = document.createElement("div"), this.init()
        }
        gridSetup = () => {
            let {
                sniff: t
            } = C, {
                breakpoints: e
            } = t, {
                desktop: r,
                mobile: i,
                background: n
            } = this.data, o = document.createElement("div"), a = e.M_UP ? r.colums : i.colums, l = e.M_UP ? r.gutter : i.gutter, u = e.M_UP ? r.size : i.size, h = 0;
            if (this.container.innerHTML = "", l !== 0 && l) {
                let c = l * 100 / u;
                h = 100 - c * 2, this.container.style.width = `${h}vw`
            } else h = 100, this.container.style.width = "100%";
            if (a !== 0) {
                o.className = "cols";
                for (let c = 0; c < a; c++) {
                    let f = document.createElement("div"),
                        d = h / a;
                    Object.assign(f.style, {
                        background: n,
                        opacity: c % 2 == 0 ? .6 : 1,
                        height: "100%",
                        width: `${d}vw`
                    }), f.className = `inner-col  col-${c}`, o.appendChild(f)
                }
                this.container.appendChild(o)
            }
        };
        addGrid() {
            this.container.className = "grid", C.body.appendChild(this.container)
        }
        visibility = t => {
            t.key === "g" && t.ctrlKey && (this.state.toggle ? (E.to(this.container, {
                duration: .5,
                autoAlpha: 0
            }), this.state.toggle = !1) : (E.to(this.container, {
                duration: .5,
                autoAlpha: .2
            }), this.state.toggle = !0))
        };
        on() {
            document.addEventListener("keypress", this.visibility), B.on("resize", this.gridSetup)
        }
        init() {
            this.gridSetup(), this.on(), this.addGrid()
        }
    };
    var ar = class {
        constructor() {
            this.scroll = {
                target: 0,
                current: 0,
                rounded: 0,
                ease: .115
            }, this.mouse = {
                x: 0,
                y: 0,
                target: null
            }
        }
        tick = () => {
            let {
                target: t,
                current: e,
                ease: r
            } = this.scroll;
            this.scroll.current = Fe(e, t, r), this.scroll.rounded = Math.round(e * 100) / 100;
            let i = (t - e) * .005;
            B.emit("tick", {
                target: t,
                current: this.getSmooth(),
                mouse: this.mouse,
                diff: i
            })
        };
        clamp() {
            this.scroll.target = Math.min(Math.max(this.scroll.target, 0), C.page.h)
        }
        getSmooth() {
            return Mt.isDevice ? window.pageYOffset : this.scroll.rounded
        }
        onScroll = ({
            y: t
        }) => {
            C.flags.locked || (this.scroll.target += t, this.clamp())
        };
        move = ({
            x: t,
            y: e,
            target: r
        }) => {
            this.mouse.x = t, this.mouse.y = e, this.mouse.target = r
        };
        reset() {
            this.scroll.target = this.scroll.current = this.scroll.rounded = 0
        }
        on() {
            E.ticker.fps(-1), E.ticker.add(this.tick), B.on("scroll", this.onScroll), B.on("mousemove", this.move)
        }
    };
    var jl = or(Ul());
    var Is = class {
        constructor() {
            this.state = {
                resized: !1
            }, this.init()
        }
        resize = () => {
            let {
                sniff: t,
                page: e
            } = C, {
                browser: r
            } = t, {
                width: i,
                height: n
            } = Xr();
            r.isDevice && window.innerWidth === e.vw && this.state.resized || (Mt.update(), this.reload(), C.flags.resize = !0, C.page.vw = i, C.page.vh = n, C.sniff.breakpoints = ws(), C.sniff.browser = Mt.sniff, C.sniff.orientation = i < n ? "portrait" : "landscape", C.SCROLL.setScrollBounds(), vn(), this.add(), B.emit("resize"), this.state.resized = !0, C.flags.resize = !1)
        };
        reload() {
            let {
                sniff: t
            } = C, {
                browser: e
            } = t;
            (!e.isDevice && Mt.isDevice || e.isDevice && !Mt.isDevice) && location.reload()
        }
        add() {
            let {
                sniff: t,
                body: e,
                page: r
            } = C, {
                browser: i
            } = t;
            r.vw < r.vh ? e.classList.add("is-portrait") : e.classList.remove("is-portrait"), i.isDevice && e.classList.add("is-device")
        }
        on() {
            window.addEventListener("resize", (0, jl.default)(this.resize, 200))
        }
        init() {
            this.on()
        }
    };
    var Ns = class {
        constructor() {
            this.state = {
                on: 0,
                off: 0,
                coords: {
                    x: 0,
                    y: 0
                }
            }, this.events = {
                move: Mt.sniff.isDevice ? "touchmove" : "mousemove",
                down: Mt.sniff.isDevice ? "touchstart" : "mousedown",
                up: Mt.sniff.isDevice ? "touchend" : "mouseup"
            }
        }
        on() {
            this.l("add")
        }
        off() {
            this.l("remove")
        }
        l(t) {
            let {
                move: e,
                down: r,
                up: i
            } = this.events;
            vs(window, t, e, this.onMove), vs(window, t, r, this.onDown), vs(window, t, i, this.onUp)
        }
        getPos(t) {
            let e = t.changedTouches ? t.changedTouches[0].clientX : t.clientX,
                r = t.changedTouches ? t.changedTouches[0].clientY : t.clientY,
                i = t.target;
            return {
                x: e,
                y: r,
                target: i
            }
        }
        onMove = t => {
            let {
                x: e,
                y: r,
                target: i
            } = this.getPos(t);
            B.emit("mousemove", {
                x: e,
                y: r,
                target: i,
                e: t
            })
        };
        onDown = t => {
            let {
                x: e,
                y: r,
                target: i
            } = this.getPos(t);
            this.state.on = e, B.emit("mousedown", {
                x: e,
                y: r,
                target: i
            })
        };
        onUp = t => {
            let {
                x: e,
                target: r
            } = this.getPos(t), i = this.state;
            i.off = e;
            let n = Math.abs(i.on - i.off) > 10;
            B.emit("mouseup", {
                x: e,
                target: r,
                isClick: n
            })
        }
    };
    var Rp = Yl(),
        Bp = _n(),
        Ip = Gl().Lethargy,
        fe = Hl(),
        Dm = Ql(),
        Np = Zl(),
        Lr = "virtualscroll",
        Jl = pe,
        is = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SPACE: 32
        };

    function pe(s) {
        Np(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, s && s.el && (this.el = s.el, delete s.el), this.options = Rp({
            mouseMultiplier: 1,
            touchMultiplier: 2,
            firefoxMultiplier: 15,
            keyStep: 120,
            preventTouch: !1,
            unpreventTouchClass: "vs-touchmove-allowed",
            limitInertia: !1,
            useKeyboard: !0,
            useTouch: !0
        }, s), this.options.limitInertia && (this._lethargy = new Ip), this._emitter = new Bp, this._event = {
            y: 0,
            x: 0,
            deltaX: 0,
            deltaY: 0
        }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, this.options.passive !== void 0 && (this.listenerOptions = {
            passive: this.options.passive
        })
    }
    pe.prototype._notify = function (s) {
        var t = this._event;
        t.x += t.deltaX, t.y += t.deltaY, this._emitter.emit(Lr, {
            x: t.x,
            y: t.y,
            deltaX: t.deltaX,
            deltaY: t.deltaY,
            originalEvent: s
        })
    };
    pe.prototype._onWheel = function (s) {
        var t = this.options;
        if (!(this._lethargy && this._lethargy.check(s) === !1)) {
            var e = this._event;
            e.deltaX = s.wheelDeltaX || s.deltaX * -1, e.deltaY = s.wheelDeltaY || s.deltaY * -1, fe.isFirefox && s.deltaMode == 1 && (e.deltaX *= t.firefoxMultiplier, e.deltaY *= t.firefoxMultiplier), e.deltaX *= t.mouseMultiplier, e.deltaY *= t.mouseMultiplier, this._notify(s)
        }
    };
    pe.prototype._onMouseWheel = function (s) {
        if (!(this.options.limitInertia && this._lethargy.check(s) === !1)) {
            var t = this._event;
            t.deltaX = s.wheelDeltaX ? s.wheelDeltaX : 0, t.deltaY = s.wheelDeltaY ? s.wheelDeltaY : s.wheelDelta, this._notify(s)
        }
    };
    pe.prototype._onTouchStart = function (s) {
        var t = s.targetTouches ? s.targetTouches[0] : s;
        this.touchStartX = t.pageX, this.touchStartY = t.pageY
    };
    pe.prototype._onTouchMove = function (s) {
        var t = this.options;
        t.preventTouch && !s.target.classList.contains(t.unpreventTouchClass) && s.preventDefault();
        var e = this._event,
            r = s.targetTouches ? s.targetTouches[0] : s;
        e.deltaX = (r.pageX - this.touchStartX) * t.touchMultiplier, e.deltaY = (r.pageY - this.touchStartY) * t.touchMultiplier, this.touchStartX = r.pageX, this.touchStartY = r.pageY, this._notify(s)
    };
    pe.prototype._onKeyDown = function (s) {
        var t = this._event;
        t.deltaX = t.deltaY = 0;
        var e = window.innerHeight - 40;
        if (!C.focus) {
            switch (s.keyCode) {
                case is.LEFT:
                case is.UP:
                    t.deltaY = this.options.keyStep;
                    break;
                case is.RIGHT:
                case is.DOWN:
                    t.deltaY = -this.options.keyStep;
                    break;
                case (is.SPACE && s.shiftKey):
                    t.deltaY = e;
                    break;
                case is.SPACE:
                    t.deltaY = -e;
                    break;
                default:
                    return
            }
            this._notify(s)
        }
    };
    pe.prototype._bind = function () {
        fe.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), fe.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), fe.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), fe.hasPointer && fe.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), fe.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
    };
    pe.prototype._unbind = function () {
        fe.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), fe.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), fe.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), fe.hasPointer && fe.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), fe.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
    };
    pe.prototype.on = function (s, t) {
        this._emitter.on(Lr, s, t);
        var e = this._emitter.e;
        e && e[Lr] && e[Lr].length === 1 && this._bind()
    };
    pe.prototype.off = function (s, t) {
        this._emitter.off(Lr, s, t);
        var e = this._emitter.e;
        (!e[Lr] || e[Lr].length <= 0) && this._unbind()
    };
    pe.prototype.reset = function () {
        var s = this._event;
        s.x = 0, s.y = 0
    };
    pe.prototype.destroy = function () {
        this._emitter.off(), this._unbind()
    };
    var Us = class {
        constructor(t) {
            this.smooth = t.smooth || !1, C.flags.smooth = this.smooth
        }
        setScrollBounds() {
            let {
                page: t
            } = C, e = at(t.el).height;
            C.page.h = e > t.vh ? e - t.vh : 0
        }
        onEvent = t => {
            B.emit("scroll", {
                y: t.deltaY * -1
            })
        };
        onScroll = () => {
            B.emit("scroll", {
                y: window.scrollY
            })
        };
        on() {
            this.l("add")
        }
        off() {
            this.l("remove")
        }
        l(t) {
            if (this.smooth) {
                let e = t === "add" ? "on" : "off";
                new Jl({
                    mouseMultiplier: Mt.sniff.isWindows ? 1.1 : .45,
                    touchMultiplier: 3.5,
                    firefoxMultiplier: Mt.sniff.isWindows ? 40 : 90,
                    passive: !0
                })[e](this.onEvent)
            } else document.addEventListener("scroll", this.onScroll, !0)
        }
    };
    var Vp = or(mo());
    var tu = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

    function go(s) {
        let t = s.nodeType,
            e = "";
        if (t === 1 || t === 9 || t === 11) {
            if (typeof s.textContent == "string") return s.textContent;
            for (s = s.firstChild; s; s = s.nextSibling) e += go(s)
        } else if (t === 3 || t === 4) return s.nodeValue;
        return e
    }
    var kr, eu, ru, Up = /(?:\r|\n|\t\t)/g,
        jp = /(?:\s\s+)/g,
        qp = () => {
            kr = document, eu = window, ru = 1
        },
        Wp = 1,
        su = s => eu.getComputedStyle(s),
        Yp = Array.isArray,
        iu = [].slice,
        xo = (s, t) => {
            let e;
            return Yp(s) ? s : (e = typeof s) === "string" && !t && s ? iu.call(kr.querySelectorAll(s), 0) : s && e === "object" && "length" in s ? iu.call(s, 0) : s ? [s] : []
        },
        Do = s => s.position === "absolute" || s.absolute === !0,
        Gp = (s, t) => {
            let e = t.length,
                r;
            for (; --e > -1;)
                if (r = t[e], s.substr(0, r.length) === r) return r.length
        },
        Xp = " style='position:relative;display:inline-block;'",
        nu = (s = "", t) => {
            let e = ~s.indexOf("++"),
                r = 1;
            return e && (s = s.split("++").join("")), () => "<" + t + Xp + (s ? " class='" + s + (e ? r++ : "") + "'>" : ">")
        },
        yo = (s, t, e) => {
            let r = s.nodeType;
            if (r === 1 || r === 9 || r === 11)
                for (s = s.firstChild; s; s = s.nextSibling) yo(s, t, e);
            else(r === 3 || r === 4) && (s.nodeValue = s.nodeValue.split(t).join(e))
        },
        _o = (s, t) => {
            let e = t.length;
            for (; --e > -1;) s.push(t[e])
        },
        ou = (s, t, e) => {
            let r;
            for (; s && s !== t;) {
                if (r = s._next || s.nextSibling, r) return r.textContent.charAt(0) === e;
                s = s.parentNode || s._parent
            }
        },
        au = s => {
            let t = xo(s.childNodes),
                e = t.length,
                r, i;
            for (r = 0; r < e; r++) i = t[r], i._isSplit ? au(i) : (r && i.previousSibling.nodeType === 3 ? i.previousSibling.nodeValue += i.nodeType === 3 ? i.nodeValue : i.firstChild.nodeValue : i.nodeType !== 3 && s.insertBefore(i.firstChild, i), s.removeChild(i))
        },
        Ie = (s, t) => parseFloat(t[s]) || 0,
        Hp = (s, t, e, r, i, n, o) => {
            let a = su(s),
                l = Ie("paddingLeft", a),
                u = -999,
                h = Ie("borderBottomWidth", a) + Ie("borderTopWidth", a),
                c = Ie("borderLeftWidth", a) + Ie("borderRightWidth", a),
                f = Ie("paddingTop", a) + Ie("paddingBottom", a),
                d = Ie("paddingLeft", a) + Ie("paddingRight", a),
                g = Ie("fontSize", a) * .2,
                p = a.textAlign,
                m = [],
                x = [],
                y = [],
                v = t.wordDelimiter || " ",
                b = t.tag ? t.tag : t.span ? "span" : "div",
                w = t.type || t.split || "chars,words,lines",
                D = i && ~w.indexOf("lines") ? [] : null,
                T = ~w.indexOf("words"),
                A = ~w.indexOf("chars"),
                F = Do(t),
                P = t.linesClass,
                k = ~(P || "").indexOf("++"),
                L = [],
                _, S, U, M, O, z, V, G, q, W, X, Y;
            for (k && (P = P.split("++").join("")), S = s.getElementsByTagName("*"), U = S.length, O = [], _ = 0; _ < U; _++) O[_] = S[_];
            if (D || F)
                for (_ = 0; _ < U; _++) M = O[_], z = M.parentNode === s, (z || F || A && !T) && (Y = M.offsetTop, D && z && Math.abs(Y - u) > g && (M.nodeName !== "BR" || _ === 0) && (V = [], D.push(V), u = Y), F && (M._x = M.offsetLeft, M._y = Y, M._w = M.offsetWidth, M._h = M.offsetHeight), D && ((M._isSplit && z || !A && z || T && z || !T && M.parentNode.parentNode === s && !M.parentNode._isSplit) && (V.push(M), M._x -= l, ou(M, s, v) && (M._wordEnd = !0)), M.nodeName === "BR" && (M.nextSibling && M.nextSibling.nodeName === "BR" || _ === 0) && D.push([])));
            for (_ = 0; _ < U; _++) {
                if (M = O[_], z = M.parentNode === s, M.nodeName === "BR") {
                    D || F ? (M.parentNode && M.parentNode.removeChild(M), O.splice(_--, 1), U--) : T || s.appendChild(M);
                    continue
                }
                F && (q = M.style, !T && !z && (M._x += M.parentNode._x, M._y += M.parentNode._y), q.left = M._x + "px", q.top = M._y + "px", q.position = "absolute", q.display = "block", q.width = M._w + 1 + "px", q.height = M._h + "px"), !T && A ? M._isSplit ? (M._next = M.nextSibling, M.parentNode.appendChild(M)) : M.parentNode._isSplit ? (M._parent = M.parentNode, !M.previousSibling && M.firstChild && (M.firstChild._isFirst = !0), M.nextSibling && M.nextSibling.textContent === " " && !M.nextSibling.nextSibling && L.push(M.nextSibling), M._next = M.nextSibling && M.nextSibling._isFirst ? null : M.nextSibling, M.parentNode.removeChild(M), O.splice(_--, 1), U--) : z || (Y = !M.nextSibling && ou(M.parentNode, s, v), M.parentNode._parent && M.parentNode._parent.appendChild(M), Y && M.parentNode.appendChild(kr.createTextNode(" ")), b === "span" && (M.style.display = "inline"), m.push(M)) : M.parentNode._isSplit && !M._isSplit && M.innerHTML !== "" ? x.push(M) : A && !M._isSplit && (b === "span" && (M.style.display = "inline"), m.push(M))
            }
            for (_ = L.length; --_ > -1;) L[_].parentNode.removeChild(L[_]);
            if (D) {
                for (F && (W = kr.createElement(b), s.appendChild(W), X = W.offsetWidth + "px", Y = W.offsetParent === s ? 0 : s.offsetLeft, s.removeChild(W)), q = s.style.cssText, s.style.cssText = "display:none;"; s.firstChild;) s.removeChild(s.firstChild);
                for (G = v === " " && (!F || !T && !A), _ = 0; _ < D.length; _++) {
                    for (V = D[_], W = kr.createElement(b), W.style.cssText = "display:block;text-align:" + p + ";position:" + (F ? "absolute;" : "relative;"), P && (W.className = P + (k ? _ + 1 : "")), y.push(W), U = V.length, S = 0; S < U; S++) V[S].nodeName !== "BR" && (M = V[S], W.appendChild(M), G && M._wordEnd && W.appendChild(kr.createTextNode(" ")), F && (S === 0 && (W.style.top = M._y + "px", W.style.left = l + Y + "px"), M.style.top = "0px", Y && (M.style.left = M._x - Y + "px")));
                    U === 0 ? W.innerHTML = "&nbsp;" : !T && !A && (au(W), yo(W, String.fromCharCode(160), " ")), F && (W.style.width = X, W.style.height = M._h + "px"), s.appendChild(W)
                }
                s.style.cssText = q
            }
            F && (o > s.clientHeight && (s.style.height = o - f + "px", s.clientHeight < o && (s.style.height = o + h + "px")), n > s.clientWidth && (s.style.width = n - d + "px", s.clientWidth < n && (s.style.width = n + c + "px"))), _o(e, m), T && _o(r, x), _o(i, y)
        },
        $p = (s, t, e, r) => {
            let i = t.tag ? t.tag : t.span ? "span" : "div",
                n = t.type || t.split || "chars,words,lines",
                o = ~n.indexOf("chars"),
                a = Do(t),
                l = t.wordDelimiter || " ",
                u = l !== " " ? "" : a ? "&#173; " : " ",
                h = "</" + i + ">",
                c = 1,
                f = t.specialChars ? typeof t.specialChars == "function" ? t.specialChars : Gp : null,
                d, g, p, m, x, y, v, b, w = kr.createElement("div"),
                D = s.parentNode;
            for (D.insertBefore(w, s), w.textContent = s.nodeValue, D.removeChild(s), s = w, d = go(s), v = d.indexOf("<") !== -1, t.reduceWhiteSpace !== !1 && (d = d.replace(jp, " ").replace(Up, "")), v && (d = d.split("<").join("{{LT}}")), x = d.length, g = (d.charAt(0) === " " ? u : "") + e(), p = 0; p < x; p++)
                if (y = d.charAt(p), f && (b = f(d.substr(p), t.specialChars))) y = d.substr(p, b || 1), g += o && y !== " " ? r() + y + "</" + i + ">" : y, p += b - 1;
                else if (y === l && d.charAt(p - 1) !== l && p) {
                for (g += c ? h : "", c = 0; d.charAt(p + 1) === l;) g += u, p++;
                p === x - 1 ? g += u : d.charAt(p + 1) !== ")" && (g += u + e(), c = 1)
            } else y === "{" && d.substr(p, 6) === "{{LT}}" ? (g += o ? r() + "{{LT}}</" + i + ">" : "{{LT}}", p += 5) : y.charCodeAt(0) >= 55296 && y.charCodeAt(0) <= 56319 || d.charCodeAt(p + 1) >= 65024 && d.charCodeAt(p + 1) <= 65039 ? (m = ((d.substr(p, 12).split(tu) || [])[1] || "").length || 2, g += o && y !== " " ? r() + d.substr(p, m) + "</" + i + ">" : d.substr(p, m), p += m - 1) : g += o && y !== " " ? r() + y + "</" + i + ">" : y;
            s.outerHTML = g + (c ? h : ""), v && yo(D, "{{LT}}", "<")
        },
        lu = (s, t, e, r) => {
            let i = xo(s.childNodes),
                n = i.length,
                o = Do(t),
                a, l;
            if (s.nodeType !== 3 || n > 1) {
                for (t.absolute = !1, a = 0; a < n; a++) l = i[a], (l.nodeType !== 3 || /\S+/.test(l.nodeValue)) && (o && l.nodeType !== 3 && su(l).display === "inline" && (l.style.display = "inline-block", l.style.position = "relative"), l._isSplit = !0, lu(l, t, e, r));
                t.absolute = o, s._isSplit = !0;
                return
            }
            $p(s, t, e, r)
        },
        Ne = class {
            constructor(t, e) {
                ru || qp(), this.elements = xo(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, Wp && this.split(e)
            }
            split(t) {
                this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                let e = this.elements.length,
                    r = t.tag ? t.tag : t.span ? "span" : "div",
                    i = nu(t.wordsClass, r),
                    n = nu(t.charsClass, r),
                    o, a, l;
                for (; --e > -1;) l = this.elements[e], this._originals[e] = l.innerHTML, o = l.clientHeight, a = l.clientWidth, lu(l, t, i, n), Hp(l, t, this.chars, this.words, this.lines, a, o);
                return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
            }
            revert() {
                let t = this._originals;
                if (!t) throw "revert() call wasn't scoped properly.";
                return this.elements.forEach((e, r) => e.innerHTML = t[r]), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
            }
            static create(t, e) {
                return new Ne(t, e)
            }
        };
    Ne.version = "3.4.2";
    var js = class {
        constructor(t = {}) {
            this.els = t.els || I("[data-split]"), this.splits = [], this.splitContent()
        }
        splitContent() {
            this.els.length !== 0 && this.els.forEach(t => {
                let r = t.dataset.split.split(","),
                    i = {};
                i.el = t, r.forEach((n, o) => {
                    switch (n.trim()) {
                        case "lines":
                            i[o] = new Ne(t, {
                                type: "lines",
                                linesClass: `line-${o}`
                            });
                            break;
                        case "words":
                            i[o] = new Ne(t, {
                                type: "words",
                                wordsClass: `word-${o}`
                            });
                            break;
                        case "chars":
                            i[o] = new Ne(t, {
                                type: "chars",
                                charsClass: `char-${o}`
                            });
                            break
                    }
                }), this.splits.push(i)
            })
        }
        reverseContent(t) {
            let e = [],
                r;
            this.splits.forEach(i => {
                if (i.el === t)
                    for (let [n, o] of Object.entries(i)) n !== "el" && e.push(o)
            }), r = e.reverse(), r.forEach(i => {
                i.revert()
            })
        }
        init() {}
    };
    var qs = class {
        constructor(t = {}) {
            let e = t.desktopMenu,
                r = t.mobileMenu,
                i = t.footer,
                n = t.url,
                o = N(".overlay"),
                a = N(".background"),
                l = N(".menu-list", e),
                u = C.BG ? C.BG.ogl : null,
                h = u ? u.data.program.uniforms : null;
            this.dom = {
                overlay: o,
                container: l,
                background: a,
                open: t.open,
                close: t.close,
                desktop: {
                    el: e,
                    links: e ? I("a", e) : null
                },
                mobile: {
                    el: r,
                    links: r ? I("a", r) : null
                },
                footer: {
                    links: i ? I("a", i) : null
                },
                url: n
            }, this.state = {
                open: !1,
                active: !1,
                hover: !1,
                position: null,
                uniforms: h
            }, this.init()
        }
        on() {
            let {
                sniff: t
            } = C, {
                open: e,
                close: r,
                desktop: i,
                container: n,
                footer: o
            } = this.dom;
            e && e.addEventListener("click", this.openMenu), r && r.addEventListener("click", this.closeMenu), t.browser.isDevice || (i.links.forEach(a => {
                a.addEventListener("mouseenter", this.showLink), a.addEventListener("mouseleave", this.hideLink), a.addEventListener("click", this.fixMenu)
            }), n.addEventListener("mouseenter", this.showBg), n.addEventListener("mouseleave", this.hideBg))
        }
        off() {
            let {
                open: t,
                close: e
            } = this.dom;
            t && t.removeEventListener("click", this.openMenu), e && e.removeEventListener("click", this.closeMenu)
        }
        updateMenu(t) {
            if (!t) return;
            let {
                desktop: e,
                mobile: r,
                footer: i
            } = this.dom, n = t;
            e.links.forEach(o => {
                o.parentNode.classList.remove("-active"), o.href === n && o.parentNode.classList.add("-active")
            }), r.links.forEach(o => {
                o.parentNode.classList.remove("-active"), o.href === n && o.parentNode.classList.add("-active")
            }), i.links && i.links.forEach(o => {
                o.parentNode.classList.remove("-active"), o.href === n && o.parentNode.classList.add("-active")
            })
        }
        update(t) {
            let e = N("footer", C.page.el),
                r = e ? I("a", e) : null;
            Object.assign(this.dom, {
                footer: {
                    links: r
                },
                url: t
            }), this.updateMenu(t)
        }
        openMenu = () => {
            let {
                mobile: t,
                background: e
            } = this.dom, r = t.el;
            this.state.open = !0, E.set(r, {
                autoAlpha: 1
            }), E.to(e, {
                autoAlpha: 1
            }), E.from(".menu-item", {
                duration: 1.2,
                autoAlpha: 0,
                stagger: .07,
                y: 40,
                delay: .3,
                ease: "expo.out"
            }), E.set(C.body, {
                overflow: "hidden",
                height: "100vh"
            })
        };
        closeMenu = () => {
            let {
                mobile: t,
                background: e
            } = this.dom, r = t.el;
            !this.state.open || E.fromTo(r, {
                autoAlpha: 1
            }, {
                duration: .5,
                autoAlpha: 0,
                ease: "power3.inOut",
                onComplete: () => {
                    E.set(r, {
                        autoAlpha: 0
                    }), E.to(e, {
                        autoAlpha: 0
                    }), E.set(C.body, {
                        clearProps: "all"
                    }), this.state.open = !1
                }
            })
        };
        showLink = t => {
            if (this.state.active) return;
            let {
                desktop: e,
                background: r
            } = this.dom, n = t.target.dataset.link, o = N(`[data-item="${n}"]`);
            !o || n == this.state.hover || (this.state.hover = !1, e.el.classList.add("-rollover"), o.classList.add("-hover"), E.set(o, {
                autoAlpha: 1
            }), E.set(r, {
                autoAlpha: .9
            }))
        };
        hideLink = t => {
            if (this.state.active) return;
            let {
                desktop: e,
                background: r
            } = this.dom, n = t.target.dataset.link, o = N(`[data-item="${n}"]`);
            !o || (e.el.classList.remove("-rollover"), o.classList.remove("-hover"), E.set(o, {
                autoAlpha: 0
            }), E.set(r, {
                autoAlpha: 0
            }))
        };
        fixMenu = t => {
            let e = t.target,
                r = e.dataset.link,
                i = N(`[data-item="${r}"]`);
            if (!i) return;
            let n = this.closeBG(i, t);
            this.state.active = !0, this.state.hover = e.dataset.link, n.restart()
        };
        closeBG(t, e) {
            let {
                background: r,
                overlay: i
            } = this.dom, {
                uniforms: n
            } = this.state, o = I(".char-0", t), a = E.timeline({
                paused: !0,
                onComplete: () => {
                    this.state.active = !1, this.hideLink(e), E.set(r, {
                        clearProps: "transform",
                        autoAlpha: 0
                    }), E.set(i, {
                        clearProps: "all"
                    }), E.set(".links", {
                        clearProps: "all"
                    }), E.set(o, {
                        clearProps: "opacity"
                    }), E.set(o, {
                        clearProps: "visibility"
                    })
                }
            });
            return a.fromTo(r, {
                y: 0
            }, {
                duration: 1,
                y: "100%",
                ease: "power4.inOut"
            }, 0), a.fromTo(i, {
                y: 0
            }, {
                duration: 1,
                y: "-100%",
                ease: "power4.inOut"
            }, "-=1"), a.fromTo(".links", {
                y: 0
            }, {
                duration: 1,
                y: "100%",
                ease: "power4.inOut"
            }, "-=1"), a.to(o, {
                duration: .6,
                autoAlpha: 0,
                stagger: .1
            }, 0), n && a.to(this.bend(n), {
                progress: 1
            }, 0), a
        }
        playTransition() {
            if (this.state.active || this.state.open) return;
            let {
                overlay: t,
                background: e
            } = this.dom, r = E.timeline({
                onComplete: () => {
                    E.set(e, {
                        clearProps: "transform",
                        autoAlpha: 0
                    }), E.set(t, {
                        clearProps: "all"
                    })
                }
            });
            r.set(e, {
                autoAlpha: 1
            }), r.fromTo(t, {
                y: "100%"
            }, {
                duration: 1,
                y: 0,
                ease: "power4.inOut"
            }), r.fromTo(e, {
                y: "-100%"
            }, {
                duration: 1,
                y: 0,
                ease: "power4.inOut"
            }, "-=1"), r.fromTo(t, {
                y: 0
            }, {
                duration: 1,
                y: "-100%",
                ease: "power4.out"
            }), r.fromTo(e, {
                y: 0
            }, {
                duration: 1,
                y: "100%",
                ease: "power4.out"
            }, "-=1")
        }
        bend = t => {
            let e = t.uPower;
            return E.timeline({
                paused: !0,
                defaults: {
                    ease: "linear",
                    duration: .5
                }
            }).to(e, {
                value: 2
            }).to(e, {
                value: 0
            })
        };
        destroy() {
            this.off()
        }
        init() {
            this.updateMenu(this.dom.url), this.on()
        }
    };
    var pu = or(fu());
    var Ws = class {
        constructor() {
            this.sections = I(".-one"), this.state = {
                next: 0,
                prev: 0,
                current: 0,
                animating: !1,
                touchStart: 0,
                touchEnd: 0,
                locked: !1,
                scroll: 0
            }, this.state.total = this.sections.length - 1, E.set(".oneSection-bg", {
                scale: 0,
                rotate: -45
            }), E.set(C.body, {
                overflow: "hidden"
            }), this.init()
        }
        getMousePosition(t) {
            var e;
            return t.targetTouches ? t.targetTouches[0] ? e = [t.targetTouches[0].clientX, t.targetTouches[0].clientY] : t.changedTouches[0] ? e = [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : e = [t.clientX, t.clientY] : e = [t.clientX, t.clientY], e
        }
        updateState() {
            this.state.prev = 0, this.state.next = 0
        }
        mouseDown = t => {
            this.state.touchStart = this.getMousePosition(t)[1], this.state.current = this.state.touchStart
        };
        mouseMove = t => {
            this.state.current = this.getMousePosition(t)[1]
        };
        mouseUp = () => {
            if (this.state.touchStart == this.state.current) return;
            let t = this.state.touchStart,
                e = this.state.current,
                r = t - e;
            this.state.touchEnd = e, this.touchDir = t - e > 0 ? "down" : "up", !(r < 0 && r > -60 || r > 0 && r < 60) && (this.onScroll(), this.moveUp())
        };
        onScroll(t) {
            if (this.state.animating || this.state.locked) return;
            let {
                next: e,
                total: r
            } = this.state, i = t ? t.direction : this.touchDir;
            this.state.next = i == "up" ? e <= 0 ? 0 : e - 1 : e < r ? e + 1 : r, this.state.prev !== this.state.next && (this.state.animating = !0, B.emit("flip", {
                index: this.state.next,
                prev: this.state.prev,
                direction: i,
                current: this.sections[this.state.next],
                previous: this.sections[this.state.prev]
            }), this.state.prev = this.state.next, setTimeout(() => {
                this.state.animating = !1
            }, 800))
        }
        scrollUp = t => {
            !this.state.locked || this.state.animating || (this.state.scroll = t.y)
        };
        moveUp() {
            if (!C.sniff.isDevice || !this.state.locked || this.state.animating) return;
            let {
                scroll: t
            } = this.state;
            t === 0 && this.touchDir == "up" && (this.state.locked = !1, setTimeout(() => {
                this.wheel.turnOn()
            }, 800), B.emit("flip", {
                index: this.state.next,
                prev: this.state.prev + 1,
                direction: this.touchDir
            }))
        }
        on() {
            this.wheel = new pu.default({
                elem: C.page.el,
                callback: t => this.onScroll(t)
            }), window.addEventListener("touchmove", this.mouseMove, {
                passive: !0
            }), window.addEventListener("touchstart", this.mouseDown, {
                passive: !0
            }), window.addEventListener("touchend", this.mouseUp, {
                passive: !0
            }), B.on("scroll", this.scrollUp)
        }
        off() {
            this.wheel.destroy(), window.removeEventListener("touchmove", this.mouseMove, {
                passive: !0
            }), window.removeEventListener("touchstart", this.mouseDown, {
                passive: !0
            }), window.removeEventListener("touchend", this.mouseUp, {
                passive: !0
            }), B.off("scroll", this.scrollUp)
        }
        destroy() {
            this.off(), E.set(C.body, {
                clearProps: "all"
            })
        }
        init() {
            this.on()
        }
    };
    var tt, Ys, wt, Ut, er, Et, du, vo, wo, Gs, Ae, Ci, Ti, Eo, re, Fi, bo, Xt, mu, gu, ns, xu, Co, Du, To, Xs = 1,
        Or = [],
        Rr = [],
        Br = Date.now,
        Fo = Br(),
        Ve = 0,
        yu = 1,
        Ai = s => s,
        _u = s => Math.round(s * 1e5) / 1e5 || 0,
        vu = () => typeof window != "undefined",
        wu = () => tt || vu() && (tt = window.gsap) && tt.registerPlugin && tt,
        os = s => !!~du.indexOf(s),
        Ir = (s, t) => ~Or.indexOf(s) && Or[Or.indexOf(s) + 1][t],
        Mi = (s, {
            s: t,
            sc: e
        }) => {
            let r = Rr.indexOf(s),
                i = e === Ht.sc ? 1 : 2;
            return !~r && (r = Rr.push(s) - 1), Rr[r + i] || (Rr[r + i] = Ir(s, t) || (os(s) ? e : function (n) {
                return arguments.length ? s[t] = n : s[t]
            }))
        },
        Eu = s => Ir(s, "getBoundingClientRect") || (os(s) ? () => (Yi.width = wt.innerWidth, Yi.height = wt.innerHeight, Yi) : () => Ur(s)),
        Kp = (s, t, {
            d: e,
            d2: r,
            a: i
        }) => (i = Ir(s, "getBoundingClientRect")) ? () => i()[e] : () => (t ? wt["inner" + r] : s["client" + r]) || 0,
        Zp = (s, t) => !t || ~Or.indexOf(s) ? Eu(s) : () => Yi,
        Ao = (s, {
            s: t,
            d2: e,
            d: r,
            a: i
        }) => (t = "scroll" + e) && (i = Ir(s, t)) ? i() - Eu(s)()[r] : os(s) ? Math.max(er[t], Et[t]) - (wt["inner" + e] || er["client" + e] || Et["client" + e]) : s[t] - s["offset" + e],
        Mo = (s, t) => {
            for (let e = 0; e < ns.length; e += 3)(!t || ~t.indexOf(ns[e + 1])) && s(ns[e], ns[e + 1], ns[e + 2])
        },
        Nr = s => typeof s == "string",
        Dr = s => typeof s == "function",
        So = s => typeof s == "number",
        Po = s => typeof s == "object",
        Si = s => Dr(s) && s(),
        bu = (s, t) => () => {
            let e = Si(s),
                r = Si(t);
            return () => {
                Si(e), Si(r)
            }
        },
        Pi = Math.abs,
        zi = "scrollLeft",
        Li = "scrollTop",
        zo = "left",
        Lo = "top",
        ki = "right",
        Oi = "bottom",
        as = "width",
        ls = "height",
        us = "Right",
        hs = "Left",
        cs = "Top",
        fs = "Bottom",
        Ct = "padding",
        ve = "margin",
        Vr = "Width",
        Ri = "Height",
        se = "px",
        Me = {
            s: zi,
            p: zo,
            p2: hs,
            os: ki,
            os2: us,
            d: as,
            d2: Vr,
            a: "x",
            sc: function (s) {
                return arguments.length ? wt.scrollTo(s, Ht.sc()) : wt.pageXOffset || Ut[zi] || er[zi] || Et[zi] || 0
            }
        },
        Ht = {
            s: Li,
            p: Lo,
            p2: cs,
            os: Oi,
            os2: fs,
            d: ls,
            d2: Ri,
            a: "y",
            op: Me,
            sc: function (s) {
                return arguments.length ? wt.scrollTo(Me.sc(), s) : wt.pageYOffset || Ut[Li] || er[Li] || Et[Li] || 0
            }
        },
        rr = s => wt.getComputedStyle(s),
        Jp = s => {
            let t = rr(s).position;
            s.style.position = t === "absolute" || t === "fixed" ? t : "relative"
        },
        Cu = (s, t) => {
            for (let e in t) e in s || (s[e] = t[e]);
            return s
        },
        Ur = (s, t) => {
            let e = t && rr(s)[bo] !== "matrix(1, 0, 0, 1, 0, 0)" && tt.to(s, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                r = s.getBoundingClientRect();
            return e && e.progress(0).kill(), r
        },
        ko = (s, {
            d2: t
        }) => s["offset" + t] || s["client" + t] || 0,
        Tu = s => {
            let t = [],
                e = s.labels,
                r = s.duration(),
                i;
            for (i in e) t.push(e[i] / r);
            return t
        },
        td = s => t => tt.utils.snap(Tu(s), t),
        ed = s => (t, e) => {
            let r = Tu(s),
                i;
            if (r.sort((n, o) => n - o), e.direction > 0) {
                for (t -= 1e-4, i = 0; i < r.length; i++)
                    if (r[i] >= t) return r[i];
                return r.pop()
            } else
                for (i = r.length, t += 1e-4; i--;)
                    if (r[i] <= t) return r[i];
            return r[0]
        },
        Fu = (s, t, e, r) => e.split(",").forEach(i => s(t, i, r)),
        ie = (s, t, e) => s.addEventListener(t, e, {
            passive: !0
        }),
        Hs = (s, t, e) => s.removeEventListener(t, e),
        Au = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        Oo = {
            toggleActions: "play",
            anticipatePin: 0
        },
        Mu = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        Bi = (s, t) => {
            if (Nr(s)) {
                let e = s.indexOf("="),
                    r = ~e ? +(s.charAt(e - 1) + 1) * parseFloat(s.substr(e + 1)) : 0;
                ~e && (s.indexOf("%") > e && (r *= t / 100), s = s.substr(0, e - 1)), s = r + (s in Mu ? Mu[s] * t : ~s.indexOf("%") ? parseFloat(s) * t / 100 : parseFloat(s) || 0)
            }
            return s
        },
        Ii = (s, t, e, r, {
            startColor: i,
            endColor: n,
            fontSize: o,
            indent: a,
            fontWeight: l
        }, u, h) => {
            let c = Ut.createElement("div"),
                f = os(e) || Ir(e, "pinType") === "fixed",
                d = s.indexOf("scroller") !== -1,
                g = f ? Et : e,
                p = s.indexOf("start") !== -1,
                m = p ? i : n,
                x = "border-color:" + m + ";font-size:" + o + ";color:" + m + ";font-weight:" + l + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return x += "position:" + (d && f ? "fixed;" : "absolute;"), (d || !f) && (x += (r === Ht ? ki : Oi) + ":" + (u + parseFloat(a)) + "px;"), h && (x += "box-sizing:border-box;text-align:left;width:" + h.offsetWidth + "px;"), c._isStart = p, c.setAttribute("class", "gsap-marker-" + s), c.style.cssText = x, c.innerText = t || t === 0 ? s + "-" + t : s, g.children[0] ? g.insertBefore(c, g.children[0]) : g.appendChild(c), c._offset = c["offset" + r.op.d2], Ni(c, 0, r, p), c
        },
        Ni = (s, t, e, r) => {
            let i = {
                    display: "block"
                },
                n = e[r ? "os2" : "p2"],
                o = e[r ? "p2" : "os2"];
            s._isFlipped = r, i[e.a + "Percent"] = r ? -100 : 0, i[e.a] = r ? "1px" : 0, i["border" + n + Vr] = 1, i["border" + o + Vr] = 0, i[e.p] = t + "px", tt.set(s, i)
        },
        _t = [],
        Ro = {},
        Su = () => Gs || (Gs = wo(Io)),
        Vi = () => {
            Gs || (Gs = wo(Io), Ve || ds("scrollStart"), Ve = Br())
        },
        $s = () => !re && !Du && !Ut.fullscreenElement && vo.restart(!0),
        Qs = {},
        rd = [],
        vt = [],
        ps, Pu, zu = s => {
            let t = tt.ticker.frame,
                e = [],
                r = 0,
                i;
            if (Pu !== t || Xs) {
                for (Ui(); r < vt.length; r += 4) i = wt.matchMedia(vt[r]).matches, i !== vt[r + 3] && (vt[r + 3] = i, i ? e.push(r) : Ui(1, vt[r]) || Dr(vt[r + 2]) && vt[r + 2]());
                for (Lu(), r = 0; r < e.length; r++) i = e[r], ps = vt[i], vt[i + 2] = vt[i + 1](s);
                ps = 0, Ys && ms(0, 1), Pu = t, ds("matchMedia")
            }
        },
        Bo = () => Hs(Q, "scrollEnd", Bo) || ms(!0),
        ds = s => Qs[s] && Qs[s].map(t => t()) || rd,
        we = [],
        Lu = s => {
            for (let t = 0; t < we.length; t += 5)(!s || we[t + 4] === s) && (we[t].style.cssText = we[t + 1], we[t].getBBox && we[t].setAttribute("transform", we[t + 2] || ""), we[t + 3].uncache = 1)
        },
        Ui = (s, t) => {
            let e;
            for (Xt = 0; Xt < _t.length; Xt++) e = _t[Xt], (!t || e.media === t) && (s ? e.kill(1) : e.revert());
            t && Lu(t), t || ds("revert")
        },
        ms = (s, t) => {
            if (Ve && !s) {
                ie(Q, "scrollEnd", Bo);
                return
            }
            let e = ds("refreshInit");
            xu && Q.sort(), t || Ui(), _t.forEach(r => r.refresh()), e.forEach(r => r && r.render && r.render(-1)), Rr.forEach(r => typeof r == "function" && (r.rec = 0)), vo.pause(), ds("refresh")
        },
        ku = 0,
        ji = 1,
        Io = () => {
            let s = _t.length,
                t = Br(),
                e = t - Fo >= 50,
                r = s && _t[0].scroll();
            if (ji = ku > r ? -1 : 1, ku = r, e && (Ve && !Fi && t - Ve > 200 && (Ve = 0, ds("scrollEnd")), Ti = Fo, Fo = t), ji < 0) {
                for (Xt = s; Xt-- > 0;) _t[Xt] && _t[Xt].update(0, e);
                ji = 1
            } else
                for (Xt = 0; Xt < s; Xt++) _t[Xt] && _t[Xt].update(0, e);
            Gs = 0
        },
        No = [zo, Lo, Oi, ki, ve + fs, ve + us, ve + cs, ve + hs, "display", "flexShrink", "float", "zIndex", "grid-column-start", "grid-column-end", "grid-row-start", "grid-row-end", "grid-area", "justify-self", "align-self", "place-self"],
        qi = No.concat([as, ls, "boxSizing", "max" + Vr, "max" + Ri, "position", ve, Ct, Ct + cs, Ct + us, Ct + fs, Ct + hs]),
        sd = (s, t, e) => {
            if (Wi(e), s.parentNode === t) {
                let r = t.parentNode;
                r && (r.insertBefore(s, t), r.removeChild(t))
            }
        },
        Vo = (s, t, e, r) => {
            if (s.parentNode !== t) {
                let i = No.length,
                    n = t.style,
                    o = s.style,
                    a;
                for (; i--;) a = No[i], n[a] = e[a];
                n.position = e.position === "absolute" ? "absolute" : "relative", e.display === "inline" && (n.display = "inline-block"), o[Oi] = o[ki] = "auto", n.overflow = "visible", n.boxSizing = "border-box", n[as] = ko(s, Me) + se, n[ls] = ko(s, Ht) + se, n[Ct] = o[ve] = o[Lo] = o[zo] = "0", Wi(r), o[as] = o["max" + Vr] = e[as], o[ls] = o["max" + Ri] = e[ls], o[Ct] = e[Ct], s.parentNode.insertBefore(t, s), t.appendChild(s)
            }
        },
        id = /([A-Z])/g,
        Wi = s => {
            if (s) {
                let t = s.t.style,
                    e = s.length,
                    r = 0,
                    i, n;
                for ((s.t._gsap || tt.core.getCache(s.t)).uncache = 1; r < e; r += 2) n = s[r + 1], i = s[r], n ? t[i] = n : t[i] && t.removeProperty(i.replace(id, "-$1").toLowerCase())
            }
        },
        Uo = s => {
            let t = qi.length,
                e = s.style,
                r = [],
                i = 0;
            for (; i < t; i++) r.push(qi[i], e[qi[i]]);
            return r.t = s, r
        },
        nd = (s, t, e) => {
            let r = [],
                i = s.length,
                n = e ? 8 : 0,
                o;
            for (; n < i; n += 2) o = s[n], r.push(o, o in t ? t[o] : s[n + 1]);
            return r.t = s.t, r
        },
        Yi = {
            left: 0,
            top: 0
        },
        Ou = (s, t, e, r, i, n, o, a, l, u, h, c) => {
            if (Dr(s) && (s = s(a)), Nr(s) && s.substr(0, 3) === "max" && (s = c + (s.charAt(4) === "=" ? Bi("0" + s.substr(3), e) : 0)), So(s)) o && Ni(o, e, r, !0);
            else {
                Dr(t) && (t = t(a));
                let f = Ae(t)[0] || Et,
                    d = Ur(f) || {},
                    g = s.split(" "),
                    p, m, x;
                (!d || !d.left && !d.top) && rr(f).display === "none" && (x = f.style.display, f.style.display = "block", d = Ur(f), x ? f.style.display = x : f.style.removeProperty("display")), p = Bi(g[0], d[r.d]), m = Bi(g[1] || "0", e), s = d[r.p] - l[r.p] - u + p + i - m, o && Ni(o, m, r, e - m < 20 || o._isStart && m > 20), e -= e - m
            }
            if (n) {
                let f = s + e,
                    d = n._isStart;
                c = "scroll" + r.d2, Ni(n, f, r, d && f > 20 || !d && (h ? Math.max(Et[c], er[c]) : n.parentNode[c]) <= f + 1), h && (l = Ur(o), h && (n.style[r.op.p] = l[r.op.p] - r.op.m - n._offset + se))
            }
            return Math.round(s)
        },
        od = /(?:webkit|moz|length|cssText|inset)/i,
        Ru = (s, t, e, r) => {
            if (s.parentNode !== t) {
                let i = s.style,
                    n, o;
                if (t === Et) {
                    s._stOrig = i.cssText, o = rr(s);
                    for (n in o) !+n && !od.test(n) && o[n] && typeof i[n] == "string" && n !== "0" && (i[n] = o[n]);
                    i.top = e, i.left = r
                } else i.cssText = s._stOrig;
                tt.core.getCache(s).uncache = 1, t.appendChild(s)
            }
        },
        Bu = (s, t) => {
            let e = Mi(s, t),
                r = "_scroll" + t.p2,
                i, n, o = (a, l, u, h, c) => {
                    let f = o.tween,
                        d = l.onComplete,
                        g = {};
                    return f && f.kill(), i = Math.round(u), l[r] = a, l.modifiers = g, g[r] = p => (p = _u(e()), p !== i && p !== n && Math.abs(p - i) > 2 ? (f.kill(), o.tween = 0) : p = u + h * f.ratio + c * f.ratio * f.ratio, n = i, i = _u(p)), l.onComplete = () => {
                        o.tween = 0, d && d.call(f)
                    }, f = o.tween = tt.to(s, l), f
                };
            return s[r] = e, s.addEventListener("wheel", () => o.tween && o.tween.kill() && (o.tween = 0)), o
        };
    Me.op = Ht;
    var Q = class {
        constructor(t, e) {
            Ys || Q.register(tt) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(t, e)
        }
        init(t, e) {
            if (this.progress = this.start = 0, this.vars && this.kill(1), !yu) {
                this.update = this.refresh = this.kill = Ai;
                return
            }
            t = Cu(Nr(t) || So(t) || t.nodeType ? {
                trigger: t
            } : t, Oo);
            let r = t.horizontal ? Me : Ht,
                {
                    onUpdate: i,
                    toggleClass: n,
                    id: o,
                    onToggle: a,
                    onRefresh: l,
                    scrub: u,
                    trigger: h,
                    pin: c,
                    pinSpacing: f,
                    invalidateOnRefresh: d,
                    anticipatePin: g,
                    onScrubComplete: p,
                    onSnapComplete: m,
                    once: x,
                    snap: y,
                    pinReparent: v
                } = t,
                b = !u && u !== 0,
                w = Ae(t.scroller || wt)[0],
                D = tt.core.getCache(w),
                T = os(w),
                A = "pinType" in t ? t.pinType === "fixed" : T || Ir(w, "pinType") === "fixed",
                F = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                P = b && t.toggleActions.split(" "),
                k = "markers" in t ? t.markers : Oo.markers,
                L = T ? 0 : parseFloat(rr(w)["border" + r.p2 + Vr]) || 0,
                _ = this,
                S = t.onRefreshInit && (() => t.onRefreshInit(_)),
                U = Kp(w, T, r),
                M = Zp(w, T),
                O = 0,
                z, V, G, q, W, X, Y, rt, gt, dt, Pt, Pe, At, Ue, je, be, R, nt, Dt, Kt, jr, ze, Ot, nr, li, qr, Ds, Wr, ys, Rt, Yr, Ce, Te, j, H, lt;
            _.media = ps, g *= 45, _.scroller = w, _.scroll = Mi(w, r), q = _.scroll(), _.vars = t, e = e || t.animation, "refreshPriority" in t && (xu = 1), D.tweenScroll = D.tweenScroll || {
                top: Bu(w, Ht),
                left: Bu(w, Me)
            }, _.tweenTo = z = D.tweenScroll[r.p], e && (e.vars.lazy = !1, e._initted || e.vars.immediateRender !== !1 && t.immediateRender !== !1 && e.render(0, !0, !0), _.animation = e.pause(), e.scrollTrigger = _, Yr = So(u) && u, Yr && (Rt = tt.to(e, {
                ease: "power3",
                duration: Yr,
                onComplete: () => p && p(_)
            })), Wr = 0, o || (o = e.vars.id)), _t.push(_), y && (Po(y) || (y = {
                snapTo: y
            }), "scrollBehavior" in Et.style && tt.set(T ? [Et, er] : w, {
                scrollBehavior: "auto"
            }), G = Dr(y.snapTo) ? y.snapTo : y.snapTo === "labels" ? td(e) : y.snapTo === "labelsDirectional" ? ed(e) : tt.utils.snap(y.snapTo), Ce = y.duration || {
                min: .1,
                max: 2
            }, Ce = Po(Ce) ? Ci(Ce.min, Ce.max) : Ci(Ce, Ce), Te = tt.delayedCall(y.delay || Yr / 2 || .1, () => {
                if (Math.abs(_.getVelocity()) < 10 && !Fi && O !== _.scroll()) {
                    let K = e && !b ? e.totalProgress() : _.progress,
                        J = (K - ys) / (Br() - Ti) * 1e3 || 0,
                        $ = tt.utils.clamp(-_.progress, 1 - _.progress, Pi(J / 2) * J / .185),
                        ht = _.progress + (y.inertia === !1 ? 0 : $),
                        Z = Ci(0, 1, G(ht, _)),
                        st = _.scroll(),
                        ut = Math.round(X + Z * At),
                        {
                            onStart: pt,
                            onInterrupt: mt,
                            onComplete: ot
                        } = y,
                        Le = z.tween;
                    if (st <= Y && st >= X && ut !== st) {
                        if (Le && !Le._initted && Le.data <= Math.abs(ut - st)) return;
                        y.inertia === !1 && ($ = Z - _.progress), z(ut, {
                            duration: Ce(Pi(Math.max(Pi(ht - K), Pi(Z - K)) * .185 / J / .05 || 0)),
                            ease: y.ease || "power3",
                            data: Math.abs(ut - st),
                            onInterrupt: () => Te.restart(!0) && mt && mt(_),
                            onComplete: () => {
                                O = _.scroll(), Wr = ys = e && !b ? e.totalProgress() : _.progress, m && m(_), ot && ot(_)
                            }
                        }, st, $ * At, ut - st - $ * At), pt && pt(_, z.tween)
                    }
                } else _.isActive && Te.restart(!0)
            }).pause()), o && (Ro[o] = _), h = _.trigger = Ae(h || c)[0], c = c === !0 ? h : Ae(c)[0], Nr(n) && (n = {
                targets: h,
                className: n
            }), c && (f === !1 || f === ve || (f = !f && rr(c.parentNode).display === "flex" ? !1 : Ct), _.pin = c, t.force3D !== !1 && tt.set(c, {
                force3D: !0
            }), V = tt.core.getCache(c), V.spacer ? Ue = V.pinState : (V.spacer = R = Ut.createElement("div"), R.setAttribute("class", "pin-spacer" + (o ? " pin-spacer-" + o : "")), V.pinState = Ue = Uo(c)), _.spacer = R = V.spacer, Ds = rr(c), Ot = Ds[f + r.os2], Dt = tt.getProperty(c), Kt = tt.quickSetter(c, r.a, se), Vo(c, R, Ds), be = Uo(c)), k && (Pe = Po(k) ? Cu(k, Au) : Au, dt = Ii("scroller-start", o, w, r, Pe, 0), Pt = Ii("scroller-end", o, w, r, Pe, 0, dt), nt = dt["offset" + r.op.d2], rt = Ii("start", o, w, r, Pe, nt), gt = Ii("end", o, w, r, Pe, nt), !A && !(Or.length && Ir(w, "fixedMarkers") === !0) && (Jp(T ? Et : w), tt.set([dt, Pt], {
                force3D: !0
            }), li = tt.quickSetter(dt, r.a, se), qr = tt.quickSetter(Pt, r.a, se))), _.revert = K => {
                let J = K !== !1 || !_.enabled,
                    $ = re;
                J !== _.isReverted && (J && (_.scroll.rec || (_.scroll.rec = _.scroll()), H = Math.max(_.scroll(), _.scroll.rec || 0), j = _.progress, lt = e && e.progress()), rt && [rt, gt, dt, Pt].forEach(ht => ht.style.display = J ? "none" : "block"), J && (re = 1), _.update(J), re = $, c && (J ? sd(c, R, Ue) : (!v || !_.isActive) && Vo(c, R, rr(c), nr)), _.isReverted = J)
            }, _.refresh = (K, J) => {
                if ((re || !_.enabled) && !J) return;
                if (c && K && Ve) {
                    ie(Q, "scrollEnd", Bo);
                    return
                }
                re = 1, Rt && Rt.pause(), d && e && e.progress(0).invalidate(), _.isReverted || _.revert();
                let $ = U(),
                    ht = M(),
                    Z = Ao(w, r),
                    st = 0,
                    ut = 0,
                    pt = t.end,
                    mt = t.endTrigger || h,
                    ot = t.start || (t.start === 0 || !h ? 0 : c ? "0 0" : "0 100%"),
                    Le = t.pinnedContainer && Ae(t.pinnedContainer)[0],
                    ke = h && Math.max(0, _t.indexOf(_)) || 0,
                    oe = ke,
                    zt, ae, pn, ui, Bt, le, qe, dn, Ma, _s;
                for (; oe--;) le = _t[oe], le.end || le.refresh(0, 1) || (re = 1), qe = le.pin, qe && (qe === h || qe === c) && !le.isReverted && (_s || (_s = []), _s.unshift(le), le.revert());
                for (X = Ou(ot, h, $, r, _.scroll(), rt, dt, _, ht, L, A, Z) || (c ? -.001 : 0), Dr(pt) && (pt = pt(_)), Nr(pt) && !pt.indexOf("+=") && (~pt.indexOf(" ") ? pt = (Nr(ot) ? ot.split(" ")[0] : "") + pt : (st = Bi(pt.substr(2), $), pt = Nr(ot) ? ot : X + st, mt = h)), Y = Math.max(X, Ou(pt || (mt ? "100% 0" : Z), mt, $, r, _.scroll() + st, gt, Pt, _, ht, L, A, Z)) || -.001, At = Y - X || (X -= .01) && .001, st = 0, oe = ke; oe--;) le = _t[oe], qe = le.pin, qe && le.start - le._pinPush < X && (zt = le.end - le.start, (qe === h || qe === Le) && (st += zt), qe === c && (ut += zt));
                if (X += st, Y += st, _._pinPush = ut, rt && st && (zt = {}, zt[r.a] = "+=" + st, Le && (zt[r.p] = "-=" + _.scroll()), tt.set([rt, gt], zt)), c) zt = rr(c), ui = r === Ht, pn = _.scroll(), jr = parseFloat(Dt(r.a)) + ut, !Z && Y > 1 && ((T ? Et : w).style["overflow-" + r.a] = "scroll"), Vo(c, R, zt), be = Uo(c), ae = Ur(c, !0), dn = A && Mi(w, ui ? Me : Ht)(), f && (nr = [f + r.os2, At + ut + se], nr.t = R, oe = f === Ct ? ko(c, r) + At + ut : 0, oe && nr.push(r.d, oe + se), Wi(nr), A && _.scroll(H)), A && (Bt = {
                    top: ae.top + (ui ? pn - X : dn) + se,
                    left: ae.left + (ui ? dn : pn - X) + se,
                    boxSizing: "border-box",
                    position: "fixed"
                }, Bt[as] = Bt["max" + Vr] = Math.ceil(ae.width) + se, Bt[ls] = Bt["max" + Ri] = Math.ceil(ae.height) + se, Bt[ve] = Bt[ve + cs] = Bt[ve + us] = Bt[ve + fs] = Bt[ve + hs] = "0", Bt[Ct] = zt[Ct], Bt[Ct + cs] = zt[Ct + cs], Bt[Ct + us] = zt[Ct + us], Bt[Ct + fs] = zt[Ct + fs], Bt[Ct + hs] = zt[Ct + hs], je = nd(Ue, Bt, v)), e ? (Ma = e._initted, Co(1), e.render(e.duration(), !0, !0), ze = Dt(r.a) - jr + At + ut, At !== ze && je.splice(je.length - 2, 2), e.render(0, !0, !0), Ma || e.invalidate(), Co(0)) : ze = At;
                else if (h && _.scroll())
                    for (ae = h.parentNode; ae && ae !== Et;) ae._pinOffset && (X -= ae._pinOffset, Y -= ae._pinOffset), ae = ae.parentNode;
                _s && _s.forEach(Cc => Cc.revert(!1)), _.start = X, _.end = Y, q = W = _.scroll(), q < H && _.scroll(H), _.revert(!1), re = 0, e && b && e._initted && e.progress() !== lt && e.progress(lt, !0).render(e.time(), !0, !0), j !== _.progress && (Rt && e.totalProgress(j, !0), _.progress = j, _.update()), c && f && (R._pinOffset = Math.round(_.progress * ze)), l && l(_)
            }, _.getVelocity = () => (_.scroll() - W) / (Br() - Ti) * 1e3 || 0, _.update = (K, J) => {
                let $ = _.scroll(),
                    ht = K ? 0 : ($ - X) / At,
                    Z = ht < 0 ? 0 : ht > 1 ? 1 : ht || 0,
                    st = _.progress,
                    ut, pt, mt, ot, Le, ke;
                if (J && (W = q, q = $, y && (ys = Wr, Wr = e && !b ? e.totalProgress() : Z)), g && !Z && c && !re && !Xs && Ve && X < $ + ($ - W) / (Br() - Ti) * g && (Z = 1e-4), Z !== st && _.enabled) {
                    if (ut = _.isActive = !!Z && Z < 1, pt = !!st && st < 1, ke = ut !== pt, Le = ke || !!Z != !!st, _.direction = Z > st ? 1 : -1, _.progress = Z, b || (Rt && !re && !Xs ? (Rt.vars.totalProgress = Z, Rt.invalidate().restart()) : e && e.totalProgress(Z, !!re)), c) {
                        if (K && f && (R.style[f + r.os2] = Ot), !A) Kt(jr + ze * Z);
                        else if (Le) {
                            if (ot = !K && Z > st && Y + 1 > $ && $ + 1 >= Ao(w, r), v)
                                if (!K && (ut || ot)) {
                                    let oe = Ur(c, !0),
                                        zt = $ - X;
                                    Ru(c, Et, oe.top + (r === Ht ? zt : 0) + se, oe.left + (r === Ht ? 0 : zt) + se)
                                } else Ru(c, R);
                            Wi(ut || ot ? je : be), ze !== At && Z < 1 && ut || Kt(jr + (Z === 1 && !ot ? ze : 0))
                        }
                    }
                    y && !z.tween && !re && !Xs && Te.restart(!0), n && (ke || x && Z && (Z < 1 || !To)) && Ae(n.targets).forEach(oe => oe.classList[ut || x ? "add" : "remove"](n.className)), i && !b && !K && i(_), Le && !re ? (mt = Z && !st ? 0 : Z === 1 ? 1 : st === 1 ? 2 : 3, b && (ot = !ke && P[mt + 1] !== "none" && P[mt + 1] || P[mt], e && (ot === "complete" || ot === "reset" || ot in e) && (ot === "complete" ? e.pause().totalProgress(1) : ot === "reset" ? e.restart(!0).pause() : ot === "restart" ? e.restart(!0) : e[ot]()), i && i(_)), (ke || !To) && (a && ke && a(_), F[mt] && F[mt](_), x && (Z === 1 ? _.kill(!1, 1) : F[mt] = 0), ke || (mt = Z === 1 ? 1 : 3, F[mt] && F[mt](_)))) : b && i && !re && i(_)
                }
                qr && (li($ + (dt._isFlipped ? 1 : 0)), qr($))
            }, _.enable = (K, J) => {
                _.enabled || (_.enabled = !0, ie(w, "resize", $s), ie(w, "scroll", Vi), S && ie(Q, "refreshInit", S), K !== !1 && (_.progress = j = 0, q = W = O = _.scroll()), J !== !1 && _.refresh())
            }, _.getTween = K => K && z ? z.tween : Rt, _.disable = (K, J) => {
                if (_.enabled && (K !== !1 && _.revert(), _.enabled = _.isActive = !1, J || Rt && Rt.pause(), H = 0, V && (V.uncache = 1), S && Hs(Q, "refreshInit", S), Te && (Te.pause(), z.tween && z.tween.kill() && (z.tween = 0)), !T)) {
                    let $ = _t.length;
                    for (; $--;)
                        if (_t[$].scroller === w && _t[$] !== _) return;
                    Hs(w, "resize", $s), Hs(w, "scroll", Vi)
                }
            }, _.kill = (K, J) => {
                _.disable(K, J), o && delete Ro[o];
                let $ = _t.indexOf(_);
                _t.splice($, 1), $ === Xt && ji > 0 && Xt--, e && (e.scrollTrigger = null, K && e.render(-1), J || e.kill()), rt && [rt, gt, dt, Pt].forEach(ht => ht.parentNode && ht.parentNode.removeChild(ht)), c && (V && (V.uncache = 1), $ = 0, _t.forEach(ht => ht.pin === c && $++), $ || (V.spacer = 0))
            }, _.enable(!1, !1), !e || !e.add || At ? _.refresh() : tt.delayedCall(.01, () => X || Y || _.refresh()) && (At = .01) && (X = Y = 0)
        }
        static register(t) {
            if (!Ys && (tt = t || wu(), vu() && window.document && (wt = window, Ut = document, er = Ut.documentElement, Et = Ut.body), tt && (Ae = tt.utils.toArray, Ci = tt.utils.clamp, Co = tt.core.suppressOverwrites || Ai, tt.core.globals("ScrollTrigger", Q), Et))) {
                wo = wt.requestAnimationFrame || (n => setTimeout(n, 16)), ie(wt, "wheel", Vi), du = [wt, Ut, er, Et], ie(Ut, "scroll", Vi);
                let e = Et.style,
                    r = e.borderTop,
                    i;
                e.borderTop = "1px solid #000", i = Ur(Et), Ht.m = Math.round(i.top + Ht.sc()) || 0, Me.m = Math.round(i.left + Me.sc()) || 0, r ? e.borderTop = r : e.removeProperty("border-top"), Eo = setInterval(Su, 200), tt.delayedCall(.5, () => Xs = 0), ie(Ut, "touchcancel", Ai), ie(Et, "touchstart", Ai), Fu(ie, Ut, "pointerdown,touchstart,mousedown", () => Fi = 1), Fu(ie, Ut, "pointerup,touchend,mouseup", () => Fi = 0), bo = tt.utils.checkPrefix("transform"), qi.push(bo), Ys = Br(), vo = tt.delayedCall(.2, ms).pause(), ns = [Ut, "visibilitychange", () => {
                    let n = wt.innerWidth,
                        o = wt.innerHeight;
                    Ut.hidden ? (mu = n, gu = o) : (mu !== n || gu !== o) && $s()
                }, Ut, "DOMContentLoaded", ms, wt, "load", () => Ve || ms(), wt, "resize", $s], Mo(ie)
            }
            return Ys
        }
        static defaults(t) {
            for (let e in t) Oo[e] = t[e]
        }
        static kill() {
            yu = 0, _t.slice(0).forEach(t => t.kill(1))
        }
        static config(t) {
            "limitCallbacks" in t && (To = !!t.limitCallbacks);
            let e = t.syncInterval;
            e && clearInterval(Eo) || (Eo = e) && setInterval(Su, e), "autoRefreshEvents" in t && (Mo(Hs) || Mo(ie, t.autoRefreshEvents || "none"), Du = (t.autoRefreshEvents + "").indexOf("resize") === -1)
        }
        static scrollerProxy(t, e) {
            let r = Ae(t)[0],
                i = Rr.indexOf(r),
                n = os(r);
            ~i && Rr.splice(i, n ? 6 : 2), n ? Or.unshift(wt, e, Et, e, er, e) : Or.unshift(r, e)
        }
        static matchMedia(t) {
            let e, r, i, n, o;
            for (r in t) i = vt.indexOf(r), n = t[r], ps = r, r === "all" ? n() : (e = wt.matchMedia(r), e && (e.matches && (o = n()), ~i ? (vt[i + 1] = bu(vt[i + 1], n), vt[i + 2] = bu(vt[i + 2], o)) : (i = vt.length, vt.push(r, n, o), e.addListener ? e.addListener(zu) : e.addEventListener("change", zu)), vt[i + 3] = e.matches)), ps = 0;
            return vt
        }
        static clearMatchMedia(t) {
            t || (vt.length = 0), t = vt.indexOf(t), t >= 0 && vt.splice(t, 4)
        }
    };
    Q.version = "3.7.0";
    Q.saveStyles = s => s ? Ae(s).forEach(t => {
        if (t && t.style) {
            let e = we.indexOf(t);
            e >= 0 && we.splice(e, 5), we.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), tt.core.getCache(t), ps)
        }
    }) : we;
    Q.revert = (s, t) => Ui(!s, t);
    Q.create = (s, t) => new Q(s, t);
    Q.refresh = s => s ? $s() : ms(!0);
    Q.update = Io;
    Q.maxScroll = (s, t) => Ao(s, t ? Me : Ht);
    Q.getScrollFunc = (s, t) => Mi(Ae(s)[0], t ? Me : Ht);
    Q.getById = s => Ro[s];
    Q.getAll = () => _t.slice(0);
    Q.isScrolling = () => !!Ve;
    Q.addEventListener = (s, t) => {
        let e = Qs[s] || (Qs[s] = []);
        ~e.indexOf(t) || e.push(t)
    };
    Q.removeEventListener = (s, t) => {
        let e = Qs[s],
            r = e && e.indexOf(t);
        r >= 0 && e.splice(r, 1)
    };
    Q.batch = (s, t) => {
        let e = [],
            r = {},
            i = t.interval || .016,
            n = t.batchMax || 1e9,
            o = (l, u) => {
                let h = [],
                    c = [],
                    f = tt.delayedCall(i, () => {
                        u(h, c), h = [], c = []
                    }).pause();
                return d => {
                    h.length || f.restart(!0), h.push(d.trigger), c.push(d), n <= h.length && f.progress(1)
                }
            },
            a;
        for (a in t) r[a] = a.substr(0, 2) === "on" && Dr(t[a]) && a !== "onRefreshInit" ? o(a, t[a]) : t[a];
        return Dr(n) && (n = n(), ie(Q, "refresh", () => n = t.batchMax())), Ae(s).forEach(l => {
            let u = {};
            for (a in r) u[a] = r[a];
            u.trigger = l, e.push(Q.create(u))
        }), e
    };
    Q.sort = s => _t.sort(s || ((t, e) => (t.vars.refreshPriority || 0) * -1e6 + t.start - (e.start + (e.vars.refreshPriority || 0) * -1e6)));
    wu() && tt.registerPlugin(Q);
    var Ks = class {
        constructor(t) {
            this.sticky = t.el, this.el = this.sticky.parentNode, this.state = {
                top: 0,
                bottom: 0,
                max: 0,
                min: 0,
                resize: !1,
                animate: !1,
                sticked: !1,
                updated: !1
            }, this.resize(), this.onScrollTrigger()
        }
        onScrollTrigger() {
            let {
                totalH: t,
                height: e
            } = this.state, {
                sniff: r
            } = C;
            r.browser.isDevice ? Q.create({
                trigger: this.sticky.parentNode,
                start: "top top",
                end: "bottom bottom",
                scrub: !0,
                onEnter: () => {
                    E.set(this.sticky, {
                        top: 0
                    }), this.state.sticked = !0, this.sticky.classList.add("-sticky")
                },
                onEnterBack: () => {
                    E.set(this.sticky, {
                        top: 0
                    }), this.state.sticked = !0, this.sticky.classList.add("-sticky")
                },
                onLeaveBack: () => {
                    this.state.sticked = !1, this.sticky.classList.remove("-sticky")
                },
                onLeave: () => {
                    this.state.sticked = !1, this.sticky.classList.remove("-sticky"), E.set(this.sticky, {
                        top: this.state.totalH - this.state.height
                    })
                }
            }) : Q.create({
                trigger: this.sticky.parentNode,
                start: "top top",
                end: "bottom bottom",
                scrub: !0,
                onUpdate: i => {
                    let n = `${i.progress*(this.state.totalH-this.state.height)}`;
                    this.sticky.classList.contains("smiley-content") && (C.webgl.smiley.posY = parseFloat(n)), this.sticky.classList.contains("swirlBlock-content") && (C.webgl.swirl.posY = parseFloat(n)), E.set(this.sticky, {
                        y: n
                    })
                }
            })
        }
        on() {
            let {
                sniff: t
            } = C;
            t.browser.isDevice ? B.on("resize", this.resize) : B.on("smooth:resize", this.resize)
        }
        off() {
            let {
                sniff: t
            } = C;
            t.browser.isDevice ? B.on("resize", this.resize) : B.off("smooth:resize", this.resize)
        }
        destroy() {
            this.off(), C.webgl.smiley.posY = 0, C.webgl.swirl.posY = 0
        }
        resize = () => {
            let t = this.sticky.parentNode,
                e = at(this.sticky),
                r = at(t),
                i = e.height,
                n = r.height;
            E.set(this.sticky, {
                clearProps: "all"
            }), this.state.height = i, this.state.totalH = n
        }
    };
    var Zs = class {
        constructor(t = {}) {
            Ye(this, "run", "enter", "leave", "resize");
            let e = t.container,
                r = t.markers;
            this.dom = {
                container: e,
                markers: r
            }, this.settings = {
                last: {
                    x: 0,
                    y: 0
                },
                position: {
                    x: 0,
                    y: 0
                },
                ease: .12,
                alpha: 0,
                animating: !1,
                rotate: 0
            }, this.state = {
                on: !1,
                onPlace: !0,
                animating: !1
            }, this.init()
        }
        setup() {
            let {
                page: t
            } = C, {
                vw: e,
                vh: r
            } = t, {
                container: i
            } = this.dom, n = document.createElement("canvas"), o = n.getContext("2d"), a = window.devicePixelRatio || 1;
            o.clearRect(0, 0, e, r), n.classList.add("cursor"), n.width = e * a, n.height = r * a, this.canvas = {
                canvas: n,
                ctx: o
            }, i.appendChild(n)
        }
        getCursors() {
            let {
                markers: t
            } = this.dom;
            this.markers = [], t.forEach((e, r) => {
                let i = e.size || 60,
                    n = e.icon,
                    o = e.skin,
                    a = e.layout,
                    l = at(e.el),
                    u = l ? l.top + i / 2 : 0,
                    c = {
                        x: l ? l.right - i / 2 : 0,
                        y: u
                    },
                    f = !1,
                    d = 0,
                    g = 0,
                    p = N("[data-color]", e.el);
                if (n) {
                    let y = new Image;
                    y.onload = () => {
                        this.markers[r].icon = y
                    }, y.src = n
                }
                let m = new Image;
                m.onload = () => {
                    this.markers[r].border = m
                }, m.src = o == "dark" ? "/images/dark-text.png" : "/images/light-text.png";
                let x = {
                    marker: e,
                    pos: c,
                    rect: l,
                    size: i,
                    layout: a,
                    visible: f,
                    radius: d,
                    alpha: g,
                    color: p
                };
                this.markers.push(x)
            })
        }
        updateCursor() {
            this.markers.forEach(t => {
                this.draw(t)
            })
        }
        clearCanvas() {
            let {
                ctx: t
            } = this.canvas, {
                page: e
            } = C;
            t.clearRect(0, 0, e.vw, e.vh)
        }
        draw({
            icon: t,
            border: e,
            visible: r,
            radius: i,
            alpha: n,
            color: o
        }) {
            let {
                ctx: a
            } = this.canvas, {
                last: l
            } = this.settings, {
                page: u
            } = C, h = o.dataset.color, c;
            if (this.settings.position.x = l.x, this.settings.position.y = l.y, r) {
                if (t && (c = t), a.clearRect(0, 0, u.vw, u.vh), c) {
                    let f = i * 2,
                        d = this.settings.position.x - f / 2,
                        g = this.settings.position.y - f / 2;
                    a.globalAlpha = 1, a.beginPath(), a.rotate(0), a.drawImage(c, d, g, f, f)
                }
                if (e) {
                    let f = i * 2.5,
                        d = this.settings.position.x - f / 2,
                        g = this.settings.position.y - f / 2;
                    a.globalAlpha = 1, a.beginPath(), a.translate(d + f / 2, g + f / 2), a.rotate(this.settings.rotate * Math.PI / 180), a.translate(-d - f / 2, -g - f / 2), a.drawImage(e, d, g, f, f), a.setTransform(1, 0, 0, 1, 0, 0)
                }
            }
        }
        run({
            mouse: t
        }) {
            this.mouse = t, this.settings.last.x = Fe(this.settings.last.x, t.x, .1), this.settings.last.y = Fe(this.settings.last.y, t.y, .1), this.settings.rotate += 1, this.updateCursor()
        }
        enter = t => {
            if (this.state.on = !0, this.state.animating) return;
            let e = t.target;
            this.state.animating = !0, this.markers.forEach((r, i) => {
                let {
                    marker: n,
                    size: o
                } = r, a = .2;
                n.el == e && (this.markers[i].visible = !0), E.to(this.markers[i], {
                    duration: .3,
                    radius: o,
                    alpha: 1,
                    delay: a,
                    onComplete: () => {
                        this.state.animating = !1, this.state.on || (n.el == e && (this.markers[i].visible = !1), E.set(this.markers[i], {
                            radius: 0,
                            alpha: 0
                        }), this.clearCanvas())
                    }
                })
            })
        };
        leave = t => {
            if (this.state.on = !1, this.state.animating) return;
            let e = t.target;
            this.state.animating = !0, this.markers.forEach((r, i) => {
                if (this.state.on) return;
                let {
                    marker: n
                } = r;
                E.to(this.markers[i], {
                    duration: .3,
                    radius: 0,
                    alpha: 0,
                    onComplete: () => {
                        n.el == e && (this.markers[i].visible = !1), this.state.animating = !1
                    }
                })
            })
        };
        mouseDown() {
            this.markers.forEach((t, e) => {
                E.to(this.markers[e], {
                    duration: .3,
                    radius: 50
                })
            })
        }
        mouseUp() {
            this.markers.forEach((t, e) => {
                E.to(this.markers[e], {
                    duration: .3,
                    radius: 60
                })
            })
        }
        on() {
            let {
                cursor: t
            } = this.dom;
            B.on("tick", this.run), B.on("resize", this.resize), this.markers.forEach(({
                marker: e
            }) => {
                e.el.addEventListener("mousedown", r => this.mouseDown(r)), e.el.addEventListener("mouseup", r => this.mouseUp(r)), e.el.addEventListener("mouseenter", r => this.enter(r)), e.el.addEventListener("mouseleave", r => this.leave(r))
            })
        }
        off() {
            let {
                cursor: t
            } = this.dom;
            B.off("tick", this.run), B.off("resize ", this.resize), this.markers.forEach(({
                marker: e
            }) => {
                e.el.removeEventListener("mousedown", r => this.mouseDown(r)), e.el.removeEventListener("mouseup", r => this.mouseUp(r)), e.el.removeEventListener("mouseenter", r => this.enter(r)), e.el.removeEventListener("mouseleave", r => this.leave(r))
            })
        }
        resize = () => {
            this.canvas.canvas.width = C.page.vw, this.canvas.canvas.height = C.page.vh, this.getCursors()
        };
        destroy() {
            this.off(), this.cursor = null
        }
        init() {
            this.setup(), this.getCursors(), this.on(), this.resize()
        }
    };
    var ad = (s, t, e, r, i, n = !1) => {
            let a = (s - t) / (e - t) * (i - r) + r;
            return n ? Math.round(a) : a
        },
        gs = class {
            constructor(t = {}) {
                C.SLIDER = {
                    lerped: 0
                }, C.SLIDER.x = 0, this.dom = {
                    container: t.container,
                    el: t.el,
                    els: t.els,
                    labels: t.labels,
                    template: t.template
                }, this.state = {
                    dragStart: !1,
                    dragging: !1,
                    x: 0,
                    start: 0,
                    current: 0,
                    lerped: 0,
                    end: 0,
                    direction: "",
                    click: !0,
                    diff: 0,
                    isResizing: !1
                }, this.init()
            }
            setup() {
                if (!this.dom.container) return;
                let {
                    el: t,
                    els: e,
                    template: r
                } = this.dom, {
                    page: i,
                    webgl: n
                } = C, o = at(e[0]), a = i.vw / 18;
                this.data = [], this.state.total = e.length, this.top = at(t), e.forEach((l, u) => {
                    let h = n.slider.planes[u],
                        c = u + 1,
                        f = at(l),
                        d = o.width,
                        g = o.width * this.state.total,
                        p = r == "circular",
                        m = E.utils.wrap(-d, g - d),
                        x = {
                            index: c,
                            el: l,
                            wrap: m,
                            circular: p,
                            width: d,
                            container: g,
                            grid: a,
                            boundings: o
                        };
                    h && (h.rect = f), this.data.push(x)
                })
            }
            run = ({
                mouse: t,
                current: e
            }) => {
                let {
                    lerped: r,
                    x: i,
                    dragging: n
                } = this.state;
                this.state.isResizing || (this.state.diff = 0, n && (this.state.click = !1), n && (this.state.diff = (i - r) * .005), this.state.x = i, this.state.current = t.x, this.state.scroll = e, this.state.lerped = Fe(r, i, .1), this.state.click = !0, C.SLIDER.lerped = r, this.loopSlider())
            };
            mouseDown = t => {
                let {
                    el: e
                } = this.dom;
                this.state.dragStart = !0;
                let r = t.clientX || t.touches[0].clientX;
                this.state.start = r, e.classList.add("-dragging")
            };
            mouseMove = t => {
                if (!this.state.dragStart) return;
                let {
                    els: e
                } = this.dom;
                this.state.x += (this.state.current - this.state.start) * 2.5, this.state.start = this.state.current, this.state.dragging = !0, C.webgl.slider.dragging = !0;
                for (let r = 0; r < e.length; r++) this.dom.els[r].style.pointerEvents = "none"
            };
            mouseUp = t => {
                t.stopPropagation();
                let e = t.clientX || t.changedTouches[0].clientX,
                    {
                        x: r,
                        dragging: i,
                        start: n
                    } = this.state,
                    {
                        els: o,
                        el: a
                    } = this.dom;
                this.state.end = e, this.state.dragStart = !1, i && (this.state.direction = r > e ? "left" : "right"), a.classList.remove("-dragging"), setTimeout(() => {
                    n !== e && i && this.onCheck();
                    for (let l = 0; l < o.length; l++) this.dom.els[l].style.pointerEvents = "";
                    this.state.dragging = !1, C.webgl.slider.dragging = !1
                }, 500)
            };
            loopSlider() {
                let {
                    lerped: t
                } = this.state, {
                    webgl: e,
                    sniff: r
                } = C, {
                    top: i
                } = this.top;
                this.data.forEach((n, o) => {
                    let {
                        index: a,
                        wrap: l,
                        el: u,
                        circular: h,
                        width: c,
                        container: f,
                        grid: d
                    } = n, g = r.browser.isDesktop ? e.slider.planes[o].plane : null, p = r.browser.isDesktop ? e.slider.planes[o].scale : null, m = r.breakpoints.M_UP ? d * 1.5 : c / 1.17, x = r.breakpoints.M_UP ? d * 12 : d * 33, y = r.breakpoints.M_UP ? 240 : 120, v = a * c + t - m, b = Math.sin((v + x) / f * -Math.PI), w = o * c + t, D = h ? v : w, T = h ? b * y + y : 0, A = l(parseInt(D));
                    g && (g.mesh.position[0] = He(D + d, p).x), g && (g.program.uniforms.uDiff.value = this.state.diff);
                    let F = ad(A - c + m, -f, f, -Math.PI * 15, Math.PI * 15),
                        P = h ? F : 0;
                    g && (e.slider.planes[o].posZ = P), E.set(u, {
                        x: D,
                        y: T,
                        rotate: P,
                        modifiers: {
                            x: k => {
                                let L = l(parseInt(k));
                                return g && (g.mesh.position[0] = He(L + d, p).x), `${L}px`
                            },
                            y: k => {
                                let L = Math.sin((A + x) / f * -Math.PI),
                                    _ = h ? L * y + y : 0;
                                return g && (e.slider.planes[o].posY = _ + i), `${_}px`
                            }
                        }
                    })
                })
            }
            onCheck() {
                let {
                    width: t
                } = this.data[0].boundings, {
                    lerped: e,
                    total: r
                } = this.state, i = Math.round(e / t), n = t * Math.abs(i), o = Math.abs(i), a = o % r;
                this.state.x < 0 ? (o = a, this.state.x = -n) : (this.state.x = n, o = a == 0 ? 0 : r - a), this.updateLabel(o)
            }
            openLink = t => {
                let {
                    click: e
                } = this.state;
                if (!e) {
                    t.preventDefault(), t.stopPropagation();
                    return
                }
                let r = t.target,
                    i = window.location.origin,
                    n = r.dataset.href,
                    o = `${i+n}`;
                n && C.H.redirect(o, "fade")
            };
            updateLabel(t) {
                let {
                    labels: e
                } = this.dom;
                if (!e) return;
                let r = e[t],
                    i = I("p", r);
                E.to(e, {
                    duration: .25,
                    autoAlpha: 0
                }), E.set(r, {
                    autoAlpha: 1,
                    delay: .25
                }), E.fromTo(i, {
                    autoAlpha: 0,
                    y: 10
                }, {
                    duration: .3,
                    delay: .25,
                    y: 0,
                    autoAlpha: 1,
                    stagger: .05
                })
            }
            on() {
                if (!this.dom.container) return;
                let {
                    sniff: t
                } = C, {
                    container: e
                } = this.dom;
                e.addEventListener("touchstart", this.mouseDown), e.addEventListener("touchmove", this.mouseMove), e.addEventListener("touchend", this.mouseUp), e.addEventListener("mousedown", this.mouseDown), e.addEventListener("mousemove", this.mouseMove), e.addEventListener("mouseleave", this.mouseUp), e.addEventListener("mouseup", this.mouseUp, !1), e.addEventListener("click", this.openLink), B.on("tick", this.run), t.browser.isDevice ? B.on("resize", this.resize) : B.on("smooth:resize", this.resize)
            }
            off() {
                if (!this.dom.container) return;
                let {
                    sniff: t
                } = C, {
                    container: e
                } = this.dom;
                e.removeEventListener("touchstart", this.mouseDown), e.removeEventListener("touchmove", this.mouseMove), e.removeEventListener("touchend", this.mouseUp), e.removeEventListener("mousedown", this.mouseDown), e.removeEventListener("mousemove", this.mouseMove), e.removeEventListener("mouseleave", this.mouseUp), e.removeEventListener("mouseup", this.mouseUp), B.off("tick", this.run), t.browser.isDevice ? B.off("resize", this.resize) : B.off("smooth:resize", this.resize)
            }
            resize = () => {
                this.state.isResizing = !0, this.setup(), this.state.isResizing = !1
            };
            destroy() {
                this.off(), this.data = []
            }
            init() {
                this.on(), this.setup()
            }
        };

    function jo(s) {
        let t = s[0],
            e = s[1],
            r = s[2];
        return Math.sqrt(t * t + e * e + r * r)
    }

    function Gi(s, t) {
        return s[0] = t[0], s[1] = t[1], s[2] = t[2], s
    }

    function Iu(s, t, e, r) {
        return s[0] = t, s[1] = e, s[2] = r, s
    }

    function qo(s, t, e) {
        return s[0] = t[0] + e[0], s[1] = t[1] + e[1], s[2] = t[2] + e[2], s
    }

    function Wo(s, t, e) {
        return s[0] = t[0] - e[0], s[1] = t[1] - e[1], s[2] = t[2] - e[2], s
    }

    function Nu(s, t, e) {
        return s[0] = t[0] * e[0], s[1] = t[1] * e[1], s[2] = t[2] * e[2], s
    }

    function Vu(s, t, e) {
        return s[0] = t[0] / e[0], s[1] = t[1] / e[1], s[2] = t[2] / e[2], s
    }

    function Xi(s, t, e) {
        return s[0] = t[0] * e, s[1] = t[1] * e, s[2] = t[2] * e, s
    }

    function Uu(s, t) {
        let e = t[0] - s[0],
            r = t[1] - s[1],
            i = t[2] - s[2];
        return Math.sqrt(e * e + r * r + i * i)
    }

    function ju(s, t) {
        let e = t[0] - s[0],
            r = t[1] - s[1],
            i = t[2] - s[2];
        return e * e + r * r + i * i
    }

    function Yo(s) {
        let t = s[0],
            e = s[1],
            r = s[2];
        return t * t + e * e + r * r
    }

    function qu(s, t) {
        return s[0] = -t[0], s[1] = -t[1], s[2] = -t[2], s
    }

    function Wu(s, t) {
        return s[0] = 1 / t[0], s[1] = 1 / t[1], s[2] = 1 / t[2], s
    }

    function Hi(s, t) {
        let e = t[0],
            r = t[1],
            i = t[2],
            n = e * e + r * r + i * i;
        return n > 0 && (n = 1 / Math.sqrt(n)), s[0] = t[0] * n, s[1] = t[1] * n, s[2] = t[2] * n, s
    }

    function Go(s, t) {
        return s[0] * t[0] + s[1] * t[1] + s[2] * t[2]
    }

    function Xo(s, t, e) {
        let r = t[0],
            i = t[1],
            n = t[2],
            o = e[0],
            a = e[1],
            l = e[2];
        return s[0] = i * l - n * a, s[1] = n * o - r * l, s[2] = r * a - i * o, s
    }

    function Yu(s, t, e, r) {
        let i = t[0],
            n = t[1],
            o = t[2];
        return s[0] = i + r * (e[0] - i), s[1] = n + r * (e[1] - n), s[2] = o + r * (e[2] - o), s
    }

    function Gu(s, t, e) {
        let r = t[0],
            i = t[1],
            n = t[2],
            o = e[3] * r + e[7] * i + e[11] * n + e[15];
        return o = o || 1, s[0] = (e[0] * r + e[4] * i + e[8] * n + e[12]) / o, s[1] = (e[1] * r + e[5] * i + e[9] * n + e[13]) / o, s[2] = (e[2] * r + e[6] * i + e[10] * n + e[14]) / o, s
    }

    function Xu(s, t, e) {
        let r = t[0],
            i = t[1],
            n = t[2],
            o = e[3] * r + e[7] * i + e[11] * n + e[15];
        return o = o || 1, s[0] = (e[0] * r + e[4] * i + e[8] * n) / o, s[1] = (e[1] * r + e[5] * i + e[9] * n) / o, s[2] = (e[2] * r + e[6] * i + e[10] * n) / o, s
    }

    function Hu(s, t, e) {
        let r = t[0],
            i = t[1],
            n = t[2];
        return s[0] = r * e[0] + i * e[3] + n * e[6], s[1] = r * e[1] + i * e[4] + n * e[7], s[2] = r * e[2] + i * e[5] + n * e[8], s
    }

    function $u(s, t, e) {
        let r = t[0],
            i = t[1],
            n = t[2],
            o = e[0],
            a = e[1],
            l = e[2],
            u = e[3],
            h = a * n - l * i,
            c = l * r - o * n,
            f = o * i - a * r,
            d = a * f - l * c,
            g = l * h - o * f,
            p = o * c - a * h,
            m = u * 2;
        return h *= m, c *= m, f *= m, d *= 2, g *= 2, p *= 2, s[0] = r + h + d, s[1] = i + c + g, s[2] = n + f + p, s
    }
    var Qu = function () {
        let s = [0, 0, 0],
            t = [0, 0, 0];
        return function (e, r) {
            Gi(s, e), Gi(t, r), Hi(s, s), Hi(t, t);
            let i = Go(s, t);
            return i > 1 ? 0 : i < -1 ? Math.PI : Math.acos(i)
        }
    }();

    function Ku(s, t) {
        return s[0] === t[0] && s[1] === t[1] && s[2] === t[2]
    }
    var et = class extends Array {
        constructor(t = 0, e = t, r = t) {
            super(t, e, r);
            return this
        }
        get x() {
            return this[0]
        }
        get y() {
            return this[1]
        }
        get z() {
            return this[2]
        }
        set x(t) {
            this[0] = t
        }
        set y(t) {
            this[1] = t
        }
        set z(t) {
            this[2] = t
        }
        set(t, e = t, r = t) {
            return t.length ? this.copy(t) : (Iu(this, t, e, r), this)
        }
        copy(t) {
            return Gi(this, t), this
        }
        add(t, e) {
            return e ? qo(this, t, e) : qo(this, this, t), this
        }
        sub(t, e) {
            return e ? Wo(this, t, e) : Wo(this, this, t), this
        }
        multiply(t) {
            return t.length ? Nu(this, this, t) : Xi(this, this, t), this
        }
        divide(t) {
            return t.length ? Vu(this, this, t) : Xi(this, this, 1 / t), this
        }
        inverse(t = this) {
            return Wu(this, t), this
        }
        len() {
            return jo(this)
        }
        distance(t) {
            return t ? Uu(this, t) : jo(this)
        }
        squaredLen() {
            return Yo(this)
        }
        squaredDistance(t) {
            return t ? ju(this, t) : Yo(this)
        }
        negate(t = this) {
            return qu(this, t), this
        }
        cross(t, e) {
            return e ? Xo(this, t, e) : Xo(this, this, t), this
        }
        scale(t) {
            return Xi(this, this, t), this
        }
        normalize() {
            return Hi(this, this), this
        }
        dot(t) {
            return Go(this, t)
        }
        equals(t) {
            return Ku(this, t)
        }
        applyMatrix3(t) {
            return Hu(this, this, t), this
        }
        applyMatrix4(t) {
            return Gu(this, this, t), this
        }
        scaleRotateMatrix4(t) {
            return Xu(this, this, t), this
        }
        applyQuaternion(t) {
            return $u(this, this, t), this
        }
        angle(t) {
            return Qu(this, t)
        }
        lerp(t, e) {
            return Yu(this, this, t, e), this
        }
        clone() {
            return new et(this[0], this[1], this[2])
        }
        fromArray(t, e = 0) {
            return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this
        }
        toArray(t = [], e = 0) {
            return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t
        }
        transformDirection(t) {
            let e = this[0],
                r = this[1],
                i = this[2];
            return this[0] = t[0] * e + t[4] * r + t[8] * i, this[1] = t[1] * e + t[5] * r + t[9] * i, this[2] = t[2] * e + t[6] * r + t[10] * i, this.normalize()
        }
    };
    var Zu = new et,
        ld = 1,
        ud = 1,
        Ju = !1,
        jt = class {
            constructor(t, e = {}) {
                t.canvas || console.error("gl not passed as first argument to Geometry"), this.gl = t, this.attributes = e, this.id = ld++, this.VAOs = {}, this.drawRange = {
                    start: 0,
                    count: 0
                }, this.instancedCount = 0, this.gl.renderer.bindVertexArray(null), this.gl.renderer.currentGeometry = null, this.glState = this.gl.renderer.state;
                for (let r in e) this.addAttribute(r, e[r])
            }
            addAttribute(t, e) {
                if (this.attributes[t] = e, e.id = ud++, e.size = e.size || 1, e.type = e.type || (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT), e.target = t === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER, e.normalized = e.normalized || !1, e.stride = e.stride || 0, e.offset = e.offset || 0, e.count = e.count || (e.stride ? e.data.byteLength / e.stride : e.data.length / e.size), e.divisor = e.instanced || 0, e.needsUpdate = !1, e.usage = e.usage || this.gl.STATIC_DRAW, e.buffer || this.updateAttribute(e), e.divisor) {
                    if (this.isInstanced = !0, this.instancedCount && this.instancedCount !== e.count * e.divisor) return console.warn("geometry has multiple instanced buffers of different length"), this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor);
                    this.instancedCount = e.count * e.divisor
                } else t === "index" ? this.drawRange.count = e.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count))
            }
            updateAttribute(t) {
                let e = !t.buffer;
                e && (t.buffer = this.gl.createBuffer()), this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer), this.glState.boundBuffer = t.buffer), e ? this.gl.bufferData(t.target, t.data, t.usage) : this.gl.bufferSubData(t.target, 0, t.data), t.needsUpdate = !1
            }
            setIndex(t) {
                this.addAttribute("index", t)
            }
            setDrawRange(t, e) {
                this.drawRange.start = t, this.drawRange.count = e
            }
            setInstancedCount(t) {
                this.instancedCount = t
            }
            createVAO(t) {
                this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.bindAttributes(t)
            }
            bindAttributes(t) {
                t.attributeLocations.forEach((e, {
                    name: r,
                    type: i
                }) => {
                    if (!this.attributes[r]) {
                        console.warn(`active attribute ${r} not being supplied`);
                        return
                    }
                    let n = this.attributes[r];
                    this.gl.bindBuffer(n.target, n.buffer), this.glState.boundBuffer = n.buffer;
                    let o = 1;
                    i === 35674 && (o = 2), i === 35675 && (o = 3), i === 35676 && (o = 4);
                    let a = n.size / o,
                        l = o === 1 ? 0 : o * o * o,
                        u = o === 1 ? 0 : o * o;
                    for (let h = 0; h < o; h++) this.gl.vertexAttribPointer(e + h, a, n.type, n.normalized, n.stride + l, n.offset + h * u), this.gl.enableVertexAttribArray(e + h), this.gl.renderer.vertexAttribDivisor(e + h, n.divisor)
                }), this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
            }
            draw({
                program: t,
                mode: e = this.gl.TRIANGLES
            }) {
                this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` && (this.VAOs[t.attributeOrder] || this.createVAO(t), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`), t.attributeLocations.forEach((r, {
                    name: i
                }) => {
                    let n = this.attributes[i];
                    n.needsUpdate && this.updateAttribute(n)
                }), this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2, this.instancedCount) : this.gl.renderer.drawArraysInstanced(e, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2) : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count)
            }
            getPosition() {
                let t = this.attributes.position;
                if (t.data) return t;
                if (!Ju) return console.warn("No position buffer data found to compute bounds"), Ju = !0
            }
            computeBoundingBox(t) {
                t || (t = this.getPosition());
                let e = t.data,
                    r = t.stride ? t.stride / e.BYTES_PER_ELEMENT : t.size;
                this.bounds || (this.bounds = {
                    min: new et,
                    max: new et,
                    center: new et,
                    scale: new et,
                    radius: 1 / 0
                });
                let i = this.bounds.min,
                    n = this.bounds.max,
                    o = this.bounds.center,
                    a = this.bounds.scale;
                i.set(1 / 0), n.set(-1 / 0);
                for (let l = 0, u = e.length; l < u; l += r) {
                    let h = e[l],
                        c = e[l + 1],
                        f = e[l + 2];
                    i.x = Math.min(h, i.x), i.y = Math.min(c, i.y), i.z = Math.min(f, i.z), n.x = Math.max(h, n.x), n.y = Math.max(c, n.y), n.z = Math.max(f, n.z)
                }
                a.sub(n, i), o.add(i, n).divide(2)
            }
            computeBoundingSphere(t) {
                t || (t = this.getPosition());
                let e = t.data,
                    r = t.stride ? t.stride / e.BYTES_PER_ELEMENT : t.size;
                this.bounds || this.computeBoundingBox(t);
                let i = 0;
                for (let n = 0, o = e.length; n < o; n += r) Zu.fromArray(e, n), i = Math.max(i, this.bounds.center.squaredDistance(Zu));
                this.bounds.radius = Math.sqrt(i)
            }
            remove() {
                for (let t in this.VAOs) this.gl.renderer.deleteVertexArray(this.VAOs[t]), delete this.VAOs[t];
                for (let t in this.attributes) this.gl.deleteBuffer(this.attributes[t].buffer), delete this.attributes[t]
            }
        };
    var hd = 1,
        th = {},
        ne = class {
            constructor(t, {
                vertex: e,
                fragment: r,
                uniforms: i = {},
                transparent: n = !1,
                cullFace: o = t.BACK,
                frontFace: a = t.CCW,
                depthTest: l = !0,
                depthWrite: u = !0,
                depthFunc: h = t.LESS
            } = {}) {
                t.canvas || console.error("gl not passed as fist argument to Program"), this.gl = t, this.uniforms = i, this.id = hd++, e || console.warn("vertex shader not supplied"), r || console.warn("fragment shader not supplied"), this.transparent = n, this.cullFace = o, this.frontFace = a, this.depthTest = l, this.depthWrite = u, this.depthFunc = h, this.blendFunc = {}, this.blendEquation = {}, this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
                let c = t.createShader(t.VERTEX_SHADER);
                t.shaderSource(c, e), t.compileShader(c), t.getShaderInfoLog(c) !== "" && console.warn(`${t.getShaderInfoLog(c)}
Vertex Shader
${eh(e)}`);
                let f = t.createShader(t.FRAGMENT_SHADER);
                if (t.shaderSource(f, r), t.compileShader(f), t.getShaderInfoLog(f) !== "" && console.warn(`${t.getShaderInfoLog(f)}
Fragment Shader
${eh(r)}`), this.program = t.createProgram(), t.attachShader(this.program, c), t.attachShader(this.program, f), t.linkProgram(this.program), !t.getProgramParameter(this.program, t.LINK_STATUS)) return console.warn(t.getProgramInfoLog(this.program));
                t.deleteShader(c), t.deleteShader(f), this.uniformLocations = new Map;
                let d = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS);
                for (let m = 0; m < d; m++) {
                    let x = t.getActiveUniform(this.program, m);
                    this.uniformLocations.set(x, t.getUniformLocation(this.program, x.name));
                    let y = x.name.match(/(\w+)/g);
                    x.uniformName = y[0], y.length === 3 ? (x.isStructArray = !0, x.structIndex = Number(y[1]), x.structProperty = y[2]) : y.length === 2 && isNaN(Number(y[1])) && (x.isStruct = !0, x.structProperty = y[1])
                }
                this.attributeLocations = new Map;
                let g = [],
                    p = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES);
                for (let m = 0; m < p; m++) {
                    let x = t.getActiveAttrib(this.program, m),
                        y = t.getAttribLocation(this.program, x.name);
                    y !== -1 && (g[y] = x.name, this.attributeLocations.set(x, y))
                }
                this.attributeOrder = g.join("")
            }
            setBlendFunc(t, e, r, i) {
                this.blendFunc.src = t, this.blendFunc.dst = e, this.blendFunc.srcAlpha = r, this.blendFunc.dstAlpha = i, t && (this.transparent = !0)
            }
            setBlendEquation(t, e) {
                this.blendEquation.modeRGB = t, this.blendEquation.modeAlpha = e
            }
            applyState() {
                this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST), this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE), this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND), this.cullFace && this.gl.renderer.setCullFace(this.cullFace), this.gl.renderer.setFrontFace(this.frontFace), this.gl.renderer.setDepthMask(this.depthWrite), this.gl.renderer.setDepthFunc(this.depthFunc), this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha), this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha)
            }
            use({
                flipFaces: t = !1
            } = {}) {
                let e = -1;
                this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program), this.gl.renderer.state.currentProgram = this.id), this.uniformLocations.forEach((i, n) => {
                    let o = n.uniformName,
                        a = this.uniforms[o];
                    if (n.isStruct && (a = a[n.structProperty], o += `.${n.structProperty}`), n.isStructArray && (a = a[n.structIndex][n.structProperty], o += `[${n.structIndex}].${n.structProperty}`), !a) return rh(`Active uniform ${o} has not been supplied`);
                    if (a && a.value === void 0) return rh(`${o} uniform is missing a value parameter`);
                    if (a.value.texture) return e = e + 1, a.value.update(e), Ho(this.gl, n.type, i, e);
                    if (a.value.length && a.value[0].texture) {
                        let l = [];
                        return a.value.forEach(u => {
                            e = e + 1, u.update(e), l.push(e)
                        }), Ho(this.gl, n.type, i, l)
                    }
                    Ho(this.gl, n.type, i, a.value)
                }), this.applyState(), t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
            }
            remove() {
                this.gl.deleteProgram(this.program)
            }
        };

    function Ho(s, t, e, r) {
        r = r.length ? cd(r) : r;
        let i = s.renderer.state.uniformLocations.get(e);
        if (r.length)
            if (i === void 0 || i.length !== r.length) s.renderer.state.uniformLocations.set(e, r.slice(0));
            else {
                if (fd(i, r)) return;
                i.set ? i.set(r) : pd(i, r), s.renderer.state.uniformLocations.set(e, i)
            }
        else {
            if (i === r) return;
            s.renderer.state.uniformLocations.set(e, r)
        }
        switch (t) {
            case 5126:
                return r.length ? s.uniform1fv(e, r) : s.uniform1f(e, r);
            case 35664:
                return s.uniform2fv(e, r);
            case 35665:
                return s.uniform3fv(e, r);
            case 35666:
                return s.uniform4fv(e, r);
            case 35670:
            case 5124:
            case 35678:
            case 35680:
                return r.length ? s.uniform1iv(e, r) : s.uniform1i(e, r);
            case 35671:
            case 35667:
                return s.uniform2iv(e, r);
            case 35672:
            case 35668:
                return s.uniform3iv(e, r);
            case 35673:
            case 35669:
                return s.uniform4iv(e, r);
            case 35674:
                return s.uniformMatrix2fv(e, !1, r);
            case 35675:
                return s.uniformMatrix3fv(e, !1, r);
            case 35676:
                return s.uniformMatrix4fv(e, !1, r)
        }
    }

    function eh(s) {
        let t = s.split(`
`);
        for (let e = 0; e < t.length; e++) t[e] = e + 1 + ": " + t[e];
        return t.join(`
`)
    }

    function cd(s) {
        let t = s.length,
            e = s[0].length;
        if (e === void 0) return s;
        let r = t * e,
            i = th[r];
        i || (th[r] = i = new Float32Array(r));
        for (let n = 0; n < t; n++) i.set(s[n], n * e);
        return i
    }

    function fd(s, t) {
        if (s.length !== t.length) return !1;
        for (let e = 0, r = s.length; e < r; e++)
            if (s[e] !== t[e]) return !1;
        return !0
    }

    function pd(s, t) {
        for (let e = 0, r = s.length; e < r; e++) s[e] = t[e]
    }
    var $o = 0;

    function rh(s) {
        $o > 100 || (console.warn(s), $o++, $o > 100 && console.warn("More than 100 program warnings - stopping logs."))
    }
    var Qo = new et,
        dd = 1,
        yr = class {
            constructor({
                canvas: t = document.createElement("canvas"),
                width: e = 300,
                height: r = 150,
                dpr: i = 1,
                alpha: n = !1,
                depth: o = !0,
                stencil: a = !1,
                antialias: l = !1,
                premultipliedAlpha: u = !1,
                preserveDrawingBuffer: h = !1,
                powerPreference: c = "default",
                autoClear: f = !0,
                webgl: d = 2
            } = {}) {
                let g = {
                    alpha: n,
                    depth: o,
                    stencil: a,
                    antialias: l,
                    premultipliedAlpha: u,
                    preserveDrawingBuffer: h,
                    powerPreference: c
                };
                this.dpr = i, this.alpha = n, this.color = !0, this.depth = o, this.stencil = a, this.premultipliedAlpha = u, this.autoClear = f, this.id = dd++, d === 2 && (this.gl = t.getContext("webgl2", g)), this.isWebgl2 = !!this.gl, this.gl || (this.gl = t.getContext("webgl", g)), this.gl || console.error("unable to create webgl context"), this.gl.renderer = this, this.setSize(e, r), this.state = {}, this.state.blendFunc = {
                    src: this.gl.ONE,
                    dst: this.gl.ZERO
                }, this.state.blendEquation = {
                    modeRGB: this.gl.FUNC_ADD
                }, this.state.cullFace = null, this.state.frontFace = this.gl.CCW, this.state.depthMask = !0, this.state.depthFunc = this.gl.LESS, this.state.premultiplyAlpha = !1, this.state.flipY = !1, this.state.unpackAlignment = 4, this.state.framebuffer = null, this.state.viewport = {
                    x: 0,
                    y: 0,
                    width: null,
                    height: null
                }, this.state.textureUnits = [], this.state.activeTextureUnit = 0, this.state.boundBuffer = null, this.state.uniformLocations = new Map, this.state.currentProgram = null, this.extensions = {}, this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"), this.getExtension("OES_texture_float_linear"), this.getExtension("OES_texture_half_float"), this.getExtension("OES_texture_half_float_linear"), this.getExtension("OES_element_index_uint"), this.getExtension("OES_standard_derivatives"), this.getExtension("EXT_sRGB"), this.getExtension("WEBGL_depth_texture"), this.getExtension("WEBGL_draw_buffers")), this.getExtension("WEBGL_compressed_texture_astc"), this.getExtension("EXT_texture_compression_bptc"), this.getExtension("WEBGL_compressed_texture_s3tc"), this.getExtension("WEBGL_compressed_texture_etc1"), this.getExtension("WEBGL_compressed_texture_pvrtc"), this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"), this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"), this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"), this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"), this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"), this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"), this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"), this.parameters = {}, this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS), this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
            }
            setSize(t, e) {
                this.width = t, this.height = e, this.gl.canvas.width = t * this.dpr, this.gl.canvas.height = e * this.dpr, Object.assign(this.gl.canvas.style, {
                    width: t + "px",
                    height: e + "px"
                })
            }
            setViewport(t, e, r = 0, i = 0) {
                this.state.viewport.width === t && this.state.viewport.height === e || (this.state.viewport.width = t, this.state.viewport.height = e, this.state.viewport.x = r, this.state.viewport.y = i, this.gl.viewport(r, i, t, e))
            }
            setScissor(t, e, r = 0, i = 0) {
                this.gl.scissor(r, i, t, e)
            }
            enable(t) {
                this.state[t] !== !0 && (this.gl.enable(t), this.state[t] = !0)
            }
            disable(t) {
                this.state[t] !== !1 && (this.gl.disable(t), this.state[t] = !1)
            }
            setBlendFunc(t, e, r, i) {
                this.state.blendFunc.src === t && this.state.blendFunc.dst === e && this.state.blendFunc.srcAlpha === r && this.state.blendFunc.dstAlpha === i || (this.state.blendFunc.src = t, this.state.blendFunc.dst = e, this.state.blendFunc.srcAlpha = r, this.state.blendFunc.dstAlpha = i, r !== void 0 ? this.gl.blendFuncSeparate(t, e, r, i) : this.gl.blendFunc(t, e))
            }
            setBlendEquation(t, e) {
                t = t || this.gl.FUNC_ADD, !(this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === e) && (this.state.blendEquation.modeRGB = t, this.state.blendEquation.modeAlpha = e, e !== void 0 ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t))
            }
            setCullFace(t) {
                this.state.cullFace !== t && (this.state.cullFace = t, this.gl.cullFace(t))
            }
            setFrontFace(t) {
                this.state.frontFace !== t && (this.state.frontFace = t, this.gl.frontFace(t))
            }
            setDepthMask(t) {
                this.state.depthMask !== t && (this.state.depthMask = t, this.gl.depthMask(t))
            }
            setDepthFunc(t) {
                this.state.depthFunc !== t && (this.state.depthFunc = t, this.gl.depthFunc(t))
            }
            activeTexture(t) {
                this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t, this.gl.activeTexture(this.gl.TEXTURE0 + t))
            }
            bindFramebuffer({
                target: t = this.gl.FRAMEBUFFER,
                buffer: e = null
            } = {}) {
                this.state.framebuffer !== e && (this.state.framebuffer = e, this.gl.bindFramebuffer(t, e))
            }
            getExtension(t, e, r) {
                return e && this.gl[e] ? this.gl[e].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)), e ? this.extensions[t] ? this.extensions[t][r].bind(this.extensions[t]) : null : this.extensions[t])
            }
            sortOpaque(t, e) {
                return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : t.zDepth !== e.zDepth ? t.zDepth - e.zDepth : e.id - t.id
            }
            sortTransparent(t, e) {
                return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id
            }
            sortUI(t, e) {
                return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id
            }
            getRenderList({
                scene: t,
                camera: e,
                frustumCull: r,
                sort: i
            }) {
                let n = [];
                if (e && r && e.updateFrustum(), t.traverse(o => {
                        if (!o.visible) return !0;
                        !o.draw || r && o.frustumCulled && e && !e.frustumIntersectsMesh(o) || n.push(o)
                    }), i) {
                    let o = [],
                        a = [],
                        l = [];
                    n.forEach(u => {
                        u.program.transparent ? u.program.depthTest ? a.push(u) : l.push(u) : o.push(u), u.zDepth = 0, !(u.renderOrder !== 0 || !u.program.depthTest || !e) && (u.worldMatrix.getTranslation(Qo), Qo.applyMatrix4(e.projectionViewMatrix), u.zDepth = Qo.z)
                    }), o.sort(this.sortOpaque), a.sort(this.sortTransparent), l.sort(this.sortUI), n = o.concat(a, l)
                }
                return n
            }
            render({
                scene: t,
                camera: e,
                target: r = null,
                update: i = !0,
                sort: n = !0,
                frustumCull: o = !0,
                clear: a
            }) {
                r === null ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(r), this.setViewport(r.width, r.height)), (a || this.autoClear && a !== !1) && (this.depth && (!r || r.depth) && (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)), this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))), i && t.updateMatrixWorld(), e && e.updateMatrixWorld(), this.getRenderList({
                    scene: t,
                    camera: e,
                    frustumCull: o,
                    sort: n
                }).forEach(u => {
                    u.draw({
                        camera: e
                    })
                })
            }
        };

    function sh(s, t) {
        return s[0] = t[0], s[1] = t[1], s[2] = t[2], s[3] = t[3], s
    }

    function ih(s, t, e, r, i) {
        return s[0] = t, s[1] = e, s[2] = r, s[3] = i, s
    }

    function nh(s, t) {
        let e = t[0],
            r = t[1],
            i = t[2],
            n = t[3],
            o = e * e + r * r + i * i + n * n;
        return o > 0 && (o = 1 / Math.sqrt(o)), s[0] = e * o, s[1] = r * o, s[2] = i * o, s[3] = n * o, s
    }

    function oh(s, t) {
        return s[0] * t[0] + s[1] * t[1] + s[2] * t[2] + s[3] * t[3]
    }

    function ah(s) {
        return s[0] = 0, s[1] = 0, s[2] = 0, s[3] = 1, s
    }

    function lh(s, t, e) {
        e = e * .5;
        let r = Math.sin(e);
        return s[0] = r * t[0], s[1] = r * t[1], s[2] = r * t[2], s[3] = Math.cos(e), s
    }

    function Ko(s, t, e) {
        let r = t[0],
            i = t[1],
            n = t[2],
            o = t[3],
            a = e[0],
            l = e[1],
            u = e[2],
            h = e[3];
        return s[0] = r * h + o * a + i * u - n * l, s[1] = i * h + o * l + n * a - r * u, s[2] = n * h + o * u + r * l - i * a, s[3] = o * h - r * a - i * l - n * u, s
    }

    function uh(s, t, e) {
        e *= .5;
        let r = t[0],
            i = t[1],
            n = t[2],
            o = t[3],
            a = Math.sin(e),
            l = Math.cos(e);
        return s[0] = r * l + o * a, s[1] = i * l + n * a, s[2] = n * l - i * a, s[3] = o * l - r * a, s
    }

    function hh(s, t, e) {
        e *= .5;
        let r = t[0],
            i = t[1],
            n = t[2],
            o = t[3],
            a = Math.sin(e),
            l = Math.cos(e);
        return s[0] = r * l - n * a, s[1] = i * l + o * a, s[2] = n * l + r * a, s[3] = o * l - i * a, s
    }

    function ch(s, t, e) {
        e *= .5;
        let r = t[0],
            i = t[1],
            n = t[2],
            o = t[3],
            a = Math.sin(e),
            l = Math.cos(e);
        return s[0] = r * l + i * a, s[1] = i * l - r * a, s[2] = n * l + o * a, s[3] = o * l - n * a, s
    }

    function fh(s, t, e, r) {
        let i = t[0],
            n = t[1],
            o = t[2],
            a = t[3],
            l = e[0],
            u = e[1],
            h = e[2],
            c = e[3],
            f, d, g, p, m;
        return d = i * l + n * u + o * h + a * c, d < 0 && (d = -d, l = -l, u = -u, h = -h, c = -c), 1 - d > 1e-6 ? (f = Math.acos(d), g = Math.sin(f), p = Math.sin((1 - r) * f) / g, m = Math.sin(r * f) / g) : (p = 1 - r, m = r), s[0] = p * i + m * l, s[1] = p * n + m * u, s[2] = p * o + m * h, s[3] = p * a + m * c, s
    }

    function ph(s, t) {
        let e = t[0],
            r = t[1],
            i = t[2],
            n = t[3],
            o = e * e + r * r + i * i + n * n,
            a = o ? 1 / o : 0;
        return s[0] = -e * a, s[1] = -r * a, s[2] = -i * a, s[3] = n * a, s
    }

    function dh(s, t) {
        return s[0] = -t[0], s[1] = -t[1], s[2] = -t[2], s[3] = t[3], s
    }

    function mh(s, t) {
        let e = t[0] + t[4] + t[8],
            r;
        if (e > 0) r = Math.sqrt(e + 1), s[3] = .5 * r, r = .5 / r, s[0] = (t[5] - t[7]) * r, s[1] = (t[6] - t[2]) * r, s[2] = (t[1] - t[3]) * r;
        else {
            let i = 0;
            t[4] > t[0] && (i = 1), t[8] > t[i * 3 + i] && (i = 2);
            let n = (i + 1) % 3,
                o = (i + 2) % 3;
            r = Math.sqrt(t[i * 3 + i] - t[n * 3 + n] - t[o * 3 + o] + 1), s[i] = .5 * r, r = .5 / r, s[3] = (t[n * 3 + o] - t[o * 3 + n]) * r, s[n] = (t[n * 3 + i] + t[i * 3 + n]) * r, s[o] = (t[o * 3 + i] + t[i * 3 + o]) * r
        }
        return s
    }

    function gh(s, t, e = "YXZ") {
        let r = Math.sin(t[0] * .5),
            i = Math.cos(t[0] * .5),
            n = Math.sin(t[1] * .5),
            o = Math.cos(t[1] * .5),
            a = Math.sin(t[2] * .5),
            l = Math.cos(t[2] * .5);
        return e === "XYZ" ? (s[0] = r * o * l + i * n * a, s[1] = i * n * l - r * o * a, s[2] = i * o * a + r * n * l, s[3] = i * o * l - r * n * a) : e === "YXZ" ? (s[0] = r * o * l + i * n * a, s[1] = i * n * l - r * o * a, s[2] = i * o * a - r * n * l, s[3] = i * o * l + r * n * a) : e === "ZXY" ? (s[0] = r * o * l - i * n * a, s[1] = i * n * l + r * o * a, s[2] = i * o * a + r * n * l, s[3] = i * o * l - r * n * a) : e === "ZYX" ? (s[0] = r * o * l - i * n * a, s[1] = i * n * l + r * o * a, s[2] = i * o * a - r * n * l, s[3] = i * o * l + r * n * a) : e === "YZX" ? (s[0] = r * o * l + i * n * a, s[1] = i * n * l + r * o * a, s[2] = i * o * a - r * n * l, s[3] = i * o * l - r * n * a) : e === "XZY" && (s[0] = r * o * l - i * n * a, s[1] = i * n * l - r * o * a, s[2] = i * o * a + r * n * l, s[3] = i * o * l + r * n * a), s
    }
    var xh = sh,
        Dh = ih;
    var yh = oh;
    var _h = nh;
    var Zo = class extends Array {
        constructor(t = 0, e = 0, r = 0, i = 1) {
            super(t, e, r, i);
            return this.onChange = () => {}, this
        }
        get x() {
            return this[0]
        }
        get y() {
            return this[1]
        }
        get z() {
            return this[2]
        }
        get w() {
            return this[3]
        }
        set x(t) {
            this[0] = t, this.onChange()
        }
        set y(t) {
            this[1] = t, this.onChange()
        }
        set z(t) {
            this[2] = t, this.onChange()
        }
        set w(t) {
            this[3] = t, this.onChange()
        }
        identity() {
            return ah(this), this.onChange(), this
        }
        set(t, e, r, i) {
            return t.length ? this.copy(t) : (Dh(this, t, e, r, i), this.onChange(), this)
        }
        rotateX(t) {
            return uh(this, this, t), this.onChange(), this
        }
        rotateY(t) {
            return hh(this, this, t), this.onChange(), this
        }
        rotateZ(t) {
            return ch(this, this, t), this.onChange(), this
        }
        inverse(t = this) {
            return ph(this, t), this.onChange(), this
        }
        conjugate(t = this) {
            return dh(this, t), this.onChange(), this
        }
        copy(t) {
            return xh(this, t), this.onChange(), this
        }
        normalize(t = this) {
            return _h(this, t), this.onChange(), this
        }
        multiply(t, e) {
            return e ? Ko(this, t, e) : Ko(this, this, t), this.onChange(), this
        }
        dot(t) {
            return yh(this, t)
        }
        fromMatrix3(t) {
            return mh(this, t), this.onChange(), this
        }
        fromEuler(t) {
            return gh(this, t, t.order), this
        }
        fromAxisAngle(t, e) {
            return lh(this, t, e), this
        }
        slerp(t, e) {
            return fh(this, this, t, e), this
        }
        fromArray(t, e = 0) {
            return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this
        }
        toArray(t = [], e = 0) {
            return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t
        }
    };
    var md = 1e-6;

    function vh(s, t) {
        return s[0] = t[0], s[1] = t[1], s[2] = t[2], s[3] = t[3], s[4] = t[4], s[5] = t[5], s[6] = t[6], s[7] = t[7], s[8] = t[8], s[9] = t[9], s[10] = t[10], s[11] = t[11], s[12] = t[12], s[13] = t[13], s[14] = t[14], s[15] = t[15], s
    }

    function wh(s, t, e, r, i, n, o, a, l, u, h, c, f, d, g, p, m) {
        return s[0] = t, s[1] = e, s[2] = r, s[3] = i, s[4] = n, s[5] = o, s[6] = a, s[7] = l, s[8] = u, s[9] = h, s[10] = c, s[11] = f, s[12] = d, s[13] = g, s[14] = p, s[15] = m, s
    }

    function Eh(s) {
        return s[0] = 1, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 1, s[6] = 0, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = 1, s[11] = 0, s[12] = 0, s[13] = 0, s[14] = 0, s[15] = 1, s
    }

    function bh(s, t) {
        let e = t[0],
            r = t[1],
            i = t[2],
            n = t[3],
            o = t[4],
            a = t[5],
            l = t[6],
            u = t[7],
            h = t[8],
            c = t[9],
            f = t[10],
            d = t[11],
            g = t[12],
            p = t[13],
            m = t[14],
            x = t[15],
            y = e * a - r * o,
            v = e * l - i * o,
            b = e * u - n * o,
            w = r * l - i * a,
            D = r * u - n * a,
            T = i * u - n * l,
            A = h * p - c * g,
            F = h * m - f * g,
            P = h * x - d * g,
            k = c * m - f * p,
            L = c * x - d * p,
            _ = f * x - d * m,
            S = y * _ - v * L + b * k + w * P - D * F + T * A;
        return S ? (S = 1 / S, s[0] = (a * _ - l * L + u * k) * S, s[1] = (i * L - r * _ - n * k) * S, s[2] = (p * T - m * D + x * w) * S, s[3] = (f * D - c * T - d * w) * S, s[4] = (l * P - o * _ - u * F) * S, s[5] = (e * _ - i * P + n * F) * S, s[6] = (m * b - g * T - x * v) * S, s[7] = (h * T - f * b + d * v) * S, s[8] = (o * L - a * P + u * A) * S, s[9] = (r * P - e * L - n * A) * S, s[10] = (g * D - p * b + x * y) * S, s[11] = (c * b - h * D - d * y) * S, s[12] = (a * F - o * k - l * A) * S, s[13] = (e * k - r * F + i * A) * S, s[14] = (p * v - g * w - m * y) * S, s[15] = (h * w - c * v + f * y) * S, s) : null
    }

    function Ch(s) {
        let t = s[0],
            e = s[1],
            r = s[2],
            i = s[3],
            n = s[4],
            o = s[5],
            a = s[6],
            l = s[7],
            u = s[8],
            h = s[9],
            c = s[10],
            f = s[11],
            d = s[12],
            g = s[13],
            p = s[14],
            m = s[15],
            x = t * o - e * n,
            y = t * a - r * n,
            v = t * l - i * n,
            b = e * a - r * o,
            w = e * l - i * o,
            D = r * l - i * a,
            T = u * g - h * d,
            A = u * p - c * d,
            F = u * m - f * d,
            P = h * p - c * g,
            k = h * m - f * g,
            L = c * m - f * p;
        return x * L - y * k + v * P + b * F - w * A + D * T
    }

    function Jo(s, t, e) {
        let r = t[0],
            i = t[1],
            n = t[2],
            o = t[3],
            a = t[4],
            l = t[5],
            u = t[6],
            h = t[7],
            c = t[8],
            f = t[9],
            d = t[10],
            g = t[11],
            p = t[12],
            m = t[13],
            x = t[14],
            y = t[15],
            v = e[0],
            b = e[1],
            w = e[2],
            D = e[3];
        return s[0] = v * r + b * a + w * c + D * p, s[1] = v * i + b * l + w * f + D * m, s[2] = v * n + b * u + w * d + D * x, s[3] = v * o + b * h + w * g + D * y, v = e[4], b = e[5], w = e[6], D = e[7], s[4] = v * r + b * a + w * c + D * p, s[5] = v * i + b * l + w * f + D * m, s[6] = v * n + b * u + w * d + D * x, s[7] = v * o + b * h + w * g + D * y, v = e[8], b = e[9], w = e[10], D = e[11], s[8] = v * r + b * a + w * c + D * p, s[9] = v * i + b * l + w * f + D * m, s[10] = v * n + b * u + w * d + D * x, s[11] = v * o + b * h + w * g + D * y, v = e[12], b = e[13], w = e[14], D = e[15], s[12] = v * r + b * a + w * c + D * p, s[13] = v * i + b * l + w * f + D * m, s[14] = v * n + b * u + w * d + D * x, s[15] = v * o + b * h + w * g + D * y, s
    }

    function Th(s, t, e) {
        let r = e[0],
            i = e[1],
            n = e[2],
            o, a, l, u, h, c, f, d, g, p, m, x;
        return t === s ? (s[12] = t[0] * r + t[4] * i + t[8] * n + t[12], s[13] = t[1] * r + t[5] * i + t[9] * n + t[13], s[14] = t[2] * r + t[6] * i + t[10] * n + t[14], s[15] = t[3] * r + t[7] * i + t[11] * n + t[15]) : (o = t[0], a = t[1], l = t[2], u = t[3], h = t[4], c = t[5], f = t[6], d = t[7], g = t[8], p = t[9], m = t[10], x = t[11], s[0] = o, s[1] = a, s[2] = l, s[3] = u, s[4] = h, s[5] = c, s[6] = f, s[7] = d, s[8] = g, s[9] = p, s[10] = m, s[11] = x, s[12] = o * r + h * i + g * n + t[12], s[13] = a * r + c * i + p * n + t[13], s[14] = l * r + f * i + m * n + t[14], s[15] = u * r + d * i + x * n + t[15]), s
    }

    function Fh(s, t, e) {
        let r = e[0],
            i = e[1],
            n = e[2];
        return s[0] = t[0] * r, s[1] = t[1] * r, s[2] = t[2] * r, s[3] = t[3] * r, s[4] = t[4] * i, s[5] = t[5] * i, s[6] = t[6] * i, s[7] = t[7] * i, s[8] = t[8] * n, s[9] = t[9] * n, s[10] = t[10] * n, s[11] = t[11] * n, s[12] = t[12], s[13] = t[13], s[14] = t[14], s[15] = t[15], s
    }

    function Ah(s, t, e, r) {
        let i = r[0],
            n = r[1],
            o = r[2],
            a = Math.hypot(i, n, o),
            l, u, h, c, f, d, g, p, m, x, y, v, b, w, D, T, A, F, P, k, L, _, S, U;
        return Math.abs(a) < md ? null : (a = 1 / a, i *= a, n *= a, o *= a, l = Math.sin(e), u = Math.cos(e), h = 1 - u, c = t[0], f = t[1], d = t[2], g = t[3], p = t[4], m = t[5], x = t[6], y = t[7], v = t[8], b = t[9], w = t[10], D = t[11], T = i * i * h + u, A = n * i * h + o * l, F = o * i * h - n * l, P = i * n * h - o * l, k = n * n * h + u, L = o * n * h + i * l, _ = i * o * h + n * l, S = n * o * h - i * l, U = o * o * h + u, s[0] = c * T + p * A + v * F, s[1] = f * T + m * A + b * F, s[2] = d * T + x * A + w * F, s[3] = g * T + y * A + D * F, s[4] = c * P + p * k + v * L, s[5] = f * P + m * k + b * L, s[6] = d * P + x * k + w * L, s[7] = g * P + y * k + D * L, s[8] = c * _ + p * S + v * U, s[9] = f * _ + m * S + b * U, s[10] = d * _ + x * S + w * U, s[11] = g * _ + y * S + D * U, t !== s && (s[12] = t[12], s[13] = t[13], s[14] = t[14], s[15] = t[15]), s)
    }

    function Mh(s, t) {
        return s[0] = t[12], s[1] = t[13], s[2] = t[14], s
    }

    function ta(s, t) {
        let e = t[0],
            r = t[1],
            i = t[2],
            n = t[4],
            o = t[5],
            a = t[6],
            l = t[8],
            u = t[9],
            h = t[10];
        return s[0] = Math.hypot(e, r, i), s[1] = Math.hypot(n, o, a), s[2] = Math.hypot(l, u, h), s
    }

    function Sh(s) {
        let t = s[0],
            e = s[1],
            r = s[2],
            i = s[4],
            n = s[5],
            o = s[6],
            a = s[8],
            l = s[9],
            u = s[10],
            h = t * t + e * e + r * r,
            c = i * i + n * n + o * o,
            f = a * a + l * l + u * u;
        return Math.sqrt(Math.max(h, c, f))
    }
    var Ph = function () {
        let s = [0, 0, 0];
        return function (t, e) {
            let r = s;
            ta(r, e);
            let i = 1 / r[0],
                n = 1 / r[1],
                o = 1 / r[2],
                a = e[0] * i,
                l = e[1] * n,
                u = e[2] * o,
                h = e[4] * i,
                c = e[5] * n,
                f = e[6] * o,
                d = e[8] * i,
                g = e[9] * n,
                p = e[10] * o,
                m = a + c + p,
                x = 0;
            return m > 0 ? (x = Math.sqrt(m + 1) * 2, t[3] = .25 * x, t[0] = (f - g) / x, t[1] = (d - u) / x, t[2] = (l - h) / x) : a > c && a > p ? (x = Math.sqrt(1 + a - c - p) * 2, t[3] = (f - g) / x, t[0] = .25 * x, t[1] = (l + h) / x, t[2] = (d + u) / x) : c > p ? (x = Math.sqrt(1 + c - a - p) * 2, t[3] = (d - u) / x, t[0] = (l + h) / x, t[1] = .25 * x, t[2] = (f + g) / x) : (x = Math.sqrt(1 + p - a - c) * 2, t[3] = (l - h) / x, t[0] = (d + u) / x, t[1] = (f + g) / x, t[2] = .25 * x), t
        }
    }();

    function zh(s, t, e, r) {
        let i = t[0],
            n = t[1],
            o = t[2],
            a = t[3],
            l = i + i,
            u = n + n,
            h = o + o,
            c = i * l,
            f = i * u,
            d = i * h,
            g = n * u,
            p = n * h,
            m = o * h,
            x = a * l,
            y = a * u,
            v = a * h,
            b = r[0],
            w = r[1],
            D = r[2];
        return s[0] = (1 - (g + m)) * b, s[1] = (f + v) * b, s[2] = (d - y) * b, s[3] = 0, s[4] = (f - v) * w, s[5] = (1 - (c + m)) * w, s[6] = (p + x) * w, s[7] = 0, s[8] = (d + y) * D, s[9] = (p - x) * D, s[10] = (1 - (c + g)) * D, s[11] = 0, s[12] = e[0], s[13] = e[1], s[14] = e[2], s[15] = 1, s
    }

    function Lh(s, t) {
        let e = t[0],
            r = t[1],
            i = t[2],
            n = t[3],
            o = e + e,
            a = r + r,
            l = i + i,
            u = e * o,
            h = r * o,
            c = r * a,
            f = i * o,
            d = i * a,
            g = i * l,
            p = n * o,
            m = n * a,
            x = n * l;
        return s[0] = 1 - c - g, s[1] = h + x, s[2] = f - m, s[3] = 0, s[4] = h - x, s[5] = 1 - u - g, s[6] = d + p, s[7] = 0, s[8] = f + m, s[9] = d - p, s[10] = 1 - u - c, s[11] = 0, s[12] = 0, s[13] = 0, s[14] = 0, s[15] = 1, s
    }

    function kh(s, t, e, r, i) {
        let n = 1 / Math.tan(t / 2),
            o = 1 / (r - i);
        return s[0] = n / e, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = n, s[6] = 0, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = (i + r) * o, s[11] = -1, s[12] = 0, s[13] = 0, s[14] = 2 * i * r * o, s[15] = 0, s
    }

    function Oh(s, t, e, r, i, n, o) {
        let a = 1 / (t - e),
            l = 1 / (r - i),
            u = 1 / (n - o);
        return s[0] = -2 * a, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = -2 * l, s[6] = 0, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = 2 * u, s[11] = 0, s[12] = (t + e) * a, s[13] = (i + r) * l, s[14] = (o + n) * u, s[15] = 1, s
    }

    function Rh(s, t, e, r) {
        let i = t[0],
            n = t[1],
            o = t[2],
            a = r[0],
            l = r[1],
            u = r[2],
            h = i - e[0],
            c = n - e[1],
            f = o - e[2],
            d = h * h + c * c + f * f;
        d === 0 ? f = 1 : (d = 1 / Math.sqrt(d), h *= d, c *= d, f *= d);
        let g = l * f - u * c,
            p = u * h - a * f,
            m = a * c - l * h;
        return d = g * g + p * p + m * m, d === 0 && (u ? a += 1e-6 : l ? u += 1e-6 : l += 1e-6, g = l * f - u * c, p = u * h - a * f, m = a * c - l * h, d = g * g + p * p + m * m), d = 1 / Math.sqrt(d), g *= d, p *= d, m *= d, s[0] = g, s[1] = p, s[2] = m, s[3] = 0, s[4] = c * m - f * p, s[5] = f * g - h * m, s[6] = h * p - c * g, s[7] = 0, s[8] = h, s[9] = c, s[10] = f, s[11] = 0, s[12] = i, s[13] = n, s[14] = o, s[15] = 1, s
    }
    var de = class extends Array {
        constructor(t = 1, e = 0, r = 0, i = 0, n = 0, o = 1, a = 0, l = 0, u = 0, h = 0, c = 1, f = 0, d = 0, g = 0, p = 0, m = 1) {
            super(t, e, r, i, n, o, a, l, u, h, c, f, d, g, p, m);
            return this
        }
        get x() {
            return this[12]
        }
        get y() {
            return this[13]
        }
        get z() {
            return this[14]
        }
        get w() {
            return this[15]
        }
        set x(t) {
            this[12] = t
        }
        set y(t) {
            this[13] = t
        }
        set z(t) {
            this[14] = t
        }
        set w(t) {
            this[15] = t
        }
        set(t, e, r, i, n, o, a, l, u, h, c, f, d, g, p, m) {
            return t.length ? this.copy(t) : (wh(this, t, e, r, i, n, o, a, l, u, h, c, f, d, g, p, m), this)
        }
        translate(t, e = this) {
            return Th(this, e, t), this
        }
        rotate(t, e, r = this) {
            return Ah(this, r, t, e), this
        }
        scale(t, e = this) {
            return Fh(this, e, typeof t == "number" ? [t, t, t] : t), this
        }
        multiply(t, e) {
            return e ? Jo(this, t, e) : Jo(this, this, t), this
        }
        identity() {
            return Eh(this), this
        }
        copy(t) {
            return vh(this, t), this
        }
        fromPerspective({
            fov: t,
            aspect: e,
            near: r,
            far: i
        } = {}) {
            return kh(this, t, e, r, i), this
        }
        fromOrthogonal({
            left: t,
            right: e,
            bottom: r,
            top: i,
            near: n,
            far: o
        }) {
            return Oh(this, t, e, r, i, n, o), this
        }
        fromQuaternion(t) {
            return Lh(this, t), this
        }
        setPosition(t) {
            return this.x = t[0], this.y = t[1], this.z = t[2], this
        }
        inverse(t = this) {
            return bh(this, t), this
        }
        compose(t, e, r) {
            return zh(this, t, e, r), this
        }
        getRotation(t) {
            return Ph(t, this), this
        }
        getTranslation(t) {
            return Mh(t, this), this
        }
        getScaling(t) {
            return ta(t, this), this
        }
        getMaxScaleOnAxis() {
            return Sh(this)
        }
        lookAt(t, e, r) {
            return Rh(this, t, e, r), this
        }
        determinant() {
            return Ch(this)
        }
        fromArray(t, e = 0) {
            return this[0] = t[e], this[1] = t[e + 1], this[2] = t[e + 2], this[3] = t[e + 3], this[4] = t[e + 4], this[5] = t[e + 5], this[6] = t[e + 6], this[7] = t[e + 7], this[8] = t[e + 8], this[9] = t[e + 9], this[10] = t[e + 10], this[11] = t[e + 11], this[12] = t[e + 12], this[13] = t[e + 13], this[14] = t[e + 14], this[15] = t[e + 15], this
        }
        toArray(t = [], e = 0) {
            return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t[e + 3] = this[3], t[e + 4] = this[4], t[e + 5] = this[5], t[e + 6] = this[6], t[e + 7] = this[7], t[e + 8] = this[8], t[e + 9] = this[9], t[e + 10] = this[10], t[e + 11] = this[11], t[e + 12] = this[12], t[e + 13] = this[13], t[e + 14] = this[14], t[e + 15] = this[15], t
        }
    };

    function Bh(s, t, e = "YXZ") {
        return e === "XYZ" ? (s[1] = Math.asin(Math.min(Math.max(t[8], -1), 1)), Math.abs(t[8]) < .99999 ? (s[0] = Math.atan2(-t[9], t[10]), s[2] = Math.atan2(-t[4], t[0])) : (s[0] = Math.atan2(t[6], t[5]), s[2] = 0)) : e === "YXZ" ? (s[0] = Math.asin(-Math.min(Math.max(t[9], -1), 1)), Math.abs(t[9]) < .99999 ? (s[1] = Math.atan2(t[8], t[10]), s[2] = Math.atan2(t[1], t[5])) : (s[1] = Math.atan2(-t[2], t[0]), s[2] = 0)) : e === "ZXY" ? (s[0] = Math.asin(Math.min(Math.max(t[6], -1), 1)), Math.abs(t[6]) < .99999 ? (s[1] = Math.atan2(-t[2], t[10]), s[2] = Math.atan2(-t[4], t[5])) : (s[1] = 0, s[2] = Math.atan2(t[1], t[0]))) : e === "ZYX" ? (s[1] = Math.asin(-Math.min(Math.max(t[2], -1), 1)), Math.abs(t[2]) < .99999 ? (s[0] = Math.atan2(t[6], t[10]), s[2] = Math.atan2(t[1], t[0])) : (s[0] = 0, s[2] = Math.atan2(-t[4], t[5]))) : e === "YZX" ? (s[2] = Math.asin(Math.min(Math.max(t[1], -1), 1)), Math.abs(t[1]) < .99999 ? (s[0] = Math.atan2(-t[9], t[5]), s[1] = Math.atan2(-t[2], t[0])) : (s[0] = 0, s[1] = Math.atan2(t[8], t[10]))) : e === "XZY" && (s[2] = Math.asin(-Math.min(Math.max(t[4], -1), 1)), Math.abs(t[4]) < .99999 ? (s[0] = Math.atan2(t[6], t[5]), s[1] = Math.atan2(t[8], t[0])) : (s[0] = Math.atan2(-t[9], t[10]), s[1] = 0)), s
    }
    var Ih = new de,
        ea = class extends Array {
            constructor(t = 0, e = t, r = t, i = "YXZ") {
                super(t, e, r);
                return this.order = i, this.onChange = () => {}, this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            get z() {
                return this[2]
            }
            set x(t) {
                this[0] = t, this.onChange()
            }
            set y(t) {
                this[1] = t, this.onChange()
            }
            set z(t) {
                this[2] = t, this.onChange()
            }
            set(t, e = t, r = t) {
                return t.length ? this.copy(t) : (this[0] = t, this[1] = e, this[2] = r, this.onChange(), this)
            }
            copy(t) {
                return this[0] = t[0], this[1] = t[1], this[2] = t[2], this.onChange(), this
            }
            reorder(t) {
                return this.order = t, this.onChange(), this
            }
            fromRotationMatrix(t, e = this.order) {
                return Bh(this, t, e), this
            }
            fromQuaternion(t, e = this.order) {
                return Ih.fromQuaternion(t), this.fromRotationMatrix(Ih, e)
            }
            toArray(t = [], e = 0) {
                return t[e] = this[0], t[e + 1] = this[1], t[e + 2] = this[2], t
            }
        };
    var $t = class {
        constructor() {
            this.parent = null, this.children = [], this.visible = !0, this.matrix = new de, this.worldMatrix = new de, this.matrixAutoUpdate = !0, this.position = new et, this.quaternion = new Zo, this.scale = new et(1), this.rotation = new ea, this.up = new et(0, 1, 0), this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation), this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion)
        }
        setParent(t, e = !0) {
            this.parent && t !== this.parent && this.parent.removeChild(this, !1), this.parent = t, e && t && t.addChild(this, !1)
        }
        addChild(t, e = !0) {
            ~this.children.indexOf(t) || this.children.push(t), e && t.setParent(this, !1)
        }
        removeChild(t, e = !0) {
            ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1), e && t.setParent(null, !1)
        }
        updateMatrixWorld(t) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.worldMatrixNeedsUpdate || t) && (this.parent === null ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = !1, t = !0);
            for (let e = 0, r = this.children.length; e < r; e++) this.children[e].updateMatrixWorld(t)
        }
        updateMatrix() {
            this.matrix.compose(this.quaternion, this.position, this.scale), this.worldMatrixNeedsUpdate = !0
        }
        traverse(t) {
            if (!t(this))
                for (let e = 0, r = this.children.length; e < r; e++) this.children[e].traverse(t)
        }
        decompose() {
            this.matrix.getTranslation(this.position), this.matrix.getRotation(this.quaternion), this.matrix.getScaling(this.scale), this.rotation.fromQuaternion(this.quaternion)
        }
        lookAt(t, e = !1) {
            e ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up), this.matrix.getRotation(this.quaternion), this.rotation.fromQuaternion(this.quaternion)
        }
    };
    var gd = new de,
        xd = new et,
        Dd = new et,
        sr = class extends $t {
            constructor(t, {
                near: e = .1,
                far: r = 100,
                fov: i = 45,
                aspect: n = 1,
                left: o,
                right: a,
                bottom: l,
                top: u,
                zoom: h = 1
            } = {}) {
                super();
                Object.assign(this, {
                    near: e,
                    far: r,
                    fov: i,
                    aspect: n,
                    left: o,
                    right: a,
                    bottom: l,
                    top: u,
                    zoom: h
                }), this.projectionMatrix = new de, this.viewMatrix = new de, this.projectionViewMatrix = new de, this.worldPosition = new et, this.type = o || a ? "orthographic" : "perspective", this.type === "orthographic" ? this.orthographic() : this.perspective()
            }
            perspective({
                near: t = this.near,
                far: e = this.far,
                fov: r = this.fov,
                aspect: i = this.aspect
            } = {}) {
                return Object.assign(this, {
                    near: t,
                    far: e,
                    fov: r,
                    aspect: i
                }), this.projectionMatrix.fromPerspective({
                    fov: r * (Math.PI / 180),
                    aspect: i,
                    near: t,
                    far: e
                }), this.type = "perspective", this
            }
            orthographic({
                near: t = this.near,
                far: e = this.far,
                left: r = this.left,
                right: i = this.right,
                bottom: n = this.bottom,
                top: o = this.top,
                zoom: a = this.zoom
            } = {}) {
                return Object.assign(this, {
                    near: t,
                    far: e,
                    left: r,
                    right: i,
                    bottom: n,
                    top: o,
                    zoom: a
                }), r /= a, i /= a, n /= a, o /= a, this.projectionMatrix.fromOrthogonal({
                    left: r,
                    right: i,
                    bottom: n,
                    top: o,
                    near: t,
                    far: e
                }), this.type = "orthographic", this
            }
            updateMatrixWorld() {
                return super.updateMatrixWorld(), this.viewMatrix.inverse(this.worldMatrix), this.worldMatrix.getTranslation(this.worldPosition), this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix), this
            }
            lookAt(t) {
                return super.lookAt(t, !0), this
            }
            project(t) {
                return t.applyMatrix4(this.viewMatrix), t.applyMatrix4(this.projectionMatrix), this
            }
            unproject(t) {
                return t.applyMatrix4(gd.inverse(this.projectionMatrix)), t.applyMatrix4(this.worldMatrix), this
            }
            updateFrustum() {
                this.frustum || (this.frustum = [new et, new et, new et, new et, new et, new et]);
                let t = this.projectionViewMatrix;
                this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12], this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12], this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13], this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13], this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14], this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14];
                for (let e = 0; e < 6; e++) {
                    let r = 1 / this.frustum[e].distance();
                    this.frustum[e].multiply(r), this.frustum[e].constant *= r
                }
            }
            frustumIntersectsMesh(t) {
                if (!t.geometry.attributes.position || ((!t.geometry.bounds || t.geometry.bounds.radius === 1 / 0) && t.geometry.computeBoundingSphere(), !t.geometry.bounds)) return !0;
                let e = xd;
                e.copy(t.geometry.bounds.center), e.applyMatrix4(t.worldMatrix);
                let r = t.geometry.bounds.radius * t.worldMatrix.getMaxScaleOnAxis();
                return this.frustumIntersectsSphere(e, r)
            }
            frustumIntersectsSphere(t, e) {
                let r = Dd;
                for (let i = 0; i < 6; i++) {
                    let n = this.frustum[i];
                    if (r.copy(n).dot(t) + n.constant < -e) return !1
                }
                return !0
            }
        };

    function Nh(s, t) {
        return s[0] = t[0], s[1] = t[1], s[2] = t[2], s[3] = t[4], s[4] = t[5], s[5] = t[6], s[6] = t[8], s[7] = t[9], s[8] = t[10], s
    }

    function Vh(s, t) {
        let e = t[0],
            r = t[1],
            i = t[2],
            n = t[3],
            o = e + e,
            a = r + r,
            l = i + i,
            u = e * o,
            h = r * o,
            c = r * a,
            f = i * o,
            d = i * a,
            g = i * l,
            p = n * o,
            m = n * a,
            x = n * l;
        return s[0] = 1 - c - g, s[3] = h - x, s[6] = f + m, s[1] = h + x, s[4] = 1 - u - g, s[7] = d - p, s[2] = f - m, s[5] = d + p, s[8] = 1 - u - c, s
    }

    function Uh(s, t) {
        return s[0] = t[0], s[1] = t[1], s[2] = t[2], s[3] = t[3], s[4] = t[4], s[5] = t[5], s[6] = t[6], s[7] = t[7], s[8] = t[8], s
    }

    function jh(s, t, e, r, i, n, o, a, l, u) {
        return s[0] = t, s[1] = e, s[2] = r, s[3] = i, s[4] = n, s[5] = o, s[6] = a, s[7] = l, s[8] = u, s
    }

    function qh(s) {
        return s[0] = 1, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 1, s[5] = 0, s[6] = 0, s[7] = 0, s[8] = 1, s
    }

    function Wh(s, t) {
        let e = t[0],
            r = t[1],
            i = t[2],
            n = t[3],
            o = t[4],
            a = t[5],
            l = t[6],
            u = t[7],
            h = t[8],
            c = h * o - a * u,
            f = -h * n + a * l,
            d = u * n - o * l,
            g = e * c + r * f + i * d;
        return g ? (g = 1 / g, s[0] = c * g, s[1] = (-h * r + i * u) * g, s[2] = (a * r - i * o) * g, s[3] = f * g, s[4] = (h * e - i * l) * g, s[5] = (-a * e + i * n) * g, s[6] = d * g, s[7] = (-u * e + r * l) * g, s[8] = (o * e - r * n) * g, s) : null
    }

    function ra(s, t, e) {
        let r = t[0],
            i = t[1],
            n = t[2],
            o = t[3],
            a = t[4],
            l = t[5],
            u = t[6],
            h = t[7],
            c = t[8],
            f = e[0],
            d = e[1],
            g = e[2],
            p = e[3],
            m = e[4],
            x = e[5],
            y = e[6],
            v = e[7],
            b = e[8];
        return s[0] = f * r + d * o + g * u, s[1] = f * i + d * a + g * h, s[2] = f * n + d * l + g * c, s[3] = p * r + m * o + x * u, s[4] = p * i + m * a + x * h, s[5] = p * n + m * l + x * c, s[6] = y * r + v * o + b * u, s[7] = y * i + v * a + b * h, s[8] = y * n + v * l + b * c, s
    }

    function Yh(s, t, e) {
        let r = t[0],
            i = t[1],
            n = t[2],
            o = t[3],
            a = t[4],
            l = t[5],
            u = t[6],
            h = t[7],
            c = t[8],
            f = e[0],
            d = e[1];
        return s[0] = r, s[1] = i, s[2] = n, s[3] = o, s[4] = a, s[5] = l, s[6] = f * r + d * o + u, s[7] = f * i + d * a + h, s[8] = f * n + d * l + c, s
    }

    function Gh(s, t, e) {
        let r = t[0],
            i = t[1],
            n = t[2],
            o = t[3],
            a = t[4],
            l = t[5],
            u = t[6],
            h = t[7],
            c = t[8],
            f = Math.sin(e),
            d = Math.cos(e);
        return s[0] = d * r + f * o, s[1] = d * i + f * a, s[2] = d * n + f * l, s[3] = d * o - f * r, s[4] = d * a - f * i, s[5] = d * l - f * n, s[6] = u, s[7] = h, s[8] = c, s
    }

    function Xh(s, t, e) {
        let r = e[0],
            i = e[1];
        return s[0] = r * t[0], s[1] = r * t[1], s[2] = r * t[2], s[3] = i * t[3], s[4] = i * t[4], s[5] = i * t[5], s[6] = t[6], s[7] = t[7], s[8] = t[8], s
    }

    function Hh(s, t) {
        let e = t[0],
            r = t[1],
            i = t[2],
            n = t[3],
            o = t[4],
            a = t[5],
            l = t[6],
            u = t[7],
            h = t[8],
            c = t[9],
            f = t[10],
            d = t[11],
            g = t[12],
            p = t[13],
            m = t[14],
            x = t[15],
            y = e * a - r * o,
            v = e * l - i * o,
            b = e * u - n * o,
            w = r * l - i * a,
            D = r * u - n * a,
            T = i * u - n * l,
            A = h * p - c * g,
            F = h * m - f * g,
            P = h * x - d * g,
            k = c * m - f * p,
            L = c * x - d * p,
            _ = f * x - d * m,
            S = y * _ - v * L + b * k + w * P - D * F + T * A;
        return S ? (S = 1 / S, s[0] = (a * _ - l * L + u * k) * S, s[1] = (l * P - o * _ - u * F) * S, s[2] = (o * L - a * P + u * A) * S, s[3] = (i * L - r * _ - n * k) * S, s[4] = (e * _ - i * P + n * F) * S, s[5] = (r * P - e * L - n * A) * S, s[6] = (p * T - m * D + x * w) * S, s[7] = (m * b - g * T - x * v) * S, s[8] = (g * D - p * b + x * y) * S, s) : null
    }
    var sa = class extends Array {
        constructor(t = 1, e = 0, r = 0, i = 0, n = 1, o = 0, a = 0, l = 0, u = 1) {
            super(t, e, r, i, n, o, a, l, u);
            return this
        }
        set(t, e, r, i, n, o, a, l, u) {
            return t.length ? this.copy(t) : (jh(this, t, e, r, i, n, o, a, l, u), this)
        }
        translate(t, e = this) {
            return Yh(this, e, t), this
        }
        rotate(t, e = this) {
            return Gh(this, e, t), this
        }
        scale(t, e = this) {
            return Xh(this, e, t), this
        }
        multiply(t, e) {
            return e ? ra(this, t, e) : ra(this, this, t), this
        }
        identity() {
            return qh(this), this
        }
        copy(t) {
            return Uh(this, t), this
        }
        fromMatrix4(t) {
            return Nh(this, t), this
        }
        fromQuaternion(t) {
            return Vh(this, t), this
        }
        fromBasis(t, e, r) {
            return this.set(t[0], t[1], t[2], e[0], e[1], e[2], r[0], r[1], r[2]), this
        }
        inverse(t = this) {
            return Wh(this, t), this
        }
        getNormalMatrix(t) {
            return Hh(this, t), this
        }
    };
    var yd = 0,
        qt = class extends $t {
            constructor(t, {
                geometry: e,
                program: r,
                mode: i = t.TRIANGLES,
                frustumCulled: n = !0,
                renderOrder: o = 0
            } = {}) {
                super();
                t.canvas || console.error("gl not passed as first argument to Mesh"), this.gl = t, this.id = yd++, this.geometry = e, this.program = r, this.mode = i, this.frustumCulled = n, this.renderOrder = o, this.modelViewMatrix = new de, this.normalMatrix = new sa, this.beforeRenderCallbacks = [], this.afterRenderCallbacks = []
            }
            onBeforeRender(t) {
                return this.beforeRenderCallbacks.push(t), this
            }
            onAfterRender(t) {
                return this.afterRenderCallbacks.push(t), this
            }
            draw({
                camera: t
            } = {}) {
                this.beforeRenderCallbacks.forEach(r => r && r({
                    mesh: this,
                    camera: t
                })), t && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
                    modelMatrix: {
                        value: null
                    },
                    viewMatrix: {
                        value: null
                    },
                    modelViewMatrix: {
                        value: null
                    },
                    normalMatrix: {
                        value: null
                    },
                    projectionMatrix: {
                        value: null
                    },
                    cameraPosition: {
                        value: null
                    }
                }), this.program.uniforms.projectionMatrix.value = t.projectionMatrix, this.program.uniforms.cameraPosition.value = t.worldPosition, this.program.uniforms.viewMatrix.value = t.viewMatrix, this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix), this.normalMatrix.getNormalMatrix(this.modelViewMatrix), this.program.uniforms.modelMatrix.value = this.worldMatrix, this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix, this.program.uniforms.normalMatrix.value = this.normalMatrix);
                let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
                this.program.use({
                    flipFaces: e
                }), this.geometry.draw({
                    mode: this.mode,
                    program: this.program
                }), this.afterRenderCallbacks.forEach(r => r && r({
                    mesh: this,
                    camera: t
                }))
            }
        };
    var $h = new Uint8Array(4);

    function Qh(s) {
        return (s & s - 1) == 0
    }
    var _d = 1,
        ir = class {
            constructor(t, {
                image: e,
                target: r = t.TEXTURE_2D,
                type: i = t.UNSIGNED_BYTE,
                format: n = t.RGBA,
                internalFormat: o = n,
                wrapS: a = t.CLAMP_TO_EDGE,
                wrapT: l = t.CLAMP_TO_EDGE,
                generateMipmaps: u = !0,
                minFilter: h = u ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR,
                magFilter: c = t.LINEAR,
                premultiplyAlpha: f = !1,
                unpackAlignment: d = 4,
                flipY: g = r == t.TEXTURE_2D,
                anisotropy: p = 0,
                level: m = 0,
                width: x,
                height: y = x
            } = {}) {
                this.gl = t, this.id = _d++, this.image = e, this.target = r, this.type = i, this.format = n, this.internalFormat = o, this.minFilter = h, this.magFilter = c, this.wrapS = a, this.wrapT = l, this.generateMipmaps = u, this.premultiplyAlpha = f, this.unpackAlignment = d, this.flipY = g, this.anisotropy = Math.min(p, this.gl.renderer.parameters.maxAnisotropy), this.level = m, this.width = x, this.height = y, this.texture = this.gl.createTexture(), this.store = {
                    image: null
                }, this.glState = this.gl.renderer.state, this.state = {}, this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR, this.state.magFilter = this.gl.LINEAR, this.state.wrapS = this.gl.REPEAT, this.state.wrapT = this.gl.REPEAT, this.state.anisotropy = 0
            }
            bind() {
                this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture), this.glState.textureUnits[this.glState.activeTextureUnit] = this.id)
            }
            update(t = 0) {
                let e = !(this.image === this.store.image && !this.needsUpdate);
                if ((e || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t), this.bind()), !!e) {
                    if (this.needsUpdate = !1, this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), this.glState.flipY = this.flipY), this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), this.glState.premultiplyAlpha = this.premultiplyAlpha), this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment), this.glState.unpackAlignment = this.unpackAlignment), this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter), this.state.minFilter = this.minFilter), this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter), this.state.magFilter = this.magFilter), this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS), this.state.wrapS = this.wrapS), this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT), this.state.wrapT = this.wrapT), this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy), this.state.anisotropy = this.anisotropy), this.image) {
                        if (this.image.width && (this.width = this.image.width, this.height = this.image.height), this.target === this.gl.TEXTURE_CUBE_MAP)
                            for (let r = 0; r < 6; r++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + r, this.level, this.internalFormat, this.format, this.type, this.image[r]);
                        else if (ArrayBuffer.isView(this.image)) this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
                        else if (this.image.isCompressedTexture)
                            for (let r = 0; r < this.image.length; r++) this.gl.compressedTexImage2D(this.target, r, this.internalFormat, this.image[r].width, this.image[r].height, 0, this.image[r].data);
                        else this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
                        this.generateMipmaps && (!this.gl.renderer.isWebgl2 && (!Qh(this.image.width) || !Qh(this.image.height)) ? (this.generateMipmaps = !1, this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE, this.minFilter = this.gl.LINEAR) : this.gl.generateMipmap(this.target)), this.onUpdate && this.onUpdate()
                    } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
                        for (let r = 0; r < 6; r++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, $h);
                    else this.width ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, $h);
                    this.store.image = this.image
                }
            }
        };
    var $i = class {
        constructor(t, {
            width: e = t.canvas.width,
            height: r = t.canvas.height,
            target: i = t.FRAMEBUFFER,
            color: n = 1,
            depth: o = !0,
            stencil: a = !1,
            depthTexture: l = !1,
            wrapS: u = t.CLAMP_TO_EDGE,
            wrapT: h = t.CLAMP_TO_EDGE,
            minFilter: c = t.LINEAR,
            magFilter: f = c,
            type: d = t.UNSIGNED_BYTE,
            format: g = t.RGBA,
            internalFormat: p = g,
            unpackAlignment: m,
            premultiplyAlpha: x
        } = {}) {
            this.gl = t, this.width = e, this.height = r, this.depth = o, this.buffer = this.gl.createFramebuffer(), this.target = i, this.gl.renderer.bindFramebuffer(this), this.textures = [];
            let y = [];
            for (let v = 0; v < n; v++) this.textures.push(new ir(t, {
                width: e,
                height: r,
                wrapS: u,
                wrapT: h,
                minFilter: c,
                magFilter: f,
                type: d,
                format: g,
                internalFormat: p,
                unpackAlignment: m,
                premultiplyAlpha: x,
                flipY: !1,
                generateMipmaps: !1
            })), this.textures[v].update(), this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + v, this.gl.TEXTURE_2D, this.textures[v].texture, 0), y.push(this.gl.COLOR_ATTACHMENT0 + v);
            y.length > 1 && this.gl.renderer.drawBuffers(y), this.texture = this.textures[0], l && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture")) ? (this.depthTexture = new ir(t, {
                width: e,
                height: r,
                minFilter: this.gl.NEAREST,
                magFilter: this.gl.NEAREST,
                format: this.gl.DEPTH_COMPONENT,
                internalFormat: t.renderer.isWebgl2 ? this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
                type: this.gl.UNSIGNED_INT
            }), this.depthTexture.update(), this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (o && !a && (this.depthBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, e, r), this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer)), a && !o && (this.stencilBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, e, r), this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer)), o && a && (this.depthStencilBuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, e, r), this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer))), this.gl.renderer.bindFramebuffer({
                target: this.target
            })
        }
        setSize(t, e) {
            if (!(this.width === t && this.height === e)) {
                this.width = t, this.height = e, this.gl.renderer.bindFramebuffer(this);
                for (let r = 0; r < this.textures.length; r++) this.textures[r].width = t, this.textures[r].height = e, this.textures[r].needsUpdate = !0, this.textures[r].update(), this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + r, this.gl.TEXTURE_2D, this.textures[r].texture, 0);
                this.depthTexture ? (this.depthTexture.width = t, this.depthTexture.height = e, this.depthTexture.needsUpdate = !0, this.depthTexture.update(), this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (this.depthBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, t, e)), this.stencilBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, t, e)), this.depthStencilBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, t, e))), this.gl.renderer.bindFramebuffer({
                    target: this.target
                })
            }
        }
    };

    function Kh(s, t) {
        return s[0] = t[0], s[1] = t[1], s
    }

    function Zh(s, t, e) {
        return s[0] = t, s[1] = e, s
    }

    function ia(s, t, e) {
        return s[0] = t[0] + e[0], s[1] = t[1] + e[1], s
    }

    function na(s, t, e) {
        return s[0] = t[0] - e[0], s[1] = t[1] - e[1], s
    }

    function Jh(s, t, e) {
        return s[0] = t[0] * e[0], s[1] = t[1] * e[1], s
    }

    function tc(s, t, e) {
        return s[0] = t[0] / e[0], s[1] = t[1] / e[1], s
    }

    function Qi(s, t, e) {
        return s[0] = t[0] * e, s[1] = t[1] * e, s
    }

    function ec(s, t) {
        var e = t[0] - s[0],
            r = t[1] - s[1];
        return Math.sqrt(e * e + r * r)
    }

    function rc(s, t) {
        var e = t[0] - s[0],
            r = t[1] - s[1];
        return e * e + r * r
    }

    function oa(s) {
        var t = s[0],
            e = s[1];
        return Math.sqrt(t * t + e * e)
    }

    function sc(s) {
        var t = s[0],
            e = s[1];
        return t * t + e * e
    }

    function ic(s, t) {
        return s[0] = -t[0], s[1] = -t[1], s
    }

    function nc(s, t) {
        return s[0] = 1 / t[0], s[1] = 1 / t[1], s
    }

    function oc(s, t) {
        var e = t[0],
            r = t[1],
            i = e * e + r * r;
        return i > 0 && (i = 1 / Math.sqrt(i)), s[0] = t[0] * i, s[1] = t[1] * i, s
    }

    function ac(s, t) {
        return s[0] * t[0] + s[1] * t[1]
    }

    function aa(s, t) {
        return s[0] * t[1] - s[1] * t[0]
    }

    function lc(s, t, e, r) {
        var i = t[0],
            n = t[1];
        return s[0] = i + r * (e[0] - i), s[1] = n + r * (e[1] - n), s
    }

    function uc(s, t, e) {
        var r = t[0],
            i = t[1];
        return s[0] = e[0] * r + e[3] * i + e[6], s[1] = e[1] * r + e[4] * i + e[7], s
    }

    function hc(s, t, e) {
        let r = t[0],
            i = t[1];
        return s[0] = e[0] * r + e[4] * i + e[12], s[1] = e[1] * r + e[5] * i + e[13], s
    }

    function cc(s, t) {
        return s[0] === t[0] && s[1] === t[1]
    }
    var bt = class extends Array {
        constructor(t = 0, e = t) {
            super(t, e);
            return this
        }
        get x() {
            return this[0]
        }
        get y() {
            return this[1]
        }
        set x(t) {
            this[0] = t
        }
        set y(t) {
            this[1] = t
        }
        set(t, e = t) {
            return t.length ? this.copy(t) : (Zh(this, t, e), this)
        }
        copy(t) {
            return Kh(this, t), this
        }
        add(t, e) {
            return e ? ia(this, t, e) : ia(this, this, t), this
        }
        sub(t, e) {
            return e ? na(this, t, e) : na(this, this, t), this
        }
        multiply(t) {
            return t.length ? Jh(this, this, t) : Qi(this, this, t), this
        }
        divide(t) {
            return t.length ? tc(this, this, t) : Qi(this, this, 1 / t), this
        }
        inverse(t = this) {
            return nc(this, t), this
        }
        len() {
            return oa(this)
        }
        distance(t) {
            return t ? ec(this, t) : oa(this)
        }
        squaredLen() {
            return this.squaredDistance()
        }
        squaredDistance(t) {
            return t ? rc(this, t) : sc(this)
        }
        negate(t = this) {
            return ic(this, t), this
        }
        cross(t, e) {
            return e ? aa(t, e) : aa(this, t)
        }
        scale(t) {
            return Qi(this, this, t), this
        }
        normalize() {
            return oc(this, this), this
        }
        dot(t) {
            return ac(this, t)
        }
        equals(t) {
            return cc(this, t)
        }
        applyMatrix3(t) {
            return uc(this, this, t), this
        }
        applyMatrix4(t) {
            return hc(this, this, t), this
        }
        lerp(t, e) {
            return lc(this, this, t, e), this
        }
        clone() {
            return new bt(this[0], this[1])
        }
        fromArray(t, e = 0) {
            return this[0] = t[e], this[1] = t[e + 1], this
        }
        toArray(t = [], e = 0) {
            return t[e] = this[0], t[e + 1] = this[1], t
        }
    };
    var Qt = class extends jt {
        constructor(t, {
            width: e = 1,
            height: r = 1,
            widthSegments: i = 1,
            heightSegments: n = 1,
            attributes: o = {}
        } = {}) {
            let a = i,
                l = n,
                u = (a + 1) * (l + 1),
                h = a * l * 6,
                c = new Float32Array(u * 3),
                f = new Float32Array(u * 3),
                d = new Float32Array(u * 2),
                g = h > 65536 ? new Uint32Array(h) : new Uint16Array(h);
            Qt.buildPlane(c, f, d, g, e, r, 0, a, l), Object.assign(o, {
                position: {
                    size: 3,
                    data: c
                },
                normal: {
                    size: 3,
                    data: f
                },
                uv: {
                    size: 2,
                    data: d
                },
                index: {
                    data: g
                }
            });
            super(t, o)
        }
        static buildPlane(t, e, r, i, n, o, a, l, u, h = 0, c = 1, f = 2, d = 1, g = -1, p = 0, m = 0) {
            let x = p,
                y = n / l,
                v = o / u;
            for (let b = 0; b <= u; b++) {
                let w = b * v - o / 2;
                for (let D = 0; D <= l; D++, p++) {
                    let T = D * y - n / 2;
                    if (t[p * 3 + h] = T * d, t[p * 3 + c] = w * g, t[p * 3 + f] = a / 2, e[p * 3 + h] = 0, e[p * 3 + c] = 0, e[p * 3 + f] = a >= 0 ? 1 : -1, r[p * 2] = D / l, r[p * 2 + 1] = 1 - b / u, b === u || D === l) continue;
                    let A = x + D + b * (l + 1),
                        F = x + D + (b + 1) * (l + 1),
                        P = x + D + (b + 1) * (l + 1) + 1,
                        k = x + D + b * (l + 1) + 1;
                    i[m * 6] = A, i[m * 6 + 1] = F, i[m * 6 + 2] = k, i[m * 6 + 3] = F, i[m * 6 + 4] = P, i[m * 6 + 5] = k, m++
                }
            }
        }
    };
    var Ki = class extends jt {
        constructor(t, {
            width: e = 1,
            height: r = 1,
            depth: i = 1,
            widthSegments: n = 1,
            heightSegments: o = 1,
            depthSegments: a = 1,
            attributes: l = {}
        } = {}) {
            let u = n,
                h = o,
                c = a,
                f = (u + 1) * (h + 1) * 2 + (u + 1) * (c + 1) * 2 + (h + 1) * (c + 1) * 2,
                d = (u * h * 2 + u * c * 2 + h * c * 2) * 6,
                g = new Float32Array(f * 3),
                p = new Float32Array(f * 3),
                m = new Float32Array(f * 2),
                x = f > 65536 ? new Uint32Array(d) : new Uint16Array(d),
                y = 0,
                v = 0;
            Qt.buildPlane(g, p, m, x, i, r, e, c, h, 2, 1, 0, -1, -1, y, v), y += (c + 1) * (h + 1), v += c * h, Qt.buildPlane(g, p, m, x, i, r, -e, c, h, 2, 1, 0, 1, -1, y, v), y += (c + 1) * (h + 1), v += c * h, Qt.buildPlane(g, p, m, x, e, i, r, c, u, 0, 2, 1, 1, 1, y, v), y += (u + 1) * (c + 1), v += u * c, Qt.buildPlane(g, p, m, x, e, i, -r, c, u, 0, 2, 1, 1, -1, y, v), y += (u + 1) * (c + 1), v += u * c, Qt.buildPlane(g, p, m, x, e, r, -i, u, h, 0, 1, 2, -1, -1, y, v), y += (u + 1) * (h + 1), v += u * h, Qt.buildPlane(g, p, m, x, e, r, i, u, h, 0, 1, 2, 1, -1, y, v), Object.assign(l, {
                position: {
                    size: 3,
                    data: g
                },
                normal: {
                    size: 3,
                    data: p
                },
                uv: {
                    size: 2,
                    data: m
                },
                index: {
                    data: x
                }
            });
            super(t, l)
        }
    };
    var Zi = class extends jt {
        constructor(t, {
            radius: e = .5,
            widthSegments: r = 16,
            heightSegments: i = Math.ceil(r * .5),
            phiStart: n = 0,
            phiLength: o = Math.PI * 2,
            thetaStart: a = 0,
            thetaLength: l = Math.PI,
            attributes: u = {}
        } = {}) {
            let h = r,
                c = i,
                f = n,
                d = o,
                g = a,
                p = l,
                m = (h + 1) * (c + 1),
                x = h * c * 6,
                y = new Float32Array(m * 3),
                v = new Float32Array(m * 3),
                b = new Float32Array(m * 2),
                w = m > 65536 ? new Uint32Array(x) : new Uint16Array(x),
                D = 0,
                T = 0,
                A = 0,
                F = g + p,
                P = [],
                k = new et;
            for (let L = 0; L <= c; L++) {
                let _ = [],
                    S = L / c;
                for (let U = 0; U <= h; U++, D++) {
                    let M = U / h,
                        O = -e * Math.cos(f + M * d) * Math.sin(g + S * p),
                        z = e * Math.cos(g + S * p),
                        V = e * Math.sin(f + M * d) * Math.sin(g + S * p);
                    y[D * 3] = O, y[D * 3 + 1] = z, y[D * 3 + 2] = V, k.set(O, z, V).normalize(), v[D * 3] = k.x, v[D * 3 + 1] = k.y, v[D * 3 + 2] = k.z, b[D * 2] = M, b[D * 2 + 1] = 1 - S, _.push(T++)
                }
                P.push(_)
            }
            for (let L = 0; L < c; L++)
                for (let _ = 0; _ < h; _++) {
                    let S = P[L][_ + 1],
                        U = P[L][_],
                        M = P[L + 1][_],
                        O = P[L + 1][_ + 1];
                    (L !== 0 || g > 0) && (w[A * 3] = S, w[A * 3 + 1] = U, w[A * 3 + 2] = O, A++), (L !== c - 1 || F < Math.PI) && (w[A * 3] = U, w[A * 3 + 1] = M, w[A * 3 + 2] = O, A++)
                }
            Object.assign(u, {
                position: {
                    size: 3,
                    data: y
                },
                normal: {
                    size: 3,
                    data: v
                },
                uv: {
                    size: 2,
                    data: b
                },
                index: {
                    data: w
                }
            });
            super(t, u)
        }
    };
    var Ji = class extends jt {
        constructor(t, {
            radiusTop: e = .5,
            radiusBottom: r = .5,
            height: i = 1,
            radialSegments: n = 8,
            heightSegments: o = 1,
            openEnded: a = !1,
            thetaStart: l = 0,
            thetaLength: u = Math.PI * 2,
            attributes: h = {}
        } = {}) {
            let c = n,
                f = o,
                d = l,
                g = u,
                p = a ? 0 : r && e ? 2 : 1,
                m = (c + 1) * (f + 1 + p) + p,
                x = c * f * 6 + p * c * 3,
                y = new Float32Array(m * 3),
                v = new Float32Array(m * 3),
                b = new Float32Array(m * 2),
                w = m > 65536 ? new Uint32Array(x) : new Uint16Array(x),
                D = 0,
                T = 0,
                A = [];
            F(), a || (e && P(!0), r && P(!1));

            function F() {
                let k, L, _ = new et,
                    S = (r - e) / i;
                for (L = 0; L <= f; L++) {
                    let U = [],
                        M = L / f,
                        O = M * (r - e) + e;
                    for (k = 0; k <= c; k++) {
                        let z = k / c,
                            V = z * g + d,
                            G = Math.sin(V),
                            q = Math.cos(V);
                        y.set([O * G, (.5 - M) * i, O * q], D * 3), _.set(G, S, q).normalize(), v.set([_.x, _.y, _.z], D * 3), b.set([z, 1 - M], D * 2), U.push(D++)
                    }
                    A.push(U)
                }
                for (k = 0; k < c; k++)
                    for (L = 0; L < f; L++) {
                        let U = A[L][k],
                            M = A[L + 1][k],
                            O = A[L + 1][k + 1],
                            z = A[L][k + 1];
                        w.set([U, M, z, M, O, z], T * 3), T += 2
                    }
            }

            function P(k) {
                let L, _ = k === !0 ? e : r,
                    S = k === !0 ? 1 : -1,
                    U = D;
                for (y.set([0, .5 * i * S, 0], D * 3), v.set([0, S, 0], D * 3), b.set([.5, .5], D * 2), D++, L = 0; L <= c; L++) {
                    let O = L / c * g + d,
                        z = Math.cos(O),
                        V = Math.sin(O);
                    y.set([_ * V, .5 * i * S, _ * z], D * 3), v.set([0, S, 0], D * 3), b.set([z * .5 + .5, V * .5 * S + .5], D * 2), D++
                }
                for (L = 0; L < c; L++) {
                    let M = U + L + 1;
                    k ? w.set([M, M + 1, U], T * 3) : w.set([M + 1, M, U], T * 3), T++
                }
            }
            Object.assign(h, {
                position: {
                    size: 3,
                    data: y
                },
                normal: {
                    size: 3,
                    data: v
                },
                uv: {
                    size: 2,
                    data: b
                },
                index: {
                    data: w
                }
            });
            super(t, h)
        }
    };
    var Wt = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            DOLLY_PAN: 3
        },
        _r = new et,
        Ee = new bt,
        Se = new bt;

    function la(s, {
        element: t = document,
        enabled: e = !0,
        target: r = new et,
        ease: i = .25,
        inertia: n = .85,
        enableRotate: o = !0,
        rotateSpeed: a = .1,
        autoRotate: l = !1,
        autoRotateSpeed: u = 1,
        enableZoom: h = !0,
        zoomSpeed: c = 1,
        zoomStyle: f = "dolly",
        enablePan: d = !0,
        panSpeed: g = .1,
        minPolarAngle: p = 0,
        maxPolarAngle: m = Math.PI,
        minAzimuthAngle: x = -1 / 0,
        maxAzimuthAngle: y = 1 / 0,
        minDistance: v = 0,
        maxDistance: b = 1 / 0
    } = {}) {
        this.enabled = e, this.target = r, this.zoomStyle = f, i = i || 1, n = n || 0, this.minDistance = v, this.maxDistance = b;
        let w = {
                radius: 1,
                phi: 0,
                theta: 0
            },
            D = {
                radius: 1,
                phi: 0,
                theta: 0
            },
            T = {
                radius: 1,
                phi: 0,
                theta: 0
            },
            A = new et,
            F = new et;
        F.copy(s.position).sub(this.target), T.radius = D.radius = F.distance(), T.theta = D.theta = Math.atan2(F.x, F.z), T.phi = D.phi = Math.acos(Math.min(Math.max(F.y / D.radius, -1), 1)), this.offset = F, this.update = () => {
            l && V(), D.radius *= w.radius, D.theta += w.theta, D.phi += w.phi, D.theta = Math.max(x, Math.min(y, D.theta)), D.phi = Math.max(p, Math.min(m, D.phi)), D.radius = Math.max(this.minDistance, Math.min(this.maxDistance, D.radius)), T.phi += (D.phi - T.phi) * i, T.theta += (D.theta - T.theta) * i, T.radius += (D.radius - T.radius) * i, this.target.add(A);
            let R = T.radius * Math.sin(Math.max(1e-6, T.phi));
            F.x = R * Math.sin(T.theta), F.y = T.radius * Math.cos(T.phi), F.z = R * Math.cos(T.theta), s.position.copy(this.target).add(F), s.lookAt(this.target), w.theta *= n, w.phi *= n, A.multiply(n), w.radius = 1
        }, this.forcePosition = () => {
            F.copy(s.position).sub(this.target), T.radius = D.radius = F.distance(), T.theta = D.theta = Math.atan2(F.x, F.z), T.phi = D.phi = Math.acos(Math.min(Math.max(F.y / D.radius, -1), 1)), s.lookAt(this.target)
        };
        let P = new bt,
            k = new bt,
            L = new bt,
            _ = Wt.NONE;
        this.mouseButtons = {
            ORBIT: 0,
            ZOOM: 1,
            PAN: 2
        };

        function S() {
            return Math.pow(.95, c)
        }

        function U(R, nt) {
            _r.set(nt[0], nt[1], nt[2]), _r.multiply(-R), A.add(_r)
        }

        function M(R, nt) {
            _r.set(nt[4], nt[5], nt[6]), _r.multiply(R), A.add(_r)
        }
        let O = (R, nt) => {
                let Dt = t === document ? document.body : t;
                _r.copy(s.position).sub(this.target);
                let Kt = _r.distance();
                Kt *= Math.tan((s.fov || 45) / 2 * Math.PI / 180), U(2 * R * Kt / Dt.clientHeight, s.matrix), M(2 * nt * Kt / Dt.clientHeight, s.matrix)
            },
            z = R => {
                this.zoomStyle === "dolly" ? w.radius /= R : (s.fov /= R, s.type === "orthographic" ? s.orthographic() : s.perspective())
            };

        function V() {
            let R = 2 * Math.PI / 60 / 60 * u;
            w.theta -= R
        }

        function G(R, nt) {
            Ee.set(R, nt), Se.sub(Ee, P).multiply(a);
            let Dt = t === document ? document.body : t;
            w.theta -= 2 * Math.PI * Se.x / Dt.clientHeight, w.phi -= 2 * Math.PI * Se.y / Dt.clientHeight, P.copy(Ee)
        }

        function q(R) {
            Ee.set(R.clientX, R.clientY), Se.sub(Ee, L), Se.y > 0 ? z(S()) : Se.y < 0 && z(1 / S()), L.copy(Ee)
        }

        function W(R, nt) {
            Ee.set(R, nt), Se.sub(Ee, k).multiply(g), O(Se.x, Se.y), k.copy(Ee)
        }

        function X(R) {
            if (h) {
                let nt = R.touches[0].pageX - R.touches[1].pageX,
                    Dt = R.touches[0].pageY - R.touches[1].pageY,
                    Kt = Math.sqrt(nt * nt + Dt * Dt);
                L.set(0, Kt)
            }
            if (d) {
                let nt = .5 * (R.touches[0].pageX + R.touches[1].pageX),
                    Dt = .5 * (R.touches[0].pageY + R.touches[1].pageY);
                k.set(nt, Dt)
            }
        }

        function Y(R) {
            if (h) {
                let nt = R.touches[0].pageX - R.touches[1].pageX,
                    Dt = R.touches[0].pageY - R.touches[1].pageY,
                    Kt = Math.sqrt(nt * nt + Dt * Dt);
                Ee.set(0, Kt), Se.set(0, Math.pow(Ee.y / L.y, c)), z(Se.y), L.copy(Ee)
            }
            if (d) {
                let nt = .5 * (R.touches[0].pageX + R.touches[1].pageX),
                    Dt = .5 * (R.touches[0].pageY + R.touches[1].pageY);
                W(nt, Dt)
            }
        }
        let rt = R => {
                if (!!this.enabled) {
                    switch (R.button) {
                        case this.mouseButtons.ORBIT:
                            if (o === !1) return;
                            P.set(R.clientX, R.clientY), _ = Wt.ROTATE;
                            break;
                        case this.mouseButtons.ZOOM:
                            if (h === !1) return;
                            L.set(R.clientX, R.clientY), _ = Wt.DOLLY;
                            break;
                        case this.mouseButtons.PAN:
                            if (d === !1) return;
                            k.set(R.clientX, R.clientY), _ = Wt.PAN;
                            break
                    }
                    _ !== Wt.NONE && (window.addEventListener("mousemove", gt, !1), window.addEventListener("mouseup", dt, !1))
                }
            },
            gt = R => {
                if (!!this.enabled) switch (_) {
                    case Wt.ROTATE:
                        if (o === !1) return;
                        G(R.clientX, R.clientY);
                        break;
                    case Wt.DOLLY:
                        if (h === !1) return;
                        q(R);
                        break;
                    case Wt.PAN:
                        if (d === !1) return;
                        W(R.clientX, R.clientY);
                        break
                }
            },
            dt = () => {
                window.removeEventListener("mousemove", gt, !1), window.removeEventListener("mouseup", dt, !1), _ = Wt.NONE
            },
            Pt = R => {
                !this.enabled || !h || _ !== Wt.NONE && _ !== Wt.ROTATE || (R.stopPropagation(), R.preventDefault(), R.deltaY < 0 ? z(1 / S()) : R.deltaY > 0 && z(S()))
            },
            Pe = R => {
                if (!!this.enabled) switch (R.preventDefault(), R.touches.length) {
                    case 1:
                        if (o === !1) return;
                        P.set(R.touches[0].pageX, R.touches[0].pageY), _ = Wt.ROTATE;
                        break;
                    case 2:
                        if (h === !1 && d === !1) return;
                        X(R), _ = Wt.DOLLY_PAN;
                        break;
                    default:
                        _ = Wt.NONE
                }
            },
            At = R => {
                if (!!this.enabled) switch (R.preventDefault(), R.stopPropagation(), R.touches.length) {
                    case 1:
                        if (o === !1) return;
                        G(R.touches[0].pageX, R.touches[0].pageY);
                        break;
                    case 2:
                        if (h === !1 && d === !1) return;
                        Y(R);
                        break;
                    default:
                        _ = Wt.NONE
                }
            },
            Ue = () => {
                !this.enabled || (_ = Wt.NONE)
            },
            je = R => {
                !this.enabled || R.preventDefault()
            };

        function be() {
            t.addEventListener("contextmenu", je, !1), t.addEventListener("mousedown", rt, !1), t.addEventListener("wheel", Pt, {
                passive: !1
            }), t.addEventListener("touchstart", Pe, {
                passive: !1
            }), t.addEventListener("touchend", Ue, !1), t.addEventListener("touchmove", At, {
                passive: !1
            })
        }
        this.remove = function () {
            t.removeEventListener("contextmenu", je), t.removeEventListener("mousedown", rt), t.removeEventListener("wheel", Pt), t.removeEventListener("touchstart", Pe), t.removeEventListener("touchend", Ue), t.removeEventListener("touchmove", At), window.removeEventListener("mousemove", gt), window.removeEventListener("mouseup", dt)
        }, be()
    }

    function tn({
        font: s,
        text: t,
        width: e = 1 / 0,
        align: r = "left",
        size: i = 1,
        letterSpacing: n = 0,
        lineHeight: o = 1.4,
        wordSpacing: a = 0,
        wordBreak: l = !1
    }) {
        let u = this,
            h, c, f, d, g, p = /\n/,
            m = /\s/;
        x(), y();

        function x() {
            h = {}, s.chars.forEach(D => h[D.char] = D)
        }

        function y() {
            f = s.common.lineHeight, d = s.common.base, g = i / d;
            let T = t.replace(/[ \n]/g, "").length;
            c = {
                position: new Float32Array(T * 4 * 3),
                uv: new Float32Array(T * 4 * 2),
                id: new Float32Array(T * 4),
                index: new Uint16Array(T * 6)
            };
            for (let A = 0; A < T; A++) c.id.set([A, A, A, A], A * 4), c.index.set([A * 4, A * 4 + 2, A * 4 + 1, A * 4 + 1, A * 4 + 2, A * 4 + 3], A * 6);
            v()
        }

        function v() {
            let D = [],
                T = 0,
                A = 0,
                F = 0,
                P = k();

            function k() {
                let S = {
                    width: 0,
                    glyphs: []
                };
                return D.push(S), A = T, F = 0, S
            }
            let L = 100,
                _ = 0;
            for (; T < t.length && _ < L;) {
                _++;
                let S = t[T];
                if (!P.width && m.test(S)) {
                    T++, A = T, F = 0;
                    continue
                }
                if (p.test(S)) {
                    T++, P = k();
                    continue
                }
                let U = h[S] || h[" "];
                if (P.glyphs.length) {
                    let O = P.glyphs[P.glyphs.length - 1][0],
                        z = w(U.id, O.id) * g;
                    P.width += z, F += z
                }
                P.glyphs.push([U, P.width]);
                let M = 0;
                if (m.test(S) ? (A = T, F = 0, M += a * i) : M += n * i, M += U.xadvance * g, P.width += M, F += M, P.width > e) {
                    if (l && P.glyphs.length > 1) {
                        P.width -= M, P.glyphs.pop(), P = k();
                        continue
                    } else if (!l && F !== P.width) {
                        let O = T - A + 1;
                        P.glyphs.splice(-O, O), T = A, P.width -= F, P = k();
                        continue
                    }
                }
                T++, _ = 0
            }
            P.width || D.pop(), b(D)
        }

        function b(D) {
            let T = s.common.scaleW,
                A = s.common.scaleH,
                F = .07 * i,
                P = 0;
            for (let k = 0; k < D.length; k++) {
                let L = D[k];
                for (let _ = 0; _ < L.glyphs.length; _++) {
                    let S = L.glyphs[_][0],
                        U = L.glyphs[_][1];
                    if (r === "center" ? U -= L.width * .5 : r === "right" && (U -= L.width), m.test(S.char)) continue;
                    U += S.xoffset * g, F -= S.yoffset * g;
                    let M = S.width * g,
                        O = S.height * g;
                    c.position.set([U, F - O, 0, U, F, 0, U + M, F - O, 0, U + M, F, 0], P * 4 * 3);
                    let z = S.x / T,
                        V = S.width / T,
                        G = 1 - S.y / A,
                        q = S.height / A;
                    c.uv.set([z, G - q, z, G, z + V, G - q, z + V, G], P * 4 * 2), F += S.yoffset * g, P++
                }
                F -= i * o
            }
            u.buffers = c, u.numLines = D.length, u.height = u.numLines * i * o, u.width = Math.max(...D.map(k => k.width))
        }

        function w(D, T) {
            for (let A = 0; A < s.kernings.length; A++) {
                let F = s.kernings[A];
                if (!(F.first < D) && !(F.second < T)) return F.first > D || F.first === D && F.second > T ? 0 : F.amount
            }
            return 0
        }
        this.resize = function (D) {
            ({
                width: e
            } = D), v()
        }, this.update = function (D) {
            ({
                text: t
            } = D), y()
        }
    }
    var fc = "precision mediump float;attribute vec2 uv;attribute vec3 position;attribute vec3 normal;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;uniform mat3 normalMatrix;uniform float uDiff;uniform float uType;varying vec2 vUv;varying float diff;varying vec3 vNormal;vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3  ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}void main(){vUv=uv;diff=uDiff;vec3 pos=position;vec2 range=vec2(.01,.15);float bending=(cos(pos.x*2.)+cos(pos.y*3.))*.25;float effect=bending*uDiff;effect=mix(range.x,range.y,effect);pos.x+=effect-0.01;if(uType==0.0){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}else{gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);}}";
    var pc = `
#define PI 3.14159
precision mediump float;uniform sampler2D uTexture;uniform float uScale;uniform float uAlpha;uniform float uScaleChange;uniform float uReveal;uniform float uPosY;uniform vec2 uRes;uniform vec2 uPlaneSizes;uniform vec2 uSize;uniform float uType;varying float diff;varying vec2 vUv;float mapRange(float value,float min1,float max1,float min2,float max2){return min2+(value-min1)*(max2-min2)/(max1-min1);}vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}vec2 fade(vec2 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec2 P){vec4 Pi=floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);vec4 Pf=fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);Pi=mod(Pi,289.0);vec4 ix=Pi.xzxz;vec4 iy=Pi.yyww;vec4 fx=Pf.xzxz;vec4 fy=Pf.yyww;vec4 i=permute(permute(ix)+iy);vec4 gx=2.0*fract(i*0.0243902439)-1.0;vec4 gy=abs(gx)-0.5;vec4 tx=floor(gx+0.5);gx=gx-tx;vec2 g00=vec2(gx.x,gy.x);vec2 g10=vec2(gx.y,gy.y);vec2 g01=vec2(gx.z,gy.z);vec2 g11=vec2(gx.w,gy.w);vec4 norm=1.79284291400159-0.85373472095314*vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11));g00*=norm.x;g01*=norm.y;g10*=norm.z;g11*=norm.w;float n00=dot(g00,vec2(fx.x,fy.x));float n10=dot(g10,vec2(fx.y,fy.y));float n01=dot(g01,vec2(fx.z,fy.z));float n11=dot(g11,vec2(fx.w,fy.w));vec2 fade_xy=fade(Pf.xy);vec2 n_x=mix(vec2(n00,n01),vec2(n10,n11),fade_xy.x);float n_xy=mix(n_x.x,n_x.y,fade_xy.y);return 2.3*n_xy;}float hash12(vec2 p){float h=dot(p,vec2(127.1,311.7));return fract(sin(h)*43758.5453123);}void main(){vec2 uv=vUv;vec4 color=vec4(1.,0.,0.,1.);vec2 ratio=vec2(min((uPlaneSizes.x/uPlaneSizes.y)/(uSize.x/uSize.y),1.0),min((uPlaneSizes.y/uPlaneSizes.x)/(uSize.y/uSize.x),1.0));vec2 vv=vec2(vUv.x*ratio.x+(1.0-ratio.x)*0.5,vUv.y*ratio.y+(1.0-ratio.y)*0.5);float hash=hash12(vUv*5.)*0.65;vec2 nuv=vUv;float n=cnoise(nuv*vec2(20.0,8.))*hash;float x=mapRange(cos(n+uReveal*PI),-1.0,1.0,-0.05,1.05);float wipe=step(vUv.y,x);float n2=uPosY*cnoise(uv*vec2(8.0,4.))*0.1;if(uType==0.0){color=texture2D(uTexture,vv);gl_FragColor.rgb=color.rgb;gl_FragColor.a=wipe;}if(uType==1.0){vv.x+=diff*0.005;color=texture2D(uTexture,vv);gl_FragColor=color;}if(uType==2.0){color=texture2D(uTexture,uv+n2);gl_FragColor.rgb=color.rgb;gl_FragColor.a=color.a*uAlpha;}}`;
    var Js = class {
        constructor(t = {}) {
            let e = t.gl,
                r = t.texture,
                i = t.template;
            this.plane = {}, this.ogl = {
                gl: e,
                texture: r,
                template: i
            }, this.setup()
        }
        setup() {
            let {
                page: t
            } = C, {
                gl: e,
                texture: r,
                template: i
            } = this.ogl, n = new ir(e, {
                generateMipmaps: !1,
                minFilter: e.LINEAR
            }), o = E.timeline({
                paused: !0
            }), a = new Image;
            a.crossOrigin = "anonymous", a.src = r, a.decode().then(() => {
                n.image = a, f.uniforms.uSize.value.x = a.naturalWidth, f.uniforms.uSize.value.y = a.naturalHeight
            });
            let l = new Qt(e, {
                    widthSegments: 32,
                    heightSegments: 32
                }),
                u = i == "img" ? 1 : 0,
                h = i == "img" ? 0 : i == "slider" ? 1 : 2,
                c = i == "smiley" ? 0 : 1,
                f = new ne(e, {
                    vertex: fc,
                    fragment: pc,
                    transparent: !0,
                    uniforms: {
                        uTexture: {
                            value: n
                        },
                        uTime: {
                            value: 0
                        },
                        uDiff: {
                            value: 0
                        },
                        uScale: {
                            value: 1
                        },
                        uReveal: {
                            value: u
                        },
                        uAlpha: {
                            value: c
                        },
                        uScaleChange: {
                            value: .9
                        },
                        uRes: {
                            value: new bt(t.vw, t.vh)
                        },
                        uOffset: {
                            value: new bt(0, 0)
                        },
                        uSize: {
                            value: new bt(0, 0)
                        },
                        uPlaneSizes: {
                            value: new bt(0, 0)
                        },
                        uType: {
                            value: h
                        },
                        uPosY: {
                            value: 0
                        }
                    }
                }),
                d = new qt(e, {
                    geometry: l,
                    program: f
                });
            return this.plane.geometry = l, this.plane.program = f, this.plane.mesh = d, this.plane.texture = n, this.plane.status = !1, this.plane
        }
    };
    var ti = class {
        constructor(t = {}) {
            let e = t.textures,
                r = t.container;
            Ye(this, "run", "resize", "update"), this.dom = {
                textures: e,
                container: r,
                planes: [],
                total: 0
            }, this.state = {
                current: 0,
                scroll: 0,
                threshold: 100,
                isResizing: !1,
                clock: 0,
                rollover: !1
            }, this.settings = {
                x: 0,
                y: 0
            }, this.mouse = new bt(0, 0), this.time = 0, this.init()
        }
        setup() {
            let {
                container: t
            } = this.dom, {
                page: e
            } = C, r = new yr({
                dpr: 2,
                alpha: !0,
                depth: !1
            }), i = r.gl, n = new sr(i, {
                fov: 35
            }), o = new sr(i, {
                fov: 35
            }), a = new $t, l = new $t, u = e.vw / e.vh, h = new $i(i, {
                width: e.vw,
                height: e.vh
            });
            i.clearColor(1, 1, 1, 0), h.gl.clearColor(1, 1, 1, 0), n.position.set(0, 0, 5), n.lookAt([0, 0, 0]), n.perspective({
                aspect: u
            }), o.position.set(0, 0, 5), o.lookAt([0, 0, 0]), o.perspective({
                aspect: u
            }), r.setSize(e.vw, e.vh), this.ogl = {
                renderer: r,
                target: h,
                gl: i,
                camera: n,
                cameraTarget: o,
                texture: !1,
                scene: a,
                targetScene: l
            }, i.canvas.classList.add("gl-dom"), t.appendChild(i.canvas)
        }
        updatePlanes() {
            if (this.state.isResizing) return;
            let {
                page: t,
                webgl: e
            } = C, {
                camera: r,
                targetScene: i
            } = this.ogl, {
                current: n
            } = this.state, o = t.vw / t.vh, {
                images: a,
                slider: l,
                smiley: u,
                swirl: h
            } = e, c = a.planes.length - 1, f = l.planes.length - 1, d = h.planes.length - 1, g = u.planes.length - 1;
            for (let p = 0; p <= f; p++) {
                let m = l.planes[0],
                    x = l.planes[p],
                    y = at(m.el),
                    v = m.rect,
                    b = Xe(y, r, o),
                    w = He(v.left, b),
                    D = Oe(v.top, b, -n),
                    {
                        size: T
                    } = b;
                x.scale = b, x.plane.mesh.scale.set(T.x, T.y, 1), x.plane.mesh.position.set(w.x, D.y, 1)
            }
            for (let p = 0; p <= d; p++) {
                let m = h.planes[p],
                    x = at(m.el.parentNode),
                    y = Xe(x, r, o),
                    {
                        size: v
                    } = y,
                    b = m.data.updateTexture();
                m.scale = y, m.rect = x, m.plane.mesh.scale.set(v.x, v.y, 1), i.children = [], b.textMesh.setParent(i)
            }
            for (let p = 0; p <= g; p++) {
                let m = u.planes[p],
                    x = at(m.el),
                    y = Xe(x, r, o),
                    {
                        size: v
                    } = y;
                m.scale = y, m.rect = x, m.plane.mesh.scale.set(v.x, v.y, 1)
            }
            for (let p = 0; p <= c; p++) {
                let m = a.planes[p],
                    x = at(m.el),
                    y = Xe(x, r, o),
                    {
                        size: v
                    } = y;
                m.scale = y, m.rect = x, m.plane.mesh.scale.set(v.x, v.y, 1)
            }
        }
        getPlanes() {
            let {
                textures: t
            } = this.dom, e;
            !t[0] || (this.dom.total = t.length - 1, t.forEach((r, i) => {
                let n = r.dataset.plane;
                n == "slider" && (e = this.getPlane(r, n), C.webgl.slider.planes.push(e)), n == "img" && (e = this.getPlane(r, n), C.webgl.images.planes.push(e)), n == "smiley" && (e = this.getPlane(r, n), C.webgl.smiley.planes.push(e)), n == "swirl" && (e = this.getSwirlText(r, i), C.webgl.swirl.planes.push(e)), this.dom.planes.push(e)
            }))
        }
        getPlane(t, e) {
            let {
                page: r
            } = C, {
                gl: i,
                camera: n,
                scene: o
            } = this.ogl, {
                current: a
            } = this.state, l = r.vw / r.vh, u = [], h = at(t), c = Xe(h, n, l), f = He(h.left, c), d = Oe(h.top, c, -a), g = t.nextSibling, {
                size: p
            } = c, m = new Js({
                gl: i,
                texture: g.dataset.src,
                template: e
            });
            return u.el = t, u.rect = h, u.plane = m.plane, u.scale = c, u.top = d.y, u.plane.mesh.scale.set(p.x, p.y, 1), u.plane.mesh.position.set(f.x, d.y, 1), u.plane.mesh.setParent(o), u.speed = 1, u.plane.program.uniforms.uSize.value.x = p.x, u.plane.program.uniforms.uSize.value.y = p.y, u.plane.program.uniforms.uPlaneSizes.value.x = p.x, u.plane.program.uniforms.uPlaneSizes.value.y = p.y, u.template = e, u
        }
        getSwirlText(t) {
            let {
                page: e
            } = C, {
                gl: r,
                camera: i,
                scene: n,
                renderer: o,
                target: a,
                targetScene: l
            } = this.ogl, {
                current: u
            } = this.state, h = e.vw / e.vh, c = [], f = at(t), d = Xe(f, i, h), g = He(f.left, d), p = Oe(f.top, d, -u), {
                size: m
            } = d, x = t.parentNode, y = N("h2", x).dataset.txt, v = new ei({
                gl: r,
                renderer: o,
                target: a,
                text: y
            });
            return c.el = t, c.rect = f, c.data = v, c.plane = v.plane, c.scale = d, c.top = p.y, c.plane.mesh.scale.set(m.x, m.y, 1), c.plane.mesh.position.set(g.x, p.y, 1), c.plane.mesh.setParent(n), setTimeout(() => {
                c.plane.textMesh.setParent(l)
            }, 1e3), c.speed = 1, c
        }
        movePlanes() {
            if (this.state.isResizing) return;
            let {
                planes: t
            } = this.dom, {
                current: e
            } = this.state, {
                webgl: r
            } = C, {
                images: i,
                slider: n,
                smiley: o,
                swirl: a
            } = r;
            if (!t[0]) return;
            let l = i.planes.length - 1,
                u = n.planes.length - 1,
                h = o.planes.length - 1,
                c = a.planes.length - 1;
            for (let f = 0; f <= l; f++) {
                let {
                    plane: d,
                    rect: g,
                    scale: p
                } = i.planes[f];
                if (!d.mesh) return;
                let m = Oe(g.top, p, -e);
                d.mesh.position.y = -m.y
            }
            for (let f = 0; f <= h; f++) {
                let {
                    plane: d,
                    rect: g,
                    scale: p
                } = o.planes[f], {
                    program: m
                } = d;
                if (!d.mesh) return;
                m.uniforms.uPosY.value = Math.abs(o.gooey);
                let x = -e + o.posY,
                    y = Oe(g.top, p, -e + o.posY);
                d.mesh.position.y = -y.y
            }
            for (let f = 0; f <= c; f++) {
                let {
                    plane: d,
                    rect: g,
                    scale: p
                } = a.planes[f], {
                    program: m
                } = d;
                if (!d.mesh) return;
                m && (m.uniforms.uMouse.value = this.mouse);
                let x = Oe(g.top, p, -e + a.posY);
                d.mesh.position.y = -x.y
            }
            for (let f = 0; f <= u; f++) {
                let {
                    plane: d,
                    scale: g
                } = n.planes[f], {
                    position: p,
                    program: m
                } = d;
                p && (p.render(), p.passes[0].uniforms.uTime.value = this.time, m.uniforms.uTime.value = this.time, m.uniforms.positionTexture.value = p.uniform.value), d.mesh.position.y = -Oe(r.slider.planes[f].posY, g, -e).y, d.mesh.rotation.z = -r.slider.planes[f].posZ * .018
            }
        }
        run = t => {
            let {
                renderer: e,
                camera: r,
                scene: i,
                cameraTarget: n,
                targetScene: o,
                target: a
            } = this.ogl, {
                x: l,
                y: u
            } = this.settings, {
                page: h
            } = C, c = t.mouse;
            this.time += 1 / 60, this.state.current = t.current, this.state.scroll = t.current, this.state.diff = t.diff, this.settings.x = Fe(l, c.x, .05), this.settings.y = Fe(u, c.y, .05);
            let f, d = 0;
            this.state.isResizing || (this.movePlanes(), this.state.rollover ? (f = l / h.vw * 2 - 1, d = -(u / h.vh) * 2 + 1) : (f = 0, d = 0), E.to(this.mouse, .8, {
                x: f,
                y: d
            }), e.render({
                scene: o,
                camera: n,
                target: a
            }), e.render({
                scene: i,
                camera: r
            }))
        };
        on() {
            B.on("tick", this.run), B.on("resize", this.resize), B.on("smooth:resize", this.update), C.webgl.swirl.planes[0] && C.webgl.swirl.planes.forEach(t => {
                t.el.addEventListener("mouseenter", () => this.state.rollover = !0), t.el.addEventListener("mouseleave", () => this.state.rollover = !1)
            })
        }
        off() {
            B.off("tick", this.run), B.off("resize", this.resize), B.off("smooth:resize", this.update), C.webgl.swirl.planes[0] && C.webgl.swirl.planes.forEach(t => {
                t.el.removeEventListener("mouseenter", () => this.state.rollover = !0), t.el.removeEventListener("mouseleave", () => this.state.rollover = !1)
            })
        }
        update() {
            this.updatePlanes()
        }
        resize() {
            let {
                page: t
            } = C;
            this.state.isResizing = !0;
            let e = t.vw / t.vh;
            this.ogl.camera.perspective({
                aspect: e
            }), this.ogl.cameraTarget.perspective({
                aspect: e
            }), this.ogl.target.setSize(t.vw, t.vh), this.ogl.renderer.setSize(t.vw, t.vh), this.state.isResizing = !1
        }
        destroy() {
            let {
                gl: t
            } = this.ogl;
            this.off(), t.clear(t.COLOR_BUFFER_BIT), this.dom = null, this.state = null, this.ogl = null, C.webgl.slider.planes = [], C.webgl.images.planes = [], C.webgl.swirl.planes = [], C.webgl.smiley.planes = []
        }
        init() {
            this.setup(), this.getPlanes(), this.on()
        }
    };
    var vr = class {
        constructor(t = {}) {
            let e = t.els;
            this.x = 0, this.dom = {
                els: e
            }, this.setup(), this.on()
        }
        setup = () => {
            let {
                els: t
            } = this.dom, e = at(t[0]), r = t.length, i = e.width, n = i * r;
            this.settings = {
                rect: e,
                width: i,
                end: n,
                total: r,
                ease: .1
            }
        };
        run = () => {
            let {
                sniff: t
            } = C, {
                els: e
            } = this.dom, r = t.browser.isDevice ? 1 : 3.5;
            if (!e[0]) return;
            let {
                width: i
            } = this.settings;
            this.x = this.x < i ? this.x + r : 0, E.set(e, {
                x: `${this.x*-1}px`
            })
        };
        on() {
            B.on("tick", this.run), B.on("resize", this.setup)
        }
        off() {
            B.off("tick", this.run), B.off("resize", this.setup)
        }
        destroy() {
            this.off
        }
    };
    var ua = or(mc());
    var gc = `attribute vec2 uv;attribute vec3 position;uniform mat4 projectionMatrix;uniform mat4 modelViewMatrix;uniform mat4 modelMatrix;uniform mat4 viewMatrix;attribute vec4 random;uniform float uSize;uniform float uTime;varying vec3 pos;
#pragma glslify: noise = require(glsl-noise/simplex/3d)
void main(){pos=position*2.0-1.0;vec4 mPos=vec4(pos,1.0);float t=uTime*0.6;mPos.x+=sin(t*random.z+160.28*random.w)*mix(0.1,2.5,random.x);mPos.y+=sin(t*random.y+160.28*random.x)*mix(0.1,2.5,random.w);mPos.z+=sin(t*random.w+160.28*random.y)*mix(0.1,2.5,random.z);float a=0.;vec4 mvPos=viewMatrix*mPos;gl_PointSize=uSize/length(mvPos.xyz)*random.x*6.;gl_Position=projectionMatrix*mvPos;}`;
    var xc = "precision highp float;uniform float uTime;uniform vec3 uColor1;uniform vec3 uColor2;uniform vec3 uColor3;uniform float uAlpha;varying vec3 pos;vec3 toRGB(vec3 color){return vec3(color.r/255.,color.g/255.,color.b/255.);}float circulito(vec2 uv,vec2 pos,float r,float blur){float d=length(uv+pos);float c=smoothstep(r,r-blur,d);return c;}void main(){vec2 uv=gl_PointCoord.xy;vec3 cv=pos;vec3 color=toRGB(uColor1);vec3 color2=toRGB(uColor2);vec3 color3=toRGB(uColor3);color=mix(color,color2,cv.x);color=mix(color,color3,cv.y);float d=length(uv-0.5);float circle=step(d,0.3);gl_FragColor=vec4(color,circle*uAlpha);}";
    var ri = class {
        constructor(t = {}) {
            let e = t.container || C.body;
            this.scene = {
                name: "Default",
                renderer: null,
                camera: null,
                objects: null,
                orbit: null,
                container: e
            }, this.amount = 500, this.time = 0, this.program = null, this.init()
        }
        setup() {
            this.render(), this.camera(), this.mesh(), C.webgl.scenes.push(this.scene)
        }
        render() {
            let {
                container: t
            } = this.scene, {
                page: e
            } = C, r = new yr({
                dpr: 2,
                alpha: !0
            }), i = r.gl;
            i.clearColor(0, 0, 0, 0), i.canvas.classList.add("particles-ogl"), r.setSize(e.vw, e.vh), t.appendChild(i.canvas), Object.assign(this.scene, {
                renderer: r
            })
        }
        camera() {
            let {
                page: t
            } = C, {
                renderer: e
            } = this.scene, {
                gl: r
            } = e, i = new sr(r, {
                fov: 35
            }), n = t.vw / t.vh;
            i.position.set(0, 0, 7), i.lookAt([0, 0, 0]), i.perspective({
                aspect: n
            });
            let o = new la(i, {
                target: new et(0, 0, 0)
            });
            o.enabled = !1, Object.assign(this.scene, {
                camera: i,
                orbit: o
            })
        }
        mesh() {
            let {
                renderer: t
            } = this.scene, {
                gl: e
            } = t, r = new $t, i = new Float32Array(this.amount * 3), n = new Float32Array(this.amount * 4);
            for (let l = 0; l < this.amount; l++) i.set([Math.random(), Math.random(), Math.random()], l * 3), n.set([Math.random(), Math.random(), Math.random(), Math.random()], l * 4);
            let o = new jt(e, {
                position: {
                    size: 3,
                    data: i
                },
                random: {
                    size: 4,
                    data: n
                }
            });
            this.program = new ne(e, {
                vertex: (0, ua.default)(gc),
                fragment: (0, ua.default)(xc),
                transparent: !0,
                depthTest: !1,
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uSize: {
                        value: 10
                    },
                    uColor1: {
                        value: [255, 255, 255]
                    },
                    uColor2: {
                        value: [218, 204, 183]
                    },
                    uColor3: {
                        value: [227, 207, 188]
                    },
                    uAlpha: {
                        value: .8
                    }
                }
            });
            let a = new qt(e, {
                mode: e.POINTS,
                geometry: o,
                program: this.program
            });
            a.setParent(r), Object.assign(this.scene, {
                particles: a,
                objects: r
            })
        }
        updateMesh() {
            let {
                renderer: t
            } = this.scene, {
                gl: e
            } = t, r = new $t, i = new Float32Array(this.amount * 3), n = new Float32Array(this.amount * 4);
            for (let l = 0; l < this.amount; l++) i.set([Math.random(), Math.random(), Math.random()], l * 3), n.set([Math.random(), Math.random(), Math.random(), Math.random()], l * 4);
            let o = new jt(e, {
                    position: {
                        size: 3,
                        data: i
                    },
                    random: {
                        size: 4,
                        data: n
                    }
                }),
                a = new qt(e, {
                    mode: e.POINTS,
                    geometry: o,
                    program: this.program
                });
            a.setParent(r), Object.assign(this.scene, {
                particles: a,
                objects: r
            })
        }
        tick = () => {
            let {
                renderer: t,
                camera: e,
                objects: r,
                orbit: i,
                particles: n
            } = this.scene;
            this.time += 1 / 300, n.rotation.x = Math.sin(this.time * .005) * .1, n.rotation.y = Math.cos(this.time * .005) * .15, n.rotation.z += .005, r.children.forEach(o => {
                o.program.uniforms.uTime.value = this.time
            }), i.update(), t.render({
                scene: r,
                camera: e
            })
        };
        on() {
            B.on("tick", this.tick), B.on("resize", this.resize)
        }
        off() {
            B.off("tick", this.tick), B.off("resize", this.resize)
        }
        resize = () => {
            let {
                page: t
            } = C, e = t.vw / t.vh;
            this.scene.camera.perspective({
                aspect: e
            }), this.scene.renderer.setSize(t.vw, t.vh)
        };
        destroy() {
            this.off()
        }
        init() {
            this.setup(), this.on()
        }
    };
    var ha = "attribute vec2 uv;attribute vec3 position;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}";
    var ca = "uniform sampler2D tMap;varying vec2 vUv;void main(){vec3 tex=texture2D(tMap,vUv).rgb;float signedDist=max(min(tex.r,tex.g),min(max(tex.r,tex.g),tex.b))-0.4;float d=fwidth(signedDist);float alpha=smoothstep(-d,d,signedDist);if(alpha<0.01)discard;gl_FragColor.rgb=vec3(0.);gl_FragColor.a=alpha;}";
    var Dc = "attribute vec3 position;attribute vec3 normal;attribute vec2 uv;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;uniform mat3 normalMatrix;varying vec2 vUv;varying vec3 vNormal;void main(){vUv=uv;vNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}";
    var yc = `#define PI 3.14159
precision highp float;uniform sampler2D tMap;uniform sampler2D uDisplacement;uniform vec2 uMouse;uniform vec2 uRes;uniform float uRadius;uniform float uAngle;varying vec2 vUv;varying vec3 vNormal;float circle(in vec2 _st,in float _radius,in float blurriness){vec2 dist=_st;return 1.-smoothstep(_radius-(_radius*blurriness),_radius+(_radius*blurriness),dot(dist,dist)*4.0);}void main(){vec2 res=uRes;vec2 mouse=uMouse;vec2 center=vec2(.5,.5)+mouse;vec2 st=vUv-center;float vRadius=uRadius;float vAngle=uAngle*PI;float c=circle(st*res,0.1,2.);float len=length(st*vec2(res.x/res.y,1.));float angle=atan(st.y,st.x)+vAngle*smoothstep(vRadius,0.,len);float radius=length(st);vec2 dist=vec2(radius*cos(angle),radius*sin(angle));vec4 color=texture2D(tMap,dist+center);vec3 black=vec3(.95,.95,.95);vec3 final=mix(black,black-color.rgb,.8);float alpha=1.-texture2D(tMap,vUv).r;gl_FragColor.rgb=final;gl_FragColor.a=1.;}`;
    var Md = `
` + ha,
        Sd = `#version 300 es
    #define attribute in
    #define varying out
` + ha,
        Pd = `#extension GL_OES_standard_derivatives : enable
    precision highp float;
` + ca,
        zd = `#version 300 es
    precision highp float;
    #define varying in
    #define texture2D texture
    #define gl_FragColor FragColor
    out vec4 FragColor;
` + ca,
        ei = class {
            constructor(t = {}) {
                let e = t.gl,
                    r = t.texture,
                    i = t.renderer,
                    n = t.target,
                    o = t.text;
                this.plane = {}, this.ogl = {
                    gl: e,
                    texture: r,
                    renderer: i,
                    target: n,
                    txt: o
                }, this.font = null, this.mouse = new bt(0, 0), this.setup(), this.textMesh()
            }
            setup() {
                let {
                    page: t
                } = C, {
                    gl: e,
                    target: r
                } = this.ogl, i = new Qt(e, {
                    widthSegments: 32,
                    heightSegments: 32
                }), n = new ne(e, {
                    vertex: Dc,
                    fragment: yc,
                    transparent: !0,
                    uniforms: {
                        tMap: {
                            value: r.texture
                        },
                        uMouse: {
                            value: new bt(0, 0)
                        },
                        uRes: {
                            value: new bt(t.vw, t.vh)
                        },
                        uAngle: {
                            value: .8
                        },
                        uRadius: {
                            value: .2
                        },
                        uPosY: {
                            value: 0
                        }
                    }
                }), o = new qt(e, {
                    geometry: i,
                    program: n
                });
                this.plane.geometry = i, this.plane.program = n, this.plane.mesh = o, this.plane.status = !1
            }
            textMesh() {
                let {
                    gl: t,
                    renderer: e
                } = this.ogl, r = new ir(t, {
                    generateMipmaps: !1
                }), i = new Image;
                i.onload = () => r.image = i, i.src = "/images/atlas.png";
                let n = new ne(t, {
                    vertex: e.isWebgl2 ? Sd : Md,
                    fragment: e.isWebgl2 ? zd : Pd,
                    uniforms: {
                        tMap: {
                            value: r
                        },
                        uMouse: {
                            value: this.mouse
                        }
                    },
                    transparent: !0,
                    cullFace: null,
                    depthWrite: !1
                });
                Object.assign(this.ogl, {
                    program: n
                }), this.loadText(n)
            }
            updateTexture() {
                let {
                    gl: t,
                    txt: e,
                    program: r
                } = this.ogl, {
                    page: i
                } = C, n = i.vw * 4 / 1440, o = i.vw * .32 / 1440, a = new tn({
                    font: this.font,
                    text: e.toUpperCase(),
                    width: n,
                    align: "center",
                    letterSpacing: -.06,
                    size: o,
                    lineHeight: 1
                }), l = new jt(t, {
                    position: {
                        size: 3,
                        data: a.buffers.position
                    },
                    uv: {
                        size: 2,
                        data: a.buffers.uv
                    },
                    id: {
                        size: 1,
                        data: a.buffers.id
                    },
                    index: {
                        data: a.buffers.index
                    }
                }), u = new qt(t, {
                    geometry: l,
                    program: r
                });
                return u.position.y = a.height * .5, this.plane.text = a, this.plane.textProgram = r, this.plane.textMesh = u, this.plane.textGeometry = l, this.plane
            }
            async loadText(t) {
                let {
                    page: e
                } = C, {
                    gl: r,
                    txt: i
                } = this.ogl, n = await (await fetch("/fonts/basis-grotesque-medium-pro.json")).json();
                this.font = n;
                let o = e.vw * 4 / 1440,
                    a = e.vw * .32 / 1440,
                    l = new tn({
                        font: n,
                        text: i.toUpperCase(),
                        width: o,
                        align: "center",
                        letterSpacing: -.06,
                        size: a,
                        lineHeight: 1.15
                    }),
                    u = new jt(r, {
                        position: {
                            size: 3,
                            data: l.buffers.position
                        },
                        uv: {
                            size: 2,
                            data: l.buffers.uv
                        },
                        id: {
                            size: 1,
                            data: l.buffers.id
                        },
                        index: {
                            data: l.buffers.index
                        }
                    }),
                    h = new qt(r, {
                        geometry: u,
                        program: t
                    });
                return h.position.y = l.height * .5, this.plane.text = l, this.plane.textProgram = t, this.plane.textMesh = h, this.plane.textGeometry = u, this.plane
            }
        };
    var fa = "precision highp float;attribute vec2 uv;attribute vec3 position;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}";
    var pa = `#define PI 3.1415926535897932384626433832795
precision highp float;uniform sampler2D uTexture;uniform float uAlpha;uniform float uProgress;uniform float uPower;uniform bool uOut;varying vec2 vUv;void main(){vec2 uv=vUv;vec4 color=texture2D(uTexture,vUv);vec4 transparent=vec4(0.,0.,0.,0.);uv.y+=((sin(uv.x*PI)*uPower)*3.25);if(!uOut)uv.y=1.-uv.y;float t=smoothstep(uv.y-fwidth(uv.y),uv.y,uProgress);color=mix(color,transparent,t);gl_FragColor=color;}`;
    var Lx = `
` + fa,
        kx = `#version 300 es
    #define attribute in
    #define varying out
` + fa,
        Ox = `#extension GL_OES_standard_derivatives : enable
    precision highp float;
` + pa,
        Rx = `#version 300 es
    precision highp float;
    #define varying in
    #define texture2D texture
    #define gl_FragColor FragColor
    out vec4 FragColor;
` + pa;
    var si = class {
        constructor(t = {}) {
            let e = t.el;
            this.dom = {
                el: e,
                list: N(".work-list"),
                title: N(".index-title"),
                open: N(".index-open"),
                close: N(".index-close"),
                bg: I(".bg-block"),
                workLetters: I(".item-letter:not(.-hidden)"),
                workTitles: I(".item-title"),
                workImgs: I(".item-img"),
                slider: N(".slider"),
                webgl: N(".gl-dom")
            }, this.state = {
                open: !1
            }, this.init()
        }
        openIndex = () => {
            let {
                el: t,
                bg: e,
                workLetters: r,
                workTitles: i,
                workImgs: n,
                title: o,
                slider: a,
                webgl: l
            } = this.dom;
            E.set(e, {
                backgroundColor: "#262523"
            }), E.set(t, {
                autoAlpha: 1
            }), E.to(a, {
                duration: .5,
                autoAlpha: 0
            }), E.to(".gl-dom", {
                duration: .5,
                autoAlpha: 0
            }), E.to(l, {
                duration: .5,
                autoAlpha: 0
            }), E.fromTo(e, {
                scaleY: 0
            }, {
                duration: .6,
                scaleY: 1,
                stagger: .05
            }), E.from(o, {
                duration: 1,
                y: 0,
                delay: .5,
                autoAlpha: 0
            }), E.from(i, {
                duration: .6,
                delay: .5,
                y: 20,
                autoAlpha: 0,
                stagger: .01
            }), E.from(r, {
                duration: .6,
                delay: .5,
                y: 20,
                autoAlpha: 0,
                stagger: .01
            }), E.from(n, {
                duration: .6,
                delay: .5,
                x: 20,
                autoAlpha: 0,
                stagger: .05,
                onComplete: () => {
                    E.set(i, {
                        clearProps: "all"
                    }), E.set(n, {
                        clearProps: "all"
                    }), E.set(r, {
                        clearProps: "all"
                    })
                }
            }), E.set(C.body, {
                overflow: "hidden"
            })
        };
        closeIndex = () => {
            let {
                el: t,
                bg: e,
                slider: r,
                webgl: i
            } = this.dom;
            E.fromTo(e, {
                scaleY: 1
            }, {
                duration: .6,
                scaleY: 0,
                stagger: .05,
                onComplete: () => {
                    E.set(e, {
                        backgroundColor: "#262523"
                    }), E.to(r, {
                        duration: .5,
                        autoAlpha: 1
                    }), E.to(".gl-dom", {
                        duration: .5,
                        autoAlpha: 1
                    }), E.to(i, {
                        duration: .5,
                        autoAlpha: 1
                    })
                }
            }), E.to(t, {
                duration: .5,
                autoAlpha: 0
            }), E.set(C.body, {
                clearProps: "all"
            })
        };
        selectWork = t => {
            let {
                list: e
            } = this.dom, r = t.target, i = r.closest(".work-item"), n = r.dataset.project, o = r.dataset.img;
            if (e.classList.add("-hover"), n) N(`[data-img="${n}"]`).classList.add("-hover"), i.classList.add("-hover");
            else {
                let a = N(`[data-project="${o}"]`),
                    l = a.closest(".work-item");
                a.classList.add("-hover"), l.classList.add("-hover")
            }
        };
        leaveWork = t => {
            let {
                list: e
            } = this.dom, r = t.target, i = r.closest(".work-item"), n = r.dataset.project, o = r.dataset.img;
            if (e.classList.remove("-hover"), n) N(`[data-img="${n}"]`).classList.remove("-hover"), i.classList.remove("-hover");
            else {
                let a = N(`[data-project="${o}"]`),
                    l = a.closest(".work-item");
                a.classList.remove("-hover"), l.classList.remove("-hover")
            }
        };
        on() {
            let {
                open: t,
                close: e,
                workTitles: r,
                workImgs: i
            } = this.dom;
            t.addEventListener("click", this.openIndex), e.addEventListener("click", this.closeIndex), r.forEach(n => {
                n.addEventListener("mouseenter", this.selectWork), n.addEventListener("mouseleave", this.leaveWork)
            }), i.forEach(n => {
                n.addEventListener("mouseenter", this.selectWork), n.addEventListener("mouseleave", this.leaveWork)
            })
        }
        off() {
            let {
                open: t,
                close: e
            } = this.dom;
            t.removeEventListener("click", this.openIndex), e.removeEventListener("click", this.closeIndex)
        }
        destroy() {
            this.off(), this.dom = null
        }
        init() {
            this.on()
        }
    };
    var ii = "attribute vec3 position;attribute vec3 normal;attribute vec2 uv;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;uniform mat3 normalMatrix;varying vec3 vNormal;varying vec2 vUv;void main(){vUv=uv;vNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}";
    var en = "precision highp float;varying vec3 vNormal;varying vec2 vUv;uniform float uAlpha;uniform float uProgress;uniform float uType;float hash12(vec2 p){float h=dot(p,vec2(127.1,311.7));return fract(sin(h)*43758.5453123);}void main(){float hash=hash12(vUv)*0.5;vec3 normal=normalize(vNormal);float alpha=uAlpha;vec3 mask=vec3(0.0);vec3 gray=vec3(0.32,0.32,0.35);vec3 white=vec3(1.0,1.0,1.0);float lighting=dot(normal,normalize(vec3(-0.4,0.4,1.2)));vec3 mixed=mix(mask,gray,vUv.x);vec3 color=mixed+lighting*.5;if(uType==1.0){if(normal.y>0.4){mask+=step(uProgress,1.-vUv.x);}else{mask+=step(uProgress,vUv.x);}alpha=mask.x;}gl_FragColor.rgb=color;gl_FragColor.a=alpha;}";
    var _c = "precision highp float;varying vec3 vNormal;varying vec2 vUv;uniform float uAlpha;uniform float uProgress;uniform float uType;float hash12(vec2 p){float h=dot(p,vec2(127.1,311.7));return fract(sin(h)*43758.5453123);}void main(){float hash=hash12(vUv*10.)*.1;vec3 normal=normalize(vNormal);vec3 mask=vec3(0.5);vec3 gray=vec3(0.5,0.5,0.5);vec3 white=vec3(.8,.8,.8);vec3 purple=vec3(.5,0.4,.7)*0.5;float lighting1=dot(normal,normalize(vec3(0.2,-2.4,1.4)))*hash;vec3 mixed=mix(purple,white,vUv.x);vec3 color=mixed+lighting1*1.5;gl_FragColor.rgb=color;gl_FragColor.a=.95;}";
    var ni = class {
        constructor(t = {}) {
            this.dom = {
                container: t.container
            }, this.init()
        }
        setup() {
            let {
                page: t
            } = C, {
                container: e
            } = this.dom, r = new yr({
                dpr: 2,
                alpha: !0
            }), i = r.gl, n = new sr(i, {
                fov: 35
            }), o = new $t, a = t.vw / t.vh;
            i.clearColor(0, 0, 0, 0), n.position.set(0, 0, 5), n.lookAt([0, 0, 0]), n.perspective({
                aspect: a
            }), r.setSize(t.vw, t.vh), this.ogl = {
                renderer: r,
                gl: i,
                camera: n,
                scene: o
            }, i.canvas.classList.add("gl-boxes"), e.appendChild(i.canvas)
        }
        mesh() {
            let {
                renderer: t,
                scene: e
            } = this.ogl, {
                gl: r
            } = t, i = [], n = new $t, o = new Ki(r), a = new Zi(r), l = new Ji(r, {
                height: 20,
                radialSegments: 16,
                radiusTop: .12,
                radiusBottom: .12
            }), u = o.attributes.position.data, h = new ne(r, {
                vertex: ii,
                fragment: en,
                transparent: !0,
                uniforms: {
                    uAlpha: {
                        value: 1
                    },
                    uProgress: {
                        value: 1
                    },
                    uType: {
                        value: 1
                    }
                }
            }), c = new ne(r, {
                vertex: ii,
                fragment: _c,
                transparent: !0,
                uniforms: {
                    uAlpha: {
                        value: 1
                    },
                    uProgress: {
                        value: 1
                    },
                    uType: {
                        value: 1
                    }
                }
            }), f = new ne(r, {
                vertex: ii,
                fragment: en,
                transparent: !0,
                uniforms: {
                    uAlpha: {
                        value: 0
                    },
                    uProgress: {
                        value: 0
                    },
                    uType: {
                        value: 0
                    }
                },
                cullFace: null
            }), d = new ne(r, {
                vertex: ii,
                fragment: en,
                transparent: !0,
                uniforms: {
                    uAlpha: {
                        value: 0
                    },
                    uProgress: {
                        value: 0
                    },
                    uType: {
                        value: 0
                    }
                },
                cullFace: null
            }), g = new qt(r, {
                geometry: o,
                program: h
            });
            g.position.set(0, 0, 0), g.name = "Cube", g.setParent(n);
            let p = new qt(r, {
                geometry: o,
                program: c
            });
            p.position.set(0, 0, 0), p.name = "Glow", p.scale.set(0), p.rotation.set(-.34, .8, -.34), p.setParent(e);
            for (let m = 0; m < 8; m++) {
                let x = u[m * 3],
                    y = u[m * 3 + 1],
                    v = u[m * 3 + 2],
                    b = new qt(r, {
                        geometry: a,
                        program: d
                    });
                b.name = "Ball", b.scale.set(.03), b.position.set(x, y, v), b.setParent(n)
            }
            for (let m = 0; m < 12; m++) {
                let x = u[m * 3],
                    y = u[m * 3 + 1],
                    v = u[m * 3 + 2],
                    b = new qt(r, {
                        geometry: l,
                        program: f
                    });
                b.name = "Tube", b.scale.set(.05), b.position.set(x, y, v), b.setParent(n), i.push(b)
            }
            i.forEach((m, x) => {
                x == 0 && (m.position[1] = -.5, m.position[2] = 0, m.rotation.set(-Math.PI / 2, 0, 0)), x == 1 && (m.position[0] = 0, m.rotation.set(0, 0, Math.PI / 2)), x == 2 && (m.position[0] = 0, m.rotation.set(0, 0, Math.PI / 2)), (x == 3 || x == 4 || x == 5 || x == 11) && (m.position[1] = 0), x == 6 && (m.position[0] = 0, m.rotation.set(0, 0, Math.PI / 2)), (x == 7 || x == 8 || x == 9) && (m.position[2] = 0, m.rotation.set(-Math.PI / 2, 0, 0)), x == 10 && (m.position[0] = 0, m.rotation.set(0, 0, Math.PI / 2))
            }), n.rotation.set(.34, .8, .34), n.setParent(e), Object.assign(this.ogl, {
                group: n
            })
        }
        tick = () => {
            let {
                renderer: t,
                camera: e,
                scene: r,
                orbit: i
            } = this.ogl;
            this.time += 1 / 300, r.children.forEach(n => {}), t.render({
                scene: r,
                camera: e
            })
        };
        animate = ({
            index: t,
            direction: e
        }) => {
            let {
                sniff: r
            } = C, {
                breakpoints: i
            } = r, {
                group: n,
                scene: o
            } = this.ogl, a = o.children[0], l = i.M_UP ? i.L_UP ? 1.2 : 1 : .75;
            e == "down" ? (t == 2 && E.fromTo(n.scale, {
                x: 0,
                y: 0,
                z: 0
            }, {
                duration: .8,
                x: l,
                y: l,
                z: l,
                ease: "power3.inOut"
            }), t == 3 && E.to(n.rotation, {
                duration: 1,
                x: .34,
                y: -.8,
                z: -.34,
                ease: "power3.inOut"
            }), t == 4 && E.to(n.rotation, {
                duration: 1,
                x: -.34,
                y: .8,
                z: -.34,
                onComplete: () => {
                    n.children.forEach(u => {
                        u.name == "Cube" && (u.program.transparent = !1)
                    })
                }
            }), t == 5 && (E.to(n.scale, {
                duration: 1,
                x: l / 1.8,
                y: l / 1.8,
                z: l / 1.8,
                ease: "power3.out"
            }), E.to(n.rotation, {
                duration: 1,
                x: .34,
                y: .8,
                z: .34,
                ease: "power3.out"
            }), E.to(a.scale, {
                duration: 1,
                x: l,
                y: l,
                z: l,
                ease: "power3.out"
            })), n.children.forEach(u => {
                switch (u.name) {
                    case "Tube":
                        t == 1 && (E.set(u.scale, {
                            y: 0
                        }), E.set(u.program.uniforms.uAlpha, {
                            value: 1
                        })), t == 3 && E.fromTo(u.scale, {
                            y: 0
                        }, {
                            duration: 1,
                            y: .05,
                            ease: "power3.inOut"
                        }), t == 4 && E.to(u.program.uniforms.uAlpha, {
                            duration: 1,
                            value: 0
                        });
                        break;
                    case "Ball":
                        t == 2 && E.to(u.program.uniforms.uAlpha, {
                            duration: 1,
                            value: 1,
                            ease: "power3.inOut"
                        }), t == 4 && E.set(u.program.uniforms.uAlpha, {
                            value: 0
                        });
                        break;
                    case "Cube":
                        t == 4 && E.to(u.program.uniforms.uProgress, {
                            duration: 1,
                            value: 0
                        });
                        break
                }
            })) : (t == 1 && E.to(n.scale, {
                duration: 1,
                x: 0,
                y: 0,
                z: 0,
                ease: "power3.inOut"
            }), t == 2 && E.to(n.rotation, {
                duration: 1,
                x: .34,
                y: .8,
                z: .34,
                ease: "power3.out"
            }), t == 3 && (n.children.forEach(u => {
                u.name == "Cube" && (u.program.transparent = !0)
            }), E.to(n.rotation, {
                duration: 1,
                x: .34,
                y: -.8,
                z: -.34,
                ease: "power3.inOut"
            })), t == 4 && (E.to(n.scale, {
                duration: 1,
                x: l,
                y: l,
                z: l,
                ease: "power3.inOut"
            }), E.to(n.rotation, {
                duration: 1,
                x: -.34,
                y: .8,
                z: -.34,
                ease: "power3.inOut"
            }), E.to(a.scale, {
                duration: 1,
                x: 0,
                y: 0,
                z: 0,
                ease: "power3.inOut",
                onComplete: () => {
                    n.children.forEach(u => {
                        u.name == "Cube" && (u.program.transparent = !1)
                    })
                }
            })), n.children.forEach(u => {
                switch (u.name) {
                    case "Tube":
                        t == 2 && E.fromTo(u.scale, {
                            y: .05
                        }, {
                            duration: 1,
                            y: 0
                        }), t == 3 && E.set(u.program.uniforms.uAlpha, {
                            value: 1
                        });
                        break;
                    case "Ball":
                        t == 3 && E.set(u.program.uniforms.uAlpha, {
                            value: 1
                        });
                    case "Cube":
                        t == 3 && E.to(u.program.uniforms.uProgress, {
                            duration: 1,
                            value: 1
                        })
                }
            }))
        };
        on() {
            B.on("tick", this.tick), B.on("resize", this.resize), B.on("flip", this.animate)
        }
        off() {
            B.off("tick", this.tick), B.off("resize", this.resize), B.off("flip", this.animate)
        }
        resize = () => {
            let {
                page: t
            } = C, e = t.vw / t.vh;
            this.ogl.camera.perspective({
                aspect: e
            }), this.ogl.renderer.setSize(t.vw, t.vh)
        };
        destroy() {
            this.off()
        }
        init() {
            this.setup(), this.mesh(), this.on()
        }
    };
    var wc = or(vc()),
        oi = class {
            constructor(t = {}) {
                let e = t.canvas,
                    r = t.container,
                    i = at(r),
                    n = N(".smiley-asset");
                this.dom = {
                    container: r,
                    images: [],
                    reference: n
                }, this.canvas = {
                    el: e,
                    ctx: e.getContext("2d"),
                    width: i.width,
                    height: i.height,
                    rect: i
                }, this.state = {
                    resize: !1,
                    loaded: !1
                }, this.init()
            }
            loadImages() {
                let t = (0, wc.default)(),
                    e = [];
                for (let r = 0; r < 119; r++) {
                    let i = `/images/sprite/${r}.png`;
                    e.push(i)
                }
                t.fetch(e), t.oncomplete = r => {
                    r.forEach(i => {
                        let n = new Image;
                        n.src = i.blobUrl, this.dom.images.push(n)
                    }), this.state.loaded = !0
                }
            }
            setup() {
                let {
                    el: t,
                    width: e,
                    height: r,
                    ctx: i,
                    rect: n
                } = this.canvas, {
                    reference: o
                } = this.dom, a = window.devicePixelRatio || 1, l = at(o), u = l.top - n.top, h = new Image;
                t.style.width = `${n.width}px`, t.style.height = `${n.height}px`, t.width = Math.floor(n.width * a), t.height = Math.floor(n.height * a), i.scale(a, a), h.onload = () => {
                    i.clearRect(0, 0, e, r), i.drawImage(h, l.x, u, l.width, l.height)
                }, Object.assign(this.canvas, {
                    area: l,
                    offset: u
                }), h.src = "/images/sprite/0.png"
            }
            run = ({
                current: t
            }) => {
                if (this.state.resize || !this.state.loaded) return;
                this.scroll = t;
                let {
                    ctx: e,
                    width: r,
                    height: i,
                    area: n,
                    offset: o
                } = this.canvas, {
                    images: a
                } = this.dom, {
                    webgl: l
                } = C, u = wn(l.smiley.sprite * 118, 0, 118), h = Math.floor(u), c = a[h];
                e.clearRect(0, 0, r, i), c && e.drawImage(c, n.x, o, n.width, n.height)
            };
            on() {
                B.on("tick", this.run), B.on("resize", this.resize)
            }
            off() {
                B.off("tick", this.run), B.off("resize", this.resize)
            }
            resize = () => {
                let {
                    container: t,
                    reference: e
                } = this.dom, {
                    el: r
                } = this.canvas;
                this.state.resize = !0;
                let i = window.devicePixelRatio || 1,
                    n = at(t),
                    o = at(e),
                    a = o.top - n.top;
                r.style.width = `${n.width}px`, r.style.height = `${n.height}px`, r.width = Math.floor(n.width * i), r.height = Math.floor(n.height * i), this.canvas.width = n.width, this.canvas.height = n.height, this.canvas.bounds = n, this.canvas.ctx.scale(i, i), this.state.resize = !1, Object.assign(this.canvas, {
                    area: o,
                    offset: a
                })
            };
            destroy() {
                this.off()
            }
            init() {
                this.loadImages(), this.setup(), this.on()
            }
        };

    function rn({
        current: s,
        previous: t,
        direction: e,
        index: r
    }) {
        let i = I(".char-1", t),
            n = I(".char-1", s),
            o = I(".p", t),
            a = I(".p", s),
            l = .025,
            u = .045;
        if (r == 1 && E.to(".oneSection-bg", {
                duration: .8,
                scale: 1,
                rotate: 0,
                ease: "power3.inOut"
            }), r == 0 && E.to(".oneSection-bg", {
                duration: .8,
                scale: 0,
                rotate: -45,
                ease: "power3.inOut"
            }), E.set(s, {
                autoAlpha: 1
            }), r == 0 || r == 1 && e == "down") {
            E.set(t, {
                autoAlpha: 0
            });
            return
        }
        e == "down" ? (i[0] && E.fromTo(i, {
            duration: .5,
            y: "0%"
        }, {
            duration: .5,
            y: "102%",
            stagger: l,
            ease: "power3.inOut"
        }), o[0] && E.fromTo(o, {
            duration: .5,
            y: "0",
            autoAlpha: 1
        }, {
            duration: .5,
            y: "10",
            autoAlpha: 0,
            stagger: u,
            ease: "power3.inOut"
        }), n[0] && E.fromTo(n, {
            duration: .5,
            y: "-101%"
        }, {
            duration: .5,
            y: "0%",
            stagger: l,
            delay: .4,
            ease: "power3.inOut"
        }), a[0] && E.fromTo(a, {
            duration: .5,
            y: "-10",
            autoAlpha: 0
        }, {
            duration: .5,
            y: "0",
            autoAlpha: 1,
            stagger: u,
            delay: .4,
            ease: "power3.inOut"
        })) : (i[0] && E.fromTo(i, {
            duration: .5,
            y: "0%"
        }, {
            duration: .5,
            y: "-101%",
            stagger: l,
            ease: "power3.inOut"
        }), o[0] && E.fromTo(o, {
            duration: .5,
            y: "0",
            autoAlpha: 1
        }, {
            duration: .5,
            y: "10",
            autoAlpha: 0,
            stagger: u,
            ease: "power3.inOut"
        }), n[0] && E.fromTo(n, {
            duration: .5,
            y: "102%"
        }, {
            duration: .5,
            y: "0%",
            stagger: .04,
            delay: .4,
            ease: "power3.inOut"
        }), a[0] && E.fromTo(a, {
            duration: .5,
            y: "-10",
            autoAlpha: 0
        }, {
            duration: .5,
            y: "0",
            autoAlpha: 1,
            stagger: u,
            delay: .4,
            ease: "power3.inOut"
        }))
    }

    function ga() {
        let s = I(".largeTitle");
        s[0] && s.forEach(t => {
            let e = N(".line-0", t);
            E.timeline({
                scrollTrigger: {
                    trigger: t,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: !0
                }
            }).to(e, {
                scale: .35
            })
        })
    }

    function sn() {
        let s = N(".largeTitle-txt");
        if (s) {
            let t = I(".char-1", s);
            E.set(s, {
                autoAlpha: 1
            }), E.from(t, {
                duration: .8,
                y: "-200%",
                stagger: .05,
                delay: .3
            })
        }
    }

    function xa() {
        let s = I(".caseTable");
        s[0] && s.forEach(a => {
            let l = I(".table-row", a),
                u = E.timeline({
                    scrollTrigger: {
                        trigger: a,
                        start: "top 70%",
                        end: "bottom 0%",
                        once: !0
                    }
                });
            l[0] && u.from(l, {
                autoAlpha: 0,
                stagger: .1
            })
        });
        let t = I(".caseImages");
        t[0] && t.forEach(a => {
            let l = I(".cover", a),
                u = E.timeline({
                    scrollTrigger: {
                        trigger: a,
                        start: "top 70%",
                        end: "bottom 0%",
                        once: !0
                    }
                });
            if (l[0] && u.fromTo(l, {
                    y: 30,
                    autoAlpha: 0
                }, {
                    y: 0,
                    autoAlpha: 1,
                    stagger: .2
                }), l.length > 1) {
                let d = function () {
                        let g = a.querySelector(".caseImages-content");
                        if (c < h) {
                            let p = 0 - (l[0].offsetWidth + 12.8) * (f + 1),
                                m = (l[0].offsetWidth + 12.8) * (l.length - 1);
                            p >= 0 - m && (E.to(g, {
                                x: p
                            }), f = f + 1)
                        }
                        if (c > h) {
                            let p = 0 - (l[0].offsetWidth + 12.8) * (f - 1);
                            f > 0 && (E.to(g, {
                                x: p
                            }), f = f - 1)
                        }
                    },
                    h = 0,
                    c = 0,
                    f = 0;
                a.addEventListener("touchstart", g => {
                    h = g.changedTouches[0].screenX
                }), a.addEventListener("touchend", g => {
                    c = g.changedTouches[0].screenX, d()
                })
            }
        });
        let e = I(".caseSquares");
        e[0] && e.forEach(a => {
            let l = a.querySelectorAll(".caseSquares-anim");
            E.timeline({
                scrollTrigger: {
                    trigger: a,
                    start: "top 80%",
                    end: "bottom 0%",
                    once: !0
                }
            }).fromTo(l, {
                y: 120
            }, {
                y: 0,
                stagger: .05
            })
        });
        let r = I(".caseColumns");
        r[0] && r.forEach(a => {
            let l = a.querySelectorAll(".caseColumns-column");
            E.timeline({
                scrollTrigger: {
                    trigger: a,
                    start: "top 70%",
                    end: "bottom 0%",
                    scrub: .1
                }
            }).from(l, {
                marginTop: "12rem"
            })
        });
        let i = I(".caseBlocks");
        i[0] && i.forEach(a => {
            let l = a.querySelectorAll("img");
            E.timeline({
                scrollTrigger: {
                    trigger: a,
                    start: "top 120%",
                    scrub: !0,
                    once: !0
                }
            }).from(l, {
                duration: .6,
                scale: 1.05,
                stagger: .05
            })
        });
        let n = I(".caseQuote");
        n[0] && n.forEach(a => {
            let l = N("img", a);
            E.timeline({
                scrollTrigger: {
                    trigger: a,
                    start: "top 70%",
                    end: "bottom 0%",
                    once: !0
                }
            }).from(l, {
                y: -30
            })
        });
        let o = I(".caseGrid");
        o[0] && o.forEach(a => {
            let l = I(".caseGrid-box", a);
            E.timeline({
                scrollTrigger: {
                    trigger: a,
                    start: "top 70%",
                    end: "bottom 0%",
                    once: !0
                }
            }).fromTo(l, {
                autoAlpha: 0,
                y: 30
            }, {
                y: 0,
                autoAlpha: 1,
                stagger: .1
            })
        })
    }

    function nn() {
        let {
            sniff: s
        } = C, t = N(".heroEmojis") || N(".heroLegal");
        if (t) {
            let e = I(".line-0", t),
                r = I(".icon", t),
                i = I(".inner", t),
                n = N(".circle", t),
                o = N(".heroEmojis-tag"),
                a = N(".heroLegal-description") || N(".heroEmojis-description"),
                l = I(".line-0", a),
                u = E.timeline({
                    repeat: -1,
                    repeatDelay: .5,
                    paused: !0
                }),
                h = E.timeline({
                    repeat: -1,
                    repeatDelay: .5,
                    paused: !0
                }),
                c = n ? at(n).width : 0,
                f = s.browser.isPhone,
                d = s.browser.isDevice;
            E.set(t, {
                autoAlpha: 1
            }), r.forEach((g, p) => {
                p % 2 == 0 ? (h.to(i[p], {
                    duration: .4,
                    autoAlpha: 0,
                    delay: .5
                }, 0), h.to(r[p], {
                    duration: .4,
                    autoAlpha: 1
                }, "-=0.4")) : (u.to(i[p], {
                    duration: .4,
                    autoAlpha: 0,
                    delay: .5
                }, 0), u.to(r[p], {
                    duration: .4,
                    autoAlpha: 1
                }, "-=0.4"))
            }), e.forEach(g => {
                let p = I(".char-1", g);
                p[0] && E.from(p, {
                    duration: .8,
                    y: "-101%",
                    stagger: .05,
                    onComplete: () => {
                        h.play(), setTimeout(() => {
                            u.play()
                        }, 500)
                    }
                })
            }), o && E.from(o, {
                duration: .4,
                y: -20,
                autoAlpha: 0,
                delay: .5
            }), a && E.from(l, {
                duration: .8,
                y: -20,
                autoAlpha: 0,
                stagger: .05,
                delay: .6
            }), n && E.fromTo(n, {
                width: c
            }, {
                duration: .8,
                width: f ? c * 1.5 : d ? c * 2 : c * 3,
                yoyo: !0,
                repeat: -1,
                ease: "power3.inOut",
                delay: 1,
                repeatDelay: 1.2
            })
        }
    }

    function Da() {
        let {
            page: s,
            sniff: t
        } = C, e = N(".preloader"), r = N(".icon", e), i = N(".glitch", e), n = N(".logo", e), o = E.timeline(), a = s.vw < s.vh ? s.vh : s.vw, l = (a / 2 - 7) * 100 / s.vw;
        o.to(e, {
            duration: .8,
            delay: .8,
            boxShadow: `inset 0 0 0 ${l}vw rgb(236, 236, 236)`,
            onComplete: () => {
                E.set(".background", {
                    autoAlpha: 0
                }), E.set(".bar", {
                    autoAlpha: 1
                }), E.set(".dot", {
                    autoAlpha: 1
                }), E.set(r, {
                    autoAlpha: 1
                }), E.set(e, {
                    boxShadow: `inset 0 0 0 ${a}px rgb(236, 236, 236)`
                })
            }
        }), o.fromTo(r, {
            x: "100%"
        }, {
            duration: .6,
            x: "50%",
            ease: "power2.inOut"
        }), o.fromTo(".bar", {
            x: "110%"
        }, {
            duration: .6,
            x: "160%",
            ease: "power2.inOut"
        }, "-=0.6"), o.to(".dot", {
            duration: .6,
            x: "11rem",
            ease: "power2.inOut"
        }, "-=0.6"), o.to(".dot", {
            duration: .6,
            skewX: -24,
            scaleX: 1.14,
            scaleY: 7.6,
            y: 14,
            x: 36,
            ease: "power2.inOut"
        }), o.to(".bar", {
            duration: .6,
            x: "120%",
            ease: "power2.inOut"
        }, "-=0.6"), o.to(r, {
            duration: .6,
            x: "80%",
            ease: "power2.inOut",
            onComplete: () => {
                i.classList.add("-animate"), E.set(i, {
                    autoAlpha: 1
                }), E.set(n, {
                    autoAlpha: 0
                })
            }
        }, "-=0.6"), o.set(i, {
            autoAlpha: 0,
            delay: .78,
            onComplete: () => {
                E.set(e, {
                    autoAlpha: 0
                }), E.set(C.page.el, {
                    autoAlpha: 1
                }), B.emit("preloaded")
            }
        })
    }

    function ya() {
        let s = N("header"),
            t = N(".logo", s),
            e = I(".menu-item", s);
        E.set(s, {
            autoAlpha: 1
        }), E.from(t, {
            duration: .5,
            autoAlpha: 0,
            y: "-100",
            ease: "power2.out"
        }), E.from(e, {
            duration: .8,
            autoAlpha: 0,
            y: "-100",
            delay: .1,
            stagger: .05,
            ease: "power2.out"
        })
    }

    function _a() {
        let s = I(".swirlBlock-modal");
        s[0] && s.forEach(t => {
            let e = t.parentNode,
                r = I(".line-0", t),
                i = E.timeline({
                    scrollTrigger: {
                        trigger: e,
                        start: "center",
                        end: "bottom",
                        scrub: !0
                    }
                });
            i.to(t, {
                duration: .8,
                autoAlpha: 1
            }), i.from(r, {
                duration: .8,
                autoAlpha: 0,
                y: 20,
                stagger: .05
            }, "-=0.6")
        })
    }

    function on() {
        let s = N(".heroContact");
        if (s) {
            let t = I(".line-0", s),
                e = I("p", s),
                r = I("a", s);
            E.set(s, {
                autoAlpha: 1
            }), E.from(".bg-block", {
                duration: .6,
                scaleY: 0,
                stagger: .05
            }), t.forEach(i => {
                let n = I(".char-1", i);
                n[0] && E.from(n, {
                    duration: .8,
                    y: "-101%",
                    delay: .5,
                    stagger: .05
                })
            }), E.from(e, {
                duration: .6,
                autoAlpha: 0,
                y: 20,
                stagger: .1,
                delay: .8
            }), E.from(r, {
                duration: .6,
                autoAlpha: 0,
                y: 20,
                stagger: .1,
                delay: .8
            })
        }
    }

    function an() {
        if (N(".oneSection")) {
            let t = I(".slide-title"),
                e = I(".char-1", t[0]);
            E.set(t, {
                autoAlpha: 1
            }), E.from(e, {
                duration: .8,
                y: "-200%",
                stagger: .045,
                delay: .3
            })
        }
    }

    function ln() {
        let s = N(".caseHero"),
            {
                webgl: t
            } = C,
            {
                images: e
            } = t,
            r = C.webgl.images.planes[0];
        if (s) {
            let i = I(".line-0", s),
                n = N(".p", s),
                o = N(".caseHero-url", s),
                a = r ? r.plane.program.uniforms.uReveal : N(".asset-crop", s);
            E.set(s, {
                autoAlpha: 1
            }), i.forEach(l => {
                let u = I(".char-1", l);
                u[0] && E.from(u, {
                    duration: .8,
                    y: "-101%",
                    delay: .5,
                    stagger: .05
                })
            }), n && E.from(n, {
                duration: .5,
                autoAlpha: 0,
                y: 30,
                delay: .5
            }), o && E.from(o, {
                duration: .5,
                autoAlpha: 0,
                y: 30,
                delay: .7
            }), a && (r ? E.fromTo(a, {
                value: 1
            }, {
                duration: 2,
                value: 0,
                ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})"
            }) : E.from(a, {
                duration: 1,
                delay: .5,
                autoAlpha: 0
            }))
        }
    }

    function va() {
        let s = I(".largeTitle.-black");
        s[0] && s.forEach(t => {
            let e = E.timeline({
                scrollTrigger: {
                    trigger: t,
                    start: "top +100%",
                    end: "top",
                    scrub: !0
                }
            });
            e.to(".bg-block", {
                duration: .1,
                backgroundColor: "#262523"
            }), e.fromTo(".bg-block", {
                scaleY: 0
            }, {
                duration: .6,
                scaleY: 1,
                stagger: .05
            })
        }), s[0] && s.forEach(t => {
            E.timeline({
                scrollTrigger: {
                    trigger: t,
                    start: "bottom +100%",
                    end: "bottom",
                    scrub: !0
                }
            }).to(".bg-block", {
                duration: .6,
                scaleY: 0,
                stagger: .05
            })
        })
    }

    function wa() {
        let s = N(".smiley");
        if (s) {
            let t = N(".smiley-smile");
            E.timeline({
                scrollTrigger: {
                    trigger: s,
                    start: "top +100%",
                    end: "top -80%",
                    scrub: !0,
                    onLeave: () => {
                        E.set(t, {
                            autoAlpha: 0
                        })
                    },
                    onEnterBack: () => {
                        E.set(t, {
                            autoAlpha: 1
                        })
                    }
                }
            }).fromTo(t, {
                scale: 6
            }, {
                scale: .5
            })
        }
    }

    function Ea() {
        let {
            webgl: s
        } = C, t = N(".smiley");
        if (t) {
            let e = N(".smiley-animation"),
                r = N(".smiley-asset img"),
                i = E.timeline({
                    scrollTrigger: {
                        trigger: t,
                        start: "top -80%",
                        end: "center center",
                        scrub: !0,
                        onLeave: () => {
                            E.set(e, {
                                autoAlpha: 0
                            }), E.set(r, {
                                autoAlpha: 1
                            }), s.smiley.planes.forEach(n => {
                                n.plane.program.uniforms.uAlpha.value = 1
                            })
                        },
                        onEnterBack: () => {
                            E.set(e, {
                                autoAlpha: 1
                            }), E.set(r, {
                                autoAlpha: 0
                            }), s.smiley.planes.forEach(n => {
                                n.plane.program.uniforms.uAlpha.value = 0
                            })
                        },
                        onUpdate: n => {
                            C.webgl.smiley.sprite = n.progress
                        }
                    }
                })
        }
    }

    function ba() {
        let {
            webgl: s
        } = C, t = N(".smiley");
        if (t) {
            let e = E.timeline({
                scrollTrigger: {
                    trigger: t,
                    start: "center center",
                    end: "bottom bottom",
                    scrub: !0,
                    onUpdate: r => {
                        s.smiley.gooey = r.progress
                    }
                }
            })
        }
    }

    function Ca() {
        let s = N(".smiley");
        if (s) {
            let t = I(".smiley-title", s),
                e = E.timeline({
                    scrollTrigger: {
                        trigger: s,
                        start: "top +100%",
                        end: "top -80%",
                        scrub: !0,
                        onLeave: () => {
                            E.to(t, {
                                autoAlpha: 0
                            })
                        },
                        onEnterBack: () => {
                            E.to(t, {
                                autoAlpha: 1
                            })
                        }
                    }
                });
            e.fromTo(t[0], {
                scale: 4
            }, {
                scale: .9
            }, 0), e.fromTo(t[1], {
                scale: 0
            }, {
                scale: .9
            }, 0)
        }
    }

    function un() {
        let s = N(".heroElva");
        if (s) {
            let t = I("h1 .line-0", s),
                e = I("p .char-1", s);
            E.set(s, {
                autoAlpha: 1
            }), E.from(".bg-block", {
                duration: .6,
                scaleY: 0,
                stagger: .05
            }), t.forEach(r => {
                let i = I(".char-1", r);
                i[0] && E.from(i, {
                    duration: .8,
                    y: "-101%",
                    delay: .5,
                    stagger: .05
                })
            }), e[0] && E.from(e, {
                duration: 1,
                autoAlpha: 0,
                stagger: .02,
                delay: .5,
                ease: "power3.inOut"
            })
        }
    }
    var Ec = class extends Gr.Renderer {
            constructor(t = {}) {
                super(t);
                E.registerPlugin(Q), Ye(this, "animateIn"), this.state = {
                    ready: !1,
                    split: !1
                }
            }
            onEnter() {
                let {
                    sniff: t,
                    body: e
                } = C;
                t.browser.isDevice && e.classList.add("is-device"), C.page.el = this.wrap.lastElementChild
            }
            onEnterCompleted() {
                Q.refresh(), C.flags.loaded && this.ready(), this.on(), this.preloader()
            }
            ready = () => {
                this.state.ready || (this.state.ready = !0, this.els(), this.addComponents())
            };
            els() {
                this.dom = {
                    images: I("img"),
                    footer: N("footer")
                }
            }
            addComponents() {
                let {
                    forms: t
                } = this.dom;
                this.addSmooth(), this.addScrollTrigger(), this.addSplitText(), this.addMarquee(), this.loadImages()
            }
            loadImages() {
                let {
                    images: t
                } = this.dom;
                t.length === 0 ? Ge && Ge.update() : Promise.all(t.filter(e => !e.complete).map(e => new Promise(r => {
                    e.onload = e.onerror = r
                }))).then(() => {
                    Ge && Ge.update()
                })
            }
            preloader() {
                let {
                    ready: t
                } = this.state
            }
            run = ({
                current: t
            }) => {
                this.current = t, Q.update()
            };
            on() {
                B.on("tick", this.run), B.on("loaded", this.ready), B.on("preloaded", this.animateIn), B.on("resize", this.onResize), En(), bn()
            }
            off() {
                B.off("tick", this.run), B.off("loaded", this.ready), B.off("preloaded", this.animateIn), B.off("resize", this.onResize)
            }
            addSmooth() {
                let t = I("[data-smooth-item]", this.el);
                C.SCROLL.setScrollBounds(), C.flags.locked = !1, Ge.init(t)
            }
            animateIn() {
                C.LOADED || ya(), C.LOADED = !0
            }
            addSplitText() {
                this.spliText = new js
            }
            addScrollTrigger() {
                let {
                    body: t,
                    page: e
                } = C;
                Q.defaults({
                    scroller: t
                }), Q.scrollerProxy(t, {
                    scrollTop: () => this.current,
                    getBoundingClientRect() {
                        return {
                            top: 0,
                            left: 0,
                            width: e.vw,
                            height: e.vh
                        }
                    }
                }), Q.refresh()
            }
            addMarquee() {
                let {
                    footer: t
                } = this.dom;
                t && (this.marquee = new vr({
                    els: I(".marquee-line")
                }))
            }
            onResize = () => {
                setTimeout(() => {
                    Q.update(), Q.refresh()
                }, 100)
            };
            onLeave() {
                this.off(), C.flags.locked = !0, this.marquee && this.marquee.destroy(), E.set(C.body, {
                    clearProps: "all"
                })
            }
            onLeaveCompleted() {
                Q.getAll().forEach(t => t.kill(!0))
            }
        },
        Ta = Ec;
    var ai = class extends Ta {
        constructor(t = {}) {
            super(t);
            this.slug = "page"
        }
        onEnter() {
            super.onEnter()
        }
        onEnterCompleted() {
            super.onEnterCompleted()
        }
        els() {
            super.els();
            let t = {
                    circular: N(".slider.-circular"),
                    horizontal: N(".slider.-horizontal"),
                    el: N(".slider-container"),
                    els: I(".slider-item"),
                    labels: I(".slider-label")
                },
                e = {
                    bgs: I(".team-inner"),
                    els: I(".team-item"),
                    container: N(".team-bg")
                },
                r = {
                    els: I("form"),
                    marqueeDefault: N(".marquee-default"),
                    marqueeSuccess: N(".marquee-success")
                };
            Object.assign(this.dom, {
                home: N(".is-home"),
                flipped: N(".oneSection"),
                sticky: I("[data-sticky]"),
                planes: I("[data-plane]"),
                slider: t,
                team: e,
                forms: r
            })
        }
        addComponents() {
            super.addComponents();
            let {
                forms: t
            } = this.dom, {
                ready: e
            } = this.state;
            setTimeout(() => {
                this.addFlip(), this.addCursor(), this.addSlider(), this.addTeam(), this.addIndex(), this.addParticles(), this.addBoxes(), this.addSprite(), this.addAnimations(), this.addSticky(), this.addDomGL()
            }, 100), t.els[0] && t.els.forEach(r => {
                r.addEventListener("submit", i => {
                    this.handleSubmit(i, r)
                }), r.addEventListener("click", i => {
                    this.handleError(i, r)
                })
            })
        }
        animateIn() {
            super.animateIn(), setTimeout(() => {
                ln()
            }, 100), nn(), on(), sn(), an(), un()
        }
        addSticky() {
            let {
                sticky: t
            } = this.dom;
            this.stickies = [], t[0] && t.forEach((e, r) => {
                let i = new Ks({
                    el: e
                });
                i.on(), this.stickies.push(i)
            })
        }
        addFlip() {
            let {
                flipped: t
            } = this.dom;
            t && (this.flip = new Ws)
        }
        addCursor() {
            let {
                sniff: t
            } = C, {
                home: e
            } = this.dom, r = N(".cursor-dark");
            !e || t.browser.isDesktop && (this.cursor = new Zs({
                container: C.page.el,
                markers: [{
                    el: N(".featuredProject-asset"),
                    icon: r ? "/images/circle-dark.png" : "/images/circle-light.png",
                    skin: r ? "dark" : "light",
                    size: 48
                }]
            }))
        }
        addSlider() {
            let {
                slider: t
            } = this.dom, {
                circular: e,
                horizontal: r,
                el: i,
                els: n,
                labels: o
            } = t;
            e && (this.circular = new gs({
                container: e,
                el: i,
                els: n,
                labels: o,
                template: "circular"
            })), r && (this.horizontal = new gs({
                container: r,
                el: i,
                els: n,
                template: "horizontal"
            }))
        }
        addTeam() {
            let {
                team: t
            } = this.dom, {
                els: e,
                bgs: r,
                container: i
            } = t;
            if (!e[0]) return;
            let n = a => {
                    let u = a.target.dataset.service,
                        h = N(`.${u}`),
                        c = I(".team-asset", h);
                    r.forEach(f => f.classList.remove("-active")), h.classList.add("-active"), i.classList.add("-color"), E.fromTo(c, {
                        autoAlpha: 0,
                        y: 10
                    }, {
                        duration: .35,
                        y: 0,
                        autoAlpha: 1,
                        stagger: .03
                    })
                },
                o = () => {
                    i.classList.remove("-color")
                };
            e.forEach(a => {
                a.addEventListener("mouseenter", n), a.addEventListener("mouseleave", o)
            })
        }
        addDomGL() {
            let {
                sniff: t
            } = C, {
                planes: e
            } = this.dom;
            !e[0] || t.browser.isDesktop && (this.domGL = new ti({
                container: C.page.el,
                textures: e
            }))
        }
        addIndex() {
            let t = N(".work-index");
            t && (this.indexGallery = new si({
                el: t
            }))
        }
        addParticles() {
            let {
                flipped: t
            } = this.dom;
            t && (this.particles = new ri({
                container: t
            }))
        }
        addBoxes() {
            let t = N(".oneSection");
            t && (this.boxes = new ni({
                container: t
            }))
        }
        addSprite() {
            let t = N(".smiley-content");
            t && (this.sprite = new oi({
                container: t,
                canvas: N(".smiley-frames")
            }))
        }
        addMarquee() {
            super.addMarquee();
            let {
                forms: t
            } = this.dom, {
                marqueeDefault: e,
                marqueeSuccess: r
            } = t;
            e && (this.submit = new vr({
                els: I(".marquee-item", e)
            })), r && (this.success = new vr({
                els: I(".marquee-item", r)
            }))
        }
        addAnimations() {
            let {
                LOADED: t
            } = C;
            t && setTimeout(() => {
                nn(), on(), sn(), ln(), an(), un()
            }, 10), ga(), _a(), xa(), va(), wa(), Ea(), ba(), Ca()
        }
        handleSubmit = (t, e) => {
            t.preventDefault();
            let {
                forms: r
            } = this.dom, {
                marqueeDefault: i,
                marqueeSuccess: n
            } = r, o = new FormData(e);
            fetch(e.getAttribute("action"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(o).toString()
            }).then(() => {
                E.set(i, {
                    autoAlpha: 0
                }), E.set(n, {
                    autoAlpha: 1
                }), e.reset()
            }).catch(a => console.log(a))
        };
        handleError = (t, e) => {
            I("[required]", e).forEach(i => {
                let n = i.value.length,
                    o = i.parentNode;
                n < 1 ? o.classList.add("-error") : o.classList.remove("-error")
            })
        };
        on() {
            super.on(), B.on("flip", t => rn(t))
        }
        off() {
            super.off(), B.off("flip", t => rn(t))
        }
        onLeave() {
            super.onLeave(), this.off(), this.flip && this.flip.destroy(), this.horizontal && this.horizontal.destroy(), this.circular && this.circular.destroy(), this.submit && this.submit.destroy(), this.success && this.success.destroy(), this.particles && this.particles.destroy(), this.indexGallery && this.indexGallery.destroy(), this.boxes && this.boxes.destroy(), this.sprite && this.sprite.destroy(), this.stickies.forEach(t => {
                t && t.destroy()
            }), this.dom = {}
        }
        onLeaveCompleted() {
            super.onLeaveCompleted(), this.domGL && this.domGL.destroy()
        }
    };
    var xs = class extends Gr.Transition {
        in ({
            from: t,
            to: e,
            done: r
        }) {
            let i = E.timeline({
                paused: !0
            });
            window.scrollTo(0, 0), C.body.scrollTo(0, 0), C.RAF.reset(), t.remove(), r(), i.fromTo(e, {
                autoAlpha: 0
            }, {
                duration: .5,
                autoAlpha: 1
            }), i.play()
        }
        out({
            from: t,
            done: e
        }) {
            let r = E.timeline({
                paused: !0,
                onComplete: () => e()
            });
            r.fromTo(t, {
                autoAlpha: 1
            }, {
                duration: .5,
                autoAlpha: 0
            }), r.play()
        }
    };
    var hn = class {
        constructor() {
            let t = I(".link-title");
            C.H = new Gr.Core({
                renderers: {
                    page: ai
                },
                transitions: {
                    default: xs,
                    contextual: {
                        fade: xs
                    }
                }
            }), t.forEach(r => {
                new Ne(r, {
                    type: "chars",
                    charsClass: "char-0"
                })
            });
            let e = new qs({
                desktopMenu: N("header"),
                mobileMenu: N(".menuMobile"),
                footer: N("footer"),
                url: C.H.location.href,
                open: N("header .burger"),
                close: N(".menuMobile .close")
            });
            C.H.on("NAVIGATE_END", r => {
                e.update(C.H.location.href)
            }), C.H.on("NAVIGATE_OUT", r => {
                e.closeMenu(), e.playTransition()
            })
        }
    };
    var Fa = or(mo()),
        Aa = or(bc()),
        fn = class {
            constructor() {
                console.log(`%c${C.title} 
Made with \u2764\uFE0F by ${C.author.name} 
\u21B3 ${C.author.link}`, "color: #342f2f"), C.page.vw = Xr().width, C.page.vh = Xr().height, C.sniff.breakpoints = ws(), C.sniff.browser = Mt.sniff, Aa.default.cfg.lazyClass = "lazy", Aa.default.cfg.loadedClass = "loaded", this.init()
            }
            core() {
                new hn, C.RAF = new ar, C.SCROLL = new Us({
                    smooth: Mt.isDesktop
                }), C.MOUSE = new Ns, C.RESIZE = new Is
            }
            grid() {
                new Bs({
                    background: "#a25b4c",
                    desktop: {
                        columns: 18
                    },
                    mobile: {
                        columns: 4,
                        gutter: 27,
                        size: 390
                    }
                })
            }
            load() {
                Da();
                let t = new Fa.default("Basis", 1e4),
                    e = new Fa.default("Messina Sans", 1e4);
                Promise.all([t.load(), e.load()]).then(() => {
                    C.flags.loaded = !0, C.RESIZE.resize(), B.emit("loaded")
                })
            }
            init() {
                this.core(), this.grid(), this.load(), C.RAF.on(), C.SCROLL.on(), C.MOUSE.on()
            }
        };
    new fn;
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * ScrollTrigger 3.7.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * SplitText: 3.4.2
 * https://greensock.com
 *
 * @license Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * strings: 3.4.2
 * https://greensock.com
 *
 * Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/**
 * Generates event when user makes new movement (like a swipe on a touchscreen).
 * @version 1.2.2
 * @link https://github.com/Promo/wheel-indicator
 * @license MIT
 */
//# sourceMappingURL=app.js.map