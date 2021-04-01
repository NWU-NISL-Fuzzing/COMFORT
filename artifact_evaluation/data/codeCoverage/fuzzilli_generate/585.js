function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
const v5 = [1337,"undefined",1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
const v6 = [1337,gc,"undefined",1337,13.37,1337,v5,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
const v7 = {__proto__:gc,constructor:v3,d:v5,e:"undefined",length:v3,valueOf:v6};
// v7 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "e", "constructor", "__proto__", "length"], withMethods: ["__proto__"])
let v8 = "undefined";
let v10 = -1;
function v11(v12,v13,v14,v15,v16) {
    Reflect.toString = v15;
    const v18 = 0;
    // v18 = .integer
    const v19 = 100;
    // v19 = .integer
    const v20 = 1;
    // v20 = .integer
}
const v21 = 0;
// v21 = .integer
const v22 = 100;
// v22 = .integer
const v23 = 1;
// v23 = .integer
const v24 = v11(v10,v11,v11,v10,v11);
// v24 = .unknown
const v25 = v11(v11,1337,v7,13.37,v8);
// v25 = .unknown
}
main();

