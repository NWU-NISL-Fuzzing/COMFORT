function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v3 = {__proto__:13.37,c:1337,constructor:v2,d:v2,length:v2};
// v3 = .object(ofGroup: Object, withProperties: ["length", "d", "constructor", "__proto__", "c"])
const v5 = new Uint16Array(v3);
// v5 = .object(ofGroup: Uint16Array, withProperties: ["byteOffset", "__proto__", "byteLength", "length", "constructor", "buffer"], withMethods: ["values", "reduce", "map", "subarray", "findIndex", "find", "slice", "includes", "copyWithin", "fill", "indexOf", "filter", "keys", "set", "sort", "entries", "every", "some", "reduceRight", "join", "forEach", "lastIndexOf", "reverse"])
const v6 = v5.lastIndexOf(Uint16Array);
// v6 = .integer
}
main();

