var NISLFuzzingFunc = function(t, i) {
    var s = Math.PI / 180;
    for (var e = 0, o = t.parent; i && i !== o; ) e += s(o), i = i.parent;
    return e / s(e - 1);
};
var NISLParameter0 = false;
var NISLParameter1 = true;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
