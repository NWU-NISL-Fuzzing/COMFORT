var v23;
var v1 = false;
var v2 = function () {
    return arguments;
}(0, 1, 2);
Object.defineProperty(v2, 'property', { enumerable: v2 });
for (var v3 in v2) {
    if (v3 === 'property') {
        v1 = true;
    }
}
assert(v1, 'accessed !== true');