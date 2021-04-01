function main() {
const v6 = Function("2");
// v6 = .unknown
const v7 = {deleteProperty:createGlobalObject};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty"])
function v8(v9,v10) {
    const v11 = "2".__proto__;
    // v11 = .object()
    const v13 = Symbol.replace;
    // v13 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    const v14 = v11[v13];
    // v14 = .unknown
    let v17 = v7;
    const v18 = {call:Symbol,construct:v6,defineProperty:Array,deleteProperty:noInline,get:v14,getOwnPropertyDescriptor:v6,getPrototypeOf:Symbol,has:v9,isExtensible:Symbol,ownKeys:v9,preventExtensions:v8,set:createGlobalObject,setPrototypeOf:Symbol};
    // v18 = .object(ofGroup: Object, withProperties: ["get", "getOwnPropertyDescriptor", "construct", "__proto__"], withMethods: ["ownKeys", "deleteProperty", "setPrototypeOf", "isExtensible", "has", "defineProperty", "preventExtensions", "getPrototypeOf", "set", "call"])
    const v20 = Array(Symbol,v18);
    // v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    v17 = v20;
    const v21 = new Map(v17);
    // v21 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["keys", "set", "entries", "has", "values", "get", "forEach", "clear", "delete"])
}
const v23 = new Promise(v8);
// v23 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
main();

