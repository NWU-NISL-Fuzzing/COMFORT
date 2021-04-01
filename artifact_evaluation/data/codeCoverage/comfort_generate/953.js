var NISLFuzzingFunc = function() {
    var t = Math.round(Math.random() * 255);
    var s = Math.floor(255 * t);
    var e = Math.floor(255 * s);
    return e < 128 ? s = e : e > 255 && (s = 255), s;
};
NISLFuzzingFunc();
