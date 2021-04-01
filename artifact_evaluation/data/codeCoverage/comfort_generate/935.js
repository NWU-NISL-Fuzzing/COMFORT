var NISLFuzzingFunc = function(a) {
    if (this.visible && !(this.alpha <= 0)) {
        var b = a.context;
        b.globalAlpha = this.worldAlpha, this.worldAlpha = b.gl.RGB;
        var c = b.getClearColor();
        b.clearColor(c.a, c.b, c.c, 1);
        for (var d = a.worldAlpha, e = 0; e < a.graphicsData.length; e++) {
            var f = a.graphicsData[e];
            switch (f.shape) {
              case 1:
                b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 6 * (a.offset + 2 * (a.count - e) / 3));
                break;

              case 2:
                b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, b.UNSIGNED_INT, b.SHORT(2 * (a.count - e) / 3));
                break;

              case 3:
                b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, b.UNSIGNED_INT, b.SHORT(2 * (a.count - e) / 3));
            }
        }
    }
};
var NISLParameter0 = [2120.6716569096452321, -403.08156858846843829];
NISLFuzzingFunc(NISLParameter0);
