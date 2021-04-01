function main() {
function v0(v1,v2) {
    const v5 = [13.37,13.37,Uint8Array,13.37];
    // v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    function v6(v7) {
    }
    let v10 = 13.37;
    function v11(v12,v13) {
        const v14 = {call:v1,construct:v12,defineProperty:v5,deleteProperty:v2,get:v13,getOwnPropertyDescriptor:v1,a:v13,has:v6,isExtensible:v13,preventExtensions:v6,set:v13,setPrototypeOf:v11};
        // v14 = .object(ofGroup: Object, withProperties: ["__proto__", "defineProperty"], withMethods: ["isExtensible", "setPrototypeOf", "preventExtensions", "getOwnPropertyDescriptor", "get", "deleteProperty", "call", "a", "set", "has", "construct"])
        const v16 = new Proxy(v13,v14);
        // v16 = .unknown
        function v17(v18,v19) {
            const v20 = new Uint8Array(v16);
            // v20 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "byteOffset", "constructor", "length", "buffer", "__proto__"], withMethods: ["includes", "join", "slice", "copyWithin", "filter", "lastIndexOf", "entries", "every", "fill", "reverse", "keys", "map", "subarray", "indexOf", "reduceRight", "forEach", "some", "find", "set", "findIndex", "sort", "reduce", "values"])
        }
        const v21 = v17(v17,v10);
        // v21 = .unknown
    }
    const v22 = v11(v11,eval);
    // v22 = .unknown
}
const v24 = new Promise(v0);
// v24 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
main();

