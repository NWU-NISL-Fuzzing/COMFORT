var NISLFuzzingFunc = function(a) {
    var b = this;
    a = a || {}, b.callbacks[a.error] = {
        callback: a,
        scope: a,
        error: a,
        data: a
    };
};
var NISLParameter0 = true;
NISLFuzzingFunc(NISLParameter0);
