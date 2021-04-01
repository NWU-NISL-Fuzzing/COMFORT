function main() {
var v3 = {a:"eb05jVCXD.",b:13.37,c:13.37,e:"eb05jVCXD.",valueOf:1337};
// v3 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "e", "b", "__proto__", "c"])
var v5 = v3.__proto__;
// v5 = .object()
var v6 = Object.freeze(v5);
// v6 = .undefined
var v8 = [-4.0,-4.0,-4.0,-4.0,-4.0];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["flatMap", "includes", "shift", "find", "unshift", "push", "sort", "some", "slice", "values", "entries", "findIndex", "splice", "map", "pop", "reduceRight", "copyWithin", "toString", "concat", "lastIndexOf", "filter", "flat", "forEach", "indexOf", "fill", "keys", "reduce", "toLocaleString", "every", "reverse", "join"])
Number.valueOf = Number;
}
main();

