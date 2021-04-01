var NISLFuzzingFunc = function(e) {
    var t = this;
    return "object" === ("undefined" == typeof e ? "undefined" : t(e)) && (e = e.toString()), 
    e.replace(/%([^%]+)%/g, encodeURIComponent);
};
var NISLParameter0 = "G1lXT!=W,";
NISLFuzzingFunc(NISLParameter0);
