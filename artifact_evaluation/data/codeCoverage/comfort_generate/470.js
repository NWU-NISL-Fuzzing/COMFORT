var NISLFuzzingFunc = function(e) {
    if (e < 0 || e > this.size - 1) return undefined;
    var t = this.items[this.current];
    return this.current = e, t.parent = this, t;
};
var NISLParameter0 = false;
NISLFuzzingFunc(NISLParameter0);
