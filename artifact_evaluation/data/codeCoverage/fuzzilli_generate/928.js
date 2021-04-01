function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v2 = {b:v1};
// v2 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v5 = v4.__proto__;
// v5 = .object()
const v8 = Object.defineProperty(v5,3697200800,v2);
// v8 = .undefined
const v9 = 0;
// v9 = .integer
const v10 = 100;
// v10 = .integer
const v11 = 1;
// v11 = .integer
const v12 = 100;
// v12 = .integer
const v13 = 1;
// v13 = .integer
function v14(v15,v16) {
    function v19(v20) {
    }
    const v21 = [13.37,13.37,13.37,13.37];
    // v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v22 = v21.__proto__;
    // v22 = .object()
    const v24 = {set:v19};
    // v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
    const v26 = Object.defineProperty(v22,3697200800,v24);
    // v26 = .undefined
    const v27 = 65535;
    // v27 = .integer
    let v28 = 0;
}
const v30 = new Promise(v14);
// v30 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
main();

