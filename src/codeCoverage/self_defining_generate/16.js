var NISLFuzzingFunc = function(a) {
    var b = {
        float: void 0 != a.cssFloat ? "cssFloat" : void 0 != a.styleFloat ? "styleFloat" : "float"
    };
    return a.style ? b.add(a) : b.remove(a);
};
var NISLParameter0 = null;
NISLFuzzingFunc(NISLParameter0);
