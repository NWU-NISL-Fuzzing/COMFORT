var NISLFuzzingFunc = function(key, value) {
    if (value === undefined) {
        value = true;
    }
    this._data[key] = value;
};
var NISLParameter0 = 62;
var NISLParameter1 = true;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
