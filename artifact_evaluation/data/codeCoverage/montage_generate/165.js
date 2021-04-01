function f0() {
    return typeof Set.prototype[Symbol.iterator] === 'function';
}
if (!f0())
    throw new f0('Test failed');
