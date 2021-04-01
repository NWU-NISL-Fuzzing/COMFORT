function main() {
const v5 = [1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v6 = [1024,"toString",1337,1024,v5,13.37,Object,v5];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v7 = {a:v6,b:13.37,c:13.37,constructor:13.37,length:Object,valueOf:Object};
// v7 = .object(ofGroup: Object, withProperties: ["constructor", "a", "c", "__proto__", "b"], withMethods: ["length", "valueOf"])
const v10 = new Uint32Array(v7);
// v10 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "__proto__", "length"], withMethods: ["keys", "lastIndexOf", "some", "includes", "reduceRight", "find", "fill", "map", "reverse", "values", "entries", "forEach", "reduce", "filter", "join", "copyWithin", "sort", "subarray", "set", "slice", "every", "indexOf", "findIndex"])
function v11(v12,v13) {
    const v15 = new Float32Array(Float32Array);
    // v15 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "constructor", "buffer", "byteLength", "length", "byteOffset"], withMethods: ["sort", "fill", "lastIndexOf", "findIndex", "entries", "copyWithin", "reverse", "forEach", "filter", "includes", "map", "set", "keys", "every", "subarray", "reduceRight", "join", "some", "values", "find", "reduce", "indexOf", "slice"])
    const v16 = v10.set(v15,gc);
    // v16 = .undefined
}
const v18 = new Promise(v11);
// v18 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
main();

