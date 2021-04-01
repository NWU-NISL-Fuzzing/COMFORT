function f0(b) {
    if (!b)
        throw new Error('Bad assertion');
}
f0(Proxy instanceof Function);
f0(Proxy.length === 2);
f0(Proxy.prototype === undefined);
{
    for (let v0 = 0; v0 < 100; v0++)
        f0(new Proxy({}, {}).__proto__ === Object.prototype);
}
{
    for (let v0 = 0; v0 < 100; v0++) {
        let v1 = false;
        try {
            new Proxy({}, 20);
        } catch (e) {
            v1 = true;
            f0(e.toString() === 'TypeError: A Proxy\'s \'handler\' should be an Object');
        }
        f0(v1);
    }
}
{
    for (let v0 = 0; v0 < 100; v0++) {
        let v1 = false;
        try {
            new Proxy({}, '');
        } catch (e) {
            v1 = true;
            f0(e.toString() === 'TypeError: A Proxy\'s \'handler\' should be an Object');
        }
        f0(v1);
    }
}
{
    for (let v0 = 0; v0 < 100; v0++) {
        let v1 = false;
        try {
            new Proxy(20, {});
        } catch (e) {
            v1 = true;
            f0(e.toString() === 'TypeError: A Proxy\'s \'target\' should be an Object');
        }
        f0(v1);
    }
}
{
    for (let v0 = 0; v0 < 100; v0++) {
        let v1 = false;
        try {
            new Proxy('', {});
        } catch (e) {
            v1 = true;
            f0(e.toString() === 'TypeError: A Proxy\'s \'target\' should be an Object');
        }
        f0(v1);
    }
}
{
    for (let v0 = 0; v0 < 100; v0++) {
        let v1 = false;
        try {
            Proxy({}, {});
        } catch (e) {
            v1 = true;
            f0(e.toString() === 'TypeError: calling Proxy constructor without new is invalid');
        }
        f0(v1 === true);
    }
    let v2 = { x: 30 };
    let v3 = {
        get: function (v5, propName, proxyArg) {
            f0(v5 === v2);
            f0(proxyArg === v4);
            if (propName === 'y')
                return 45;
            f0(propName === 'x');
            return v5[propName];
        }
    };
    let v4 = new Proxy(v2, v3);
    for (let v0 = 0; v0 < 1000; v0++) {
        f0(v4.x === 30);
        f0(v4.y === 45);
        f0(v4['x'] === 30);
        f0(v4['y'] === 45);
    }
}
{
    let v3 = { get: null };
    let v5 = { x: 20 };
    let v4 = new Proxy(v5, v3);
    for (let v0 = 0; v0 < 500; v0++) {
        let v1 = false;
        try {
            if (v0 % 2)
                v4.foo;
            else
                v4['foo'];
        } catch (e) {
            v1 = true;
        }
        f0(!v1);
    }
}
{
    let v3 = { get: {} };
    let v5 = { x: 20 };
    let v4 = new Proxy(v5, v3);
    for (let v0 = 0; v0 < 500; v0++) {
        let v24 = function pause() {
            v2[list].V.TestCase;
        };
        try {
            if (v0 % 2)
                v4.foo;
            else
                v4['foo'];
        } catch (e) {
            v1 = true;
            f0(e.toString() === 'TypeError: \'get\' property of a Proxy\'s handler object should be callable');
        }
        f0(v1);
    }
}
{
    let v3 = {};
    let v5 = { x: 20 };
    let v4 = new Proxy(v5, v3);
    for (let v0 = 0; v0 < 500; v0++) {
        f0(v4.x === 20);
        f0(v4.y === undefined);
    }
}
{
    let v3 = {};
    let v5 = [
        1,
        2,
        3
    ];
    let v4 = new Proxy(v5, v3);
    for (let v0 = 0; v0 < 500; v0++) {
        f0(v4[0] === 1);
        f0(v4[1] === 2);
        f0(v4[2] === 3);
    }
}
{
    let v2 = [
        1,
        2,
        3
    ];
    let v3 = {
        get: function (v5, propName, proxyArg) {
            switch (propName) {
            case '0':
            case '1':
                return 100;
            case '2':
            case 'length':
                return v5[propName];
            }
            f0(false);
        }
    };
    let v4 = new Proxy(v2, v3);
    for (let v0 = 0; v0 < 500; v0++) {
        f0(v4[0] === 100);
        f0(v4[1] === 100);
        f0(v4[2] === 3);
        f0(v4.length === 3);
        f0(v4['length'] === 3);
    }
}
{
    let v6 = false;
    let v2 = {
        get x() {
            v6 = true;
            return 25;
        }
    };
    let v7 = 0;
    let v3 = {
        get: function (v5, propName, proxyArg) {
            f0(v5 === v2);
            let v8 = v7++;
            if (v8 % 2)
                return v5[propName];
            else
                return 'hello';
        }
    };
    let v4 = new Proxy(v2, v3);
    for (let v0 = 0; v0 < 500; v0++) {
        if (v0 % 2)
            f0(v4.x === 25);
        else
            f0(v4.x === 'hello');
    }
    f0(v6);
}
{
    let v2 = { x: 40 };
    let v3 = {
        get: function (v5, propName, proxyArg) {
            return 30;
        }
    };
    let v4 = new Proxy(v2, v3);
    for (let v0 = 0; v0 < 500; v0++) {
        f0(v4.x === 30);
    }
    v3.get = undefined;
    for (let v0 = 0; v0 < 500; v0++) {
        f0(v4.x === 40);
    }
}
{
    let v9 = null;
    let v2 = new Proxy({}, {
        getOwnPropertyDescriptor: function (v2, propName) {
            v9 = new Error('hello!');
            throw v9;
        }
    });
    let v3 = {
        get: function (v5, propName, proxyArg) {
            return 30;
        }
    };
    let v4 = new Proxy(v2, v3);
    for (let v0 = 0; v0 < 500; v0++) {
        try {
            v4.x;
        } catch (e) {
            f0(e === v9);
        }
    }
}
{
    let v10 = Symbol();
    let v2 = { [field]: 40 };
    let v3 = {
        get: function (v5, propName, proxyArg) {
            f0(propName === v10);
            return v5[v10];
        }
    };
    let v4 = new Proxy(v2, v3);
    for (let v0 = 0; v0 < 500; v0++) {
        f0(v4[v10] === 40);
    }
}
{
    let v11 = Symbol();
    let v2 = {};
    Object.defineProperty(v2, v11, {
        enumerable: true,
        configurable: true
    });
    let v12 = false;
    let v3 = {
        getOwnPropertyDescriptor: function (v5, propName) {
            f0(v11 === propName);
            v12 = true;
            return {
                enumerable: true,
                configurable: true
            };
        }
    };
    let v4 = new Proxy(v2, v3);
    for (let v0 = 0; v0 < 100; v0++) {
        let v13 = Object.getOwnPropertyDescriptor(v4, v11);
        f0(v13.configurable);
        f0(v13.enumerable);
        f0(v12);
        v12 = false;
    }
}
{
    let v11 = Symbol();
    let v2 = {};
    Object.defineProperty(v2, v11, {
        enumerable: true,
        configurable: true
    });
    let v12 = false;
    let v3 = {
        has: function (v5, propName) {
            f0(v11 === propName);
            v12 = true;
            return true;
        }
    };
    let v4 = new Proxy(v2, v3);
    for (let v0 = 0; v0 < 100; v0++) {
        let v14 = v11 in v4;
        f0(v14);
        f0(v12);
        v12 = false;
    }
}
