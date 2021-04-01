function main() {
const v1 = {constructor:256};
// v1 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__"])
const v3 = Object();
// v3 = .object()
v3.__proto__ = null;
Object.__proto__ = v3;
let v6 = 1337;
const v8 = [13.37,v6,13.37,13.37];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
let v10 = "flags";
let v12 = 0;
const v13 = 1000;
// v13 = .integer
let v15 = undefined;
for (let v19 = 0; v19 < 100; v19 = v19 + 1) {
}
const v20 = v1[7];
// v20 = .unknown
const v22 = {set:v20};
// v22 = .object(ofGroup: Object, withProperties: ["set", "__proto__"])
const v24 = Object.defineProperty(v8,4126665560,v22);
// v24 = .undefined
const v25 = 0;
// v25 = .integer
const v26 = 100;
// v26 = .integer
const v27 = 1;
// v27 = .integer
const v29 = 6;
// v29 = .integer
let v30 = 0;
const v31 = v30 + 1;
// v31 = .primitive
v30 = v31;
}
main();

