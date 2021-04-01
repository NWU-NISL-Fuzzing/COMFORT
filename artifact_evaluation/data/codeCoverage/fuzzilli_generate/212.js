function main() {
async function v1(v2,v3,v4,v5,v6) {
    var v7 = v1(2877264768,v4,v6,v6,v3);
    // v7 = .unknown
    function v9(v10,v11) {
    }
    var v13 = new Uint32Array(1337);
    // v13 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "byteOffset", "length", "constructor", "buffer", "byteLength"], withMethods: ["set", "reverse", "findIndex", "reduceRight", "filter", "entries", "lastIndexOf", "copyWithin", "fill", "keys", "indexOf", "includes", "sort", "find", "every", "slice", "some", "subarray", "join", "forEach", "reduce", "map", "values"])
    var v14 = v13.sort(v9);
    // v14 = .undefined
}
var v16 = {apply:v1,call:v1,construct:v1,get:Object,has:Object};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "apply", "call", "get", "construct"])
var v18 = new Proxy(v1,v16);
// v18 = .unknown
var v20 = "4294967296".search(v18);
// v20 = .integer
}
main();

