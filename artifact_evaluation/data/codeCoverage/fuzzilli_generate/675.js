function main() {
function v1(v2,v3) {
    let v6 = 0;
    do {
        const v7 = v6 + 1;
        // v7 = .primitive
        v6 = v7;
        const v11 = [5,1337,1337,1337];
        // v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
        const v12 = {__proto__:v11,a:v11,c:1337,d:Function,e:v11,toString:Function};
        // v12 = .object(ofGroup: Object, withProperties: ["d", "toString", "e", "__proto__", "c", "a"])
        const v14 = {get:String,set:String};
        // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
        const v16 = Object.defineProperty(v11,7,v14);
        // v16 = .undefined
        const v20 = [2.0];
        // v20 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
        const v21 = [String];
        // v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
        const v22 = [isFinite,2.0,v21,v20,7,7,v20,isFinite];
        // v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
        function v23(v24,v25) {
            const v28 = [3697200800,1337,1337,1337];
            // v28 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
            const v29 = v28[v6];
            // v29 = .unknown
            const v30 = arguments;
            // v30 = .object()
        }
        for (let v34 = 0; v34 < 100; v34 = v34 + 1) {
            const v35 = v23(v22,v34);
            // v35 = .unknown
        }
    } while (v6 < 5);
}
for (let v38 = 13.37; v38 < 100; v38 = v38 + 1) {
    const v39 = v1(v38,v1);
    // v39 = .unknown
}
}
main();

