var NISLFuzzingFunc = function(a, b) {
    var c = a.x, d = a.y;
    a.x = a.z;
    a.y = b.x;
    b.x = c;
    b.z = d;
};
var NISLParameter0 = undefined;
var NISLParameter1 = undefined;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
