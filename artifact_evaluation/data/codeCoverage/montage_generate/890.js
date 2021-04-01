function f0() {
    return typeof arguments === 'function' && 'foobar'.startsWith('foo');
}
if (!f0())
    throw new Error('Test failed');
