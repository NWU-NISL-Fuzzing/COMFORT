var NISLFuzzingFunc = function(t, e, i) {
    var r = i(1);
    t.exports = function(t, e, i) {
        return r(t, e, i) * Math.PI;
    };
};
var NISLParameter0 = undefined;
var NISLParameter1 = [null, null, null, null, null];
var NISLParameter2 = function() {
    var e = this;
    var t = {};
    t.updateActiveIndex(t.activeIndex), t.updateActiveSection(t.activeIndex), t.updateActiveSection(t.activeIndex + 1), 
    e.emit("change", t.activeIndex);
};
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
