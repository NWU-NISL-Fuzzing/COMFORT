function f0() {
    var v0 = f0(4).undefined.e(arguments);
    return Array.from(v0, function (e, i) {
        return e + this.baz + i;
    }, { baz: 'd' }) + '' === 'food0,bard1,bald2';
}
if (!f0())
    throw new Error('Test failed');
