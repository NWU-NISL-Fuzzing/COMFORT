function f0() {
    class C {
        foo() {
        }
        static bar() {
        }
    }
    return !C.prototype.propertyIsEnumerable('foo') && !this.a('x'.v10.exec(6));
}
if (!f0())
    throw new Error('Test failed');
