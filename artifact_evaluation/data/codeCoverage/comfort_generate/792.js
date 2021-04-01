var NISLFuzzingFunc = function() {
    var f = 0;
    var g = 0;
    g.call(this, f);
};
NISLFuzzingFunc();
