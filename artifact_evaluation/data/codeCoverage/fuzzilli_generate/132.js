function main() {
const v1 = 100;
// v1 = .integer
const v2 = 1;
// v2 = .integer
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v11 = [1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v12 = {b:1337,c:3697200800,valueOf:v11};
// v12 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "b", "__proto__"])
const v13 = Object(v12,...v6);
// v13 = .object()
const v14 = v13.__proto__;
// v14 = .unknown
const v16 = {set:createGlobalObject};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v18 = Object.defineProperty(v14,10,v16);
// v18 = .undefined
function v20(v21,v22) {
    let v25 = Float32Array;
    const v27 = {e:1337};
    // v27 = .object(ofGroup: Object, withProperties: ["e", "__proto__"])
    const v30 = [1337,1337,1337,1337];
    // v30 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v31 = {a:v27,b:gc,valueOf:1337,...v25,...13.37,...Float32Array};
    // v31 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "__proto__"], withMethods: ["b"])
    const v32 = {__proto__:v30,a:1337,c:1337,d:Function,e:v30,toString:1337};
    // v32 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__", "toString", "c", "a"])
    const v33 = v22 instanceof Object;
    // v33 = .boolean
}
for (let v36 = 1; v36 < 100; v36 = v36 + 1) {
    const v37 = v20(0,v36);
    // v37 = .unknown
}
let v39 = 13.37;
let v41 = 0;
const v42 = v41 + 1;
// v42 = .primitive
v41 = v42;
}
main();

