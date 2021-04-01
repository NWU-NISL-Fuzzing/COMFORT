var NISLFuzzingFunc = function(e, t) {
    for (var n = 0; n < e.length; n++) {
        if ("string" == typeof e[n]) return e[n];
        e.splice(n--, 1);
    }
    return t;
};
var NISLParameter0 = ["rW\"QhM2RyW&~_)VF)jDR*TDoqivS#9E5M&\"CG(EU^zLf)4MYroN6o>D\"Bk<R)Be3=y{l!", "Bn5%f1}jyvm'6lUh#>07Lx\"B)L>5T80c`XL@T\"ZTOPvK ]+e'I'a{(7`cenl*;*.=~,Tl[{ZW6F=!.H.i", "S@sy]+[!y\\wp7%m?xLWfg6,xkbMBjUwi"];
var NISLParameter1 = undefined;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
