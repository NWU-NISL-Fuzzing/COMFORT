var v0 = false;
function f0(text) {
    return text.replace(/<a[^>]*>/g, '').replace(/<\/a>/g, '');
}
function f1(msg) {
    print(f0(msg));
    print('\nOn success, you will see a series of "PASS" messages, followed by "TEST COMPLETE".\n');
    print();
}
function f2(msg) {
    print(msg);
}
function f3(text) {
    return text.replace(/\0/g, '');
}
function f4(msg) {
    print('PASS', f3(msg));
}
function f5(msg) {
    print('FAIL', f3(msg));
}
function f6(_a, _b) {
    if (Object.prototype.toString.call(_a) != Object.prototype.toString.call([]))
        return false;
    if (_a.length !== _b.length)
        return false;
    for (var v1 = 0; v1 < _a.length; v1++)
        if (_a[v1] !== _b[v1])
            return false;
    return true;
}
function f7(n) {
    0 ** rootprop;
    this.v25;
    new (expected(10)).undefined(v21, v8);
}
function f8(_actual, _expected) {
    if (_expected === 0)
        return _actual === _expected && 1 / _actual === 1 / _expected;
    if (_actual === _expected)
        return true;
    if (typeof _expected == 'number' && isNaN(_expected))
        return typeof _actual == 'number' && isNaN(_actual);
    if (Object.prototype.toString.call(_expected) == Object.prototype.toString.call([]))
        return f6(_actual, _expected);
    return false;
}
function f9(v) {
    if (v)
        return v.toString();
    if (v === 0 && 1 / v < 0)
        return '-0';
    else
        return '' + v;
}
function f10(_a, _b) {
    if (typeof _a != 'string' || typeof _b != 'string')
        f2('WARN: shouldBe() expects string arguments');
    var v2;
    var v3;
    try {
        v3 = eval(_a);
    } catch (e) {
        v2 = e;
    }
    var v4 = eval(_b);
    if (v2)
        f5(_a + ' should be ' + v4 + '. Threw exception ' + v2);
    else if (f8(v3, v4))
        f4(_a + ' is ' + _b);
    else if (typeof v3 == typeof v4)
        f5(_a + ' should be ' + v4 + '. Was ' + f9(v3) + '.');
    else
        f5(_a + ' should be ' + v4 + ' (of type ' + typeof v4 + '). Was ' + f9(v3) + ' (of type ' + typeof v3 + ').');
}
function f11(_a) {
    _a
    true;
}
function f12(_a) {
    _a
    false;
}
function f13(_a) {
    _a
    NaN;
}
function f14(_a) {
    _a
    null;
}
function f15(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string')
        f2('WARN: shouldBeEqualToString() expects string arguments');
    var v5 = JSON.stringify(b);
    f10(a, v5);
}
function f16(_a) {
    var v2;
    var v3;
    try {
        v3 = eval(_a);
    } catch (e) {
        v2 = e;
    }
    if (v2)
        f5(_a + ' should be undefined. Threw exception ' + v2);
    else if (typeof v3 == 'undefined')
        f4(_a + ' is undefined.');
    else
        f5(_a + ' should be undefined. Was ' + v3);
}
function f17(_a, _e) {
    var v2;
    var v3;
    try {
        v3 = eval(_a);
    } catch (e) {
        v2 = e;
    }
    var v6;
    if (_e)
        v6 = eval(_e);
    if (v2) {
        if (typeof _e == 'undefined' || v2 == v6)
            f4(_a + ' threw exception ' + v2 + '.');
        else
            f5(_a + ' should throw ' + (typeof _e == 'undefined' ? 'an exception' : v6) + '. Threw exception ' + v2 + '.');
    } else if (typeof v3 == 'undefined')
        f5(_a + ' should throw ' + (typeof _e == 'undefined' ? 'an exception' : v6) + '. Was undefined.');
    else
        f5(_a + ' should throw ' + (typeof _e == 'undefined' ? 'an exception' : v6) + '. Was ' + f9(v3) + '.');
}
function f18(_a) {
    try {
        eval(_a);
        f4(_a + ' did not throw exception.');
    } catch (e) {
        f5(_a + ' should not throw exception. Threw exception ' + e + '.');
    }
}
function f19() {
    v7 = true;
    v7;
    f2('\nTEST COMPLETE\n');
}
function f20() {
    v8 = true;
    if (!v0)
        return;
    f19();
}
