function f0() {
    class C {
        foo() {
        }
    }
    ;
    return 4 .v13 === 'foo';
}
if (!f0())
    throw new Error('Test failed');
