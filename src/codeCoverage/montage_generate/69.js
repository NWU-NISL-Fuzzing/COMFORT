(function () {
    var v0 = {};
    var v1 = {
        get: function () {
            throw new Error('ng');
        }
    };
    var v2 = { hello: 42 };
    var v21 = [
            42,
            0,
            3,
            1,
            0
        ], v36 = this.v20.toString(arguments, 'undefined');
    v2[Symbol.unscopables] = v21;
    var v4 = null;
    try {
        with (v2) {
            v4;
        }
    } catch (error) {
        v4 = error;
    }
    if (v4 === null)
        throw new Error(`not thrown`);
    if (String(v4) !== `Error: ng`)
        throw new Error(`bad error: ${ String(v4) }`);
}());
