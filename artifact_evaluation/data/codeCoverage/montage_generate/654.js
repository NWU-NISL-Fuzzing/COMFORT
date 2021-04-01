function f0() {
    var v0 = this.o();
    var v1 = Object.getPrototypeOf(v0);
    var v2 = Object.getPrototypeOf(v1);
    return v2.hasOwnProperty(Symbol.iterator) && !v1.hasOwnProperty(Symbol.iterator) && !v0.hasOwnProperty(Symbol.iterator) && v0[Symbol.iterator]() === v0;
}
if (!f0())
    throw new Error('Test failed');
