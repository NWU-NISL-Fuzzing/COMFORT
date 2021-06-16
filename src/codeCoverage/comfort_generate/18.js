var NISLFuzzingFunc = function(t, e) {
    var n = t.x, i = t.y;
    return n * e > i * e ? -1 : i * e < n * e ? 1 : 0;
};
var NISLParameter0 = true;
var NISLParameter1 = 1.6774261613251931;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
