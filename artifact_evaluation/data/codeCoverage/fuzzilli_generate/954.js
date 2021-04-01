function main() {
function v0(v1,v2) {
    function v3(v4,v5) {
        function v6(v7,v8) {
            function v9(v10,v11) {
                return -293370011n;
            }
            const v13 = v9(v9);
            // v13 = .unknown
            const v14 = v13 * v13;
            // v14 = .integer | .float | .bigint
        }
        const v16 = new Promise(v6);
        // v16 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
    }
    for (let v19 = 1; v19 <= 100; v19 = v19 + 1) {
        const v20 = v3(v3,v3);
        // v20 = .unknown
    }
}
const v22 = new Promise(v0);
// v22 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
main();

