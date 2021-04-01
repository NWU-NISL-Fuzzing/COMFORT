function main() {
async function v1(v2,v3) {
    let v6 = 0;
    let v7 = v6;
    if (v3) {
    } else {
    }
    do {
        const v8 = 0;
        // v8 = .integer
        const v9 = 100;
        // v9 = .integer
        const v10 = 1;
        // v10 = .integer
        const v11 = Object;
        // v11 = .object(ofGroup: ObjectConstructor, withProperties: ["prototype"], withMethods: ["freeze", "getOwnPropertyDescriptors", "isFrozen", "isExtensible", "keys", "entries", "is", "getOwnPropertyDescriptor", "getOwnPropertySymbols", "assign", "create", "fromEntries", "isSealed", "setPrototypeOf", "getOwnPropertyNames", "defineProperty", "values", "getPrototypeOf", "defineProperties", "preventExtensions", "seal"]) + .function([.anything...] => .object()) + .constructor([.anything...] => .object())
        const v15 = [1337,1337,1337];
        // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
        const v16 = [v15,13.37,13.37,13.37,-1504637233,-1504637233,-1504637233];
        // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
        const v17 = {b:v16,constructor:v16,d:v15,toString:-1504637233,valueOf:v15};
        // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "toString", "d", "constructor", "valueOf"])
        for (const v18 in v17) {
            const v19 = Promise;
            // v19 = .object(ofGroup: PromiseConstructor, withProperties: ["prototype"], withMethods: ["reject", "allSettled", "all", "race", "resolve"]) + .constructor([.function()] => .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["catch", "finally", "then"]))
            function v20(v21,v22) {
                return v18;
            }
            const v24 = new createGlobalObject(v20);
            // v24 = .object()
        }
        const v25 = v6 + 1;
        // v25 = .primitive
    } while (v6 !== 7);
}
for (let v30 = 0; v30 < 100; v30 = v30 + 1) {
    const v31 = v1(13.37,isNaN);
    // v31 = .unknown
}
}
main();

