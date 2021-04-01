function main() {
const v0 = Object;
// v0 = .object(ofGroup: ObjectConstructor, withProperties: ["prototype"], withMethods: ["setPrototypeOf", "assign", "fromEntries", "seal", "getOwnPropertyNames", "freeze", "defineProperty", "create", "getPrototypeOf", "getOwnPropertySymbols", "keys", "values", "isExtensible", "entries", "is", "getOwnPropertyDescriptor", "preventExtensions", "defineProperties", "getOwnPropertyDescriptors", "isSealed", "isFrozen"]) + .function([.anything...] => .object()) + .constructor([.anything...] => .object())
const v2 = 0;
// v2 = .integer
const v3 = 8;
// v3 = .integer
const v4 = 1;
// v4 = .integer
const v5 = 0;
// v5 = .integer
const v6 = 100;
// v6 = .integer
const v7 = 1;
// v7 = .integer
function v8(v9,v10) {
    const v11 = v8(noInline,v9);
    // v11 = .unknown
    const v14 = Int16Array * 0;
    // v14 = .integer | .float | .bigint
    const v17 = [1337,1337,1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v18 = {__proto__:v17,a:1337,c:1337,d:Function,e:v17,toString:Function};
    // v18 = .object(ofGroup: Object, withProperties: ["d", "e", "c", "__proto__", "a", "toString"])
    const v20 = [13.37,13.37,13.37,13.37];
    // v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v21 = v20.__proto__;
    // v21 = .object()
}
const v23 = new Promise(v8);
// v23 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
main();

