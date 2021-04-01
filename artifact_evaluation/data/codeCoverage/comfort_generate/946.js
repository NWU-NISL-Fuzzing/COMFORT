var NISLFuzzingFunc = function(t, e) {
    var n = arguments[3];
    for (var o = 0; o < e.length; o++) {
        var r = e[o];
        n.is(r, "function") && t.call(r, this[r], this);
    }
    return this;
};
var NISLParameter0 = true;
var NISLParameter1 = [false, false, true, true, false, false];
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
