var NISLFuzzingFunc = function(a) {
    var b = 0, c = 0;
    for (;b < a.length; b++) {
        if (a[b] === c) {
            c++;
            return b;
        }
    }
    return -1;
};
var NISLParameter0 = ["yCLLQI#x.8x", true, [null, 81.4280143888548903, [null, null, null, null, null, null, null, null], undefined], null, -539.29259284874290836, true, false, null];
NISLFuzzingFunc(NISLParameter0);
