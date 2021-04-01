function main() {
const v3 = !1337;
// v3 = .boolean
const v5 = new Int8Array(v3);
// v5 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "constructor", "length", "__proto__", "buffer", "byteOffset"], withMethods: ["reduce", "copyWithin", "findIndex", "entries", "lastIndexOf", "map", "set", "includes", "indexOf", "sort", "some", "reverse", "keys", "reduceRight", "values", "filter", "forEach", "slice", "subarray", "join", "fill", "find", "every"])
const v6 = v5.buffer;
// v6 = .object()
const v7 = transferArrayBuffer(v6);
// v7 = .undefined
const v8 = new Uint8ClampedArray(v6);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "__proto__", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["entries", "values", "reduce", "indexOf", "copyWithin", "fill", "sort", "filter", "slice", "forEach", "map", "every", "includes", "set", "reduceRight", "some", "findIndex", "reverse", "find", "join", "lastIndexOf", "subarray", "keys"])
function v9(v10,v11) {
    function v12(v13,v14) {
        function v15(v16,v17) {
            const v18 = v8[128];
            // v18 = .unknown
        }
        const v19 = v15(v15,v15);
        // v19 = .unknown
    }
    const v21 = v12(parseInt,v12);
    // v21 = .unknown
}
const v23 = new Promise(v9);
// v23 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
main();

