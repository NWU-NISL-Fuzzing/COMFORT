function main() {
function v1(v2,v3) {
    const v5 = (1000000000.0).toLocaleString();
    // v5 = .unknown
    const v7 = [v2];
    // v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v8 = {constructor:v5,d:"N*bi7XwUPB",toString:v7};
    // v8 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "d", "toString"])
    const v13 = [v1,2483470790,v8,JSON,v2];
    // v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v14 = JSON.stringify(v13,-1,13.37);
    // v14 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["padEnd", "split", "charAt", "match", "lastIndexOf", "charCodeAt", "trim", "startsWith", "includes", "repeat", "search", "slice", "endsWith", "matchAll", "indexOf", "concat", "replace", "padStart", "substring", "codePointAt"])
    const v15 = JSON.parse(v14,v2);
    // v15 = .unknown
}
function v17(v18,v19) {
    function v22(v23,v24) {
        return 10;
    }
    const v25 = v22(v22,v22);
    // v25 = .unknown
    const v26 = String.fromCharCode(v25,1337);
    // v26 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["padEnd", "split", "charAt", "match", "lastIndexOf", "charCodeAt", "trim", "startsWith", "includes", "repeat", "search", "slice", "endsWith", "matchAll", "indexOf", "concat", "replace", "padStart", "substring", "codePointAt"])
    const v27 = v18(v26);
    // v27 = .unknown
}
const v28 = v17(v1,gc);
// v28 = .unknown
}
main();

