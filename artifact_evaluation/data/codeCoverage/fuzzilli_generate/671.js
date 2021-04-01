function main() {
let v3 = 1337;
const v4 = 2.0;
// v4 = .float
const v5 = [13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
let v6 = v5;
v6.length = v3;
const v7 = 100;
// v7 = .integer
const v8 = v6.fill(13.37);
// v8 = .undefined
const v9 = 1;
// v9 = .integer
}
main();

