var NISLFuzzingFunc = function(e, t, n) {
    var r = e("./lib/oop"), i = e("./lib/dom"), s = e("./lib/event_emitter").EventEmitter, o = e("./range").Range, u = e("./search").Search, a = function(e, t, n) {
        this.tag = e, this.data = t, this.settings = n;
    };
    (function() {
        this.createWorker = function(e) {
            return null;
        }, this.$id = "ace/mode/sass";
    }).call(a.prototype), t.Mode = a;
};
var NISLParameter0 = function(t, e, r) {
    "use strict";
    var i = r(0), n = r(3), o = r(4), s = r(6), f = r(17), a = r(8), h = r(4), u = (r(2).Reflect || {}).apply, l = h.maybeWrapAsError, c = h.onlyBatch || u, d = h.reject2, p = h.isPromise, g = t("./async");
    i(i.S + i.F * !s(function() {
        l(1);
    }), "Promise", {
        slice: function(t, e) {
            var r = a(this), i = o(t, this, arguments[1]);
            if (i === c) {
                var n = f(this), u = f(n, e, !0);
                return new i(r, n, u);
            }
            return r;
        }
    });
};
var NISLParameter1 = -2971084476;
var NISLParameter2 = function(t) {
    var e = this;
    e.addListener("startrule", t), e.addListener("startfontface", t), e.addListener("startsetfontface", t), 
    e.addListener("starttrill", t), e.addListener("startup", t);
};
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
