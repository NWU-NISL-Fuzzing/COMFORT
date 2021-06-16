function f0(object, propertyKey, value, writable, enumerable, configurable) {
    var v0 = Object.getOwnPropertyDescriptor(object, propertyKey);
    assertFalse(v0 === undefined);
    assertTrue('value' in v0);
    assertEquals(v0.value, value);
    assertEquals(v0.writable, writable);
    assertEquals(v0.enumerable, enumerable);
    assertEquals(v0.configurable, configurable);
}
assertEquals(Object.assign.length, 2);
(function basicMultipleSources() {
    var v1 = {};
    var v2 = { bProp: 1 };
    var v3 = { cProp: 2 };
    Object.assign(v1, v2, v3);
    assertEquals(v1, {
        bProp: 1,
        cProp: 2
    });
}());
(function basicSymbols() {
    var v1 = {};
    var v2 = { bProp: 1 };
    var v4 = Symbol('aSymbol');
    v2[v4] = 2;
    Object.assign(v1, v2);
    assertEquals(1, v1.bProp);
    assertEquals(2, v1[v4]);
}());
assertThrows(function () {
    return Object.assign(null, null);
}, TypeError);
assertThrows(function () {
    return Object.assign(null, {});
}, TypeError);
assertThrows(function () {
    return Object.assign(undefined);
}, TypeError);
assertThrows(function () {
    return Object.assign();
}, TypeError);
assertTrue(Object.assign(true, {}) instanceof Boolean);
assertTrue(Object.assign(1, {}) instanceof Number);
assertTrue(Object.assign('string', {}) instanceof String);
var v5 = {};
assertSame(Object.assign(v5, {}), v5);
(function onlyEnumerablePropertiesAssigned() {
    var v6 = Object.defineProperties({}, {
        a: {
            value: 1,
            enumerable: true
        },
        b: {
            value: 2,
            enumerable: false
        }
    });
    var v7 = Object.assign({}, v6);
    assertTrue('a' in v7);
    assertFalse('b' in v7);
}());
(function testPropertiesAssignedThroughPut() {
    var v8 = false;
    Object.assign({
        set a(v) {
            v8 = v;
        }
    }, { a: true });
    assertTrue(v8);
}());
(function propertiesAssignedExistingNotAltered() {
    var v6 = {
        a: 1,
        b: 2,
        c: 3
    };
    var v7 = {
        a: 0,
        b: 0,
        c: 0
    };
    Object.defineProperty(v7, 'a', { enumerable: false });
    Object.defineProperty(v7, 'b', { configurable: false });
    Object.defineProperty(v7, 'c', {
        enumerable: false,
        configurable: false
    });
    Object.assign(v7, v6);
    f0(v7, 'a', 1, true, false, true);
    f0(v7, 'b', 2, true, true, false);
    f0(v7, 'c', 3, true, false, false);
}());
(function propertiesAssignedTypeErrorNonWritable() {
    var v6 = { a: 1 };
    var v7 = { a: 0 };
    Object.defineProperty(v7, 'a', { writable: false });
    assertThrows(function () {
        return Object.assign(v7, v6);
    }, TypeError);
    f0(v7, 'a', 0, false, true, true);
}());
(function createsStandardProperties() {
    var v6 = {
        a: 1,
        b: 2,
        c: 3,
        get d() {
            return 4;
        }
    };
    Object.defineProperty(v6, 'b', { writable: false });
    Object.defineProperty(v6, 'c', { configurable: false });
    var v7 = Object.assign({}, v6);
    f0(v7, 'a', 1, true, true, true);
    f0(v7, 'b', 2, true, true, true);
    f0(v7, 'c', 3, true, true, true);
    f0(v7, 'd', 4, true, true, true);
}());
(function propertiesCreatedDuringTraversalNotCopied() {
    var v6 = {
        get a() {
            this.b = 2;
        }
    };
    var v7 = Object.assign({}, v6);
    assertTrue('a' in v7);
    assertFalse('b' in v7);
}());
(function testStringAndSymbolPropertiesCopied() {
    var v9 = 'str-prop';
    var v6 = { 'str-prop': 1 };
    var v7 = Object.assign({}, v6);
    f0(v7, v9, 1, true, true, true);
}());
(function testExceptionsStopFirstException() {
    var v10 = function v10() {
    };
    var v11 = function v11() {
    };
    var v12 = '';
    var v6 = {
        b: 1,
        a: 1
    };
    var v7 = {
        set a(v) {
            v12 += 'a';
            throw new v10();
        },
        set b(v) {
            v12 += 'b';
            throw new v11();
        }
    };
    assertThrows(function () {
        return Object.assign(v7, v6);
    }, v11);
    assertEquals(v12, 'b');
}());
(function add_to_source() {
    var v7 = {
        set k1(v) {
            v6.k3 = 100;
        }
    };
    let v4 = (v2 = v2[5][''](v7, Error)) => {
        var v2 = [
            0,
            '0',
            5,
            'string'
        ];
        return v2[27];
    };
    Object.defineProperty(v6, 'k2', {
        value: 20,
        enumerable: false,
        configurable: true
    });
    Object.assign(v7, v6);
    assertEquals(undefined, v7.k2);
    assertEquals(undefined, v7.k3);
}());
(function reconfigure_enumerable_source() {
    var v7 = {
        set k1(v) {
            Object.defineProperty(v6, 'k2', {
                value: 20,
                enumerable: true
            });
        }
    };
    var v6 = { k1: 10 };
    Object.defineProperty(v6, 'k2', {
        value: 20,
        enumerable: false,
        configurable: true
    });
    Object.assign(v7, v6);
    assertEquals(20, v7.k2);
}());
(function propagate_assign_failure() {
    var v7 = {
        set k1(v) {
            throw 'fail';
        }
    };
    var v6 = { k1: 10 };
    assertThrows(() => Object.assign(v7, v6));
}());
(function propagate_read_failure() {
    var v7 = {};
    var v6 = {
        get k1() {
            throw 'fail';
        }
    };
    assertThrows(() => Object.assign(v7, v6));
}());