function main() {
var v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
var v6 = [13.37,"DXDYH.Kw5u",v5,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
var v7 = {__proto__:Number,b:Number,c:"DXDYH.Kw5u",constructor:13.37,d:9,e:v6,valueOf:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "constructor", "d", "e", "__proto__"], withMethods: ["b", "__proto__"])
function v8(v9,v10) {
    var v15 = new ArrayBuffer(57734);
    // v15 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    var v16 = new DataView(v15,1337,v7);
    // v16 = .object(ofGroup: DataView, withProperties: ["__proto__", "byteLength", "byteOffset", "buffer"], withMethods: ["getUint8", "setInt16", "setFloat64", "getInt16", "getFloat32", "getUint32", "getInt8", "setFloat32", "setInt8", "getUint16", "setUint8", "getFloat64", "setUint16", "getInt32", "setUint32", "setInt32"])
}
var v18 = new Promise(v8);
// v18 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "catch", "then"])
}
main();

