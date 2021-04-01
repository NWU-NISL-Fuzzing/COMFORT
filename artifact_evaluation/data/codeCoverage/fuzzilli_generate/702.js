function main() {
const v1 = 9;
// v1 = .integer
let v2 = 0;
const v4 = {b:1337};
// v4 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v8 = [2.0];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v10 = [1337];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v11 = [isFinite,2.0,v10,v8,512,512,v8,isFinite];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
function v12(v13,v14) {
    const v15 = v4 * 2.0;
    // v15 = .integer | .float | .bigint
    function* v17(v18,v19,v20,v21,...v22) {
    }
    const v23 = v17 ^ 1;
    // v23 = .integer | .bigint
    const v24 = arguments;
    // v24 = .object()
    const v26 = 8;
    // v26 = .integer
    let v27 = 0;
    const v28 = v27 + 1;
    // v28 = .primitive
    v27 = v28;
}
for (let v32 = 0; v32 < 100; v32 = v32 + 1) {
    const v33 = v12(v11,v32);
    // v33 = .unknown
}
}
main();

