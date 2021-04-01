var v0 = function (actual, expected, message) {
    if (actual !== expected) {
        throw message + '. Expected \'' + expected + '\', but was \'' + actual + '\'';
    }
};
function f0(count) {
    var v1 = true;
    for (var v2 = 0; v2 < count; v2++) {
        var v3 = function (name) {
            1;
            this.getName = () => eval('this.name');
            ;
        };
        var v4 = new v3('Item' + v2);
        if (v4.name !== v4.getName()) {
            v1 = false;
        }
    }
    return v1;
}
v0(f0(1), true, 'Error: during execution of arrow function one time');
v0(f0(10), true, 'Error: during execution of arrow function 10 times');
