function main() {
const v0 = 13.37;
// v0 = .float
function v1(v2,v3) {
    const v8 = [13.37,13.37,13.37];
    // v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v9 = {constructor:Uint8ClampedArray,d:-2,e:"byteOffset",toString:v8,valueOf:v8};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "toString", "constructor", "valueOf", "d"])
    const v10 = new Uint8ClampedArray(v9);
    // v10 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "__proto__", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["entries", "values", "reduce", "indexOf", "copyWithin", "fill", "sort", "filter", "slice", "forEach", "map", "every", "includes", "set", "reduceRight", "some", "findIndex", "reverse", "find", "join", "lastIndexOf", "subarray", "keys"])
    const v11 = v10.keys();
    // v11 = .object()
}
for (let v15 = 0; v15 < 100; v15 = v15 + 1) {
    const v16 = v1(v1,v1);
    // v16 = .unknown
}
}
main();

