var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var a = function(b) {
            var c = b.nodeType,
                d = "";
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b = b.nextSibling) d += a(b)
            } else if (3 === c || 4 === c) return b.nodeValue;
            return d
        },
        b = function(a, b) {
            for (var c = b.length, d = ""; --a > -1;) d += b[Math.random() * c | 0];
            return d
        },
        c = function(a) {
            this.chars = a.split(""), this.sets = [], this.length = 50;
            var c;
            for (c = 0; 20 > c; c++) this.sets[c] = b(80, this.chars);
            this.grow = function(a) {
                for (c = 0; 20 > c; c++) this.sets[c] += b(a - this.length, this.chars);
                this.length = a
            }
        },
        d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        e = d.toLowerCase(),
        f = {
            upperCase: new c(d),
            lowerCase: new c(e),
            upperAndLowerCase: new c(d + e)
        },
        g = "",
        h = "ScrambleTextPlugin",
        i = "greensock.com",
        j = "/requires-membership/",
        k = function(a) {
            for (var b = -1 !== (window ? window.location.href : "").indexOf("greensock") && -1 !== a.indexOf("localhost"), c = [i, "codepen.io", "codepen.dev", "css-tricks.com", "cdpn.io", "gannon.tv", "codecanyon.net", "themeforest.net", "cerebrax.co.uk", "tympanus.net", "tweenmax.com", "tweenlite.com", "plnkr.co", "hotjar.com", "jsfiddle.net", "localhost", "ngrok", "c76dcadd", "obscuraconflu.com", "anshulmalik.github.io"], d = c.length; --d > -1;)
                if (-1 !== a.indexOf(c[d])) return !0;
            return b && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + h + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), b
        }(window ? window.location.host : ""),
        l = _gsScope._gsDefine.plugin({
            propName: "scrambleText",
            version: "0.2.2",
            API: 2,
            overwriteProps: ["scrambleText", "text"],
            init: function(b, d, e) {
                if (this._prop = "innerHTML" in b ? "innerHTML" : "textContent" in b ? "textContent" : 0, !this._prop) return !1;
                
                this._target = b, "object" != typeof d && (d = {
                    text: d
                });
                var l, m, n, o;
                return this._delimiter = l = d.delimiter || "", this._original = a(b).replace(/\s+/g, " ").split("&nbsp;").join("").split(l), this._text = (d.text || d.value || "").replace(/\s+/g, " ").split(l), this._hasClass = !1, "string" == typeof d.newClass && (this._newClass = d.newClass, this._hasClass = !0), "string" == typeof d.oldClass && (this._oldClass = d.oldClass, this._hasClass = !0), m = this._text.length - this._original.length, this._length = this._original.join(l).length, this._lengthDif = this._text.join(l).length - this._length, this._fillChar = d.fillChar || d.chars && -1 !== d.chars.indexOf(" ") ? "&nbsp;" : "", this._charSet = o = f[d.chars || "upperCase"] || new c(d.chars), this._speed = .016 / (d.speed || 1), this._prevScrambleTime = 0, this._setIndex = 20 * Math.random() | 0, n = this._length + Math.max(this._lengthDif, 0), n > o.length && o.grow(n), this._chars = o.sets[this._setIndex], this._revealDelay = d.revealDelay || 0, this._tweenLength = d.tweenLength !== !1, this._tween = e, k
            },
            set: function(a) {
                var f, g, h, i, j, k, b = this._text.length,
                    c = this._delimiter,
                    d = this._tween._time,
                    e = d - this._prevScrambleTime;
                this._revealDelay && (this._tween.vars.runBackwards && (d = this._tween._duration - d), a = 0 === d ? 0 : d < this._revealDelay ? 1e-6 : d === this._tween._duration ? 1 : this._tween._ease.getRatio((d - this._revealDelay) / (this._tween._duration - this._revealDelay))), 0 > a ? a = 0 : a > 1 && (a = 1), f = a * b + .5 | 0, g = this._text.slice(0, f).join(c), h = this._original.slice(f).join(c), a && ((e > this._speed || e < -this._speed) && (this._setIndex = (this._setIndex + (19 * Math.random() | 0)) % 20, this._chars = this._charSet.sets[this._setIndex], this._prevScrambleTime += e), h = this._chars.substr(g.length, this._length + (this._tweenLength ? 1 - (a = 1 - a) * a * a * a : 1) * this._lengthDif - g.length + .5 | 0)), this._hasClass ? (i = this._newClass && 0 !== f, j = this._oldClass && f !== b, k = (i ? "<span class='" + this._newClass + "'>" : "") + g + (i ? "</span>" : "") + (j ? "<span class='" + this._oldClass + "'>" : "") + c + h + (j ? "</span>" : "")) : k = g + c + h, this._target[this._prop] = "&nbsp;" === this._fillChar && -1 !== k.indexOf("  ") ? k.split("  ").join("&nbsp;&nbsp;") : k
            }
        }),
        m = l.prototype;
    m._newClass = m._oldClass = "";
    for (m in f) f[m.toLowerCase()] = f[m], f[m.toUpperCase()] = f[m];
    l.source = g
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
