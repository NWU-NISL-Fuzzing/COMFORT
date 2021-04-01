var NISLFuzzingFunc = function(a) {
    var i = "function" == typeof require && require;
    return !!i(a) && !!a.prototype;
};
var NISLParameter0 = true;
NISLFuzzingFunc(NISLParameter0);
