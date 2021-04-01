function main() {
const v1 = "127".toLocaleString();
// v1 = .unknown
for (const v2 in v1) {
    const v5 = [13.37,13.37,13.37,13.37,13.37];
    // v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    const v6 = new Proxy(v5,v5);
    // v6 = .unknown
    let v7 = v6;
    v7[1024] = v7;
    const v9 = 7;
    // v9 = .integer
    let v10 = 0;
    const v11 = 0;
    // v11 = .integer
    const v12 = 100;
    // v12 = .integer
    const v13 = 1;
    // v13 = .integer
    const v14 = 0;
    // v14 = .integer
    const v15 = 100;
    // v15 = .integer
    const v16 = 1;
    // v16 = .integer
    const v17 = v10 + 1;
    // v17 = .primitive
    v10 = v17;
}
}
main();

