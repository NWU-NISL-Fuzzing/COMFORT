function main() {
const v0 = ArrayBuffer;
// v0 = .object(ofGroup: ArrayBufferConstructor, withProperties: ["prototype"], withMethods: ["isView"]) + .constructor([.integer] => .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"]))
const v3 = [1337,"9"];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["pop", "forEach", "find", "shift", "every", "join", "flatMap", "copyWithin", "splice", "keys", "unshift", "reverse", "fill", "reduce", "values", "lastIndexOf", "flat", "concat", "findIndex", "push", "entries", "sort", "slice", "toString", "includes", "filter", "reduceRight", "some", "toLocaleString", "map", "indexOf"])
let v5 = undefined;
const v10 = [1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["pop", "forEach", "find", "shift", "every", "join", "flatMap", "copyWithin", "splice", "keys", "unshift", "reverse", "fill", "reduce", "values", "lastIndexOf", "flat", "concat", "findIndex", "push", "entries", "sort", "slice", "toString", "includes", "filter", "reduceRight", "some", "toLocaleString", "map", "indexOf"])
const v11 = [-246127885,"hasInstance"];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["pop", "forEach", "find", "shift", "every", "join", "flatMap", "copyWithin", "splice", "keys", "unshift", "reverse", "fill", "reduce", "values", "lastIndexOf", "flat", "concat", "findIndex", "push", "entries", "sort", "slice", "toString", "includes", "filter", "reduceRight", "some", "toLocaleString", "map", "indexOf"])
const v12 = {__proto__:v10,c:"hasInstance",constructor:"hasInstance",d:-246127885,length:parseInt,toString:v11};
// v12 = .object(ofGroup: Object, withProperties: ["d", "toString", "c", "constructor", "__proto__"], withMethods: ["length"])
delete v12.toString;
v10.length = v12;
}
main();

