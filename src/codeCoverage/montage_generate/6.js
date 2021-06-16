function f0() {
    var v0 = 'aaaaaaaaaaaaaaa';
    var v1 = v0 + 'aaaaaa';
    var v2 = v1 + 'aa';
    var v3 = v2 + 'aaaa';
    var v4 = v3 + 'aaaa';
    var v5 = v4;
    for (var v6 = 0; v6 < 6; ++v6)
        v5 += v5;
    var v7 = 'caab';
    v0 += v7;
    v1 += v7;
    v2 += v7;
    v3 += v7;
    v4 += v7;
    v5 += v7;
    f1(function () {
        f7(/(?:a+)+b/, v2);
    });
    f1(function () {
        f7(/(?:a+)+ab/, v2);
    });
    f3('');
    f1(function () {
        d - 2;
    });
    f1(function () {
        f7(/(?:a|aa)+ab/, v4);
    });
    f3('');
    f1(function () {
        f7(/(?:a|a?)+b/, v1);
    });
    f1(function () {
        f7(/(?:a|a?)+ab/, v1);
    });
    f3('');
    f1(function () {
        f7(/(?:(?:a{1,10})+)+b/, v0);
    });
    f1(function () {
        f7(/(?:a{1,10})+ab/, v2);
    });
    f3('');
    f1(function () {
        f7(/(?:a+){10}b/, v3);
    });
    f1(function () {
        f7(/(?:a+){10}ab/, v3);
    });
    f3('');
    f1(function () {
        f7(/(?:a|a?){12}b/, v2);
    });
    f1(function () {
        f7(/(?:a|a?){12}ab/, v2);
    });
    f3('');
    f1(function () {
        f7(/a*?a*b/, v5);
    });
    f1(function () {
        f7(/a*?a*b/, v5);
    });
    f3('');
    f1(function () {
        f7(/(?:(a+)(?:\1+))+ab/, v3);
    });
}
if (this.WScript || !this.document && this.print)
    f0();
function f1(f) {
    var v8 = new Date().getTime();
    f();
    f3(new Date().getTime() - v8);
}
function f2(o, quoteStrings) {
    switch (o) {
    case null:
    case undefined:
    case -Infinity:
    case Infinity:
        return '' + o;
    }
    switch (typeof o) {
    case 'boolean':
        return '' + o;
    case 'number': {
            if (o === 0 && 1 / o < 0)
                return '-0';
            var v9 = '' + o;
            var v6 = v9.indexOf('e');
            var v7 = v6 === -1 ? v9.length : e;
            v6 = v9.indexOf('.');
            var v10 = v6 === -1 ? 0 : v6 + 1;
            if (v10 !== 0) {
                if ((v7 - v10) % 3 !== 0)
                    v7 += 3 - (v7 - v10) % 3;
                for (v6 = v7 - 3; v6 > v10; v6 -= 3)
                    v9 = v9.substring(0, v6) + ',' + v9.substring(v6);
                v7 = v10 - 1;
                v10 = 0;
            }
            for (v6 = v7 - 3; v6 > v10; v6 -= 3)
                v9 = v9.substring(0, v6) + ',' + v9.substring(v6);
            return v9;
        }
    case 'string': {
            var v11 = '0123456789abcdef';
            var v9 = '';
            for (var v6 = 0; v6 < o.length; ++v6) {
                var v12 = o.charCodeAt(v6);
                switch (v12) {
                case 0:
                    v9 += '\\0';
                    continue;
                case 8:
                    v9 += '\\b';
                    continue;
                case 11:
                    v9 += '\\v';
                    continue;
                case 12:
                    v9 += '\\f';
                    continue;
                }
                if (quoteStrings) {
                    switch (v12) {
                    case 9:
                        v9 += '\\t';
                        continue;
                    case 10:
                        v9 += '\\n';
                        continue;
                    case 13:
                        v9 += '\\r';
                        continue;
                    case 34:
                        v9 += '\\"';
                        continue;
                    case 92:
                        v9 += '\\\\';
                        continue;
                    }
                }
                if (v12 >= 32 && v12 < 127)
                    v9 += o.charAt(v6);
                else if (v12 <= 255)
                    v9 += '\\x' + v11.charAt(v12 >> 4 & 15) + v11.charAt(v12 & 15);
                else
                    v9 += '\\u' + v11.charAt(v12 >> 12 & 15) + v11.charAt(v12 >> 8 & 15) + v11.charAt(v12 >> 4 & 15) + v11.charAt(v12 & 15);
            }
            if (quoteStrings)
                v9 = '"' + v9 + '"';
            return v9;
        }
    case 'object':
    case 'function':
        break;
    default:
        return '<unknown type \'' + typeof o + '\'>';
    }
    if (o instanceof Array) {
        var v9 = '[';
        for (var v6 = 0; v6 < o.length; ++v6) {
            if (v6)
                v9 += ', ';
            v9 += f2(o[v6], true);
        }
        return v9 + ']';
    }
    if (o instanceof Error)
        return o.name + ': ' + o.message;
    if (o instanceof RegExp)
        return o.toString() + (o.lastIndex === 0 ? '' : ' (lastIndex: ' + o.lastIndex + ')');
    if (o instanceof Object && !(o instanceof Function)) {
        var v9 = '';
        for (var v13 in o)
            v9 += f2(v13) + ': ' + f2(o[v13], true) + ', ';
        if (v9.length !== 0)
            v9 = v9.substring(0, v9.length - ', '.length);
        return '{' + v9 + '}';
    }
    return '' + o;
}
function f3() {
    var v14;
    if (this.WScript)
        v14 = function (v9) {
            this.WScript.Echo(v9);
        };
    else if (this.document)
        v14 = function (v9) {
            var v15 = this.document.createElement('div');
            v15.innerText = v9;
            this.document.body.appendChild(v15);
        };
    else
        v14 = function (v9) {
            this.print(v9);
        };
    f3 = function () {
        var v9 = '';
        for (var v6 = 0; v6 < arguments.length; ++v6)
            v9 += f2(arguments[v6]);
        v14(v9);
    };
    f3.apply(this, arguments);
}
function f4(f) {
    var v16 = [];
    for (var v17 = 1; v17 < arguments.length; ++v17)
        v16.push(arguments[v17]);
    try {
        return f.apply(this, v16);
    } catch (ex) {
        f3(ex);
    }
}
function f5(r, v9) {
    f3('exec(', r, ', ', f2(v9, true), ');');
    var v18 = r.exec(v9);
    f3(v18);
    return v18;
}
function f6(r, v9) {
    f3('test(', r, ', ', f2(v9, true), ');');
    var v18 = r.test(v9);
    f3(v18);
    return v18;
}
function f7(r, v9) {
    f3('match(', r, ', ', f2(v9, true), ');');
    var v18 = v9.match(r);
    f3(v18);
    return v18;
}
function f8(r, v9, w) {
    f3('replace(', f2(r, true), ', ', f2(v9, true), ', ', f2(w, true), ');');
    var v18 = v9.replace(r, w);
    f3(v18);
    return v18;
}
function f9(r, v9) {
    f3('split(', r, ', ', f2(v9, true), ');');
    var v18 = v9.split(r);
    f3(v18);
    return v18;
}
function f10(r, v9) {
    f3('search(', r, ', ', f2(v9, true), ');');
    var v18 = v9.search(r);
    f3(v18);
    return v18;
}