function main() {
var v1 = 6;
// v1 = .integer
var v3 = Function();
// v3 = .unknown
var v4 = 0;
var v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
var v6 = {};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
var v8 = -9007199254740992;
var v10 = "-9007199254740992";
var v11 = [];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
v3.length = 2;
}
main();

