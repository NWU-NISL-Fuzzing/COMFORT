var NISLFuzzingFunc = function(a) {
    var e = function(e) {
        return "function" == typeof e;
    };
    a.target === e.target && (e.unhandledRejection = !0);
};
var NISLParameter0 = undefined;
NISLFuzzingFunc(NISLParameter0);
