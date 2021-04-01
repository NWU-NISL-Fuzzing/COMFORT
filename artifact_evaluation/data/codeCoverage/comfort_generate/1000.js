var NISLFuzzingFunc = function(e) {
    var t = {};
    var s = {};
    e.err ? s.nextTick(function() {
        t(e);
    }) : s.nextTick(function() {
        t(e);
    });
};
var NISLParameter0 = [true, [0.2905400186605447, undefined, true, null, false, [true, true, true, true, false, false, false, false], null], undefined, true, 44730.02353965345630149];
NISLFuzzingFunc(NISLParameter0);
