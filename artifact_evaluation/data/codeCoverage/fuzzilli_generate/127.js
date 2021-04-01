function main() {
var v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["flatMap", "includes", "shift", "find", "unshift", "push", "sort", "some", "slice", "values", "entries", "findIndex", "splice", "map", "pop", "reduceRight", "copyWithin", "toString", "concat", "lastIndexOf", "filter", "flat", "forEach", "indexOf", "fill", "keys", "reduce", "toLocaleString", "every", "reverse", "join"])
try {
    var v5 = [parseFloat,Reflect];
    // v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["flatMap", "includes", "shift", "find", "unshift", "push", "sort", "some", "slice", "values", "entries", "findIndex", "splice", "map", "pop", "reduceRight", "copyWithin", "toString", "concat", "lastIndexOf", "filter", "flat", "forEach", "indexOf", "fill", "keys", "reduce", "toLocaleString", "every", "reverse", "join"])
    Reflect.__proto__ = v5;
    var v6 = v3 >>> Reflect;
    // v6 = .integer | .bigint
} catch(v7) {
}
}
main();

