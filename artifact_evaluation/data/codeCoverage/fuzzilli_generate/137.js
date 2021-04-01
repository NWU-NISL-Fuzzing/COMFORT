function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
const v4 = [1337,13.37,13.37,1337,"gWKNCVM8cu","gWKNCVM8cu",v2];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
const v7 = [v4,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
v7[512] = 1337;
const v8 = v7.shift();
// v8 = .unknown
function v10(v11,v12,...v13) {
}
const v14 = v10(-2987865916,v10,v10);
// v14 = .unknown
try {
    const v17 = {get:v14};
    // v17 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
    const v19 = Object.defineProperty(split,0,v17);
    // v19 = .undefined
} catch(v20) {
}
}
main();

