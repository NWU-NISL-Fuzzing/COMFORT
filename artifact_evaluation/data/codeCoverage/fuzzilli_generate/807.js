function main() {
function v1(v2,v3) {
    const v4 = (1337).length;
    // v4 = .unknown
    const v6 = 0;
    // v6 = .integer
    const v7 = 8;
    // v7 = .integer
    const v8 = 1;
    // v8 = .integer
    function v9(v10,v11) {
        const v17 = [1337,1337,2937513072,13.37];
        // v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
        const v18 = v17.slice(v9,"number");
        // v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    }
    const v19 = v9(v9,v9);
    // v19 = .unknown
    const v20 = v4 + 3697200800;
    // v20 = .primitive
    const v22 = 8;
    // v22 = .integer
    let v23 = 0;
    const v24 = v23 + 1;
    // v24 = .primitive
    v23 = v24;
    for (let v28 = 0; v28 < 100; v28 = v28 + 1) {
    }
}
for (let v32 = 0; v32 < 100; v32 = v32 + 5) {
    const v33 = v1(v1,v1);
    // v33 = .unknown
}
}
main();

