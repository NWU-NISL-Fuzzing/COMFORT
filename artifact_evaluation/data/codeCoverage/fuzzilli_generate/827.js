function main() {
function v0(v1) {
}
let v2 = v0;
function v3(v4,v5) {
    function v7(v8) {
        return v8;
    }
    const v9 = v7(arguments);
    // v9 = .unknown
    const v10 = v3(v7,v2);
    // v10 = .unknown
    const v11 = arguments;
    // v11 = .object()
}
const v13 = new Promise(v3);
// v13 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
main();

