function main() {
const v2 = 0;
// v2 = .integer
const v3 = 8;
// v3 = .integer
const v4 = 1;
// v4 = .integer
const v7 = [13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v9 = [Symbol,"YEl96px1t8",1337,"YEl96px1t8",Symbol,v7,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
const v10 = {c:Symbol,constructor:v9,e:1337};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "e"], withMethods: ["c"])
const v11 = {__proto__:v10,b:Symbol,c:1337,e:-2147483647,length:-2147483647};
// v11 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "length", "c"], withMethods: ["b"])
const v15 = [0.0,0.0];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
function v16(v17,v18) {
    const v19 = ArrayBuffer[65537];
    // v19 = .unknown
    const v24 = [13.37,Infinity];
    // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    const v26 = [13.37,1337,"1",1337,Infinity,-2,-2];
    // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    const v27 = {__proto__:v24,constructor:v26,d:1337,e:1337,toString:"1",valueOf:"1"};
    // v27 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "valueOf", "e", "toString", "d"])
    const v29 = [13.37,13.37,13.37,13.37,13.37];
    // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])
    for (const v30 in v29) {
        let v31 = v30;
        v29.length = v31;
        const v32 = v15.constructor;
        // v32 = .object(ofGroup: Function, withProperties: ["length", "__proto__", "name", "constructor", "arguments", "caller", "prototype"], withMethods: ["call", "bind", "apply"]) + .function([.integer] => .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"])) + .constructor([.integer] => .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["toString", "indexOf", "unshift", "shift", "concat", "sort", "reduceRight", "flatMap", "forEach", "entries", "every", "values", "push", "find", "fill", "toLocaleString", "join", "filter", "pop", "reverse", "some", "reduce", "splice", "includes", "lastIndexOf", "findIndex", "flat", "map", "slice", "keys", "copyWithin"]))
        const v33 = {a:v30,b:v11,d:v7,e:13.37,length:v17,toString:v27,valueOf:v19};
        // v33 = .object(ofGroup: Object, withProperties: ["d", "b", "__proto__", "toString", "length", "a", "valueOf", "e"])
    }
}
for (let v39 = 0; v39 < 100; v39 = v39 + 1) {
    const v40 = v16("127",13.37);
    // v40 = .unknown
}
}
main();

