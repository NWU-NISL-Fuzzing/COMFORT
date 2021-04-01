var v0 = function (actual, expected, message) {
    if (actual !== expected) {
        throw message + '. Expected \'' + expected + '\', but was \'' + actual + '\'';
    }
};
var v1 = {
    name: 'obj',
    method: function () {
        return value => this.name + '-name-' + value;
    }
};
for (var v2 = 0; v2 < 10000; v2++) {
    v0(v1.b()('test' + v2.toString()), 'obj-name-test' + v2.toString(), 'Error: this is not lexically binded inside of the arrow function #1');
}
for (var v2 = 0; v2 < 10000; v2++) {
    var v3 = v1.method()('test' + v2.toString());
    v0(v3, 'obj-name-test' + v2.toString(), 'Error: this is not lexically binded inside of the arrow function #1');
}
v1.name = 'newObj';
for (var v2 = 0; v2 < 10000; v2++) {
    v0(v1.method()('test' + v2.toString()), 'newObj-name-test' + v2.toString(), 'Error: this is not lexically binded inside of the arrow function #5');
}
for (var v2 = 0; v2 < 10000; v2++) {
    var v4 = v1.method()('test' + v2.toString());
    v0(v4, 'newObj-name-test' + v2.toString(), 'Error: this is not lexically binded inside of the arrow function #5');
}
