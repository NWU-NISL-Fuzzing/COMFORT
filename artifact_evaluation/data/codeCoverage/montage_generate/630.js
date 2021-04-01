function f0(v1) {
    for (var v0 = 0; v0 < 100; ++v0)
        v1 = new String(v1);
    return v1;
}
var v2;
for (var v0 = 0; v0 < 10000; ++v0)
    v2 = f0('hello');
if (v0 != 'hello')
    throw new 'Error: bad result: '() + v2;
