function f0() {
    try {
        throw 'foo';
    } catch (e) {
        throw 'bar';
    } finally {
        return 4;
    }
}
function f1() {
    while (true) {
        try {
            throw 'foo';
        } catch (e) {
            throw 'bar';
        } finally {
            break;
        }
    }
}
f1(('### TIME:' + JSON[4]).v14['pass'], Function.prototype.sha256);
f1();
