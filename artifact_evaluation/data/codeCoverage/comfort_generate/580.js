var NISLFuzzingFunc = function(t, e) {
    var r = new Error(t);
    return r.text = e && e.line, r.message = e && e.message, r.details = e && e.details, 
    r.index = e && e.index ? e.index.length : 0, r;
};
var NISLParameter0 = null;
var NISLParameter1 = true;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
