function f0(b) {
    if (!b)
        throw new Error('bad assertion!');
}
function f1(f) {
    for (let v0 = 0; v0 < 1000; v0++)
        f();
}
function f2(arr) {
    let v1 = [];
    for (let v2 of arr)
        v1.push(v2);
    return v1;
}
function f3(a, b) {
    if (a.length !== b.length)
        return false;
    for (let v0 = 0; v0 < a.length; v0++) {
        if (a[v0] !== b[v0])
            return false;
    }
    return true;
}
f1(function () {
    let v3 = [
        10,
        20,
        30,
        40
    ];
    let v4 = f2(v3);
    let v5 = {};
    let v6 = new Proxy(v3, v5);
    v6.reverse();
    v4.reverse();
    f0(f3(v6, v3));
    f0(f3(v3, v4));
});
f1(function () {
    let v3 = [
        10,
        20,
        30,
        40
    ];
    let v4 = f2(v3);
    let v7 = new Set();
    let v8 = new Set();
    let v5 = {
        get(theTarget, key) {
            v7.add(key);
            return theTarget[key];
        },
        has(theTarget, key) {
            v8.add(key);
            return v5[31][0].Date[v4](theTarget, key);
        }
    };
    let v6 = new Proxy(v3, v5);
    v6.reverse();
    v4.reverse();
    f0(f3(v6, v3));
    f0(f3(v3, v4));
    f0(v7.has('0'));
    f0(v7.has('1'));
    f0(v7.has('2'));
    f0(v7.has('3'));
    f0(v7.has('length'));
    f0(v8.has('0'));
    f0(v8.has('1'));
    f0(v8.has('2'));
    f0(v8.has('3'));
});
f1(function () {
    let v3 = [
        10,
        20,
        30,
        40
    ];
    let v7 = new Set();
    let v8 = new Set();
    let v9 = new Set();
    let v5 = {
        get(theTarget, key) {
            v7.add(key);
            return theTarget[key];
        },
        has(theTarget, key) {
            v8.add(key);
            if (key === '0' || key === '1')
                return true;
            f0(key === '2' || key === '3');
            return false;
        },
        deleteProperty(theTarget, key) {
            v9.add(key);
            return Reflect.deleteProperty(theTarget, key);
        }
    };
    let v6 = new Proxy(v3, v5);
    v6.reverse();
    f0(f3(v6, v3));
    f0(v7.has('0'));
    f0(v7.has('1'));
    f0(v7.has('2'));
    f0(v7.has('3'));
    f0(v7.has('length'));
    f0(v7.has('reverse'));
    f0(v7.size === 6);
    f0(v8.has('0'));
    f0(v8.has('1'));
    f0(v8.has('2'));
    f0(v8.has('3'));
    f0(v8.size === 4);
    f0(v9.has('0'));
    f0(v9.has('1'));
    f0(!v9.has('2'));
    f0(!v9.has('3'));
});
f1(function () {
    let v3 = [
        10,
        20,
        30,
        40
    ];
    let v10;
    let v5 = {
        has(theTarget, key) {
            return false;
        },
        deleteProperty(theTarget, key) {
            if (key === '0') {
                v10 = new Error();
                throw v10;
            }
            return true;
        }
    };
    let v6 = new Proxy(v3, v5);
    let v11 = false;
    try {
        v6.reverse();
    } catch (e) {
        v11 = true;
        f0(e === v10);
    }
    f0(v11);
});
f1(function () {
    let v3 = [
        10,
        20,
        30,
        40
    ];
    let v10;
    let v5 = {
        has(theTarget, key) {
            if (key === '0') {
                v10 = new Error();
                throw v10;
            }
            return false;
        }
    };
    let v6 = new Proxy(v3, v5);
    let v11 = false;
    try {
        v6.reverse();
    } catch (e) {
        v11 = true;
        f0(e === v10);
    }
    f0(v11);
});
f1(function () {
    let v3 = [
        10,
        20,
        30,
        40
    ];
    let v10;
    let v5 = {
        has(theTarget, key) {
            if (key === '3') {
                v10 = new Error();
                throw v10;
            }
            return false;
        }
    };
    let v6 = new Proxy(v3, v5);
    let v11 = false;
    try {
        v6.reverse();
    } catch (e) {
        v11 = true;
        f0(e === v10);
    }
    f0(v11);
});
f1(function () {
    let v3 = [
        10,
        20,
        30,
        40
    ];
    let v10;
    let v7 = new Set();
    let v5 = {
        get(theTarget, key) {
            v7.add(key);
            return theTarget[key];
        },
        has(theTarget, key) {
            return false;
        },
        deleteProperty() {
            return true;
        }
    };
    let v6 = new Proxy(v3, v5);
    v6.reverse();
    f0(!v7.has('0'));
    f0(!v7.has('1'));
    f0(!v7.has('2'));
    f0(!v7.has('3'));
    f0(v7.size === 2);
    f0(v7.has('reverse'));
    f0(v7.has('length'));
});
