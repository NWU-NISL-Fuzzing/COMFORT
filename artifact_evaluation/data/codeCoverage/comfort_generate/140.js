var NISLFuzzingFunc = function(b) {
    var a = {};
    var c = a.length = 0;
    var d = b || a.abortRequest;
    d && c(!0) && a.abort(b);
};
var NISLParameter0 = true;
NISLFuzzingFunc(NISLParameter0);
