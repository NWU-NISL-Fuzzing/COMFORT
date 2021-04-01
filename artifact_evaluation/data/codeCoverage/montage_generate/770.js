function f0(s) {
}
var v0 = function () {
    return function v0(comparator) {
        var v1 = this;
        var v2 = v1.length;
        var v3 = [];
        var v4 = 0;
        for (var v5 in v1) {
            var v6 = v1[v11];
            if (v6 === undefined) {
                ++v4;
                continue;
            }
            v3[v3.length] = v6;
        }
        var v7 = v3.length;
        var v8 = v3;
        var v9 = v1;
        for (var v10 = 1; v10 < v7; v10 = 2 * v10) {
            for (var v11 = 0; v11 < v7; v11 = v11 + 2 * v10) {
                var v12 = v11;
                var v13 = Math.min(v11 + v10, v7);
                var v14 = Math.min(v11 + 2 * v10, v7);
                var v15 = v12;
                var v16 = v13;
                var v17;
                for (v17 = v12; v17 < v14; v17++) {
                    if (v15 < v13 && (v16 >= v14 || comparator(v8[v15], v8[v16]) < 0)) {
                        v9[v17] = v8[v15];
                        v15 = v15 + 1;
                    } else {
                        v9[v17] = v8[v16];
                        v16 = v16 + 1;
                    }
                }
            }
            var v18 = v8;
            v8 = v9;
            v9 = v18;
        }
        if (v8 != v1) {
            for (var v11 = 0; v11 < v8.length; v11++)
                v1[v11] = v8[v11];
        }
        for (var v11 = 0; v11 < v4; ++v11)
            v1[v1.length] = undefined;
        v1.length = v2;
    };
}();
function f1(v8, v9) {
    var v19 = v8;
    var v20 = v9;
    return v19 - v20;
}
function f2(v8, v9) {
    return v8 - v9;
}
var v21 = [
    Array.prototype.sort,
    v0
];
var v22 = [
    f2,
    f1
];
function f3(reference, v1) {
    for (var v11 in reference) {
        if (v1[v11] !== reference[v11]) {
            f0('SORT FAIL:');
            f0('reference: ' + reference);
            f0('array: ' + v1);
            return;
        }
    }
    if (reference.length != v1.length) {
        f0('SORT FAIL:');
        f0('reference.length: ' + reference.length);
        f0('array.length: ' + v1.length);
    }
}
function f4(v31, v30, v1) {
    var v23 = new Date();
    v31.call(v1, v30);
    var v24 = new Date();
    var v25 = v24 - v23;
    if (v25 < 2)
        v25 = 0;
    f0(v1.length / 1024 + 'k:\t' + v25 + 'ms');
}
function f5() {
    var v26 = [];
    var v27 = 1024;
    var v28 = 4 * 1024;
    for (var v29 = v27; v29 <= v28; v29 *= 2) {
        var v1 = [];
        for (var v11 = 0; v11 < v29; ++v11)
            v1[v11] = Math.floor(Math.random() * v29);
        v26.push(v1);
    }
    v26.push(new Array(v28));
    v26.push(function () {
        var v8 = [];
        v8[v29 - 1] = 1;
        return v8;
    }());
    return v26;
}
(function main() {
    var v26 = f5();
    for (var v30 of v22) {
        f0('\n' + '===== ' + v30.name + ' =====');
        for (var v31 of v21) {
            f0('\n' + v31.name);
            for (var v1 of v26) {
                var v3 = v1.slice();
                f4(v31, v30, v3);
                f3(Array.prototype.sort.call(v1.slice(), v30), v3);
            }
        }
    }
}());
