var NISLFuzzingFunc = function(a) {
    var b = {
        float: void 0 != a.cssFloat ? "cssFloat" : void 0 != a.styleFloat ? "styleFloat" : "float"
    };
    return b.getElementsByTagName(a);
};
var NISLParameter0 = false;
NISLFuzzingFunc(NISLParameter0);
