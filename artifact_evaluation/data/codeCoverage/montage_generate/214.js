var e = 'NotEarlyError';
var v1 = '^((?!' + v3 + ').)*$';
var v2 = new Error(v3);
function f0(message) {
    this.message = message || '';
}
f0.prototype.toString = function () {
    return 'Test262Error: ' + this.message;
};
var v3;
v3 = function v3(message) {
    throw new f0(message);
};
function f1(message) {
    v3(message);
}
