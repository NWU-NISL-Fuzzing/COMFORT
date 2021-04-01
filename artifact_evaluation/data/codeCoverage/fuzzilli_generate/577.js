function main() {
const v1 = 0;
// v1 = .integer
const v2 = 100;
// v2 = .integer
const v3 = 1;
// v3 = .integer
const v5 = 4;
// v5 = .integer
let v6 = 0;
const v7 = 0;
// v7 = .integer
const v8 = 100;
// v8 = .integer
const v9 = 1;
// v9 = .integer
const v11 = 5;
// v11 = .integer
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
let v15 = 1337;
function v16(v17,v18,v19,v20,v21) {
    const v24 = [13.37,13.37,128,13.37,13.37];
    // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
    const v25 = v18 instanceof Set;
    // v25 = .boolean
    v15 = v25;
    const v29 = [v17];
    // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
    arguments[861107838] = 0;
    const v30 = v24.indexOf;
    // v30 = .unknown
    const v31 = Reflect.apply(v30,arguments,v29);
    // v31 = .unknown
}
for (let v35 = 0; v35 < 100; v35 = v35 + 1) {
    const v36 = v16(v15,v35,v16,v15,v16);
    // v36 = .unknown
}
}
main();

