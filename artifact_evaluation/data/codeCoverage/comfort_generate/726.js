var NISLFuzzingFunc = function(e) {
    var t = function(e, n, r) {
        if (typeof e != "string") {
            t.original ? t.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), 
            console.trace());
            return;
        }
        arguments.length == 2 && (r = n), t.modules[e] || (t.payloads[e] = r, t.modules[e] = null);
    };
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
    if (!e.getProperty("expanded")) {
        var n = e.getProperty("expanded");
        n.index > -1 && t.report("Expanded property in expanded block.", e, n);
    }
};
var NISLParameter0 = [98298, undefined, ":mL)[fNeq&xWO0*L!op+}r fM0mp\"", null];
NISLFuzzingFunc(NISLParameter0);
