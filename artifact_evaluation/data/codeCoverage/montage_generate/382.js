function f0() {
}
function f1() {
}
function f2(value, done, result) {
    assertEquals({
        value: value,
        done: done
    }, result);
}
function f3(v0) {
    f2(undefined, true, v0.next());
    assertDoesNotThrow(function () {
        v0.next();
    });
    assertThrows(function () {
        v0.throw(new f1());
    }, v0);
}
var v0;
function* f4() {
    yield v0.next();
}
function* f5() {
    yield v0.throw(new f1());
}
v0 = f4();
assertThrows(function () {
    v0.throw(new f0());
}, f0);
f3(v0);
assertThrows(function () {
    v0.throw(new f0());
}, f0);
f3(v0);
v0 = f5();
assertThrows(function () {
    v0.throw(new f0());
}, f0);
assertThrows(function () {
    v0.throw(new f0());
}, f0);
f3(v0);
v0 = f4();
assertThrows(function () {
    v0.next();
}, TypeError);
f3(v0);
v0 = f5();
assertThrows(function () {
    v0.next();
}, TypeError);
f3(v0);
v0 = function* () {
    try {
        v0.next();
        yield 1;
    } catch (e) {
        try {
            v0.next();
            yield 2;
        } catch (e) {
            yield 3;
        }
    }
    yield 4;
}();
f2(3, false, v0.next());
f2(4, false, v0.next());
f3(v0);
{
    let v1 = function* () {
        try {
            return 42;
        } finally {
            yield 43;
        }
    };
    let v2 = v1();
    assertEquals({
        value: 43,
        done: false
    }, v2.next());
    assertEquals({
        value: 42,
        done: true
    }, v2.next());
}
{
    let v2;
    let v1 = function* () {
        try {
            return 42;
        } finally {
            v2.throw(666);
        }
    };
    v2 = v1();
    assertThrows(() => v2.next(), TypeError);
}
{
    let v2;
    let v1 = function* () {
        try {
            return 42;
        } finally {
            try {
                v2.throw(666);
            } catch (e) {
            }
        }
    };
    v2 = v1();
    assertEquals({
        value: 42,
        done: true
    }, v2.next());
}