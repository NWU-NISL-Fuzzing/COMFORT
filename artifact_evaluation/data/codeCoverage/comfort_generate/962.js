var NISLFuzzingFunc = function(t, e, r) {
    var i = r(14), s = r(48), n = r(15), o = {
        Body: i,
        Joint: n
    };
    t.exports = o;
};
var NISLParameter0 = [null, null, null, null, null];
var NISLParameter1 = "1zJ*$AtH);YB;C/J=Pngmp1d2c!A]ZA&@))\"t\\d`/&7sioG:,P:7BXM[4phn(YjF3F/SwDu8_}1Ic^<4wt ,K>=u:";
var NISLParameter2 = function(e) {
    var t = e.value.split("\t"), n = e.value[0];
    return t.length > 1 && (n = t[0]), n;
};
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
