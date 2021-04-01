function f0(a) {
    return 'foo' + new String(a);
}
var v0;
for (var toString = 0; toString < 100000; ++toString)
    v0 = f0('hello');
if (v0 != 'foohello')
    throw 'Error: bad result: ' + v0;
