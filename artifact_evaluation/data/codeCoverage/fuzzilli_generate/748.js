function main() {
const v3 = [2720428476];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v4 = [v3,v3,v3,v3];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v5 = {b:13.37,c:Number,length:v3,valueOf:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf", "length"], withMethods: ["c"])
const v7 = [1337,v5];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v10 = [13.37,13.37,13.37,2720428476,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
v10[4096] = v7;
const v11 = new Uint8Array(v10);
// v11 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "buffer", "byteLength", "byteOffset", "length"], withMethods: ["map", "values", "includes", "filter", "some", "forEach", "slice", "find", "reverse", "indexOf", "entries", "every", "copyWithin", "findIndex", "set", "subarray", "fill", "sort", "reduceRight", "lastIndexOf", "reduce", "keys", "join"])
const v13 = v11.sort(1337);
// v13 = .undefined
}
main();

