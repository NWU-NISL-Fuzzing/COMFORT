var NISLFuzzingFunc = function(e) {
    this._cache = {};
    if (e) {
        this._cache[e] = true;
        this.removeCachedPixels();
    } else {
        this._cache[e] = true;
    }
};
var NISLParameter0 = [-2508, 37, 852457, 59749, 6999, -7402, 3756, -40915014, 1, 0, -926355, -6910909];
NISLFuzzingFunc(NISLParameter0);
