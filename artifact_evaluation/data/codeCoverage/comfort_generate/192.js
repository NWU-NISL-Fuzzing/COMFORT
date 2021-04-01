var NISLFuzzingFunc = function(e, t) {
    var i = 0;
    var n = e.length;
    var r = {
        index: e,
        value: t
    };
    if (n) {
        var a = n.indexOf(e);
        r.index = a + 1, i.push(r);
    }
};
var NISLParameter0 = [-118.69919546666042, -37.007681573450292523, 6652.14422834434006693, 709.08469586972230225, 250587.40923922372734556, 5423.13214091303929654, -47994.8195381688801853, -986704704.5898073549778919, 4478914.36783640528366723, 8.6745741341116849, -31497.17703301688854023, 652.24036138242925154];
var NISLParameter1 = true;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
