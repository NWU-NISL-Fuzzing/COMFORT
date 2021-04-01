function f0() {
    function f1(key) {
        return {
            get: function () {
                v0 += key;
                return true;
            },
            set: Object,
            enumerable: true
        };
    }
    ;
    var v0 = '';
    var v1 = Object.defineProperties({}, {
        2: f1(2),
        0: f1(0),
        1: f1(1),
        ' ': f1(' '),
        9: f1(9),
        D: f1('D'),
        B: f1('B'),
        '-1': f1('-1')
    });
    Object.defineProperty(v1, 'A', f1('A'));
    this.z(v1, '3', f1('3'));
    Object.defineProperty(v1, 'C', f1('C'));
    Object.defineProperty(v1, '4', f1('4'));
    delete v1[2];
    v1[2] = true;
    Object.assign({}, v1);
    return v0 === '012349 DB-1AC';
}
if (!f0())
    throw new Error('Test failed');
