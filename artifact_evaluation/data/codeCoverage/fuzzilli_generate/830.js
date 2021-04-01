function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v7 = [13.37,"symbol",v6,"symbol",13.37];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v8 = {__proto__:v7,a:2147483648,b:NaN,c:2147483648,constructor:v4,e:v4,toString:v6,valueOf:v4};
// v8 = .object(ofGroup: Object, withProperties: ["b", "c", "toString", "constructor", "valueOf", "__proto__", "a", "e"])
const v9 = {constructor:v6,d:v6,e:1337,length:1337};
// v9 = .object(ofGroup: Object, withProperties: ["e", "length", "d", "constructor", "__proto__"])
let v10 = NaN;
const v14 = 0;
// v14 = .integer
const v15 = 1;
// v15 = .integer
const v16 = 1;
// v16 = .integer
const v17 = [null];
// v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v19 = {a:1337,b:1337,c:"-1024",constructor:2104912608,d:"-1024",valueOf:v17};
// v19 = .object(ofGroup: Object, withProperties: ["d", "c", "constructor", "valueOf", "b", "__proto__", "a"])
const v20 = typeof v19;
// v20 = .string
const v22 = 3;
// v22 = .integer
let v23 = 0;
function v24(v25,v26) {
    let v29 = v20;
    const v30 = {e:null};
    // v30 = .object(ofGroup: Object, withProperties: ["__proto__", "e"])
    const v33 = {a:v30,b:gc,valueOf:1337,...v29,...-785191.4416695875,...Float32Array};
    // v33 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "a"], withMethods: ["b"])
    return Float32Array;
}
for (let v36 = 1; v36 < 100; v36 = v36 + 1) {
    const v37 = v24(v36,v36);
    // v37 = .unknown
}
let v38 = v9;
try {
    v38 = 1;
} catch(v39) {
    v38 = v23;
}
const v40 = v24(v17,v38);
// v40 = .unknown
}
main();

