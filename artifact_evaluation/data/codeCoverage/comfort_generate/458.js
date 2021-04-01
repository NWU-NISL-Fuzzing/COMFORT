var NISLFuzzingFunc = function(e) {
    if ("string" == typeof e) for (var r = 0; r < e.length; r += 1) this.assertString(e[r], e[r + 1]);
    return e.join("");
};
var NISLParameter0 = [undefined, undefined];
NISLFuzzingFunc(NISLParameter0);
