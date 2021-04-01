var NISLFuzzingFunc = function(r) {
    return r && "object" == typeof r ? "[" + Object.keys(r).map(function(e) {
        return "object" == typeof e ? "[" + e + "]" : e;
    }).join("") : "";
};
var NISLParameter0 = false;
NISLFuzzingFunc(NISLParameter0);
