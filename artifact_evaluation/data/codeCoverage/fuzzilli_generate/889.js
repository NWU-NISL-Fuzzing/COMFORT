function main() {
var v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
var v2 = {c:v1,constructor:v1,d:65535};
// v2 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "constructor", "c"])
var v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
function v5(v6,v7) {
    var v9 = [v2,v4];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
    var v10 = Reflect.apply(v9,"-9007199254740992",v9);
    // v10 = .unknown
}
var v12 = new Promise(v5);
// v12 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "catch", "then"])
}
main();

