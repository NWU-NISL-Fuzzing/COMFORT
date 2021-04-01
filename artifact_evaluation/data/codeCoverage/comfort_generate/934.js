var NISLFuzzingFunc = function(e) {
    var t = this;
    return e.type = t.type, e.id = t.id, e.classPrefix = t.classPrefix, "string" == typeof e.childNodes && (e.childNodes = e.childNodes.map(function(e) {
        return e.getAttribute("data-mce-bogus") || e;
    }));
};
var NISLParameter0 = true;
NISLFuzzingFunc(NISLParameter0);
