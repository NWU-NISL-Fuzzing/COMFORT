function main() {
const v6 = [13.37,13.37,13.37,9007199254740991,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v8 = 5;
// v8 = .integer
let v9 = 0;
const v10 = 0;
// v10 = .integer
const v11 = 6298458;
// v11 = .integer
const v12 = 536870912;
// v12 = .integer
const v14 = [1337,1337,1337,1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v15 = [];
// v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v16 = {__proto__:"length",a:v15,b:v6,c:"length",d:v14,length:v15};
// v16 = .object(ofGroup: Object, withProperties: ["length", "a", "b", "d", "__proto__", "c"])
let v17 = undefined;
const v18 = {apply:v16,call:"length",construct:v17,deleteProperty:v16,get:1337,getOwnPropertyDescriptor:v14,getPrototypeOf:v16,setPrototypeOf:v16};
// v18 = .object(ofGroup: Object, withProperties: ["deleteProperty", "getOwnPropertyDescriptor", "call", "apply", "getPrototypeOf", "setPrototypeOf", "__proto__", "construct", "get"])
const v20 = new Proxy(Uint8ClampedArray,v18);
// v20 = .unknown
try {
    const v22 = new v20("4",Uint8ClampedArray,v18,v6,13.37);
    // v22 = .object()
} catch(v23) {
}
}
main();

