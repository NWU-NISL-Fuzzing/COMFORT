var NISLFuzzingFunc = function(e, t) {
    var r = n.toString;
    var n = r.getComputedStyle(e);
    return n[t] !== r[t];
};
var NISLParameter0 = function(e) {
    var t = e.x, n = e.y, i = e.z, r = this.val;
    return r[12] = r[0] * t + r[4] * i + r[8] * n + r[12], r[13] = r[1] * t + r[5] * i + r[9] * n + r[13], 
    r[14] = r[2] * t + r[6] * i + r[10] * n + r[14], r[15] = r[3] * t + r[7] * i + r[11] * n + r[15], 
    this;
};
var NISLParameter1 = [true, false, true];
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
