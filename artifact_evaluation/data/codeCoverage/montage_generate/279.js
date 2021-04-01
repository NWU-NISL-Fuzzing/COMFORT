var v0 = new Uint32Array(1);
function f0(value) {
    v0[0] = value;
    return v0[0];
}
function f1(input, output) {
    var v1 = f0(input);
    if (v1 != output)
        throw 'Error: ' + input + ' was supposed to result in ' + output + ' but instead got ' + v2;
}
for (var v2 = 0; v2 < 100000; ++v2)
    f1(v2 + 0.5, v2);
f1(0, 0);
f1(100.5, 100);
f1(-100.5, 4294967196);
f1(3000000000, 3000000000);
f1(6000000000, 1705032704);
f1(-3000000000, 1294967296);
f1(-2147483648, 2147483648);
