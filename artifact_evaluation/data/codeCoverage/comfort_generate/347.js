var NISLFuzzingFunc = function(a) {
    var _ = {};
    var b = _.TWO_PI, c = a / b, d = Math.abs(c);
    d = Math.abs(a) < c ? d : Math.min(c + a, d);
    this._inner.updateElements(a, d, !0);
    return this;
};
var NISLParameter0 = null;
NISLFuzzingFunc(NISLParameter0);
