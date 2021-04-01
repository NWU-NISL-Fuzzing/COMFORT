function main() {
var v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["flatMap", "includes", "shift", "find", "unshift", "push", "sort", "some", "slice", "values", "entries", "findIndex", "splice", "map", "pop", "reduceRight", "copyWithin", "toString", "concat", "lastIndexOf", "filter", "flat", "forEach", "indexOf", "fill", "keys", "reduce", "toLocaleString", "every", "reverse", "join"])
var v2 = [13.37,v1];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["flatMap", "includes", "shift", "find", "unshift", "push", "sort", "some", "slice", "values", "entries", "findIndex", "splice", "map", "pop", "reduceRight", "copyWithin", "toString", "concat", "lastIndexOf", "filter", "flat", "forEach", "indexOf", "fill", "keys", "reduce", "toLocaleString", "every", "reverse", "join"])
var v5 = new Uint32Array(1337);
// v5 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "__proto__", "byteOffset", "byteLength", "constructor"], withMethods: ["slice", "includes", "keys", "forEach", "some", "find", "filter", "entries", "every", "copyWithin", "reduce", "fill", "indexOf", "sort", "join", "subarray", "map", "findIndex", "lastIndexOf", "set", "reverse", "values", "reduceRight"])
try {
    var v7 = v5.set(v2,1337);
    // v7 = .undefined
} catch(v8) {
}
}
main();

