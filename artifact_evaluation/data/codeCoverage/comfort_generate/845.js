var NISLFuzzingFunc = function(e) {
    return e.x < this.x1 || e.x > this.x2 || e.y < this.y1 || e.y > this.y2 ? !1 : !0;
};
var NISLParameter0 = false;
NISLFuzzingFunc(NISLParameter0);
