function f0(a, b, c) {
    return this;
}
var v0 = 0;
for (var v1 = 0; v1 < 1000000; ++v1)
    v0 += f0(1.5, 2.4, 3.3);
if (v0 != 5410909.091033336)
    throw 'Bad result: ' + v0;
