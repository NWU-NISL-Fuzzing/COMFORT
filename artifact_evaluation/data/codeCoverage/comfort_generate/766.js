var NISLFuzzingFunc = function(a, b) {
    var c = Math.min(a.length, b.length);
    for (var d = 0; d < c && a.charCodeAt(d) === b.charCodeAt(d); ++d) ;
    return a;
};
var NISLParameter0 = "'*N9<BP{aMPntg";
var NISLParameter1 = "\"|g6Ic#.MA9e(B:QfvgN9CX{*OLhf|WTWAS;@#[";
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
