function main() {
let v2 = 0;
do {
    const v7 = [13.37,1337,1337,1337];
    // v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    let v8 = v7;
    const v12 = [v8,13.37];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    const v14 = [13.37,v12,"1",1337,1337,-2,-2];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    async function v15(v16,v17) {
        let v20 = 0;
        do {
            const v21 = v16.__proto__;
            // v21 = .unknown
            const v23 = [13.37,13.37];
            // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
            for (let v27 = 0; v27 < 100; v27 = v27 + 1) {
            }
            const v28 = v20 + 1;
            // v28 = .primitive
            v20 = v28;
        } while (v20 !== 7);
        return v8;
    }
    const v29 = v15(v14,v12);
    // v29 = .unknown
    const v30 = v15("number",1337);
    // v30 = .unknown
    const v31 = v2 + 1;
    // v31 = .primitive
    v2 = v31;
} while (v2 !== 7);
}
main();

