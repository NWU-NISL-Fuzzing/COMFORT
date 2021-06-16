var NISLFuzzingFunc = function(a, b, c, d) {
    if ((b /= d / 2) < 1) return c / 2 * b * b * b + d;
    return -c / 2 * ((b -= 2) * b * b - 2) + d;
};
var NISLParameter0 = undefined;
var NISLParameter1 = -50.493407913172051;
var NISLParameter2 = null;
var NISLParameter3 = 0.4920404954115527;
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2, NISLParameter3);
