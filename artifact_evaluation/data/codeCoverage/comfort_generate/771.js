var NISLFuzzingFunc = function(c) {
    var a = {};
    return a.get(c.target).set(c.target.name, c.target.value) === a;
};
var NISLParameter0 = true;
NISLFuzzingFunc(NISLParameter0);
