var NISLFuzzingFunc = function(a) {
    var goog = goog || {};
    var b = goog.getObjectByName(a);
    if (null != b) return goog.string.entries(b);
};
var NISLParameter0 = 98;
NISLFuzzingFunc(NISLParameter0);
