var NISLFuzzingFunc = function(t) {
    var e = t.indexOf("("), n = t.indexOf(")"), r = n > -1 ? t.substring(e, n) : t;
    return r > -1 ? t.substring(0, e) : t;
};
var NISLParameter0 = "VmZlaU;7~8SEKOsZp$&8,('~TE\"@sZ$!]30R5T4%)wbnAx#!MQ3u3> MYX/yQ>3|kj\"s(RB7-TaV}`+n$,Mxl%`vO5/2mB|P1LicUyhgr4dFE\\/I^@";
NISLFuzzingFunc(NISLParameter0);
