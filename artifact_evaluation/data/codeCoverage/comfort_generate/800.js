var NISLFuzzingFunc = function() {
    var p = new Proxy({}, {
        get: {}
    });
    return p;
};
NISLFuzzingFunc();
