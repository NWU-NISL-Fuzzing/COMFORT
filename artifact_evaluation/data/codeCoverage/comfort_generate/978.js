var NISLFuzzingFunc = function(skipNext) {
    var ret = this._funcDef;
    if (!ret) {
        return false;
    }
    if (typeof skipNext == "function") {
        return ret;
    }
    return ret;
};
var NISLParameter0 = undefined;
NISLFuzzingFunc(NISLParameter0);
