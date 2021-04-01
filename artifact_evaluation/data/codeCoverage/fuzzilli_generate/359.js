function main() {
function v0(v1,v2) {
    const v4 = BigInt(v2);
    // v4 = .bigint
    const v5 = 13.37;
    // v5 = .float
    const v6 = 1337;
    // v6 = .integer
    const v7 = 1;
    // v7 = .integer
    const v8 = v4 < v4;
    // v8 = .boolean
    return v4;
}
for (let v12 = 0; v12 < 100; v12 = v12 + 1) {
    const v13 = v0(v0,v12);
    // v13 = .unknown
}
}
main();

