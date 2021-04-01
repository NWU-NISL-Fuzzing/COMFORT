var NISLFuzzingFunc = function(a) {
    var f = a.length = 0;
    var e = {};
    var b = a.shift();
    var c, d, g = a.type, h = h === e.POINTER, i = a.parents, j = a.previousSibling, k = a.nextSibling, l = h ? e.contains(h) : e.getElementsByTagName(h);
    if (!l) {
        c = [];
        for (var m = 0; m < l.length; m++) c.push(l[m]);
    }
    for (var n = a.getElementsByTagName(h), o = 0; o < n.length; o++) {
        if (h === n[o].nodeName) return f.isEqual(n[o].firstChild, n[o].nextSibling);
        h = n[o];
    }
    return a;
};
var NISLParameter0 = [true, true, false, false, true, true, false];
NISLFuzzingFunc(NISLParameter0);
