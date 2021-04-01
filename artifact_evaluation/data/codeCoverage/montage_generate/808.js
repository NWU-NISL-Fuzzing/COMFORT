function f0(b) {
    if (!b)
        throw new Error('Bad assertion');
}
{
    let v0 = null;
    let v1 = {};
    let v2 = {
        ownKeys: function () {
            v0 = new Error();
            throw v0;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Object.keys(v3);
        } catch (e) {
            v5 = true;
            f0(e === v0);
        }
        f0(v5);
    }
}
{
    let v0 = null;
    let v1 = {};
    let v2 = {
        get ownKeys() {
            v0 = new Error();
            throw v0;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Object.keys(v3);
        } catch (e) {
            v5 = true;
            f0(e === v0);
        }
        f0(v5);
    }
}
{
    let v1 = { x: 40 };
    let v6 = false;
    let v2 = {
        ownKeys: function (theTarget) {
            v6 = true;
            return [
                '1',
                2,
                3
            ];
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Object.keys(v3);
        } catch (e) {
            v5 = true;
            f0(e.toString() === 'TypeError: Proxy handler\'s \'ownKeys\' method must return an array-like object containing only Strings and Symbols');
        }
        f0(v5);
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = {};
    Object.defineProperty(v1, 'x', {
        configurable: false,
        enumerable: true,
        value: 400
    });
    let v6 = false;
    let v2 = {
        ownKeys: function (theTarget) {
            v6 = true;
            return [];
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Object.keys(v3);
        } catch (e) {
            v5 = true;
            f0(e.toString() === 'TypeError: Proxy object\'s \'target\' has the non-configurable property \'x\' that was not in the result from the \'ownKeys\' trap');
        }
        f0(v5);
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = {};
    Object.defineProperty(v1, 'x', {
        configurable: true,
        enumerable: true,
        value: 400
    });
    Object.preventExtensions(v1);
    let v6 = false;
    let v2 = {
        ownKeys: function (theTarget) {
            v6 = true;
            return [];
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Object.keys(v3);
        } catch (e) {
            v5 = true;
            f0(e.toString() === 'TypeError: Proxy object\'s non-extensible \'target\' has configurable property \'x\' that was not in the result from the \'ownKeys\' trap');
        }
        f0(v5);
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = {};
    Object.defineProperty(v1, 'x', {
        configurable: true,
        enumerable: true,
        value: 400
    });
    Object.preventExtensions(v1);
    let v6 = false;
    let v2 = {
        ownKeys: function (theTarget) {
            v6 = true;
            return 6;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Object.keys(v3);
        } catch (e) {
            v5 = true;
            f0(e.toString() === 'TypeError: Proxy handler\'s \'ownKeys\' method returned a key that was not present in its non-extensible target');
        }
        f0(v5);
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = {};
    let v7 = false;
    let v8 = false;
    Object.defineProperty(v1, 'a', {
        value: 42,
        configurable: false
    });
    let v9 = new Proxy(v1, {
        ownKeys() {
            v7 = true;
            return [
                'a',
                'a'
            ];
        }
    });
    let v10 = new Proxy(v9, {
        ownKeys() {
            v8 = true;
            return ['a'];
        }
    });
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Reflect.ownKeys(v10);
        } catch (e) {
            f0(e.toString() === 'TypeError: Proxy object\'s \'target\' has the non-configurable property \'a\' that was not in the result from the \'ownKeys\' trap');
            v5 = true;
        }
        f0(v5);
        f0(v7);
        f0(v8);
    }
}
{
    let v1 = {};
    let v7 = false;
    let v8 = false;
    Object.defineProperty(v1, 'a', {
        value: 42,
        configurable: true
    });
    Object.preventExtensions(v1);
    let v9 = new Proxy(v1, {
        ownKeys() {
            v7 = true;
            return [
                'a',
                'a'
            ];
        }
    });
    let v10 = new Proxy(v9, {
        ownKeys() {
            v8 = true;
            return ['a'];
        }
    });
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Reflect.ownKeys(v10);
        } catch (e) {
            f0(e.toString() === 'TypeError: Proxy object\'s non-extensible \'target\' has configurable property \'a\' that was not in the result from the \'ownKeys\' trap');
            v5 = true;
        }
        f0(v5);
        f0(v7);
        f0(v8);
    }
}
{
    let v1 = {};
    Object.defineProperty(v1, 'x', {
        configurable: true,
        enumerable: true,
        value: 400
    });
    Object.preventExtensions(v1);
    let v6 = false;
    let v2 = {
        ownKeys: function (theTarget) {
            v6 = true;
            return [
                'x',
                'x'
            ];
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        Object.keys(v3);
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = {};
    let v2 = { ownKeys: 45 };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Object.keys(v3);
        } catch (e) {
            v5 = true;
            f0(e.toString() === 'TypeError: \'ownKeys\' property of a Proxy\'s handler should be callable');
        }
        f0(v5);
    }
}
function f1(a, b) {
    if (a.length !== b.length)
        return false;
    for (let v4 = 0; v4 < a.length; v4++) {
        if (a[v4] !== b[v4])
            return false;
    }
    return true;
}
{
    let v1 = { x: 40 };
    let v6 = false;
    let v11 = [
        'a',
        'b',
        'c'
    ];
    let v2 = {
        ownKeys: function (theTarget) {
            v6 = true;
            return v11;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v12 = Object.keys(v3);
        f0(v12 !== v11);
        f0(f1(v12, v11));
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = { x: 40 };
    let v6 = false;
    let v11 = [
        'a',
        'b',
        'c'
    ];
    let v2 = {
        ownKeys: function (theTarget) {
            v6 = true;
            return v11;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v12 = Reflect.ownKeys(v3);
        f0(v12 !== v11);
        f0(f1(v12, v11));
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = { x: 40 };
    let v6 = false;
    let v13 = Symbol();
    let v14 = Symbol();
    let v11 = [
        'a',
        'b',
        v13,
        'c',
        v14
    ];
    let v2 = {
        ownKeys: function (theTarget) {
            v6 = true;
            return v11;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v12 = Object.getOwnPropertySymbols(v3);
        f0(f1(v12, [
            v13,
            v14
        ]));
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = { x: 40 };
    let v6 = false;
    let v13 = Symbol();
    let v14 = Symbol();
    let v11 = [
        'a',
        'b',
        v13,
        'c',
        v14
    ];
    let v2 = {
        ownKeys: function (theTarget) {
            v6 = true;
            return v11;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v12 = Object.keys(v3);
        f0(f1(v12, [
            'a',
            'b',
            'c'
        ]));
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = { x: 40 };
    let v6 = false;
    let v13 = Symbol();
    let v14 = Symbol();
    let v11 = [
        'a',
        'b',
        v13,
        'c',
        v14
    ];
    let v2 = {
        ownKeys: function (theTarget) {
            v6 = true;
            return v11;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v12 = Reflect.ownKeys(v3);
        f0(f1(v12, [
            'a',
            'b',
            'c',
            v13,
            v14
        ]));
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = { x: 40 };
    let v6 = false;
    let v13 = Symbol();
    let v14 = Symbol();
    let v11 = [
        'a',
        'b',
        v13,
        'c',
        v14
    ];
    let v2 = {
        getOwnPropertyDescriptor: () => {
            return {
                enumerable: true,
                configurable: true
            };
        },
        ownKeys: function (theTarget) {
            v6 = true;
            return v11;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v15 = new Set();
        for (let v16 in v3)
            v15.add(v16);
        f0(v15.size === 3);
        f0(v15.has('a'));
        f0(v15.has('b'));
        f0(v15.has('c'));
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = { x: 40 };
    let v6 = false;
    let v13 = Symbol();
    let v14 = Symbol();
    let v11 = [
        'a',
        'b',
        v13,
        'c',
        v14
    ];
    let v2 = {
        getOwnPropertyDescriptor: () => {
            return {
                enumerable: true,
                configurable: true
            };
        },
        ownKeys: function (theTarget) {
            v6 = true;
            return v11;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v15 = new Set();
        for (let v16 in v3)
            v15.add(v16);
        if (v4 === 40) {
            v11.push('d');
        }
        f0(v15.size === v4 > 40 ? 4 : 3);
        f0(v15.has('a'));
        f0(v15.has('b'));
        f0(v15.has('c'));
        if (v4 > 40)
            f0(v15.has('d'));
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = { x: 40 };
    let v6 = false;
    let v13 = Symbol();
    let v14 = Symbol();
    let v11 = [
        'a',
        'b',
        v13,
        'c',
        v14
    ];
    let v2 = {
        getOwnPropertyDescriptor: () => {
            return {
                enumerable: true,
                configurable: true
            };
        },
        ownKeys: function (theTarget) {
            v6 = true;
            return v11;
        }
    };
    let v3 = new Proxy(v1, v2);
    let v17 = Object.create(v3, {
        d: {
            enumerable: true,
            configurable: true
        }
    });
    for (let v4 = 0; v4 < 500; v4++) {
        let v15 = new Set();
        for (let v16 in v17)
            v15.add(v16);
        f0(v15.size === 4);
        f0(v15.has('a'));
        f0(v15.has('b'));
        f0(v15.has('c'));
        f0(v15.has('d'));
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = { x: 40 };
    let v6 = false;
    let v13 = Symbol();
    let v14 = Symbol();
    let v11 = [
        'a',
        'b',
        v13,
        'c',
        v14
    ];
    let v2 = {
        getOwnPropertyDescriptor: () => {
            return {
                enumerable: true,
                configurable: true
            };
        },
        ownKeys: function (theTarget) {
            v6 = true;
            return v11;
        }
    };
    let v3 = new Proxy(v1, v2);
    let v17 = Object.create(v3, {
        d: {
            enumerable: true,
            configurable: true
        }
    });
    for (let v4 = 0; v4 < 500; v4++) {
        let v15 = new Set();
        for (let v16 in v17)
            v15.add(v16);
        f0(v15.size === 4);
        f0(v15.has('a'));
        f0(v15.has('b'));
        f0(v15.has('c'));
        f0(v15.has('d'));
        f0(v6);
        v6 = false;
    }
}
{
    let v6 = false;
    let v1 = {
        x: 20,
        y: 40
    };
    let v2 = { ownKeys: null };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v18 = Object.keys(v3);
        f0(v18.indexOf('x') !== -1);
        f0(v18.indexOf('y') !== -1);
    }
}
{
    let v6 = false;
    let v1 = new Proxy({}, {
        ownKeys: function (theTarget) {
            v6 = true;
            return Reflect.ownKeys(theTarget);
        }
    });
    let v13 = Symbol();
    let v14 = Symbol();
    let v11 = [
        'a',
        'b',
        v13,
        'c',
        v14
    ];
    let v2 = {
        ownKeys: function (theTarget) {
            return v11;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v18 = Object.keys(v3);
        f0(v6);
        v6 = false;
    }
}
{
    let v0 = null;
    let v1 = new Proxy({}, {
        ownKeys: function (theTarget) {
            v0 = new Error();
            throw v0;
        }
    });
    let v13 = Symbol();
    let v14 = Symbol();
    let v11 = [
        'a',
        'b',
        v13,
        'c',
        v14
    ];
    let v2 = {
        ownKeys: function (theTarget) {
            return v11;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Object.keys(v3);
        } catch (e) {
            v5 = true;
            f0(e === v0);
        }
        f0(v5);
        v0 = null;
    }
}
