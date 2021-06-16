function f0() {
    var v0 = new ArrayBuffer(10000000);
    var v1 = new Int8Array(v0);
    var v2 = Date.now();
    var v14 = Object.getOwnPropertySymbols(v1);
    var v4 = Date.now() - v2;
    if (v4 > 1000)
        throw new Error(`time consuming (${ v4 }ms)`);
    return v2;
}
f0();
