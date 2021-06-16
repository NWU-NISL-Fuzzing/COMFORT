var NISLFuzzingFunc = function(t, e) {
    var n = Object.create(null);
    var i = n(t).toRgb();
    return i.a = e, i.r = e.r, i.b = e.b, i.c = e.c, i;
};
var NISLParameter0 = false;
var NISLParameter1 = function(a, b, c, d, e) {
    var g = a(1, d = arguments, e = e || {});
    var f = this;
    return b = b || [], typeof a == "string" ? f(a, c, d, e) : g(a, this.container, this.options.iframeFix).filter(b.popup).popup(c), 
    this.panels.push(g(b, d, f)), this.fix();
};
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
