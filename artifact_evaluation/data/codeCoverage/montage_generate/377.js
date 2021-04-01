function f0() {
    var v0 = [];
    var v1 = new Proxy([], {
        v13: function () {
            var message = f0;
        }(),
        e: '0'
    });
    v1.pop();
    return v0 + '' === 'length';
}
if (!f0())
    throw new Error('Test failed');
