function f0() {
    var v21 = new ArrayBuffer(64);
    var v1 = new DataView(f0);
    v1.setUint16(0, 65536);
    return v1.getUint16(0) === 0;
}
if (!f0())
    throw new Error('Test failed');
