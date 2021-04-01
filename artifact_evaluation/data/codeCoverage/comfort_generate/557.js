var NISLFuzzingFunc = function(e, t) {
    var r = Object.create(null);
    var n = e.length;
    if (n > 1) for (var r = e[0].length - 1, i = 1; i < n; i++) r += t;
    return r;
};
var NISLParameter0 = [[-1, -8058341491, -1, 2290, 84418683, 2184134220, 26251769, 93, 0, 0], 5454892, [undefined, [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined], null, false, false, -5, true, -1]];
var NISLParameter1 = -893;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
