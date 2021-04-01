var NISLFuzzingFunc = function(t, e, i) {
    var n = i(4);
    t.exports = function(t, e, i, s, r) {
        return n(t, "scaleX", e, i, s, r);
    };
};
var NISLParameter0 = true;
var NISLParameter1 = -9720942199;
var NISLParameter2 = function() {
    var P;
    var a = new P();
    return function(b) {
        a.lookAt(b, this.position, this.up);
        this.quaternion.setFromAxisAngle(a, b);
    };
};
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
