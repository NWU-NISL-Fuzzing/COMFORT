function main() {
function v0(v1,v2,v3) {
    const v5 = v2 >>> -4096;
    // v5 = .integer | .bigint
    let v6 = v5;
    const v7 = v5 >> v6;
    // v7 = .integer | .bigint
    const v8 = v7 * v7;
    // v8 = .integer | .float | .bigint
}
const v11 = new Float32Array(10943);
// v11 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "__proto__", "constructor", "buffer", "length"], withMethods: ["find", "entries", "filter", "values", "indexOf", "findIndex", "every", "map", "reduceRight", "join", "lastIndexOf", "fill", "subarray", "forEach", "copyWithin", "keys", "set", "reverse", "some", "slice", "sort", "reduce", "includes"])
const v12 = v11.map(v0);
// v12 = .object(ofGroup: Float32Array, withProperties: ["length", "byteOffset", "__proto__", "constructor", "buffer", "byteLength"], withMethods: ["filter", "sort", "reverse", "keys", "some", "subarray", "reduce", "includes", "find", "forEach", "fill", "set", "indexOf", "every", "reduceRight", "join", "copyWithin", "slice", "map", "lastIndexOf", "values", "entries", "findIndex"])
}
main();

