var NISLFuzzingFunc = function(e) {
    var r = Object.create(null);
    var n = Object.create(null);
    var a = n.length;
    return 1 === a ? n[0] : 1 === a && "" === n[0] ? (e[0] = " ", e.join("\n")) : (e = n.slice(), 
    {
        x: r.a + r.c + r.b,
        y: r.l + r.d,
        w: r.h,
        h: r.d,
        d: r.l
    }), e;
};
var NISLParameter0 = [null, null, null, null, null, null, null, null, null, null, null, null, null];
NISLFuzzingFunc(NISLParameter0);
