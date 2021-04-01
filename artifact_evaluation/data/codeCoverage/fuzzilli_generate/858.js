function main() {
const v2 = 6;
// v2 = .integer
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
delete "9".length;
const v6 = 3;
// v6 = .integer
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
const v13 = [13.37,13.37,13.37];
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["pop", "forEach", "find", "shift", "every", "join", "flatMap", "copyWithin", "splice", "keys", "unshift", "reverse", "fill", "reduce", "values", "lastIndexOf", "flat", "concat", "findIndex", "push", "entries", "sort", "slice", "toString", "includes", "filter", "reduceRight", "some", "toLocaleString", "map", "indexOf"])
const v14 = {b:ArrayBuffer,e:ArrayBuffer};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "e"])
const v15 = {a:ArrayBuffer,b:v13,c:ArrayBuffer,d:-3131930798,length:v14};
// v15 = .object(ofGroup: Object, withProperties: ["length", "c", "__proto__", "a", "d", "b"])
}
main();

