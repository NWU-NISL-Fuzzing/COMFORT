var NISLFuzzingFunc = function(r, i) {
    var e = this;
    var n = e.require("ace/lib/event_emitter").EventEmitter;
    var t = r.apply(this, n.map(function(t) {
        switch (t) {
          case "require":
            return i;

          case "exports":
            return e.exports;

          case "module":
            return e;

          default:
            return i(t);
        }
    }));
    var o = r === t.currentType && e.lookbehind ? "new-function" : r;
    var s = r.globals;
    return s.push(i), t.mixable ? s.push(i) : s.push(i);
};
var NISLParameter0 = undefined;
var NISLParameter1 = function(e, t, n) {
    var o = n(160);
    var r = n(8);
    var i = n(159);
    var d = n(25);
    if (d(e), i(n) && n.constructor === t) n.constructor = o; else if (n instanceof Array) {
        var a = e.length;
        i(n), e.length = a, n = o.base;
    } else n = o;
    return n.constructor === t ? n : o;
};
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
