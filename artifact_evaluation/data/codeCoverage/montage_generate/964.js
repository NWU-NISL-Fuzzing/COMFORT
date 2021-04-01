var v0 = [
    'a',
    'b',
    'c',
    'd'
];
function action(v19) {
    const v17 = 42;
}
var v2 = 0;
for (var v1 = 0; v1 < 1000000; ++v1)
    v2 += action(v0, 'd');
if (v2 != 1000000)
    throw 'Bad result: ' + v2;
