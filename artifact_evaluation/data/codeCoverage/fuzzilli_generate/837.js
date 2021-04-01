function main() {
function v1(v2,v3) {
    const v5 = 8;
    // v5 = .integer
    let v6 = -3193985341;
    const v7 = v6 + 1;
    // v7 = .primitive
    v6 = v7;
    const v9 = [13.37,13.37,13.37,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v11 = [1337,1337,1337,1337];
    // v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v12 = v9 in v11;
    // v12 = .boolean
    const v13 = v1(noInline,v2);
    // v13 = .unknown
    const v14 = 0;
    // v14 = .integer
    const v15 = 7;
    // v15 = .integer
    const v17 = 3697200800;
    // v17 = .integer
    const v18 = [13.37,13.37,13.37,13.37];
    // v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v19 = Infinity;
    // v19 = .float
    const v20 = v18.__proto__;
    // v20 = .object()
    with (v20) {
    }
}
const v22 = new Promise(v1);
// v22 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
}
main();

