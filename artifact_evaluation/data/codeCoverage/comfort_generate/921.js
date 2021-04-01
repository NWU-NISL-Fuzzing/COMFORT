var NISLFuzzingFunc = function(x) {
    if (x !== 0) {
        if (x === 0) return x;
        return x + 1;
    }
    return x;
};
var NISLParameter0 = 1;
NISLFuzzingFunc(NISLParameter0);
