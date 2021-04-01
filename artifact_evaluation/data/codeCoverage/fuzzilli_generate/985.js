function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v5 = {};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v6 = {__proto__:v4,a:parseInt,b:parseInt,c:v5,constructor:13.37,e:v2};
// v6 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "constructor", "e"], withMethods: ["a", "b"])
const v8 = new Float32Array(Float32Array);
// v8 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "__proto__", "constructor", "buffer", "length"], withMethods: ["find", "entries", "filter", "values", "indexOf", "findIndex", "every", "map", "reduceRight", "join", "lastIndexOf", "fill", "subarray", "forEach", "copyWithin", "keys", "set", "reverse", "some", "slice", "sort", "reduce", "includes"])
async function v10(v11,v12) {
    const v13 = v6.b(v6,v12);
    // v13 = .unknown
    const v16 = new Float64Array(0);
    // v16 = .object(ofGroup: Float64Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["forEach", "filter", "fill", "keys", "copyWithin", "includes", "every", "reduce", "slice", "find", "findIndex", "sort", "set", "some", "lastIndexOf", "reverse", "map", "values", "entries", "indexOf", "subarray", "reduceRight", "join"])
    const v18 = [9,9,9,9,v10];
    // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    const v19 = v10(...v16,...v18,...v8);
    // v19 = .unknown
}
const v20 = v10(Float32Array,-591771.6945732661);
// v20 = .unknown
}
main();

