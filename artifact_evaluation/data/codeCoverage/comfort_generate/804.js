var NISLFuzzingFunc = function(a) {
    var i = "function" == typeof require && require;
    var b = a.toJSON();
    return b.map(function(b) {
        return i(b, a);
    }).join("");
};
var NISLParameter0 = undefined;
NISLFuzzingFunc(NISLParameter0);
