function main() {
var v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["unshift", "filter", "forEach", "values", "indexOf", "sort", "shift", "map", "some", "flat", "lastIndexOf", "flatMap", "join", "reduceRight", "every", "reduce", "includes", "toLocaleString", "findIndex", "find", "fill", "push", "toString", "concat", "entries", "reverse", "copyWithin", "slice", "splice", "keys", "pop"])
var v2 = v1[-4294967296];
// v2 = .unknown
var v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["unshift", "filter", "forEach", "values", "indexOf", "sort", "shift", "map", "some", "flat", "lastIndexOf", "flatMap", "join", "reduceRight", "every", "reduce", "includes", "toLocaleString", "findIndex", "find", "fill", "push", "toString", "concat", "entries", "reverse", "copyWithin", "slice", "splice", "keys", "pop"])
var v6 = 13.37 >> v4;
// v6 = .integer | .bigint
var v7 = v6 / v2;
// v7 = .integer | .float | .bigint
var v9 = 3;
// v9 = .integer
var v10 = 0;
var v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
}
main();

