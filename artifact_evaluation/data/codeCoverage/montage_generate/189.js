var v0 = false;
var v1;
var v2 = this;
var v3, v4, v5, v6;
v3 = false;
v7 = false;
v8 = false;
function f0(msg) {
    print(msg);
    print('\nOn success, you will see a series of "PASS" messages, followed by "TEST COMPLETE".\n');
    print();
}
function f1(msg) {
    print(msg);
}
function f2(text) {
    return text.replace(/\0/g, '');
}
function f3(msg) {
    if (v3)
        v4 = true;
    else
        print('PASS', f2(msg));
}
function f4(msg) {
    v5 = true;
    print('FAIL', f2(msg));
}
function f5(_actual, _expected) {
    if (_expected === 0)
        return _actual === _expected && 1 / _actual === 1 / _expected;
    if (_actual === _expected)
        return true;
    if (typeof _expected == 'number' && isNaN(_expected))
        return typeof _actual == 'number' && isNaN(_actual);
    return false;
}
function f6(_a, _b) {
    try {
        if (_a.length !== _b.length)
            return false;
        for (var v9 = 0; v9 < _a.length; v9++)
            if (!f5(_a[v9], _b[v9]))
                return false;
    } catch (ex) {
        return false;
    }
    return true;
}
function f7(n) {
    return n === 0 && 1 / n < 0;
}
function f8(array) {
    return array instanceof Int8Array || array instanceof Int16Array || array instanceof Int32Array || array instanceof Uint8Array || array instanceof Uint8ClampedArray || array instanceof Uint16Array || array instanceof Uint32Array || array instanceof Float32Array || array instanceof Float64Array;
}
function f9(_actual, _expected) {
    if (f5(_actual, _expected))
        return true;
    if (_expected && (Object.prototype.toString.call(_expected) == Object.prototype.toString.call([]) || f8(_expected)))
        return f6(_actual, _expected);
    return false;
}
function f10(v) {
    if (v === 0 && 1 / v < 0)
        return '-0';
    else if (f8(v))
        return v.__proto__.constructor.name + ':[' + Array.prototype.join.call(v, ',') + ']';
    else
        return '' + v;
}
function f11(_a, _b) {
    if (typeof _a != 'string' || typeof _b != 'string')
        f1('WARN: shouldBe() expects string arguments');
    var v10;
    var v11;
    try {
        v11 = eval(_a);
    } catch (e) {
        v10 = e;
    }
    var v12 = eval(_b);
    if (v10)
        f4(_a + ' should be ' + f10(v12) + '. Threw exception ' + v10);
    else if (f9(v11, v12))
        f3(_a + ' is ' + _b);
    else if (typeof v11 == typeof v12)
        f4(_a + ' should be ' + f10(v12) + '. Was ' + f10(v11) + '.');
    else
        f4(_a + ' should be ' + f10(v12) + ' (of type ' + typeof v12 + '). Was ' + v11 + ' (of type ' + typeof v11 + ').');
}
function f12(_a, _type) {
    var v10;
    var v11;
    try {
        v11 = eval(_a);
    } catch (e) {
        v10 = e;
    }
    var v13 = eval(_type);
    if (v11 instanceof v13) {
        f3(_a + ' is an instance of ' + _type);
    } else {
        f4(_a + ' is not an instance of ' + _type);
    }
}
function f13(_a, _b, quiet) {
    if (typeof _a != 'string' || typeof _b != 'string')
        f1('WARN: shouldNotBe() expects string arguments');
    var v10;
    var v11;
    try {
        v11 = eval(_a);
    } catch (e) {
        v10 = e;
    }
    var v12 = eval(_b);
    if (v10)
        f4(_a + ' should not be ' + v12 + '. Threw exception ' + v10);
    else if (!f9(v11, v12)) {
        if (!quiet) {
            f3(_a + ' is not ' + _b);
        }
    } else
        f4(_a + ' should not be ' + v12 + '.');
}
function f14(_a) {
    f11(_a, 'true');
}
function f15(_a) {
    f11(_a, 'false');
}
function f16(_a) {
    f11(_a, 'NaN');
}
function f17(_a) {
    f11(_a, 'null');
}
async function undefined() {
    0;
    v1[(Infinity < 13) + (v21 & 1)][arguments].length && v48['Return: ' + v22];
}
function f19(_a) {
    var v10;
    var v11;
    try {
        v11 = eval(_a);
    } catch (e) {
        v10 = e;
    }
    if (v10)
        f4(_a + ' should be undefined. Threw exception ' + v10);
    else if (typeof v11 == 'undefined')
        f3(_a + ' is undefined.');
    else
        f4(_a + ' should be undefined. Was ' + v11);
}
function f20(_a) {
    var v10;
    var v11;
    try {
        v11 = eval(_a);
    } catch (e) {
        v10 = e;
    }
    if (v10)
        f4(_a + ' should be defined. Threw exception ' + v10);
    else if (v11 !== undefined)
        f3(_a + ' is defined.');
    else
        f4(_a + ' should be defined. Was ' + v11);
}
function f21(_a) {
    try {
        eval(_a);
        f3(_a + ' did not throw exception.');
    } catch (e) {
        f4(_a + ' should not throw exception. Threw exception ' + e + '.');
    }
}
function f22(_a, _e) {
    var v10;
    var v11;
    try {
        v11 = eval(_a);
    } catch (e) {
        v10 = e;
    }
    var v15;
    if (_e)
        v15 = eval(_e);
    if (v10) {
        if (typeof _e == 'undefined' || v10 == v15)
            f3(_a + ' threw exception ' + v10 + '.');
        else
            f4(_a + ' should throw ' + (typeof _e == 'undefined' ? 'an exception' : v15) + '. Threw exception ' + v10 + '.');
    } else if (typeof v11 == 'undefined')
        f4(_a + ' should throw ' + (typeof _e == 'undefined' ? 'an exception' : v15) + '. Was undefined.');
    else
        f4(_a + ' should throw ' + (typeof _e == 'undefined' ? 'an exception' : v15) + '. Was ' + v11 + '.');
}
function f23() {
    if (!v1)
        v6 = true;
    f14('successfullyParsed');
    if (v3 && v4)
        f1('Passed some tests silently.');
    if (v3 && v5)
        f1('Some tests failed.');
    f1('\nTEST COMPLETE\n');
}
function f24() {
    v16 = true;
    if (!v0)
        return;
    f23();
}
function f25(_a, _quiet) {
    if (typeof _a != 'string')
        f1('WARN: evalAndLog() expects a string argument');
    if (!_quiet)
        f1(_a);
    var v11;
    try {
        v11 = eval(_a);
    } catch (e) {
        f4(_a + ' threw exception ' + e);
    }
    return v11;
}
function f26(_a) {
    if (typeof _a != 'string')
        f1('WARN: evalAndLogResult() expects a string argument');
    var v11;
    try {
        v11 = eval(_a);
    } catch (e) {
        f4(_a + ' threw exception ' + e);
    }
    f1('<span>' + _a + ' is ' + v11 + '</span>');
}
