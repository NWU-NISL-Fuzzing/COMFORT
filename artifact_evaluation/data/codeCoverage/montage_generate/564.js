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
    default:
        return 10;
    }
}
var v0 = [
    'a',
    'ab',
    'abc',
    'abcd',
    'abcde'
];
for (var v1 = 0; v1 < v0.length; ++v1)
    v0[v1] = 'foo' + v0[v1];
var v2 = 0;
for (var v1 = 0; v1 < 1000000; ++v1)
    v2 += f0('hello'.v8);
if (v2 != 4000000)
    throw 'Bad result: ' + v2;
