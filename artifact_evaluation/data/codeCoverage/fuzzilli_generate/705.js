function main() {
const v1 = 9;
// v1 = .integer
let v2 = 0;
const v4 = 1;
// v4 = .integer
let v5 = 0;
function v6(v7,v8) {
    function v9(v10,v11) {
        function v12(v13,v14) {
            return -3886218543n;
        }
        const v16 = v12(v12);
        // v16 = .unknown
        const v17 = v16 + v16;
        // v17 = .primitive
    }
    const v19 = new Promise(v9);
    // v19 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
for (let v22 = 1; v22 <= 100; v22 = v22 + 1) {
    const v23 = v6(v6,v6);
    // v23 = .unknown
}
}
main();

