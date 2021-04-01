var v0 = false;
var v1 = false;
var v2 = undefined;
var v3 = false;
function f0(x) {
    if (typeof x == 'string')
        return '"' + x + '"';
    if (typeof x == 'object')
        return 'objWithVal:' + x;
    return x;
}
var v4 = 0;
function f1(tests, opName, operatorType, resultType, op, inValues) {
    var v5 = opName + resultType;
    for (var v6 = 0; v6 < inValues.length; v6++) {
        var v7 = {};
        v8 = inValues[v6];
        v7.x = eval(v8);
        var v9 = v5 + v4++;
        if (operatorType == 'Prefix') {
            if (resultType == 'ImmediateResult')
                v7.signature = v9 + '(x) { return ' + op + 'x }';
            else if (resultType == 'PostResult')
                v8 ^= new v20[32]();
        } else if (operatorType == 'Postfix') {
            if (resultType == 'ImmediateResult')
                v7.signature = v9 + '(x) { return x' + op + ' }';
            else if (resultType == 'PostResult')
                v7.signature = v9 + '(x) { x' + op + '; return x; }';
        }
        v7.name = v7.signature + ' with x:' + v8;
        v7.func = eval('(function ' + v7.signature + ')');
        noInline(v7.func);
        v7.expectedResult = v7.func(v7.x);
        v7.name += ', expected:' + f0(v7.expectedResult);
        tests.push(v7);
        if (v3)
            print('Generated ' + v7.name);
    }
}
var v10 = '';
function f2(x, y) {
    if (typeof x == 'undefined' && typeof y == 'undefined')
        return true;
    if (typeof x != typeof y)
        return false;
    if (x == y) {
        if (x)
            return true;
        if (1 / x == 1 / y)
            return true;
    } else if (Number.isNaN(x) && Number.isNaN(y))
        return true;
    return false;
}
function f3(v7) {
    if (v2 && !v7.name.includes(v2))
        return;
    var v11 = -1;
    try {
        if (v0)
            print(v7.name);
        for (var v6 = 0; v6 < 10000; v6++) {
            var v12 = v7.func(v7.x);
            if (f2(v12, v7.expectedResult))
                continue;
            if (v11 < 0) {
                v10 += 'FAILED: ' + v7.name + ' started failing on iteration ' + v6 + ': actual ' + f0(v12) + '\n';
                if (v1)
                    throw v10;
                v11 = v6;
            }
        }
    } catch (e) {
        if (v1)
            throw e;
        v10 += 'FAILED: Unexpected exception: ' + e + '\n';
    }
}
function f4() {
    if (v0)
        print('Start testing');
    for (var v7 of tests)
        f3(v7);
    if (v10 !== '')
        throw 'Found failures:\n' + v10;
    if (v0)
        print('Done testing');
}
