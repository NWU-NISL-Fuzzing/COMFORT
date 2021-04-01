function main() {
let v1 = 0;
const v5 = {__proto__:Reflect,a:13.37,e:6};
// v5 = .object(ofGroup: Object, withProperties: ["e", "a", "__proto__"])
let v6 = v5;
const v12 = [1337,1337,1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v13 = {a:377337.89828218217,e:"c",toString:1,valueOf:v12};
// v13 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "e", "a", "__proto__"])
async function v14(v15,v16) {
    const v19 = Math.sqrt(v15,3);
    // v19 = .number
}
for (let v22 = 8; v22 < 100; v22 = v22 + 1) {
    const v23 = v14(v6,v13);
    // v23 = .unknown
}
const v24 = v14(v13,v1);
// v24 = .unknown
}
main();

