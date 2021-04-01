var v0 = false;
var v1;
var v2 = 0;
v3 = '';
v4 = '';
v5 = '';
var v6 = '[object global]';
var v7 = ' PASSED!';
var v8 = ' FAILED! expected: ';
var v9 = false;
function f0(description, v11, v10) {
    v1[v2++] = new f1(v3, description, v11, v10);
}
function f1(n, d, e, a) {
    this.name = n;
    this.description = d;
    this.expect = e;
    this.actual = a;
    this.passed = true;
    this.reason = '';
    this.bugnumber = v5;
    this.passed = f4(this.expect, this.actual);
    if (v9) {
        f7('added ' + this.description);
    }
}
function f2() {
    if (version) {
        if (v4 == 'ECMA_1') {
            version('130');
        }
        if (v4 == 'JS_1.3') {
            version('130');
        }
        if (v4 == 'JS_1.2') {
            version('120');
        }
        if (v4 == 'JS_1.1') {
            version('110');
        }
    }
    if (v5) {
        f7('BUGNUMBER: ' + v5);
    }
    v1 = new Array();
    v2 = 0;
}
function f3() {
    for (v2 = 0; v2 < v1.length; v2++) {
        v1[v2].passed = f5(v1[v2].expect, v1[v2].actual, v1[v2].description + ' = ' + v1[v2].actual);
        v1[v2].reason += v1[v2].passed ? '' : 'wrong value ';
    }
    f9();
    return v1;
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
    var v13 = string;
    v13 += v12 ? v7 : v8 + v11;
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
    var v14;
    if (v14 != undefined) {
        v14();
    }
}
function f10() {
    for (var v15 = 0; v15 < v1.length; v15++) {
        if (!v1[v15].passed) {
            print(v1[v15].description + ' = ' + v1[v15].actual + ' expected: ' + v1[v15].expect);
        }
    }
}
var v16 = 86400000;
var v17 = 24;
var v18 = 60;
var v19 = 60;
var v20 = 1000;
var v21 = 60000;
var v22 = 3600000;
var v23 = f11();
var v24 = v23 * v22;
var v25 = 0;
var v26 = 946684800000;
var v27 = -2208988800000;
var v28 = v26 + 31 * v16 + 28 * v16;
var v29 = v26 + f14(2000) + f14(2001) + f14(2002) + f14(2003) + f14(2004);
var v30 = new Date();
var v31 = v30.valueOf();
function f11() {
    return -new Date(2000, 1, 1).getTimezoneOffset() / 60;
}
function f12(v32) {
    return Math.floor(v32 / v16);
}
function f13(v58) {
    if (v58 % 4 != 0) {
        return 365;
    }
    if (v58 % 4 == 0 && v58 % 100 != 0) {
        return 366;
    }
    if (v58 % 100 == 0 && v58 % 400 != 0) {
        return 365;
    }
    if (v58 % 400 == 0) {
        return 366;
    } else {
        return 'ERROR: DaysInYear(' + v58 + ') case not covered';
    }
}
function f14(v58) {
    return f13(v58) * v16;
}
function f15(v32) {
    return Math.floor(v32 / v16);
}
function f16(v32) {
    if (v32 < 0) {
        return v32 % v16 + v16;
    } else {
        return v32 % v16;
    }
}
function f17(v32) {
}
function f18(v58) {
    return v16 * f19(v58);
}
function f19(v58) {
    return 365 * (v58 - 1970) + Math.floor((v58 - 1969) / 4) - Math.floor((v58 - 1901) / 100) + Math.floor((v58 - 1601) / 400);
}
function f20(v32) {
    if (f13(f21(v32)) == 365) {
        return 0;
    }
    if (f13(f21(v32)) == 366) {
        return 1;
    } else {
        return 'ERROR: InLeapYear(' + v32 + ') case not covered';
    }
}
function f21(v32) {
    v32 = Number(v32);
    var v33 = v32 < 0 ? -1 : 1;
    var v34 = v33 < 0 ? 1969 : 1970;
    for (var v35 = v32;;) {
        v35 -= v33 * f14(v34);
        if (v33 < 0) {
            if (v33 * v35 <= 0) {
                break;
            } else {
                v34 += v33;
            }
        } else {
            if (v33 * v35 < 0) {
                break;
            } else {
                v34 += v33;
            }
        }
    }
    return v34;
}
function f22(v32) {
    var v36 = f23(v32);
    var v37 = f20(v32);
    if (0 <= v36 && v36 < 31) {
        return 0;
    }
    if (31 <= v36 && v36 < 59 + v37) {
        return 1;
    }
    if (59 + v37 <= v36 && v36 < 90 + v37) {
        return 2;
    }
    if (90 + v37 <= v36 && v36 < 120 + v37) {
        return 3;
    }
    if (120 + v37 <= v36 && v36 < 151 + v37) {
        return 4;
    }
    if (151 + v37 <= v36 && v36 < 181 + v37) {
        return 5;
    }
    if (181 + v37 <= v36 && v36 < 212 + v37) {
        return 6;
    }
    if (212 + v37 <= v36 && v36 < 243 + v37) {
        return 7;
    }
    if (243 + v37 <= v36 && v36 < 273 + v37) {
        return 8;
    }
    if (273 + v37 <= v36 && v36 < 304 + v37) {
        return 9;
    }
    if (304 + v37 <= v36 && v36 < 334 + v37) {
        return 10;
    }
    if (334 + v37 <= v36 && v36 < 365 + v37) {
        return 11;
    } else {
        return 'ERROR: MonthFromTime(' + v32 + ') not known';
    }
}
function f23(v32) {
    return f12(v32) - f19(f21(v32));
}
function f24(v32) {
    var v36 = f23(v32);
    var v38 = f22(v32);
    if (v38 == 0) {
        return v36 + 1;
    }
    if (v38 == 1) {
        return v36 - 30;
    }
    if (v38 == 2) {
        return v36 - 58 - f20(v32);
    }
    if (v38 == 3) {
        return v36 - 89 - f20(v32);
    }
    if (v38 == 4) {
        return v36 - 119 - f20(v32);
    }
    if (v38 == 5) {
        return v36 - 150 - f20(v32);
    }
    if (v38 == 6) {
        return v36 - 180 - f20(v32);
    }
    if (v38 == 7) {
        return v36 - 211 - f20(v32);
    }
    if (v38 == 8) {
        return v36 - 242 - f20(v32);
    }
    if (v38 == 9) {
        return v36 - 272 - f20(v32);
    }
    if (v38 == 10) {
        return v36 - 303 - f20(v32);
    }
    if (v38 == 11) {
        return v36 - 333 - f20(v32);
    }
    return 'ERROR: DateFromTime(' + v32 + ') not known';
}
function f25(v32) {
    var v39 = (f12(v32) + 4) % 7;
    return v39 < 0 ? 7 + v39 : v39;
}
function f26(v32) {
    var v40 = Math.floor(v32 / v22) % v17;
    return v40 < 0 ? v17 + v40 : v40;
}
function f27(v32) {
    var v41 = Math.floor(v32 / v21) % v18;
    return v41 < 0 ? v18 + v41 : v41;
}
function f28(v32) {
    var v42 = Math.floor(v32 / v20) % v19;
    return v42 < 0 ? v19 + v42 : v42;
}
function f29(v32) {
    var v43 = v32 % v20;
    return v43 < 0 ? v20 + v43 : v43;
}
function f30() {
    return v23 * v22;
}
function f31(v32) {
    return v32 - f30() - f32(v32 - f30());
}
function f32(v32) {
    v32 = v32 - f30();
    var v44 = f35(v32) + 2 * v22;
    var v45 = f36(v32) + 2 * v22;
    if (v32 >= v44 && v32 < v45) {
        return v22;
    } else {
        return 0;
    }
    print(new Date(f31(v44 + f30())));
    return f31(v44 + f30());
}
function f33(v32) {
    var v34 = f21(v32);
    var v37 = f20(v32);
    var v46 = f18(v34) + f40(0, v37) + f40(1, v37) + f40(2, v37);
    for (var v47 = v46; f25(v47) > 0; v47 += v16) {
        ;
    }
    return v47;
}
function f34(v32) {
    var v34 = f21(v32);
    var v37 = f20(v32);
    for (var v48 = f18(v34), v49 = 0; v49 < 9; v49++) {
        v48 += f40(v49, v37);
    }
    for (var v50 = v48 + 30 * v16; f25(v50) > 0; v50 -= v16) {
        ;
    }
    return v50;
}
function f35(v32) {
    var v34 = f21(v32);
    var v37 = f20(v32);
    var v51 = f18(v34) + f40(0, v37) + f40(1, v37);
    var v52 = 0;
    var v53 = true;
    for (var v54 = v51; v53; v54 += v16) {
        if (f25(v54) == 0) {
            if (++v52 == 2)
                v53 = false;
        }
    }
    return v54;
}
function f36(v32) {
    var v34 = f21(v32);
    var v37 = f20(v32);
    for (var v55 = f18(v34), v49 = 0; v49 < 10; v49++) {
        v55 += f40(v49, v37);
    }
    for (var v47 = v55; f25(v47) > 0; v47 += v16) {
        ;
    }
    return v47;
}
function f37(v32) {
    return v32 + f30() + f32(v32);
}
function f38(v56, v41, v42, v43) {
    if (isNaN(v56) || isNaN(v41) || isNaN(v42) || isNaN(v43)) {
        return Number.NaN;
    }
    v56 = f43(v56);
    v41 = f43(v41);
    v42 = f43(v42);
    v43 = f43(v43);
    return v56 * v22 + v41 * v21 + v42 * v20 + v43;
}
function f39(v34, v38, v57) {
    if (isNaN(v34) || isNaN(v38) || isNaN(v57)) {
        return Number.NaN;
    }
    v34 = f43(v34);
    v38 = f43(v38);
    v57 = f43(v57);
    var v33 = v34 < 1970 ? -1 : 1;
    var v32 = v34 < 1970 ? 1 : 0;
    var v58 = v34 < 1970 ? 1969 : 1970;
    var v59 = v34 + Math.floor(v38 / 12);
    var v60 = v38 % 12;
    if (v34 < 1970) {
        for (v58 = 1969; v58 >= v34; v58 += v33) {
            v32 += v33 * f14(v58);
        }
    } else {
        for (v58 = 1970; v58 < v34; v58 += v33) {
            v32 += v33 * f14(v58);
        }
    }
    var v37 = f20(v32);
    for (var v49 = 0; v49 < v38; v49++) {
        v32 += f40(v49, v37);
    }
    if (f21(v32) != v59) {
        return Number.NaN;
    }
    if (f22(v32) != v60) {
        return Number.NaN;
    }
    if (f24(v32) != 1) {
        return Number.NaN;
    }
    return f12(v32) + v57 - 1;
}
function f40(v38, v37) {
    if (v38 == 3 || v38 == 5 || v38 == 8 || v38 == 10) {
        return 30 * v16;
    }
    if (v38 == 0 || v38 == 2 || v38 == 4 || v38 == 6 || v38 == 7 || v38 == 9 || v38 == 11) {
        return 31 * v16;
    }
    return v37 == 0 ? 28 * v16 : 29 * v16;
}
function f41(v36, time) {
    if (v36 == Number.POSITIVE_INFINITY || v36 == Number.NEGATIVE_INFINITY || v36 == Number.NaN) {
        return Number.NaN;
    }
    if (time == Number.POSITIVE_INFINITY || time == Number.POSITIVE_INFINITY || v36 == Number.NaN) {
        return Number.NaN;
    }
    return v36 * v16 + time;
}
function f42(v32) {
    if (isNaN(v32)) {
        return Number.NaN;
    }
    if (Math.abs(v32) > 8640000000000000) {
        return Number.NaN;
    }
    return f43(v32);
}
function f43(v32) {
    v32 = Number(v32);
    if (isNaN(v32)) {
        return Number.NaN;
    }
    if (v32 == 0 || v32 == -0 || v32 == Number.POSITIVE_INFINITY || v32 == Number.NEGATIVE_INFINITY) {
        return 0;
    }
    var v33 = v32 < 0 ? -1 : 1;
    return v33 * Math.floor(Math.abs(v32));
}
function f44(o) {
    var v61;
    for (v61 in o) {
        print(v61 + ': ' + o[v61]);
    }
}
function f45() {
    return Packages.com.netscape.javascript.Context.getCurrentContext();
}
function f46(v15) {
    value && [];
    this.log[v19[2]]++;
    new Date('a', 11);
}
