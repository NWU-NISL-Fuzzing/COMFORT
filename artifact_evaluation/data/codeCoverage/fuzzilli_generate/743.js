function main() {
const v1 = 65535;
// v1 = .integer
let v2 = 0;
const v4 = 1337;
// v4 = .integer
let v5 = 65536;
const v6 = v5 + 1;
// v6 = .primitive
const v8 = new Float32Array(v6);
// v8 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "constructor", "buffer", "byteLength", "length", "byteOffset"], withMethods: ["sort", "fill", "lastIndexOf", "findIndex", "entries", "copyWithin", "reverse", "forEach", "filter", "includes", "map", "set", "keys", "every", "subarray", "reduceRight", "join", "some", "values", "find", "reduce", "indexOf", "slice"])
const v9 = v8[268435456];
// v9 = .unknown
const v10 = 13.37;
// v10 = .float
const v11 = 1;
// v11 = .integer
function v12(v13,v14) {
    const v15 = 100;
    // v15 = .integer
    const v16 = 1;
    // v16 = .integer
    const v17 = -1024;
    // v17 = .integer
    const v18 = 1337;
    // v18 = .integer
    const v19 = 1;
    // v19 = .integer
    const v20 = 13.37;
    // v20 = .float
    const v21 = 100;
    // v21 = .integer
    const v22 = 1;
    // v22 = .integer
}
function v23(v24,v25) {
    function v26(v27,v28) {
        const v33 = [2.0];
        // v33 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
        const v34 = [String];
        // v34 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
        const v35 = [isFinite,2.0,v34,v33,7,7,v33,isFinite];
        // v35 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
        function v36(v37,v38) {
            function v39(v40,v41) {
                const v43 = Math.floor(v40);
                // v43 = .number
            }
            const v45 = v39(v39,"unicode");
            // v45 = .unknown
            const v46 = arguments;
            // v46 = .object()
        }
        for (let v50 = 0; v50 < 100; v50 = v50 + 1) {
            const v51 = v36(v35,v50);
            // v51 = .unknown
        }
        for (let v55 = 0; v55 < 16; v55 = v55 + 1) {
            for (let v59 = 0; v59 < 100; v59 = v59 + 1) {
            }
        }
    }
    const v60 = v26(v26,v12);
    // v60 = .unknown
    const v62 = new Promise(v26);
    // v62 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
const v63 = v23(v23,v23);
// v63 = .unknown
}
main();

