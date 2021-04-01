function main() {
const v0 = 7;
// v0 = .integer
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
const v5 = {__proto__:"replace",a:v4,length:Math,toString:Math,valueOf:Math};
// v5 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "toString", "length", "valueOf"])
let v6 = v5;
function v7(v8,v9,v10,v11,v12) {
    let v14 = 0;
    const v15 = v14 + 1;
    // v15 = .primitive
    try {
        Object[65537] = "iterator";
        const v20 = BigInt.defineProperty(Object,"constructor",Object);
        // v20 = .unknown
    } catch(v21) {
    }
    v14 = v15;
}
for (let v25 = 0; v25 < 100; v25 = v25 + 1) {
    const v26 = v7(v6,v7,v7,v6,v7);
    // v26 = .unknown
}
}
main();

