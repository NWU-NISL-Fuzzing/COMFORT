function main() {
function v1(v2,v3) {
    const v5 = [1337,1337];
    // v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    function v6(v7,v8) {
        const v10 = 7;
        // v10 = .integer
        let v11 = 0;
    }
    const v12 = {call:v1,construct:isFinite,getOwnPropertyDescriptor:isFinite,has:v2,ownKeys:v2,preventExtensions:v6};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "has", "construct", "getOwnPropertyDescriptor", "ownKeys", "preventExtensions"])
    const v14 = new Proxy(v5,v12);
    // v14 = .unknown
    for (let v18 = 0; v18 < 100; v18 = v18 + 1) {
        const v19 = 100;
        // v19 = .integer
        const v20 = 1;
        // v20 = .integer
        for (let v23 = 1; v23 < 100; v23 = v23 + 1) {
        }
        const v25 = 1000n << 1000n;
        // v25 = .integer | .bigint
    }
}
const v27 = new Promise(v1);
// v27 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
main();

