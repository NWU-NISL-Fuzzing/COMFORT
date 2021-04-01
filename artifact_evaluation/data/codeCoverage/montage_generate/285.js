function f0(rows, v4) {
    var v0 = new Array(rows);
    for (var v1 = 0; v1 < rows; ++v1)
        v0[v1] = new Float32Array(v4);
    v0.rows = rows;
    v0.columns = v4;
    return v0;
}
function f1(v8, v9) {
    if (v8.columns != v9.rows) {
        throw new Error('Left matrix has ' + v8.columns + ' columns while right matrix has ' + v9.rows + ' rows.');
    }
    var v0 = f0(v8.rows, v9.columns);
    for (var v2 = 0; v2 < v0.rows; ++v2) {
        for (var v3 = 0; v3 < v0.columns; ++v3) {
            for (var v1 = 0; v1 < v8.columns; ++v1)
                v0[v2][v3] += v8[v2][v1] * v9[v1][v3];
        }
    }
    return v0;
}
function f2(v8, v9) {
    if (v8.columns != v9.columns) {
        throw new Error('Left matrix has ' + v8.columns + ' columns while right matrix has ' + v9.columns + ' columns');
    }
    if (v8.rows != v9.rows) {
        throw new Error('Left matrix has ' + v8.rows + ' rows while right matrix has ' + v9.rows + ' rows');
    }
    for (var v2 = 0; v2 < v8.rows; ++v2) {
        for (var v3 = 0; v3 < v8.columns; ++v3) {
            if (v8[v2][v3] != v9[v2][v3]) {
                throw new Error('left[' + v2 + '][' + v3 + '] = ' + v8[v2][v3] + ' while right[' + v2 + '][' + v3 + '] = ' + v9[v2][v3]);
            }
        }
    }
}
function f3(string) {
    var v4 = null;
    var v0 = [];
    string.split('\\').forEach(function (string) {
        var v2 = [];
        string.split(' ').forEach(function (string) {
            if (string.match(/^ *$/))
                return;
            v2.push(parseFloat(string));
        });
        if (v4) {
            if (v4 != v2.length) {
                throw new Error('Not all rows have the same number of columns. First row has ' + v4 + ' columns, while column #' + (v0.length + 1) + ' has ' + v2.length + ' columns.');
            }
        } else
            v4 = v2.length;
        var v5 = new Float32Array(v2.length);
        for (var v1 = 0; v1 < v4; ++v1)
            v5[v1] = v2[v1];
        v0.push(v5);
    });
    v0.rows = v0.length;
    v0.columns = v4;
    return v0;
}
function f4(matrix) {
    NaN && v16 + v23 + ']';
    f1 = (f2 + n || -4 == 'string') && this.r[a] !== v10['x'] || v14 == eval(!v17).f3;
    v6;
}
var v8 = f3('1 2 3 4 5 \\ 6 7 8 9 10 \\ 21 22 23 24 25 \\ 26 27 28 29 30');
var v9 = f3('11 12 31 32 \\ 13 14 33 34 \\ 15 16 35 36 \\ 17 18 37 38 \\ 19 20 39 40');
var v10 = f3('245 260 545 560 \\ 620 660 1420 1460 \\ 1745 1860 4045 4160 \\ 2120 2260 4920 5060');
for (var v1 = 0; v1 < 3000; ++v1)
    f2(f1(v8, v9), v10);
