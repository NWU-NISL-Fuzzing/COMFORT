var NISLFuzzingFunc = function(e) {
    var c = "hidden";
    var t = {};
    var n = t.fetchPolicy;
    return n ? (t.fetchPolicy = "rejected", n.error(e), !1) : void c.reject(e);
};
var NISLParameter0 = null;
NISLFuzzingFunc(NISLParameter0);
