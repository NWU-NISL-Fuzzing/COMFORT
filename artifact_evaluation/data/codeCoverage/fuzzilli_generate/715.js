function main() {
var v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["unshift", "filter", "forEach", "values", "indexOf", "sort", "shift", "map", "some", "flat", "lastIndexOf", "flatMap", "join", "reduceRight", "every", "reduce", "includes", "toLocaleString", "findIndex", "find", "fill", "push", "toString", "concat", "entries", "reverse", "copyWithin", "slice", "splice", "keys", "pop"])
var v4 = {d:1337,length:v3,toString:"0",valueOf:13.37};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "toString", "d", "length", "__proto__"])
var v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["unshift", "filter", "forEach", "values", "indexOf", "sort", "shift", "map", "some", "flat", "lastIndexOf", "flatMap", "join", "reduceRight", "every", "reduce", "includes", "toLocaleString", "findIndex", "find", "fill", "push", "toString", "concat", "entries", "reverse", "copyWithin", "slice", "splice", "keys", "pop"])
var v7 = {defineProperty:v4};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "defineProperty"])
var v9 = new Uint8ClampedArray(v6,v7);
// v9 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "buffer", "length", "byteOffset", "constructor"], withMethods: ["subarray", "reduce", "indexOf", "set", "includes", "keys", "fill", "slice", "reverse", "sort", "entries", "reduceRight", "copyWithin", "forEach", "join", "values", "filter", "some", "lastIndexOf", "find", "every", "findIndex", "map"])
for (var v10 in v9) {
}
}
main();

