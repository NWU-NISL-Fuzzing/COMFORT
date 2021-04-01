function main() {
function v3(v4,v5) {
    const v6 = [100];
    // v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v7 = {constructor:4677756,d:Function,toString:v6};
    // v7 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "d", "toString"])
    const v12 = [1337,1337,v7,JSON,v5];
    // v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v13 = JSON.stringify(v12,-1,13.37);
    // v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["padEnd", "split", "charAt", "match", "lastIndexOf", "charCodeAt", "trim", "startsWith", "includes", "repeat", "search", "slice", "endsWith", "matchAll", "indexOf", "concat", "replace", "padStart", "substring", "codePointAt"])
    const v14 = JSON.parse(v13,v4);
    // v14 = .unknown
    return v12;
}
const v15 = v3(v3,v3);
// v15 = .unknown
}
main();

