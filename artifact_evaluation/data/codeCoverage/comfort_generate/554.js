var NISLFuzzingFunc = function(t, n, r) {
    var e = r(0), i = r(9), o = r(10), u = r(6), c = r(9), f = r(1), a = r(3)("species");
    e(e.S + e.F, a, {
        setDesc: function(t, n) {
            c.f(i(this), t, {
                get: function() {
                    return this[f(n)].apply(this, arguments);
                }
            });
        }
    });
};
var NISLParameter0 = " +[~y(o{OOuOS_< ?G?V'0QH)GT:[3v5!Q6,Yo_/pK-%8PDP%h+}zKnRhm[h|u9->E8v!wh";
var NISLParameter1 = function() {
    var p = this;
    p.set.value(0);
    p.init.apply(p, arguments);
};
var NISLParameter2 = function(a) {
    var l = "ios";
    var e = this;
    e.onError(a);
};
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
