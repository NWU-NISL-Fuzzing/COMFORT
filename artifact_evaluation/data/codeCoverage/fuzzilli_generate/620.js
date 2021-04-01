function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
function v3(v4,v5) {
}
const v6 = v3(v3);
// v6 = .unknown
const v7 = {apply:v3,call:v3,construct:v3,defineProperty:v3,deleteProperty:gc,get:v6,getOwnPropertyDescriptor:gc,getPrototypeOf:v6,has:v6,isExtensible:gc,preventExtensions:gc,set:v3,setPrototypeOf:v6};
// v7 = .object(ofGroup: Object, withProperties: ["has", "get", "getPrototypeOf", "setPrototypeOf", "__proto__"], withMethods: ["call", "isExtensible", "deleteProperty", "set", "getOwnPropertyDescriptor", "apply", "construct", "defineProperty", "preventExtensions"])
const v9 = new Proxy(v1,v7);
// v9 = .unknown
delete v9[4];
}
main();

