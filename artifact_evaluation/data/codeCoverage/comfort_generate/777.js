var NISLFuzzingFunc = function(a, b) {
    var c = this.angularVelocity * a;
    void 0 === b && (b = !0);
    var d = this.getItem(a, c.Cache.SOUND, "isSoundDecoded");
    if (d) return d.decoded;
    var e = this.game.cache.getSoundData(a);
    return d = null, e;
};
var NISLParameter0 = function(e) {
    var a = /(.*@)?([^@:]*)(:.*)?/;
    var t = e.length, r = [];
    if (1 === t) {
        if ("object" != typeof e && "length" in e) return e;
    } else for (var i = 0; i < t; i++) {
        var n = e[i];
        if ("object" == typeof n && null !== n && "object" == typeof n) for (var o in n) r.push(o);
    }
    return r;
};
var NISLParameter1 = true;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
