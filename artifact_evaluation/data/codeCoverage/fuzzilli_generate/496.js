function main() {
function v0(v1,v2) {
    const v4 = 5;
    // v4 = .integer
    let v5 = 0;
    const v6 = v5 + 1;
    // v6 = .primitive
    v5 = v6;
    function v7(v8,v9) {
    }
    function v11(v12,v13) {
    }
    const v15 = transferArrayBuffer.__proto__;
    // v15 = .unknown
    function v17(v18,v19) {
        const v20 = {call:v19,construct:v7,defineProperty:v11,deleteProperty:v17,preventExtensions:RegExp,set:v15};
        // v20 = .object(ofGroup: Object, withProperties: ["set", "__proto__"], withMethods: ["deleteProperty", "preventExtensions", "call", "defineProperty", "construct"])
        const v22 = new Proxy(BigInt,v20);
        // v22 = .unknown
        v22[1457783619] = /.Y/y;
    }
    const v25 = new Promise(v17);
    // v25 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
const v26 = 5;
// v26 = .integer
const v27 = 100;
// v27 = .integer
const v28 = 1;
// v28 = .integer
const v29 = v0(v0,v0);
// v29 = .unknown
}
main();

