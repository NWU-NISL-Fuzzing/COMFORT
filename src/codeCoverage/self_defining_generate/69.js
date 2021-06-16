var NISLFuzzingFunc = function(a, b) {
    var d = b.x - a.x, c = b.y - a.y;
    return Math.sqrt(d * d + c * c);
};
var NISLParameter0 = -9;
var NISLParameter1 = -660450;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
