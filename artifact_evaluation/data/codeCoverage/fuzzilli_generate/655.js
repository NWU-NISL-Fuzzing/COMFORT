function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v3 = {__proto__:v2,a:1337,c:1337,d:Function,e:v2,toString:Function};
// v3 = .object(ofGroup: Object, withProperties: ["d", "toString", "c", "e", "__proto__", "a"])
const v4 = v3.copyWithin(Function);
// v4 = .unknown
const v6 = 1;
// v6 = .integer
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
const v9 = 0;
// v9 = .integer
const v10 = 5;
// v10 = .integer
const v11 = 1;
// v11 = .integer
const v12 = 0;
// v12 = .integer
const v13 = 0;
// v13 = .integer
const v14 = 1;
// v14 = .integer
}
main();

