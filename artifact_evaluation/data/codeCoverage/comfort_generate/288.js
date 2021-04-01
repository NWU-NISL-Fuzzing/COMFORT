var NISLFuzzingFunc = function(e) {
    this.setState("disabled");
    this.input.click(e);
};
var NISLParameter0 = function(e, t) {
    var p = 0;
    var s = t.use(e("../lib/shared"));
    var u = "function(e, t), n = r.getBindingIdentifiers();
    for (var i = 0; i < n.length; i++) {
        var o = n[i];
        if (o.type === e) return;
        var a = o.key.value;
        r.moveToElement(a);
    }
};
NISLFuzzingFunc(NISLParameter0);
