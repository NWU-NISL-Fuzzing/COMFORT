var NISLFuzzingFunc = function(e) {
    var t = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
    return t.test(e) ? e.replace(t, "$1") : e;
};
var NISLParameter0 = "@0q@?~*jn*X_&|K<<b1lL $}Q]D(f)r Ahn$V!PebHT2&h(1=DLW!,hN\\;&$dTSG+I'A'k-uX9Zkf#R+jm:\\qP`i`0>Mt_lJ2 {h^";
NISLFuzzingFunc(NISLParameter0);
