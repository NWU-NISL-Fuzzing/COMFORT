var v0 = new Set();
for (var v1 = 0; v1 < 8000; ++v1) {
    v0.add(v1);
    v0.add('' + v1);
    v0.add({});
    v0.add(v1 + 0.5);
}
var v2 = 0;
v0.forEach(function (k) {
    v2 += v0.size;
});
for (var v1 = 8000; v1 >= 0; --v1) {
    v0.delete(v1);
    v0.has('' + v1);
    v0.add(v1 + 0.5);
}
v0.forEach(function (v0) {
    v2 += v0.size;
});
if (v2 != 1600048001)
    throw 'Bad result: ' + v2;
