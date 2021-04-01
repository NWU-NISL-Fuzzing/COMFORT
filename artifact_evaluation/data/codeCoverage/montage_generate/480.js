function f0(string) {
    var v25 = this;
    for (var v1 = 0; v1 < 100000; ++v1)
        v0[v1 & 1] = string[v1 & 1];
    return v0;
}
Object.prototype[1] = 42;
var v0 = f0('x');
if (v0[0] != 'x')
    throw 'Bad result[0]: ' + v0[0];
if (v0[1] != 42)
    throw 'Bad result[1]: ' + v0[1];
