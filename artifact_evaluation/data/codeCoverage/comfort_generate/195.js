var NISLFuzzingFunc = function(t, e) {
    var i = Object.prototype.toString;
    var n = t.length;
    i(e) ? e.length = n : e = new Array(n);
    for (var r = 0; r < n; r++) e[r] = i(t[r]);
    return e;
};
var NISLParameter0 = [-8, 313445355, -19, -488475820, -5, -866, 1, -8583, -8832, -2, -421, -746806067, 522737132];
var NISLParameter1 = [7017517, -12180, -30842160, 3554, 1765444164, -49125, -95286877, 544423, 42037, -585380661, -324018445, -934, -85473148, 94744];
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
