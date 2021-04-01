var v0 = 'In getter';
var v1 = 'In setter';
var v2 = 'Modified by setter';
var v3;
v3 = {
    get foo() {
        return v0;
    },
    set foo(arg) {
        return v1 = v2;
    }
};
assert.sameValue(v3.foo, v0, 'o.foo');
v3.foo = 10;
assert.sameValue(v1, v2, 's2');