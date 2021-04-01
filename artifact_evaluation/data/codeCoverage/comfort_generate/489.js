var NISLFuzzingFunc = function(e, t, n) {
    return {
        valid: e && 0 === e[t] && n >= e[t + 1] && n <= e[t + 2] ? 1 : -1
    };
};
var NISLParameter0 = [true, true, false];
var NISLParameter1 = [true, false, false, true, false, false, false, false, true, true, false, false, true, true];
var NISLParameter2 = false;
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
