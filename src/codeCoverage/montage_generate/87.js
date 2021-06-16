function f5() {
    return class foo {
    }.name === 'foo' && typeof class bar {
        static name() {
        }
    }.name === 'function';
}
if (!f5())
    throw new Error('Test failed');
