var NISLFuzzingFunc = function(e, t) {
    var r = Object.create(null);
    return r[t] = e, Object.keys(r).forEach(function(t) {
        delete r[t];
    }), r;
};
var NISLParameter0 = 2469318;
var NISLParameter1 = 4;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
