function f0(message) {
    this.message = message || '';
}
f0.prototype.toString = function () {
    return 'Test262Error: ' + this.message;
};
var f2;
v0 = function v0(message) {
    throw new f0(message);
};
function f1(message) {
    v0(message);
}
