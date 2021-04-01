function main() {
const v1 = {constructor:-9007199254740993};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
const v3 = [1000000000000.0];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v9 = [v1,-13875.255874157534,-13875.255874157534,9007199254740991,-13875.255874157534];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v11 = [1337,1337,1337,v3,1337];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v12 = [];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v13 = {__proto__:"length",a:undefined,b:v9,c:"length",d:v11,length:v12};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "d", "c", "a", "length"])
let v14 = undefined;
const v15 = {apply:v13,call:"length",construct:v14,deleteProperty:v13,get:1337,getOwnPropertyDescriptor:v11,getPrototypeOf:v13,setPrototypeOf:v13};
// v15 = .object(ofGroup: Object, withProperties: ["construct", "setPrototypeOf", "call", "get", "getPrototypeOf", "__proto__", "apply", "getOwnPropertyDescriptor", "deleteProperty"])
const v17 = new Proxy(Float64Array,v15);
// v17 = .unknown
const v19 = 100;
// v19 = .integer
const v20 = 1;
// v20 = .integer
const v21 = [1337,1337,1337];
// v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v26 = [1337,1337,1337,1337,"L4raPgSnn*"];
// v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v27 = [v26,isNaN,8,v26,1337,isNaN,"L4raPgSnn*"];
// v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
function v28(v29) {
    function v30(v31,v32) {
        delete v17[-2147483648];
    }
    const v34 = new Promise(v30);
    // v34 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
function v35(v36,v37) {
    const v39 = [v28,108978604,108978604,108978604];
    // v39 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v40 = v27.findIndex(v28,v39);
    // v40 = .integer
}
const v41 = v35(v35,v21);
// v41 = .unknown
}
main();

