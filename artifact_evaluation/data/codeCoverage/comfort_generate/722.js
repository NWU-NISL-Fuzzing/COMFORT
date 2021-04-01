var NISLFuzzingFunc = function() {
    var t = this, e = t.get("el");
    e.isGrouped() || e.removeData(e.get("el").data("shape"), t);
};
NISLFuzzingFunc();
