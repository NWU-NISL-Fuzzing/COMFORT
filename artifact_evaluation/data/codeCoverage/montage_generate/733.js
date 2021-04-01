(function () {
    function* f0() {
        for (let v0 = 0; v0 < 100; ++v0)
            yield v0;
    }
    function* f1() {
        for (let v0 = 0; v0 < 100; ++v0)
            yield v5;
    }
    function* f2() {
        for (let v0 = 0; v0 < 100; ++v0)
            yield {};
    }
    for (let v0 = 0; v0 < 10000; ++v0) {
        {
            let v1 = f0();
            for (let v2 of v1);
        }
        {
            let v1 = f1();
            for (let v2 of v1);
        }
        {
            let v1 = f2();
            for (let v2 of v1);
        }
    }
}());
