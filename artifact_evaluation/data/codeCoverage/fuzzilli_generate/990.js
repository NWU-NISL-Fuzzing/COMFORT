function main() {
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v5 = ["4294967296",-4096,v4,-4096,1337,-2.220446049250313e-16,-2.220446049250313e-16,v4,-4096];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v6 = [v5];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v8 = new Int8Array(v6);
// v8 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "constructor", "length", "__proto__", "buffer", "byteOffset"], withMethods: ["reduce", "copyWithin", "findIndex", "entries", "lastIndexOf", "map", "set", "includes", "indexOf", "sort", "some", "reverse", "keys", "reduceRight", "values", "filter", "forEach", "slice", "subarray", "join", "fill", "find", "every"])
delete v8[v5];
}
main();

