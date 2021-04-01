function main() {
const v0 = 0;
// v0 = .integer
const v1 = 100;
// v1 = .integer
const v2 = 1;
// v2 = .integer
const v5 = new Uint8ClampedArray(31035);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "__proto__", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["forEach", "fill", "reverse", "subarray", "every", "some", "entries", "indexOf", "map", "copyWithin", "sort", "filter", "find", "findIndex", "set", "keys", "includes", "slice", "join", "reduceRight", "reduce", "lastIndexOf", "values"])
let v6 = v5;
const v7 = 0;
// v7 = .integer
const v8 = 4;
// v8 = .integer
const v9 = 1;
// v9 = .integer
const v10 = 100;
// v10 = .integer
function v12(v13,v14,...v15) {
    let v17 = -1;
    function v18(v19,v20,v21,v22,v23) {
        const v25 = [13.37,13.37,13.37,13.37];
        // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
        let v28 = 0;
        do {
            v25[9] = -1;
            const v29 = v28 + 1;
            // v29 = .primitive
            v28 = v29;
        } while (v28 < 10);
    }
    for (let v33 = 0; v33 < 100; v33 = v33 + 1) {
        const v34 = v18(v17,v18,v18,v17,v18);
        // v34 = .unknown
    }
}
const v35 = v12(-2987865916,v12,v12);
// v35 = .unknown
try {
    const v38 = {get:v35};
    // v38 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
    const v40 = Object.defineProperty(split,0,v38);
    // v40 = .undefined
} catch(v41) {
}
}
main();

