var NISLFuzzingFunc = function(e) {
    var n = e("@turf/meta");
    var t = n.round(e, 2) * Math.sqrt(1 - Math.abs(1 - Math.abs(e)));
    return "M-" + t + "," + n.round(e, 2) + "H" + t + "L" + n.round(e, 2) + "Z";
};
var NISLParameter0 = function() {
    var Ext = Ext || {};
    var b = this, a = b.refresh, c = b.uiCls, d = b.menu, e = b.panel, g = b.uiCls, c = b.menuSizes;
    b.collapse = b.collapseSizes = new Ext.util.Size(e.width, e.height);
    if (c) {
        b.collapseSizes = c.siblings(".ui-collapsible").toggleClass("ui-collapsible-collapsed", !!g);
    }
    return b;
};
NISLFuzzingFunc(NISLParameter0);
