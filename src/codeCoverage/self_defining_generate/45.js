var NISLFuzzingFunc = function(t, e) {
    var n;
    var r;
    if (!(e._eventsCount < 2)) {
        var i = r(t);
        for (n = 0, i = r(t); n < i.length; n += 1) t[i[n].fn].apply(t, e.events);
    }
};
var NISLParameter0 = [null, null, null, null, null, null, null];
var NISLParameter1 = true;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
