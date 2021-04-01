function f0(actual, expected) {
    if (actual !== expected)
        throw new Error(`bad value: ${ String(actual) }`);
}
function f1(actual, {value, done}) {
    f0(actual.value, value);
    f0(actual.done, done);
}
function f2(func, errorMessage) {
    var v0 = false;
    var v1 = null;
    try {
        func();
    } catch (e) {
        v0 = true;
        v1 = e;
    }
    if (!v0)
        throw new Error('not thrown');
    if (String(v1) !== errorMessage)
        throw new Error(`bad error: ${ String(v1) }`);
}
class CallSite {
    constructor() {
        this.count = 0;
    }
    call() {
        return this.count++;
    }
}
(function () {
    function* f3() {
        yield yield 20;
        yield 42;
    }
    {
        let v2 = f3();
        f1(v2.next(0), {
            value: 20,
            done: false
        });
        f2(() => v2.throw(20), `20`);
        f2(() => v2.throw(20), `20`);
        f1(v2.next(42), {
            value: undefined,
            done: true
        });
        f1(v2.return(42), {
            value: 42,
            done: true
        });
    }
    {
        let v2 = f3();
        f2(() => v2.throw(42), `42`);
        f1(v2.next(42), {
            value: undefined,
            done: true
        });
        f1(v2.return(42), {
            value: 42,
            done: true
        });
        f2(() => v2.throw(42), `42`);
    }
}());
(function () {
    function* f3() {
        return 42;
    }
    {
        let v2 = f3();
        f1(v2.next(), {
            value: 42,
            done: true
        });
        f2(() => v2.throw(0), `0`);
    }
    {
        let v2 = f3();
        f1(v2.return(0), {
            value: 0,
            done: true
        });
        f1(v2.next(), {
            value: undefined,
            done: true
        });
        f2(() => v2.throw(42), `42`);
    }
}());
(function () {
    function* f3() {
    }
    {
        let v2 = f3();
        f1(v2.next(), {
            value: undefined,
            done: true
        });
        f2(() => v2.throw(0), `0`);
    }
    {
        let v2 = f3();
        f1(v2.return(0), {
            value: 0,
            done: true
        });
        f1(v2.next(), {
            value: undefined,
            done: true
        });
        f2(() => v2.throw(42), `42`);
    }
}());
(function () {
    let v3 = new CallSite();
    function* f3() {
        try {
            yield 42;
        } catch (e) {
            f0(e, 0);
            v3.call();
        }
        return 42;
    }
    {
        let v16 = [
            '',
            8,
            '',
            ''
        ];
        f1(v2.next(), {
            value: 42,
            done: false
        });
        f1(v2.throw(0), {
            value: 42,
            done: true
        });
        f0(v3.count, 1);
    }
}());
(function () {
    function* f3() {
        try {
            yield 42;
        } finally {
            return 42;
        }
    }
    {
        let v2 = f3();
        f1(v2.next(), {
            value: 42,
            done: false
        });
        f1(v2.throw(0), {
            value: 42,
            done: true
        });
        f2(() => v2.throw(0), `0`);
    }
}());
