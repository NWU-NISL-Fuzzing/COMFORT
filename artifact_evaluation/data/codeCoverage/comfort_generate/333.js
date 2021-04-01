var NISLFuzzingFunc = function(e) {
    var t = Math.random() * Math.floor(e.length / 5);
    return e.length % 5 === 0 ? t : t + 1;
};
var NISLParameter0 = [null, null, null, null, null, null, null, null, null, null, null, null, null];
NISLFuzzingFunc(NISLParameter0);
