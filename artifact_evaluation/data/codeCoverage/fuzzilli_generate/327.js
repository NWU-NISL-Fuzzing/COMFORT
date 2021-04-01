function main() {
const v5 = 0;
// v5 = .integer
const v6 = 5;
// v6 = .integer
const v7 = 1;
// v7 = .integer
const v8 = [1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v11 = new Float64Array(21342);
// v11 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "constructor", "buffer", "__proto__", "byteLength", "length"], withMethods: ["map", "values", "subarray", "find", "fill", "set", "findIndex", "some", "reduceRight", "reverse", "join", "includes", "entries", "reduce", "every", "copyWithin", "sort", "forEach", "lastIndexOf", "indexOf", "filter", "slice", "keys"])
const v12 = {a:Promise,b:1771299875,e:Promise,length:v8};
// v12 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "b", "a", "e"])
function v15(v16,v17) {
    const v18 = {deleteProperty:createGlobalObject,getPrototypeOf:v16,setPrototypeOf:v16};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "deleteProperty", "getPrototypeOf"])
    const v20 = new Proxy(Function,v18);
    // v20 = .unknown
    const v22 = {a:v16,e:53022,length:v11,setPrototypeOf:0,toString:13.37,...v20,...v12,...1771299875};
    // v22 = .object(ofGroup: Object, withProperties: ["e", "toString", "__proto__", "length", "a", "setPrototypeOf", "b"], withMethods: ["a"])
}
const v24 = new Promise(v15);
// v24 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
main();

