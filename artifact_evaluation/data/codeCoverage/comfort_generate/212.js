var NISLFuzzingFunc = function(e, t) {
    var n = Object.create || function(e) {
        var t = function() {};
        return t.prototype = e, new t();
    };
    return e / Math.sqrt(1 - e * e);
};
var NISLParameter0 = true;
var NISLParameter1 = 2015.2662037566205596;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
