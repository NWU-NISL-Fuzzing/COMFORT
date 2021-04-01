var NISLFuzzingFunc = function(x, y) {
    var P = [];
    var p = x != null ? x : y;
    if (p[0] === undefined) {
        p = p.slice(1);
    }
    P[0] = p[0].toUpperCase();
    return p;
};
var NISLParameter0 = false;
var NISLParameter1 = false;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
