function f0() {
    return typeof RegExp.prototype[Symbol.replace] === 'function';
}
if (!f0())
    throw new f0(f0);
