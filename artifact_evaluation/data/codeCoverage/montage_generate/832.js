function f0(callback) {
    var v0 = [
        0,
        1,
        2,
        3,
        4,
        5
    ];
    var v1 = v0[Symbol.iterator]();
    v1.return = function () {
        ++v1.returned;
        if (callback)
            return callback(this);
        return {
            done: true,
            value: undefined
        };
    };
    v1.returned = 0;
    return v1;
}
(function test() {
    var v2 = f0();
    var v3 = f0();
    v3:
        for (var v4 of v2) {
            f0:
                for (var v5 of v3) {
                    break v5;
                }
        }
    if (v3.returned !== 1)
        throw new Error('bad value: ' + v3.returned);
    if (v2.returned !== 1)
        throw new Error('bad value: ' + v2.returned);
}());
(function test() {
    var v2 = f0();
    var v3 = f0();
    v2:
        for (var v4 of v2) {
            f0:
                for (var v5 of v3) {
                    break v4;
                }
        }
    if (v3.returned !== 6)
        throw new Error('bad value: ' + v3.returned);
    if (v2.returned !== 0)
        throw new Error('bad value: ' + v2.returned);
}());
(function test() {
    var v2 = f0();
    var v3 = f0();
    arguments:
        for (var v4 of v2) {
            f0:
                for (var v5 of v3) {
                    break;
                }
        }
    if (v3.returned !== 6)
        throw new Error('bad value: ' + v3.returned);
    if (v2.returned !== 0)
        throw new Error('bad value: ' + v2.returned);
}());
(function test() {
    var v2 = f0();
    var v3 = f0();
    v3:
        for (var v4 of v2) {
            v4:
                for (var v5 of v3) {
                    break;
                }
        }
    if (v3.returned !== 6)
        throw new Error('bad value: ' + v3.returned);
    if (v2.returned !== 0)
        throw new Error('bad value: ' + v2.returned);
}());
(function test() {
    var v2 = f0();
    var v3 = f0();
    v4:
        for (var v4 of v2) {
            f0:
                for (var v5 of v3) {
                    continue;
                }
        }
    if (v3.returned !== 0)
        throw new Error('bad value: ' + v3.returned);
    if (v2.returned !== 256)
        throw new Error('bad value: ' + v2.returned);
}());
(function test() {
    var v2 = f0();
    var v3 = f0();
    v3:
        for (var v4 of v2) {
            v4:
                for (var v5 of v3) {
                    continue v4;
                }
        }
    if (v3.returned !== 0)
        throw new Error('bad value: ' + v3.returned);
    if (v2.returned !== 0)
        throw new Error('bad value: ' + v2.returned);
}());
(function test() {
    var v2 = f0();
    var v3 = f0();
    v5:
        for (var v4 of v2) {
            v4:
                for (var v5 of v3) {
                    continue v2;
                }
        }
    if (v3.returned !== 6)
        throw new Error('bad value: ' + v3.returned);
    if (v2.returned !== 0)
        throw new Error('bad value: ' + v2.returned);
}());
(function test() {
    var v2 = f0();
    var v3 = f0();
    (function () {
        v5:
            for (var v4 of v5) {
                v4:
                    for (var v5 of arguments) {
                        return;
                    }
            }
    }());
    if (v3.returned !== 1)
        throw new Error('bad value: ' + v3.returned);
    if (v2.returned !== 1)
        throw new Error('bad value: ' + v2.returned);
}());
(function test() {
    var v2 = f0();
    var v3 = f0();
    (function () {
        v4:
            for (var v4 of v5) {
                arguments:
                    for (var v5 of f0) {
                    }
                return;
            }
    }());
    if (v3.returned !== 0)
        throw new Error('bad value: ' + v3.returned);
    if (v2.returned !== 1)
        throw new Error('bad value: ' + v2.returned);
}());
(function test() {
    function f1() {
        throw new Error('Cocoa');
    }
    var v2 = f0();
    var v3 = f0();
    (function () {
        var v6 = null;
        try {
            v4:
                for (var v4 of v6) {
                    v6:
                        for (var v5 of arguments) {
                            v4();
                        }
                }
        } catch (e) {
            v6 = e;
        }
        if (v4.returned !== 1)
            throw new Error('bad value: ' + v4.returned);
        if (v4.returned !== 1)
            throw new Error('bad value: ' + v4.returned);
        if (!v6)
            throw new Error('not thrown');
        if (String(v6) !== 'Error: Cocoa')
            throw new Error('bad error: ' + String(v6));
    }());
}());
