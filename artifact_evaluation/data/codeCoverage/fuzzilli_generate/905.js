function main() {
function v1(v2,v3) {
    const v6 = [v3,Function,-2147483649,-2147483649];
    // v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    let v7 = v6;
    const v8 = (1337).toLocaleString();
    // v8 = .unknown
    const v9 = v7.join(v8);
    // v9 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["padEnd", "split", "charAt", "match", "lastIndexOf", "charCodeAt", "trim", "startsWith", "includes", "repeat", "search", "slice", "endsWith", "matchAll", "indexOf", "concat", "replace", "padStart", "substring", "codePointAt"])
    const v10 = Function(v9);
    // v10 = .unknown
}
const v12 = new Promise(v1);
// v12 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
main();

