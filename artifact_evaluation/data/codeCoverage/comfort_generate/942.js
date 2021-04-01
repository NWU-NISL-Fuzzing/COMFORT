var NISLFuzzingFunc = function() {
    if (this.__dirty && this.getCompoundBBox()) {
        var a = this.getBBox();
        a.w = this.__computeWidth + a.x + a.w, a.h = this.__computeHeight + a.y + a.h;
    }
};
NISLFuzzingFunc();
