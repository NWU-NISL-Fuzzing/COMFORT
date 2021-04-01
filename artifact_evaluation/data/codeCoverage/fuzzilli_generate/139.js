function main() {
const v1 = 7;
// v1 = .integer
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v6 = 1337;
const v11 = [13.37,13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v12 = {__proto__:Symbol,a:v11,c:918540264,constructor:918540264,e:Symbol};
// v12 = .object(ofGroup: Object, withProperties: ["c", "constructor", "a", "__proto__"], withMethods: ["e", "__proto__"])
async function v15(v16,v17) {
    let v19 = 0;
    const v21 = v19 + 1;
    // v21 = .primitive
    const v22 = 0;
    // v22 = .integer
    Symbol[Object] = Uint8ClampedArray;
    const v24 = 1;
    // v24 = .integer
    for (const v25 in Symbol) {
        for (let v29 = 0; v29 < 100; v29 = v29 + 1) {
        }
        Math.toString = Object;
        let v32 = 0;
        while (v32 < 3) {
            let v33 = 1337;
            v33 = Int32Array;
            const v34 = v32 + 1;
            // v34 = .primitive
            v32 = v34;
        }
        const v35 = v25 / Math;
        // v35 = .integer | .float | .bigint
        for (let v41 = 3; v41 < 100; v41 = v41 + -2147483647) {
        }
        const v43 = [13.37,v21];
        // v43 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
        const v45 = [Symbol,"YEl96px1t8",1337,"YEl96px1t8",Symbol,v43,1337];
        // v45 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
        const v47 = "127".toLocaleString();
        // v47 = .unknown
    }
}
for (let v52 = 0; v52 < 100; v52 = v52 + 1) {
    const v53 = v15(v12,Promise);
    // v53 = .unknown
}
}
main();

