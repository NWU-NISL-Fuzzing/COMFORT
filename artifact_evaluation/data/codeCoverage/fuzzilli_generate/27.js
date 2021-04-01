function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    const v9 = [13.37,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    const v11 = [1337,1337,1337,1337,1337];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    const v12 = [13.37,v9,"1",1337,1337,-2,-2];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    const v13 = {__proto__:v9,constructor:Infinity,d:1337,e:1337,toString:"1",valueOf:"1"};
    // v13 = .object(ofGroup: Object, withProperties: ["e", "constructor", "__proto__", "d", "valueOf", "toString"])
    const v14 = {__proto__:v12};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
    let v15 = v13;
    const v17 = gc(v11,v15,...v14,...v9,..."replace");
    // v17 = .undefined
    v2 = v3;
} while (v2 < 7);
const v18 = (v19,v20,v21,v22,v23) => {
};
for (let v29 = 0; v29 < 1337; v29 = v29 + 1) {
    const v31 = v18(Infinity,..."K8kVfh3v87",..."K8kVfh3v87",WeakMap);
    // v31 = .unknown
}
}
main();

