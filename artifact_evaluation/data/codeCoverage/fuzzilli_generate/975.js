function main() {
const v2 = 1;
// v2 = .integer
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
function v6(v7,v8) {
    const v9 = v8 + 1;
    // v9 = .primitive
    let v11 = v9;
    do {
        const v14 = v9 * 13.37;
        // v14 = .integer | .float | .bigint
        for (let v15 = 1; v15 < 65537; v15 = v15 + 1) {
        }
    } while (v11 < 7);
}
const v17 = v6(9,3826019563);
// v17 = .unknown
}
main();

