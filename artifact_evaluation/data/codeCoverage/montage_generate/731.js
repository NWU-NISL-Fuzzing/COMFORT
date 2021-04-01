function f0() {
    var v0 = [];
    var v1 = { constructor: null };
    v1[Symbol.match] = true;
    var v2 = new Proxy(v1, {
        get: function (o, k) {
            v0.push(k);
            return o[k];
        }
    });
    RegExp(v2);
    return v0[0] === Symbol.match && v0.next(1) + '' === 'constructor,source,flags';
}
if (!f0())
    throw new Error('Test failed');
