!function (e, t) {
    function n(e) {
        var t = dt[e] = {};
        return K.each(e.split(tt), function (e, n) {
            t[n] = !0
        }),
            t
    }
    function i(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var r = "data-" + n.replace(gt, "-$1").toLowerCase();
            if (i = e.getAttribute(r),
                "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : mt.test(i) ? K.parseJSON(i) : i
                } catch (s) { }
                K.data(e, n, i)
            } else
                i = t
        }
        return i
    }
    function r(e) {
        var t;
        for (t in e)
            if (("data" !== t || !K.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function s() {
        return !1
    }
    function o() {
        return !0
    }
    function a(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }
    function l(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType); return e
    }
    function u(e, t, n) {
        if (t = t || 0,
            K.isFunction(t))
            return K.grep(e, function (e, i) {
                var r = !!t.call(e, i, e);
                return r === n
            });
        if (t.nodeType)
            return K.grep(e, function (e) {
                return e === t === n
            });
        if ("string" == typeof t) {
            var i = K.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (Rt.test(t))
                return K.filter(t, i, !n);
            t = K.filter(t, i)
        }
        return K.grep(e, function (e) {
            return K.inArray(e, t) >= 0 === n
        })
    }
    function c(e) {
        var t = Bt.split("|")
            , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;)
                n.createElement(t.pop());
        return n
    }
    function h(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function f(e, t) {
        if (1 === t.nodeType && K.hasData(e)) {
            var n, i, r, s = K._data(e), o = K._data(t, s), a = s.events;
            if (a) {
                delete o.handle,
                    o.events = {};
                for (n in a)
                    for (i = 0,
                        r = a[n].length; r > i; i++)
                        K.event.add(t, n, a[n][i])
            }
            o.data && (o.data = K.extend({}, o.data))
        }
    }
    function p(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(),
            t.mergeAttributes && t.mergeAttributes(e),
            n = t.nodeName.toLowerCase(),
            "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
                K.support.html5Clone && e.innerHTML && !K.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Yt.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
                    t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text),
            t.removeAttribute(K.expando))
    }
    function d(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }
    function m(e) {
        Yt.test(e.type) && (e.defaultChecked = e.checked)
    }
    function g(e, t) {
        if (t in e)
            return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = vn.length; r--;)
            if (t = vn[r] + n,
                t in e)
                return t;
        return i
    }
    function y(e, t) {
        return e = t || e,
            "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
    }
    function v(e, t) {
        for (var n, i, r = [], s = 0, o = e.length; o > s; s++)
            n = e[s],
                n.style && (r[s] = K._data(n, "olddisplay"),
                    t ? (!r[s] && "none" === n.style.display && (n.style.display = ""),
                        "" === n.style.display && y(n) && (r[s] = K._data(n, "olddisplay", w(n.nodeName)))) : (i = nn(n, "display"),
                            !r[s] && "none" !== i && K._data(n, "olddisplay", i)));
        for (s = 0; o > s; s++)
            n = e[s],
                n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[s] || "" : "none"));
        return e
    }
    function _(e, t, n) {
        var i = hn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function b(e, t, n, i) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2)
            "margin" === n && (s += K.css(e, n + yn[r], !0)),
                i ? ("content" === n && (s -= parseFloat(nn(e, "padding" + yn[r])) || 0),
                    "margin" !== n && (s -= parseFloat(nn(e, "border" + yn[r] + "Width")) || 0)) : (s += parseFloat(nn(e, "padding" + yn[r])) || 0,
                        "padding" !== n && (s += parseFloat(nn(e, "border" + yn[r] + "Width")) || 0));
        return s
    }
    function x(e, t, n) {
        var i = "width" === t ? e.offsetWidth : e.offsetHeight
            , r = !0
            , s = K.support.boxSizing && "border-box" === K.css(e, "boxSizing");
        if (0 >= i || null == i) {
            if (i = nn(e, t),
                (0 > i || null == i) && (i = e.style[t]),
                fn.test(i))
                return i;
            r = s && (K.support.boxSizingReliable || i === e.style[t]),
                i = parseFloat(i) || 0
        }
        return i + b(e, t, n || (s ? "border" : "content"), r) + "px"
    }
    function w(e) {
        if (dn[e])
            return dn[e];
        var t = K("<" + e + ">").appendTo(F.body)
            , n = t.css("display");
        return t.remove(),
            ("none" === n || "" === n) && (rn = F.body.appendChild(rn || K.extend(F.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            })),
                sn && rn.createElement || (sn = (rn.contentWindow || rn.contentDocument).document,
                    sn.write("<!doctype html><html><body>"),
                    sn.close()),
                t = sn.body.appendChild(sn.createElement(e)),
                n = nn(t, "display"),
                F.body.removeChild(rn)),
            dn[e] = n,
            n
    }
    function T(e, t, n, i) {
        var r;
        if (K.isArray(t))
            K.each(t, function (t, r) {
                n || xn.test(e) ? i(e, r) : T(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
        else if (n || "object" !== K.type(t))
            i(e, t);
        else
            for (r in t)
                T(e + "[" + r + "]", t[r], n, i)
    }
    function C(e) {
        return function (t, n) {
            "string" != typeof t && (n = t,
                t = "*");
            var i, r, s, o = t.toLowerCase().split(tt), a = 0, l = o.length;
            if (K.isFunction(n))
                for (; l > a; a++)
                    i = o[a],
                        s = /^\+/.test(i),
                        s && (i = i.substr(1) || "*"),
                        r = e[i] = e[i] || [],
                        r[s ? "unshift" : "push"](n)
        }
    }
    function k(e, n, i, r, s, o) {
        s = s || n.dataTypes[0],
            o = o || {},
            o[s] = !0;
        for (var a, l = e[s], u = 0, c = l ? l.length : 0, h = e === On; c > u && (h || !a); u++)
            a = l[u](n, i, r),
                "string" == typeof a && (!h || o[a] ? a = t : (n.dataTypes.unshift(a),
                    a = k(e, n, i, r, a, o)));
        return (h || !a) && !o["*"] && (a = k(e, n, i, r, "*", o)),
            a
    }
    function S(e, n) {
        var i, r, s = K.ajaxSettings.flatOptions || {};
        for (i in n)
            n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        r && K.extend(!0, e, r)
    }
    function A(e, n, i) {
        var r, s, o, a, l = e.contents, u = e.dataTypes, c = e.responseFields;
        for (s in c)
            s in i && (n[c[s]] = i[s]);
        for (; "*" === u[0];)
            u.shift(),
                r === t && (r = e.mimeType || n.getResponseHeader("content-type"));
        if (r)
            for (s in l)
                if (l[s] && l[s].test(r)) {
                    u.unshift(s);
                    break
                }
        if (u[0] in i)
            o = u[0];
        else {
            for (s in i) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    o = s;
                    break
                }
                a || (a = s)
            }
            o = o || a
        }
        return o ? (o !== u[0] && u.unshift(o),
            i[o]) : void 0
    }
    function E(e, t) {
        var n, i, r, s, o = e.dataTypes.slice(), a = o[0], l = {}, u = 0;
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            o[1])
            for (n in e.converters)
                l[n.toLowerCase()] = e.converters[n];
        for (; r = o[++u];)
            if ("*" !== r) {
                if ("*" !== a && a !== r) {
                    if (n = l[a + " " + r] || l["* " + r],
                        !n)
                        for (i in l)
                            if (s = i.split(" "),
                                s[1] === r && (n = l[a + " " + s[0]] || l["* " + s[0]])) {
                                n === !0 ? n = l[i] : l[i] !== !0 && (r = s[0],
                                    o.splice(u--, 0, r));
                                break
                            }
                    if (n !== !0)
                        if (n && e["throws"])
                            t = n(t);
                        else
                            try {
                                t = n(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: n ? c : "No conversion from " + a + " to " + r
                                }
                            }
                }
                a = r
            }
        return {
            state: "success",
            data: t
        }
    }
    function N() {
        try {
            return new e.XMLHttpRequest
        } catch (t) { }
    }
    function P() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) { }
    }
    function M() {
        return setTimeout(function () {
            Gn = t
        }, 0),
            Gn = K.now()
    }
    function D(e, t) {
        K.each(t, function (t, n) {
            for (var i = (ei[t] || []).concat(ei["*"]), r = 0, s = i.length; s > r; r++)
                if (i[r].call(e, t, n))
                    return
        })
    }
    function L(e, t, n) {
        var i, r = 0, s = Zn.length, o = K.Deferred().always(function () {
            delete a.elem
        }), a = function () {
            for (var t = Gn || M(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, r = 1 - i, s = 0, a = l.tweens.length; a > s; s++)
                l.tweens[s].run(r);
            return o.notifyWith(e, [l, r, n]),
                1 > r && a ? n : (o.resolveWith(e, [l]),
                    !1)
        }, l = o.promise({
            elem: e,
            props: K.extend({}, t),
            opts: K.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Gn || M(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = K.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(i),
                    i
            },
            stop: function (t) {
                for (var n = 0, i = t ? l.tweens.length : 0; i > n; n++)
                    l.tweens[n].run(1);
                return t ? o.resolveWith(e, [l, t]) : o.rejectWith(e, [l, t]),
                    this
            }
        }), u = l.props;
        for (j(u, l.opts.specialEasing); s > r; r++)
            if (i = Zn[r].call(l, e, u, l.opts))
                return i;
        return D(l, u),
            K.isFunction(l.opts.start) && l.opts.start.call(e, l),
            K.fx.timer(K.extend(a, {
                anim: l,
                queue: l.opts.queue,
                elem: e
            })),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function j(e, t) {
        var n, i, r, s, o;
        for (n in e)
            if (i = K.camelCase(n),
                r = t[i],
                s = e[n],
                K.isArray(s) && (r = s[1],
                    s = e[n] = s[0]),
                n !== i && (e[i] = s,
                    delete e[n]),
                o = K.cssHooks[i],
                o && "expand" in o) {
                s = o.expand(s),
                    delete e[i];
                for (n in s)
                    n in e || (e[n] = s[n],
                        t[n] = r)
            } else
                t[i] = r
    }
    function H(e, t, n) {
        var i, r, s, o, a, l, u, c, h, f = this, p = e.style, d = {}, m = [], g = e.nodeType && y(e);
        n.queue || (c = K._queueHooks(e, "fx"),
            null == c.unqueued && (c.unqueued = 0,
                h = c.empty.fire,
                c.empty.fire = function () {
                    c.unqueued || h()
                }
            ),
            c.unqueued++,
            f.always(function () {
                f.always(function () {
                    c.unqueued--,
                        K.queue(e, "fx").length || c.empty.fire()
                })
            })),
            1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                "inline" === K.css(e, "display") && "none" === K.css(e, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== w(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
            n.overflow && (p.overflow = "hidden",
                K.support.shrinkWrapBlocks || f.done(function () {
                    p.overflow = n.overflow[0],
                        p.overflowX = n.overflow[1],
                        p.overflowY = n.overflow[2]
                }));
        for (i in t)
            if (s = t[i],
                Jn.exec(s)) {
                if (delete t[i],
                    l = l || "toggle" === s,
                    s === (g ? "hide" : "show"))
                    continue;
                m.push(i)
            }
        if (o = m.length) {
            a = K._data(e, "fxshow") || K._data(e, "fxshow", {}),
                "hidden" in a && (g = a.hidden),
                l && (a.hidden = !g),
                g ? K(e).show() : f.done(function () {
                    K(e).hide()
                }),
                f.done(function () {
                    var t;
                    K.removeData(e, "fxshow", !0);
                    for (t in d)
                        K.style(e, t, d[t])
                });
            for (i = 0; o > i; i++)
                r = m[i],
                    u = f.createTween(r, g ? a[r] : 0),
                    d[r] = a[r] || K.style(e, r),
                    r in a || (a[r] = u.start,
                        g && (u.end = u.start,
                            u.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function R(e, t, n, i, r) {
        return new R.prototype.init(e, t, n, i, r)
    }
    function O(e, t) {
        var n, i = {
            height: e
        }, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = yn[r],
                i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
            i
    }
    function z(e) {
        return K.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var B, I, F = e.document, q = e.location, $ = e.navigator, W = e.jQuery, X = e.$, Q = Array.prototype.push, U = Array.prototype.slice, G = Array.prototype.indexOf, Y = Object.prototype.toString, J = Object.prototype.hasOwnProperty, V = String.prototype.trim, K = function (e, t) {
        return new K.fn.init(e, t, B)
    }, Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, et = /\S/, tt = /\s+/, nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, it = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, rt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, st = /^[\],:{}\s]*$/, ot = /(?:^|:|,)(?:\s*\[)+/g, at = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ut = /^-ms-/, ct = /-([\da-z])/gi, ht = function (e, t) {
        return (t + "").toUpperCase()
    }, ft = function () {
        F.addEventListener ? (F.removeEventListener("DOMContentLoaded", ft, !1),
            K.ready()) : "complete" === F.readyState && (F.detachEvent("onreadystatechange", ft),
                K.ready())
    }, pt = {};
    K.fn = K.prototype = {
        constructor: K,
        init: function (e, n, i) {
            var r, s, o;
            if (!e)
                return this;
            if (e.nodeType)
                return this.context = this[0] = e,
                    this.length = 1,
                    this;
            if ("string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : it.exec(e),
                    r && (r[1] || !n)) {
                    if (r[1])
                        return n = n instanceof K ? n[0] : n,
                            o = n && n.nodeType ? n.ownerDocument || n : F,
                            e = K.parseHTML(r[1], o, !0),
                            rt.test(r[1]) && K.isPlainObject(n) && this.attr.call(e, n, !0),
                            K.merge(this, e);
                    if (s = F.getElementById(r[2]),
                        s && s.parentNode) {
                        if (s.id !== r[2])
                            return i.find(e);
                        this.length = 1,
                            this[0] = s
                    }
                    return this.context = F,
                        this.selector = e,
                        this
                }
                return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e)
            }
            return K.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector,
                this.context = e.context),
                K.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return U.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function (e, t, n) {
            var i = K.merge(this.constructor(), e);
            return i.prevObject = this,
                i.context = this.context,
                "find" === t ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"),
                i
        },
        each: function (e, t) {
            return K.each(this, e, t)
        },
        ready: function (e) {
            return K.ready.promise().done(e),
                this
        },
        eq: function (e) {
            return e = +e,
                -1 === e ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(U.apply(this, arguments), "slice", U.call(arguments).join(","))
        },
        map: function (e) {
            return this.pushStack(K.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: Q,
        sort: [].sort,
        splice: [].splice
    },
        K.fn.init.prototype = K.fn,
        K.extend = K.fn.extend = function () {
            var e, n, i, r, s, o, a = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a,
                a = arguments[1] || {},
                l = 2),
                "object" != typeof a && !K.isFunction(a) && (a = {}),
                u === l && (a = this,
                    --l); u > l; l++)
                if (null != (e = arguments[l]))
                    for (n in e)
                        i = a[n],
                            r = e[n],
                            a !== r && (c && r && (K.isPlainObject(r) || (s = K.isArray(r))) ? (s ? (s = !1,
                                o = i && K.isArray(i) ? i : []) : o = i && K.isPlainObject(i) ? i : {},
                                a[n] = K.extend(c, o, r)) : r !== t && (a[n] = r));
            return a
        }
        ,
        K.extend({
            noConflict: function (t) {
                return e.$ === K && (e.$ = X),
                    t && e.jQuery === K && (e.jQuery = W),
                    K
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? K.readyWait++ : K.ready(!0)
            },
            ready: function (e) {
                if (e === !0 ? !--K.readyWait : !K.isReady) {
                    if (!F.body)
                        return setTimeout(K.ready, 1);
                    K.isReady = !0,
                        e !== !0 && --K.readyWait > 0 || (I.resolveWith(F, [K]),
                            K.fn.trigger && K(F).trigger("ready").off("ready"))
                }
            },
            isFunction: function (e) {
                return "function" === K.type(e)
            },
            isArray: Array.isArray || function (e) {
                return "array" === K.type(e)
            }
            ,
            isWindow: function (e) {
                return null != e && e == e.window
            },
            isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function (e) {
                return null == e ? String(e) : pt[Y.call(e)] || "object"
            },
            isPlainObject: function (e) {
                if (!e || "object" !== K.type(e) || e.nodeType || K.isWindow(e))
                    return !1;
                try {
                    if (e.constructor && !J.call(e, "constructor") && !J.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (n) {
                    return !1
                }
                var i;
                for (i in e)
                    ;
                return i === t || J.call(e, i)
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            error: function (e) {
                throw new Error(e)
            },
            parseHTML: function (e, t, n) {
                var i;
                return e && "string" == typeof e ? ("boolean" == typeof t && (n = t,
                    t = 0),
                    t = t || F,
                    (i = rt.exec(e)) ? [t.createElement(i[1])] : (i = K.buildFragment([e], t, n ? null : []),
                        K.merge([], (i.cacheable ? K.clone(i.fragment) : i.fragment).childNodes))) : null
            },
            parseJSON: function (t) {
                return t && "string" == typeof t ? (t = K.trim(t),
                    e.JSON && e.JSON.parse ? e.JSON.parse(t) : st.test(t.replace(at, "@").replace(lt, "]").replace(ot, "")) ? new Function("return " + t)() : void K.error("Invalid JSON: " + t)) : null
            },
            parseXML: function (n) {
                var i, r;
                if (!n || "string" != typeof n)
                    return null;
                try {
                    e.DOMParser ? (r = new DOMParser,
                        i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"),
                            i.async = "false",
                            i.loadXML(n))
                } catch (s) {
                    i = t
                }
                return (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + n),
                    i
            },
            noop: function () { },
            globalEval: function (t) {
                t && et.test(t) && (e.execScript || function (t) {
                    e.eval.call(e, t)
                }
                )(t)
            },
            camelCase: function (e) {
                return e.replace(ut, "ms-").replace(ct, ht)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, n, i) {
                var r, s = 0, o = e.length, a = o === t || K.isFunction(e);
                if (i)
                    if (a) {
                        for (r in e)
                            if (n.apply(e[r], i) === !1)
                                break
                    } else
                        for (; o > s && n.apply(e[s++], i) !== !1;)
                            ;
                else if (a) {
                    for (r in e)
                        if (n.call(e[r], r, e[r]) === !1)
                            break
                } else
                    for (; o > s && n.call(e[s], s, e[s++]) !== !1;)
                        ;
                return e
            },
            trim: V && !V.call("﻿ ") ? function (e) {
                return null == e ? "" : V.call(e)
            }
                : function (e) {
                    return null == e ? "" : (e + "").replace(nt, "")
                }
            ,
            makeArray: function (e, t) {
                var n, i = t || [];
                return null != e && (n = K.type(e),
                    null == e.length || "string" === n || "function" === n || "regexp" === n || K.isWindow(e) ? Q.call(i, e) : K.merge(i, e)),
                    i
            },
            inArray: function (e, t, n) {
                var i;
                if (t) {
                    if (G)
                        return G.call(t, e, n);
                    for (i = t.length,
                        n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e)
                            return n
                }
                return -1
            },
            merge: function (e, n) {
                var i = n.length
                    , r = e.length
                    , s = 0;
                if ("number" == typeof i)
                    for (; i > s; s++)
                        e[r++] = n[s];
                else
                    for (; n[s] !== t;)
                        e[r++] = n[s++];
                return e.length = r,
                    e
            },
            grep: function (e, t, n) {
                var i, r = [], s = 0, o = e.length;
                for (n = !!n; o > s; s++)
                    i = !!t(e[s], s),
                        n !== i && r.push(e[s]);
                return r
            },
            map: function (e, n, i) {
                var r, s, o = [], a = 0, l = e.length, u = e instanceof K || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || K.isArray(e));
                if (u)
                    for (; l > a; a++)
                        r = n(e[a], a, i),
                            null != r && (o[o.length] = r);
                else
                    for (s in e)
                        r = n(e[s], s, i),
                            null != r && (o[o.length] = r);
                return o.concat.apply([], o)
            },
            guid: 1,
            proxy: function (e, n) {
                var i, r, s;
                return "string" == typeof n && (i = e[n],
                    n = e,
                    e = i),
                    K.isFunction(e) ? (r = U.call(arguments, 2),
                        s = function () {
                            return e.apply(n, r.concat(U.call(arguments)))
                        }
                        ,
                        s.guid = e.guid = e.guid || K.guid++,
                        s) : t
            },
            access: function (e, n, i, r, s, o, a) {
                var l, u = null == i, c = 0, h = e.length;
                if (i && "object" == typeof i) {
                    for (c in i)
                        K.access(e, n, c, i[c], 1, o, r);
                    s = 1
                } else if (r !== t) {
                    if (l = a === t && K.isFunction(r),
                        u && (l ? (l = n,
                            n = function (e, t, n) {
                                return l.call(K(e), n)
                            }
                        ) : (n.call(e, r),
                            n = null)),
                        n)
                        for (; h > c; c++)
                            n(e[c], i, l ? r.call(e[c], c, n(e[c], i)) : r, a);
                    s = 1
                }
                return s ? e : u ? n.call(e) : h ? n(e[0], i) : o
            },
            now: function () {
                return (new Date).getTime()
            }
        }),
        K.ready.promise = function (t) {
            if (!I)
                if (I = K.Deferred(),
                    "complete" === F.readyState)
                    setTimeout(K.ready, 1);
                else if (F.addEventListener)
                    F.addEventListener("DOMContentLoaded", ft, !1),
                        e.addEventListener("load", K.ready, !1);
                else {
                    F.attachEvent("onreadystatechange", ft),
                        e.attachEvent("onload", K.ready);
                    var n = !1;
                    try {
                        n = null == e.frameElement && F.documentElement
                    } catch (i) { }
                    n && n.doScroll && function r() {
                        if (!K.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(r, 50)
                            }
                            K.ready()
                        }
                    }()
                }
            return I.promise(t)
        }
        ,
        K.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
            pt["[object " + t + "]"] = t.toLowerCase()
        }),
        B = K(F);
    var dt = {};
    K.Callbacks = function (e) {
        e = "string" == typeof e ? dt[e] || n(e) : K.extend({}, e);
        var i, r, s, o, a, l, u = [], c = !e.once && [], h = function (t) {
            for (i = e.memory && t,
                r = !0,
                l = o || 0,
                o = 0,
                a = u.length,
                s = !0; u && a > l; l++)
                if (u[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    i = !1;
                    break
                }
            s = !1,
                u && (c ? c.length && h(c.shift()) : i ? u = [] : f.disable())
        }, f = {
            add: function () {
                if (u) {
                    var t = u.length;
                    !function n(t) {
                        K.each(t, function (t, i) {
                            var r = K.type(i);
                            "function" === r ? (!e.unique || !f.has(i)) && u.push(i) : i && i.length && "string" !== r && n(i)
                        })
                    }(arguments),
                        s ? a = u.length : i && (o = t,
                            h(i))
                }
                return this
            },
            remove: function () {
                return u && K.each(arguments, function (e, t) {
                    for (var n; (n = K.inArray(t, u, n)) > -1;)
                        u.splice(n, 1),
                            s && (a >= n && a--,
                                l >= n && l--)
                }),
                    this
            },
            has: function (e) {
                return K.inArray(e, u) > -1
            },
            empty: function () {
                return u = [],
                    this
            },
            disable: function () {
                return u = c = i = t,
                    this
            },
            disabled: function () {
                return !u
            },
            lock: function () {
                return c = t,
                    i || f.disable(),
                    this
            },
            locked: function () {
                return !c
            },
            fireWith: function (e, t) {
                return t = t || [],
                    t = [e, t.slice ? t.slice() : t],
                    u && (!r || c) && (s ? c.push(t) : h(t)),
                    this
            },
            fire: function () {
                return f.fireWith(this, arguments),
                    this
            },
            fired: function () {
                return !!r
            }
        };
        return f
    }
        ,
        K.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]]
                    , n = "pending"
                    , i = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return r.done(arguments).fail(arguments),
                                this
                        },
                        then: function () {
                            var e = arguments;
                            return K.Deferred(function (n) {
                                K.each(t, function (t, i) {
                                    var s = i[0]
                                        , o = e[t];
                                    r[i[1]](K.isFunction(o) ? function () {
                                        var e = o.apply(this, arguments);
                                        e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n : this, [e])
                                    }
                                        : n[s])
                                }),
                                    e = null
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? K.extend(e, i) : i
                        }
                    }
                    , r = {};
                return i.pipe = i.then,
                    K.each(t, function (e, s) {
                        var o = s[2]
                            , a = s[3];
                        i[s[1]] = o.add,
                            a && o.add(function () {
                                n = a
                            }, t[1 ^ e][2].disable, t[2][2].lock),
                            r[s[0]] = o.fire,
                            r[s[0] + "With"] = o.fireWith
                    }),
                    i.promise(r),
                    e && e.call(r, r),
                    r
            },
            when: function (e) {
                var t, n, i, r = 0, s = U.call(arguments), o = s.length, a = 1 !== o || e && K.isFunction(e.promise) ? o : 0, l = 1 === a ? e : K.Deferred(), u = function (e, n, i) {
                    return function (r) {
                        n[e] = this,
                            i[e] = arguments.length > 1 ? U.call(arguments) : r,
                            i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
                if (o > 1)
                    for (t = new Array(o),
                        n = new Array(o),
                        i = new Array(o); o > r; r++)
                        s[r] && K.isFunction(s[r].promise) ? s[r].promise().done(u(r, i, s)).fail(l.reject).progress(u(r, n, t)) : --a;
                return a || l.resolveWith(i, s),
                    l.promise()
            }
        }),
        K.support = function () {
            var t, n, i, r, s, o, a, l, u, c, h, f = F.createElement("div");
            if (f.setAttribute("className", "t"),
                f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                n = f.getElementsByTagName("*"),
                i = f.getElementsByTagName("a")[0],
                !n || !i || !n.length)
                return {};
            r = F.createElement("select"),
                s = r.appendChild(F.createElement("option")),
                o = f.getElementsByTagName("input")[0],
                i.style.cssText = "top:1px;float:left;opacity:.5",
                t = {
                    leadingWhitespace: 3 === f.firstChild.nodeType,
                    tbody: !f.getElementsByTagName("tbody").length,
                    htmlSerialize: !!f.getElementsByTagName("link").length,
                    style: /top/.test(i.getAttribute("style")),
                    hrefNormalized: "/a" === i.getAttribute("href"),
                    opacity: /^0.5/.test(i.style.opacity),
                    cssFloat: !!i.style.cssFloat,
                    checkOn: "on" === o.value,
                    optSelected: s.selected,
                    getSetAttribute: "t" !== f.className,
                    enctype: !!F.createElement("form").enctype,
                    html5Clone: "<:nav></:nav>" !== F.createElement("nav").cloneNode(!0).outerHTML,
                    boxModel: "CSS1Compat" === F.compatMode,
                    submitBubbles: !0,
                    changeBubbles: !0,
                    focusinBubbles: !1,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0,
                    boxSizingReliable: !0,
                    pixelPosition: !1
                },
                o.checked = !0,
                t.noCloneChecked = o.cloneNode(!0).checked,
                r.disabled = !0,
                t.optDisabled = !s.disabled;
            try {
                delete f.test
            } catch (p) {
                t.deleteExpando = !1
            }
            if (!f.addEventListener && f.attachEvent && f.fireEvent && (f.attachEvent("onclick", h = function () {
                t.noCloneEvent = !1
            }
            ),
                f.cloneNode(!0).fireEvent("onclick"),
                f.detachEvent("onclick", h)),
                o = F.createElement("input"),
                o.value = "t",
                o.setAttribute("type", "radio"),
                t.radioValue = "t" === o.value,
                o.setAttribute("checked", "checked"),
                o.setAttribute("name", "t"),
                f.appendChild(o),
                a = F.createDocumentFragment(),
                a.appendChild(f.lastChild),
                t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
                t.appendChecked = o.checked,
                a.removeChild(o),
                a.appendChild(f),
                f.attachEvent)
                for (u in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                })
                    l = "on" + u,
                        c = l in f,
                        c || (f.setAttribute(l, "return;"),
                            c = "function" == typeof f[l]),
                        t[u + "Bubbles"] = c;
            return K(function () {
                var n, i, r, s, o = "padding:0;margin:0;border:0;display:block;overflow:hidden;", a = F.getElementsByTagName("body")[0];
                a && (n = F.createElement("div"),
                    n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
                    a.insertBefore(n, a.firstChild),
                    i = F.createElement("div"),
                    n.appendChild(i),
                    i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    r = i.getElementsByTagName("td"),
                    r[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                    c = 0 === r[0].offsetHeight,
                    r[0].style.display = "",
                    r[1].style.display = "none",
                    t.reliableHiddenOffsets = c && 0 === r[0].offsetHeight,
                    i.innerHTML = "",
                    i.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                    t.boxSizing = 4 === i.offsetWidth,
                    t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop,
                    e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top,
                        t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
                            width: "4px"
                        }).width,
                        s = F.createElement("div"),
                        s.style.cssText = i.style.cssText = o,
                        s.style.marginRight = s.style.width = "0",
                        i.style.width = "1px",
                        i.appendChild(s),
                        t.reliableMarginRight = !parseFloat((e.getComputedStyle(s, null) || {}).marginRight)),
                    "undefined" != typeof i.style.zoom && (i.innerHTML = "",
                        i.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1",
                        t.inlineBlockNeedsLayout = 3 === i.offsetWidth,
                        i.style.display = "block",
                        i.style.overflow = "visible",
                        i.innerHTML = "<div></div>",
                        i.firstChild.style.width = "5px",
                        t.shrinkWrapBlocks = 3 !== i.offsetWidth,
                        n.style.zoom = 1),
                    a.removeChild(n),
                    n = i = r = s = null)
            }),
                a.removeChild(f),
                n = i = r = s = o = a = f = null,
                t
        }();
    var mt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
        , gt = /([A-Z])/g;
    K.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? K.cache[e[K.expando]] : e[K.expando],
                !!e && !r(e)
        },
        data: function (e, n, i, r) {
            if (K.acceptData(e)) {
                var s, o, a = K.expando, l = "string" == typeof n, u = e.nodeType, c = u ? K.cache : e, h = u ? e[a] : e[a] && a;
                if (h && c[h] && (r || c[h].data) || !l || i !== t)
                    return h || (u ? e[a] = h = K.deletedIds.pop() || K.guid++ : h = a),
                        c[h] || (c[h] = {},
                            u || (c[h].toJSON = K.noop)),
                        ("object" == typeof n || "function" == typeof n) && (r ? c[h] = K.extend(c[h], n) : c[h].data = K.extend(c[h].data, n)),
                        s = c[h],
                        r || (s.data || (s.data = {}),
                            s = s.data),
                        i !== t && (s[K.camelCase(n)] = i),
                        l ? (o = s[n],
                            null == o && (o = s[K.camelCase(n)])) : o = s,
                        o
            }
        },
        removeData: function (e, t, n) {
            if (K.acceptData(e)) {
                var i, s, o, a = e.nodeType, l = a ? K.cache : e, u = a ? e[K.expando] : K.expando;
                if (l[u]) {
                    if (t && (i = n ? l[u] : l[u].data)) {
                        K.isArray(t) || (t in i ? t = [t] : (t = K.camelCase(t),
                            t = t in i ? [t] : t.split(" ")));
                        for (s = 0,
                            o = t.length; o > s; s++)
                            delete i[t[s]];
                        if (!(n ? r : K.isEmptyObject)(i))
                            return
                    }
                    (n || (delete l[u].data,
                        r(l[u]))) && (a ? K.cleanData([e], !0) : K.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null)
                }
            }
        },
        _data: function (e, t, n) {
            return K.data(e, t, n, !0)
        },
        acceptData: function (e) {
            var t = e.nodeName && K.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
        K.fn.extend({
            data: function (e, n) {
                var r, s, o, a, l, u = this[0], c = 0, h = null;
                if (e === t) {
                    if (this.length && (h = K.data(u),
                        1 === u.nodeType && !K._data(u, "parsedAttrs"))) {
                        for (o = u.attributes,
                            l = o.length; l > c; c++)
                            a = o[c].name,
                                a.indexOf("data-") || (a = K.camelCase(a.substring(5)),
                                    i(u, a, h[a]));
                        K._data(u, "parsedAttrs", !0)
                    }
                    return h
                }
                return "object" == typeof e ? this.each(function () {
                    K.data(this, e)
                }) : (r = e.split(".", 2),
                    r[1] = r[1] ? "." + r[1] : "",
                    s = r[1] + "!",
                    K.access(this, function (n) {
                        return n === t ? (h = this.triggerHandler("getData" + s, [r[0]]),
                            h === t && u && (h = K.data(u, e),
                                h = i(u, e, h)),
                            h === t && r[1] ? this.data(r[0]) : h) : (r[1] = n,
                                void this.each(function () {
                                    var t = K(this);
                                    t.triggerHandler("setData" + s, r),
                                        K.data(this, e, n),
                                        t.triggerHandler("changeData" + s, r)
                                }))
                    }, null, n, arguments.length > 1, null, !1))
            },
            removeData: function (e) {
                return this.each(function () {
                    K.removeData(this, e)
                })
            }
        }),
        K.extend({
            queue: function (e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue",
                    i = K._data(e, t),
                    n && (!i || K.isArray(n) ? i = K._data(e, t, K.makeArray(n)) : i.push(n)),
                    i || []) : void 0
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = K.queue(e, t)
                    , i = n.length
                    , r = n.shift()
                    , s = K._queueHooks(e, t)
                    , o = function () {
                        K.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(),
                    i--),
                    r && ("fx" === t && n.unshift("inprogress"),
                        delete s.stop,
                        r.call(e, o, s)),
                    !i && s && s.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return K._data(e, n) || K._data(e, n, {
                    empty: K.Callbacks("once memory").add(function () {
                        K.removeData(e, t + "queue", !0),
                            K.removeData(e, n, !0)
                    })
                })
            }
        }),
        K.fn.extend({
            queue: function (e, n) {
                var i = 2;
                return "string" != typeof e && (n = e,
                    e = "fx",
                    i--),
                    arguments.length < i ? K.queue(this[0], e) : n === t ? this : this.each(function () {
                        var t = K.queue(this, e, n);
                        K._queueHooks(this, e),
                            "fx" === e && "inprogress" !== t[0] && K.dequeue(this, e)
                    })
            },
            dequeue: function (e) {
                return this.each(function () {
                    K.dequeue(this, e)
                })
            },
            delay: function (e, t) {
                return e = K.fx ? K.fx.speeds[e] || e : e,
                    t = t || "fx",
                    this.queue(t, function (t, n) {
                        var i = setTimeout(t, e);
                        n.stop = function () {
                            clearTimeout(i)
                        }
                    })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, n) {
                var i, r = 1, s = K.Deferred(), o = this, a = this.length, l = function () {
                    --r || s.resolveWith(o, [o])
                };
                for ("string" != typeof e && (n = e,
                    e = t),
                    e = e || "fx"; a--;)
                    i = K._data(o[a], e + "queueHooks"),
                        i && i.empty && (r++,
                            i.empty.add(l));
                return l(),
                    s.promise(n)
            }
        });
    var yt, vt, _t, bt = /[\t\r\n]/g, xt = /\r/g, wt = /^(?:button|input)$/i, Tt = /^(?:button|input|object|select|textarea)$/i, Ct = /^a(?:rea|)$/i, kt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, St = K.support.getSetAttribute;
    K.fn.extend({
        attr: function (e, t) {
            return K.access(this, K.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                K.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return K.access(this, K.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = K.propFix[e] || e,
                this.each(function () {
                    try {
                        this[e] = t,
                            delete this[e]
                    } catch (n) { }
                })
        },
        addClass: function (e) {
            var t, n, i, r, s, o, a;
            if (K.isFunction(e))
                return this.each(function (t) {
                    K(this).addClass(e.call(this, t, this.className))
                });
            if (e && "string" == typeof e)
                for (t = e.split(tt),
                    n = 0,
                    i = this.length; i > n; n++)
                    if (r = this[n],
                        1 === r.nodeType)
                        if (r.className || 1 !== t.length) {
                            for (s = " " + r.className + " ",
                                o = 0,
                                a = t.length; a > o; o++)
                                s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                            r.className = K.trim(s)
                        } else
                            r.className = e;
            return this
        },
        removeClass: function (e) {
            var n, i, r, s, o, a, l;
            if (K.isFunction(e))
                return this.each(function (t) {
                    K(this).removeClass(e.call(this, t, this.className))
                });
            if (e && "string" == typeof e || e === t)
                for (n = (e || "").split(tt),
                    a = 0,
                    l = this.length; l > a; a++)
                    if (r = this[a],
                        1 === r.nodeType && r.className) {
                        for (i = (" " + r.className + " ").replace(bt, " "),
                            s = 0,
                            o = n.length; o > s; s++)
                            for (; i.indexOf(" " + n[s] + " ") >= 0;)
                                i = i.replace(" " + n[s] + " ", " ");
                        r.className = e ? K.trim(i) : ""
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e
                , i = "boolean" == typeof t;
            return this.each(K.isFunction(e) ? function (n) {
                K(this).toggleClass(e.call(this, n, this.className, t), t)
            }
                : function () {
                    if ("string" === n)
                        for (var r, s = 0, o = K(this), a = t, l = e.split(tt); r = l[s++];)
                            a = i ? a : !o.hasClass(r),
                                o[a ? "addClass" : "removeClass"](r);
                    else
                        ("undefined" === n || "boolean" === n) && (this.className && K._data(this, "__className__", this.className),
                            this.className = this.className || e === !1 ? "" : K._data(this, "__className__") || "")
                }
            )
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(bt, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        },
        val: function (e) {
            var n, i, r, s = this[0];
            {
                if (arguments.length)
                    return r = K.isFunction(e),
                        this.each(function (i) {
                            var s, o = K(this);
                            1 === this.nodeType && (s = r ? e.call(this, i, o.val()) : e,
                                null == s ? s = "" : "number" == typeof s ? s += "" : K.isArray(s) && (s = K.map(s, function (e) {
                                    return null == e ? "" : e + ""
                                })),
                                n = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()],
                                n && "set" in n && n.set(this, s, "value") !== t || (this.value = s))
                        });
                if (s)
                    return n = K.valHooks[s.type] || K.valHooks[s.nodeName.toLowerCase()],
                        n && "get" in n && (i = n.get(s, "value")) !== t ? i : (i = s.value,
                            "string" == typeof i ? i.replace(xt, "") : null == i ? "" : i)
            }
        }
    }),
        K.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function (e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, s = "select-one" === e.type || 0 > r, o = s ? null : [], a = s ? r + 1 : i.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
                            if (n = i[l],
                                !(!n.selected && l !== r || (K.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && K.nodeName(n.parentNode, "optgroup"))) {
                                if (t = K(n).val(),
                                    s)
                                    return t;
                                o.push(t)
                            }
                        return o
                    },
                    set: function (e, t) {
                        var n = K.makeArray(t);
                        return K(e).find("option").each(function () {
                            this.selected = K.inArray(K(this).val(), n) >= 0
                        }),
                            n.length || (e.selectedIndex = -1),
                            n
                    }
                }
            },
            attrFn: {},
            attr: function (e, n, i, r) {
                var s, o, a, l = e.nodeType;
                if (e && 3 !== l && 8 !== l && 2 !== l)
                    return r && K.isFunction(K.fn[n]) ? K(e)[n](i) : "undefined" == typeof e.getAttribute ? K.prop(e, n, i) : (a = 1 !== l || !K.isXMLDoc(e),
                        a && (n = n.toLowerCase(),
                            o = K.attrHooks[n] || (kt.test(n) ? vt : yt)),
                        i !== t ? null === i ? void K.removeAttr(e, n) : o && "set" in o && a && (s = o.set(e, i, n)) !== t ? s : (e.setAttribute(n, i + ""),
                            i) : o && "get" in o && a && null !== (s = o.get(e, n)) ? s : (s = e.getAttribute(n),
                                null === s ? t : s))
            },
            removeAttr: function (e, t) {
                var n, i, r, s, o = 0;
                if (t && 1 === e.nodeType)
                    for (i = t.split(tt); o < i.length; o++)
                        r = i[o],
                            r && (n = K.propFix[r] || r,
                                s = kt.test(r),
                                s || K.attr(e, r, ""),
                                e.removeAttribute(St ? r : n),
                                s && n in e && (e[n] = !1))
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (wt.test(e.nodeName) && e.parentNode)
                            K.error("type property can't be changed");
                        else if (!K.support.radioValue && "radio" === t && K.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                        }
                    }
                },
                value: {
                    get: function (e, t) {
                        return yt && K.nodeName(e, "button") ? yt.get(e, t) : t in e ? e.value : null
                    },
                    set: function (e, t, n) {
                        return yt && K.nodeName(e, "button") ? yt.set(e, t, n) : void (e.value = t)
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function (e, n, i) {
                var r, s, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a)
                    return o = 1 !== a || !K.isXMLDoc(e),
                        o && (n = K.propFix[n] || n,
                            s = K.propHooks[n]),
                        i !== t ? s && "set" in s && (r = s.set(e, i, n)) !== t ? r : e[n] = i : s && "get" in s && null !== (r = s.get(e, n)) ? r : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : Tt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : t
                    }
                }
            }
        }),
        vt = {
            get: function (e, n) {
                var i, r = K.prop(e, n);
                return r === !0 || "boolean" != typeof r && (i = e.getAttributeNode(n)) && i.nodeValue !== !1 ? n.toLowerCase() : t
            },
            set: function (e, t, n) {
                var i;
                return t === !1 ? K.removeAttr(e, n) : (i = K.propFix[n] || n,
                    i in e && (e[i] = !0),
                    e.setAttribute(n, n.toLowerCase())),
                    n
            }
        },
        St || (_t = {
            name: !0,
            id: !0,
            coords: !0
        },
            yt = K.valHooks.button = {
                get: function (e, n) {
                    var i;
                    return i = e.getAttributeNode(n),
                        i && (_t[n] ? "" !== i.value : i.specified) ? i.value : t
                },
                set: function (e, t, n) {
                    var i = e.getAttributeNode(n);
                    return i || (i = F.createAttribute(n),
                        e.setAttributeNode(i)),
                        i.value = t + ""
                }
            },
            K.each(["width", "height"], function (e, t) {
                K.attrHooks[t] = K.extend(K.attrHooks[t], {
                    set: function (e, n) {
                        return "" === n ? (e.setAttribute(t, "auto"),
                            n) : void 0
                    }
                })
            }),
            K.attrHooks.contenteditable = {
                get: yt.get,
                set: function (e, t, n) {
                    "" === t && (t = "false"),
                        yt.set(e, t, n)
                }
            }),
        K.support.hrefNormalized || K.each(["href", "src", "width", "height"], function (e, n) {
            K.attrHooks[n] = K.extend(K.attrHooks[n], {
                get: function (e) {
                    var i = e.getAttribute(n, 2);
                    return null === i ? t : i
                }
            })
        }),
        K.support.style || (K.attrHooks.style = {
            get: function (e) {
                return e.style.cssText.toLowerCase() || t
            },
            set: function (e, t) {
                return e.style.cssText = t + ""
            }
        }),
        K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex),
                    null
            }
        })),
        K.support.enctype || (K.propFix.enctype = "encoding"),
        K.support.checkOn || K.each(["radio", "checkbox"], function () {
            K.valHooks[this] = {
                get: function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            }
        }),
        K.each(["radio", "checkbox"], function () {
            K.valHooks[this] = K.extend(K.valHooks[this], {
                set: function (e, t) {
                    return K.isArray(t) ? e.checked = K.inArray(K(e).val(), t) >= 0 : void 0
                }
            })
        });
    var At = /^(?:textarea|input|select)$/i
        , Et = /^([^\.]*|)(?:\.(.+)|)$/
        , Nt = /(?:^|\s)hover(\.\S+|)\b/
        , Pt = /^key/
        , Mt = /^(?:mouse|contextmenu)|click/
        , Dt = /^(?:focusinfocus|focusoutblur)$/
        , Lt = function (e) {
            return K.event.special.hover ? e : e.replace(Nt, "mouseenter$1 mouseleave$1")
        };
    K.event = {
        add: function (e, n, i, r, s) {
            var o, a, l, u, c, h, f, p, d, m, g;
            if (3 !== e.nodeType && 8 !== e.nodeType && n && i && (o = K._data(e))) {
                for (i.handler && (d = i,
                    i = d.handler,
                    s = d.selector),
                    i.guid || (i.guid = K.guid++),
                    l = o.events,
                    l || (o.events = l = {}),
                    a = o.handle,
                    a || (o.handle = a = function (e) {
                        return "undefined" == typeof K || e && K.event.triggered === e.type ? t : K.event.dispatch.apply(a.elem, arguments)
                    }
                        ,
                        a.elem = e),
                    n = K.trim(Lt(n)).split(" "),
                    u = 0; u < n.length; u++)
                    c = Et.exec(n[u]) || [],
                        h = c[1],
                        f = (c[2] || "").split(".").sort(),
                        g = K.event.special[h] || {},
                        h = (s ? g.delegateType : g.bindType) || h,
                        g = K.event.special[h] || {},
                        p = K.extend({
                            type: h,
                            origType: c[1],
                            data: r,
                            handler: i,
                            guid: i.guid,
                            selector: s,
                            needsContext: s && K.expr.match.needsContext.test(s),
                            namespace: f.join(".")
                        }, d),
                        m = l[h],
                        m || (m = l[h] = [],
                            m.delegateCount = 0,
                            g.setup && g.setup.call(e, r, f, a) !== !1 || (e.addEventListener ? e.addEventListener(h, a, !1) : e.attachEvent && e.attachEvent("on" + h, a))),
                        g.add && (g.add.call(e, p),
                            p.handler.guid || (p.handler.guid = i.guid)),
                        s ? m.splice(m.delegateCount++, 0, p) : m.push(p),
                        K.event.global[h] = !0;
                e = null
            }
        },
        global: {},
        remove: function (e, t, n, i, r) {
            var s, o, a, l, u, c, h, f, p, d, m, g = K.hasData(e) && K._data(e);
            if (g && (f = g.events)) {
                for (t = K.trim(Lt(t || "")).split(" "),
                    s = 0; s < t.length; s++)
                    if (o = Et.exec(t[s]) || [],
                        a = l = o[1],
                        u = o[2],
                        a) {
                        for (p = K.event.special[a] || {},
                            a = (i ? p.delegateType : p.bindType) || a,
                            d = f[a] || [],
                            c = d.length,
                            u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                            h = 0; h < d.length; h++)
                            m = d[h],
                                !(!r && l !== m.origType || n && n.guid !== m.guid || u && !u.test(m.namespace) || i && i !== m.selector && ("**" !== i || !m.selector) || (d.splice(h--, 1),
                                    m.selector && d.delegateCount--,
                                    !p.remove || !p.remove.call(e, m)));
                        0 === d.length && c !== d.length && ((!p.teardown || p.teardown.call(e, u, g.handle) === !1) && K.removeEvent(e, a, g.handle),
                            delete f[a])
                    } else
                        for (a in f)
                            K.event.remove(e, a + t[s], n, i, !0);
                K.isEmptyObject(f) && (delete g.handle,
                    K.removeData(e, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (n, i, r, s) {
            if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
                var o, a, l, u, c, h, f, p, d, m, g = n.type || n, y = [];
                if (Dt.test(g + K.event.triggered))
                    return;
                if (g.indexOf("!") >= 0 && (g = g.slice(0, -1),
                    a = !0),
                    g.indexOf(".") >= 0 && (y = g.split("."),
                        g = y.shift(),
                        y.sort()),
                    (!r || K.event.customEvent[g]) && !K.event.global[g])
                    return;
                if (n = "object" == typeof n ? n[K.expando] ? n : new K.Event(g, n) : new K.Event(g),
                    n.type = g,
                    n.isTrigger = !0,
                    n.exclusive = a,
                    n.namespace = y.join("."),
                    n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    h = g.indexOf(":") < 0 ? "on" + g : "",
                    !r) {
                    o = K.cache;
                    for (l in o)
                        o[l].events && o[l].events[g] && K.event.trigger(n, i, o[l].handle.elem, !0);
                    return
                }
                if (n.result = t,
                    n.target || (n.target = r),
                    i = null != i ? K.makeArray(i) : [],
                    i.unshift(n),
                    f = K.event.special[g] || {},
                    f.trigger && f.trigger.apply(r, i) === !1)
                    return;
                if (d = [[r, f.bindType || g]],
                    !s && !f.noBubble && !K.isWindow(r)) {
                    for (m = f.delegateType || g,
                        u = Dt.test(m + g) ? r : r.parentNode,
                        c = r; u; u = u.parentNode)
                        d.push([u, m]),
                            c = u;
                    c === (r.ownerDocument || F) && d.push([c.defaultView || c.parentWindow || e, m])
                }
                for (l = 0; l < d.length && !n.isPropagationStopped(); l++)
                    u = d[l][0],
                        n.type = d[l][1],
                        p = (K._data(u, "events") || {})[n.type] && K._data(u, "handle"),
                        p && p.apply(u, i),
                        p = h && u[h],
                        p && K.acceptData(u) && p.apply && p.apply(u, i) === !1 && n.preventDefault();
                return n.type = g,
                    !(s || n.isDefaultPrevented() || f._default && f._default.apply(r.ownerDocument, i) !== !1 || "click" === g && K.nodeName(r, "a") || !K.acceptData(r) || !h || !r[g] || ("focus" === g || "blur" === g) && 0 === n.target.offsetWidth || K.isWindow(r) || (c = r[h],
                        c && (r[h] = null),
                        K.event.triggered = g,
                        r[g](),
                        K.event.triggered = t,
                        !c || !(r[h] = c))),
                    n.result
            }
        },
        dispatch: function (n) {
            n = K.event.fix(n || e.event);
            var i, r, s, o, a, l, u, c, h, f = (K._data(this, "events") || {})[n.type] || [], p = f.delegateCount, d = U.call(arguments), m = !n.exclusive && !n.namespace, g = K.event.special[n.type] || {}, y = [];
            if (d[0] = n,
                n.delegateTarget = this,
                !g.preDispatch || g.preDispatch.call(this, n) !== !1) {
                if (p && (!n.button || "click" !== n.type))
                    for (s = n.target; s != this; s = s.parentNode || this)
                        if (s.disabled !== !0 || "click" !== n.type) {
                            for (a = {},
                                u = [],
                                i = 0; p > i; i++)
                                c = f[i],
                                    h = c.selector,
                                    a[h] === t && (a[h] = c.needsContext ? K(h, this).index(s) >= 0 : K.find(h, this, null, [s]).length),
                                    a[h] && u.push(c);
                            u.length && y.push({
                                elem: s,
                                matches: u
                            })
                        }
                for (f.length > p && y.push({
                    elem: this,
                    matches: f.slice(p)
                }),
                    i = 0; i < y.length && !n.isPropagationStopped(); i++)
                    for (l = y[i],
                        n.currentTarget = l.elem,
                        r = 0; r < l.matches.length && !n.isImmediatePropagationStopped(); r++)
                        c = l.matches[r],
                            (m || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) && (n.data = c.data,
                                n.handleObj = c,
                                o = ((K.event.special[c.origType] || {}).handle || c.handler).apply(l.elem, d),
                                o !== t && (n.result = o,
                                    o === !1 && (n.preventDefault(),
                                        n.stopPropagation())));
                return g.postDispatch && g.postDispatch.call(this, n),
                    n.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var i, r, s, o = n.button, a = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || F,
                    r = i.documentElement,
                    s = i.body,
                    e.pageX = n.clientX + (r && r.scrollLeft || s && s.scrollLeft || 0) - (r && r.clientLeft || s && s.clientLeft || 0),
                    e.pageY = n.clientY + (r && r.scrollTop || s && s.scrollTop || 0) - (r && r.clientTop || s && s.clientTop || 0)),
                    !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a),
                    !e.which && o !== t && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    e
            }
        },
        fix: function (e) {
            if (e[K.expando])
                return e;
            var t, n, i = e, r = K.event.fixHooks[e.type] || {}, s = r.props ? this.props.concat(r.props) : this.props;
            for (e = K.Event(i),
                t = s.length; t;)
                n = s[--t],
                    e[n] = i[n];
            return e.target || (e.target = i.srcElement || F),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                e.metaKey = !!e.metaKey,
                r.filter ? r.filter(e, i) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (e, t, n) {
                    K.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var r = K.extend(new K.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? K.event.trigger(r, null, t) : K.event.dispatch.call(t, r),
                r.isDefaultPrevented() && n.preventDefault()
        }
    },
        K.event.handle = K.event.dispatch,
        K.removeEvent = F.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }
            : function (e, t, n) {
                var i = "on" + t;
                e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null),
                    e.detachEvent(i, n))
            }
        ,
        K.Event = function (e, t) {
            return this instanceof K.Event ? (e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? o : s) : this.type = e,
                t && K.extend(this, t),
                this.timeStamp = e && e.timeStamp || K.now(),
                this[K.expando] = !0,
                void 0) : new K.Event(e, t)
        }
        ,
        K.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = o;
                var e = this.originalEvent;
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function () {
                this.isPropagationStopped = o;
                var e = this.originalEvent;
                e && (e.stopPropagation && e.stopPropagation(),
                    e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = o,
                    this.stopPropagation()
            },
            isDefaultPrevented: s,
            isPropagationStopped: s,
            isImmediatePropagationStopped: s
        },
        K.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function (e, t) {
            K.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    {
                        var n, i = this, r = e.relatedTarget, s = e.handleObj;
                        s.selector
                    }
                    return (!r || r !== i && !K.contains(i, r)) && (e.type = s.origType,
                        n = s.handler.apply(this, arguments),
                        e.type = t),
                        n
                }
            }
        }),
        K.support.submitBubbles || (K.event.special.submit = {
            setup: function () {
                return K.nodeName(this, "form") ? !1 : void K.event.add(this, "click._submit keypress._submit", function (e) {
                    var n = e.target
                        , i = K.nodeName(n, "input") || K.nodeName(n, "button") ? n.form : t;
                    i && !K._data(i, "_submit_attached") && (K.event.add(i, "submit._submit", function (e) {
                        e._submit_bubble = !0
                    }),
                        K._data(i, "_submit_attached", !0))
                })
            },
            postDispatch: function (e) {
                e._submit_bubble && (delete e._submit_bubble,
                    this.parentNode && !e.isTrigger && K.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function () {
                return K.nodeName(this, "form") ? !1 : void K.event.remove(this, "._submit")
            }
        }),
        K.support.changeBubbles || (K.event.special.change = {
            setup: function () {
                return At.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (K.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }),
                    K.event.add(this, "click._change", function (e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1),
                            K.event.simulate("change", this, e, !0)
                    })),
                    !1) : void K.event.add(this, "beforeactivate._change", function (e) {
                        var t = e.target;
                        At.test(t.nodeName) && !K._data(t, "_change_attached") && (K.event.add(t, "change._change", function (e) {
                            this.parentNode && !e.isSimulated && !e.isTrigger && K.event.simulate("change", this.parentNode, e, !0)
                        }),
                            K._data(t, "_change_attached", !0))
                    })
            },
            handle: function (e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function () {
                return K.event.remove(this, "._change"),
                    !At.test(this.nodeName)
            }
        }),
        K.support.focusinBubbles || K.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = 0
                , i = function (e) {
                    K.event.simulate(t, e.target, K.event.fix(e), !0)
                };
            K.event.special[t] = {
                setup: function () {
                    0 === n++ && F.addEventListener(e, i, !0)
                },
                teardown: function () {
                    0 === --n && F.removeEventListener(e, i, !0)
                }
            }
        }),
        K.fn.extend({
            on: function (e, n, i, r, o) {
                var a, l;
                if ("object" == typeof e) {
                    "string" != typeof n && (i = i || n,
                        n = t);
                    for (l in e)
                        this.on(l, n, i, e[l], o);
                    return this
                }
                if (null == i && null == r ? (r = n,
                    i = n = t) : null == r && ("string" == typeof n ? (r = i,
                        i = t) : (r = i,
                            i = n,
                            n = t)),
                    r === !1)
                    r = s;
                else if (!r)
                    return this;
                return 1 === o && (a = r,
                    r = function (e) {
                        return K().off(e),
                            a.apply(this, arguments)
                    }
                    ,
                    r.guid = a.guid || (a.guid = K.guid++)),
                    this.each(function () {
                        K.event.add(this, e, r, i, n)
                    })
            },
            one: function (e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function (e, n, i) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                        K(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                if ("object" == typeof e) {
                    for (o in e)
                        this.off(o, n, e[o]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (i = n,
                    n = t),
                    i === !1 && (i = s),
                    this.each(function () {
                        K.event.remove(this, e, i, n)
                    })
            },
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            live: function (e, t, n) {
                return K(this.context).on(e, this.selector, t, n),
                    this
            },
            die: function (e, t) {
                return K(this.context).off(e, this.selector || "**", t),
                    this
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function (e, t) {
                return this.each(function () {
                    K.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                return this[0] ? K.event.trigger(e, t, this[0], !0) : void 0
            },
            toggle: function (e) {
                var t = arguments
                    , n = e.guid || K.guid++
                    , i = 0
                    , r = function (n) {
                        var r = (K._data(this, "lastToggle" + e.guid) || 0) % i;
                        return K._data(this, "lastToggle" + e.guid, r + 1),
                            n.preventDefault(),
                            t[r].apply(this, arguments) || !1
                    };
                for (r.guid = n; i < t.length;)
                    t[i++].guid = n;
                return this.click(r)
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            K.fn[t] = function (e, n) {
                return null == n && (n = e,
                    e = null),
                    arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
                ,
                Pt.test(t) && (K.event.fixHooks[t] = K.event.keyHooks),
                Mt.test(t) && (K.event.fixHooks[t] = K.event.mouseHooks)
        }),
        function (e, t) {
            function n(e, t, n, i) {
                n = n || [],
                    t = t || M;
                var r, s, o, a, l = t.nodeType;
                if (!e || "string" != typeof e)
                    return n;
                if (1 !== l && 9 !== l)
                    return [];
                if (o = x(t),
                    !o && !i && (r = nt.exec(e)))
                    if (a = r[1]) {
                        if (9 === l) {
                            if (s = t.getElementById(a),
                                !s || !s.parentNode)
                                return n;
                            if (s.id === a)
                                return n.push(s),
                                    n
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && w(t, s) && s.id === a)
                            return n.push(s),
                                n
                    } else {
                        if (r[2])
                            return R.apply(n, O.call(t.getElementsByTagName(e), 0)),
                                n;
                        if ((a = r[3]) && ft && t.getElementsByClassName)
                            return R.apply(n, O.call(t.getElementsByClassName(a), 0)),
                                n
                    }
                return m(e.replace(V, "$1"), t, n, i, o)
            }
            function i(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }
            function r(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function s(e) {
                return B(function (t) {
                    return t = +t,
                        B(function (n, i) {
                            for (var r, s = e([], n.length, t), o = s.length; o--;)
                                n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                        })
                })
            }
            function o(e, t, n) {
                if (e === t)
                    return n;
                for (var i = e.nextSibling; i;) {
                    if (i === t)
                        return -1;
                    i = i.nextSibling
                }
                return 1
            }
            function a(e, t) {
                var i, r, s, o, a, l, u, c = q[N][e + " "];
                if (c)
                    return t ? 0 : c.slice(0);
                for (a = e,
                    l = [],
                    u = _.preFilter; a;) {
                    (!i || (r = Z.exec(a))) && (r && (a = a.slice(r[0].length) || a),
                        l.push(s = [])),
                        i = !1,
                        (r = et.exec(a)) && (s.push(i = new P(r.shift())),
                            a = a.slice(i.length),
                            i.type = r[0].replace(V, " "));
                    for (o in _.filter)
                        (r = at[o].exec(a)) && (!u[o] || (r = u[o](r))) && (s.push(i = new P(r.shift())),
                            a = a.slice(i.length),
                            i.type = o,
                            i.matches = r);
                    if (!i)
                        break
                }
                return t ? a.length : a ? n.error(e) : q(e, l).slice(0)
            }
            function l(e, t, n) {
                var i = t.dir
                    , r = n && "parentNode" === t.dir
                    , s = j++;
                return t.first ? function (t, n, s) {
                    for (; t = t[i];)
                        if (r || 1 === t.nodeType)
                            return e(t, n, s)
                }
                    : function (t, n, o) {
                        if (o) {
                            for (; t = t[i];)
                                if ((r || 1 === t.nodeType) && e(t, n, o))
                                    return t
                        } else
                            for (var a, l = L + " " + s + " ", u = l + y; t = t[i];)
                                if (r || 1 === t.nodeType) {
                                    if ((a = t[N]) === u)
                                        return t.sizset;
                                    if ("string" == typeof a && 0 === a.indexOf(l)) {
                                        if (t.sizset)
                                            return t
                                    } else {
                                        if (t[N] = u,
                                            e(t, n, o))
                                            return t.sizset = !0,
                                                t;
                                        t.sizset = !1
                                    }
                                }
                    }
            }
            function u(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i))
                            return !1;
                    return !0
                }
                    : e[0]
            }
            function c(e, t, n, i, r) {
                for (var s, o = [], a = 0, l = e.length, u = null != t; l > a; a++)
                    (s = e[a]) && (!n || n(s, i, r)) && (o.push(s),
                        u && t.push(a));
                return o
            }
            function h(e, t, n, i, r, s) {
                return i && !i[N] && (i = h(i)),
                    r && !r[N] && (r = h(r, s)),
                    B(function (s, o, a, l) {
                        var u, h, f, p = [], m = [], g = o.length, y = s || d(t || "*", a.nodeType ? [a] : a, []), v = !e || !s && t ? y : c(y, p, e, a, l), _ = n ? r || (s ? e : g || i) ? [] : o : v;
                        if (n && n(v, _, a, l),
                            i)
                            for (u = c(_, m),
                                i(u, [], a, l),
                                h = u.length; h--;)
                                (f = u[h]) && (_[m[h]] = !(v[m[h]] = f));
                        if (s) {
                            if (r || e) {
                                if (r) {
                                    for (u = [],
                                        h = _.length; h--;)
                                        (f = _[h]) && u.push(v[h] = f);
                                    r(null, _ = [], u, l)
                                }
                                for (h = _.length; h--;)
                                    (f = _[h]) && (u = r ? z.call(s, f) : p[h]) > -1 && (s[u] = !(o[u] = f))
                            }
                        } else
                            _ = c(_ === o ? _.splice(g, _.length) : _),
                                r ? r(null, o, _, l) : R.apply(o, _)
                    })
            }
            function f(e) {
                for (var t, n, i, r = e.length, s = _.relative[e[0].type], o = s || _.relative[" "], a = s ? 1 : 0, c = l(function (e) {
                    return e === t
                }, o, !0), p = l(function (e) {
                    return z.call(t, e) > -1
                }, o, !0), d = [function (e, n, i) {
                    return !s && (i || n !== S) || ((t = n).nodeType ? c(e, n, i) : p(e, n, i))
                }
                ]; r > a; a++)
                    if (n = _.relative[e[a].type])
                        d = [l(u(d), n)];
                    else {
                        if (n = _.filter[e[a].type].apply(null, e[a].matches),
                            n[N]) {
                            for (i = ++a; r > i && !_.relative[e[i].type]; i++)
                                ;
                            return h(a > 1 && u(d), a > 1 && e.slice(0, a - 1).join("").replace(V, "$1"), n, i > a && f(e.slice(a, i)), r > i && f(e = e.slice(i)), r > i && e.join(""))
                        }
                        d.push(n)
                    }
                return u(d)
            }
            function p(e, t) {
                var i = t.length > 0
                    , r = e.length > 0
                    , s = function (o, a, l, u, h) {
                        var f, p, d, m = [], g = 0, v = "0", b = o && [], x = null != h, w = S, T = o || r && _.find.TAG("*", h && a.parentNode || a), C = L += null == w ? 1 : Math.E;
                        for (x && (S = a !== M && a,
                            y = s.el); null != (f = T[v]); v++) {
                            if (r && f) {
                                for (p = 0; d = e[p]; p++)
                                    if (d(f, a, l)) {
                                        u.push(f);
                                        break
                                    }
                                x && (L = C,
                                    y = ++s.el)
                            }
                            i && ((f = !d && f) && g--,
                                o && b.push(f))
                        }
                        if (g += v,
                            i && v !== g) {
                            for (p = 0; d = t[p]; p++)
                                d(b, m, a, l);
                            if (o) {
                                if (g > 0)
                                    for (; v--;)
                                        !b[v] && !m[v] && (m[v] = H.call(u));
                                m = c(m)
                            }
                            R.apply(u, m),
                                x && !o && m.length > 0 && g + t.length > 1 && n.uniqueSort(u)
                        }
                        return x && (L = C,
                            S = w),
                            b
                    };
                return s.el = 0,
                    i ? B(s) : s
            }
            function d(e, t, i) {
                for (var r = 0, s = t.length; s > r; r++)
                    n(e, t[r], i);
                return i
            }
            function m(e, t, n, i, r) {
                {
                    var s, o, l, u, c, h = a(e);
                    h.length
                }
                if (!i && 1 === h.length) {
                    if (o = h[0] = h[0].slice(0),
                        o.length > 2 && "ID" === (l = o[0]).type && 9 === t.nodeType && !r && _.relative[o[1].type]) {
                        if (t = _.find.ID(l.matches[0].replace(ot, ""), t, r)[0],
                            !t)
                            return n;
                        e = e.slice(o.shift().length)
                    }
                    for (s = at.POS.test(e) ? -1 : o.length - 1; s >= 0 && (l = o[s],
                        !_.relative[u = l.type]); s--)
                        if ((c = _.find[u]) && (i = c(l.matches[0].replace(ot, ""), it.test(o[0].type) && t.parentNode || t, r))) {
                            if (o.splice(s, 1),
                                e = i.length && o.join(""),
                                !e)
                                return R.apply(n, O.call(i, 0)),
                                    n;
                            break
                        }
                }
                return T(e, h)(i, t, r, n, it.test(e)),
                    n
            }
            function g() { }
            var y, v, _, b, x, w, T, C, k, S, A = !0, E = "undefined", N = ("sizcache" + Math.random()).replace(".", ""), P = String, M = e.document, D = M.documentElement, L = 0, j = 0, H = [].pop, R = [].push, O = [].slice, z = [].indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e)
                        return t;
                return -1
            }
                , B = function (e, t) {
                    return e[N] = null == t || t,
                        e
                }, I = function () {
                    var e = {}
                        , t = [];
                    return B(function (n, i) {
                        return t.push(n) > _.cacheLength && delete e[t.shift()],
                            e[n + " "] = i
                    }, e)
                }, F = I(), q = I(), $ = I(), W = "[\\x20\\t\\r\\n\\f]", X = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", Q = X.replace("w", "w#"), U = "([*^$|!~]?=)", G = "\\[" + W + "*(" + X + ")" + W + "*(?:" + U + W + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + Q + ")|)|)" + W + "*\\]", Y = ":(" + X + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + G + ")|[^:]|\\\\.)*|.*))\\)|)", J = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)", V = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"), Z = new RegExp("^" + W + "*," + W + "*"), et = new RegExp("^" + W + "*([\\x20\\t\\r\\n\\f>+~])" + W + "*"), tt = new RegExp(Y), nt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, it = /[\x20\t\r\n\f]*[+~]/, rt = /h\d/i, st = /input|select|textarea|button/i, ot = /\\(?!\\)/g, at = {
                    ID: new RegExp("^#(" + X + ")"),
                    CLASS: new RegExp("^\\.(" + X + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + X + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + X.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + G),
                    PSEUDO: new RegExp("^" + Y),
                    POS: new RegExp(J, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + W + "*[>+~]|" + J, "i")
                }, lt = function (e) {
                    var t = M.createElement("div");
                    try {
                        return e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t = null
                    }
                }, ut = lt(function (e) {
                    return e.appendChild(M.createComment("")),
                        !e.getElementsByTagName("*").length
                }), ct = lt(function (e) {
                    return e.innerHTML = "<a href='#'></a>",
                        e.firstChild && typeof e.firstChild.getAttribute !== E && "#" === e.firstChild.getAttribute("href")
                }), ht = lt(function (e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t
                }), ft = lt(function (e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                        e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e",
                            2 === e.getElementsByClassName("e").length) : !1
                }), pt = lt(function (e) {
                    e.id = N + 0,
                        e.innerHTML = "<a name='" + N + "'></a><div name='" + N + "'></div>",
                        D.insertBefore(e, D.firstChild);
                    var t = M.getElementsByName && M.getElementsByName(N).length === 2 + M.getElementsByName(N + 0).length;
                    return v = !M.getElementById(N),
                        D.removeChild(e),
                        t
                });
            try {
                O.call(D.childNodes, 0)[0].nodeType
            } catch (dt) {
                O = function (e) {
                    for (var t, n = []; t = this[e]; e++)
                        n.push(t);
                    return n
                }
            }
            n.matches = function (e, t) {
                return n(e, null, null, t)
            }
                ,
                n.matchesSelector = function (e, t) {
                    return n(t, null, null, [e]).length > 0
                }
                ,
                b = n.getText = function (e) {
                    var t, n = "", i = 0, r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                n += b(e)
                        } else if (3 === r || 4 === r)
                            return e.nodeValue
                    } else
                        for (; t = e[i]; i++)
                            n += b(t);
                    return n
                }
                ,
                x = n.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }
                ,
                w = n.contains = D.contains ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                        , i = t && t.parentNode;
                    return e === i || !!(i && 1 === i.nodeType && n.contains && n.contains(i))
                }
                    : D.compareDocumentPosition ? function (e, t) {
                        return t && !!(16 & e.compareDocumentPosition(t))
                    }
                        : function (e, t) {
                            for (; t = t.parentNode;)
                                if (t === e)
                                    return !0;
                            return !1
                        }
                ,
                n.attr = function (e, t) {
                    var n, i = x(e);
                    return i || (t = t.toLowerCase()),
                        (n = _.attrHandle[t]) ? n(e) : i || ht ? e.getAttribute(t) : (n = e.getAttributeNode(t),
                            n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null)
                }
                ,
                _ = n.selectors = {
                    cacheLength: 50,
                    createPseudo: B,
                    match: at,
                    attrHandle: ct ? {} : {
                        href: function (e) {
                            return e.getAttribute("href", 2)
                        },
                        type: function (e) {
                            return e.getAttribute("type")
                        }
                    },
                    find: {
                        ID: v ? function (e, t, n) {
                            if (typeof t.getElementById !== E && !n) {
                                var i = t.getElementById(e);
                                return i && i.parentNode ? [i] : []
                            }
                        }
                            : function (e, n, i) {
                                if (typeof n.getElementById !== E && !i) {
                                    var r = n.getElementById(e);
                                    return r ? r.id === e || typeof r.getAttributeNode !== E && r.getAttributeNode("id").value === e ? [r] : t : []
                                }
                            }
                        ,
                        TAG: ut ? function (e, t) {
                            return typeof t.getElementsByTagName !== E ? t.getElementsByTagName(e) : void 0
                        }
                            : function (e, t) {
                                var n = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (var i, r = [], s = 0; i = n[s]; s++)
                                        1 === i.nodeType && r.push(i);
                                    return r
                                }
                                return n
                            }
                        ,
                        NAME: pt && function (e, t) {
                            return typeof t.getElementsByName !== E ? t.getElementsByName(name) : void 0
                        }
                        ,
                        CLASS: ft && function (e, t, n) {
                            return typeof t.getElementsByClassName === E || n ? void 0 : t.getElementsByClassName(e)
                        }
                    },
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(ot, ""),
                                e[3] = (e[4] || e[5] || "").replace(ot, ""),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                e.slice(0, 4)
                        },
                        CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(),
                                "nth" === e[1] ? (e[2] || n.error(e[0]),
                                    e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])),
                                    e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]),
                                e
                        },
                        PSEUDO: function (e) {
                            var t, n;
                            return at.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (tt.test(t) && (n = a(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n),
                                e[0] = e[0].slice(0, n)),
                                e[2] = t),
                                e.slice(0, 3))
                        }
                    },
                    filter: {
                        ID: v ? function (e) {
                            return e = e.replace(ot, ""),
                                function (t) {
                                    return t.getAttribute("id") === e
                                }
                        }
                            : function (e) {
                                return e = e.replace(ot, ""),
                                    function (t) {
                                        var n = typeof t.getAttributeNode !== E && t.getAttributeNode("id");
                                        return n && n.value === e
                                    }
                            }
                        ,
                        TAG: function (e) {
                            return "*" === e ? function () {
                                return !0
                            }
                                : (e = e.replace(ot, "").toLowerCase(),
                                    function (t) {
                                        return t.nodeName && t.nodeName.toLowerCase() === e
                                    }
                                )
                        },
                        CLASS: function (e) {
                            var t = F[N][e + " "];
                            return t || (t = new RegExp("(^|" + W + ")" + e + "(" + W + "|$)")) && F(e, function (e) {
                                return t.test(e.className || typeof e.getAttribute !== E && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (e, t, i) {
                            return function (r) {
                                var s = n.attr(r, e);
                                return null == s ? "!=" === t : t ? (s += "",
                                    "=" === t ? s === i : "!=" === t ? s !== i : "^=" === t ? i && 0 === s.indexOf(i) : "*=" === t ? i && s.indexOf(i) > -1 : "$=" === t ? i && s.substr(s.length - i.length) === i : "~=" === t ? (" " + s + " ").indexOf(i) > -1 : "|=" === t ? s === i || s.substr(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function (e, t, n, i) {
                            return "nth" === e ? function (e) {
                                var t, r, s = e.parentNode;
                                if (1 === n && 0 === i)
                                    return !0;
                                if (s)
                                    for (r = 0,
                                        t = s.firstChild; t && (1 !== t.nodeType || (r++,
                                            e !== t)); t = t.nextSibling)
                                        ;
                                return r -= i,
                                    r === n || r % n === 0 && r / n >= 0
                            }
                                : function (t) {
                                    var n = t;
                                    switch (e) {
                                        case "only":
                                        case "first":
                                            for (; n = n.previousSibling;)
                                                if (1 === n.nodeType)
                                                    return !1;
                                            if ("first" === e)
                                                return !0;
                                            n = t;
                                        case "last":
                                            for (; n = n.nextSibling;)
                                                if (1 === n.nodeType)
                                                    return !1;
                                            return !0
                                    }
                                }
                        },
                        PSEUDO: function (e, t) {
                            var i, r = _.pseudos[e] || _.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                            return r[N] ? r(t) : r.length > 1 ? (i = [e, e, "", t],
                                _.setFilters.hasOwnProperty(e.toLowerCase()) ? B(function (e, n) {
                                    for (var i, s = r(e, t), o = s.length; o--;)
                                        i = z.call(e, s[o]),
                                            e[i] = !(n[i] = s[o])
                                }) : function (e) {
                                    return r(e, 0, i)
                                }
                            ) : r
                        }
                    },
                    pseudos: {
                        not: B(function (e) {
                            var t = []
                                , n = []
                                , i = T(e.replace(V, "$1"));
                            return i[N] ? B(function (e, t, n, r) {
                                for (var s, o = i(e, null, r, []), a = e.length; a--;)
                                    (s = o[a]) && (e[a] = !(t[a] = s))
                            }) : function (e, r, s) {
                                return t[0] = e,
                                    i(t, null, s, n),
                                    !n.pop()
                            }
                        }),
                        has: B(function (e) {
                            return function (t) {
                                return n(e, t).length > 0
                            }
                        }),
                        contains: B(function (e) {
                            return function (t) {
                                return (t.textContent || t.innerText || b(t)).indexOf(e) > -1
                            }
                        }),
                        enabled: function (e) {
                            return e.disabled === !1
                        },
                        disabled: function (e) {
                            return e.disabled === !0
                        },
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                                e.selected === !0
                        },
                        parent: function (e) {
                            return !_.pseudos.empty(e)
                        },
                        empty: function (e) {
                            var t;
                            for (e = e.firstChild; e;) {
                                if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t)
                                    return !1;
                                e = e.nextSibling
                            }
                            return !0
                        },
                        header: function (e) {
                            return rt.test(e.nodeName)
                        },
                        text: function (e) {
                            var t, n;
                            return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t)
                        },
                        radio: i("radio"),
                        checkbox: i("checkbox"),
                        file: i("file"),
                        password: i("password"),
                        image: i("image"),
                        submit: r("submit"),
                        reset: r("reset"),
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        input: function (e) {
                            return st.test(e.nodeName)
                        },
                        focus: function (e) {
                            var t = e.ownerDocument;
                            return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        active: function (e) {
                            return e === e.ownerDocument.activeElement
                        },
                        first: s(function () {
                            return [0]
                        }),
                        last: s(function (e, t) {
                            return [t - 1]
                        }),
                        eq: s(function (e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: s(function (e, t) {
                            for (var n = 0; t > n; n += 2)
                                e.push(n);
                            return e
                        }),
                        odd: s(function (e, t) {
                            for (var n = 1; t > n; n += 2)
                                e.push(n);
                            return e
                        }),
                        lt: s(function (e, t, n) {
                            for (var i = 0 > n ? n + t : n; --i >= 0;)
                                e.push(i);
                            return e
                        }),
                        gt: s(function (e, t, n) {
                            for (var i = 0 > n ? n + t : n; ++i < t;)
                                e.push(i);
                            return e
                        })
                    }
                },
                C = D.compareDocumentPosition ? function (e, t) {
                    return e === t ? (k = !0,
                        0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
                }
                    : function (e, t) {
                        if (e === t)
                            return k = !0,
                                0;
                        if (e.sourceIndex && t.sourceIndex)
                            return e.sourceIndex - t.sourceIndex;
                        var n, i, r = [], s = [], a = e.parentNode, l = t.parentNode, u = a;
                        if (a === l)
                            return o(e, t);
                        if (!a)
                            return -1;
                        if (!l)
                            return 1;
                        for (; u;)
                            r.unshift(u),
                                u = u.parentNode;
                        for (u = l; u;)
                            s.unshift(u),
                                u = u.parentNode;
                        n = r.length,
                            i = s.length;
                        for (var c = 0; n > c && i > c; c++)
                            if (r[c] !== s[c])
                                return o(r[c], s[c]);
                        return c === n ? o(e, s[c], -1) : o(r[c], t, 1)
                    }
                ,
                [0, 0].sort(C),
                A = !k,
                n.uniqueSort = function (e) {
                    var t, n = [], i = 1, r = 0;
                    if (k = A,
                        e.sort(C),
                        k) {
                        for (; t = e[i]; i++)
                            t === e[i - 1] && (r = n.push(i));
                        for (; r--;)
                            e.splice(n[r], 1)
                    }
                    return e
                }
                ,
                n.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }
                ,
                T = n.compile = function (e, t) {
                    var n, i = [], r = [], s = $[N][e + " "];
                    if (!s) {
                        for (t || (t = a(e)),
                            n = t.length; n--;)
                            s = f(t[n]),
                                s[N] ? i.push(s) : r.push(s);
                        s = $(e, p(r, i))
                    }
                    return s
                }
                ,
                M.querySelectorAll && function () {
                    var e, t = m, i = /'|\\/g, r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, s = [":focus"], o = [":active"], l = D.matchesSelector || D.mozMatchesSelector || D.webkitMatchesSelector || D.oMatchesSelector || D.msMatchesSelector;
                    lt(function (e) {
                        e.innerHTML = "<select><option selected=''></option></select>",
                            e.querySelectorAll("[selected]").length || s.push("\\[" + W + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                            e.querySelectorAll(":checked").length || s.push(":checked")
                    }),
                        lt(function (e) {
                            e.innerHTML = "<p test=''></p>",
                                e.querySelectorAll("[test^='']").length && s.push("[*^$]=" + W + "*(?:\"\"|'')"),
                                e.innerHTML = "<input type='hidden'/>",
                                e.querySelectorAll(":enabled").length || s.push(":enabled", ":disabled")
                        }),
                        s = new RegExp(s.join("|")),
                        m = function (e, n, r, o, l) {
                            if (!o && !l && !s.test(e)) {
                                var u, c, h = !0, f = N, p = n, d = 9 === n.nodeType && e;
                                if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                                    for (u = a(e),
                                        (h = n.getAttribute("id")) ? f = h.replace(i, "\\$&") : n.setAttribute("id", f),
                                        f = "[id='" + f + "'] ",
                                        c = u.length; c--;)
                                        u[c] = f + u[c].join("");
                                    p = it.test(e) && n.parentNode || n,
                                        d = u.join(",")
                                }
                                if (d)
                                    try {
                                        return R.apply(r, O.call(p.querySelectorAll(d), 0)),
                                            r
                                    } catch (m) { } finally {
                                        h || n.removeAttribute("id")
                                    }
                            }
                            return t(e, n, r, o, l)
                        }
                        ,
                        l && (lt(function (t) {
                            e = l.call(t, "div");
                            try {
                                l.call(t, "[test!='']:sizzle"),
                                    o.push("!=", Y)
                            } catch (n) { }
                        }),
                            o = new RegExp(o.join("|")),
                            n.matchesSelector = function (t, i) {
                                if (i = i.replace(r, "='$1']"),
                                    !x(t) && !o.test(i) && !s.test(i))
                                    try {
                                        var a = l.call(t, i);
                                        if (a || e || t.document && 11 !== t.document.nodeType)
                                            return a
                                    } catch (u) { }
                                return n(i, null, null, [t]).length > 0
                            }
                        )
                }(),
                _.pseudos.nth = _.pseudos.eq,
                _.filters = g.prototype = _.pseudos,
                _.setFilters = new g,
                n.attr = K.attr,
                K.find = n,
                K.expr = n.selectors,
                K.expr[":"] = K.expr.pseudos,
                K.unique = n.uniqueSort,
                K.text = n.getText,
                K.isXMLDoc = n.isXML,
                K.contains = n.contains
        }(e);
    var jt = /Until$/
        , Ht = /^(?:parents|prev(?:Until|All))/
        , Rt = /^.[^:#\[\.,]*$/
        , Ot = K.expr.match.needsContext
        , zt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    K.fn.extend({
        find: function (e) {
            var t, n, i, r, s, o, a = this;
            if ("string" != typeof e)
                return K(e).filter(function () {
                    for (t = 0,
                        n = a.length; n > t; t++)
                        if (K.contains(a[t], this))
                            return !0
                });
            for (o = this.pushStack("", "find", e),
                t = 0,
                n = this.length; n > t; t++)
                if (i = o.length,
                    K.find(e, this[t], o),
                    t > 0)
                    for (r = i; r < o.length; r++)
                        for (s = 0; i > s; s++)
                            if (o[s] === o[r]) {
                                o.splice(r--, 1);
                                break
                            }
            return o
        },
        has: function (e) {
            var t, n = K(e, this), i = n.length;
            return this.filter(function () {
                for (t = 0; i > t; t++)
                    if (K.contains(this, n[t]))
                        return !0
            })
        },
        not: function (e) {
            return this.pushStack(u(this, e, !1), "not", e)
        },
        filter: function (e) {
            return this.pushStack(u(this, e, !0), "filter", e)
        },
        is: function (e) {
            return !!e && ("string" == typeof e ? Ot.test(e) ? K(e, this.context).index(this[0]) >= 0 : K.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            for (var n, i = 0, r = this.length, s = [], o = Ot.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (o ? o.index(n) > -1 : K.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            return s = s.length > 1 ? K.unique(s) : s,
                this.pushStack(s, "closest", e)
        },
        index: function (e) {
            return e ? "string" == typeof e ? K.inArray(this[0], K(e)) : K.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? K(e, t) : K.makeArray(e && e.nodeType ? [e] : e)
                , i = K.merge(this.get(), n);
            return this.pushStack(a(n[0]) || a(i[0]) ? i : K.unique(i))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
        K.fn.andSelf = K.fn.addBack,
        K.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return K.dir(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return K.dir(e, "parentNode", n)
            },
            next: function (e) {
                return l(e, "nextSibling")
            },
            prev: function (e) {
                return l(e, "previousSibling")
            },
            nextAll: function (e) {
                return K.dir(e, "nextSibling")
            },
            prevAll: function (e) {
                return K.dir(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return K.dir(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return K.dir(e, "previousSibling", n)
            },
            siblings: function (e) {
                return K.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return K.sibling(e.firstChild)
            },
            contents: function (e) {
                return K.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : K.merge([], e.childNodes)
            }
        }, function (e, t) {
            K.fn[e] = function (n, i) {
                var r = K.map(this, t, n);
                return jt.test(e) || (i = n),
                    i && "string" == typeof i && (r = K.filter(i, r)),
                    r = this.length > 1 && !zt[e] ? K.unique(r) : r,
                    this.length > 1 && Ht.test(e) && (r = r.reverse()),
                    this.pushStack(r, e, U.call(arguments).join(","))
            }
        }),
        K.extend({
            filter: function (e, t, n) {
                return n && (e = ":not(" + e + ")"),
                    1 === t.length ? K.find.matchesSelector(t[0], e) ? [t[0]] : [] : K.find.matches(e, t)
            },
            dir: function (e, n, i) {
                for (var r = [], s = e[n]; s && 9 !== s.nodeType && (i === t || 1 !== s.nodeType || !K(s).is(i));)
                    1 === s.nodeType && r.push(s),
                        s = s[n];
                return r
            },
            sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
    var Bt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
        , It = / jQuery\d+="(?:null|\d+)"/g
        , Ft = /^\s+/
        , qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
        , $t = /<([\w:]+)/
        , Wt = /<tbody/i
        , Xt = /<|&#?\w+;/
        , Qt = /<(?:script|style|link)/i
        , Ut = /<(?:script|object|embed|option|style)/i
        , Gt = new RegExp("<(?:" + Bt + ")[\\s/>]", "i")
        , Yt = /^(?:checkbox|radio)$/
        , Jt = /checked\s*(?:[^=]|=\s*.checked.)/i
        , Vt = /\/(java|ecma)script/i
        , Kt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g
        , Zt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }
        , en = c(F)
        , tn = en.appendChild(F.createElement("div"));
    Zt.optgroup = Zt.option,
        Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead,
        Zt.th = Zt.td,
        K.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]),
        K.fn.extend({
            text: function (e) {
                return K.access(this, function (e) {
                    return e === t ? K.text(this) : this.empty().append((this[0] && this[0].ownerDocument || F).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function (e) {
                if (K.isFunction(e))
                    return this.each(function (t) {
                        K(this).wrapAll(e.call(this, t))
                    });
                if (this[0]) {
                    var t = K(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                        t.map(function () {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)
                                e = e.firstChild;
                            return e
                        }).append(this)
                }
                return this
            },
            wrapInner: function (e) {
                return this.each(K.isFunction(e) ? function (t) {
                    K(this).wrapInner(e.call(this, t))
                }
                    : function () {
                        var t = K(this)
                            , n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }
                )
            },
            wrap: function (e) {
                var t = K.isFunction(e);
                return this.each(function (n) {
                    K(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function () {
                return this.domManip(arguments, !0, function (e) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
                })
            },
            prepend: function () {
                return this.domManip(arguments, !0, function (e) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function () {
                if (!a(this[0]))
                    return this.domManip(arguments, !1, function (e) {
                        this.parentNode.insertBefore(e, this)
                    });
                if (arguments.length) {
                    var e = K.clean(arguments);
                    return this.pushStack(K.merge(e, this), "before", this.selector)
                }
            },
            after: function () {
                if (!a(this[0]))
                    return this.domManip(arguments, !1, function (e) {
                        this.parentNode.insertBefore(e, this.nextSibling)
                    });
                if (arguments.length) {
                    var e = K.clean(arguments);
                    return this.pushStack(K.merge(this, e), "after", this.selector)
                }
            },
            remove: function (e, t) {
                for (var n, i = 0; null != (n = this[i]); i++)
                    (!e || K.filter(e, [n]).length) && (!t && 1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")),
                        K.cleanData([n])),
                        n.parentNode && n.parentNode.removeChild(n));
                return this
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    for (1 === e.nodeType && K.cleanData(e.getElementsByTagName("*")); e.firstChild;)
                        e.removeChild(e.firstChild);
                return this
            },
            clone: function (e, t) {
                return e = null == e ? !1 : e,
                    t = null == t ? e : t,
                    this.map(function () {
                        return K.clone(this, e, t)
                    })
            },
            html: function (e) {
                return K.access(this, function (e) {
                    var n = this[0] || {}
                        , i = 0
                        , r = this.length;
                    if (e === t)
                        return 1 === n.nodeType ? n.innerHTML.replace(It, "") : t;
                    if (!("string" != typeof e || Qt.test(e) || !K.support.htmlSerialize && Gt.test(e) || !K.support.leadingWhitespace && Ft.test(e) || Zt[($t.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(qt, "<$1></$2>");
                        try {
                            for (; r > i; i++)
                                n = this[i] || {},
                                    1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")),
                                        n.innerHTML = e);
                            n = 0
                        } catch (s) { }
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function (e) {
                return a(this[0]) ? this.length ? this.pushStack(K(K.isFunction(e) ? e() : e), "replaceWith", e) : this : K.isFunction(e) ? this.each(function (t) {
                    var n = K(this)
                        , i = n.html();
                    n.replaceWith(e.call(this, t, i))
                }) : ("string" != typeof e && (e = K(e).detach()),
                    this.each(function () {
                        var t = this.nextSibling
                            , n = this.parentNode;
                        K(this).remove(),
                            t ? K(t).before(e) : K(n).append(e)
                    }))
            },
            detach: function (e) {
                return this.remove(e, !0)
            },
            domManip: function (e, n, i) {
                e = [].concat.apply([], e);
                var r, s, o, a, l = 0, u = e[0], c = [], f = this.length;
                if (!K.support.checkClone && f > 1 && "string" == typeof u && Jt.test(u))
                    return this.each(function () {
                        K(this).domManip(e, n, i)
                    });
                if (K.isFunction(u))
                    return this.each(function (r) {
                        var s = K(this);
                        e[0] = u.call(this, r, n ? s.html() : t),
                            s.domManip(e, n, i)
                    });
                if (this[0]) {
                    if (r = K.buildFragment(e, this, c),
                        o = r.fragment,
                        s = o.firstChild,
                        1 === o.childNodes.length && (o = s),
                        s)
                        for (n = n && K.nodeName(s, "tr"),
                            a = r.cacheable || f - 1; f > l; l++)
                            i.call(n && K.nodeName(this[l], "table") ? h(this[l], "tbody") : this[l], l === a ? o : K.clone(o, !0, !0));
                    o = s = null,
                        c.length && K.each(c, function (e, t) {
                            t.src ? K.ajax ? K.ajax({
                                url: t.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                "throws": !0
                            }) : K.error("no ajax") : K.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Kt, "")),
                                t.parentNode && t.parentNode.removeChild(t)
                        })
                }
                return this
            }
        }),
        K.buildFragment = function (e, n, i) {
            var r, s, o, a = e[0];
            return n = n || F,
                n = !n.nodeType && n[0] || n,
                n = n.ownerDocument || n,
                1 === e.length && "string" == typeof a && a.length < 512 && n === F && "<" === a.charAt(0) && !Ut.test(a) && (K.support.checkClone || !Jt.test(a)) && (K.support.html5Clone || !Gt.test(a)) && (s = !0,
                    r = K.fragments[a],
                    o = r !== t),
                r || (r = n.createDocumentFragment(),
                    K.clean(e, n, r, i),
                    s && (K.fragments[a] = o && r)),
            {
                fragment: r,
                cacheable: s
            }
        }
        ,
        K.fragments = {},
        K.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            K.fn[e] = function (n) {
                var i, r = 0, s = [], o = K(n), a = o.length, l = 1 === this.length && this[0].parentNode;
                if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === a)
                    return o[t](this[0]),
                        this;
                for (; a > r; r++)
                    i = (r > 0 ? this.clone(!0) : this).get(),
                        K(o[r])[t](i),
                        s = s.concat(i);
                return this.pushStack(s, e, o.selector)
            }
        }),
        K.extend({
            clone: function (e, t, n) {
                var i, r, s, o;
                if (K.support.html5Clone || K.isXMLDoc(e) || !Gt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML,
                    tn.removeChild(o = tn.firstChild)),
                    !(K.support.noCloneEvent && K.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e)))
                    for (p(e, o),
                        i = d(e),
                        r = d(o),
                        s = 0; i[s]; ++s)
                        r[s] && p(i[s], r[s]);
                if (t && (f(e, o),
                    n))
                    for (i = d(e),
                        r = d(o),
                        s = 0; i[s]; ++s)
                        f(i[s], r[s]);
                return i = r = null,
                    o
            },
            clean: function (e, t, n, i) {
                var r, s, o, a, l, u, h, f, p, d, g, y = t === F && en, v = [];
                for (t && "undefined" != typeof t.createDocumentFragment || (t = F),
                    r = 0; null != (o = e[r]); r++)
                    if ("number" == typeof o && (o += ""),
                        o) {
                        if ("string" == typeof o)
                            if (Xt.test(o)) {
                                for (y = y || c(t),
                                    h = t.createElement("div"),
                                    y.appendChild(h),
                                    o = o.replace(qt, "<$1></$2>"),
                                    a = ($t.exec(o) || ["", ""])[1].toLowerCase(),
                                    l = Zt[a] || Zt._default,
                                    u = l[0],
                                    h.innerHTML = l[1] + o + l[2]; u--;)
                                    h = h.lastChild;
                                if (!K.support.tbody)
                                    for (f = Wt.test(o),
                                        p = "table" !== a || f ? "<table>" !== l[1] || f ? [] : h.childNodes : h.firstChild && h.firstChild.childNodes,
                                        s = p.length - 1; s >= 0; --s)
                                        K.nodeName(p[s], "tbody") && !p[s].childNodes.length && p[s].parentNode.removeChild(p[s]);
                                !K.support.leadingWhitespace && Ft.test(o) && h.insertBefore(t.createTextNode(Ft.exec(o)[0]), h.firstChild),
                                    o = h.childNodes,
                                    h.parentNode.removeChild(h)
                            } else
                                o = t.createTextNode(o);
                        o.nodeType ? v.push(o) : K.merge(v, o)
                    }
                if (h && (o = h = y = null),
                    !K.support.appendChecked)
                    for (r = 0; null != (o = v[r]); r++)
                        K.nodeName(o, "input") ? m(o) : "undefined" != typeof o.getElementsByTagName && K.grep(o.getElementsByTagName("input"), m);
                if (n)
                    for (d = function (e) {
                        return !e.type || Vt.test(e.type) ? i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : void 0
                    }
                        ,
                        r = 0; null != (o = v[r]); r++)
                        K.nodeName(o, "script") && d(o) || (n.appendChild(o),
                            "undefined" != typeof o.getElementsByTagName && (g = K.grep(K.merge([], o.getElementsByTagName("script")), d),
                                v.splice.apply(v, [r + 1, 0].concat(g)),
                                r += g.length));
                return v
            },
            cleanData: function (e, t) {
                for (var n, i, r, s, o = 0, a = K.expando, l = K.cache, u = K.support.deleteExpando, c = K.event.special; null != (r = e[o]); o++)
                    if ((t || K.acceptData(r)) && (i = r[a],
                        n = i && l[i])) {
                        if (n.events)
                            for (s in n.events)
                                c[s] ? K.event.remove(r, s) : K.removeEvent(r, s, n.handle);
                        l[i] && (delete l[i],
                            u ? delete r[a] : r.removeAttribute ? r.removeAttribute(a) : r[a] = null,
                            K.deletedIds.push(i))
                    }
            }
        }),
        function () {
            var e, t;
            K.uaMatch = function (e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }
                ,
                e = K.uaMatch($.userAgent),
                t = {},
                e.browser && (t[e.browser] = !0,
                    t.version = e.version),
                t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0),
                K.browser = t,
                K.sub = function () {
                    function e(t, n) {
                        return new e.fn.init(t, n)
                    }
                    K.extend(!0, e, this),
                        e.superclass = this,
                        e.fn = e.prototype = this(),
                        e.fn.constructor = e,
                        e.sub = this.sub,
                        e.fn.init = function (n, i) {
                            return i && i instanceof K && !(i instanceof e) && (i = e(i)),
                                K.fn.init.call(this, n, i, t)
                        }
                        ,
                        e.fn.init.prototype = e.fn;
                    var t = e(F);
                    return e
                }
        }();
    var nn, rn, sn, on = /alpha\([^)]*\)/i, an = /opacity=([^)]*)/, ln = /^(top|right|bottom|left)$/, un = /^(none|table(?!-c[ea]).+)/, cn = /^margin/, hn = new RegExp("^(" + Z + ")(.*)$", "i"), fn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"), pn = new RegExp("^([-+])=(" + Z + ")", "i"), dn = {
        BODY: "block"
    }, mn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, gn = {
        letterSpacing: 0,
        fontWeight: 400
    }, yn = ["Top", "Right", "Bottom", "Left"], vn = ["Webkit", "O", "Moz", "ms"], _n = K.fn.toggle;
    K.fn.extend({
        css: function (e, n) {
            return K.access(this, function (e, n, i) {
                return i !== t ? K.style(e, n, i) : K.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return v(this, !0)
        },
        hide: function () {
            return v(this)
        },
        toggle: function (e, t) {
            var n = "boolean" == typeof e;
            return K.isFunction(e) && K.isFunction(t) ? _n.apply(this, arguments) : this.each(function () {
                (n ? e : y(this)) ? K(this).show() : K(this).hide()
            })
        }
    }),
        K.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = nn(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": K.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (e, n, i, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var s, o, a, l = K.camelCase(n), u = e.style;
                    if (n = K.cssProps[l] || (K.cssProps[l] = g(u, l)),
                        a = K.cssHooks[n] || K.cssHooks[l],
                        i === t)
                        return a && "get" in a && (s = a.get(e, !1, r)) !== t ? s : u[n];
                    if (o = typeof i,
                        "string" === o && (s = pn.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(K.css(e, n)),
                            o = "number"),
                        !(null == i || "number" === o && isNaN(i) || ("number" === o && !K.cssNumber[l] && (i += "px"),
                            a && "set" in a && (i = a.set(e, i, r)) === t)))
                        try {
                            u[n] = i
                        } catch (c) { }
                }
            },
            css: function (e, n, i, r) {
                var s, o, a, l = K.camelCase(n);
                return n = K.cssProps[l] || (K.cssProps[l] = g(e.style, l)),
                    a = K.cssHooks[n] || K.cssHooks[l],
                    a && "get" in a && (s = a.get(e, !0, r)),
                    s === t && (s = nn(e, n)),
                    "normal" === s && n in gn && (s = gn[n]),
                    i || r !== t ? (o = parseFloat(s),
                        i || K.isNumeric(o) ? o || 0 : s) : s
            },
            swap: function (e, t, n) {
                var i, r, s = {};
                for (r in t)
                    s[r] = e.style[r],
                        e.style[r] = t[r];
                i = n.call(e);
                for (r in t)
                    e.style[r] = s[r];
                return i
            }
        }),
        e.getComputedStyle ? nn = function (t, n) {
            var i, r, s, o, a = e.getComputedStyle(t, null), l = t.style;
            return a && (i = a.getPropertyValue(n) || a[n],
                "" === i && !K.contains(t.ownerDocument, t) && (i = K.style(t, n)),
                fn.test(i) && cn.test(n) && (r = l.width,
                    s = l.minWidth,
                    o = l.maxWidth,
                    l.minWidth = l.maxWidth = l.width = i,
                    i = a.width,
                    l.width = r,
                    l.minWidth = s,
                    l.maxWidth = o)),
                i
        }
            : F.documentElement.currentStyle && (nn = function (e, t) {
                var n, i, r = e.currentStyle && e.currentStyle[t], s = e.style;
                return null == r && s && s[t] && (r = s[t]),
                    fn.test(r) && !ln.test(t) && (n = s.left,
                        i = e.runtimeStyle && e.runtimeStyle.left,
                        i && (e.runtimeStyle.left = e.currentStyle.left),
                        s.left = "fontSize" === t ? "1em" : r,
                        r = s.pixelLeft + "px",
                        s.left = n,
                        i && (e.runtimeStyle.left = i)),
                    "" === r ? "auto" : r
            }
            ),
        K.each(["height", "width"], function (e, t) {
            K.cssHooks[t] = {
                get: function (e, n, i) {
                    return n ? 0 === e.offsetWidth && un.test(nn(e, "display")) ? K.swap(e, mn, function () {
                        return x(e, t, i)
                    }) : x(e, t, i) : void 0
                },
                set: function (e, n, i) {
                    return _(e, n, i ? b(e, t, i, K.support.boxSizing && "border-box" === K.css(e, "boxSizing")) : 0)
                }
            }
        }),
        K.support.opacity || (K.cssHooks.opacity = {
            get: function (e, t) {
                return an.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function (e, t) {
                var n = e.style
                    , i = e.currentStyle
                    , r = K.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
                    , s = i && i.filter || n.filter || "";
                n.zoom = 1,
                    t >= 1 && "" === K.trim(s.replace(on, "")) && n.removeAttribute && (n.removeAttribute("filter"),
                        i && !i.filter) || (n.filter = on.test(s) ? s.replace(on, r) : s + " " + r)
            }
        }),
        K(function () {
            K.support.reliableMarginRight || (K.cssHooks.marginRight = {
                get: function (e, t) {
                    return K.swap(e, {
                        display: "inline-block"
                    }, function () {
                        return t ? nn(e, "marginRight") : void 0
                    })
                }
            }),
                !K.support.pixelPosition && K.fn.position && K.each(["top", "left"], function (e, t) {
                    K.cssHooks[t] = {
                        get: function (e, n) {
                            if (n) {
                                var i = nn(e, t);
                                return fn.test(i) ? K(e).position()[t] + "px" : i
                            }
                        }
                    }
                })
        }),
        K.expr && K.expr.filters && (K.expr.filters.hidden = function (e) {
            return 0 === e.offsetWidth && 0 === e.offsetHeight || !K.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nn(e, "display"))
        }
            ,
            K.expr.filters.visible = function (e) {
                return !K.expr.filters.hidden(e)
            }
        ),
        K.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            K.cssHooks[e + t] = {
                expand: function (n) {
                    var i, r = "string" == typeof n ? n.split(" ") : [n], s = {};
                    for (i = 0; 4 > i; i++)
                        s[e + yn[i] + t] = r[i] || r[i - 2] || r[0];
                    return s
                }
            },
                cn.test(e) || (K.cssHooks[e + t].set = _)
        });
    var bn = /%20/g
        , xn = /\[\]$/
        , wn = /\r?\n/g
        , Tn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
        , Cn = /^(?:select|textarea)/i;
    K.fn.extend({
        serialize: function () {
            return K.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? K.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Cn.test(this.nodeName) || Tn.test(this.type))
            }).map(function (e, t) {
                var n = K(this).val();
                return null == n ? null : K.isArray(n) ? K.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(wn, "\r\n")
                    }
                }) : {
                        name: t.name,
                        value: n.replace(wn, "\r\n")
                    }
            }).get()
        }
    }),
        K.param = function (e, n) {
            var i, r = [], s = function (e, t) {
                t = K.isFunction(t) ? t() : null == t ? "" : t,
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (n === t && (n = K.ajaxSettings && K.ajaxSettings.traditional),
                K.isArray(e) || e.jquery && !K.isPlainObject(e))
                K.each(e, function () {
                    s(this.name, this.value)
                });
            else
                for (i in e)
                    T(i, e[i], n, s);
            return r.join("&").replace(bn, "+")
        }
        ;
    var kn, Sn, An = /#.*$/, En = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Nn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Pn = /^(?:GET|HEAD)$/, Mn = /^\/\//, Dn = /\?/, Ln = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, jn = /([?&])_=[^&]*/, Hn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Rn = K.fn.load, On = {}, zn = {}, Bn = ["*/"] + ["*"];
    try {
        Sn = q.href
    } catch (In) {
        Sn = F.createElement("a"),
            Sn.href = "",
            Sn = Sn.href
    }
    kn = Hn.exec(Sn.toLowerCase()) || [],
        K.fn.load = function (e, n, i) {
            if ("string" != typeof e && Rn)
                return Rn.apply(this, arguments);
            if (!this.length)
                return this;
            var r, s, o, a = this, l = e.indexOf(" ");
            return l >= 0 && (r = e.slice(l, e.length),
                e = e.slice(0, l)),
                K.isFunction(n) ? (i = n,
                    n = t) : n && "object" == typeof n && (s = "POST"),
                K.ajax({
                    url: e,
                    type: s,
                    dataType: "html",
                    data: n,
                    complete: function (e, t) {
                        i && a.each(i, o || [e.responseText, t, e])
                    }
                }).done(function (e) {
                    o = arguments,
                        a.html(r ? K("<div>").append(e.replace(Ln, "")).find(r) : e)
                }),
                this
        }
        ,
        K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
            K.fn[t] = function (e) {
                return this.on(t, e)
            }
        }),
        K.each(["get", "post"], function (e, n) {
            K[n] = function (e, i, r, s) {
                return K.isFunction(i) && (s = s || r,
                    r = i,
                    i = t),
                    K.ajax({
                        type: n,
                        url: e,
                        data: i,
                        success: r,
                        dataType: s
                    })
            }
        }),
        K.extend({
            getScript: function (e, n) {
                return K.get(e, t, n, "script")
            },
            getJSON: function (e, t, n) {
                return K.get(e, t, n, "json")
            },
            ajaxSetup: function (e, t) {
                return t ? S(e, K.ajaxSettings) : (t = e,
                    e = K.ajaxSettings),
                    S(e, t),
                    e
            },
            ajaxSettings: {
                url: Sn,
                isLocal: Nn.test(kn[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": Bn
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": e.String,
                    "text html": !0,
                    "text json": K.parseJSON,
                    "text xml": K.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: C(On),
            ajaxTransport: C(zn),
            ajax: function (e, n) {
                function i(e, n, i, o) {
                    var u, h, v, _, x, T = n;
                    2 !== b && (b = 2,
                        l && clearTimeout(l),
                        a = t,
                        s = o || "",
                        w.readyState = e > 0 ? 4 : 0,
                        i && (_ = A(f, w, i)),
                        e >= 200 && 300 > e || 304 === e ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"),
                            x && (K.lastModified[r] = x),
                            x = w.getResponseHeader("Etag"),
                            x && (K.etag[r] = x)),
                            304 === e ? (T = "notmodified",
                                u = !0) : (u = E(f, _),
                                    T = u.state,
                                    h = u.data,
                                    v = u.error,
                                    u = !v)) : (v = T,
                                        (!T || e) && (T = "error",
                                            0 > e && (e = 0))),
                        w.status = e,
                        w.statusText = (n || T) + "",
                        u ? m.resolveWith(p, [h, T, w]) : m.rejectWith(p, [w, T, v]),
                        w.statusCode(y),
                        y = t,
                        c && d.trigger("ajax" + (u ? "Success" : "Error"), [w, f, u ? h : v]),
                        g.fireWith(p, [w, T]),
                        c && (d.trigger("ajaxComplete", [w, f]),
                            --K.active || K.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e,
                    e = t),
                    n = n || {};
                var r, s, o, a, l, u, c, h, f = K.ajaxSetup({}, n), p = f.context || f, d = p !== f && (p.nodeType || p instanceof K) ? K(p) : K.event, m = K.Deferred(), g = K.Callbacks("once memory"), y = f.statusCode || {}, v = {}, _ = {}, b = 0, x = "canceled", w = {
                    readyState: 0,
                    setRequestHeader: function (e, t) {
                        if (!b) {
                            var n = e.toLowerCase();
                            e = _[n] = _[n] || e,
                                v[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? s : null
                    },
                    getResponseHeader: function (e) {
                        var n;
                        if (2 === b) {
                            if (!o)
                                for (o = {}; n = En.exec(s);)
                                    o[n[1].toLowerCase()] = n[2];
                            n = o[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function (e) {
                        return b || (f.mimeType = e),
                            this
                    },
                    abort: function (e) {
                        return e = e || x,
                            a && a.abort(e),
                            i(0, e),
                            this
                    }
                };
                if (m.promise(w),
                    w.success = w.done,
                    w.error = w.fail,
                    w.complete = g.add,
                    w.statusCode = function (e) {
                        if (e) {
                            var t;
                            if (2 > b)
                                for (t in e)
                                    y[t] = [y[t], e[t]];
                            else
                                t = e[w.status],
                                    w.always(t)
                        }
                        return this
                    }
                    ,
                    f.url = ((e || f.url) + "").replace(An, "").replace(Mn, kn[1] + "//"),
                    f.dataTypes = K.trim(f.dataType || "*").toLowerCase().split(tt),
                    null == f.crossDomain && (u = Hn.exec(f.url.toLowerCase()),
                        f.crossDomain = !(!u || u[1] === kn[1] && u[2] === kn[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == (kn[3] || ("http:" === kn[1] ? 80 : 443)))),
                    f.data && f.processData && "string" != typeof f.data && (f.data = K.param(f.data, f.traditional)),
                    k(On, f, n, w),
                    2 === b)
                    return w;
                if (c = f.global,
                    f.type = f.type.toUpperCase(),
                    f.hasContent = !Pn.test(f.type),
                    c && 0 === K.active++ && K.event.trigger("ajaxStart"),
                    !f.hasContent && (f.data && (f.url += (Dn.test(f.url) ? "&" : "?") + f.data,
                        delete f.data),
                        r = f.url,
                        f.cache === !1)) {
                    var T = K.now()
                        , C = f.url.replace(jn, "$1_=" + T);
                    f.url = C + (C === f.url ? (Dn.test(f.url) ? "&" : "?") + "_=" + T : "")
                }
                (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", f.contentType),
                    f.ifModified && (r = r || f.url,
                        K.lastModified[r] && w.setRequestHeader("If-Modified-Since", K.lastModified[r]),
                        K.etag[r] && w.setRequestHeader("If-None-Match", K.etag[r])),
                    w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Bn + "; q=0.01" : "") : f.accepts["*"]);
                for (h in f.headers)
                    w.setRequestHeader(h, f.headers[h]);
                if (!f.beforeSend || f.beforeSend.call(p, w, f) !== !1 && 2 !== b) {
                    x = "abort";
                    for (h in {
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                        w[h](f[h]);
                    if (a = k(zn, f, n, w)) {
                        w.readyState = 1,
                            c && d.trigger("ajaxSend", [w, f]),
                            f.async && f.timeout > 0 && (l = setTimeout(function () {
                                w.abort("timeout")
                            }, f.timeout));
                        try {
                            b = 1,
                                a.send(v, i)
                        } catch (S) {
                            if (!(2 > b))
                                throw S;
                            i(-1, S)
                        }
                    } else
                        i(-1, "No Transport");
                    return w
                }
                return w.abort()
            },
            active: 0,
            lastModified: {},
            etag: {}
        });
    var Fn = []
        , qn = /\?/
        , $n = /(=)\?(?=&|$)|\?\?/
        , Wn = K.now();
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Fn.pop() || K.expando + "_" + Wn++;
            return this[e] = !0,
                e
        }
    }),
        K.ajaxPrefilter("json jsonp", function (n, i, r) {
            var s, o, a, l = n.data, u = n.url, c = n.jsonp !== !1, h = c && $n.test(u), f = c && !h && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && $n.test(l);
            return "jsonp" === n.dataTypes[0] || h || f ? (s = n.jsonpCallback = K.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
                o = e[s],
                h ? n.url = u.replace($n, "$1" + s) : f ? n.data = l.replace($n, "$1" + s) : c && (n.url += (qn.test(u) ? "&" : "?") + n.jsonp + "=" + s),
                n.converters["script json"] = function () {
                    return a || K.error(s + " was not called"),
                        a[0]
                }
                ,
                n.dataTypes[0] = "json",
                e[s] = function () {
                    a = arguments
                }
                ,
                r.always(function () {
                    e[s] = o,
                        n[s] && (n.jsonpCallback = i.jsonpCallback,
                            Fn.push(s)),
                        a && K.isFunction(o) && o(a[0]),
                        a = o = t
                }),
                "script") : void 0
        }),
        K.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function (e) {
                    return K.globalEval(e),
                        e
                }
            }
        }),
        K.ajaxPrefilter("script", function (e) {
            e.cache === t && (e.cache = !1),
                e.crossDomain && (e.type = "GET",
                    e.global = !1)
        }),
        K.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var n, i = F.head || F.getElementsByTagName("head")[0] || F.documentElement;
                return {
                    send: function (r, s) {
                        n = F.createElement("script"),
                            n.async = "async",
                            e.scriptCharset && (n.charset = e.scriptCharset),
                            n.src = e.url,
                            n.onload = n.onreadystatechange = function (e, r) {
                                (r || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null,
                                    i && n.parentNode && i.removeChild(n),
                                    n = t,
                                    r || s(200, "success"))
                            }
                            ,
                            i.insertBefore(n, i.firstChild)
                    },
                    abort: function () {
                        n && n.onload(0, 1)
                    }
                }
            }
        });
    var Xn, Qn = e.ActiveXObject ? function () {
        for (var e in Xn)
            Xn[e](0, 1)
    }
        : !1, Un = 0;
    K.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && N() || P()
    }
        : N,
        function (e) {
            K.extend(K.support, {
                ajax: !!e,
                cors: !!e && "withCredentials" in e
            })
        }(K.ajaxSettings.xhr()),
        K.support.ajax && K.ajaxTransport(function (n) {
            if (!n.crossDomain || K.support.cors) {
                var i;
                return {
                    send: function (r, s) {
                        var o, a, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async),
                            n.xhrFields)
                            for (a in n.xhrFields)
                                l[a] = n.xhrFields[a];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                            !n.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (a in r)
                                l.setRequestHeader(a, r[a])
                        } catch (u) { }
                        l.send(n.hasContent && n.data || null),
                            i = function (e, r) {
                                var a, u, c, h, f;
                                try {
                                    if (i && (r || 4 === l.readyState))
                                        if (i = t,
                                            o && (l.onreadystatechange = K.noop,
                                                Qn && delete Xn[o]),
                                            r)
                                            4 !== l.readyState && l.abort();
                                        else {
                                            a = l.status,
                                                c = l.getAllResponseHeaders(),
                                                h = {},
                                                f = l.responseXML,
                                                f && f.documentElement && (h.xml = f);
                                            try {
                                                h.text = l.responseText
                                            } catch (p) { }
                                            try {
                                                u = l.statusText
                                            } catch (p) {
                                                u = ""
                                            }
                                            a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
                                        }
                                } catch (d) {
                                    r || s(-1, d)
                                }
                                h && s(a, u, h, c)
                            }
                            ,
                            n.async ? 4 === l.readyState ? setTimeout(i, 0) : (o = ++Un,
                                Qn && (Xn || (Xn = {},
                                    K(e).unload(Qn)),
                                    Xn[o] = i),
                                l.onreadystatechange = i) : i()
                    },
                    abort: function () {
                        i && i(0, 1)
                    }
                }
            }
        });
    var Gn, Yn, Jn = /^(?:toggle|show|hide)$/, Vn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"), Kn = /queueHooks$/, Zn = [H], ei = {
        "*": [function (e, t) {
            var n, i, r = this.createTween(e, t), s = Vn.exec(t), o = r.cur(), a = +o || 0, l = 1, u = 20;
            if (s) {
                if (n = +s[2],
                    i = s[3] || (K.cssNumber[e] ? "" : "px"),
                    "px" !== i && a) {
                    a = K.css(r.elem, e, !0) || n || 1;
                    do
                        l = l || ".5",
                            a /= l,
                            K.style(r.elem, e, a + i);
                    while (l !== (l = r.cur() / o) && 1 !== l && --u)
                }
                r.unit = i,
                    r.start = a,
                    r.end = s[1] ? a + (s[1] + 1) * n : n
            }
            return r
        }
        ]
    };
    K.Animation = K.extend(L, {
        tweener: function (e, t) {
            K.isFunction(e) ? (t = e,
                e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++)
                n = e[i],
                    ei[n] = ei[n] || [],
                    ei[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Zn.unshift(e) : Zn.push(e)
        }
    }),
        K.Tween = R,
        R.prototype = {
            constructor: R,
            init: function (e, t, n, i, r, s) {
                this.elem = e,
                    this.prop = n,
                    this.easing = r || "swing",
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = i,
                    this.unit = s || (K.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = R.propHooks[this.prop];
                return e && e.get ? e.get(this) : R.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = R.propHooks[this.prop];
                return this.pos = t = this.options.duration ? K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : R.propHooks._default.set(this),
                    this
            }
        },
        R.prototype.init.prototype = R.prototype,
        R.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, !1, ""),
                        t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function (e) {
                    K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        },
        R.propHooks.scrollTop = R.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        K.each(["toggle", "show", "hide"], function (e, t) {
            var n = K.fn[t];
            K.fn[t] = function (i, r, s) {
                return null == i || "boolean" == typeof i || !e && K.isFunction(i) && K.isFunction(r) ? n.apply(this, arguments) : this.animate(O(t, !0), i, r, s)
            }
        }),
        K.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(y).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (e, t, n, i) {
                var r = K.isEmptyObject(e)
                    , s = K.speed(t, n, i)
                    , o = function () {
                        var t = L(this, K.extend({}, e), s);
                        r && t.stop(!0)
                    };
                return r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function (e, n, i) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop,
                        t(i)
                };
                return "string" != typeof e && (i = n,
                    n = e,
                    e = t),
                    n && e !== !1 && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0
                            , n = null != e && e + "queueHooks"
                            , s = K.timers
                            , o = K._data(this);
                        if (n)
                            o[n] && o[n].stop && r(o[n]);
                        else
                            for (n in o)
                                o[n] && o[n].stop && Kn.test(n) && r(o[n]);
                        for (n = s.length; n--;)
                            s[n].elem === this && (null == e || s[n].queue === e) && (s[n].anim.stop(i),
                                t = !1,
                                s.splice(n, 1));
                        (t || !i) && K.dequeue(this, e)
                    })
            }
        }),
        K.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            K.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }),
        K.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? K.extend({}, e) : {
                complete: n || !n && t || K.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !K.isFunction(t) && t
            };
            return i.duration = K.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in K.fx.speeds ? K.fx.speeds[i.duration] : K.fx.speeds._default,
                (null == i.queue || i.queue === !0) && (i.queue = "fx"),
                i.old = i.complete,
                i.complete = function () {
                    K.isFunction(i.old) && i.old.call(this),
                        i.queue && K.dequeue(this, i.queue)
                }
                ,
                i
        }
        ,
        K.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        },
        K.timers = [],
        K.fx = R.prototype.init,
        K.fx.tick = function () {
            var e, n = K.timers, i = 0;
            for (Gn = K.now(); i < n.length; i++)
                e = n[i],
                    !e() && n[i] === e && n.splice(i--, 1);
            n.length || K.fx.stop(),
                Gn = t
        }
        ,
        K.fx.timer = function (e) {
            e() && K.timers.push(e) && !Yn && (Yn = setInterval(K.fx.tick, K.fx.interval))
        }
        ,
        K.fx.interval = 13,
        K.fx.stop = function () {
            clearInterval(Yn),
                Yn = null
        }
        ,
        K.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        K.fx.step = {},
        K.expr && K.expr.filters && (K.expr.filters.animated = function (e) {
            return K.grep(K.timers, function (t) {
                return e === t.elem
            }).length
        }
        );
    var ti = /^(?:body|html)$/i;
    K.fn.offset = function (e) {
        if (arguments.length)
            return e === t ? this : this.each(function (t) {
                K.offset.setOffset(this, e, t)
            });
        var n, i, r, s, o, a, l, u = {
            top: 0,
            left: 0
        }, c = this[0], h = c && c.ownerDocument;
        if (h)
            return (i = h.body) === c ? K.offset.bodyOffset(c) : (n = h.documentElement,
                K.contains(n, c) ? ("undefined" != typeof c.getBoundingClientRect && (u = c.getBoundingClientRect()),
                    r = z(h),
                    s = n.clientTop || i.clientTop || 0,
                    o = n.clientLeft || i.clientLeft || 0,
                    a = r.pageYOffset || n.scrollTop,
                    l = r.pageXOffset || n.scrollLeft,
                {
                    top: u.top + a - s,
                    left: u.left + l - o
                }) : u)
    }
        ,
        K.offset = {
            bodyOffset: function (e) {
                var t = e.offsetTop
                    , n = e.offsetLeft;
                return K.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(K.css(e, "marginTop")) || 0,
                    n += parseFloat(K.css(e, "marginLeft")) || 0),
                {
                    top: t,
                    left: n
                }
            },
            setOffset: function (e, t, n) {
                var i = K.css(e, "position");
                "static" === i && (e.style.position = "relative");
                var r, s, o = K(e), a = o.offset(), l = K.css(e, "top"), u = K.css(e, "left"), c = ("absolute" === i || "fixed" === i) && K.inArray("auto", [l, u]) > -1, h = {}, f = {};
                c ? (f = o.position(),
                    r = f.top,
                    s = f.left) : (r = parseFloat(l) || 0,
                        s = parseFloat(u) || 0),
                    K.isFunction(t) && (t = t.call(e, n, a)),
                    null != t.top && (h.top = t.top - a.top + r),
                    null != t.left && (h.left = t.left - a.left + s),
                    "using" in t ? t.using.call(e, h) : o.css(h)
            }
        },
        K.fn.extend({
            position: function () {
                if (this[0]) {
                    var e = this[0]
                        , t = this.offsetParent()
                        , n = this.offset()
                        , i = ti.test(t[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : t.offset();
                    return n.top -= parseFloat(K.css(e, "marginTop")) || 0,
                        n.left -= parseFloat(K.css(e, "marginLeft")) || 0,
                        i.top += parseFloat(K.css(t[0], "borderTopWidth")) || 0,
                        i.left += parseFloat(K.css(t[0], "borderLeftWidth")) || 0,
                    {
                        top: n.top - i.top,
                        left: n.left - i.left
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || F.body; e && !ti.test(e.nodeName) && "static" === K.css(e, "position");)
                        e = e.offsetParent;
                    return e || F.body
                })
            }
        }),
        K.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, n) {
            var i = /Y/.test(n);
            K.fn[e] = function (r) {
                return K.access(this, function (e, r, s) {
                    var o = z(e);
                    return s === t ? o ? n in o ? o[n] : o.document.documentElement[r] : e[r] : void (o ? o.scrollTo(i ? K(o).scrollLeft() : s, i ? s : K(o).scrollTop()) : e[r] = s)
                }, e, r, arguments.length, null)
            }
        }),
        K.each({
            Height: "height",
            Width: "width"
        }, function (e, n) {
            K.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function (i, r) {
                K.fn[r] = function (r, s) {
                    var o = arguments.length && (i || "boolean" != typeof r)
                        , a = i || (r === !0 || s === !0 ? "margin" : "border");
                    return K.access(this, function (n, i, r) {
                        var s;
                        return K.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (s = n.documentElement,
                            Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : r === t ? K.css(n, i, r, a) : K.style(n, i, r, a)
                    }, n, o ? r : t, o, null)
                }
            })
        }),
        e.jQuery = e.$ = K,
        "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
            return K
        })
}(window),
    jQuery(document).ready(function (e) {
        var t = 300
            , n = 1200
            , i = 700
            , r = e(".backtotop");
        e(window).scroll(function () {
            e(this).scrollTop() > t ? r.addClass("is-visible") : r.removeClass("is-visible fade-out"),
                e(this).scrollTop() > n && r.addClass("fade-out")
        }),
            r.on("click", function (t) {
                t.preventDefault(),
                    e("body,html").animate({
                        scrollTop: 0
                    }, i)
            })
    }),
    jQuery(document).ready(function (e) {
        var t = 1170;
        if (e(window).width() > t) {
            var n = e(".header").height();
            e(window).on("scroll", {
                previousTop: 0
            }, function () {
                var t = e(window).scrollTop();
                t < this.previousTop ? t > 0 && e(".header").hasClass("is-fixed") ? e(".header").addClass("is-visible") : e(".header").removeClass("is-visible is-fixed") : (e(".header").removeClass("is-visible"),
                    t > n && !e(".header").hasClass("is-fixed") && e(".header").addClass("is-fixed")),
                    this.previousTop = t
            })
        }
    }),
    jQuery(document).ready(function (e) {
        e(".responsive-nav-trigger").on("click", function () {
            e(".menu-icon").toggleClass("is-clicked"),
                e(".header").toggleClass("menu-is-open"),
                e(".responsive-nav").hasClass("is-visible") ? e(".responsive-nav").removeClass("is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
                    e("body").removeClass("overflow-hidden")
                }) : e(".responsive-nav").addClass("is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
                    e("body").addClass("overflow-hidden")
                })
        })
    }),
    function (e, t) {
        function n(e) {
            var t, n = document.documentElement.style;
            if ("string" == typeof n[e])
                return e;
            e = i(e);
            for (var s = 0, o = r.length; o > s; s++)
                if (t = r[s] + e,
                    "string" == typeof n[t])
                    return t
        }
        function i(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        var r = "Moz Webkit Khtml O Ms".split(" ")
            , s = n("transform")
            , o = {
                csstransforms: function () {
                    return !!s
                },
                csstransforms3d: function () {
                    var e = !!n("perspective");
                    if (e) {
                        var i = " -o- -moz- -ms- -webkit- -khtml- ".split(" ")
                            , r = "@media (" + i.join("transform-3d),(") + "modernizr)"
                            , s = t("<style>" + r + "{#modernizr{height:3px}}</style>").appendTo("head")
                            , o = t('<div id="modernizr" />').appendTo("html");
                        e = 3 === o.height(),
                            o.remove(),
                            s.remove()
                    }
                    return e
                },
                csstransitions: function () {
                    return !!n("transitionProperty")
                }
            };
        if (e.Modernizr)
            for (var a in o)
                Modernizr.hasOwnProperty(a) || Modernizr.addTest(a, o[a]);
        else
            e.Modernizr = function () {
                var e, n, i = {
                    _version: "1.6ish: miniModernizr for Isotope"
                }, r = " ";
                for (n in o)
                    e = o[n](),
                        i[n] = e,
                        r += " " + (e ? "" : "no-") + n;
                return t("html").addClass(r),
                    i
            }();
        if (Modernizr.csstransforms) {
            var l = Modernizr.csstransforms3d ? {
                translate: function (e) {
                    return "translate3d(" + e[0] + "px, " + e[1] + "px, 0) "
                },
                scale: function (e) {
                    return "scale3d(" + e + ", " + e + ", 1) "
                }
            } : {
                    translate: function (e) {
                        return "translate(" + e[0] + "px, " + e[1] + "px) "
                    },
                    scale: function (e) {
                        return "scale(" + e + ") "
                    }
                }
                , u = function (e, n, i) {
                    var r, o, a = t.data(e, "isoTransform") || {}, u = {}, c = {};
                    u[n] = i,
                        t.extend(a, u);
                    for (r in a)
                        o = a[r],
                            c[r] = l[r](o);
                    var h = c.translate || ""
                        , f = c.scale || ""
                        , p = h + f;
                    t.data(e, "isoTransform", a),
                        e.style[s] = p
                };
            t.cssNumber.scale = !0,
                t.cssHooks.scale = {
                    set: function (e, t) {
                        u(e, "scale", t)
                    },
                    get: function (e) {
                        var n = t.data(e, "isoTransform");
                        return n && n.scale ? n.scale : 1
                    }
                },
                t.fx.step.scale = function (e) {
                    t.cssHooks.scale.set(e.elem, e.now + e.unit)
                }
                ,
                t.cssNumber.translate = !0,
                t.cssHooks.translate = {
                    set: function (e, t) {
                        u(e, "translate", t)
                    },
                    get: function (e) {
                        var n = t.data(e, "isoTransform");
                        return n && n.translate ? n.translate : [0, 0]
                    }
                }
        }
        var c, h = t.event;
        h.special.smartresize = {
            setup: function () {
                t(this).bind("resize", h.special.smartresize.handler)
            },
            teardown: function () {
                t(this).unbind("resize", h.special.smartresize.handler)
            },
            handler: function (e, t) {
                var n = this
                    , i = arguments;
                e.type = "smartresize",
                    c && clearTimeout(c),
                    c = setTimeout(function () {
                        jQuery.event.handle.apply(n, i)
                    }, "execAsap" === t ? 0 : 100)
            }
        },
            t.fn.smartresize = function (e) {
                return e ? this.bind("smartresize", e) : this.trigger("smartresize", ["execAsap"])
            }
            ,
            t.Isotope = function (e, n) {
                this.element = t(n),
                    this._create(e),
                    this._init()
            }
            ;
        var f = ["overflow", "position", "width", "height"];
        t.Isotope.settings = {
            resizable: !0,
            layoutMode: "masonry",
            containerClass: "isotope",
            itemClass: "isotope-item",
            hiddenClass: "isotope-hidden",
            hiddenStyle: Modernizr.csstransforms && !t.browser.opera ? {
                opacity: 0,
                scale: .001
            } : {
                    opacity: 0
                },
            visibleStyle: Modernizr.csstransforms && !t.browser.opera ? {
                opacity: 1,
                scale: 1
            } : {
                    opacity: 1
                },
            animationEngine: t.browser.opera ? "jquery" : "best-available",
            animationOptions: {
                queue: !1,
                duration: 800
            },
            sortBy: "original-order",
            sortAscending: !0,
            resizesContainer: !0,
            transformsEnabled: !0,
            itemPositionDataEnabled: !1
        },
            t.Isotope.prototype = {
                _create: function (n) {
                    this.options = t.extend({}, t.Isotope.settings, n),
                        this.styleQueue = [],
                        this.elemCount = 0;
                    var i = this.element[0].style;
                    this.originalStyle = {};
                    for (var r = 0, s = f.length; s > r; r++) {
                        var o = f[r];
                        this.originalStyle[o] = i[o] || null
                    }
                    this.element.css({
                        overflow: "hidden",
                        position: "relative"
                    }),
                        this._updateAnimationEngine(),
                        this._updateUsingTransforms();
                    var a = {
                        "original-order": function (e, t) {
                            return t.elemCount
                        },
                        random: function () {
                            return Math.random()
                        }
                    };
                    this.options.getSortData = t.extend(this.options.getSortData, a),
                        this.reloadItems();
                    var l = t(document.createElement("div")).prependTo(this.element);
                    this.offset = l.position(),
                        l.remove();
                    var u = this;
                    setTimeout(function () {
                        u.element.addClass(u.options.containerClass)
                    }, 0),
                        this.options.resizable && t(e).bind("smartresize.isotope", function () {
                            u.resize()
                        })
                },
                _getAtoms: function (e) {
                    var t = this.options.itemSelector
                        , n = t ? e.filter(t).add(e.find(t)) : e
                        , i = {
                            position: "absolute"
                        };
                    return this.usingTransforms && (i.left = 0,
                        i.top = 0),
                        n.css(i).addClass(this.options.itemClass),
                        this.updateSortData(n, !0),
                        n
                },
                _init: function (e) {
                    this.$filteredAtoms = this._filter(this.$allAtoms),
                        this._sort(),
                        this.reLayout(e)
                },
                option: function (e) {
                    if (t.isPlainObject(e)) {
                        this.options = t.extend(!0, this.options, e);
                        var n;
                        for (var r in e)
                            n = "_update" + i(r),
                                this[n] && this[n]()
                    }
                },
                _updateAnimationEngine: function () {
                    var e = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "");
                    switch (e) {
                        case "css":
                        case "none":
                            this.isUsingJQueryAnimation = !1;
                            break;
                        case "jquery":
                            this.isUsingJQueryAnimation = !0;
                            break;
                        default:
                            this.isUsingJQueryAnimation = !Modernizr.csstransitions
                    }
                    this._updateUsingTransforms()
                },
                _updateTransformsEnabled: function () {
                    this._updateUsingTransforms()
                },
                _updateUsingTransforms: function () {
                    this.usingTransforms = this.options.transformsEnabled && Modernizr.csstransforms && Modernizr.csstransitions && !this.isUsingJQueryAnimation,
                        this.getPositionStyles = this.usingTransforms ? this._translate : this._positionAbs
                },
                _filter: function (e) {
                    var t = "" === this.options.filter ? "*" : this.options.filter;
                    if (!t)
                        return e;
                    var n = this.options.hiddenClass
                        , i = "." + n
                        , r = e.filter(i)
                        , s = r;
                    if ("*" !== t) {
                        s = r.filter(t);
                        var o = e.not(i).not(t).addClass(n);
                        this.styleQueue.push({
                            $el: o,
                            style: this.options.hiddenStyle
                        })
                    }
                    return this.styleQueue.push({
                        $el: s,
                        style: this.options.visibleStyle
                    }),
                        s.removeClass(n),
                        e.filter(t)
                },
                updateSortData: function (e, n) {
                    var i, r, s = this, o = this.options.getSortData;
                    e.each(function () {
                        i = t(this),
                            r = {};
                        for (var e in o)
                            r[e] = o[e](i, s);
                        t.data(this, "isotope-sort-data", r),
                            n && s.elemCount++
                    })
                },
                _sort: function () {
                    var e = this.options.sortBy
                        , t = this._getSorter
                        , n = this.options.sortAscending ? 1 : -1
                        , i = function (i, r) {
                            var s = t(i, e)
                                , o = t(r, e);
                            return s === o && "original-order" !== e && (s = t(i, "original-order"),
                                o = t(r, "original-order")),
                                (s > o ? 1 : o > s ? -1 : 0) * n
                        };
                    this.$filteredAtoms.sort(i)
                },
                _getSorter: function (e, n) {
                    return t.data(e, "isotope-sort-data")[n]
                },
                _translate: function (e, t) {
                    return {
                        translate: [e, t]
                    }
                },
                _positionAbs: function (e, t) {
                    return {
                        left: e,
                        top: t
                    }
                },
                _pushPosition: function (e, t, n) {
                    t += this.offset.left,
                        n += this.offset.top;
                    var i = this.getPositionStyles(t, n);
                    this.styleQueue.push({
                        $el: e,
                        style: i
                    }),
                        this.options.itemPositionDataEnabled && e.data("isotope-item-position", {
                            x: t,
                            y: n
                        })
                },
                layout: function (e, t) {
                    var n = this.options.layoutMode;
                    if (this["_" + n + "Layout"](e),
                        this.options.resizesContainer) {
                        var i = this["_" + n + "GetContainerSize"]();
                        this.styleQueue.push({
                            $el: this.element,
                            style: i
                        })
                    }
                    this._processStyleQueue(),
                        t && t.call(e),
                        this.isLaidOut = !0
                },
                _processStyleQueue: function () {
                    var e, n = this.isLaidOut && this.isUsingJQueryAnimation ? "animate" : "css", i = this.options.animationOptions, r = this._isInserting && this.isUsingJQueryAnimation;
                    t.each(this.styleQueue, function (t, s) {
                        e = r && s.$el.hasClass("no-transition") ? "css" : n,
                            s.$el[e](s.style, i)
                    }),
                        this.styleQueue = []
                },
                resize: function () {
                    this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
                },
                reLayout: function (e) {
                    this["_" + this.options.layoutMode + "Reset"](),
                        this.layout(this.$filteredAtoms, e)
                },
                addItems: function (e, t) {
                    var n = this._getAtoms(e);
                    this.$allAtoms = this.$allAtoms.add(n),
                        t && t(n)
                },
                insert: function (e, t) {
                    this.element.append(e);
                    var n = this;
                    this.addItems(e, function (e) {
                        var i = n._filter(e, !0);
                        n._addHideAppended(i),
                            n._sort(),
                            n.reLayout(),
                            n._revealAppended(i, t)
                    })
                },
                appended: function (e, t) {
                    var n = this;
                    this.addItems(e, function (e) {
                        n._addHideAppended(e),
                            n.layout(e),
                            n._revealAppended(e, t)
                    })
                },
                _addHideAppended: function (e) {
                    this.$filteredAtoms = this.$filteredAtoms.add(e),
                        e.addClass("no-transition"),
                        this._isInserting = !0,
                        this.styleQueue.push({
                            $el: e,
                            style: this.options.hiddenStyle
                        })
                },
                _revealAppended: function (e, t) {
                    var n = this;
                    setTimeout(function () {
                        e.removeClass("no-transition"),
                            n.styleQueue.push({
                                $el: e,
                                style: n.options.visibleStyle
                            }),
                            n._processStyleQueue(),
                            delete n._isInserting,
                            t && t(e)
                    }, 10)
                },
                reloadItems: function () {
                    this.$allAtoms = this._getAtoms(this.element.children())
                },
                remove: function (e) {
                    this.$allAtoms = this.$allAtoms.not(e),
                        this.$filteredAtoms = this.$filteredAtoms.not(e),
                        e.remove()
                },
                shuffle: function () {
                    this.updateSortData(this.$allAtoms),
                        this.options.sortBy = "random",
                        this._sort(),
                        this.reLayout()
                },
                destroy: function () {
                    var n = this.usingTransforms;
                    this.$allAtoms.removeClass(this.options.hiddenClass + " " + this.options.itemClass).each(function () {
                        this.style.position = null,
                            this.style.top = null,
                            this.style.left = null,
                            this.style.opacity = null,
                            n && (this.style[s] = null)
                    });
                    for (var i = this.element[0].style, r = 0, o = f.length; o > r; r++) {
                        var a = f[r];
                        i[a] = this.originalStyle[a]
                    }
                    this.element.unbind(".isotope").removeClass(this.options.containerClass).removeData("isotope"),
                        t(e).unbind(".isotope")
                },
                _getSegments: function (e) {
                    var t, n = this.options.layoutMode, r = e ? "rowHeight" : "columnWidth", s = e ? "height" : "width", o = e ? "rows" : "cols", a = this.element[s](), l = this.options[n] && this.options[n][r] || this.$filteredAtoms["outer" + i(s)](!0) || a;
                    t = Math.floor(a / l),
                        t = Math.max(t, 1),
                        this[n][o] = t,
                        this[n][r] = l
                },
                _checkIfSegmentsChanged: function (e) {
                    var t = this.options.layoutMode
                        , n = e ? "rows" : "cols"
                        , i = this[t][n];
                    return this._getSegments(e),
                        this[t][n] !== i
                },
                _masonryReset: function () {
                    this.masonry = {},
                        this._getSegments();
                    var e = this.masonry.cols;
                    for (this.masonry.colYs = []; e--;)
                        this.masonry.colYs.push(0)
                },
                _masonryLayout: function (e) {
                    var n = this
                        , i = n.masonry;
                    e.each(function () {
                        var e = t(this)
                            , r = Math.ceil(e.outerWidth(!0) / i.columnWidth);
                        if (r = Math.min(r, i.cols),
                            1 === r)
                            n._masonryPlaceBrick(e, i.colYs);
                        else {
                            var s, o, a = i.cols + 1 - r, l = [];
                            for (o = 0; a > o; o++)
                                s = i.colYs.slice(o, o + r),
                                    l[o] = Math.max.apply(Math, s);
                            n._masonryPlaceBrick(e, l)
                        }
                    })
                },
                _masonryPlaceBrick: function (e, t) {
                    for (var n = Math.min.apply(Math, t), i = 0, r = 0, s = t.length; s > r; r++)
                        if (t[r] === n) {
                            i = r;
                            break
                        }
                    var o = this.masonry.columnWidth * i
                        , a = n;
                    this._pushPosition(e, o, a);
                    var l = n + e.outerHeight(!0)
                        , u = this.masonry.cols + 1 - s;
                    for (r = 0; u > r; r++)
                        this.masonry.colYs[i + r] = l
                },
                _masonryGetContainerSize: function () {
                    var e = Math.max.apply(Math, this.masonry.colYs);
                    return {
                        height: e
                    }
                },
                _masonryResizeChanged: function () {
                    return this._checkIfSegmentsChanged()
                },
                _fitRowsReset: function () {
                    this.fitRows = {
                        x: 0,
                        y: 0,
                        height: 0
                    }
                },
                _fitRowsLayout: function (e) {
                    var n = this
                        , i = this.element.width()
                        , r = this.fitRows;
                    e.each(function () {
                        var e = t(this)
                            , s = e.outerWidth(!0)
                            , o = e.outerHeight(!0);
                        0 !== r.x && s + r.x > i && (r.x = 0,
                            r.y = r.height),
                            n._pushPosition(e, r.x, r.y),
                            r.height = Math.max(r.y + o, r.height),
                            r.x += s
                    })
                },
                _fitRowsGetContainerSize: function () {
                    return {
                        height: this.fitRows.height
                    }
                },
                _fitRowsResizeChanged: function () {
                    return !0
                },
                _cellsByRowReset: function () {
                    this.cellsByRow = {
                        index: 0
                    },
                        this._getSegments(),
                        this._getSegments(!0)
                },
                _cellsByRowLayout: function (e) {
                    var n = this
                        , i = this.cellsByRow;
                    e.each(function () {
                        var e = t(this)
                            , r = i.index % i.cols
                            , s = ~~(i.index / i.cols)
                            , o = (r + .5) * i.columnWidth - e.outerWidth(!0) / 2
                            , a = (s + .5) * i.rowHeight - e.outerHeight(!0) / 2;
                        n._pushPosition(e, o, a),
                            i.index++
                    })
                },
                _cellsByRowGetContainerSize: function () {
                    return {
                        height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
                    }
                },
                _cellsByRowResizeChanged: function () {
                    return this._checkIfSegmentsChanged()
                },
                _straightDownReset: function () {
                    this.straightDown = {
                        y: 0
                    }
                },
                _straightDownLayout: function (e) {
                    var n = this;
                    e.each(function () {
                        var e = t(this);
                        n._pushPosition(e, 0, n.straightDown.y),
                            n.straightDown.y += e.outerHeight(!0)
                    })
                },
                _straightDownGetContainerSize: function () {
                    return {
                        height: this.straightDown.y
                    }
                },
                _straightDownResizeChanged: function () {
                    return !0
                },
                _masonryHorizontalReset: function () {
                    this.masonryHorizontal = {},
                        this._getSegments(!0);
                    var e = this.masonryHorizontal.rows;
                    for (this.masonryHorizontal.rowXs = []; e--;)
                        this.masonryHorizontal.rowXs.push(0)
                },
                _masonryHorizontalLayout: function (e) {
                    var n = this
                        , i = n.masonryHorizontal;
                    e.each(function () {
                        var e = t(this)
                            , r = Math.ceil(e.outerHeight(!0) / i.rowHeight);
                        if (r = Math.min(r, i.rows),
                            1 === r)
                            n._masonryHorizontalPlaceBrick(e, i.rowXs);
                        else {
                            var s, o, a = i.rows + 1 - r, l = [];
                            for (o = 0; a > o; o++)
                                s = i.rowXs.slice(o, o + r),
                                    l[o] = Math.max.apply(Math, s);
                            n._masonryHorizontalPlaceBrick(e, l)
                        }
                    })
                },
                _masonryHorizontalPlaceBrick: function (e, t) {
                    for (var n = Math.min.apply(Math, t), i = 0, r = 0, s = t.length; s > r; r++)
                        if (t[r] === n) {
                            i = r;
                            break
                        }
                    var o = n
                        , a = this.masonryHorizontal.rowHeight * i;
                    this._pushPosition(e, o, a);
                    var l = n + e.outerWidth(!0)
                        , u = this.masonryHorizontal.rows + 1 - s;
                    for (r = 0; u > r; r++)
                        this.masonryHorizontal.rowXs[i + r] = l
                },
                _masonryHorizontalGetContainerSize: function () {
                    var e = Math.max.apply(Math, this.masonryHorizontal.rowXs);
                    return {
                        width: e
                    }
                },
                _masonryHorizontalResizeChanged: function () {
                    return this._checkIfSegmentsChanged(!0)
                },
                _fitColumnsReset: function () {
                    this.fitColumns = {
                        x: 0,
                        y: 0,
                        width: 0
                    }
                },
                _fitColumnsLayout: function (e) {
                    var n = this
                        , i = this.element.height()
                        , r = this.fitColumns;
                    e.each(function () {
                        var e = t(this)
                            , s = e.outerWidth(!0)
                            , o = e.outerHeight(!0);
                        0 !== r.y && o + r.y > i && (r.x = r.width,
                            r.y = 0),
                            n._pushPosition(e, r.x, r.y),
                            r.width = Math.max(r.x + s, r.width),
                            r.y += o
                    })
                },
                _fitColumnsGetContainerSize: function () {
                    return {
                        width: this.fitColumns.width
                    }
                },
                _fitColumnsResizeChanged: function () {
                    return !0
                },
                _cellsByColumnReset: function () {
                    this.cellsByColumn = {
                        index: 0
                    },
                        this._getSegments(),
                        this._getSegments(!0)
                },
                _cellsByColumnLayout: function (e) {
                    var n = this
                        , i = this.cellsByColumn;
                    e.each(function () {
                        var e = t(this)
                            , r = ~~(i.index / i.rows)
                            , s = i.index % i.rows
                            , o = (r + .5) * i.columnWidth - e.outerWidth(!0) / 2
                            , a = (s + .5) * i.rowHeight - e.outerHeight(!0) / 2;
                        n._pushPosition(e, o, a),
                            i.index++
                    })
                },
                _cellsByColumnGetContainerSize: function () {
                    return {
                        width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
                    }
                },
                _cellsByColumnResizeChanged: function () {
                    return this._checkIfSegmentsChanged(!0)
                },
                _straightAcrossReset: function () {
                    this.straightAcross = {
                        x: 0
                    }
                },
                _straightAcrossLayout: function (e) {
                    var n = this;
                    e.each(function () {
                        var e = t(this);
                        n._pushPosition(e, n.straightAcross.x, 0),
                            n.straightAcross.x += e.outerWidth(!0)
                    })
                },
                _straightAcrossGetContainerSize: function () {
                    return {
                        width: this.straightAcross.x
                    }
                },
                _straightAcrossResizeChanged: function () {
                    return !0
                }
            },
            t.fn.imagesLoaded = function (e) {
                var t = this.find("img")
                    , n = []
                    , i = this
                    , r = t.length;
                return t.length ? (t.one("load error", function () {
                    0 === --r && (r = t.length,
                        t.one("load error", function () {
                            0 === --r && e.call(i)
                        }).each(function () {
                            this.src = n.shift()
                        }))
                }).each(function () {
                    n.push(this.src),
                        this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
                }),
                    this) : (e.call(this),
                        this)
            }
            ;
        var p = function (e) {
            this.console && console.error(e)
        };
        t.fn.isotope = function (e) {
            if ("string" == typeof e) {
                var n = Array.prototype.slice.call(arguments, 1);
                this.each(function () {
                    var i = t.data(this, "isotope");
                    if (i) {
                        if (!t.isFunction(i[e]) || "_" === e.charAt(0))
                            return void p("no such method '" + e + "' for isotope instance");
                        i[e].apply(i, n)
                    } else
                        p("cannot call methods on isotope prior to initialization; attempted to call method '" + e + "'")
                })
            } else
                this.each(function () {
                    var n = t.data(this, "isotope");
                    n ? (n.option(e),
                        n._init()) : t.data(this, "isotope", new t.Isotope(e, this))
                });
            return this
        }
    }(window, jQuery),
    $(document).ready(function () {
        var e = $("#portfolio");
        e.isotope({
            filter: "*",
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }),
            $(".filteroptions a").click(function () {
                var t = $(this).attr("data-filter");
                e.isotope({
                    filter: t,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: !1
                    }
                });
                var n = $(this);
                if (!n.hasClass("active")) {
                    var i = n.parents(".option-set");
                    return i.find(".active").removeClass("active"),
                        n.addClass("active"),
                        !1
                }
            })
    }),
    $(document).ready(function () {
        $("#portfolio .box").hover(function () {
            $(this).siblings().css({
                opacity: "0.5"
            }),
                $(this).css({
                    opacity: "1.0"
                })
        })
    }),
    jQuery(document).ready(function (e) {
        e(".vimeo a,.youtube a").click(function (t) {
            t.preventDefault();
            var n = e(this).attr("href")
                , i = (e(this).parent(),
                    e(this).parent());
            e(this).parent().hasClass("youtube") ? (e(this).parent().wrapAll('<div class="cntVid">'),
                e(i).html('<iframe frameborder="0" height="333" src="' + n + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>')) : (e(this).parent().wrapAll('<div class="cntVid">'),
                    e(i).html('<iframe src="' + n + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=ffffff" width="500" height="281" frameborder="0"></iframe>'))
        })
    }),
    function (e, t) {
        "use strict";
        var n = e.GreenSockGlobals = e.GreenSockGlobals || e;
        if (!n.TweenLite) {
            var i, r, s, o, a, l = function (e) {
                var t, i = e.split("."), r = n;
                for (t = 0; i.length > t; t++)
                    r[i[t]] = r = r[i[t]] || {};
                return r
            }, u = l("com.greensock"), c = 1e-10, h = function (e) {
                var t, n = [], i = e.length;
                for (t = 0; t !== i; n.push(e[t++]))
                    ;
                return n
            }, f = function () { }, p = function () {
                var e = Object.prototype.toString
                    , t = e.call([]);
                return function (n) {
                    return null != n && (n instanceof Array || "object" == typeof n && !!n.push && e.call(n) === t)
                }
            }(), d = {}, m = function (i, r, s, o) {
                this.sc = d[i] ? d[i].sc : [],
                    d[i] = this,
                    this.gsClass = null,
                    this.func = s;
                var a = [];
                this.check = function (u) {
                    for (var c, h, f, p, g = r.length, y = g; --g > -1;)
                        (c = d[r[g]] || new m(r[g], [])).gsClass ? (a[g] = c.gsClass,
                            y--) : u && c.sc.push(this);
                    if (0 === y && s)
                        for (h = ("com.greensock." + i).split("."),
                            f = h.pop(),
                            p = l(h.join("."))[f] = this.gsClass = s.apply(s, a),
                            o && (n[f] = p,
                                "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + i.split(".").pop(), [], function () {
                                    return p
                                }) : i === t && "undefined" != typeof module && module.exports && (module.exports = p)),
                            g = 0; this.sc.length > g; g++)
                            this.sc[g].check()
                }
                    ,
                    this.check(!0)
            }, g = e._gsDefine = function (e, t, n, i) {
                return new m(e, t, n, i)
            }
                , y = u._class = function (e, t, n) {
                    return t = t || function () { }
                        ,
                        g(e, [], function () {
                            return t
                        }, n),
                        t
                }
                ;
            g.globals = n;
            var v = [0, 0, 1, 1]
                , _ = []
                , b = y("easing.Ease", function (e, t, n, i) {
                    this._func = e,
                        this._type = n || 0,
                        this._power = i || 0,
                        this._params = t ? v.concat(t) : v
                }, !0)
                , x = b.map = {}
                , w = b.register = function (e, t, n, i) {
                    for (var r, s, o, a, l = t.split(","), c = l.length, h = (n || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (s = l[c],
                            r = i ? y("easing." + s, null, !0) : u.easing[s] || {},
                            o = h.length; --o > -1;)
                            a = h[o],
                                x[s + "." + a] = x[a + s] = r[a] = e.getRatio ? e : e[a] || new e
                }
                ;
            for (s = b.prototype,
                s._calcEnd = !1,
                s.getRatio = function (e) {
                    if (this._func)
                        return this._params[0] = e,
                            this._func.apply(null, this._params);
                    var t = this._type
                        , n = this._power
                        , i = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                    return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i),
                        1 === t ? 1 - i : 2 === t ? i : .5 > e ? i / 2 : 1 - i / 2
                }
                ,
                i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
                r = i.length; --r > -1;)
                s = i[r] + ",Power" + r,
                    w(new b(null, null, 1, r), s, "easeOut", !0),
                    w(new b(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")),
                    w(new b(null, null, 3, r), s, "easeInOut");
            x.linear = u.easing.Linear.easeIn,
                x.swing = u.easing.Quad.easeInOut;
            var T = y("events.EventDispatcher", function (e) {
                this._listeners = {},
                    this._eventTarget = e || this
            });
            s = T.prototype,
                s.addEventListener = function (e, t, n, i, r) {
                    r = r || 0;
                    var s, l, u = this._listeners[e], c = 0;
                    for (null == u && (this._listeners[e] = u = []),
                        l = u.length; --l > -1;)
                        s = u[l],
                            s.c === t && s.s === n ? u.splice(l, 1) : 0 === c && r > s.pr && (c = l + 1);
                    u.splice(c, 0, {
                        c: t,
                        s: n,
                        up: i,
                        pr: r
                    }),
                        this !== o || a || o.wake()
                }
                ,
                s.removeEventListener = function (e, t) {
                    var n, i = this._listeners[e];
                    if (i)
                        for (n = i.length; --n > -1;)
                            if (i[n].c === t)
                                return void i.splice(n, 1)
                }
                ,
                s.dispatchEvent = function (e) {
                    var t, n, i, r = this._listeners[e];
                    if (r)
                        for (t = r.length,
                            n = this._eventTarget; --t > -1;)
                            i = r[t],
                                i.up ? i.c.call(i.s || n, {
                                    type: e,
                                    target: n
                                }) : i.c.call(i.s || n)
                }
                ;
            var C = e.requestAnimationFrame
                , k = e.cancelAnimationFrame
                , S = Date.now || function () {
                    return (new Date).getTime()
                }
                , A = S();
            for (i = ["ms", "moz", "webkit", "o"],
                r = i.length; --r > -1 && !C;)
                C = e[i[r] + "RequestAnimationFrame"],
                    k = e[i[r] + "CancelAnimationFrame"] || e[i[r] + "CancelRequestAnimationFrame"];
            y("Ticker", function (e, t) {
                var n, i, r, s, l, u = this, h = S(), p = t !== !1 && C, d = 500, m = 33, g = function (e) {
                    var t, o, a = S() - A;
                    a > d && (h += a - m),
                        A += a,
                        u.time = (A - h) / 1e3,
                        t = u.time - l,
                        (!n || t > 0 || e === !0) && (u.frame++,
                            l += t + (t >= s ? .004 : s - t),
                            o = !0),
                        e !== !0 && (r = i(g)),
                        o && u.dispatchEvent("tick")
                };
                T.call(u),
                    u.time = u.frame = 0,
                    u.tick = function () {
                        g(!0)
                    }
                    ,
                    u.lagSmoothing = function (e, t) {
                        d = e || 1 / c,
                            m = Math.min(t, d, 0)
                    }
                    ,
                    u.sleep = function () {
                        null != r && (p && k ? k(r) : clearTimeout(r),
                            i = f,
                            r = null,
                            u === o && (a = !1))
                    }
                    ,
                    u.wake = function () {
                        null !== r ? u.sleep() : u.frame > 10 && (A = S() - d + 5),
                            i = 0 === n ? f : p && C ? C : function (e) {
                                return setTimeout(e, 0 | 1e3 * (l - u.time) + 1)
                            }
                            ,
                            u === o && (a = !0),
                            g(2)
                    }
                    ,
                    u.fps = function (e) {
                        return arguments.length ? (n = e,
                            s = 1 / (n || 60),
                            l = this.time + s,
                            void u.wake()) : n
                    }
                    ,
                    u.useRAF = function (e) {
                        return arguments.length ? (u.sleep(),
                            p = e,
                            void u.fps(n)) : p
                    }
                    ,
                    u.fps(e),
                    setTimeout(function () {
                        p && (!r || 5 > u.frame) && u.useRAF(!1)
                    }, 1500)
            }),
                s = u.Ticker.prototype = new u.events.EventDispatcher,
                s.constructor = u.Ticker;
            var E = y("core.Animation", function (e, t) {
                if (this.vars = t = t || {},
                    this._duration = this._totalDuration = e || 0,
                    this._delay = Number(t.delay) || 0,
                    this._timeScale = 1,
                    this._active = t.immediateRender === !0,
                    this.data = t.data,
                    this._reversed = t.reversed === !0,
                    $) {
                    a || o.wake();
                    var n = this.vars.useFrames ? q : $;
                    n.add(this, n._time),
                        this.vars.paused && this.paused(!0)
                }
            });
            o = E.ticker = new u.Ticker,
                s = E.prototype,
                s._dirty = s._gc = s._initted = s._paused = !1,
                s._totalTime = s._time = 0,
                s._rawPrevTime = -1,
                s._next = s._last = s._onUpdate = s._timeline = s.timeline = null,
                s._paused = !1;
            var N = function () {
                a && S() - A > 2e3 && o.wake(),
                    setTimeout(N, 2e3)
            };
            N(),
                s.play = function (e, t) {
                    return null != e && this.seek(e, t),
                        this.reversed(!1).paused(!1)
                }
                ,
                s.pause = function (e, t) {
                    return null != e && this.seek(e, t),
                        this.paused(!0)
                }
                ,
                s.resume = function (e, t) {
                    return null != e && this.seek(e, t),
                        this.paused(!1)
                }
                ,
                s.seek = function (e, t) {
                    return this.totalTime(Number(e), t !== !1)
                }
                ,
                s.restart = function (e, t) {
                    return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
                }
                ,
                s.reverse = function (e, t) {
                    return null != e && this.seek(e || this.totalDuration(), t),
                        this.reversed(!0).paused(!1)
                }
                ,
                s.render = function () { }
                ,
                s.invalidate = function () {
                    return this
                }
                ,
                s.isActive = function () {
                    var e, t = this._timeline, n = this._startTime;
                    return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= n && n + this.totalDuration() / this._timeScale > e
                }
                ,
                s._enabled = function (e, t) {
                    return a || o.wake(),
                        this._gc = !e,
                        this._active = this.isActive(),
                        t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)),
                        !1
                }
                ,
                s._kill = function () {
                    return this._enabled(!1, !1)
                }
                ,
                s.kill = function (e, t) {
                    return this._kill(e, t),
                        this
                }
                ,
                s._uncache = function (e) {
                    for (var t = e ? this : this.timeline; t;)
                        t._dirty = !0,
                            t = t.timeline;
                    return this
                }
                ,
                s._swapSelfInParams = function (e) {
                    for (var t = e.length, n = e.concat(); --t > -1;)
                        "{self}" === e[t] && (n[t] = this);
                    return n
                }
                ,
                s.eventCallback = function (e, t, n, i) {
                    if ("on" === (e || "").substr(0, 2)) {
                        var r = this.vars;
                        if (1 === arguments.length)
                            return r[e];
                        null == t ? delete r[e] : (r[e] = t,
                            r[e + "Params"] = p(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n,
                            r[e + "Scope"] = i),
                            "onUpdate" === e && (this._onUpdate = t)
                    }
                    return this
                }
                ,
                s.delay = function (e) {
                    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay),
                        this._delay = e,
                        this) : this._delay
                }
                ,
                s.duration = function (e) {
                    return arguments.length ? (this._duration = this._totalDuration = e,
                        this._uncache(!0),
                        this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0),
                        this) : (this._dirty = !1,
                            this._duration)
                }
                ,
                s.totalDuration = function (e) {
                    return this._dirty = !1,
                        arguments.length ? this.duration(e) : this._totalDuration
                }
                ,
                s.time = function (e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(),
                        this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
                }
                ,
                s.totalTime = function (e, t, n) {
                    if (a || o.wake(),
                        !arguments.length)
                        return this._totalTime;
                    if (this._timeline) {
                        if (0 > e && !n && (e += this.totalDuration()),
                            this._timeline.smoothChildTiming) {
                            this._dirty && this.totalDuration();
                            var i = this._totalDuration
                                , r = this._timeline;
                            if (e > i && !n && (e = i),
                                this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - e : e) / this._timeScale,
                                r._dirty || this._uncache(!1),
                                r._timeline)
                                for (; r._timeline;)
                                    r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0),
                                        r = r._timeline
                        }
                        this._gc && this._enabled(!0, !1),
                            (this._totalTime !== e || 0 === this._duration) && (this.render(e, t, !1),
                                j.length && W())
                    }
                    return this
                }
                ,
                s.progress = s.totalProgress = function (e, t) {
                    return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
                }
                ,
                s.startTime = function (e) {
                    return arguments.length ? (e !== this._startTime && (this._startTime = e,
                        this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)),
                        this) : this._startTime
                }
                ,
                s.timeScale = function (e) {
                    if (!arguments.length)
                        return this._timeScale;
                    if (e = e || c,
                        this._timeline && this._timeline.smoothChildTiming) {
                        var t = this._pauseTime
                            , n = t || 0 === t ? t : this._timeline.totalTime();
                        this._startTime = n - (n - this._startTime) * this._timeScale / e
                    }
                    return this._timeScale = e,
                        this._uncache(!1)
                }
                ,
                s.reversed = function (e) {
                    return arguments.length ? (e != this._reversed && (this._reversed = e,
                        this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
                        this) : this._reversed
                }
                ,
                s.paused = function (e) {
                    if (!arguments.length)
                        return this._paused;
                    if (e != this._paused && this._timeline) {
                        a || e || o.wake();
                        var t = this._timeline
                            , n = t.rawTime()
                            , i = n - this._pauseTime;
                        !e && t.smoothChildTiming && (this._startTime += i,
                            this._uncache(!1)),
                            this._pauseTime = e ? n : null,
                            this._paused = e,
                            this._active = this.isActive(),
                            !e && 0 !== i && this._initted && this.duration() && this.render(t.smoothChildTiming ? this._totalTime : (n - this._startTime) / this._timeScale, !0, !0)
                    }
                    return this._gc && !e && this._enabled(!0, !1),
                        this
                }
                ;
            var P = y("core.SimpleTimeline", function (e) {
                E.call(this, 0, e),
                    this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            s = P.prototype = new E,
                s.constructor = P,
                s.kill()._gc = !1,
                s._first = s._last = null,
                s._sortChildren = !1,
                s.add = s.insert = function (e, t) {
                    var n, i;
                    if (e._startTime = Number(t || 0) + e._delay,
                        e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale),
                        e.timeline && e.timeline._remove(e, !0),
                        e.timeline = e._timeline = this,
                        e._gc && e._enabled(!0, !0),
                        n = this._last,
                        this._sortChildren)
                        for (i = e._startTime; n && n._startTime > i;)
                            n = n._prev;
                    return n ? (e._next = n._next,
                        n._next = e) : (e._next = this._first,
                            this._first = e),
                        e._next ? e._next._prev = e : this._last = e,
                        e._prev = n,
                        this._timeline && this._uncache(!0),
                        this
                }
                ,
                s._remove = function (e, t) {
                    return e.timeline === this && (t || e._enabled(!1, !0),
                        e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next),
                        e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev),
                        e._next = e._prev = e.timeline = null,
                        this._timeline && this._uncache(!0)),
                        this
                }
                ,
                s.render = function (e, t, n) {
                    var i, r = this._first;
                    for (this._totalTime = this._time = this._rawPrevTime = e; r;)
                        i = r._next,
                            (r._active || e >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)),
                            r = i
                }
                ,
                s.rawTime = function () {
                    return a || o.wake(),
                        this._totalTime
                }
                ;
            var M = y("TweenLite", function (t, n, i) {
                if (E.call(this, n, i),
                    this.render = M.prototype.render,
                    null == t)
                    throw "Cannot tween a null target.";
                this.target = t = "string" != typeof t ? t : M.selector(t) || t;
                var r, s, o, a = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType), l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? F[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : F[l],
                    (a || t instanceof Array || t.push && p(t)) && "number" != typeof t[0])
                    for (this._targets = o = h(t),
                        this._propLookup = [],
                        this._siblings = [],
                        r = 0; o.length > r; r++)
                        s = o[r],
                            s ? "string" != typeof s ? s.length && s !== e && s[0] && (s[0] === e || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1),
                                this._targets = o = o.concat(h(s))) : (this._siblings[r] = X(s, this, !1),
                                    1 === l && this._siblings[r].length > 1 && Q(s, this, null, 1, this._siblings[r])) : (s = o[r--] = M.selector(s),
                                        "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1);
                else
                    this._propLookup = {},
                        this._siblings = X(t, this, !1),
                        1 === l && this._siblings.length > 1 && Q(t, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c,
                    this.render(-this._delay))
            }, !0)
                , D = function (t) {
                    return t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                }
                , L = function (e, t) {
                    var n, i = {};
                    for (n in e)
                        I[n] || n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!O[n] || O[n] && O[n]._autoCSS) || (i[n] = e[n],
                            delete e[n]);
                    e.css = i
                };
            s = M.prototype = new E,
                s.constructor = M,
                s.kill()._gc = !1,
                s.ratio = 0,
                s._firstPT = s._targets = s._overwrittenProps = s._startAt = null,
                s._notifyPluginsOfEnabled = s._lazy = !1,
                M.version = "1.13.1",
                M.defaultEase = s._ease = new b(null, null, 1, 1),
                M.defaultOverwrite = "auto",
                M.ticker = o,
                M.autoSleep = !0,
                M.lagSmoothing = function (e, t) {
                    o.lagSmoothing(e, t)
                }
                ,
                M.selector = e.$ || e.jQuery || function (t) {
                    var n = e.$ || e.jQuery;
                    return n ? (M.selector = n,
                        n(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
                }
                ;
            var j = []
                , H = {}
                , R = M._internals = {
                    isArray: p,
                    isSelector: D,
                    lazyTweens: j
                }
                , O = M._plugins = {}
                , z = R.tweenLookup = {}
                , B = 0
                , I = R.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1
                }
                , F = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                }
                , q = E._rootFramesTimeline = new P
                , $ = E._rootTimeline = new P
                , W = R.lazyRender = function () {
                    var e = j.length;
                    for (H = {}; --e > -1;)
                        i = j[e],
                            i && i._lazy !== !1 && (i.render(i._lazy, !1, !0),
                                i._lazy = !1);
                    j.length = 0
                }
                ;
            $._startTime = o.time,
                q._startTime = o.frame,
                $._active = q._active = !0,
                setTimeout(W, 1),
                E._updateRoot = M.render = function () {
                    var e, t, n;
                    if (j.length && W(),
                        $.render((o.time - $._startTime) * $._timeScale, !1, !1),
                        q.render((o.frame - q._startTime) * q._timeScale, !1, !1),
                        j.length && W(),
                        !(o.frame % 120)) {
                        for (n in z) {
                            for (t = z[n].tweens,
                                e = t.length; --e > -1;)
                                t[e]._gc && t.splice(e, 1);
                            0 === t.length && delete z[n]
                        }
                        if (n = $._first,
                            (!n || n._paused) && M.autoSleep && !q._first && 1 === o._listeners.tick.length) {
                            for (; n && n._paused;)
                                n = n._next;
                            n || o.sleep()
                        }
                    }
                }
                ,
                o.addEventListener("tick", E._updateRoot);
            var X = function (e, t, n) {
                var i, r, s = e._gsTweenID;
                if (z[s || (e._gsTweenID = s = "t" + B++)] || (z[s] = {
                    target: e,
                    tweens: []
                }),
                    t && (i = z[s].tweens,
                        i[r = i.length] = t,
                        n))
                    for (; --r > -1;)
                        i[r] === t && i.splice(r, 1);
                return z[s].tweens
            }
                , Q = function (e, t, n, i, r) {
                    var s, o, a, l;
                    if (1 === i || i >= 4) {
                        for (l = r.length,
                            s = 0; l > s; s++)
                            if ((a = r[s]) !== t)
                                a._gc || a._enabled(!1, !1) && (o = !0);
                            else if (5 === i)
                                break;
                        return o
                    }
                    var u, h = t._startTime + c, f = [], p = 0, d = 0 === t._duration;
                    for (s = r.length; --s > -1;)
                        (a = r[s]) === t || a._gc || a._paused || (a._timeline !== t._timeline ? (u = u || U(t, 0, d),
                            0 === U(a, u, d) && (f[p++] = a)) : h >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > h && ((d || !a._initted) && 2e-10 >= h - a._startTime || (f[p++] = a)));
                    for (s = p; --s > -1;)
                        a = f[s],
                            2 === i && a._kill(n, e) && (o = !0),
                            (2 !== i || !a._firstPT && a._initted) && a._enabled(!1, !1) && (o = !0);
                    return o
                }
                , U = function (e, t, n) {
                    for (var i = e._timeline, r = i._timeScale, s = e._startTime; i._timeline;) {
                        if (s += i._startTime,
                            r *= i._timeScale,
                            i._paused)
                            return -100;
                        i = i._timeline
                    }
                    return s /= r,
                        s > t ? s - t : n && s === t || !e._initted && 2 * c > s - t ? c : (s += e.totalDuration() / e._timeScale / r) > t + c ? 0 : s - t - c
                };
            s._init = function () {
                var e, t, n, i, r, s = this.vars, o = this._overwrittenProps, a = this._duration, l = !!s.immediateRender, u = s.ease;
                if (s.startAt) {
                    this._startAt && (this._startAt.render(-1, !0),
                        this._startAt.kill()),
                        r = {};
                    for (i in s.startAt)
                        r[i] = s.startAt[i];
                    if (r.overwrite = !1,
                        r.immediateRender = !0,
                        r.lazy = l && s.lazy !== !1,
                        r.startAt = r.delay = null,
                        this._startAt = M.to(this.target, 0, r),
                        l)
                        if (this._time > 0)
                            this._startAt = null;
                        else if (0 !== a)
                            return
                } else if (s.runBackwards && 0 !== a)
                    if (this._startAt)
                        this._startAt.render(-1, !0),
                            this._startAt.kill(),
                            this._startAt = null;
                    else {
                        n = {};
                        for (i in s)
                            I[i] && "autoCSS" !== i || (n[i] = s[i]);
                        if (n.overwrite = 0,
                            n.data = "isFromStart",
                            n.lazy = l && s.lazy !== !1,
                            n.immediateRender = l,
                            this._startAt = M.to(this.target, 0, n),
                            l) {
                            if (0 === this._time)
                                return
                        } else
                            this._startAt._init(),
                                this._startAt._enabled(!1)
                    }
                if (this._ease = u = u ? u instanceof b ? u : "function" == typeof u ? new b(u, s.easeParams) : x[u] || M.defaultEase : M.defaultEase,
                    s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)),
                    this._easeType = this._ease._type,
                    this._easePower = this._ease._power,
                    this._firstPT = null,
                    this._targets)
                    for (e = this._targets.length; --e > -1;)
                        this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], o ? o[e] : null) && (t = !0);
                else
                    t = this._initProps(this.target, this._propLookup, this._siblings, o);
                if (t && M._onPluginEvent("_onInitAllProps", this),
                    o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
                    s.runBackwards)
                    for (n = this._firstPT; n;)
                        n.s += n.c,
                            n.c = -n.c,
                            n = n._next;
                this._onUpdate = s.onUpdate,
                    this._initted = !0
            }
                ,
                s._initProps = function (t, n, i, r) {
                    var s, o, a, l, u, c;
                    if (null == t)
                        return !1;
                    H[t._gsTweenID] && W(),
                        this.vars.css || t.style && t !== e && t.nodeType && O.css && this.vars.autoCSS !== !1 && L(this.vars, t);
                    for (s in this.vars) {
                        if (c = this.vars[s],
                            I[s])
                            c && (c instanceof Array || c.push && p(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
                        else if (O[s] && (l = new O[s])._onInitTween(t, this.vars[s], this)) {
                            for (this._firstPT = u = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: s,
                                pg: !0,
                                pr: l._priority
                            },
                                o = l._overwriteProps.length; --o > -1;)
                                n[l._overwriteProps[o]] = this._firstPT;
                            (l._priority || l._onInitAllProps) && (a = !0),
                                (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                        } else
                            this._firstPT = n[s] = u = {
                                _next: this._firstPT,
                                t: t,
                                p: s,
                                f: "function" == typeof t[s],
                                n: s,
                                pg: !1,
                                pr: 0
                            },
                                u.s = u.f ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]),
                                u.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - u.s || 0;
                        u && u._next && (u._next._prev = u)
                    }
                    return r && this._kill(r, t) ? this._initProps(t, n, i, r) : this._overwrite > 1 && this._firstPT && i.length > 1 && Q(t, this, n, this._overwrite, i) ? (this._kill(n, t),
                        this._initProps(t, n, i, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (H[t._gsTweenID] = !0),
                            a)
                }
                ,
                s.render = function (e, t, n) {
                    var i, r, s, o, a = this._time, l = this._duration, u = this._rawPrevTime;
                    if (e >= l)
                        this._totalTime = this._time = l,
                            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                            this._reversed || (i = !0,
                                r = "onComplete"),
                            0 === l && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (e = 0),
                                (0 === e || 0 > u || u === c) && u !== e && (n = !0,
                                    u > c && (r = "onReverseComplete")),
                                this._rawPrevTime = o = !t || e || u === e ? e : c);
                    else if (1e-7 > e)
                        this._totalTime = this._time = 0,
                            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                            (0 !== a || 0 === l && u > 0 && u !== c) && (r = "onReverseComplete",
                                i = this._reversed),
                            0 > e ? (this._active = !1,
                                0 === l && (this._initted || !this.vars.lazy || n) && (u >= 0 && (n = !0),
                                    this._rawPrevTime = o = !t || e || u === e ? e : c)) : this._initted || (n = !0);
                    else if (this._totalTime = this._time = e,
                        this._easeType) {
                        var h = e / l
                            , f = this._easeType
                            , p = this._easePower;
                        (1 === f || 3 === f && h >= .5) && (h = 1 - h),
                            3 === f && (h *= 2),
                            1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h),
                            this.ratio = 1 === f ? 1 - h : 2 === f ? h : .5 > e / l ? h / 2 : 1 - h / 2
                    } else
                        this.ratio = this._ease.getRatio(e / l);
                    if (this._time !== a || n) {
                        if (!this._initted) {
                            if (this._init(),
                                !this._initted || this._gc)
                                return;
                            if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                                return this._time = this._totalTime = a,
                                    this._rawPrevTime = u,
                                    j.push(this),
                                    void (this._lazy = e);
                            this._time && !i ? this.ratio = this._ease.getRatio(this._time / l) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (this._lazy !== !1 && (this._lazy = !1),
                            this._active || !this._paused && this._time !== a && e >= 0 && (this._active = !0),
                            0 === a && (this._startAt && (e >= 0 ? this._startAt.render(e, t, n) : r || (r = "_dummyGS")),
                                this.vars.onStart && (0 !== this._time || 0 === l) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))),
                            s = this._firstPT; s;)
                            s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s,
                                s = s._next;
                        this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, n),
                            t || (this._time !== a || i) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)),
                            r && (!this._gc || n) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, n),
                                i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                                    this._active = !1),
                                !t && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _),
                                0 === l && this._rawPrevTime === c && o !== c && (this._rawPrevTime = 0))
                    }
                }
                ,
                s._kill = function (e, t) {
                    if ("all" === e && (e = null),
                        null == e && (null == t || t === this.target))
                        return this._lazy = !1,
                            this._enabled(!1, !1);
                    t = "string" != typeof t ? t || this._targets || this.target : M.selector(t) || t;
                    var n, i, r, s, o, a, l, u;
                    if ((p(t) || D(t)) && "number" != typeof t[0])
                        for (n = t.length; --n > -1;)
                            this._kill(e, t[n]) && (a = !0);
                    else {
                        if (this._targets) {
                            for (n = this._targets.length; --n > -1;)
                                if (t === this._targets[n]) {
                                    o = this._propLookup[n] || {},
                                        this._overwrittenProps = this._overwrittenProps || [],
                                        i = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                                    break
                                }
                        } else {
                            if (t !== this.target)
                                return !1;
                            o = this._propLookup,
                                i = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                        }
                        if (o) {
                            l = e || o,
                                u = e !== i && "all" !== i && e !== o && ("object" != typeof e || !e._tempKill);
                            for (r in l)
                                (s = o[r]) && (s.pg && s.t._kill(l) && (a = !0),
                                    s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next),
                                        s._next && (s._next._prev = s._prev),
                                        s._next = s._prev = null),
                                    delete o[r]),
                                    u && (i[r] = 1);
                            !this._firstPT && this._initted && this._enabled(!1, !1)
                        }
                    }
                    return a
                }
                ,
                s.invalidate = function () {
                    return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this),
                        this._firstPT = null,
                        this._overwrittenProps = null,
                        this._onUpdate = null,
                        this._startAt = null,
                        this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1,
                        this._propLookup = this._targets ? {} : [],
                        this
                }
                ,
                s._enabled = function (e, t) {
                    if (a || o.wake(),
                        e && this._gc) {
                        var n, i = this._targets;
                        if (i)
                            for (n = i.length; --n > -1;)
                                this._siblings[n] = X(i[n], this, !0);
                        else
                            this._siblings = X(this.target, this, !0)
                    }
                    return E.prototype._enabled.call(this, e, t),
                        this._notifyPluginsOfEnabled && this._firstPT ? M._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
                }
                ,
                M.to = function (e, t, n) {
                    return new M(e, t, n)
                }
                ,
                M.from = function (e, t, n) {
                    return n.runBackwards = !0,
                        n.immediateRender = 0 != n.immediateRender,
                        new M(e, t, n)
                }
                ,
                M.fromTo = function (e, t, n, i) {
                    return i.startAt = n,
                        i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender,
                        new M(e, t, i)
                }
                ,
                M.delayedCall = function (e, t, n, i, r) {
                    return new M(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: n,
                        onCompleteScope: i,
                        onReverseComplete: t,
                        onReverseCompleteParams: n,
                        onReverseCompleteScope: i,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }
                ,
                M.set = function (e, t) {
                    return new M(e, 0, t)
                }
                ,
                M.getTweensOf = function (e, t) {
                    if (null == e)
                        return [];
                    e = "string" != typeof e ? e : M.selector(e) || e;
                    var n, i, r, s;
                    if ((p(e) || D(e)) && "number" != typeof e[0]) {
                        for (n = e.length,
                            i = []; --n > -1;)
                            i = i.concat(M.getTweensOf(e[n], t));
                        for (n = i.length; --n > -1;)
                            for (s = i[n],
                                r = n; --r > -1;)
                                s === i[r] && i.splice(n, 1)
                    } else
                        for (i = X(e).concat(),
                            n = i.length; --n > -1;)
                            (i[n]._gc || t && !i[n].isActive()) && i.splice(n, 1);
                    return i
                }
                ,
                M.killTweensOf = M.killDelayedCallsTo = function (e, t, n) {
                    "object" == typeof t && (n = t,
                        t = !1);
                    for (var i = M.getTweensOf(e, t), r = i.length; --r > -1;)
                        i[r]._kill(n, e)
                }
                ;
            var G = y("plugins.TweenPlugin", function (e, t) {
                this._overwriteProps = (e || "").split(","),
                    this._propName = this._overwriteProps[0],
                    this._priority = t || 0,
                    this._super = G.prototype
            }, !0);
            if (s = G.prototype,
                G.version = "1.10.1",
                G.API = 2,
                s._firstPT = null,
                s._addTween = function (e, t, n, i, r, s) {
                    var o, a;
                    return null != i && (o = "number" == typeof i || "=" !== i.charAt(1) ? Number(i) - n : parseInt(i.charAt(0) + "1", 10) * Number(i.substr(2))) ? (this._firstPT = a = {
                        _next: this._firstPT,
                        t: e,
                        p: t,
                        s: n,
                        c: o,
                        f: "function" == typeof e[t],
                        n: r || t,
                        r: s
                    },
                        a._next && (a._next._prev = a),
                        a) : void 0
                }
                ,
                s.setRatio = function (e) {
                    for (var t, n = this._firstPT, i = 1e-6; n;)
                        t = n.c * e + n.s,
                            n.r ? t = Math.round(t) : i > t && t > -i && (t = 0),
                            n.f ? n.t[n.p](t) : n.t[n.p] = t,
                            n = n._next
                }
                ,
                s._kill = function (e) {
                    var t, n = this._overwriteProps, i = this._firstPT;
                    if (null != e[this._propName])
                        this._overwriteProps = [];
                    else
                        for (t = n.length; --t > -1;)
                            null != e[n[t]] && n.splice(t, 1);
                    for (; i;)
                        null != e[i.n] && (i._next && (i._next._prev = i._prev),
                            i._prev ? (i._prev._next = i._next,
                                i._prev = null) : this._firstPT === i && (this._firstPT = i._next)),
                            i = i._next;
                    return !1
                }
                ,
                s._roundProps = function (e, t) {
                    for (var n = this._firstPT; n;)
                        (e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")]) && (n.r = t),
                            n = n._next
                }
                ,
                M._onPluginEvent = function (e, t) {
                    var n, i, r, s, o, a = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; a;) {
                            for (o = a._next,
                                i = r; i && i.pr > a.pr;)
                                i = i._next;
                            (a._prev = i ? i._prev : s) ? a._prev._next = a : r = a,
                                (a._next = i) ? i._prev = a : s = a,
                                a = o
                        }
                        a = t._firstPT = r
                    }
                    for (; a;)
                        a.pg && "function" == typeof a.t[e] && a.t[e]() && (n = !0),
                            a = a._next;
                    return n
                }
                ,
                G.activate = function (e) {
                    for (var t = e.length; --t > -1;)
                        e[t].API === G.API && (O[(new e[t])._propName] = e[t]);
                    return !0
                }
                ,
                g.plugin = function (e) {
                    if (!(e && e.propName && e.init && e.API))
                        throw "illegal plugin definition.";
                    var t, n = e.propName, i = e.priority || 0, r = e.overwriteProps, s = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    }, o = y("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function () {
                        G.call(this, n, i),
                            this._overwriteProps = r || []
                    }, e.global === !0), a = o.prototype = new G(n);
                    a.constructor = o,
                        o.API = e.API;
                    for (t in s)
                        "function" == typeof e[t] && (a[s[t]] = e[t]);
                    return o.version = e.version,
                        G.activate([o]),
                        o
                }
                ,
                i = e._gsQueue) {
                for (r = 0; i.length > r; r++)
                    i[r]();
                for (s in d)
                    d[s].func || e.console.log("GSAP encountered missing dependency: com.greensock." + s)
            }
            a = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (e) {
        var t, n, i, r = _gsScope.GreenSockGlobals || _gsScope, s = r.com.greensock, o = 2 * Math.PI, a = Math.PI / 2, l = s._class, u = function (t, n) {
            var i = l("easing." + t, function () { }, !0)
                , r = i.prototype = new e;
            return r.constructor = i,
                r.getRatio = n,
                i
        }, c = e.register || function () { }
            , h = function (e, t, n, i) {
                var r = l("easing." + e, {
                    easeOut: new t,
                    easeIn: new n,
                    easeInOut: new i
                }, !0);
                return c(r, e),
                    r
            }, f = function (e, t, n) {
                this.t = e,
                    this.v = t,
                    n && (this.next = n,
                        n.prev = this,
                        this.c = n.v - t,
                        this.gap = n.t - e)
            }, p = function (t, n) {
                var i = l("easing." + t, function (e) {
                    this._p1 = e || 0 === e ? e : 1.70158,
                        this._p2 = 1.525 * this._p1
                }, !0)
                    , r = i.prototype = new e;
                return r.constructor = i,
                    r.getRatio = n,
                    r.config = function (e) {
                        return new i(e)
                    }
                    ,
                    i
            }, d = h("Back", p("BackOut", function (e) {
                return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
            }), p("BackIn", function (e) {
                return e * e * ((this._p1 + 1) * e - this._p1)
            }), p("BackInOut", function (e) {
                return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
            })), m = l("easing.SlowMo", function (e, t, n) {
                t = t || 0 === t ? t : .7,
                    null == e ? e = .7 : e > 1 && (e = 1),
                    this._p = 1 !== e ? t : 0,
                    this._p1 = (1 - e) / 2,
                    this._p2 = e,
                    this._p3 = this._p1 + this._p2,
                    this._calcEnd = n === !0
            }, !0), g = m.prototype = new e;
        return g.constructor = m,
            g.getRatio = function (e) {
                var t = e + (.5 - e) * this._p;
                return this._p1 > e ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
            }
            ,
            m.ease = new m(.7, .7),
            g.config = m.config = function (e, t, n) {
                return new m(e, t, n)
            }
            ,
            t = l("easing.SteppedEase", function (e) {
                e = e || 1,
                    this._p1 = 1 / e,
                    this._p2 = e + 1
            }, !0),
            g = t.prototype = new e,
            g.constructor = t,
            g.getRatio = function (e) {
                return 0 > e ? e = 0 : e >= 1 && (e = .999999999),
                    (this._p2 * e >> 0) * this._p1
            }
            ,
            g.config = t.config = function (e) {
                return new t(e)
            }
            ,
            n = l("easing.RoughEase", function (t) {
                t = t || {};
                for (var n, i, r, s, o, a, l = t.taper || "none", u = [], c = 0, h = 0 | (t.points || 20), p = h, d = t.randomize !== !1, m = t.clamp === !0, g = t.template instanceof e ? t.template : null, y = "number" == typeof t.strength ? .4 * t.strength : .4; --p > -1;)
                    n = d ? Math.random() : 1 / h * p,
                        i = g ? g.getRatio(n) : n,
                        "none" === l ? r = y : "out" === l ? (s = 1 - n,
                            r = s * s * y) : "in" === l ? r = n * n * y : .5 > n ? (s = 2 * n,
                                r = .5 * s * s * y) : (s = 2 * (1 - n),
                                    r = .5 * s * s * y),
                        d ? i += Math.random() * r - .5 * r : p % 2 ? i += .5 * r : i -= .5 * r,
                        m && (i > 1 ? i = 1 : 0 > i && (i = 0)),
                        u[c++] = {
                            x: n,
                            y: i
                        };
                for (u.sort(function (e, t) {
                    return e.x - t.x
                }),
                    a = new f(1, 1, null),
                    p = h; --p > -1;)
                    o = u[p],
                        a = new f(o.x, o.y, a);
                this._prev = new f(0, 0, 0 !== a.t ? a : a.next)
            }, !0),
            g = n.prototype = new e,
            g.constructor = n,
            g.getRatio = function (e) {
                var t = this._prev;
                if (e > t.t) {
                    for (; t.next && e >= t.t;)
                        t = t.next;
                    t = t.prev
                } else
                    for (; t.prev && t.t >= e;)
                        t = t.prev;
                return this._prev = t,
                    t.v + (e - t.t) / t.gap * t.c
            }
            ,
            g.config = function (e) {
                return new n(e)
            }
            ,
            n.ease = new n,
            h("Bounce", u("BounceOut", function (e) {
                return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }), u("BounceIn", function (e) {
                return 1 / 2.75 > (e = 1 - e) ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }), u("BounceInOut", function (e) {
                var t = .5 > e;
                return e = t ? 1 - 2 * e : 2 * e - 1,
                    e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375,
                    t ? .5 * (1 - e) : .5 * e + .5
            })),
            h("Circ", u("CircOut", function (e) {
                return Math.sqrt(1 - (e -= 1) * e)
            }), u("CircIn", function (e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }), u("CircInOut", function (e) {
                return 1 > (e *= 2) ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            })),
            i = function (t, n, i) {
                var r = l("easing." + t, function (e, t) {
                    this._p1 = e || 1,
                        this._p2 = t || i,
                        this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0)
                }, !0)
                    , s = r.prototype = new e;
                return s.constructor = r,
                    s.getRatio = n,
                    s.config = function (e, t) {
                        return new r(e, t)
                    }
                    ,
                    r
            }
            ,
            h("Elastic", i("ElasticOut", function (e) {
                return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * o / this._p2) + 1
            }, .3), i("ElasticIn", function (e) {
                return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2))
            }, .3), i("ElasticInOut", function (e) {
                return 1 > (e *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2) + 1
            }, .45)),
            h("Expo", u("ExpoOut", function (e) {
                return 1 - Math.pow(2, -10 * e)
            }), u("ExpoIn", function (e) {
                return Math.pow(2, 10 * (e - 1)) - .001
            }), u("ExpoInOut", function (e) {
                return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            })),
            h("Sine", u("SineOut", function (e) {
                return Math.sin(e * a)
            }), u("SineIn", function (e) {
                return -Math.cos(e * a) + 1
            }), u("SineInOut", function (e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            })),
            l("easing.EaseLookup", {
                find: function (t) {
                    return e.map[t]
                }
            }, !0),
            c(r.SlowMo, "SlowMo", "ease,"),
            c(n, "RoughEase", "ease,"),
            c(t, "SteppedEase", "ease,"),
            d
    }, !0)
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function () {
        function e() {
            h = window.innerWidth,
                f = window.innerHeight,
                y = {
                    x: h / 2,
                    y: f / 2
                },
                p = document.getElementById("large-header"),
                p.style.height = f + "px",
                d = document.getElementById("animated-background"),
                d.width = h,
                d.height = f,
                m = d.getContext("2d"),
                g = [];
            for (var e = 0; h > e; e += h / 20)
                for (var t = 0; f > t; t += f / 20) {
                    var n = e + Math.random() * h / 20
                        , i = t + Math.random() * f / 20
                        , r = {
                            x: n,
                            originX: n,
                            y: i,
                            originY: i
                        };
                    g.push(r)
                }
            for (var s = 0; s < g.length; s++) {
                for (var o = [], a = g[s], l = 0; l < g.length; l++) {
                    var v = g[l];
                    if (a != v) {
                        for (var _ = !1, b = 0; 5 > b; b++)
                            _ || void 0 == o[b] && (o[b] = v,
                                _ = !0);
                        for (var b = 0; 5 > b; b++)
                            _ || c(a, v) < c(a, o[b]) && (o[b] = v,
                                _ = !0)
                    }
                }
                a.closest = o
            }
            for (var s in g) {
                var x = new u(g[s], 2 + 2 * Math.random(), "rgba(255,255,255,0.3)");
                g[s].circle = x
            }
        }
        function t() {
            "ontouchstart" in window || window.addEventListener("mousemove", n),
                window.addEventListener("scroll", i),
                window.addEventListener("resize", r)
        }
        function n(e) {
            var t = posy = 0;
            e.pageX || e.pageY ? (t = e.pageX,
                posy = e.pageY) : (e.clientX || e.clientY) && (t = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
                    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop),
                y.x = t,
                y.y = posy
        }
        function i() {
            v = document.body.scrollTop > f ? !1 : !0
        }
        function r() {
            h = window.innerWidth,
                f = window.innerHeight,
                p.style.height = f + "px",
                d.width = h,
                d.height = f
        }
        function s() {
            o();
            for (var e in g)
                a(g[e])
        }
        function o() {
            if (v) {
                m.clearRect(0, 0, h, f);
                for (var e in g)
                    Math.abs(c(y, g[e])) < 4e3 ? (g[e].active = .3,
                        g[e].circle.active = .6) : Math.abs(c(y, g[e])) < 2e4 ? (g[e].active = .1,
                            g[e].circle.active = .3) : Math.abs(c(y, g[e])) < 4e4 ? (g[e].active = .02,
                                g[e].circle.active = .1) : (g[e].active = 0,
                                    g[e].circle.active = 0),
                        l(g[e]),
                        g[e].circle.draw()
            }
            requestAnimationFrame(o)
        }
        function a(e) {
            TweenLite.to(e, 1 + 1 * Math.random(), {
                x: e.originX - 50 + 100 * Math.random(),
                y: e.originY - 50 + 100 * Math.random(),
                ease: Circ.easeInOut,
                onComplete: function () {
                    a(e)
                }
            })
        }
        function l(e) {
            if (e.active)
                for (var t in e.closest)
                    m.beginPath(),
                        m.moveTo(e.x, e.y),
                        m.lineTo(e.closest[t].x, e.closest[t].y),
                        m.strokeStyle = "rgba(255,255,255," + e.active + ")",
                        m.stroke()
        }
        function u(e, t, n) {
            var i = this;
            !function () {
                i.pos = e || null,
                    i.radius = t || null,
                    i.color = n || null
            }(),
                this.draw = function () {
                    i.active && (m.beginPath(),
                        m.arc(i.pos.x, i.pos.y, i.radius, 0, 2 * Math.PI, !1),
                        m.fillStyle = "rgba(255,255,255," + i.active + ")",
                        m.fill())
                }
        }
        function c(e, t) {
            return Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)
        }
        var h, f, p, d, m, g, y, v = !0;
        e(),
            s(),
            t()
    }();
