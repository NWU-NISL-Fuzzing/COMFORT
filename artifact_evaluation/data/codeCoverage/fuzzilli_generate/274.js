function main() {
let v1 = 9;
function v2(v3,v4) {
    for (let v8 = 0; v8 < 4; v8 = v8 + 1) {
        const v9 = 0;
        // v9 = .integer
        const v10 = 1;
        // v10 = .integer
        const v11 = 1;
        // v11 = .integer
        let v13 = 8;
        const v14 = v13 + 1;
        // v14 = .primitive
        v1 = v14;
    }
}
for (let v18 = 0; v18 < 100; v18 = v18 + 1) {
    const v19 = v2(v2,v18);
    // v19 = .unknown
}
}
main();

