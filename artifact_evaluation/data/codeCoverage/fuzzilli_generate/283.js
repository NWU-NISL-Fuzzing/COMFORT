function main() {
const v0 = 100;
// v0 = .integer
const v1 = 1;
// v1 = .integer
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v5 = new Float64Array(v3);
// v5 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "constructor", "buffer", "__proto__", "byteLength", "length"], withMethods: ["map", "values", "subarray", "find", "fill", "set", "findIndex", "some", "reduceRight", "reverse", "join", "includes", "entries", "reduce", "every", "copyWithin", "sort", "forEach", "lastIndexOf", "indexOf", "filter", "slice", "keys"])
const v10 = [1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v11 = [1337,v10,v10,v10,1337,1337,-9007199254740991,"bigint",-9007199254740991];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v14 = [13.37,13.37];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v15 = {__proto__:v11,b:noFTL,constructor:v10,length:v14};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"], withMethods: ["b"])
let v16 = v15;
const v17 = 100;
// v17 = .integer
const v18 = 1;
// v18 = .integer
function v19(v20,v21) {
    function v22(v23,v24) {
        const v26 = {get:v20};
        // v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
        const v28 = Object.defineProperty(v5,1,v26);
        // v28 = .undefined
    }
    const v30 = new Promise(v22);
    // v30 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
const v31 = v19(v19,v16);
// v31 = .unknown
}
main();

