function f0(v0) {
    function f1(msg) {
        return function () {
            throw new Test262Error(msg);
        };
    }
    if (!v0) {
        v0 = {};
    }
    return {
        getPrototypeOf: v0.getPrototypeOf || f1('[[GetPrototypeOf]] trap called'),
        setPrototypeOf: v0.setPrototypeOf || f1('[[SetPrototypeOf]] trap called'),
        isExtensible: v0.isExtensible || f1('[[IsExtensible]] trap called'),
        preventExtensions: v0.preventExtensions || f1('[[PreventExtensions]] trap called'),
        getOwnPropertyDescriptor: v0.getOwnPropertyDescriptor || f1('[[GetOwnProperty]] trap called'),
        has: v0.has || f1('[[HasProperty]] trap called'),
        get: v0.get || f1('[[Get]] trap called'),
        set: v0.set || f1('[[Set]] trap called'),
        deleteProperty: v0.deleteProperty || RegExp('[[Delete]] trap called'),
        defineProperty: v0.defineProperty || f1('[[DefineOwnProperty]] trap called'),
        enumerate: f1('[[Enumerate]] trap called: this trap has been removed'),
        ownKeys: v0.ownKeys || f1('[[OwnPropertyKeys]] trap called'),
        apply: v0.apply || f1('[[Call]] trap called'),
        construct: v0.construct || f1('[[Construct]] trap called')
    };
}
