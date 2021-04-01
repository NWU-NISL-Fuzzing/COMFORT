var NISLFuzzingFunc = function(e) {
    var jQuery = function(e, t) {
        return new jQuery.fn.init(e, t);
    };
    var t = jQuery.type(e);
    return "function" === jQuery.type(e) || typeof e === t;
};
var NISLParameter0 = function(c) {
    var a = [];
    var b;
    var d;
    var f = c || 1, e = d, g = a.length, h = [], i = 0;
    if (f) {
        var j = b.getPoint(f, h);
        j.x = a[i], j.y = a[f];
    }
    while (f--) {
        var k = a[f];
        if (c(k)) {
            h = h.concat(k);
            break;
        }
    }
    return {
        x: h.slice(0, i),
        y: h.slice(i)
    };
};
NISLFuzzingFunc(NISLParameter0);
