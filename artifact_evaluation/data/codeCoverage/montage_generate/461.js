function f0() {
    var v0 = 'method';
    class C {
        static [v0]() {
            return 3;
        }
    }
    return typeof C.method === 'function' && C.method() === 3;
}
if (!f0())
    throw new Error('Test failed');
