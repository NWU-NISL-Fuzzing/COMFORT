function f0(b) {
    if (!b)
        throw new Error('Bad assertion');
}
{
    let v0 = function foo(...args) {
        f0(args[0] === 10);
        f0(args[1] === 20);
        return 'foo';
    };
    let v1 = {
        apply: function (theTarget, thisArg, argArray) {
            f0(theTarget === v0);
            f0(argArray[0] === 10);
            f0(argArray[1] === 20);
            return theTarget.apply(thisArg, argArray);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        f0(v2(10, 20) === 'foo');
    }
}
{
    let v0 = function foo() {
    };
    let v4 = null;
    let v1 = {
        get apply() {
            v4 = new Error();
            throw v4;
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v5 = false;
        try {
            v2(10, 20);
        } catch (e) {
            f0(e === v4);
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v6 = false;
    let v7 = this;
    let v0 = function foo() {
        f0(this === v7);
        v6 = true;
    };
    let v1 = { apply: null };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        v2();
        f0(v6);
        v6 = false;
    }
}
{
    let v6 = false;
    let v7 = this;
    let v0 = function foo() {
        f0(this === v7);
        v6 = true;
    };
    let v1 = { apply: undefined };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        v2();
        f0(v6);
        v6 = false;
    }
}
{
    let v6 = false;
    let v8 = {};
    let v0 = function foo(x, y, z) {
        f0(this === v8);
        f0(x === 20);
        f0(y === 45);
        f0(z === 'foo');
        v6 = true;
    };
    let v1 = { apply: undefined };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        v2.call(v8, 20, 45, 'foo');
        f0(v6);
        v6 = false;
        v2.apply(v8, [
            20,
            45,
            'foo'
        ]);
        f0(v6);
        v6 = false;
    }
}
{
    let v6 = false;
    let v8 = {};
    let v0 = function foo(x, y, z) {
        f0(this === v8);
        f0(x === 20);
        f0(y === 45);
        f0(z === 'foo');
        v6 = true;
        return this;
    };
    let v1 = {
        apply: function (theTarget, thisArg, argArray) {
            f0(theTarget === v0);
            f0(argArray[0] === 20);
            f0(argArray[1] === 45);
            f0(argArray[2] === 'foo');
            f0(thisArg === v8);
            return theTarget.apply(thisArg, argArray);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        f0(v2.call(v8, 20, 45, 'foo') === v8);
        f0(v6);
        v6 = false;
        f0(v2.apply(v8, [
            20,
            45,
            'foo'
        ]) === v8);
        f0(v6);
        v6 = false;
    }
}
{
    let v6 = false;
    let v0 = Error;
    let v1 = {
        apply: function (theTarget, thisArg, argArray) {
            v6 = true;
            f0(theTarget === Error);
            return theTarget.apply(thisArg, argArray);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v4 = v2();
        f0(!!v4.stack);
        v6 = false;
    }
}
{
    let v6 = false;
    let v9 = this;
    let v0 = x => {
        v6 = true;
        f0(this === v9);
        return x;
    };
    let v1 = {};
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v10 = v2(v3);
        f0(v10 === v3);
        v6 = false;
    }
}
{
    let v6 = false;
    let v9 = this;
    let v0 = x => {
        f0(this === v9);
        return x;
    };
    let v1 = {
        apply: function (theTarget, thisArg, argArray) {
            v6 = true;
            f0(theTarget === v0);
            return theTarget.apply(thisArg, argArray);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v10 = v2(v3);
        f0(v10 === v3);
        v6 = false;
    }
}
{
    let v6 = false;
    let v9 = this;
    let v0 = x => {
        f0(this === v9);
        return x;
    };
    let v1 = {
        apply: function (theTarget, thisArg, argArray) {
            v6 = true;
            f0(theTarget === v0);
            return theTarget.apply(null, argArray);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v10 = v2(v3);
        f0(v6);
        f0(v10 === v3);
        v6 = false;
    }
}
{
    let v6 = false;
    let v0 = x => {
    };
    let v4 = null;
    let v1 = {
        apply: function (theTarget, thisArg, argArray) {
            v4 = new Error();
            throw v4;
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v5 = false;
        try {
            v2();
        } catch (e) {
            f0(e === v4);
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v6 = false;
    let v4 = null;
    let v0 = x => {
        v4 = new Error();
        throw v4;
    };
    let v1 = {
        apply: function (theTarget, thisArg, argArray) {
            f0(theTarget === v0);
            return theTarget.apply(null, argArray);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        let v5 = false;
        try {
            v2();
        } catch (e) {
            f0(e === v4);
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v6 = false;
    let v4 = null;
    let v0 = new Proxy(x => x, {});
    let v1 = {
        apply: function (theTarget, thisArg, argArray) {
            f0(theTarget === v0);
            v6 = true;
            return theTarget.apply(null, argArray);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        f0(v2(v3) === v3);
        f0(v6);
        v6 = false;
    }
}
{
    let v0 = x => x;
    let v1 = {
        apply: function (theTarget, thisArg, argArray) {
            return theTarget.y(thisArg, argArray);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        f0(typeof v2 === 'function');
    }
}
{
    let v0 = function () {
    };
    let v1 = {
        apply: function (theTarget, thisArg, argArray) {
            return theTarget.apply(thisArg, argArray);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        f0(typeof v2 === 'function');
    }
}
{
    let v0 = Error;
    let v1 = {
        apply: function (theTarget, thisArg, argArray) {
            return theTarget.apply(thisArg, argArray);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        f0(typeof v2 === 'function');
    }
}
{
    let v0 = function foo() {
    }.bind({});
    let v1 = {
        apply: function (theTarget, thisArg, argArray) {
            return theTarget.apply(thisArg, argArray);
        }
    };
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        f0(typeof v2 === 'function');
    }
}
{
    let v0 = function () {
    };
    let v1 = {};
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        f0(typeof v2 === 'function');
    }
}
{
    let v0 = {};
    let v1 = {};
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        f0(typeof v2 === 'object');
    }
}
{
    let v0 = [];
    let v1 = {};
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        f0(typeof v2 === 'object');
    }
}
{
    let v0 = new String('foo');
    let v1 = {};
    let v2 = new Proxy(v0, v1);
    for (let v3 = 0; v3 < 500; v3++) {
        f0(typeof v2 === 'object');
    }
}
