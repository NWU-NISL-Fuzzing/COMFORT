var NISLFuzzingFunc = function(t, n) {
    var r = n && n.key;
    if (r && "string" == typeof r && !(r instanceof String)) throw new Error("Root route is invalid");
    r && r.path && (t.route = r.path);
    var e = new n.key(t);
    t.route = t.path.get(e);
};
var NISLParameter0 = function() {
    return this.getBoundingClientRect().width;
};
var NISLParameter1 = false;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
