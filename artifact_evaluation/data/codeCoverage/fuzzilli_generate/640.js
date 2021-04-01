function main() {
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v4 = [v3,13.37,13.37,13.37,-1504637233,-1504637233,-1504637233];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v5 = {b:v4,constructor:v4,d:v3,toString:-1504637233,valueOf:v3};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "b", "d", "toString", "valueOf", "__proto__"])
const v9 = {apply:noFTL,call:noFTL,construct:noFTL,defineProperty:noFTL,deleteProperty:noFTL,get:noFTL,getOwnPropertyDescriptor:noFTL,getPrototypeOf:noFTL,isExtensible:noFTL,ownKeys:noFTL,setPrototypeOf:noFTL};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "getOwnPropertyDescriptor", "ownKeys", "call", "isExtensible", "setPrototypeOf", "apply", "get", "defineProperty", "getPrototypeOf", "construct"])
const v11 = new Proxy(Uint8ClampedArray,v9);
// v11 = .unknown
const v12 = "1";
// v12 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "endsWith", "startsWith", "lastIndexOf", "matchAll", "repeat", "concat", "match", "includes", "padEnd", "charAt", "substring", "charCodeAt", "replace", "split", "indexOf", "trim", "padStart", "search", "codePointAt"])
const v13 = 0;
// v13 = .integer
const v14 = 1337;
// v14 = .integer
const v15 = 1;
// v15 = .integer
v11.b = "127";
}
main();

