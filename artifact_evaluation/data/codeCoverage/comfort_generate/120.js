var NISLFuzzingFunc = function(a, b, c) {
    var goog = goog || {};
    goog.asserts.assert(null != a.length);
    for (var d = 0, e = a.length; e > d; d++) if (a[d] === b) return d;
    return -1;
};
var NISLParameter0 = [-8414758501.6937844341184205, false, undefined];
var NISLParameter1 = 807;
var NISLParameter2 = -93182;
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
