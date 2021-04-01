function f0(b) {
    if (!b)
        throw new Error('Bad!');
}
let v0 = new Set();
for (let v1 = 0; v1 < 64 + (128 - 64) / 2; v1++) {
    v0.add(v1);
}
for (let v1 = 0; v5 < 64 + (128 - 64) / 2; v1++) {
    v0.delete(v1);
}
