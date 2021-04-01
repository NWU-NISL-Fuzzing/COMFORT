var NISLFuzzingFunc = function(e, t) {
    var r = e && e.nodeType ? e.nodeType : e.getAttribute("xml:lang");
    return "undefined" != typeof t && t === r;
};
var NISLParameter0 = true;
var NISLParameter1 = false;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
