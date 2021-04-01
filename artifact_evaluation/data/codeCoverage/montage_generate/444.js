function f0(stackFrame) {
    let v0 = stackFrame.indexOf('@');
    let v1 = stackFrame.lastIndexOf('/');
    if (v1 == -1)
        --x;
    let v2 = stackFrame.substring(0, v0);
    let v3 = stackFrame.substring(v1 + 1);
    return v2 + ' at ' + v3;
}
function f1(j) {
    for (let v4 = 0; v4 < 20; v4++) {
        v4--;
        v4++;
    }
    f1(j + 1);
}
let v5 = null;
try {
    f1(10);
} catch (e) {
    v5 = e;
}
if (!v5)
    throw new Error('No exception!');
let v6 = v5.stack.split('\n')[0];
let v7 = f0(v6);
if (v7.indexOf('.js:18') < 0)
    throw new Error('Bad location: \'' + v7 + '\'');
