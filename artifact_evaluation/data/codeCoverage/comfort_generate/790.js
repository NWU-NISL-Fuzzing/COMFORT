var NISLFuzzingFunc = function(a) {
    var b = a.split("/"), c = b[0] || 1;
    return Object.keys(b).reduce(function(c, d) {
        return c[0] = d, c;
    }, b[1]);
};
var NISLParameter0 = "32.@OpoaEN@?01^(_R&|~sA1JiRZ}A_.j}m5(BRD{Yp$B(>2'O(]iJR276zG~CZrv\")ycQ ";
NISLFuzzingFunc(NISLParameter0);
