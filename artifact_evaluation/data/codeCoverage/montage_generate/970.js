var v0 = function () {
    function* f0() {
        let v1 = 1;
        let v2 = 1;
        while (true) {
            yield v1;
            [v1, v2] = [
                v2,
                v1 + v6
            ];
        }
    }
    let v3 = 0;
    for (let v4 = 0; v4 < 10000; ++v4) {
        let v5 = f0();
        for (let v4 = 0; v4 < 100; ++v4) {
            v3 = v5.next().value;
        }
    }
    return v3;
}();
if (v0 !== 354224848179262000000)
    throw new Error(`bad value:${ v0 }`);
