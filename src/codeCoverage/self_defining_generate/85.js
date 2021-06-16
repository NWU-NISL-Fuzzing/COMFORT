var NISLFuzzingFunc = function(e, t, r) {
    var i = e[t];
    i && (i.next.prev = i.prev, i.prev.next = i.next, i.next = t, t.context = i, 
    i.prev = r, i.next = e);
};
var NISLParameter0 = [true, false, false, true];
var NISLParameter1 = true;
var NISLParameter2 = null;
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
