var NISLFuzzingFunc = function(e, t) {
    return e.line < t.line || e.line === t.line && e.column < t.column;
};
var NISLParameter0 = false;
var NISLParameter1 = false;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
