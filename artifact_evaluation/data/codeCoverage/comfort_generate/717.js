var NISLFuzzingFunc = function(e) {
    var t = [ 1 / 0, 1 / 0, -1 / 0, -1 / 0 ];
    e.get("visible") && t.push(e);
};
var NISLParameter0 = -48271564.9451400474761793;
NISLFuzzingFunc(NISLParameter0);
