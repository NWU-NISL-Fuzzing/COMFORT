function f0(b) {
    if (!b)
        throw new Error('Bad assertion');
}
{
    let v0 = {};
    let v1 = { defineProperty: 25 };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v4 = false;
        try {
            Object.defineProperty(v2, 'x', {
                enumerable: true,
                configurable: true,
                value: 55
            });
        } catch (e) {
            v4 = true;
            f0(e.toString() === 'TypeError: \'defineProperty\' property of a Proxy\'s handler should be callable');
        }
        f0(v4);
    }
}
{
    let v0 = {};
    let v5 = null;
    let v1 = {
        get defineProperty() {
            v5 = new Error();
            throw v5;
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v4 = false;
        try {
            Object.defineProperty(v2, 'x', {
                enumerable: true,
                configurable: true,
                value: 55
            });
        } catch (e) {
            v4 = true;
            f0(e === v5);
        }
        f0(v4);
    }
}
{
    let v0 = {};
    let v5 = null;
    let v1 = {
        defineProperty: function () {
            v5 = new Error();
            throw v5;
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v4 = false;
        try {
            Object.defineProperty(v2, 'x', {
                enumerable: true,
                configurable: true,
                value: 55
            });
        } catch (e) {
            v4 = true;
            f0(e === v5);
        }
        f0(v4);
    }
}
{
    let v0 = {};
    let v1 = { defineProperty: null };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        Object.defineProperty(v2, 'x', {
            enumerable: true,
            configurable: true,
            value: v3
        });
        for (let v6 of [
                v0,
                v2
            ]) {
            let v7 = Object.getOwnPropertyDescriptor(v6, 'x');
            f0(v7.value === v3);
            f0(v7.configurable === true);
            f0(v7.enumerable === true);
        }
    }
}
{
    let v0 = {};
    let v1 = { defineProperty: undefined };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v8 = Reflect.defineProperty(v2, 'x', {
            enumerable: true,
            configurable: true,
            value: v3
        });
        f0(v8);
        for (let v6 of [
                v0,
                v2
            ]) {
            let v7 = Object.getOwnPropertyDescriptor(v6, 'x');
            f0(v7.value === v3);
            f0(v7.configurable === true);
            f0(v7.enumerable === true);
        }
    }
}
{
    let v0 = {};
    let v9 = false;
    let v1 = {
        defineProperty: function (theTarget, propName, descriptor) {
            v9 = true;
            return Reflect.defineProperty(theTarget, propName, descriptor);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v8 = Reflect.defineProperty(v2, 'x', {
            enumerable: true,
            configurable: true,
            value: v3
        });
        f0(v8);
        f0(v9);
        v9 = false;
        for (let v6 of [
                v0,
                v2
            ]) {
            let v7 = Object.getOwnPropertyDescriptor(v6, 'x');
            f0(v7.value === v3);
            f0(v7.configurable === true);
            f0(v7.enumerable === true);
        }
    }
}
{
    let v0 = {};
    let v9 = false;
    let v1 = {
        defineProperty: function (theTarget, propName, descriptor) {
            v9 = true;
            Reflect.defineProperty(theTarget, propName, descriptor);
            return false;
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v8 = Reflect.defineProperty(v2, 'x', {
            enumerable: true,
            configurable: true,
            value: v3
        });
        f0(!v8);
        f0(v9);
        v9 = false;
        for (let v6 of [
                v0,
                v2
            ]) {
            let v7 = Object.getOwnPropertyDescriptor(v6, 'x');
            f0(v7.value === v3);
            f0(v7.configurable === true);
            f0(v7.enumerable === true);
        }
    }
}
{
    let v0 = {};
    let v9 = false;
    let v1 = {
        defineProperty: function (theTarget, propName, descriptor) {
            v9 = true;
            return true;
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v4 = false;
        try {
            Reflect.defineProperty(v2, 'x', {
                enumerable: true,
                configurable: false,
                value: v3
            });
        } catch (e) {
            v4 = true;
            f0(e.toString() === 'TypeError: Proxy\'s \'defineProperty\' trap returned true for a non-configurable field even though getOwnPropertyDescriptor of the Proxy\'s target returned undefined');
        }
        f0(v9);
        f0(v4);
        v9 = false;
    }
}
{
    let v0 = {};
    let v9 = false;
    Object.preventExtensions(v0);
    let v1 = {
        defineProperty: function (theTarget, propName, descriptor) {
            v9 = true;
            return true;
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v4 = false;
        try {
            Reflect.defineProperty(v2, 'x', {
                enumerable: true,
                configurable: true,
                value: v3
            });
        } catch (e) {
            v4 = true;
            f0(e.toString() === 'TypeError: Proxy\'s \'defineProperty\' trap returned true even though getOwnPropertyDescriptor of the Proxy\'s target returned undefined and the target is non-extensible');
        }
        f0(v9);
        f0(v4);
        v9 = false;
    }
}
{
    let v0 = {};
    let v9 = false;
    let v1 = {
        defineProperty: function (theTarget, propName, descriptor) {
            f0(propName === 'x');
            f0(descriptor.configurable === false);
            v9 = true;
            return Reflect.defineProperty(theTarget, 'x', {
                enumerable: true,
                configurable: true,
                value: descriptor.value
            });
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        try {
            Reflect.defineProperty(v2, 'x', {
                enumerable: true,
                configurable: false,
                value: v3
            });
        } catch (e) {
            v4 = true;
            f0(e.toString() === 'TypeError: Proxy\'s \'defineProperty\' trap did not define a non-configurable property on its target even though the input descriptor to the trap said it must do so');
        }
        f0(v9);
        f0(v4);
        v9 = false;
        for (let v6 of [
                v0,
                v2
            ]) {
            let v7 = Object.getOwnPropertyDescriptor(v6, 'x');
            f0(v7.value === v3);
            f0(v7.configurable === true);
            f0(v7.enumerable === true);
        }
    }
}
{
    let v0 = {};
    let v9 = false;
    Object.defineProperty(v0, 'x', {
        configurable: false,
        writable: true,
        value: 55
    });
    let v1 = {
        defineProperty: function (theTarget, propName, descriptor) {
            f0(propName === 'x');
            f0(descriptor.configurable === true);
            v9 = true;
            Reflect.defineProperty(theTarget, 'x', {
                enumerable: true,
                configurable: true,
                value: descriptor.value
            });
            return true;
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v4 = false;
        try {
            Reflect.defineProperty(v2, 'x', {
                configurable: true,
                writable: false,
                value: 45
            });
        } catch (e) {
            v4 = true;
            f0(e.toString() === 'TypeError: Proxy\'s \'defineProperty\' trap did not define a property on its target that is compatible with the trap\'s input descriptor');
        }
        f0(v9);
        f5(v4);
        v9 = false;
        for (let v6 of [
                v0,
                v2
            ]) {
            let v7 = Object.getOwnPropertyDescriptor(v6, 'x');
            f0(v7.value === 55);
            f0(v7.configurable === false);
        }
    }
}
{
    let v0 = {};
    let v9 = false;
    Object.defineProperty(v0, 'x', {
        configurable: false,
        writable: true,
        value: 55
    });
    let v1 = {
        defineProperty: function (theTarget, propName, descriptor) {
            f0(propName === 'x');
            f0(descriptor.configurable === true);
            v9 = true;
            Reflect.defineProperty(theTarget, 'x', descriptor);
            return true;
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v4 = false;
        try {
            Reflect.defineProperty(v2, 'x', {
                configurable: true,
                set: function () {
                },
                get: function () {
                }
            });
        } catch (e) {
            v4 = true;
            f0(e.toString() === 'TypeError: Proxy\'s \'defineProperty\' trap did not define a property on its target that is compatible with the trap\'s input descriptor');
        }
        f0(v9);
        f0(v4);
        v9 = false;
        for (let v6 of [
                v0,
                v2
            ]) {
            let v7 = Object.getOwnPropertyDescriptor(v6, 'x');
            f0(v7.value === 55);
            f0(v7.configurable === false);
        }
    }
}
{
    let v0 = {};
    let v9 = false;
    let v10 = function () {
    };
    let v11 = function () {
    };
    Object.defineProperty(v0, 'x', {
        configurable: false,
        get: v11,
        set: v10
    });
    let v1 = {
        defineProperty: function (theTarget, propName, descriptor) {
            f0(propName === 'x');
            f0(descriptor.configurable === true);
            v9 = true;
            Reflect.defineProperty(theTarget, 'x', descriptor);
            return true;
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v4 = false;
        try {
            Reflect.defineProperty(v2, 'x', {
                configurable: true,
                value: 45
            });
        } catch (e) {
            v4 = true;
            f0(e.toString() === 'TypeError: Proxy\'s \'defineProperty\' trap did not define a property on its target that is compatible with the trap\'s input descriptor');
        }
        f0(v9);
        f0(v4);
        v9 = false;
        for (let v6 of [
                v0,
                v2
            ]) {
            let v7 = Object.getOwnPropertyDescriptor(v6, 'x');
            f0(v7.value === undefined);
            f0(v7.configurable === false);
            f0(v7.get === v11);
            f0(v7.set === v10);
        }
    }
}
{
    let v0 = {};
    let v9 = false;
    let v10 = function () {
    };
    let v11 = function () {
    };
    Object.defineProperty(v0, 'x', {
        configurable: false,
        get: v11,
        set: v10
    });
    let v1 = {
        defineProperty: function (theTarget, propName, descriptor) {
            f0(propName === 'x');
            f0(descriptor.configurable === true);
            v9 = true;
            return Reflect.defineProperty(theTarget, 'x', descriptor);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v8 = Reflect.defineProperty(v2, 'x', {
            configurable: true,
            value: 45
        });
        f0(!v8);
        f0(v9);
        v9 = false;
        for (let v6 of [
                v0,
                v2
            ]) {
            let v7 = Object.getOwnPropertyDescriptor(v6, 'x');
            f0(v7.value === undefined);
            f0(v7.configurable === false);
            f0(v7.get === v11);
            f0(v7.set === v10);
        }
    }
}
{
    let v5 = false;
    let v0 = new Proxy({}, {
        getOwnPropertyDescriptor: function () {
            v5 = new Error();
            throw v5;
        }
    });
    let v1 = {
        defineProperty: function (theTarget, propName, descriptor) {
            return Reflect.defineProperty(theTarget, propName, descriptor);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v4 = false;
        try {
            Reflect.defineProperty(v2, 'x', {
                configurable: true,
                value: 45
            });
        } catch (e) {
            v4 = true;
            f0(e === v5);
        }
        f0(v4);
    }
}
{
    let v0 = {};
    Reflect.defineProperty(v0, 'x', {
        writable: true,
        configurable: false,
        value: 55
    });
    let v1 = {
        defineProperty: function (theTarget, propName, descriptor) {
            f0(theTarget === v0);
            return Reflect.defineProperty(theTarget, propName, descriptor);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v8 = Reflect.defineProperty(v2, 'x', {
            configurable: false,
            value: 55
        });
        f0(v8);
        f0(v0.x === 55);
        delete v0.x;
        f0(v0.x === 55);
    }
}
{
    let v0 = {};
    Reflect.defineProperty(v0, 'x', {
        writable: false,
        configurable: false,
        value: 55
    });
    let v1 = {
        defineProperty: function (theTarget, propName, descriptor) {
            f0(theTarget === v0);
            return Reflect.defineProperty(theTarget, propName, descriptor);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v8 = Reflect.defineProperty(v2, 'x', {
            writable: false,
            configurable: false,
            value: 55
        });
        f0(v8);
        f0(v0.x === 55);
        delete v0.x;
        f0(v0.x === 55);
    }
}
{
    let v0 = {};
    Reflect.defineProperty(v0, 'x', {
        writable: false,
        configurable: false,
        value: 55
    });
    let v1 = {
        defineProperty: function (theTarget, propName, descriptor) {
            f0(theTarget === v0);
            return Reflect.defineProperty(theTarget, propName, descriptor);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v8 = Reflect.defineProperty(v2, 'x', {
            writable: false,
            configurable: false,
            value: 'not 55'
        });
        f0(!v8);
        f0(v0.x === 55);
        delete v0.x;
        f0(v0.x === 55);
    }
}
{
    let v0 = {};
    Reflect.defineProperty(v0, 'x', {
        writable: false,
        configurable: false,
        value: 55
    });
    let v1 = {
        defineProperty: function (theTarget, propName, descriptor) {
            f0(theTarget === v0);
            return Reflect.defineProperty(theTarget, propName, descriptor);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v8 = Reflect.defineProperty(v2, 'x', {
            writable: true,
            configurable: false,
            value: 'whatever value goes here'
        });
        f0(!v8);
        f0(v0.x === 55);
        delete v0.x;
        f0(v0.x === 55);
    }
}
