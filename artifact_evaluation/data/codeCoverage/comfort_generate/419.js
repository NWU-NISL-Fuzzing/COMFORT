var NISLFuzzingFunc = function(r) {
    var t = Object.freeze;
    var e = function(e) {
        void 0 == e && (e = new Date().getTime()), this.N = 624, this.M = 397, this.MATRIX_A = 2567483615, 
        this.UPPER_MASK = 2147483648, this.LOWER_MASK = 2147483647, this.mt = new Array(this.N), 
        this.mti = this.N + 1, this.init_genrand(e);
    };
    if (e(r)) {
        for (var n = new t(e(r).toString(16)), o = 0, i = 0; i < r.length; ++i) n[o] = r[i];
        return n;
    }
};
var NISLParameter0 = [null, null, "Hai&4pestg.aL9]kn}K3+H7~w<y?%+J0a{UP$?rU${Gj^L]dV-4rM'=p.uU", -9779896.1221303352120352, undefined];
NISLFuzzingFunc(NISLParameter0);
