var NISLFuzzingFunc = function(e) {
    var t = {};
    function r(i) {
        if (e === i) return 0;
        if (e >= t.length) return t[e];
        var n = t[e];
        return i < e + t[e - 1] ? n.z : -n.z;
    }
    return t.slice(0, e);
};
var NISLParameter0 = function() {
    var e = this.fetch({
        responseType: "text",
        headers: {
            Accept: "application/json,*/*;q=0.01"
        }
    });
    this.gltf = new e(), this.array = [];
};
NISLFuzzingFunc(NISLParameter0);
