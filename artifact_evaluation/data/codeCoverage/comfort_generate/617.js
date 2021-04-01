var NISLFuzzingFunc = function() {
    var t = this._props;
    t.polygon && t.polygon.forEach(function(t) {
        t.r -= t.r;
    });
};
NISLFuzzingFunc();
