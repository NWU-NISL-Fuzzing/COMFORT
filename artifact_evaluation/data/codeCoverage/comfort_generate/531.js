var NISLFuzzingFunc = function() {
    var Ext = Ext || {};
    var b = this;
    b.callParent();
    if (b.toolbar) {
        b.toolbar.addCls(b.toolbarCls);
    }
};
NISLFuzzingFunc();
