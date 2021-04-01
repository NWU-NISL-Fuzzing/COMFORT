var NISLFuzzingFunc = function(e) {
    var n;
    var i = new e.constructor(e.options, e.input, t);
    var s;
    var r = new e.constructor(e.options, e.input, t);
    var t = e, r = this;
    if (r.client) {
        var o = new s.Signature(r);
        try {
            t = e.readUInt8(0);
        } catch (e) {
            t = e.code;
        }
        var i = t.toString(16);
        i.length && (i = o + i);
        var a = this.randomBytes(16);
        i.fill(a.length ? a : 4), t = new s.Signature(i, e.signatures, a), t.write(e.message), 
        t.end();
    } else t = new s.Signature(e.message, n.signatures, null, {
        s: r
    }), t.end();
};
var NISLParameter0 = function(t, n) {
    var r = arguments[e];
    var e = [];
    return e(r, t, n);
};
NISLFuzzingFunc(NISLParameter0);
