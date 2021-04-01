var NISLFuzzingFunc = function(obj) {
    var ret = [];
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            ret.push(i);
        }
    }
    return ret;
};
var NISLParameter0 = null;
NISLFuzzingFunc(NISLParameter0);
