function main() {
const v0 = "2";
// v0 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["padEnd", "split", "charAt", "match", "lastIndexOf", "charCodeAt", "trim", "startsWith", "includes", "repeat", "search", "slice", "endsWith", "matchAll", "indexOf", "concat", "replace", "padStart", "substring", "codePointAt"])
function v3(v4,v5) {
    String.prototype = String;
    const v6 = v3(noInline,v4);
    // v6 = .unknown
    throw v4;
    const v8 = [13.37,13.37,13.37,13.37];
    // v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v9 = v8.__proto__;
    // v9 = .object()
}
const v11 = new Promise(v3);
// v11 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
main();

