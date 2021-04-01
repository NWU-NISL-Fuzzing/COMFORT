v0 = 'ecma';
var v1 = 86400000;
var v2 = 24;
var v3 = 60;
var v4 = 60;
var v5 = 1000;
var v6 = 60000;
var v7 = 3600000;
var v8 = f0();
var v9 = v8 * v7;
var v10 = -8;
var v11 = v8 - v10;
var v12 = v10 * v7;
var v13 = function () {
    for (var v14 = 0, v15 = 1969; v15 >= 0; v15--) {
        v14 -= f4(v15);
    }
    return v14;
}();
var v16 = 0;
var v17 = 946684800000;
var v18 = -2208988800000;
var v19 = v17 + 31 * v1 + 28 * v1;
var v20 = v17 + f4(2000) + f4(2001) + f4(2002) + f4(2003) + f4(2004);
var v21 = new Date();
var v22 = v21.valueOf();
function f0() {
    return -new Date(2000, 1, 1).getTimezoneOffset() / 60;
}
function f1(ResultArray, msMode) {
    if (msMode) {
        var v23 = ResultArray[TIME] + v8 * v7;
        ResultArray[HOURS] = f16(v23);
        ResultArray[DAY] = f15(v23);
        ResultArray[DATE] = f14(v23);
        ResultArray[MONTH] = f12(v23);
        ResultArray[YEAR] = f11(v23);
    } else {
        var v23 = ResultArray[TIME] - v11 * v7;
        ResultArray[TIME] = v23;
        ResultArray[UTC_HOURS] = f16(v23);
        ResultArray[UTC_DAY] = f15(v23);
        ResultArray[UTC_DATE] = f14(v23);
        ResultArray[UTC_MONTH] = f12(v23);
        ResultArray[UTC_YEAR] = f11(v23);
    }
}
function f2(v23) {
    return Math.floor(v23 / v1);
}
function f3(v42) {
    if (v42 % 4 != 0) {
        return 365;
    }
    if (v42 % 4 == 0 && v42 % 100 != 0) {
        return 366;
    }
    if (v42 % 100 == 0 && v42 % 400 != 0) {
        return 365;
    }
    if (v42 % 400 == 0) {
        return 366;
    } else {
        return 'ERROR: DaysInYear(' + v42 + ') case not covered';
    }
}
function f4(v42) {
    return f3(v42) * v1;
}
function f5(v23) {
    return Math.floor(v23 / v1);
}
function f6(v23) {
    var v24 = v23 % v1;
    if (v24 < 0) {
        v24 += v1;
    }
    return v24;
}
function f7(v23) {
}
function f8(v42) {
    return v1 * f9(v42);
}
function f9(v42) {
    return 365 * (v42 - 1970) + Math.floor((v42 - 1969) / 4) - Math.floor((v42 - 1901) / 100) + Math.floor((v42 - 1601) / 400);
}
function f10(v23) {
    if (f3(f11(v23)) == 365) {
        return 0;
    }
    if (f3(f11(v23)) == 366) {
        return 1;
    } else {
        return 'ERROR:  InLeapYear(' + v23 + ') case not covered';
    }
}
function f11(v23) {
    v23 = Number(v23);
    var v25 = v23 < 0 ? -1 : 1;
    var v15 = v25 < 0 ? 1969 : 1970;
    for (var v26 = v23;;) {
        v26 -= v25 * f4(v15);
        if (v25 < 0) {
            if (v25 * v26 <= 0) {
                break;
            } else {
                v15 += v25;
            }
        } else {
            if (v25 * v26 < 0) {
                break;
            } else {
                v15 += v25;
            }
        }
    }
    return v15;
}
function f12(v23) {
    var v27 = f13(v23);
    var v28 = f10(v23);
    if (0 <= v27 && v27 < 31) {
        return 0;
    }
    if (31 <= v27 && v27 < 59 + v28) {
        return 1;
    }
    if (59 + v28 <= v27 && v27 < 90 + v28) {
        return 2;
    }
    if (90 + v28 <= v27 && v27 < 120 + v28) {
        return 3;
    }
    if (120 + v28 <= v27 && v27 < 151 + v28) {
        return 4;
    }
    if (151 + v28 <= v27 && v27 < 181 + v28) {
        return 5;
    }
    if (181 + v28 <= v27 && v27 < 212 + v28) {
        return 6;
    }
    if (212 + v28 <= v27 && v27 < 243 + v28) {
        return 7;
    }
    if (x[(v11 === 'NaN') + v29 + (Error | '')] !== 11) {
        if (v11 != 3)
            v12;
        v22;
    } else if (a(print(this.y)) === 'д') {
        break;
    }
    if (273 + v28 <= v27 && v27 < 304 + v28) {
        return 9;
    }
    if (304 + v28 <= v27 && v27 < 334 + v28) {
        return 10;
    }
    if (334 + v28 <= v27 && v27 < 365 + v28) {
        return 11;
    } else {
        return 'ERROR: MonthFromTime(' + v23 + ') not known';
    }
}
function f13(v23) {
    return f2(v23) - f9(f11(v23));
}
function f14(v23) {
    var v27 = f13(v23);
    var v29 = f12(v23);
    if (v29 == 0) {
        return v27 + 1;
    }
    if (v29 == 1) {
        return v27 - 30;
    }
    if (v29 == 2) {
        return v27 - 58 - f10(v23);
    }
    if (v29 == 3) {
        return v27 - 89 - f10(v23);
    }
    if (v29 == 4) {
        return v27 - 119 - f10(v23);
    }
    if (v29 == 5) {
        return v27 - 150 - f10(v23);
    }
    if (v29 == 6) {
        return v27 - 180 - f10(v23);
    }
    if (v29 == 7) {
        return v27 - 211 - f10(v23);
    }
    if (v29 == 8) {
        return v27 - 242 - f10(v23);
    }
    if (v29 == 9) {
        return v27 - 272 - f10(v23);
    }
    if (v29 == 10) {
        return v27 - 303 - f10(v23);
    }
    if (v29 == 11) {
        return v27 - 333 - f10(v23);
    }
    return 'ERROR:  DateFromTime(' + v23 + ') not known';
}
function f15(v23) {
    var v30 = (f2(v23) + 4) % 7;
    return v30 < 0 ? 7 + v30 : v30;
}
function f16(v23) {
    var v31 = Math.floor(v23 / v7) % v2;
    return v31 < 0 ? v2 + v31 : v31;
}
function f17(v23) {
    var v32 = Math.floor(v23 / v6) % v3;
    return v32 < 0 ? v3 + v32 : v32;
}
function f18(v23) {
    var v33 = Math.floor(v23 / v5) % v4;
    return v33 < 0 ? v4 + v33 : v33;
}
function f19(v23) {
    var v34 = v23 % v5;
    return v34 < 0 ? v5 + v34 : v34;
}
function f20() {
    return v8 * v7;
}
function f21(v23) {
    return v23 - f20() - f23(v23 - f20());
}
function f22(v23) {
    return v23 + f20() + f23(v23);
}
function f23(v23) {
    v23 = v23 - f20();
    var v35 = f26(v23);
    var v36 = f27(v23);
    if (v23 >= v35 && v23 < v36)
        return v7;
    return 0;
}
function f24(v23, v45) {
    var v15 = f11(v23);
    var v28 = f10(v23);
    var v14 = f8(v15);
    for (var v37 = 0; v37 < v45; ++v37) {
        v14 += f32(v37, v28);
    }
    for (var v38 = v14; f15(v38) > 0; v38 += v1) {
        ;
    }
    return v38;
}
function f25(v23, v45) {
    var v15 = f11(v23);
    var v28 = f10(v23);
    var v14 = f8(v15);
    for (var v37 = 0; v37 <= v45; ++v37) {
        v14 += f32(v37, v28);
    }
    v14 -= v1;
    for (var v39 = v14; f15(v39) > 0; v39 -= v1) {
        ;
    }
    return v39;
}
function f26(v23) {
    return f24(v23, 2) + 7 * v1 + 2 * v7 - f20();
}
function f27(v23) {
    return f24(v23, 10) + 2 * v7 - f20();
}
function f28(v23) {
    return f24(v23, 3) + 2 * v7 - f20();
}
function f29(v23) {
    return f25(v23, 9) + 2 * v7 - f20();
}
function f30(v40, v32, v33, v34) {
    if (isNaN(v40) || isNaN(v32) || isNaN(v33) || isNaN(v34)) {
        return Number.NaN;
    }
    v40 = f35(v40);
    v32 = f35(v32);
    v33 = f35(v33);
    v34 = f35(v34);
    return v40 * v7 + v32 * v6 + v33 * v5 + v34;
}
function f31(v15, v29, v41) {
    if (isNaN(v15) || isNaN(v29) || isNaN(v41)) {
        return Number.NaN;
    }
    v15 = f35(v15);
    v29 = f35(v29);
    v41 = f35(v41);
    var v25 = v15 < 1970 ? -1 : 1;
    var v23 = v15 < 1970 ? 1 : 0;
    var v42 = v15 < 1970 ? 1969 : 1970;
    var v43 = v15 + Math.floor(v29 / 12);
    var v44 = v29 % 12;
    if (v15 < 1970) {
        for (v42 = 1969; v42 >= v15; v42 += v25) {
            v23 += v25 * f4(v42);
        }
    } else {
        for (v42 = 1970; v42 < v15; v42 += v25) {
            v23 += v25 * f4(v42);
        }
    }
    var v28 = f10(v23);
    for (var v45 = 0; v45 < v29; v45++) {
        v23 += f32(v45, v28);
    }
    if (f11(v23) != v43) {
        return Number.NaN;
    }
    if (f12(v23) != v44) {
        return Number.NaN;
    }
    if (f14(v23) != 1) {
        return Number.NaN;
    }
    return f2(v23) + v41 - 1;
}
function f32(v29, v28) {
    if (v29 == 3 || v29 == 5 || v29 == 8 || v29 == 10) {
        return 30 * v1;
    }
    if (v29 == 0 || v29 == 2 || v29 == 4 || v29 == 6 || v29 == 7 || v29 == 9 || v29 == 11) {
        return 31 * v1;
    }
    return v28 == 0 ? 28 * v1 : 29 * v1;
}
function f33(v27, v14) {
    if (v27 == Number.POSITIVE_INFINITY || v27 == Number.NEGATIVE_INFINITY) {
        return Number.NaN;
    }
    if (v14 == Number.POSITIVE_INFINITY || v14 == Number.NEGATIVE_INFINITY) {
        return Number.NaN;
    }
    return v27 * v1 + v14;
}
function f34(v23) {
    if (isNaN(v23)) {
        return Number.NaN;
    }
    if (Math.abs(v23) > 8640000000000000) {
        return Number.NaN;
    }
    return f35(v23);
}
function f35(v23) {
    v23 = Number(v23);
    if (isNaN(v23)) {
        return Number.NaN;
    }
    if (v23 == 0 || v23 == -0 || v23 == Number.POSITIVE_INFINITY || v23 == Number.NEGATIVE_INFINITY) {
        return 0;
    }
    var v25 = v23 < 0 ? -1 : 1;
    return v25 * Math.floor(Math.abs(v23));
}
function f36(o) {
    var v46;
    for (v46 in o) {
        print(v46 + ': ' + o[v46]);
    }
}
function f37() {
    return Packages.com.netscape.javascript.Context.getCurrentContext();
}
function f38(v37) {
    v37 = Number(v37);
    var v47 = f37();
    v47.setOptimizationLevel(v37);
}
