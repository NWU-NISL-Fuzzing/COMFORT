var NISLFuzzingFunc = function(a) {
    var e = a("../lib/service");
    var b = a.service;
    if (!b) throw Error("Unable to locate jQuery.Subtype on the route '" + a + "'");
    if (b.isSubtype(b)) {
        var c = b.getRoot();
        return c && a.subtype && (c = e.extractCamelCaseExtension(a, "Mustache", a), c && a.subtype && (c = e.extractCamelCase(a, "Expression"))) && a.operator && (c = e.extract(a.operator, "")), 
        a.hash ? c && a.hash : null;
    }
};
var NISLParameter0 = false;
NISLFuzzingFunc(NISLParameter0);
