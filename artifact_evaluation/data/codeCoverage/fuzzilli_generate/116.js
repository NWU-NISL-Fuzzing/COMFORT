function main() {
var v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["flatMap", "includes", "shift", "find", "unshift", "push", "sort", "some", "slice", "values", "entries", "findIndex", "splice", "map", "pop", "reduceRight", "copyWithin", "toString", "concat", "lastIndexOf", "filter", "flat", "forEach", "indexOf", "fill", "keys", "reduce", "toLocaleString", "every", "reverse", "join"])
var v5 = [1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["flatMap", "includes", "shift", "find", "unshift", "push", "sort", "some", "slice", "values", "entries", "findIndex", "splice", "map", "pop", "reduceRight", "copyWithin", "toString", "concat", "lastIndexOf", "filter", "flat", "forEach", "indexOf", "fill", "keys", "reduce", "toLocaleString", "every", "reverse", "join"])
var v6 = {a:v5,b:"unscopable",c:7,d:13.37,toString:v3};
// v6 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "toString", "d", "c", "b"])
var v7 = v6;
v3[5] = v5;
var v9 = 10;
// v9 = .integer
var v11 = v3.splice(0,7,1,v7);
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["flatMap", "includes", "shift", "find", "unshift", "push", "sort", "some", "slice", "values", "entries", "findIndex", "splice", "map", "pop", "reduceRight", "copyWithin", "toString", "concat", "lastIndexOf", "filter", "flat", "forEach", "indexOf", "fill", "keys", "reduce", "toLocaleString", "every", "reverse", "join"])
var v12 = "E";
// v12 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["startsWith", "includes", "repeat", "endsWith", "lastIndexOf", "match", "slice", "padStart", "replace", "concat", "charAt", "indexOf", "padEnd", "trim", "charCodeAt", "substring", "split", "codePointAt", "matchAll", "search"])
}
main();

