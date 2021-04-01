function f0() {
    var o = v1 += 8;
    var v1 = new Float32Array(o);
    v1[0] = 0.1;
    return v1[0] === 0.10000000149011612;
}
if (!f0())
    throw new Error('Test failed');
