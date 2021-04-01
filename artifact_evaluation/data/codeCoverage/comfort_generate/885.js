var NISLFuzzingFunc = function() {
    var a = this;
    if (!a.destroyed && a.attached) {
        a.removeCls(a.baseCls);
        a.removeEvents(a.baseCls);
        a.removeTarget(a.target);
    }
};
NISLFuzzingFunc();
