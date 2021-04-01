function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v3 = [v2,v2];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
let v7 = v3;
v7 = 13.37;
function v8(v9,v10,v11) {
    const v12 = 4294967297 << v7;
    // v12 = .integer | .bigint
    Symbol[-950514341] = v1;
    const v13 = v12 & 13.37;
    // v13 = .integer | .bigint
    const v14 = v13 - 4294967297;
    // v14 = .integer | .float | .bigint
    return v14;
}
const v17 = new Float32Array(10943);
// v17 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "__proto__", "constructor", "buffer", "length"], withMethods: ["find", "entries", "filter", "values", "indexOf", "findIndex", "every", "map", "reduceRight", "join", "lastIndexOf", "fill", "subarray", "forEach", "copyWithin", "keys", "set", "reverse", "some", "slice", "sort", "reduce", "includes"])
const v18 = v17.map(v8);
// v18 = .object(ofGroup: Float32Array, withProperties: ["length", "byteOffset", "__proto__", "constructor", "buffer", "byteLength"], withMethods: ["filter", "sort", "reverse", "keys", "some", "subarray", "reduce", "includes", "find", "forEach", "fill", "set", "indexOf", "every", "reduceRight", "join", "copyWithin", "slice", "map", "lastIndexOf", "values", "entries", "findIndex"])
}
main();

