function main() {
var v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["flatMap", "includes", "shift", "find", "unshift", "push", "sort", "some", "slice", "values", "entries", "findIndex", "splice", "map", "pop", "reduceRight", "copyWithin", "toString", "concat", "lastIndexOf", "filter", "flat", "forEach", "indexOf", "fill", "keys", "reduce", "toLocaleString", "every", "reverse", "join"])
var v2 = v1[v1];
// v2 = .unknown
var v3 = "68q.30a3Ob";
// v3 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["startsWith", "includes", "repeat", "endsWith", "lastIndexOf", "match", "slice", "padStart", "replace", "concat", "charAt", "indexOf", "padEnd", "trim", "charCodeAt", "substring", "split", "codePointAt", "matchAll", "search"])
var v6 = {d:"length"};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
var v9 = new Int8Array(v6);
// v9 = .object(ofGroup: Int8Array, withProperties: ["constructor", "buffer", "length", "byteOffset", "byteLength", "__proto__"], withMethods: ["lastIndexOf", "findIndex", "reduceRight", "fill", "subarray", "every", "sort", "indexOf", "entries", "set", "reduce", "slice", "includes", "reverse", "filter", "map", "some", "join", "values", "forEach", "find", "copyWithin", "keys"])
var v11 = CBOR.encode(v9,Reflect);
// v11 = .object()
var v13 = CBOR.decode(v11);
// v13 = .object()
var v14 = ArrayBuffer.isView(v13);
// v14 = .boolean
}
main();

