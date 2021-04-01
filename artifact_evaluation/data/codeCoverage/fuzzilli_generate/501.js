function main() {
const v1 = 7;
// v1 = .integer
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v8 = [13.37,Infinity];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v10 = {__proto__:v8,constructor:Infinity,d:1337,e:1337,toString:"1",valueOf:"1"};
// v10 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "e", "d", "toString", "constructor"])
const v12 = {set:BigInt};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v14 = Object.defineProperty(v8,549423971,v12);
// v14 = .undefined
const v18 = [13.37,13.37];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v20 = [Symbol,"YEl96px1t8",1337,"YEl96px1t8",Symbol,v18,1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v21 = {c:Symbol,constructor:v20,e:1337};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "constructor"], withMethods: ["c"])
const v23 = v21.c(13.37,0);
// v23 = .unknown
const v25 = 10;
// v25 = .integer
let v26 = 0;
const v27 = v26 + 1;
// v27 = .primitive
v26 = v27;
const v28 = Promise;
// v28 = .object(ofGroup: PromiseConstructor, withProperties: ["prototype"], withMethods: ["reject", "allSettled", "all", "race", "resolve"]) + .constructor([.function()] => .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["catch", "finally", "then"]))
const v32 = new Float32Array(21353);
// v32 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "__proto__", "constructor", "buffer", "length"], withMethods: ["find", "entries", "filter", "values", "indexOf", "findIndex", "every", "map", "reduceRight", "join", "lastIndexOf", "fill", "subarray", "forEach", "copyWithin", "keys", "set", "reverse", "some", "slice", "sort", "reduce", "includes"])
const v33 = v32.filter(Object,Object);
// v33 = .object(ofGroup: Float32Array, withProperties: ["length", "byteLength", "constructor", "buffer", "byteOffset", "__proto__"], withMethods: ["reduceRight", "values", "findIndex", "slice", "filter", "fill", "forEach", "every", "reduce", "some", "reverse", "set", "subarray", "includes", "indexOf", "map", "sort", "join", "find", "entries", "keys", "lastIndexOf", "copyWithin"])
}
main();

