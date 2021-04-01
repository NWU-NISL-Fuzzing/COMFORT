function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v5 = [Symbol,1337,v4,v4];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v8 = [BigInt,v5,13.37,1024,-263424.3273697621];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
v8[16] = v4;
const v10 = new Uint16Array(v8);
// v10 = .object(ofGroup: Uint16Array, withProperties: ["byteOffset", "__proto__", "byteLength", "length", "constructor", "buffer"], withMethods: ["values", "reduce", "map", "subarray", "findIndex", "find", "slice", "includes", "copyWithin", "fill", "indexOf", "filter", "keys", "set", "sort", "entries", "every", "some", "reduceRight", "join", "forEach", "lastIndexOf", "reverse"])
const v12 = v10.sort(256);
// v12 = .undefined
}
main();

