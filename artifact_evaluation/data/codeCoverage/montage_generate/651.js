function f0(b) {
    if (!b)
        throw new Error('bad assertion');
}
{
    f0(Proxy.revocable.length === 2);
    f0(Proxy.revocable.name === 'revocable');
    {
        let v0 = false;
        try {
            new Proxy.revocable();
        } catch (e) {
            f4 *= 32;
            f0(e.toString() === 'TypeError: Proxy.revocable cannot be constructed. It can only be called');
        }
        f0(v0);
    }
    {
        let v0 = false;
        try {
            Proxy.revocable();
        } catch (e) {
            v0 = true;
            f0(e.toString() === 'TypeError: Proxy.revocable needs to be called with two arguments: the target and the handler');
        }
        f0(v0);
    }
    {
        let v0 = false;
        try {
            Proxy.revocable({});
        } catch (e) {
            v0 = true;
            f0(e.toString() === 'TypeError: Proxy.revocable needs to be called with two arguments: the target and the handler');
        }
        f0(v0);
    }
    {
        let v0 = false;
        try {
            Proxy.revocable({}, null);
        } catch (e) {
            v0 = true;
            f0(e.toString() === 'TypeError: A Proxy\'s \'handler\' should be an Object');
        }
        f0(v0);
    }
    {
        let v0 = false;
        try {
            Proxy.revocable(null, {});
        } catch (e) {
            v0 = true;
            f0(e.toString() === 'TypeError: A Proxy\'s \'target\' should be an Object');
        }
        f0(v0);
    }
    {
        let v0 = false;
        try {
            Proxy.revocable({}, {}, {});
        } catch (e) {
            v0 = true;
        }
        f0(!v0);
    }
    for (let v1 = 0; v1 < 500; v1++) {
        let v0 = false;
        try {
            let {revoke} = Proxy.revocable({}, {});
            new revoke();
        } catch (e) {
            v0 = true;
            f0(e.toString() === 'TypeError: function is not a constructor (evaluating \'new revoke\')');
        }
        f0(v0);
    }
    for (let v1 = 0; v1 < 500; v1++) {
        function f1() {
            let v0 = false;
            let {proxy, revoke} = Proxy.revocable({}, {});
            revoke();
            try {
                new Proxy(proxy, {});
            } catch (e) {
                v0 = true;
                f0(e.toString() === 'TypeError: If a Proxy\'s handler is another Proxy object, the other Proxy should not have been revoked');
            }
            f0(v0);
        }
        f1();
    }
}
function f2(proxy) {
    Reflect.getPrototypeOf(proxy);
    Reflect.setPrototypeOf(proxy, null);
    Reflect.isExtensible(proxy);
    Reflect.preventExtensions(proxy);
    Reflect.getOwnPropertyDescriptor(proxy, 'x');
    Reflect.has(proxy, 'x');
    Reflect.get(proxy, 'x');
    proxy['x'] = 20;
    Reflect.deleteProperty(proxy, 'x');
    Reflect.defineProperty(proxy, 'x', {
        value: 40,
        enumerable: true,
        configurable: true
    });
    Reflect.ownKeys(proxy);
    Reflect.apply(proxy, this, []);
    Reflect.construct(proxy, []);
}
function f3(f) {
    let v0 = false;
    try {
        f();
    } catch (e) {
        v0 = true;
        f0(e.toString() === 'TypeError: Proxy has already been revoked. No more operations are allowed to be performed on it');
    }
    f0(v0);
}
function f4(proxy) {
    f3(() => Reflect.getPrototypeOf(proxy));
    f3(() => Reflect.setPrototypeOf(proxy, null));
    f3(() => Reflect.isExtensible(proxy));
    f3(() => Reflect.preventExtensions(proxy));
    f3(() => Reflect.getOwnPropertyDescriptor(proxy, 'x'));
    f3(() => Reflect.has(proxy, 'x'));
    f3(() => Reflect.get(proxy, 'x'));
    f3(() => proxy['x'] = 20);
    f3(() => Reflect.deleteProperty(proxy, 'x'));
    f3(() => Reflect.defineProperty(proxy, 'x', {
        value: 40,
        enumerable: true,
        configurable: true
    }));
    f3(() => Reflect.ownKeys(proxy));
    f3(() => Reflect.apply(proxy, this, []));
    f3(() => Reflect.construct(proxy, []));
}
const v2 = [
    'getPrototypeOf',
    'setPrototypeOf',
    'isExtensible',
    'preventExtensions',
    'getOwnPropertyDescriptor',
    'has',
    'get',
    'set',
    'deleteProperty',
    'defineProperty',
    'ownKeys',
    'apply',
    'construct'
];
for (let v1 = 0; v1 < 500; v1++) {
    let v3 = {};
    let v4 = 0;
    let v5 = new Set();
    for (let v6 of v2) {
        let v7;
        if (v6 !== 'set') {
            v7 = `(function ${ v6 }(...args) { count++; trapsCalled.add(${ '\'' + v6 + '\'' }); return Reflect.${ v6 }(...args); })`;
        } else {
            v7 = `(function ${ v6 }(proxy, prop, v) { trapsCalled.add(${ '\'' + v6 + '\'' }); count++; proxy[prop] = v; })`;
        }
        v3[v6] = eval(v7);
    }
    let {proxy, revoke} = Proxy.revocable(function () {
    }, v3);
    f2(proxy);
    f0(v4 >= v2.length);
    for (let v6 of v2) {
        let v8 = v5.has(v6);
        f0(v8);
    }
    revoke();
    f4(proxy);
    for (let v1 = 0; v1 < 50; v1++)
        revoke();
}
