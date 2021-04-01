var NISLFuzzingFunc = function(a) {
    var b = a[0];
    a = a.substring(1);
    for (var c = 1, d = a.length; c < d; c++) a[c] > b && (b = a[c]);
    return b;
};
var NISLParameter0 = "wnWj6aw0x.^k,^4w`xM\"R@l}D?({CQ9zX'{gjW%9VwO=}!zr_OF ??6#jn7HO~;/(6G>2";
NISLFuzzingFunc(NISLParameter0);
