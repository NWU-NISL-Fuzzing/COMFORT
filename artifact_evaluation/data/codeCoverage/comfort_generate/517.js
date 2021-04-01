var NISLFuzzingFunc = function(obj, key) {
    var val = obj[key];
    if (val === undefined) {
        return undefined;
    } else {
        return val;
    }
};
var NISLParameter0 = [undefined, undefined, undefined, undefined];
var NISLParameter1 = false;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
