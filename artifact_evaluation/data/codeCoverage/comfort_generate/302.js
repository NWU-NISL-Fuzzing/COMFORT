var NISLFuzzingFunc = function(t, n) {
    var e = function(e) {
        return "function" == typeof e;
    };
    t.bind(n, e[t].call(e));
};
var NISLParameter0 = null;
var NISLParameter1 = null;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
