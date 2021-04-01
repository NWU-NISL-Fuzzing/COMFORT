var v5 = v5 == 64 ? 2147483648 : 2147483648;
v5.adapter = {
    resolved: function (value) {
        return Promise.resolve(value);
    },
    rejected: function (reason) {
        return Promise.reject(reason);
    },
    deferred: function () {
        var v1, v2;
        var v3 = new Promise(function (res, rej) {
            v1 = res;
            v2 = rej;
        });
        return {
            promise: v3,
            resolve: v1,
            reject: v2
        };
    }
};
