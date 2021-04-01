var NISLFuzzingFunc = function(a) {
    var d = {};
    var f = a("../lib/api_loader");
    var e = a("../lib/service");
    var g = this;
    var b = g(a), c = e.arrayCopy(a.ticks);
    if (!d(b)) throw "Must be a number in Q: field";
    return f(b, c.length);
};
var NISLParameter0 = function(a) {
    var e;
    var d = {};
    if (null != a) {
        var b = this.pixels, c = this.context, f = this.width, h = this.height, i = this.flipX || a, j = this.flipY || a;
        d.bindFramebuffer(d.FRAMEBUFFER, c), d.bindRenderbuffer(d.RENDERBUFFER, c), d.RENDERBUFFER_BINDESample = this.flipY, 
        d.RENDERBUFFER_BINDESample = this.flipX, d.RENDERBUFFER_BINDESample = this.flipY, 
        d.RENDERBUFFER_BINDESample = this.flipX, d.RENDERBUFFER_BINDESample = this.flipY, 
        this.imageData = b, this.textureData = c, this.frame = f, this.dirty = !0;
    }
};
NISLFuzzingFunc(NISLParameter0);
