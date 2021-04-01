function main() {
const v2 = [-1000000.0,-1000000.0,-1000000.0,-1000000.0];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v5 = [3697200800,v2,v4];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v6 = {a:3697200800,constructor:1337,e:3697200800,length:-1000000.0,toString:3697200800,valueOf:v5};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "toString", "constructor", "e", "a", "length"])
v4[1337] = v6;
const v9 = {get:String,set:String};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v11 = Object.defineProperty(v4,8,v9);
// v11 = .undefined
}
main();

