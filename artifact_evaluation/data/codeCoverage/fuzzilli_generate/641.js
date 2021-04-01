function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v3 = Symbol.split;
// v3 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v4 = v1[v3];
// v4 = .unknown
function v6(v7,v8) {
    const v9 = 0;
    // v9 = .integer
    const v10 = 100;
    // v10 = .integer
    const v11 = 1;
    // v11 = .integer
    const v14 = {__proto__:"6",a:65537,b:"6",constructor:65537,e:"6",length:65537,valueOf:"6"};
    // v14 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "a", "__proto__", "e", "b", "length"])
    const v16 = [65537,65537];
    // v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v17 = "6".slice;
    // v17 = .unknown
    const v18 = Reflect.apply(v17,v14,v16);
    // v18 = .unknown
    const v19 = v6(noInline,v7);
    // v19 = .unknown
}
const v21 = new Promise(v6);
// v21 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
main();

