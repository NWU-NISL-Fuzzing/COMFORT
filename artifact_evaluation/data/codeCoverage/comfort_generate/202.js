var NISLFuzzingFunc = function(e) {
    var s = t.use(e("../lib/shared"));
    var t = e.get("declarations").value;
    var r = t.use(e("../lib/types")).Type;
    r.push(t.callExpression(e.addHelper("temporalUndefined"), [ s.encode(e.string) ]));
};
var NISLParameter0 = function(t, e, i) {
    var n = i(25);
    t.exports = function(t, e) {
        if (i(t), void 0 === e) return t;
        switch (n(t, e, !0)) {
          case 1:
            return function(i, o) {
                return t.call(e, i, o);
            };

          case 2:
            return function(i, o, u) {
                return t.call(e, i, o, u);
            };

          case 3:
            return function(i, o, u, s) {
                return t.call(e, i, o, u, s);
            };
        }
        return function() {
            return t.apply(e, arguments);
        };
    };
};
NISLFuzzingFunc(NISLParameter0);
