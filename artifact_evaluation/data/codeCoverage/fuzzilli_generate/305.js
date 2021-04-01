function main() {
var v4 = new Proxy(Symbol,Reflect);
// v4 = .unknown
var v6 = 13.37;
function v10(v11,...v12) {
    var v14 = [];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
    var v16 = [1337,1337];
    // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
    var v20 = {b:v14,constructor:13.37};
    // v20 = .object(ofGroup: Object, withProperties: ["b", "constructor", "__proto__"])
    var v22 = [13.37];
    // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
    var v23 = [];
    // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
    var v24 = async (v25,v26,v27,v28) => {
        var v29 = {};
        // v29 = .object(ofGroup: Object, withProperties: ["__proto__"])
        var v31 = v6["HRUspxmAnv"];
        // v31 = .unknown
        var v32 = "5".substring(v31,v4);
        // v32 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "search", "lastIndexOf", "matchAll", "endsWith", "substring", "split", "charCodeAt", "match", "charAt", "padStart", "slice", "repeat", "trim", "replace", "concat", "codePointAt", "startsWith", "indexOf", "includes"])
        var v33 = {get:v24,set:v24};
        // v33 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
        var v35 = Object.defineProperty(v22,"5",v33);
        // v35 = .undefined
        var v38 = {__proto__:String,set:Object};
        // v38 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["__proto__", "set"])
        var v40 = Object.defineProperty(v4,"valueOf",v38);
        // v40 = .undefined
        var v42 = [v26,...v35,...v29,1337,13.37,v22,...v23,...v27,65535,...v20];
        // v42 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["copyWithin", "keys", "forEach", "fill", "values", "flat", "indexOf", "reduce", "some", "sort", "toLocaleString", "reduceRight", "flatMap", "pop", "join", "shift", "concat", "find", "entries", "filter", "includes", "unshift", "map", "every", "splice", "findIndex", "lastIndexOf", "push", "toString", "reverse", "slice"])
    };
    var v43 = v24("undefined",v14,v16,1337);
    // v43 = .unknown
}
var v44 = v10(13.37,v10,4294967296);
// v44 = .unknown
}
main();

