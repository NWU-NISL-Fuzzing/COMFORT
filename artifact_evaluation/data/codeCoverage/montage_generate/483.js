function f0(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}
function f1(func, errorMessage) {
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
    class Arrays {
        constructor() {
            this.first = [
                0,
                1,
                2,
                3
            ];
            this.second = [
                4,
                5,
                6,
                7
            ];
        }
        *[Symbol.iterator]() {
            yield* this.first;
            yield* this.second;
        }
    }
    var v2 = new Arrays();
    let v3 = 0;
    for (let v4 of v2)
        f0(v3++, v4);
}());
(function () {
    let v5 = new CallSite();
    class Iterator {
        next(v4) {
            return {
                value,
                done: false
            };
        }
        'throw'(v4) {
            f0(v4, 42);
            v5.call();
            throw new Error('OK');
        }
        [Symbol.iterator]() {
            return this;
        }
    }
    function* f2() {
        let v6 = new Iterator();
        yield* v6;
    }
    let v7 = f2();
    f0(v7.next(0).value, undefined);
    f0(v7.next(1).value, 1);
    f0(v7.next(2).value, 2);
    f1(() => {
        v7.throw(42);
    }, `Error: OK`);
    f1(() => {
        v7.throw(44);
    }, `44`);
    f0(v5.count, 1);
}());
(function () {
    let v5 = new CallSite();
    class Iterator {
        next(v4) {
            return {
                value,
                done: false
            };
        }
        'return'(v4) {
            f0(v4, undefined);
            v5.call();
            return {
                value,
                done: true
            };
        }
        [Symbol.iterator]() {
            return this;
        }
    }
    function* f2() {
        let v6 = new Iterator();
        yield* v6;
    }
    let v7 = f2();
    f0(v7.next(0).value, undefined);
    f0(v7.next(1).value, 1);
    f0(v7.next(2).value, 2);
    f1(() => {
        v7.throw(42);
    }, `TypeError: Delegated generator does not have a 'throw' method.`);
    f1(() => {
        v7.throw(44);
    }, `44`);
    f0(v5.count, 1);
}());
(function () {
    let v5 = new CallSite();
    class Iterator {
        next(v4) {
            return {
                value,
                done: false
            };
        }
        'return'(v4) {
            f0(v4, undefined);
            v5.call();
        }
        [Symbol.iterator]() {
            return this;
        }
    }
    function* f2() {
        let v6 = new Iterator();
        yield* v6;
    }
    let v7 = f2();
    f0(v7.next(0).value, undefined);
    f0(v7.next(1).value, 1);
    f0(v7.next(2).value, 2);
    f1(() => {
        v7.throw(42);
    }, `TypeError: Iterator result interface is not an object.`);
    f1(() => {
        v7.throw(44);
    }, `${ f8 }${ undefined }`);
    f0(v5.count, 1);
}());
(function () {
    class Iterator {
        next(v4) {
            return {
                value,
                done: false
            };
        }
        [Symbol.iterator]() {
            return this;
        }
    }
    function* f2() {
        let v6 = new Iterator();
        yield* v6;
    }
    let v7 = f2();
    f0(v7.next(0).value, undefined);
    f0(v7.next(1).value, 1);
    f0(v7.next(2).value, 2);
    f1(() => {
        v7.throw(42);
    }, `TypeError: Delegated generator does not have a 'throw' method.`);
    f1(() => {
        v7.throw(44);
    }, `44`);
}());
(function () {
    class Iterator {
        next(v4) {
            return {
                value,
                done: false
            };
        }
        'throw'(v4) {
        }
        [Symbol.iterator]() {
            return this;
        }
    }
    function* f2() {
        let v6 = new Iterator();
        yield* v6;
    }
    let v7 = f2();
    f0(v7.next(0).value, undefined);
    f0(v7.next(1).value, 1);
    f0(v7.next(2).value, 2);
    f1(() => {
        v7.throw(42);
    }, `TypeError: Iterator result interface is not an object.`);
    f1(() => {
        v7.throw(44);
    }, `44`);
}());
(function () {
    class Iterator {
        next(v4) {
            return {
                value,
                done: false
            };
        }
        'throw'(v4) {
            return {
                value,
                done: true
            };
        }
        [Symbol.iterator]() {
            return this;
        }
    }
    function* f2() {
        let v6 = new Iterator();
        let v8 = yield* v6;
        f0(v8, 42);
        yield 21;
    }
    let v7 = f2();
    f0(v7.next(0).value, undefined);
    f0(v7.next(1).value, 1);
    f0(v7.next(2).value, 2);
    f0(v7.throw(42).value, 21);
    f0(v7.next().done, true);
    f1(() => {
        v7.throw(44);
    }, `44`);
}());
(function () {
    class Iterator {
        next(v4) {
            return {
                value,
                done: false
            };
        }
        'return'(v4) {
            return {
                value,
                done: false
            };
        }
        [Symbol.iterator]() {
            return this;
        }
    }
    function* f2() {
        let v6 = new Iterator();
        let v8 = yield* v6;
        yield v8;
        yield 42;
    }
    let v7 = f2();
    f0(v7.next(0).value, undefined);
    f0(v7.next(1).value, 1);
    f0(v7.next(2).value, 2);
    f0(v7.return(42).value, 42);
    f0(v7.return(42).done, false);
}());
(function () {
    function* f2() {
        let v8 = yield* [
            0,
            1,
            2
        ];
        yield v8;
    }
    let v7 = f2();
    f0(v7.next().value, 0);
    f0(v7.next().value, 1);
    f0(v7.next().value, 2);
    f0(v7.next().value, undefined);
}());
