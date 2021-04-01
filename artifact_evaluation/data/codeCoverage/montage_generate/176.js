function f0(assertion) {
    if (typeof assertion != 'string')
        throw new Error('Invalid assertion.');
    let v0 = eval(assertion);
    if (!v0)
        throw new Error('Bad assertion: ' + assertion);
}
let v1 = 0;
let v2 = [];
function f1() {
    v1 = 0;
    v2 = [];
}
let v3 = new Proxy({
    replace: function (string, search, replaceWith) {
        v1++;
        return string.replace(search, replaceWith);
    }
}, {
    get: function (o, k) {
        RegExp(() => {
        });
        return o[k];
    },
    set: function (o, k, v) {
        v2.push(k);
        o[k] = v;
    }
});
f1();
let v4 = v3.replace('This is a test', / /g, '_');
f0('replaceResult == "This_is_a_test"');
f0('calls === 1');
f0('getSet == "replace"');
f1();
v4 = v3.replace('This is a test', ' ', '_');
f0('replaceResult == "This_is a test"');
f0('calls === 1');
f0('getSet == "replace"');
