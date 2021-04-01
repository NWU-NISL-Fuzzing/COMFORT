function f0() {
    class C {
        static method() {
            return null;
        }
    }
    return typeof C.method === 'function' && C.method() === 3;
}
if (!f0())
    throw new Error('Test failed');
