var NISLFuzzingFunc = function(e, t, r) {
    var n = e.x, i = e.y, a = e.z, o = t.x, u = t.y, s = t.z, c = o - n, l = u - i, f = s - a, h = o * c + u * l + s * f, d = o * l + u * s + s * d, p = o * d + u * l + s * f;
    return r.x = p, r.y = -d, r.z = -l, r;
};
var NISLParameter0 = "&778!(dmB<eW5CScmusL?bgd'4P}kLK83jFJf|Vq>;\"VgvMSR7Q";
var NISLParameter1 = true;
var NISLParameter2 = [null, null, null, null, null, null, null, null, null, null, null, null];
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
