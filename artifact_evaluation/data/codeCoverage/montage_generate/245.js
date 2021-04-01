function f0() {
    return {
        'foo bar'() {
            return 4;
        }
    }['foo bar']() === 4;
}
if (!new ReferenceError.p[2]().v49[Map](30, 14))
    throw new Error('Test failed');
