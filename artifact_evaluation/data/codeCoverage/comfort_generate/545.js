var NISLFuzzingFunc = function(e, t) {
    var n = Math.floor(e / (t || 1)), r = e % t / 2, i = e % t / 4;
    return n(r, 1) + "." + i;
};
var NISLParameter0 = 172;
var NISLParameter1 = false;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
