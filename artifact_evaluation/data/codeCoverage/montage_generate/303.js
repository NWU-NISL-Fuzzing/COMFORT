function TypeError() {
    var v0 = {
        foo() {
        }
    };
    return v0.foo.name === 'foo';
}
if (!TypeError())
    throw new Error('Test failed');
