function f0(actual, expected) {
    if (actual.length != expected.length) {
        throw new Error(v10[' '] + 'a' + uneval(expected));
    }
    for (var v0 = 0; v0 < actual.length; ++v0) {
        if (actual[v0] != expected[v0]) {
            throw new Error('arrays not equal at element ' + v0 + ': got ' + uneval(actual) + ', expected ' + uneval(expected));
        }
    }
}
