var NISLFuzzingFunc = function(e, t, n) {
    var r = n(283), o = n(284), i = n(287), a = {
        prepare: function(e) {
            return this._prepare(e);
        },
        prepareDestroy: function() {
            this._prepare = this._prepareReverse();
        }
    };
    e.exports = a;
};
var NISLParameter0 = function(t) {
    var e = 0;
    for (var i = 0; i < t.length; i++) e += t[i];
    return e;
};
var NISLParameter1 = true;
var NISLParameter2 = function(o) {
    var m = o.type;
    if (m.indexOf(o) > -1) m = o.value.toLowerCase();
    return m;
};
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
