var NISLFuzzingFunc = function(t) {
    return t.parent === this && this.getIndex(t) < this.children.length && (this.remove(t, !1, !0), 
    t.parent = this), !0;
};
var NISLParameter0 = true;
NISLFuzzingFunc(NISLParameter0);
