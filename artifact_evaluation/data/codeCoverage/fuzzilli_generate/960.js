function main() {
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v5 = 1337;
// v5 = .integer
const v6 = 1;
// v6 = .integer
const v7 = {b:"boolean",c:v4,constructor:13.37,d:isNaN,e:13.37,length:v4,toString:isNaN,valueOf:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "e", "valueOf", "length", "b", "constructor"], withMethods: ["d", "toString"])
const v8 = Object;
// v8 = .object(ofGroup: ObjectConstructor, withProperties: ["prototype"], withMethods: ["setPrototypeOf", "assign", "fromEntries", "seal", "getOwnPropertyNames", "freeze", "defineProperty", "create", "getPrototypeOf", "getOwnPropertySymbols", "keys", "values", "isExtensible", "entries", "is", "getOwnPropertyDescriptor", "preventExtensions", "defineProperties", "getOwnPropertyDescriptors", "isSealed", "isFrozen"]) + .function([.anything...] => .object()) + .constructor([.anything...] => .object())
const v9 = 10;
// v9 = .integer
const v10 = 1;
// v10 = .integer
function v11(v12,v13) {
    const v15 = 4;
    // v15 = .integer
    let v16 = 0;
    const v17 = v16 + 1;
    // v17 = .primitive
    const v19 = 9;
    // v19 = .integer
    let v20 = 0;
    const v21 = v20 + 1;
    // v21 = .primitive
    v20 = v21;
    v16 = v17;
    for (let v28 = 0; v28 < 9; v28 = v28 + 1) {
        async function v29(v30,v31,v32,v33) {
            const v34 = await v31;
            // v34 = .unknown
            return eval;
        }
        const v35 = v29(v28,13.37,0,noInline);
        // v35 = .unknown
    }
}
for (let v39 = 0; v39 < 100; v39 = v39 + 1) {
    const v40 = v11(v7,v11);
    // v40 = .unknown
}
const v42 = // v42 = .undefined
}
main();

