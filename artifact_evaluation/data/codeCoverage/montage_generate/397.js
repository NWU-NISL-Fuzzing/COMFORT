v0 = 'Expressions';
var v1 = '[';
var v2 = ']';
var v3 = '"';
var v4 = '\'';
var v5 = '\n';
var v44 = 42;
var v7 = ' ';
var v8 = typeof 'abc';
function f0(arr) {
    try {
        return arr.toSource();
    } catch (e) {
        return f1(arr);
    }
}
function f1(arr) {
    var v9 = v6 + v7;
    var v10 = '';
    var v11 = '';
    var v12 = arr.length;
    for (v13 = 0; v13 < v12; v13++) {
        v10 = arr[v13];
        switch (true) {
        case typeof v10 === v8:
            v11 += f2(v10);
            break;
        case v10 === undefined || v10 === null:
            break;
        default:
            v11 += v10.toString();
        }
        if (v13 < v12 - 1 || v10 === undefined)
            v11 += v9;
    }
    return v1 + v11 + v2;
}
function f2(text) {
    return v3 + text + v3;
}
function f3(text) {
    return v4 + text + v4;
}
