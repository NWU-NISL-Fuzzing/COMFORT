function main() {
const v0 = "z5wvZqnT/I";
// v0 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["padEnd", "split", "charAt", "match", "lastIndexOf", "charCodeAt", "trim", "startsWith", "includes", "repeat", "search", "slice", "endsWith", "matchAll", "indexOf", "concat", "replace", "padStart", "substring", "codePointAt"])
function v1(v2,v3) {
    function v6(v7,v8) {
        const v9 = {deleteProperty:createGlobalObject,getPrototypeOf:v7,setPrototypeOf:v7};
        // v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "deleteProperty", "getPrototypeOf"])
        const v11 = new Proxy(Function,v9);
        // v11 = .unknown
        v11[0] = v11;
    }
    const v13 = new Promise(v6);
    // v13 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
for (let v17 = 0; v17 < 100; v17 = v17 + 1) {
    const v18 = v1(v1,v1);
    // v18 = .unknown
}
function v19(v20,v21) {
    const v23 = 5;
    // v23 = .integer
    let v24 = 0;
    const v25 = v24 + 1;
    // v25 = .primitive
    v24 = v25;
    const v27 = 7;
    // v27 = .integer
    let v28 = 0;
    const v29 = v28 + 1;
    // v29 = .primitive
    const v31 = [13.37,13.37,13.37,13.37];
    // v31 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v32 = v31.__proto__;
    // v32 = .object()
    v28 = v29;
    const v35 = [13.37,13.37,13.37,13.37];
    // v35 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v37 = [13.37,13.37,13.37,13.37];
    // v37 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    v35.constructor = 0;
}
for (let v41 = 0; v41 < 100; v41 = v41 + 1) {
    const v42 = v19(v19,v19);
    // v42 = .unknown
}
}
main();

