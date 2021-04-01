function v8(b) {
    if (!b)
        throw new Error('Bad assertion');
}
function f1(f) {
    for (let v0 = 0; v0 < 100; v0++)
        f();
}
f1(function () {
    let v1 = null;
    let v2 = {
        has: function (theTarget, property) {
            f0(v1 === null);
            v1 = new Error();
            throw v1;
        }
    };
    let v3 = new Proxy({}, v2);
    let v4 = {};
    let v5 = false;
    try {
        Object.defineProperty(v4, 'foo', v3);
    } catch (e) {
        v5 = true;
        f0(e === v1);
    }
    f0(v5);
});
f1(function () {
    let v1 = null;
    let v2 = {
        has: function (theTarget, property) {
            f0(v1 === null);
            if (property === 'set') {
                v1 = new Error();
                throw v1;
            }
            return Reflect.has(theTarget, property);
        }
    };
    let v3 = new Proxy({}, v2);
    let v4 = {};
    let v5 = false;
    try {
        Object.defineProperty(v4, 'foo', v3);
    } catch (e) {
        v5 = true;
        f0(e === v1);
    }
    f0(v5);
});
function f2(a, b) {
    if (a.length !== b.length)
        return false;
    for (let v0 = 0; v0 < a.length; v0++) {
        if (a[v0] !== b[v0])
            return false;
    }
    return true;
}
f1(function () {
    let v1 = null;
    let v6 = [];
    let v7 = [];
    let v2 = {
        has: function (theTarget, property) {
            v6.push(property);
            return Reflect.has(theTarget, property);
        },
        get: function (theTarget, property, receiver) {
            v7.push(property);
            return Reflect.get(theTarget, property, receiver);
        }
    };
    let v8 = {
        enumerable: true,
        configurable: true,
        value: 45
    };
    let v3 = new Proxy(v8, v2);
    let v4 = {};
    Object.defineProperty(v4, 'foo', v3);
    f0(f2(v6, [
        'enumerable',
        'configurable',
        'value',
        'writable',
        'get',
        'set'
    ]));
    f0(f2(v7, [
        'enumerable',
        'configurable',
        'value'
    ]));
    f0(v4.foo === 45);
});
f1(function () {
    let v1 = null;
    let v6 = [];
    let v7 = [];
    let v2 = {
        has: function (theTarget, property) {
            v6.push(property);
            return Reflect.has(theTarget, property);
        },
        get: function (theTarget, property, receiver) {
            v7.push(property);
            return Reflect.get(theTarget, property, receiver);
        }
    };
    let v8 = {
        enumerable: true,
        configurable: true,
        value: 45,
        writable: true,
        get: function () {
        },
        set: function () {
        }
    };
    let v3 = new Proxy(v8, v2);
    let v4 = {};
    let v5 = false;
    try {
        Object.defineProperty(v4, 'foo', v3);
    } catch (e) {
        v5 = true;
    }
    f0(v5);
    f0(f2(v6, [
        'enumerable',
        'configurable',
        'value',
        'writable',
        'get',
        'set'
    ]));
    f0(f2(v6, v7));
});
