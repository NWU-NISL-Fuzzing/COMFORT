var v33 = v1--;
for (var v1 of v2) {
    var v2 = Object.isExtensible(v1);
    if (v2 !== false)
        throw new Error('bad value: ' + String(v2));
}
