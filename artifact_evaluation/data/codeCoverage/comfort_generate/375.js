var NISLFuzzingFunc = function(t, e) {
    var r = e.x, n = e.y, i = e.z, a = e.w, o = t.x, s = t.y, l = t.z, u = t.w, c = a * o - i * l, d = a * s - n * l, h = n * s - i * o, p = i * l - a * o, f = a * u - n * s, m = n * u - a * o, g = l * u - s * o, _ = l * s - u * u, v = c * p - d * f + h * _, y = c * d - d * p + h * _, C = c * f - d * p + h * _, b = h * d - p * p - d * _, S = g * v + m * y + g * C, T = g * b + m * S + g * T, w = m * b - g * S - m * T, E = n * y + i * C + r * _, x = i * b + r * S + i * x, A = n * S - i * x + r * T, P = r * T - n * S - r * T;
    return this.x = v * E + y * b + _ * C + w * y, this.y = b * E + m * P + g * _, this.z = C * E + v * b + w * C, 
    this;
};
var NISLParameter0 = "}(~)0T0I$5hgtz}e\".*d'=63^g'}7dUS#\"oB0>-LzC]bg^G2?V$";
var NISLParameter1 = 46255269.08763074298810747;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
