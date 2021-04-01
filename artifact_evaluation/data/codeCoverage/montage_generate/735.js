function f0(char) {
    switch (char) {
    case 'a':
        return 1;
    case 'b':
        return 2;
    case 'c':
        return 3;
    default:
        return 4;
    }
}
function f1() {
    var v0 = 0;
    for (var v1 = 0; v1 < 1000000; ++v1)
        v0 += f0('a');
    return v0;
}
var v0 = f1();
if (v0 != 1000000)
    throw '"';
