function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    function v4(v5,v6) {
        for (let v10 = 0; v10 < 100; v10 = v10 + 1) {
        }
        const v14 = [1337,1337,1337,1337];
        // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
        const v17 = [1337,1337,1337,1337];
        // v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["concat", "fill", "indexOf", "entries", "forEach", "find", "reverse", "slice", "flat", "reduce", "join", "findIndex", "reduceRight", "some", "copyWithin", "toString", "pop", "filter", "map", "splice", "keys", "unshift", "sort", "includes", "flatMap", "shift", "values", "every", "toLocaleString", "push", "lastIndexOf"])
        const v18 = {__proto__:v17,a:1337,c:1337,d:Function,e:v17,toString:Function};
        // v18 = .object(ofGroup: Object, withProperties: ["c", "d", "__proto__", "e", "toString", "a"])
        const v19 = v18[1337];
        // v19 = .unknown
        const v22 = {apply:gc,call:v19,construct:gc,defineProperty:gc,deleteProperty:gc,get:Object,getPrototypeOf:Boolean,ownKeys:gc,preventExtensions:v19,setPrototypeOf:Object};
        // v22 = .object(ofGroup: Object, withProperties: ["call", "preventExtensions", "__proto__"], withMethods: ["defineProperty", "apply", "setPrototypeOf", "deleteProperty", "construct", "getPrototypeOf", "ownKeys", "get"])
        const v24 = new Proxy(v14,v22);
        // v24 = .unknown
        v24.length = Proxy;
        function v26(v27,v28) {
        }
        const v29 = new v26(String,String);
        // v29 = .unknown
        v26.prototype = String;
    }
    const v31 = new Promise(v4);
    // v31 = .object(ofGroup: Promise, withProperties: ["__proto__"], withMethods: ["finally", "then", "catch"])
    v2 = v3;
} while (v2 < 5);
}
main();

