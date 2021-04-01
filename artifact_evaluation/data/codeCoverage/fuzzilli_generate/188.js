function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
const v5 = {__proto__:1,d:v4,toString:v4};
// v5 = .object(ofGroup: Object, withProperties: ["toString", "d", "__proto__"])
const v9 = [1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
v9[868007589] = -1147869009;
const v10 = v9.concat(v9,v9,v9);
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
let v12 = -1;
function v13(v14,v15,v16,v17,v18) {
    for (const v19 in v2) {
        const v20 = {constructor:v19,e:v19,toString:v15,...v5,...v10,...0};
        // v20 = .object(ofGroup: Object, withProperties: ["e", "length", "__proto__", "constructor", "d", "toString"], withMethods: ["reverse", "indexOf", "find", "includes", "fill", "sort", "splice", "entries", "concat", "map", "findIndex", "slice", "reduce", "shift", "push", "forEach", "toString", "values", "lastIndexOf", "every", "pop", "filter", "reduceRight", "keys", "join", "copyWithin", "some", "toLocaleString", "unshift", "flat", "flatMap"])
    }
}
const v21 = v13(v12,v13,v13,v12,v13);
// v21 = .unknown
}
main();

