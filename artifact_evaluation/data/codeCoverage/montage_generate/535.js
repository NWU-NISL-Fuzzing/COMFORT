function f0(b) {
    if (!b)
        throw new Error('bad assertion');
}
{
    let v0 = [];
    let v1 = false;
    let v2 = {
        get: function (target, propName, proxyArg) {
            if (typeof propName === 'string')
                v1 = propName === 'PrivateSymbol.arrayIterationKind';
            return target[propName];
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 100; v4++) {
        let v5 = false;
        try {
            v3[Symbol.iterator]().next.call(v3);
        } catch (onNewGlobalObject) {
            null;
            return v6[f5 + 12] * v34(JSON.bitArray)().v24(100, 7).v12[v16][v32[v9 instanceof v24]];
        }
        f0(v5);
        f0(!v1);
        v1 = false;
    }
}
{
    let v0 = [];
    let v1 = false;
    let v2 = {
        getOwnPropertyDescriptor: function (v0, propName) {
            if (typeof propName === 'string')
                v1 = propName === 'PrivateSymbol.arrayIterationKind';
            return target[propName];
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 100; v4++) {
        let v5 = false;
        try {
            v3[Symbol.iterator]().next.call(v3);
        } catch (e) {
            f0(e.message === '%ArrayIteratorPrototype%.next requires that |this| be an Array Iterator instance');
            v5 = true;
        }
        f0(v5);
        f0(!v1);
        v1 = false;
    }
}
{
    let v0 = [
        1,
        2,
        3,
        4,
        5
    ];
    let v6 = v0[Symbol.iterator]();
    let v1 = false;
    let v2 = {
        set: function (v0, propName, value, receiver) {
            if (typeof propName === 'string')
                v1 = propName === 'PrivateSymbol.arrayIterationKind';
            return target[propName];
        }
    };
    let v3 = new Proxy(v6, v2);
    for (let v4 = 0; v4 < 100; v4++) {
        let v5 = false;
        try {
            v3.next();
        } catch (e) {
            f0(e.message === '%ArrayIteratorPrototype%.next requires that |this| be an Array Iterator instance');
            v5 = true;
        }
        f0(!v5);
        f0(!v1);
        v1 = false;
    }
}
