function main() {
function v2(v3,v4) {
    function v6(v7,v8) {
        const v10 = 1;
        // v10 = .integer
        const v11 = 0;
        // v11 = .integer
        const v12 = 256;
        // v12 = .integer
        const v13 = v6.__proto__;
        // v13 = .unknown
        v13["number"] = 1024;
        delete v13["number"];
        const v14 = arguments;
        // v14 = .object()
    }
    function v15(v16) {
        for (let v20 = 0; v20 < 100; v20 = v20 + 1) {
            const v22 = v6(v16,0);
            // v22 = .unknown
            const v24 = [2746851145,v16,v4,100,v4,1337,2746851145,13.37];
            // v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
            const v26 = 2;
            // v26 = .integer
            let v27 = 0;
            const v28 = v27 + 1;
            // v28 = .primitive
            v27 = v28;
            function v29(v30,v31) {
                return v20;
            }
            for (let v33 = 1; v33 < 1337; v33 = v33 + 1) {
            }
        }
    }
    let v34 = v15;
    const v35 = v34(v34);
    // v35 = .unknown
}
const v36 = v2(v2,v2);
// v36 = .unknown
}
main();

