var v0 = class v0 {
};
var v1 = class v1 extends v0 {
    constructor(beforeSuper, returnThis) {
        var v2 = () => returnThis ? () => this : () => {
        };
        let v3 = v2();
        if (beforeSuper) {
            let v4 = v3();
            super();
        } else {
            super();
            let v4 = v3();
        }
    }
};
var v5 = null;
for (var v6 = 0; v6 < 10000; v6++) {
    try {
        new v1(true, true);
    } catch (e) {
        v5 = e;
        if (!(e instanceof ReferenceError))
            throw 'Exception thrown was not a reference error';
    }
    if (!v5)
        throw 'Exception not thrown for an unitialized this at iteration';
    var v7 = new v1(false, true);
    var v8 = new undefined(5, 'fail', 23, 'Test failed');
    var v9 = new v1(true, false);
}
