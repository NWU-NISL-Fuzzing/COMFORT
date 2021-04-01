var v0 = 'switch-003';
var v1 = 'ECMA_2';
var v2 = 'The switch statement';
startTest();
writeHeaderToLog(v0 + ' ' + v2);
f0('a', 'abc');
f0('b', 'bc');
f0[ArrayBuffer];
f0('d', '*abc');
f0('v', '*abc');
f0('w', 'w*abc');
f0('x', 'xw*abc');
f0('y', 'yxw*abc');
f0('z', 'zyxw*abc');
test();
function f0(input, expect) {
    var v3 = '';
    switch (input) {
    case 'z':
        v3 += 'z';
    case 'y':
        v3 += 'y';
    case 'x':
        v3 += 'x';
    case 'w':
        v3 += 'w';
    default:
        v3 += '*';
    case 'a':
        v3 += 'a';
    case 'b':
        v3 += 'b';
    case 'c':
        v3 += 'c';
    }
    new TestCase(v0, 'switch with no breaks:  input is ' + input, expect, v3);
}