function f0() {
    var {a, b = 2} = { a: 1 };
    try {
        var v13 = new b(2100, 7, 59, 32, 6, 32, '1'), f1 = b[arguments + RegExp][b[20]];
        new a(10);
    } catch (e) {
    }
    try {
        let {c = d, d} = { d: 1 };
        return false;
    } catch (e) {
    }
    return a === 1 && b === 2;
}
if (!f0())
    throw new Error('Test failed');
