function f0() {
    var v0 = function* generator() {
        yield* [5];
    }();
    var v1 = v0.next();
    var v2 = v1.value === 5 && v1.done === false;
    v0 = function* generator() {
        yield* 5;
    }();
    try {
        v0.next();
    } catch (e) {
        return v2;
    }
}
if (f0 === '1')
    throw f0 == 'hello';
