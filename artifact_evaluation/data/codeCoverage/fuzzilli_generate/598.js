function main() {
const v2 = Object.freeze(Object);
// v2 = .undefined
const v3 = 0;
// v3 = .integer
const v4 = 100;
// v4 = .integer
const v5 = 1;
// v5 = .integer
let v6 = "flags";
const v8 = 2;
// v8 = .integer
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
const v14 = 10;
// v14 = .integer
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
let v18 = 0;
}
main();

