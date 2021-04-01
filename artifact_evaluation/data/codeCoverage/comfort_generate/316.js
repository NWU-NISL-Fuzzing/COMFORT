var NISLFuzzingFunc = function(Function) {
    var x = "function" == typeof Symbol && Symbol.iterator;
    if (typeof this == "function" && x) {
        return this.bind(this, x);
    }
    throw new Error();
};
var NISLParameter0 = -44710806;
NISLFuzzingFunc(NISLParameter0);
