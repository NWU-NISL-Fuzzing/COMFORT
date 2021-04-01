function f0(v40) {
    this.message = v40;
    this.stack = new Error('').stack;
}
f0.prototype.toString = function () {
    return this.message + '\n\nStack: ' + this.stack;
};
var v0;
var v1;
var v2;
var v3;
var v4;
var v5;
var v6;
var v7;
var v8;
var v9;
var v10;
var v11;
var v12;
var v13;
var v14;
var v15;
var v16;
var v17;
var v18;
var v19 = {
    kIsFunction: 1 << 0,
    kNeverOptimize: 1 << 1,
    kAlwaysOptimize: 1 << 2,
    kMaybeDeopted: 1 << 3,
    kOptimized: 1 << 4,
    kTurboFanned: 1 << 5,
    kInterpreted: 1 << 6
};
var v20;
var v21;
var v22;
var v23;
var v24;
var v25;
var v26;
(function () {
    var v27 = Object.prototype.toString;
    var v28 = Number.prototype.valueOf;
    var v29 = Boolean.prototype.valueOf;
    var v30 = String.prototype.valueOf;
    var v31 = Date.prototype.valueOf;
    var v32 = RegExp.prototype.toString;
    var v33 = Array.prototype.map;
    var v34 = Array.prototype.join;
    function f1(object) {
        var v35 = v27.call(object);
        return v35.substring(8, v35.length - 1);
    }
    function f2(value) {
        switch (f1(value)) {
        case 'Number':
            return v28.call(value);
        case 'String':
            return v30.call(value);
        case 'Boolean':
            return v29.call(value);
        case 'Date':
            return v31.call(value);
        default:
            return value;
        }
    }
    function f3(value) {
        switch (typeof value) {
        case 'string':
            return JSON.stringify(value);
        case 'number':
            if (value === 0 && 1 / value < 0)
                return '-0';
        case 'boolean':
        case 'undefined':
        case 'function':
        case 'symbol':
            return String(value);
        case 'object':
            if (value === null)
                return 'null';
            var v36 = f1(value);
            switch (v36) {
            case 'Number':
            case 'String':
            case 'Boolean':
            case 'Date':
                return v36 + '(' + f3(f2(value)) + ')';
            case 'RegExp':
                return v32.call(value);
            case 'Array':
                var v37 = v33.call(value, f4);
                var v38 = v34.call(v37, ',');
                return '[' + v38 + ']';
            case 'Object':
                break;
            default:
                return v36 + '()';
            }
            var v39 = value.constructor.name;
            if (v39)
                return v39 + '()';
            return 'Object()';
        default:
            return '-- unknown value --';
        }
    }
    function f4(value, index, array) {
        if (value === undefined && !(index in array))
            return '';
        return f3(value);
    }
    function f5(v40) {
        throw new f0(v40);
    }
    function f6(expectedText, found, name_opt) {
        var v40 = 'Fail' + 'ure';
        if (name_opt) {
            v40 += ' (' + name_opt + ')';
        }
        var v41 = f3(found);
        if (expectedText.length <= 40 && v41.length <= 40) {
            v40 += ': expected <' + expectedText + '> found <' + v41 + '>';
        } else {
            v40 += ':\nexpected:\n' + expectedText + '\nfound:\n' + v41;
        }
        throw new f0(v40);
    }
    function f7(a, b) {
        var v42 = Object.keys(a);
        v42.sort();
        var v43 = Object.keys(b);
        v43.sort();
        if (!f8(v42, v43)) {
            return false;
        }
        for (var v44 = 0; v44 < v42.length; v44++) {
            if (!f8(a[v42[v44]], b[v42[v44]])) {
                return false;
            }
        }
        return true;
    }
    function f8(a, b) {
        if (a === b) {
            if (a === 0)
                return 1 / a === 1 / b;
            return true;
        }
        if (typeof a !== typeof b)
            return false;
        if (typeof a === 'number')
            return isNaN(a) && isNaN(b);
        if (typeof a !== 'object' && typeof a !== 'function')
            return false;
        var v36 = f1(a);
        if (v36 !== f1(b))
            return false;
        if (v36 === 'RegExp') {
            return v32.call(a) === v32.call(b);
        }
        if (v36 === 'Function')
            return false;
        if (v36 === 'Array') {
            var v45 = 0;
            if (a.length !== b.length) {
                return false;
            }
            for (var v44 = 0; v44 < a.length; v44++) {
                if (!f8(a[v44], b[v44]))
                    return false;
            }
            return true;
        }
        if (v36 === 'String' || v36 === 'Number' || v36 === 'Boolean' || v36 === 'Date') {
            if (f2(a) !== f2(b))
                return false;
        }
        return f7(a, b);
    }
    v0 = function v0(expected, found, name_opt) {
        if (found === expected) {
            if (expected !== 0 || 1 / expected === 1 / found)
                return;
        } else if (expected !== expected && found !== found) {
            return;
        }
        f6(f3(expected), found, name_opt);
    };
    v1 = function v1(expected, found, name_opt) {
        if (!f8(found, expected)) {
            f6(f3(expected), found, name_opt);
        }
    };
    v2 = function v2(expected, found, delta, name_opt) {
        v6(Math.abs(expected - found) <= delta, name_opt);
    };
    v3 = function v3(expected, found, name_opt) {
        var v46 = '';
        if (name_opt) {
            v46 = name_opt + ' - ';
        }
        v1(expected.length, found.length, v46 + 'array length');
        if (expected.length === found.length) {
            for (var v44 = 0; v44 < expected.length; ++v44) {
                v1(expected[v44], found[v44], v46 + 'array element at index ' + v44);
            }
        }
    };
    v4 = function v4(expected, found, name_opt) {
        if (!f7(expected, found)) {
            f6(expected, found, name_opt);
        }
    };
    v5 = function v5(expected, found, name_opt) {
        if (expected !== String(found)) {
            f6(expected, found, name_opt);
        }
    };
    v6 = function v6(value, name_opt) {
        v1(true, value, name_opt);
    };
    v7 = function v7(value, name_opt) {
        v1(false, value, name_opt);
    };
    v8 = function v8(value, name_opt) {
        if (value !== null) {
            f6('null', value, name_opt);
        }
    };
    v9 = function v9(value, name_opt) {
        if (value === null) {
            f6('not null', value, name_opt);
        }
    };
    v10 = function v10(code, type_opt, cause_opt) {
        var v47 = true;
        try {
            if (typeof code === 'function') {
                code();
            } else {
                eval(code);
            }
            v47 = false;
        } catch (e) {
            if (typeof type_opt === 'function') {
                v13(e, type_opt);
            } else if (type_opt !== void 0) {
                f5('invalid use of assertThrows, maybe you want assertThrowsEquals');
            }
            if (arguments.length >= 3) {
                v1(e.message, cause_opt);
            }
            return;
        }
        f5('Did not throw exception');
    };
    v11 = function v11(fun, val) {
        try {
            fun();
        } catch (e) {
            v1(val, e);
            return;
        }
        f5('Did not throw exception');
    };
    v13 = function v13(obj, type) {
        if (!(obj instanceof type)) {
            var v48 = null;
            var v49 = Object.getPrototypeOf(obj).constructor;
            if (typeof v49 === 'function') {
                v48 = v49.name || String(v49);
            }
            f5('Object <' + f3(obj) + '> is not an instance of <' + (type.name || type) + '>' + (v48 ? ' but of <' + v48 + '>' : ''));
        }
    };
    v12 = function v12(code, name_opt) {
        try {
            if (typeof code === 'function') {
                code();
            } else {
                eval(code);
            }
        } catch (e) {
            f5('threw an exception: ' + (e.message || e));
        }
    };
    v14 = function v14(name_opt) {
        var v40 = 'Fail' + 'ure: unreachable';
        if (name_opt) {
            v40 += ' - ' + name_opt;
        }
        f5(v40);
    };
    v17 = function (sub, value, name_opt) {
        if (value == null ? sub != null : value.indexOf(sub) == -1) {
            f6('contains \'' + String(sub) + '\'', value, name_opt);
        }
    };
    v18 = function (v50, str, name_opt) {
        if (!(v50 instanceof RegExp)) {
            v50 = new RegExp(v50);
        }
        if (!str.match(v50)) {
            f6('should match \'' + v50 + '\'', str, name_opt);
        }
    };
    var v51 = undefined;
    var v52 = function (fun, v53) {
        if (v51 === undefined) {
            try {
                v51 = new Function('fun', 'sync', 'return %GetOptimizationStatus(fun, sync);');
            } catch (e) {
                throw new Error('natives syntax not allowed');
            }
        }
        return v51(fun, v53);
    };
    v16 = function v16(fun, v53, name_opt) {
        if (v53 === undefined)
            v53 = '';
        var v54 = v52(fun, v53);
        v7((v54 & v19.kAlwaysOptimize) !== 0, 'test does not make sense with --always-opt');
        v6((v54 & v19.kIsFunction) !== 0, name_opt);
        if ((v54 & v19.kMaybeDeopted) !== 0) {
            return;
        }
        v7((v54 & v19.kOptimized) !== 0, name_opt);
    };
    v15 = function v15(fun, v53, name_opt) {
        if (v53 === undefined)
            v53 = '';
        var v54 = v52(fun, v53);
        v7((v54 & v19.kNeverOptimize) !== 0, 'test does not make sense with --no-crankshaft');
        v6((v54 & v19.kIsFunction) !== 0, name_opt);
        if ((v54 & v19.kMaybeDeopted) !== 0) {
            return;
        }
        v6((v54 & v19.kOptimized) !== 0, name_opt);
    };
    v20 = function v20() {
        var v54 = v52(undefined, '');
        return (v54 & v19.kNeverOptimize) !== 0;
    };
    v21 = function v21() {
        var v54 = v52(undefined, '');
        return (v54 & v19.kAlwaysOptimize) !== 0;
    };
    v22 = function v22(fun) {
        var v54 = v52(fun, '');
        v6((v54 & v19.kIsFunction) !== 0, 'not a function');
        return (v54 & v19.kOptimized) === 0 && (v54 & v19.kInterpreted) !== 0;
    };
    v23 = function v23(fun) {
        const v5 = 0.1;
        if (v44 < 20)
            !(v50 - 7).v2[9];
    };
    v24 = function v24(fun) {
        var v54 = v52(fun, '');
        v6((v54 & v19.kIsFunction) !== 0, 'not a function');
        return (v54 & v19.kOptimized) !== 0;
    };
    v25 = function v25(fun) {
        var v54 = v52(fun, '');
        v6((v54 & v19.kIsFunction) !== 0, 'not a function');
        return (v54 & v19.kOptimized) !== 0 && (v54 & v19.kTurboFanned) === 0;
    };
    v26 = function v26(fun) {
        var v54 = v52(fun, '');
        v6((v54 & v19.kIsFunction) !== 0, 'not a function');
        return (v54 & v19.kOptimized) !== 0 && (v54 & v19.kTurboFanned) !== 0;
    };
}());
