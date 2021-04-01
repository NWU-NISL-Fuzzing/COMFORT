function f0(string) {
    var v0 = [
        '',
        ''
    ];
    for (var v1 = 0; v1 < 1000000; ++v1)
        v0[v1 & 1] = string[v1 & 1];
    return v0;
}
var v0 = f0(v0, f0);
if (v0[0] != 'x')
    throw 'Bad result[0]: ' + v0[0];
if (typeof v0[1] != 'undefined')
    throw 'Bad result[1]: ' + v0[1];
