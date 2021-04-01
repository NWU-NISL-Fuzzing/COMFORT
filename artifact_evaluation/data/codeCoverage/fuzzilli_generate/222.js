function main() {
var v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
var v4 = new Uint8Array(27195);
// v4 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "length", "byteLength", "constructor", "buffer", "byteOffset"], withMethods: ["some", "reverse", "includes", "copyWithin", "filter", "map", "forEach", "slice", "reduceRight", "join", "values", "entries", "reduce", "fill", "sort", "findIndex", "find", "lastIndexOf", "keys", "every", "set", "subarray", "indexOf"])
for (var v5 of "4294967296") {
    delete v4[v5];
}
}
main();

