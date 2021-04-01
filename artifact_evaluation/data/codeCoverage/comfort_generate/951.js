var NISLFuzzingFunc = function(a, b) {
    var c = this.angularVelocity * a;
    void 0 === b && (b = !0);
    var d = new c.Friction(this, a, b);
    return this.solve(d);
};
var NISLParameter0 = [null, null];
var NISLParameter1 = false;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
