function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v5 = {__proto__:9007199254740993,a:1337,d:9007199254740993,e:v3,length:13.37,valueOf:"LWZebZtscV"};
// v5 = .object(ofGroup: Object, withProperties: ["length", "d", "valueOf", "a", "__proto__", "e"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
function v8(v9,v10) {
    const v12 = (1000000000.0).toLocaleString();
    // v12 = .unknown
    const v14 = [v7];
    // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    v14[6] = v12;
    const v15 = {constructor:-747650.5748097331,d:v10,toString:v14};
    // v15 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "__proto__"], withMethods: ["d"])
    const v20 = [v8,-2510862370,v15,JSON,v9];
    // v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v21 = JSON.stringify(v20,-1,13.37);
    // v21 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["padEnd", "split", "charAt", "match", "lastIndexOf", "charCodeAt", "trim", "startsWith", "includes", "repeat", "search", "slice", "endsWith", "matchAll", "indexOf", "concat", "replace", "padStart", "substring", "codePointAt"])
    return v21;
}
const v22 = v8(v8,v5);
// v22 = .unknown
const v23 = v8(v22,v22);
// v23 = .unknown
const v24 = eval(v23);
// v24 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["padEnd", "split", "charAt", "match", "lastIndexOf", "charCodeAt", "trim", "startsWith", "includes", "repeat", "search", "slice", "endsWith", "matchAll", "indexOf", "concat", "replace", "padStart", "substring", "codePointAt"])
}
main();

