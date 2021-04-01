function f0(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}
var v0 = null;
class B {
    constructor() {
        v0 = 'B';
    }
}
class C extends B {
}
B.prototype.constructor = function F() {
    v0 = 'F';
};
new C();
C
B;
