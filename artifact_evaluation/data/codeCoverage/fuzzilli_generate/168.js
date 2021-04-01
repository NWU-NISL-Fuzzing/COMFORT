function main() {
var v0 = Symbol;
// v0 = .object(ofGroup: SymbolConstructor, withProperties: ["match", "iterator", "split", "unscopable", "isConcatSpreadable", "toPrimitive", "replace", "asyncIterator", "search", "matchAll", "hasInstance", "species", "toStringTag"], withMethods: ["keyFor", "for"]) + .function([.string] => .object(ofGroup: Symbol, withProperties: ["description", "__proto__"]))
var v2 = "2";
var v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "constructor", "__proto__"], withMethods: ["sort", "fill", "flatMap", "indexOf", "toString", "every", "join", "slice", "splice", "shift", "concat", "entries", "lastIndexOf", "forEach", "reduce", "reverse", "map", "pop", "reduceRight", "find", "includes", "copyWithin", "keys", "filter", "toLocaleString", "findIndex", "values", "some", "unshift", "push", "flat"])
var v5 = v4;
var v8 = {getPrototypeOf:Object,has:Object};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "has"])
var v10 = new Proxy(v5,v8);
// v10 = .unknown
var v11 = v10.__proto__;
// v11 = .unknown
}
main();

