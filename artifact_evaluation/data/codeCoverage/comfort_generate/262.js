var NISLFuzzingFunc = function(t) {
    t || (t = this.getPointer(t));
    if (t.target === this && this.isMoving) {
        this.stopMove();
    }
};
var NISLParameter0 = true;
NISLFuzzingFunc(NISLParameter0);
