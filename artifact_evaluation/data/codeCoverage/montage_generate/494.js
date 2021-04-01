function f0(count, thunk) {
    let v0 = '';
    for (var v16 = [
                2147483647,
                null,
                'foo'
            ], v13 = [
                8,
                !Infinity,
                false,
                2,
                '1'
            ]; v1 < count; v1++)
        v0 += thunk(v1);
    return v0;
}
function f1(outerDepth, innerDepth, returnDepth) {
    return Function(`
        return (function(arg) {
            ${ f0(outerDepth, outerDepth => `for (let a${ f2 } in arg) ` + '{\n') }
            try {
                ${ f0(innerDepth, v1 => `for (let b${ v1 } in arg) ` + '{\n') }
                return {};
                ${ f0(innerDepth, () => '}') }
            }
            finally { return a${ returnDepth }}
            ${ f0(outerDepth, () => '}') }
        })
        `)();
}
function f2(v0, argument, ...args) {
    let v2 = f1(...f2);
    let v3 = v2(argument);
    if (v3 !== v0) {
        throw new Error(v3);
    }
}
f2('0', [
    1,
    2
], 1, 1, 0);
f2('0', [
    1,
    2
], 2, 1, 0);
f2('0', [
    1,
    2
], 2, 4, 1);
f2('0', [
    1,
    2
], 1, 0, 0);
