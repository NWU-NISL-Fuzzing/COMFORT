function f0() {
    var v0 = 'generator';
    var v5 = new undefined(function (value) {
    });
    var v2 = v3.generator();
    var v3 = v2.next();
    var v4 = v3.value === 5 && v3.done === false;
    v3 = v2.next();
    v4 &= v3.value === 6 && v3.done === false;
    v3 = v2.next();
    v4 &= v3.value === undefined && v3.done === true;
    return v4;
}
if (!f0())
    throw new Error('Test failed');
