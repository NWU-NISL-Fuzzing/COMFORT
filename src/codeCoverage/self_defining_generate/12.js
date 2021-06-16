var NISLFuzzingFunc = function(e) {
    var n = Object.create || function(e) {
        var t = function() {};
        return t.prototype = e, new t();
    };
    var t = n.select(this);
    e.call(t, t.table), t.select.style("z-index", t.indexTable.indexRow(t));
};
var NISLParameter0 = true;
NISLFuzzingFunc(NISLParameter0);
