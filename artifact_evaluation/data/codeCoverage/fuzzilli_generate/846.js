function main() {
var v2 = new Proxy(Proxy,Reflect);
// v2 = .unknown
v2.__proto__ = v2;
var v3 = 0;
// v3 = .integer
var v4 = 2;
// v4 = .integer
var v5 = 1;
// v5 = .integer
var v8 = [13.37];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
var v9 = [v8,WeakSet,v8,v8,WeakSet,v8,WeakSet,WeakSet];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
var v11 = [1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
var v13 = {apply:Object,call:Object,deleteProperty:v11,get:Object,getOwnPropertyDescriptor:Object,getPrototypeOf:v9,isExtensible:Object,a:Object,preventExtensions:Object,set:Object};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "deleteProperty", "getPrototypeOf"], withMethods: ["preventExtensions", "set", "a", "apply", "get", "call", "getOwnPropertyDescriptor", "isExtensible"])
var v15 = new Proxy(Proxy,v13);
// v15 = .unknown
async function v16(v17,v18) {
    var v20 = [-2.220446049250313e-16];
    // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
    var v21 = Object.assign(v20,v17);
    // v21 = .undefined
}
var v22 = v16(v15,v16);
// v22 = .unknown
var v24 = [13.37,13.37,13.37];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
var v27 = 0;
// v27 = .integer
var v28 = 0;
var v29 = 0;
var v31 = [1337,1337];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
var v32 = {constructor:v29,d:v24,e:v31};
// v32 = .object(ofGroup: Object, withProperties: ["d", "e", "constructor", "__proto__"])
}
main();

