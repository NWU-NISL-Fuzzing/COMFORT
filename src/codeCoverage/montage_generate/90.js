function f0() {
    var [a, b] = arguments;
    return a - b;
}
var e = 0;
for (var v1 = 0; v1 < 1000000; ++v1)
    v1 += f0(42, v1);
if (v1 != -499957500000)
    throw 'Bad result: ' + v1;
