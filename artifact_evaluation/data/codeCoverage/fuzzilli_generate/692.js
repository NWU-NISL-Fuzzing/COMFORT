function main() {
let v3 = 13.37;
const v5 = {c:"65535"};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v7 = [1337,v5,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v8 = 0;
// v8 = .integer
const v9 = 100;
// v9 = .integer
const v10 = 1;
// v10 = .integer
const v11 = 0;
// v11 = .integer
const v12 = 100;
// v12 = .integer
const v13 = 1;
// v13 = .integer
function v14(v15,v16) {
    const v17 = v3.__proto__;
    // v17 = .unknown
    with (v5) {
        const v18 = -Infinity;
        // v18 = .float
        const v19 = v18 ** v18;
        // v19 = .integer | .float | .bigint
        const v20 = {c:v17,constructor:v17,...v18,...v17,...1337,...eval};
        // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "constructor"])
        let v23 = 0;
        const v24 = 100;
        // v24 = .integer
        const v25 = 1;
        // v25 = .integer
        do {
            function v26(v27,v28) {
            }
            const v30 = 100;
            // v30 = .integer
            const v31 = 1;
            // v31 = .integer
            const v32 = v26(v26,0);
            // v32 = .unknown
            const v33 = v23 + 1;
            // v33 = .primitive
            v23 = v33;
        } while (v23 < 9);
    }
    return v16;
}
for (let v37 = 0; v37 < 100; v37 = v37 + 1) {
    const v38 = v14(v14,v14);
    // v38 = .unknown
}
}
main();

