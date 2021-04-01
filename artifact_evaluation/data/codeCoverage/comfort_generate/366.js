var NISLFuzzingFunc = function(t) {
    if (!this._sourcesContents) return null;
    for (var e = this._sources.slice(), n = 0; n < e.length; n++) e[n].source === t && e.splice(n, 1);
    return e;
};
var NISLParameter0 = false;
NISLFuzzingFunc(NISLParameter0);
