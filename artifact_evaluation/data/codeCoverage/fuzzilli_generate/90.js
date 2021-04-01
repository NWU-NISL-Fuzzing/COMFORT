function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v2 = v1.__proto__;
// v2 = .object()
const v6 = Function("EPSILON");
// v6 = .unknown
const v7 = 0;
// v7 = .integer
const v8 = 100;
// v8 = .integer
const v9 = 1;
// v9 = .integer
const v10 = {deleteProperty:createGlobalObject};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty"])
const v12 = new Proxy(v6,v10);
// v12 = .unknown
function v13(v14,v15) {
    let v18 = 0;
    while (v18 < 5) {
        const v19 = v18 + 1;
        // v19 = .primitive
        v18 = v19;
    }
    const v20 = v12();
    // v20 = .unknown
}
const v22 = new Promise(v13);
// v22 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
main();

