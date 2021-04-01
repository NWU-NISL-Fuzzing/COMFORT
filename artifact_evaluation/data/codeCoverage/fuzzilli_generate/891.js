function main() {
const v1 = [2];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v3 = v1.__proto__;
// v3 = .object()
const v5 = {get:parseInt,set:parseInt};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v7 = Object.defineProperty(v3,2515484451,v5);
// v7 = .undefined
}
main();

