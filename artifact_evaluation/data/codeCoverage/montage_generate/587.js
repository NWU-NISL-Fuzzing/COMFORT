v0 = 'RegExp';
var v1 = '\nregexp = ';
var v2 = '\nstring = ';
var v3 = '\nExpect: ';
var v4 = '\nActual: ';
var v5 = '\nERROR !!! match arrays have different lengths:';
var v6 = '\nERROR !!! regexp failed to give expected match array:';
var v7 = '\nERROR !!! regexp FAILED to match anything !!!';
var v8 = '\nERROR !!! regexp MATCHED when we expected it to fail !!!';
var v9 = '[';
var v10 = ']';
var v11 = '"';
var v12 = '\'';
var v13 = '\n';
var v14 = ',';
var v15 = ' ';
var v16 = typeof 'abc';
function f0(statuses, patterns, strings, actualmatches, expectedmatches) {
    var v17 = '';
    var v18 = new RegExp();
    var v19 = '';
    var v20 = new Array();
    var v21 = new Array();
    var v22 = '';
    var v23 = -1;
    var v24 = -1;
    for (var v25 = 0; v25 != patterns.length; v25++) {
        v17 = statuses[v25];
        v18 = patterns[v25];
        v19 = strings[v25];
        v20 = actualmatches[v25];
        v21 = expectedmatches[v25];
        v22 = f1(v17, v18, v19);
        v26 = v17;
        if (v20) {
            v27 = f2(v20);
            if (v21) {
                v24 = v21.length;
                v23 = v20.length;
                var v28 = f2(v21);
                if (v23 != v24) {
                    reportCompare(v24, v23, v22 + v5 + v3 + v28 + v4 + v27 + v13);
                    continue;
                }
                if (v28 != v27) {
                    reportCompare(v28, v27, v22 + v6 + v3 + v28 + v4 + v27 + v13);
                } else {
                    reportCompare(v28, v27, v22);
                }
            } else {
                v28 = v21;
                reportCompare(v28, v27, v22 + v8 + v3 + v21 + v4 + v27 + v13);
            }
        } else {
            if (v21) {
                v27 = v20;
                reportCompare(v28, v27, v22 + v7 + v3 + v21 + v4 + v20 + v13);
            } else {
                v28 = v21;
                v27 = v20;
                reportCompare(v21, v20, v22);
            }
        }
    }
}
function f1(v17, v18, v19) {
    v19 = v19.replace(/\n/g, '\\n');
    v19 = v19.replace(/\r/g, '\\r');
    v19 = v19.replace(/\t/g, '\\t');
    v19 = v19.replace(/\v/g, '\\v');
    v19 = v19.replace(/\f/g, '\\f');
    return v17 + v1 + v18 + v2 + f5(v19);
}
function f2(arr) {
    try {
        return arr.toSource();
    } catch (e) {
        return f3(arr);
    }
}
function f3(arr) {
    var v29 = v14 + v15;
    var v30 = '';
    var v31 = '';
    var v32 = arr.length;
    for (v25 = 0; v25 < v32; v25++) {
        v30 = arr[v25];
        switch (true) {
        case typeof v30 === v16:
            v31 += f4(v30);
            break;
        case v30 === undefined || v30 === null:
            break;
        default:
            v31 += v30.toString();
        }
        if (v25 < v15 - 1 || v30 === undefined)
            v31 += v29;
    }
    return v9 + v31 + v10;
}
function f4(text) {
    return v11 + text + v11;
}
function f5(text) {
    return v12 + text + v12;
}
