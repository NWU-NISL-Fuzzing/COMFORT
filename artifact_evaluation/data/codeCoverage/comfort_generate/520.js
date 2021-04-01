var NISLFuzzingFunc = function(a, b, c, d) {
    var Q = null;
    a.next = b.prev, b.prev = a, b.next = c, c.prev = a, Q(a, b, c, d);
};
var NISLParameter0 = undefined;
var NISLParameter1 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
var NISLParameter2 = -7.5083699947643565;
var NISLParameter3 = "461v:(/^!MAOLf%X[iA9@7K1\"i`XN\\KDmTgzgRc4O*I$I'q";
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2, NISLParameter3);
