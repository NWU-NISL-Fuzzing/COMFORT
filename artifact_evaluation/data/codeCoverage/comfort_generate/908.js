var NISLFuzzingFunc = function(t) {
    var n = Object.create(null);
    var e = t.x, i = t.y;
    return t.x = e + t.dx * (this.minX + this.minY) / n.STEP, t.y = i + t.dy * (this.minY + this.minX) / n.STEP, 
    this;
};
var NISLParameter0 = undefined;
NISLFuzzingFunc(NISLParameter0);
