function main() {
const v1 = "bigint".__proto__;
// v1 = .object()
const v3 = new Float64Array(v1);
// v3 = .object(ofGroup: Float64Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["forEach", "filter", "fill", "keys", "copyWithin", "includes", "every", "reduce", "slice", "find", "findIndex", "sort", "set", "some", "lastIndexOf", "reverse", "map", "values", "entries", "indexOf", "subarray", "reduceRight", "join"])
const v5 = 0;
// v5 = .integer
let v6 = 0;
const v7 = 0;
// v7 = .integer
const v8 = 5;
// v8 = .integer
const v9 = 1;
// v9 = .integer
function v10(v11,v12) {
    const v14 = [1337,1337,1337];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    const v18 = 6;
    // v18 = .integer
    let v19 = 0;
    const v20 = v19 + 1;
    // v20 = .primitive
    v19 = v20;
    const v23 = [Promise];
    // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    const v24 = Promise.all;
    // v24 = .unknown
    const v25 = Reflect.apply(v24,Promise,v23);
    // v25 = .unknown
    const v27 = [6];
    // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    const v28 = v14.flat;
    // v28 = .unknown
    const v29 = Reflect.apply(v28,"268435456",v27);
    // v29 = .unknown
    const v33 = [1337,1337,1337];
    // v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    const v34 = [v33,13.37,13.37,13.37,-1504637233,-1504637233,-1504637233];
    // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    const v35 = {b:v34,constructor:v34,d:v33,toString:-1504637233,valueOf:v33};
    // v35 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "__proto__", "valueOf", "b", "d"])
    for (const v36 in v35) {
    }
}
for (let v42 = 0; v42 < 100; v42 = v42 + 1) {
    const v43 = v10("127",13.37);
    // v43 = .unknown
}
const v44 = 0;
// v44 = .integer
const v45 = 100;
// v45 = .integer
const v46 = 1;
// v46 = .integer
const v47 = 0;
// v47 = .integer
const v48 = 100;
// v48 = .integer
const v49 = 1;
// v49 = .integer
}
main();

