function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v2 = Object;
// v2 = .object(ofGroup: ObjectConstructor, withProperties: ["prototype"], withMethods: ["freeze", "getOwnPropertyDescriptors", "isFrozen", "isExtensible", "keys", "entries", "is", "getOwnPropertyDescriptor", "getOwnPropertySymbols", "assign", "create", "fromEntries", "isSealed", "setPrototypeOf", "getOwnPropertyNames", "defineProperty", "values", "getPrototypeOf", "defineProperties", "preventExtensions", "seal"]) + .function([.anything...] => .object()) + .constructor([.anything...] => .object())
const v3 = 0;
// v3 = .integer
const v4 = 10;
// v4 = .integer
const v5 = 1;
// v5 = .integer
const v8 = 0;
// v8 = .integer
const v9 = 100;
// v9 = .integer
const v10 = 1;
// v10 = .integer
for (let v13 = 0; v13 < 100; v13 = v13 + 1) {
    const v14 = 0;
    // v14 = .integer
    const v15 = 4;
    // v15 = .integer
    const v17 = "127";
    // v17 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "endsWith", "startsWith", "lastIndexOf", "matchAll", "repeat", "concat", "match", "includes", "padEnd", "charAt", "substring", "charCodeAt", "replace", "split", "indexOf", "trim", "padStart", "search", "codePointAt"])
    const v18 = 13.37;
    // v18 = .float
    let v20 = undefined;
    v1[257] = v13;
    const v24 = [1337,1337,1337];
    // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    v1.length = 1;
    const v25 = [v24,13.37,13.37,13.37,-1504637233,v13,-1504637233];
    // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    const v26 = {b:v25,constructor:v25,d:v24,toString:createGlobalObject,valueOf:v24};
    // v26 = .object(ofGroup: Object, withProperties: ["b", "d", "constructor", "__proto__", "valueOf"], withMethods: ["toString"])
}
}
main();

