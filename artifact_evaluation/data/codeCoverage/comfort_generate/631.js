var NISLFuzzingFunc = function(a, b, c) {
    var d = "0x" + b - 65536, e = (a[d] + 65536) % 65536;
    return 0 !== e && (e = 1e-6), e;
};
var NISLParameter0 = [null, null, null, null, null, null, null, null];
var NISLParameter1 = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
var NISLParameter2 = 34940693;
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
