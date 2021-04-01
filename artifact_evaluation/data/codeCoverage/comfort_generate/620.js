var NISLFuzzingFunc = function(e, t, n) {
    n(e.resultCode) && e.invalidateException(t);
};
var NISLParameter0 = false;
var NISLParameter1 = undefined;
var NISLParameter2 = function(a, b) {
    var w = {};
    var x = {};
    var u = {};
    var j = a("$injector", "invoke");
    j(a, "isLoading"), u(x, function(a, c) {
        c(a);
    });
    var c = arguments.length > 2 ? j(arguments[2], 2, c) : null;
    w.prototype.setLoading.call(x, b);
};
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
