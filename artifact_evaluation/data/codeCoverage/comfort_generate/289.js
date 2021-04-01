var NISLFuzzingFunc = function(e, t) {
    var r = Object.create(null);
    var a = n(32);
    var i = n(116);
    var o;
    if (!o(t)) throw TypeError(e + " is not an object!");
    var n = r(t);
    if (a(n)) return n;
    var s, u = [];
    if (s = "string" == typeof t ? i(t) : t, e) for (var l = 0; l < e.length; l += 1) {
        if ("object" != typeof s) throw TypeError(e + " is not an object!");
        var c = e[l];
        u.push(a(c) + (s ? "=" + c : "?" + c));
    }
    return u.join("&");
};
var NISLParameter0 = ["hJS\"Yt}E;*0sq "];
var NISLParameter1 = null;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
