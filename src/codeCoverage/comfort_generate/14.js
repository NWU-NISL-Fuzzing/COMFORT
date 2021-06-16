var NISLFuzzingFunc = function() {
    var l = "function" == typeof require && require;
    var a = this.el.getXY(), b = this.getXY();
    if (!l) {
        l = a[0] + b[0] * (1 - this.downValue);
    }
    return l;
};
NISLFuzzingFunc();
