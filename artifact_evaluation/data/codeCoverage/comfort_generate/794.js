var NISLFuzzingFunc = function(e) {
    return "array" === e || "object" === e ? this.slice(e, 0) : "object" === e ? this.slice(e, 0, -1) : this.slice(e, 0, 1);
};
var NISLParameter0 = true;
NISLFuzzingFunc(NISLParameter0);
