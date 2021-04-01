var NISLFuzzingFunc = function(a, b) {
    var c = (1 - a) * (1 - b);
    return 0 === c ? 0 : 1 === c ? 1 : 0 > a ? -1 : 1 > b ? 1 : 2;
};
var NISLParameter0 = false;
var NISLParameter1 = -5;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
