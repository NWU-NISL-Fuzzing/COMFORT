function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v7 = [Float64Array,13.37,1337,9007199254740992,"536870912",9007199254740992,Float64Array,"536870912",13.37,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v8 = {constructor:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
const v9 = {b:9007199254740992,d:v4,length:9007199254740992,toString:v4,valueOf:v8};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "toString", "valueOf", "length", "d"])
let v10 = 13.37;
const v15 = [13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v18 = ["4294967297",v15,1337,1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v19 = {__proto__:v18,c:v17,constructor:13.37,length:v17,toString:13.37,valueOf:13.37};
// v19 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "c", "toString", "__proto__", "constructor"])
const v20 = {__proto__:v19,constructor:"4294967297",d:4294967296,toString:1337,valueOf:1337};
// v20 = .object(ofGroup: Object, withProperties: ["valueOf", "toString", "__proto__", "constructor", "d"])
let v21 = v20;
function v22(v23,v24) {
    v21 = 1337;
    function v26(v27,v28) {
        const v30 = [1337];
        // v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
        return v8;
    }
    for (let v36 = 0; v36 < 100; v36 = v36 + 1) {
        const v37 = v26("127",13.37);
        // v37 = .unknown
    }
    return "536870912";
}
for (let v42 = 0; v42 < 100; v42 = v42 + 1) {
    const v43 = v22(v17,13.37);
    // v43 = .unknown
}
for (let v47 = 0; v47 < 100; v47 = v47 + 1) {
    const v48 = v22(String,1337);
    // v48 = .unknown
}
}
main();

