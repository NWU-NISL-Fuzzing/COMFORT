var v0 = {};
function f0() {
    return v2;
}
var v1 = 0;
function f1() {
    v1++;
    if (v1 == 3) {
        Object.defineProperty(this, 'someProperty', { value: 'okay' });
        return f0();
    }
    return 'okay';
}
v0.__defineGetter__('someProperty', f1);
for (var v2 = 0; v2 < 4; v2++) {
    if (f0() != 'okay')
        throw 'Error: ' + v2;
}
