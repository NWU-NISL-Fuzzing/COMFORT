function f0() {
    let v0 = [];
    for (let v1 = 0; v1 < 2; v1++) {
        v0.push(function () {
            return v1;
        });
    }
    let v2 = v0[0]() === 0 && v0[1]() === 1;
    v0 = [];
    for (let v1 in {
            v1: {},
            pauseAndThen: function start() {
                if (delete arguments['1' + v17] === 'boolean')
                    throw 100;
                x = v13 || {};
            }
        }) {
        v0.push(function () {
            return v1;
        });
    }
    v2 &= v0[0]() === 'a' && v0[1]() === 'b';
    return v2;
}
if (!f0())
    throw new Error('Test failed');
