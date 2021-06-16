function main() {
const v1 = 0;
// v1 = .integer
const v2 = 100;
// v2 = .integer
const v3 = 1;
// v3 = .integer
const v5 = [13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v6 = ["asyncIterator",v5];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v7 = {};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v8(v9,v10,v11,v12,v13) {
    'use strict';
    function v15(v16,v17) {
        let v19 = 0;
        const v20 = Object.__proto__;
        // v20 = .unknown
        v19 = v16;
        v20.toString = v16;
        const v21 = v19 + 1;
        // v21 = .primitive
        let v22 = v21;
        const v23 = v22 + 1;
        // v23 = .primitive
        function v24(v25,v26) {
            const v27 = ~v23;
            // v27 = .boolean
            const v28 = arguments;
            // v28 = .object()
        }
        const v29 = v24(v24,v24);
        // v29 = .unknown
        return "asyncIterator";
    }
    for (let v33 = 0; v33 < 100; v33 = v33 + 1) {
        const v34 = v15(v15,v15);
        // v34 = .unknown
    }
}
const v36 = v8(v7,v6,v8,0,v6);
// v36 = .unknown
}
main();

