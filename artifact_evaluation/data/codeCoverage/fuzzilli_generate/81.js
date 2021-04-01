function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v5 = {a:1337,constructor:v4};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "a"])
const v6 = {constructor:v2,e:"source",toString:v5};
// v6 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "__proto__", "e"])
const v12 = [1337,1337,1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v13 = [1337,Map,13.37,"2147483647",v12];
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v14 = {length:v12,valueOf:13.37};
// v14 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length"])
const v15 = {call:v14,deleteProperty:v13,getOwnPropertyDescriptor:"2147483647",setPrototypeOf:v13};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf", "call", "deleteProperty", "getOwnPropertyDescriptor"])
const v17 = new Proxy(v12,v15);
// v17 = .unknown
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
for (let v27 = 0; v27 < 9; v27 = v27 + 1) {
    async function v28(v29,v30,v31,v32) {
        v17[-268435456] = v6;
    }
    const v33 = v28(v28,13.37,4,v27);
    // v33 = .unknown
}
v21 = v22;
const v34 = new Uint8ClampedArray(0);
// v34 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "__proto__", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["entries", "values", "reduce", "indexOf", "copyWithin", "fill", "sort", "filter", "slice", "forEach", "map", "every", "includes", "set", "reduceRight", "some", "findIndex", "reverse", "find", "join", "lastIndexOf", "subarray", "keys"])
}
main();

