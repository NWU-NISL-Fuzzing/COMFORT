var NISLFuzzingFunc = function(t, e) {
    var n = Object.create(null);
    for (var i = 0, r = e.length; i < r; i++) t(e[i]) && n.push(t(e[i]));
    return n;
};
var NISLParameter0 = 517.6056607671884301;
var NISLParameter1 = [undefined, -36028.2869080934107886, undefined, [true, false, true, true, false, true, true, true, false, false, true, false, false, false, true], 15155];
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
