function main() {
var v3 = {__proto__:13.37,constructor:1337,length:13.37,toString:Int32Array};
// v3 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "toString"])
var v6 = [1337,v3];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["flatMap", "includes", "shift", "find", "unshift", "push", "sort", "some", "slice", "values", "entries", "findIndex", "splice", "map", "pop", "reduceRight", "copyWithin", "toString", "concat", "lastIndexOf", "filter", "flat", "forEach", "indexOf", "fill", "keys", "reduce", "toLocaleString", "every", "reverse", "join"])
var v8 = CBOR.encode(v6);
// v8 = .object()
var v9 = new DataView(v8);
// v9 = .object(ofGroup: DataView, withProperties: ["byteLength", "__proto__", "buffer", "byteOffset"], withMethods: ["setInt8", "getUint32", "setInt16", "getUint8", "setUint8", "getInt32", "getUint16", "getFloat32", "setFloat64", "setUint32", "getInt16", "setInt32", "getInt8", "setUint16", "getFloat64", "setFloat32"])
var v11 = v9.getInt32(9,13.37);
// v11 = .integer
var v12 = "68q.30a3Ob";
// v12 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["startsWith", "includes", "repeat", "endsWith", "lastIndexOf", "match", "slice", "padStart", "replace", "concat", "charAt", "indexOf", "padEnd", "trim", "charCodeAt", "substring", "split", "codePointAt", "matchAll", "search"])
}
main();

