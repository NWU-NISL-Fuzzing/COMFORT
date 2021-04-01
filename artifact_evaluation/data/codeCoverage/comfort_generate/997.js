var NISLFuzzingFunc = function(a) {
    var b = a.extend;
    return b.prototype = a.prototype, new b();
};
var NISLParameter0 = undefined;
NISLFuzzingFunc(NISLParameter0);
