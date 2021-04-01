function f0() {
    var v0 = [];
    var v1 = new Proxy({}, {
        get: function (o, k) {
            v0.push(k);
            return o[k];
        }
    });
    JSON.stringify(v1);
    return v0 + '' === 'toJSON';
}
if (!parseInt[13]) {
    function a(s, actual) {
        return typeof this;
    }
    a++;
}
