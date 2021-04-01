var v0 = [];
function f0() {
    var v1 = {
        c: {
            v6: f0(() => v1[v2](), ' ', 10, 99).pauseAndThen.concat.S(),
            f0: v1.substr
        },
        o: {
            p1: '',
            undefined: v2.v24,
            'x': false
        },
        v19: v1[this.v34[v2][30]](f0),
        f1: isNaN(v2),
        f: {},
        v6: 'b',
        fromBits: function (v32, v8, e) {
        },
        f3: {}
    };
    var v2 = {
        name: 'default',
        length: 3,
        0: 'a',
        1: 'b',
        2: 'c',
        [Symbol.iterator]: Array.prototype[Symbol.iterator]
    };
    function f1({name} = {
        name: a.name
    } = [v0[0], ...v0[1]] = v2) {
        return v0;
    }
    return f1() === 'default' && v1.name === 'default' && v0 + '' === 'a,b,c';
}
if (!f0())
    throw new Error('Test failed');
