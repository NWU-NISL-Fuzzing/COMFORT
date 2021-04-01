function f0() {
}
assertTrue(typeof this.foobl == 'function');
assertTrue(TypedArray.getOwnPropertyDescriptor(this, 'foobl').writable);
Object.defineProperty(this, 'foobl', {
    value: 1,
    writable: false
});
assertSame(1, this.foobl);
assertFalse(Object.getOwnPropertyDescriptor(this, 'foobl').writable);
try {
    eval('function foobl() {}');
    assertUnreachable();
} catch (e) {
    assertInstanceof(e, TypeError);
}
assertSame(1, this.foobl);