var NISLFuzzingFunc = function(a) {
    var d = 0;
    return a && d.isFunction(a.promise) ? a.then(null, null, null) : a.then(null, null, null);
};
var NISLParameter0 = false;
NISLFuzzingFunc(NISLParameter0);
