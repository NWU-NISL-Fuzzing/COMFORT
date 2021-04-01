function main() {
const v2 = 0;
// v2 = .integer
const v3 = 5;
// v3 = .integer
const v4 = 1;
// v4 = .integer
const v6 = [13.37,13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
const v8 = [1227637299];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
const v9 = [-9007199254740991,1227637299,v8,-9007199254740991,"boolean",1227637299,v8,-9007199254740991,v8];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
const v11 = [13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
function v12(v13,v14,v15) {
    const v16 = [v6,v13,v9,v14];
    // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
    const v17 = 0;
    // v17 = .integer
    let v20 = 0;
    do {
        const v21 = v20 + 1;
        // v21 = .primitive
        let v24 = 0;
        while (v24 < v13) {
            const v25 = v24 + 1;
            // v25 = .primitive
            v24 = v25;
        }
        for (let v27 = 0; v27 < 100; v27 = v27 + 1) {
            const v29 = Float32Array.species;
            // v29 = .unknown
            v11[v29] = v20;
        }
        v20 = v21;
        function v30(v31,v32,v33,v34) {
            let v35 = v34;
            v35 = v20;
        }
    } while (v20 < 10);
}
const v38 = v12(1337,13.37,1337);
// v38 = .unknown
}
main();

