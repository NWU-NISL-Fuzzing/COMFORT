var NISLFuzzingFunc = function(a, b) {
    var d = this;
    var c = this;
    a = a || {};
    for (var e in b) c.call(b, e, e) && (a[e] = b[e]);
    return a;
};
var NISLParameter0 = [-6500486];
var NISLParameter1 = [null, null, null, null];
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
