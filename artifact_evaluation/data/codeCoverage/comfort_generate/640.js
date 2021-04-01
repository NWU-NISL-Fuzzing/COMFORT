var NISLFuzzingFunc = function() {
    var e = {}, t = this;
    do {
        for (var r = t.parent; r && r !== t; ) e.push(r), r = r.parent;
    } while (t = t.parent);
    return e;
};
NISLFuzzingFunc();
