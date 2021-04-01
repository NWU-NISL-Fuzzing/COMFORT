function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v6 = [-2741022252,-2741022252,-2741022252,-2741022252];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v7 = {b:-2741022252,c:3697200800,valueOf:v6};
// v7 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "b", "__proto__"])
const v8 = Object(v7,...v1);
// v8 = .object()
const v9 = v8.__proto__;
// v9 = .unknown
const v11 = {set:eval};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v13 = Object.defineProperty(v9,10,v11);
// v13 = .undefined
const v14 = 100;
// v14 = .integer
const v15 = 1;
// v15 = .integer
const v21 = [1337,1337,1337,1337];
// v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v22 = [13.37,Uint8ClampedArray,Uint8ClampedArray,-275582857,1337,v21,"9007199254740993",v21];
// v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v24 = new Int32Array(v22);
// v24 = .object(ofGroup: Int32Array, withProperties: ["byteLength", "byteOffset", "__proto__", "length", "buffer", "constructor"], withMethods: ["every", "values", "forEach", "slice", "find", "indexOf", "entries", "map", "set", "some", "fill", "subarray", "reduceRight", "join", "lastIndexOf", "reduce", "includes", "copyWithin", "findIndex", "reverse", "keys", "sort", "filter"])
}
main();

