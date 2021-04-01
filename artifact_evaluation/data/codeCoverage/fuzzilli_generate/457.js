function main() {
const v0 = 0;
// v0 = .integer
const v1 = 1337;
// v1 = .integer
const v2 = 1;
// v2 = .integer
function v4(v5,v6) {
    const v7 = v6 / v5;
    // v7 = .integer | .float | .bigint
    const v10 = 13.37;
    // v10 = .float
    const v11 = 0;
    // v11 = .integer
    const v12 = 1;
    // v12 = .integer
    const v13 = 100;
    // v13 = .integer
    const v14 = 3168844224;
    // v14 = .integer
    let v16 = 0;
    const v18 = [13.37,13.37,13.37,13.37];
    // v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    let v22 = 2594067260;
    const v24 = "2".concat(v16,v22,4,0,v18);
    // v24 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["padEnd", "split", "charAt", "match", "lastIndexOf", "charCodeAt", "trim", "startsWith", "includes", "repeat", "search", "slice", "endsWith", "matchAll", "indexOf", "concat", "replace", "padStart", "substring", "codePointAt"])
    const v25 = [v5,13.37,v6,13.37];
    // v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v26 = [13.37,13.37,13.37,13.37];
    // v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v27 = v26.__proto__;
    // v27 = .object()
    with (v27) {
        let v30 = 0;
        while (v30 < 10) {
            const v31 = v30 + 1;
            // v31 = .primitive
            v30 = v31;
        }
    }
}
for (let v34 = 1; v34 < 100; v34 = v34 + 1) {
    const v35 = v4(0,v34);
    // v35 = .unknown
}
}
main();

