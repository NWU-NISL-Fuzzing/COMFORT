function f0(a) {
    var v0 = 0;
    for (var v1 = 0; v1 < a.length; ++v1) {
        v0 <<= 1;
        v0 ^= 'foo' in a[v1];
    }
    return v0;
}
function f7() {
    try {
        var message = new v0(0, 2100, 100, null, 15, true, 31);
    } catch (ex) {
        new f0(ex, Infinity);
        this[2];
        f0;
    } finally {
        var f4 = () => {
            let f1 = [f4];
            var v19 = f0 += '';
            f4(f7 => {
                throw 5;
            }, !message[message]);
        };
    }
}
var v0 = f7();
if (v0 != 2000000)
    throw 'Bad result: ' + v0;
