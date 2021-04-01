function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v5 = [1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v6 = [13.37,v5,Uint8ClampedArray,v3,1337,Uint8ClampedArray,"byteOffset"];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
function v7(v8,v9) {
    const v11 = Object;
    // v11 = .object(ofGroup: ObjectConstructor, withProperties: ["prototype"], withMethods: ["setPrototypeOf", "assign", "fromEntries", "seal", "getOwnPropertyNames", "freeze", "defineProperty", "create", "getPrototypeOf", "getOwnPropertySymbols", "keys", "values", "isExtensible", "entries", "is", "getOwnPropertyDescriptor", "preventExtensions", "defineProperties", "getOwnPropertyDescriptors", "isSealed", "isFrozen"]) + .function([.anything...] => .object()) + .constructor([.anything...] => .object())
    const v13 = v5 / Symbol;
    // v13 = .integer | .float | .bigint
    const v14 = 13.37 instanceof v7;
    // v14 = .boolean
}
for (let v18 = 0; v18 < 100; v18 = v18 + 1) {
    const v19 = v7(v7,v7);
    // v19 = .unknown
}
}
main();

