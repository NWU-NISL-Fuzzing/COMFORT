function main() {
const v2 = (100).toLocaleString();
// v2 = .unknown
const v3 = v2.toLocaleString();
// v3 = .unknown
const v6 = new Int32Array("byteOffset");
// v6 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "byteOffset", "byteLength", "length", "buffer"], withMethods: ["fill", "every", "set", "reduceRight", "sort", "join", "copyWithin", "find", "lastIndexOf", "values", "subarray", "reverse", "filter", "slice", "some", "indexOf", "includes", "findIndex", "keys", "forEach", "map", "reduce", "entries"])
const v7 = Reflect.defineProperty(v6,v3,v6);
// v7 = .boolean
}
main();

