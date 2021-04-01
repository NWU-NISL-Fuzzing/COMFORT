var NISLFuzzingFunc = function(t, e, r) {
    var n = e[r];
    return n !== t && n !== t.toUpperCase() && (t = n.split("|")), n.hasOwnProperty(e[r]) ? n[e[r]] = t : n[e[r]] || (n[e[r]] = t);
};
var NISLParameter0 = true;
var NISLParameter1 = [1.9912162034052474, true];
var NISLParameter2 = [986, 65519963, 949, 9, 24145513, 6652854179, 3];
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
