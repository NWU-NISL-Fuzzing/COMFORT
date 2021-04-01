var NISLFuzzingFunc = function(t) {
    var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0;
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return n.format && t._eachValues(n.format, n.values), n.error && t._createError(e, n.error), 
    t;
};
var NISLParameter0 = true;
NISLFuzzingFunc(NISLParameter0);
