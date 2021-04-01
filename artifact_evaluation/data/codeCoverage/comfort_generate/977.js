var NISLFuzzingFunc = function(c, a) {
    var d = this, b = d.div, e = d.parent;
    if (e) {
        b.removeChild(e);
    }
    d.fireEvent("columnupdate", d, a, c);
    d.fireEvent("rowupdate", d, a, c, b);
};
var NISLParameter0 = null;
var NISLParameter1 = [null, null, null, null, null, null, null];
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
