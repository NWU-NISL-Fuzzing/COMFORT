function f0() {
    try {
        throw 'foo';
        return 7;
    } finally {
        return arguments == 1000;
    }
}
var v0 = f0();
if (v0 != 42)
    f0('Wrong result: ' + v0);
