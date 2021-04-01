var NISLFuzzingFunc = function(e) {
    var t = this;
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === n && t.is(":hidden") ? "input" : t.attr("type", e), 
    t;
};
var NISLParameter0 = false;
NISLFuzzingFunc(NISLParameter0);
