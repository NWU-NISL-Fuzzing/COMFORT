function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v5 = [13.37,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v6 = {__proto__:13.37,b:13.37,c:v3,e:v5,length:10,toString:1337};
// v6 = .object(ofGroup: Object, withProperties: ["length", "e", "toString", "__proto__", "c", "b"])
const v7 = {__proto__:DataView,b:1337,constructor:13.37,length:v3,toString:v6,valueOf:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "toString", "valueOf", "b", "constructor"])
function v8(v9,v10) {
    function v12(v13,v14) {
        return v7;
    }
    for (let v18 = 0; v18 < 100; v18 = v18 + 1) {
        let v19 = v9;
        const v21 = [arguments,13.37,13.37];
        // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
        const v23 = [v12,v19];
        // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
        const v24 = v21.findIndex;
        // v24 = .unknown
        const v25 = Reflect.apply(v24,arguments,v23);
        // v25 = .unknown
    }
}
for (let v29 = 0; v29 < 100; v29 = v29 + 1) {
    const v30 = v8(1,v29);
    // v30 = .unknown
}
}
main();

