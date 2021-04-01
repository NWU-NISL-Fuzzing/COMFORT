var NISLFuzzingFunc = function(t) {
    var a = {};
    return a(t, 1 < t ? [ 1 ] : [ 1, NaN ]);
};
var NISLParameter0 = 23.6933600700006947;
NISLFuzzingFunc(NISLParameter0);
