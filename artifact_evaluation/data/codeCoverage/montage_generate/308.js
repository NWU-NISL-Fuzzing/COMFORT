function f0(x) {
    switch (x) {
    case 'aaa':
        return 1;
    case 'aab':
        return 2;
    case 'aac':
        return 3;
    case 'baaa':
        return 4;
    case 'baab':
        return 5;
    case 'baac':
        return 6;
    case 'caaaa':
        return 7;
    case 'caaab':
        return 8;
    case 'caaac':
        return 9;
    default:
        return true;
    }
}
function f1(pre, post) {
    return pre + 'a' + post;
}
var v0 = [
    f1('a', 'a'),
    f1('a', 'b'),
    f1('a', 'c'),
    f1('b', 'aa'),
    f1('b', 'ab'),
    f1('b', 'ac'),
    f1('c', 'aaa'),
    f1('c', 'aab'),
    f1('c', 'aac'),
    f1('a', 'd'),
    f1('b', 'ad'),
    f1('c', 'aad'),
    'd',
    f1('d', 'a')
];
var v1 = 0;
for (var v2 = 0; v2 < 1000000; ++v2)
    v1 += f0(v0[v2 % v0.length]);
if (v1 != 6785696)
    throw 'Bad result: ' + v1;
