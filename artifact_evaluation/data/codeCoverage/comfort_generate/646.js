var NISLFuzzingFunc = function(a) {
    var c = {};
    var b = this;
    b(this, a, c.eventName(a, "onScroll", {
        target: a
    }), function(b, d) {
        a.eventName(b, "scroll", a.proxy(this, this));
    });
};
var NISLParameter0 = undefined;
NISLFuzzingFunc(NISLParameter0);
