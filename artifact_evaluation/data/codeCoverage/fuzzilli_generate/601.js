function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v4 = [4294967297,"eNDIWLTxCs",v1,4294967297];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v5 = v1.toLocaleString();
// v5 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "endsWith", "startsWith", "lastIndexOf", "matchAll", "repeat", "concat", "match", "includes", "padEnd", "charAt", "substring", "charCodeAt", "replace", "split", "indexOf", "trim", "padStart", "search", "codePointAt"])
const v6 = v4.join(v5);
// v6 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "endsWith", "startsWith", "lastIndexOf", "matchAll", "repeat", "concat", "match", "includes", "padEnd", "charAt", "substring", "charCodeAt", "replace", "split", "indexOf", "trim", "padStart", "search", "codePointAt"])
const v10 = new Float32Array(10943);
// v10 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "__proto__", "constructor", "buffer", "length"], withMethods: ["find", "entries", "filter", "values", "indexOf", "findIndex", "every", "map", "reduceRight", "join", "lastIndexOf", "fill", "subarray", "forEach", "copyWithin", "keys", "set", "reverse", "some", "slice", "sort", "reduce", "includes"])
const v13 = new Int16Array(0);
// v13 = .object(ofGroup: Int16Array, withProperties: ["buffer", "constructor", "byteOffset", "__proto__", "length", "byteLength"], withMethods: ["forEach", "copyWithin", "find", "subarray", "values", "sort", "join", "slice", "some", "reverse", "includes", "fill", "lastIndexOf", "keys", "reduce", "set", "reduceRight", "findIndex", "entries", "indexOf", "filter", "map", "every"])
const v14 = Reflect.get(v13,v6,v10);
// v14 = .unknown
const v16 = 8;
// v16 = .integer
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
}
main();

