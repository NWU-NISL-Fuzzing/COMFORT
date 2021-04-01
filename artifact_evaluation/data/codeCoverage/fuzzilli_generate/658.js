function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    const v6 = v3[Function];
    // v6 = .unknown
    const v7 = 3697200800 <= v6;
    // v7 = .boolean
    const v10 = Symbol.for("-128");
    // v10 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    v2 = v3;
    const v11 = 0;
    // v11 = .integer
    const v12 = 8;
    // v12 = .integer
    const v13 = 1;
    // v13 = .integer
    const v14 = 0;
    // v14 = .integer
    const v15 = 100;
    // v15 = .integer
    const v16 = 1;
    // v16 = .integer
} while (v2 < 5);
}
main();

