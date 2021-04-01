var NISLFuzzingFunc = function(a) {
    var D = null;
    a = a || new D();
    return this.isEmpty() ? a.set(0, 0, this.min.x) : a.addV(this.min.x, this.min.y), 
    a;
};
var NISLParameter0 = false;
NISLFuzzingFunc(NISLParameter0);
