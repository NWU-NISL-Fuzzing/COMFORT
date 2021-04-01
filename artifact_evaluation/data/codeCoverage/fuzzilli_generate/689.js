function main() {
var v1 = "matchAll"[3883119531];
// v1 = .unknown
var v4 = [13.37,7,13.37,13.37,7];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
var v5 = v4;
var v6 = {call:v1,construct:v1,preventExtensions:v1,setPrototypeOf:v1};
// v6 = .object(ofGroup: Object, withProperties: ["call", "__proto__", "construct", "preventExtensions", "setPrototypeOf"])
var v8 = new Proxy(v5,v6);
// v8 = .unknown
with (v8) {
    var v10 = 5;
    // v10 = .integer
    var v11 = 0;
    var v12 = v11 + 1;
    // v12 = .primitive
    v11 = v12;
}
var v13 = 13.37;
// v13 = .float
var v14 = 0;
// v14 = .integer
var v15 = 10;
// v15 = .integer
var v16 = 1;
// v16 = .integer
}
main();

