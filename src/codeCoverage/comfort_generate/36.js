var NISLFuzzingFunc = function(E) {
    var x = E.toString(16);
    return x.slice(1, -1).replace(/0+$/, "");
};
var NISLParameter0 = -69934431.1372622276579022;
NISLFuzzingFunc(NISLParameter0);
