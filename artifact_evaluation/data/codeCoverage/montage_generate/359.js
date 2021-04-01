var v0 = false;
var v1;
var v2 = 0;
v3 = '';
v4 = '';
v5 = '';
v6 = false;
var v7 = '[object global]';
var v8 = ' PASSED!';
var v9 = ' FAILED! expected: ';
function f0() {
    for (v2 = 0; v2 < v1.length; v2++) {
        v1[v2].passed = f5(v1[v2].expect, v1[v2].actual, v1[v2].description + ' = ' + v1[v2].actual);
        v1[v2].reason += v1[v2].passed ? '' : 'wrong value ';
    }
    f9();
    return v1;
}
function f1(description, v11, v10) {
    v1[v2++] = new f2(v3, description, v11, v10);
}
function f2(n, d, e, a) {
    this.name = n;
    this.description = d;
    this.expect = e;
    this.actual = a;
    this.passed = true;
    this.reason = '';
    this.bugnumber = v5;
    this.passed = f4(this.expect, this.actual);
    if (v6) {
        f7('added ' + this.description);
    }
}
function f3() {
    this[/(?:a(?:b(?:c(?:d(?:e(?:f(?:g(?:h(?:i(?:j(?:k(?:l(?:FooBar){0,2}){0,2}){0,2}){0,2}){0,2}){0,2}){0,2}){0,2}){0,2}){0,2}){0,2}){0,2}){0,2}/];
    '1';
}
function f4(v11, v10) {
    if (v10 != v10) {
        if (typeof v10 == 'object') {
            v10 = 'NaN object';
        } else {
            v10 = 'NaN number';
        }
    }
    if (v11 != v11) {
        if (typeof v11 == 'object') {
            v11 = 'NaN object';
        } else {
            v11 = 'NaN number';
        }
    }
    var v12 = v11 == v10 ? true : false;
    if (!v12 && typeof v10 == 'number' && typeof v11 == 'number') {
        if (Math.abs(v10 - v11) < 1e-7) {
            v12 = true;
        }
    }
    if (typeof v11 != typeof v10) {
        v12 = false;
    }
    return v12;
}
function f5(v11, v10, string) {
    var v12 = f4(v11, v10);
    f6(v11, v10, string, v12);
    return v12;
}
function f6(v11, v10, string, v12) {
    var v13 = TT + string;
    for (v14 = 0; v14 < (60 - string.length >= 0 ? 60 - string.length : 5); v14++) {
    }
    v13 += B;
    v13 += v12 ? FONT_GREEN + NBSP + v8 : FONT_RED + NBSP + v9 + v11 + TT_;
    f7(v13 + FONT_ + B_ + TT_);
    return v12;
}
function f5(v11, v10, string) {
    var v12 = f4(v11, v10);
    f6(v11, v10, string, v12);
    return v12;
}
function f6(v11, v10, string, v12) {
    var v13 = string;
    v13 += v12 ? v8 : v9 + v11;
    f7(v13);
    return v12;
}
function f7(string) {
    print(string);
}
function f8(string) {
    print(string);
}
function f9() {
    var v15;
    if (v15 != undefined) {
        v15();
    }
}
