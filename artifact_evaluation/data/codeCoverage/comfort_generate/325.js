var NISLFuzzingFunc = function(a) {
    var b = {
        float: void 0 != a.cssFloat ? "cssFloat" : void 0 != a.styleFloat ? "styleFloat" : "float"
    };
    return a.style + " " + b;
};
var NISLParameter0 = 443813;
NISLFuzzingFunc(NISLParameter0);
