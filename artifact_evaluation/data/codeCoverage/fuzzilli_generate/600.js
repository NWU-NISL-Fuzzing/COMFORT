function main() {
const v2 = 0;
// v2 = .integer
const v3 = 100;
// v3 = .integer
const v4 = 1;
// v4 = .integer
const v9 = [13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v11 = [13.37,v9,"1",1337,1337,-2,-2];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v12 = {__proto__:v11};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v15 = {get:Object,set:Symbol};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v17 = Object.defineProperty(v11,65536,v15);
// v17 = .undefined
const v18 = "boolean".startsWith("boolean",3257356354);
// v18 = .boolean
const v19 = 0;
// v19 = .integer
const v20 = 7;
// v20 = .integer
const v21 = 1;
// v21 = .integer
const v23 = 3;
// v23 = .integer
let v24 = 0;
const v25 = "1";
// v25 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "endsWith", "startsWith", "lastIndexOf", "matchAll", "repeat", "concat", "match", "includes", "padEnd", "charAt", "substring", "charCodeAt", "replace", "split", "indexOf", "trim", "padStart", "search", "codePointAt"])
const v26 = 3082578527;
// v26 = .integer
const v27 = 1;
// v27 = .integer
const v28 = 0;
// v28 = .integer
const v29 = 100;
// v29 = .integer
const v30 = 1;
// v30 = .integer
const v33 = [13.37,13.37,13.37,13.37,13.37];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v34 = new Proxy(v33,v33);
// v34 = .unknown
let v35 = v34;
v35[1024] = v35;
}
main();

