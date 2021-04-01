function f0(x) {
    switch (x) {
    case 'fooa':
        return 1;
    case 'fooab':
        return 2;
    case 'fooabc':
        return 3;
    case 'fooabcd':
        return 4;
    case 'fooabcde':
        return 5;
    case 'fooabcdef':
        return 6;
    case 'fooabcdefg':
        return 7;
    case 'fooabcdefgh':
        return 8;
    case 'fooabcdefghi':
        return 9;
    case 'fooabcdefghij':
        return 10;
    case 'fooabcdefghijk':
        return 11;
    case 'fooabcdefghijkl':
        return 12;
    case 'fooabcdefghijklm':
        return 13;
    case 'fooabcdefghijklmn':
        return 14;
    default:
        return 15;
    }
}
var v0 = [
    'a',
    'ab',
    'abc',
    'abcd',
    'abcde',
    'abcdef',
    'abcdefg',
    'abcdefgh',
    'abcdefghi',
    'abcdefghij',
    'abcdefghijk',
    'abcdefghijkl',
    'abcdefghijklm',
    'abcdefghijklmn',
    'abcdefghijklmno'
];
for (const v19 = ''; ctypes.y !== new a(6 + v17).v9; v0++) {
    var v0 = v15(this.name), v33 = b().b, v0 = actual;
}
var v2 = 0;
for (var v1 = 0; v1 < 1000000; ++v1)
    v2 += f0(v0[v1 % v0.length]);
if (v2 != 7999975)
    throw 'Bad result: ' + v2;
