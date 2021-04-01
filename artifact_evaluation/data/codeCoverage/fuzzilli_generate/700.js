function main() {
const v5 = new Uint8Array(0);
// v5 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "byteOffset", "constructor", "length", "buffer", "__proto__"], withMethods: ["includes", "join", "slice", "copyWithin", "filter", "lastIndexOf", "entries", "every", "fill", "reverse", "keys", "map", "subarray", "indexOf", "reduceRight", "forEach", "some", "find", "set", "findIndex", "sort", "reduce", "values"])
const v6 = new Float64Array(1337);
// v6 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "constructor", "buffer", "__proto__", "byteLength", "length"], withMethods: ["map", "values", "subarray", "find", "fill", "set", "findIndex", "some", "reduceRight", "reverse", "join", "includes", "entries", "reduce", "every", "copyWithin", "sort", "forEach", "lastIndexOf", "indexOf", "filter", "slice", "keys"])
function v7(v8,v9) {
    const v11 = new Int32Array(Int32Array);
    // v11 = .object(ofGroup: Int32Array, withProperties: ["byteLength", "byteOffset", "__proto__", "length", "buffer", "constructor"], withMethods: ["every", "values", "forEach", "slice", "find", "indexOf", "entries", "map", "set", "some", "fill", "subarray", "reduceRight", "join", "lastIndexOf", "reduce", "includes", "copyWithin", "findIndex", "reverse", "keys", "sort", "filter"])
    const v13 = [];
    // v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v14 = v5.subarray;
    // v14 = .unknown
    const v15 = Reflect.apply(v14,v6,v13);
    // v15 = .unknown
    const v16 = v6.set(v11,Uint16Array);
    // v16 = .undefined
}
const v18 = new Promise(v7);
// v18 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
main();

