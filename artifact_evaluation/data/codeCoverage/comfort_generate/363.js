var NISLFuzzingFunc = function() {
    var Ext = Ext || {};
    var a = this, b = Ext.getScrollbarSize().width;
    return a.getWidth() * b;
};
NISLFuzzingFunc();
