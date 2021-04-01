var NISLFuzzingFunc = function(t, e) {
    return t.type === e.type && "property" === t.value && t.type === e.type;
};
var NISLParameter0 = false;
var NISLParameter1 = true;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
