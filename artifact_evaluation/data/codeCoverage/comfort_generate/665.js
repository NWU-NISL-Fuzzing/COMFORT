var NISLFuzzingFunc = function(e) {
    var i = 0;
    return i[e] ? i[e].bind(null) : i[e] = function(t) {
        return i[e].bind(t);
    };
};
var NISLParameter0 = null;
NISLFuzzingFunc(NISLParameter0);
