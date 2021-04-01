function main() {
function v1(v2,v3) {
    const v4 = v1(noInline,v2);
    // v4 = .unknown
    const v7 = [13.37,13.37,13.37,13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v9 = [1337,1337,1337,1337];
    // v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v10 = [2491424043,v7,v9];
    // v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
    const v11 = 4;
    // v11 = .integer
    const v12 = 4;
    // v12 = .integer
    const v13 = v7 & v10;
    // v13 = .integer | .bigint
    const v14 = 0;
    // v14 = .integer
    const v15 = 10;
    // v15 = .integer
    const v16 = 1;
    // v16 = .integer
}
const v18 = new Promise(v1);
// v18 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
const v23 = [1337,65536,1337,1337];
// v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v24 = [65536,"k**baeaDif","k**baeaDif",65536,334999.16439259634,334999.16439259634,1337,v23,"k**baeaDif"];
// v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v27 = [13.37];
// v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
const v29 = {e:1337};
// v29 = .object(ofGroup: Object, withProperties: ["__proto__", "e"])
const v30 = {__proto__:v27,a:v29,b:1337,d:v24,length:1337,toString:gc};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "b", "a", "d"], withMethods: ["toString"])
}
main();

