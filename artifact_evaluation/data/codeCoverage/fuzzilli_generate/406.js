function main() {
const v1 = 0;
// v1 = .integer
const v2 = 100;
// v2 = .integer
const v3 = 1;
// v3 = .integer
const v4 = 100;
// v4 = .integer
const v5 = 1;
// v5 = .integer
const v7 = [13.37,13.37,13.37,13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v9 = [1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v10 = [1337,v7,ArrayBuffer,v9];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
function v12(v13,v14) {
    const v16 = 5;
    // v16 = .integer
    let v17 = 0;
    const v18 = v17 + 1;
    // v18 = .primitive
    v17 = v18;
    const v19 = v10 >>> v13;
    // v19 = .integer | .bigint
    let v20 = 0;
    const v21 = v20 + 1;
    // v21 = .primitive
    const v22 = v21 ** v17;
    // v22 = .integer | .float | .bigint
}
for (let v25 = 13.37; v25 < 100; v25 = v25 + 1) {
    const v26 = v12(v25,v12);
    // v26 = .unknown
}
}
main();

