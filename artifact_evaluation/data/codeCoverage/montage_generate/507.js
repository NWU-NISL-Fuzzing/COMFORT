function f10() {
    var v0 = {};
    var v1 = false;
    for (var v2 in new Proxy(v0, {
            enumerate: function (t) {
                v1 = t === v0;
                return {
                    next: function () {
                        return {
                            done: true,
                            value: null
                        };
                    }
                };
            }
        })) {
    }
    return v1;
}
if (!f10())
    throw new Error('Test failed');
