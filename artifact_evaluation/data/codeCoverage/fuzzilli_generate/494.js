function main() {
const v3 = {a:1337,b:13.37,valueOf:String};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "b"], withMethods: ["valueOf"])
const v4 = 0;
// v4 = .integer
const v5 = 100;
// v5 = .integer
const v6 = 1;
// v6 = .integer
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
const v9 = {};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v13 = [NaN,-2987865916,"flags"];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
const v16 = [v3,v3,1337,v8];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["reduce", "map", "forEach", "find", "keys", "indexOf", "copyWithin", "flatMap", "join", "reverse", "reduceRight", "unshift", "entries", "slice", "pop", "filter", "some", "lastIndexOf", "fill", "toLocaleString", "concat", "every", "values", "flat", "findIndex", "shift", "push", "sort", "splice", "includes", "toString"])
const v17 = String.fromCodePoint;
// v17 = .unknown
const v18 = Reflect.apply(v17,v9,v16);
// v18 = .unknown
const v19 = -2987865916;
// v19 = .integer
const v20 = v13[-3428058443];
// v20 = .unknown
const v22 = 8;
// v22 = .integer
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
}
main();

