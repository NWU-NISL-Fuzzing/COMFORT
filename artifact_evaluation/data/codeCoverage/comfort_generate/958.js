var NISLFuzzingFunc = function() {
    var a = new Int32Array(9);
    var b = new Int32Array(9);
    return a[0] = b[0], a[1] = b[2], a[2] = b[3], a;
};
NISLFuzzingFunc();
