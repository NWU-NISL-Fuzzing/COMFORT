var NISLFuzzingFunc = function(e, t) {
    return e[0] = Math.abs(t[0]), t[0] = Math.abs(e[1]) ? 1 : 0, t[1] = Math.abs(e[2]), t[2] = Math.abs(e[3]), 
    t;
};
var NISLParameter0 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
var NISLParameter1 = [9.6992629977194657, -23475162.09662377644954467, -35.2877737716036226, -1.9633331634445889];
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
