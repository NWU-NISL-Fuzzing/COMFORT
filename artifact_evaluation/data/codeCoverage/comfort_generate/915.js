var NISLFuzzingFunc = function(e, t) {
    var i = n(159);
    var n = this.size - 1, r = e + n, o = (e - n) / t;
    return o > r ? r = o : o < r && (o = r), [ e + i, o ];
};
var NISLParameter0 = -5.6216199471316143;
var NISLParameter1 = false;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
