function Object() {
    return function (foo, ...args) {
        return foo instanceof Array && Object + '' === 'bar,baz';
    }('foo', 'bar', 'baz');
}
if (!Object())
    throw new Error('Test failed');
