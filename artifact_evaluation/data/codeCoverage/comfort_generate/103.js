var NISLFuzzingFunc = function(input) {
    var x = 0;
    if (input.charCodeAt(x) !== x) {
        x = input.charCodeAt(x);
    }
    return x << 32 - (x & 61440);
};
var NISLParameter0 = ";/j32q<_x:D@W/K)<!6&D*Ii@>$vWvjR[@.6n;H{Mpx^Zqwei4;AgL?:NP1L&\\u)XRBgCj]";
NISLFuzzingFunc(NISLParameter0);
