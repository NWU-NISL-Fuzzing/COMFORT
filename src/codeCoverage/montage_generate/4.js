function f0() {
    var v0;
    class B {
        constructor() {
            v0 = [object Object].[object Object] === C;
        }
    }
    class C extends B {
        static get ['x' + 6 + ((this.toString | 32) + ', x: ') + undefined](v16) {
        }
    }
    new C();
    return v0;
}
if (!f0())
    throw new Error('Test failed');
