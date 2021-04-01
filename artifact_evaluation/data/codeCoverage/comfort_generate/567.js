var NISLFuzzingFunc = function(e, t, r) {
    var n = e("./_is-object");
    t.exports = function(e) {
        return e instanceof n ? e : new n(e.x || 0, e.y || 0, e.z || 0);
    };
};
var NISLParameter0 = function(t) {
    var e = this;
    e.addListener("startrule", t), e.addListener("startfontface", t), e.addListener("startsetfontface", t), 
    e.addListener("starttrill", t), e.addListener("startup", t);
};
var NISLParameter1 = null;
var NISLParameter2 = -36.5390704425884499;
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
