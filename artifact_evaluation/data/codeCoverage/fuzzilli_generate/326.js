function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v6 = [Uint16Array,v3,13.37,v3,13.37,Uint16Array];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v7 = {__proto__:v5,a:"bigint",b:Uint16Array,c:"bigint",d:v3,e:v3,length:v6,valueOf:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "b", "e", "a", "d", "valueOf", "c"])
const v9 = v7.toLocaleString();
// v9 = .unknown
const v10 = RegExp(v9);
// v10 = .object(ofGroup: RegExp, withProperties: ["global", "source", "multiline", "__proto__", "unicode", "flags", "dotAll", "sticky", "ignoreCase"], withMethods: ["compile", "test", "exec"]) + .regexp
async function v11(v12,v13) {
    const v14 = 7;
    // v14 = .integer
    const v15 = v10.exec(v9);
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
}
for (let v19 = 0; v19 < 100; v19 = v19 + 1) {
    const v20 = v11(v19,v19);
    // v20 = .unknown
}
let v22 = "65536";
const v24 = new ArrayBuffer(v22);
// v24 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v26 = new DataView(v24);
// v26 = .object(ofGroup: DataView, withProperties: ["buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["getInt8", "getUint16", "setUint8", "getInt32", "setUint16", "setInt32", "getInt16", "getFloat32", "setUint32", "setInt8", "getFloat64", "setFloat32", "getUint8", "getUint32", "setInt16", "setFloat64"])
for (let v30 = 0; v30 != 100; v30 = v30 + 1) {
    const v33 = new Float64Array("string");
    // v33 = .object(ofGroup: Float64Array, withProperties: ["length", "__proto__", "constructor", "buffer", "byteOffset", "byteLength"], withMethods: ["forEach", "filter", "fill", "keys", "copyWithin", "includes", "every", "reduce", "slice", "find", "findIndex", "sort", "set", "some", "lastIndexOf", "reverse", "map", "values", "entries", "indexOf", "subarray", "reduceRight", "join"])
    async function v34(v35,v36) {
        const v37 = v26.getUint32(v36);
        // v37 = .integer
    }
    const v38 = v34("string",v33);
    // v38 = .unknown
}
}
main();

