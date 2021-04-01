function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v7 = [65536,"k**baeaDif","k**baeaDif",65536,13.37,13.37,1337,v6,"k**baeaDif"];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v8 = {e:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "e"])
const v9 = {__proto__:v4,a:v8,b:65536,d:13.37,length:1337,toString:gc};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "length", "d", "b"], withMethods: ["toString"])
let v10 = v4;
const v12 = [1337,1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v13 = false;
// v13 = .boolean
const v15 = Symbol.iterator;
// v15 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v16 = v12[v15];
// v16 = .unknown
const v17 = Symbol(v16);
// v17 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v18 = 1337 >>> v7;
// v18 = .integer | .bigint
const v19 = v12.forEach(Symbol,v4);
// v19 = .undefined
const v21 = [];
// v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v22 = v7.push;
// v22 = .unknown
const v23 = Reflect.apply(v22,v8,v21);
// v23 = .unknown
const v24 = Symbol(v23);
// v24 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
}
main();

