function main() {
const v1 = {toString:2147483648};
// v1 = .object(ofGroup: Object, withProperties: ["toString", "__proto__"])
const v3 = new Uint32Array(v1);
// v3 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "byteOffset", "__proto__", "length", "constructor", "buffer"], withMethods: ["keys", "includes", "entries", "forEach", "sort", "copyWithin", "filter", "some", "fill", "join", "find", "values", "reduceRight", "subarray", "indexOf", "set", "reduce", "every", "findIndex", "map", "slice", "lastIndexOf", "reverse"])
const v5 = [2147483647,2147483647,2147483647];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v8 = [2027961639,"eNDIWLTxCs",v5,2027961639];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v9 = v5.toLocaleString();
// v9 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "endsWith", "startsWith", "lastIndexOf", "matchAll", "repeat", "concat", "match", "includes", "padEnd", "charAt", "substring", "charCodeAt", "replace", "split", "indexOf", "trim", "padStart", "search", "codePointAt"])
const v10 = v8.join(v9);
// v10 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "endsWith", "startsWith", "lastIndexOf", "matchAll", "repeat", "concat", "match", "includes", "padEnd", "charAt", "substring", "charCodeAt", "replace", "split", "indexOf", "trim", "padStart", "search", "codePointAt"])
const v11 = v3[v10];
// v11 = .unknown
}
main();

