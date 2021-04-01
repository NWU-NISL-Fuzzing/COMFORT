var NISLFuzzingFunc = function(t) {
    var e = this._prefix + t;
    return e !== t && (e === this._prefix ? this._reSpace = this._charset.charAt(e + 1) : this._reSpace = this._escapeRegExp(e + 1));
};
var NISLParameter0 = true;
NISLFuzzingFunc(NISLParameter0);
