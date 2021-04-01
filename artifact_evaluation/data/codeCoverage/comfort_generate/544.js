var NISLFuzzingFunc = function(a) {
    return a ? a.replace(/([A-Z])/g, function(a) {
        return "-" + a.toLowerCase();
    }) : "";
};
var NISLParameter0 = "W\")*qA{FT";
NISLFuzzingFunc(NISLParameter0);
