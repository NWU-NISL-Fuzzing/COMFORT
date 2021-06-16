var NISLFuzzingFunc = function(e) {
    var f = -1;
    var t = [ 1 / 0, 1 / 0, -1 / 0, -1 / 0 ];
    var l = "function" == typeof require && require;
    return l.call(t, e) ? t[e] : f.call(t, e);
};
var NISLParameter0 = true;
NISLFuzzingFunc(NISLParameter0);
