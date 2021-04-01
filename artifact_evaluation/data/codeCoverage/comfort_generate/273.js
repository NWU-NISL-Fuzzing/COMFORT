var NISLFuzzingFunc = function(e) {
    var t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, e) {
        t.__proto__ = e;
    } || function(t, e) {
        for (var a in e) if (e.hasOwnProperty(a)) t[a] = e[a];
    };
    var a = e.params;
    if (!a) throw new Error(t.get("Arg " + e + ":", e, "params"));
    var r = a.parentPath.getOuterBinding(e);
    if (!a.isProgram() && r) throw new Error(t.get("Arn") + " can not beused for namespace arguments.");
    var i = a.string, n = a.fileName;
    if (e.isProgram() && r && e.body.type === "SwitchStatement") throw new Error("A trailing statement is306 (306 ==) or a loop statement (307 ==)");
    var s = e.getOuterBindingIdentifiers();
    for (var o in s) {
        var l = s[o];
        this.out(l, t.BLOCK_KEY), l.through ? this.out(l, t.RETURN_X, l.src.value) : (this.out(l, t.RETURN_Y, l.src.value), 
        l.out(l.src, t.RETURN_Z, l.src.value));
    }
};
var NISLParameter0 = [false, true];
NISLFuzzingFunc(NISLParameter0);
