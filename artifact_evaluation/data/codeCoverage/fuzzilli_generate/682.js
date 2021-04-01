function main() {
function v0(v1,v2) {
    const v6 = 9;
    // v6 = .integer
    let v7 = 0;
    const v8 = v7 + 1;
    // v8 = .primitive
    v7 = v8;
    const v9 = [13.37,13.37,noInline];
    // v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v10 = !v9;
    // v10 = .boolean
    const v12 = 6;
    // v12 = .integer
    let v13 = 0;
    const v14 = v13 + 1;
    // v14 = .primitive
    v13 = v14;
    const v18 = [13.37];
    // v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v19 = {b:13.37,d:eval,e:"PI",length:"PI",valueOf:13.37};
    // v19 = .object(ofGroup: Object, withProperties: ["length", "e", "valueOf", "b", "__proto__"], withMethods: ["d"])
    for (const v20 in v18) {
        const v21 = typeof v19;
        // v21 = .string
    }
    const v24 = 13.37 >= 65536;
    // v24 = .boolean
}
for (let v28 = 0; v28 < 100; v28 = v28 + 1) {
    const v29 = v0(v0,v0);
    // v29 = .unknown
}
}
main();

