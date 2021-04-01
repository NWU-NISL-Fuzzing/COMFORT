function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v5 = {b:v2,c:1337,length:v4,toString:Reflect};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "b", "length", "toString"])
const v9 = [13.37,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
let v10 = v9;
const v13 = [v10,13.37];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v16 = [13.37,v13,Symbol,1337,1337,-2,-2];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
async function v17(v18,v19) {
    v19.toString = v5;
    const v20 = new Float32Array(v18);
    // v20 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "__proto__", "constructor", "buffer", "length"], withMethods: ["find", "entries", "filter", "values", "indexOf", "findIndex", "every", "map", "reduceRight", "join", "lastIndexOf", "fill", "subarray", "forEach", "copyWithin", "keys", "set", "reverse", "some", "slice", "sort", "reduce", "includes"])
}
const v21 = v17(v16,v13);
// v21 = .unknown
async function v22(v23,v24) {
    const v27 = Uint8ClampedArray(10943);
    // v27 = .unknown
}
}
main();

