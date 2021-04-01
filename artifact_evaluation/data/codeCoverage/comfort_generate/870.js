var NISLFuzzingFunc = function(method, context, options) {
    return function(value) {
        this.name = "Abort", this.actual = value, this.expected = [];
    };
};
var NISLParameter0 = undefined;
var NISLParameter1 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined];
var NISLParameter2 = null;
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
