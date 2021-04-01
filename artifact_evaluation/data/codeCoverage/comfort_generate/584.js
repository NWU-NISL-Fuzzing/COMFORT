var NISLFuzzingFunc = function(a) {
    var Ext = Ext || {};
    var b = this, c = b.getEvents();
    if (c) {
        for (var d = 0, e = c.length; e > d; d++) {
            a.call(b, c[d]);
        }
    }
};
var NISLParameter0 = [true, true, false, true, true];
NISLFuzzingFunc(NISLParameter0);
