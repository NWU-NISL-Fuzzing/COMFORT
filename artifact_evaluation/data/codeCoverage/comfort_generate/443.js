var NISLFuzzingFunc = function(e, t, r) {
    var n = e("./_export");
    n(n.S, "Object", {
        is: e("./_fails")
    });
};
var NISLParameter0 = function() {
    var e = Math.floor(Math.random() * Math.pow(10, 4)), t = String(e).substring(e + 1);
    return t.length ? t : "0" + t;
};
var NISLParameter1 = null;
var NISLParameter2 = [undefined, undefined];
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
