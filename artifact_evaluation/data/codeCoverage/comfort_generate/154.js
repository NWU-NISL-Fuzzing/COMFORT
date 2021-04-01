var NISLFuzzingFunc = function(e) {
    var t = 0;
    return e.id ? e.id : e.id = function(e) {
        t++;
    };
};
var NISLParameter0 = -49880536;
NISLFuzzingFunc(NISLParameter0);
