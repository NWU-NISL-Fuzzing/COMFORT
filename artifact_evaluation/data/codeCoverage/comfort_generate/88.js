var NISLFuzzingFunc = function() {
    var Ext = Ext || {};
    var b = this, a = b.view.prop("duration", b.duration);
    b.callParent();
    if (a) {
        b.callParent(a);
    }
    b.callParent(undefined);
};
NISLFuzzingFunc();
