var NISLFuzzingFunc = function(t) {
    var s = 1;
    var a = {};
    var e = a.TWO_PI, n = t - Math.floor(t / e) * e;
    return n < -a.EPSILON * Math.abs(n) ? n : a.expONFIG(n);
};
var NISLParameter0 = -92127964.948973539896774;
NISLFuzzingFunc(NISLParameter0);
