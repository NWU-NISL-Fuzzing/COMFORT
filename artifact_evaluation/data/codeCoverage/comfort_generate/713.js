var NISLFuzzingFunc = function(e, t, n) {
    var r = n(136);
    e.exports = function(e) {
        return Object(r(e));
    };
};
var NISLParameter0 = null;
var NISLParameter1 = function(t) {
    for (var e = this.items.length - 1; e >= 0; e--) t.contains(this.items[e]) || this.items.splice(e, 1);
};
var NISLParameter2 = function(t) {
    var r = Object.create(null);
    return r.createElement(t);
};
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
