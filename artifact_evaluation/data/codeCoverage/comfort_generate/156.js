var NISLFuzzingFunc = function(e) {
    var t = this;
    return e.key === t._key && (e.key & t._state.fromStateDuplicates[e.key / 2] || e.key & t._state.toStateDuplicates[e.key]);
};
var NISLParameter0 = false;
NISLFuzzingFunc(NISLParameter0);
