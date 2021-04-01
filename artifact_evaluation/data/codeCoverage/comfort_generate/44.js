var NISLFuzzingFunc = function(a) {
    var goog = goog || {};
    var b = goog.getObjectByName("window", "document");
    return goog.dom.getWindow_(b, true);
};
var NISLParameter0 = 1;
NISLFuzzingFunc(NISLParameter0);
