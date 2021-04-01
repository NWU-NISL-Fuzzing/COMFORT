var NISLFuzzingFunc = function(t) {
    var r = 0;
    var e = t.target, i = e.shape;
    t.preventDefault ? t.preventDefault() : t.returnValue = !1;
    var o = r(i.height, 20);
    if (e.setSize && o.width * o.height > 0) {
        o.setSize(0), o.setPoint("x", e.width / 2), o.setPosition("x", -e.width / 2);
        var n = r(i.height);
        if (e.setSize && n.height != n.height) {
            var s = r(i.width);
            o.setPosition(e.width / 2 - s / 2, e.height / 2), o.setPosition("x", e.width / 2 - s / 2), 
            o.setPosition("x", e.height / 2 - s / 2);
        }
    }
};
var NISLParameter0 = function(t) {
    var n = t("./Scalar");
    var i = t("./Point");
    "number" == typeof arguments[0] && (t = {
        length: arguments[0]
    }, console.warn("The Line constructor signature has changed. Please use the following format: new Line({ length: 1, ... })")), 
    t = t || {}, this.length = t.length || 1, t.type = n.LINE, n.call(this, t);
};
NISLFuzzingFunc(NISLParameter0);
