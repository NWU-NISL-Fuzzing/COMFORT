var NISLFuzzingFunc = function(a, b, c) {
    var d = a.length;
    var e = a[0], f = a[0], g = [];
    e[b] = d.Coordinate(e[b], e[b] * c);
    for (var h = 1; h < a.length; h++) e[b][h] = d.Mul(e[b][h], f);
    return e;
};
var NISLParameter0 = [undefined, ":_Ih tw&q8M$Rar@!6H0`}R,p[#9\"0(#9B*E$$Od,.<", true, "y`$1*#vtL4Z^_EEUB,", -428.8870519736076115, undefined, 68567668.22771419370118762, undefined, [true, true, false], "]fh#ZZHd-~ i[)%Yn;a{C1[<JMr#YrYHWB(yc[J%w!>$:b&5*,IeFhbD1a=(TbRLMy$0?u.@StDiO|\\(2@!'c~*r{8~Xi5Un_m%dOr.vU$}"];
var NISLParameter1 = undefined;
var NISLParameter2 = [20];
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
