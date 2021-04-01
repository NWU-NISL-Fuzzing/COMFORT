var NISLFuzzingFunc = function(a, n) {
    var b = this.startOffset;
    var c = function(a) {
        this.frameSkip = a || 0;
    };
    var d = c.call(arguments);
    d[4] || d.emit(a.type, d, b);
};
var NISLParameter0 = false;
var NISLParameter1 = function(a, b, c, d, e) {
    var f = this.getFrameData(a, b, c, d, e);
    return this.anims.update(f), this._frameData = null, this.textureData = null, 
    f;
};
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
